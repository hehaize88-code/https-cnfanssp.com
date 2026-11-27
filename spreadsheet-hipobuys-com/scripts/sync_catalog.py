"""Build search caches from the public cnfanssp.com catalog with Python 3 and Pillow.

Start each refresh with a fresh cache. Resume an interrupted refresh by reusing
its cache directory. Use --phase to rerun only a failed stage.
"""
import argparse
import concurrent.futures as futures
import hashlib
import html
from html.parser import HTMLParser
import http.client
import io
import json
import os
from pathlib import Path
import re
import ssl
import subprocess
import tempfile
import threading
from urllib.parse import urljoin, urlsplit
from urllib.request import getproxies

from PIL import Image, ImageOps

ORIGIN = "https://www.cnfanssp.com"
CATEGORIES = {
    "shoes": "shoes", "hoodies-sweaters": "hoodies", "t-shirts": "tshirts",
    "jackets": "jackets", "pants-shorts": "pants", "headwear": "headwear",
    "accessories": "accessories", "short-sets": "sets", "electronics": "electronics",
    "other-stuff": "other", "jersey": "jerseys",
}
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--cache", type=Path, required=True)
parser.add_argument("--out", type=Path, required=True)
parser.add_argument("--workers", type=int, default=8)
parser.add_argument("--reverse", action="store_true")
parser.add_argument("--phase", choices=["list", "detail", "images", "export", "all"], default="all")
args = parser.parse_args()
for name in ("lists", "details", "hashes"):
    (args.cache / name).mkdir(parents=True, exist_ok=True)
args.out.mkdir(parents=True, exist_ok=True)


def write(path, data):
    with tempfile.NamedTemporaryFile("w", encoding="utf8", dir=path.parent, delete=False) as tmp:
        json.dump(data, tmp, ensure_ascii=False, separators=(",", ":"))
    os.replace(tmp.name, path)


connections = threading.local()
ssl_context = ssl.create_default_context()
proxy = urlsplit(getproxies().get("https", ""))


def fetch(url):
    target = urlsplit(url)
    # Keep a connection per thread and image host to avoid a handshake per thumbnail.
    if target.scheme == "https" and proxy.scheme in ("", "http") and not proxy.username:
        if not hasattr(connections, "by_host"):
            connections.by_host = {}
        for attempt in range(2):
            connection = connections.by_host.get(target.netloc)
            if not connection:
                connection = http.client.HTTPSConnection(
                    proxy.hostname or target.hostname,
                    proxy.port if proxy.hostname else target.port,
                    timeout=23, context=ssl_context,
                )
                if proxy.hostname:
                    connection.set_tunnel(target.hostname, target.port or 443)
                connections.by_host[target.netloc] = connection
            try:
                path = target.path + ("?" + target.query if target.query else "")
                connection.request("GET", path, headers={"User-Agent": "curl/8.14.1", "Accept": "*/*"})
                response = connection.getresponse()
                data = response.read()
                if response.status == 200:
                    return data
                if response.status in (301, 302, 303, 307, 308):
                    break
                raise ValueError(f"HTTP {response.status} for {url}")
            except (OSError, http.client.HTTPException):
                connection.close()
                connections.by_host.pop(target.netloc, None)
                if attempt:
                    raise
    return subprocess.check_output(
        ["curl", "--silent", "--show-error", "--fail", "--location", "--max-time", "23", url],
        stderr=subprocess.DEVNULL,
    )


def run(operation, jobs):
    failed = []
    with futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
        work = {pool.submit(operation, job): job for job in jobs}
        for count, task in enumerate(futures.as_completed(work), 1):
            try:
                task.result()
            except Exception as error:
                failed.append({"job": str(work[task])[:180], "error": str(error)[:200]})
            if count % 250 == 0:
                print(operation.__name__, count, "/", len(work), "failed", len(failed), flush=True)
    if failed:
        print(operation.__name__, "failed:", len(failed), failed[:5], flush=True)
    return failed


def photo_url(src):
    if not src or src.startswith("data:") or urlsplit(src).path.endswith("/not_adv.jpg"):
        return ""
    url = urlsplit(urljoin(ORIGIN, html.unescape(src)))
    if url.hostname in ("cnfanssp.com", "www.cnfanssp.com") and url.path.startswith(("/uploads/", "/public/upload/")):
        return url.path + ("?" + url.query if url.query else "")
    if url.scheme == "https" and url.hostname and not url.username and not url.password:
        return url.geturl()
    return ""


def list_page(job):
    slug, page, tid = job
    path = args.cache / "lists" / f"{slug}-{page}.json"
    if path.exists():
        return json.loads(path.read_text())
    url = f"{ORIGIN}/{slug}/" + (f"list_{tid}_{page}/" if page > 1 else "")
    contents = fetch(url).decode(errors="replace")
    rows = []
    for card in re.split(r'<div class="product-card\b', contents)[1:]:
        def field(pattern):
            match = re.search(pattern, card, re.S)
            if not match:
                raise ValueError(f"Card missing {pattern!r} on {url}")
            return html.unescape(match[1].strip())

        rows.append({
            "recordId": field(r'data-id="(\d+)"'),
            "name": field(r'class="product-name">(.*?)</h3>'),
            "date": int(field(r'data-date="(\d+)"')),
            "views": int(field(r'class="product-views">.*?<span>(\d+)')),
            "image": photo_url(field(r'data-src="([^"]+)"')),
            "priceCny": float(field(r'class="product-price">([\d.]+)')),
            "category": CATEGORIES.get(slug.lower(), ""),
        })
    if not rows:
        raise ValueError(f"Missing listing rows on {url}")
    result = [rows, re.findall(r"list_(\d+)_(\d+)/", contents)]
    write(path, result)
    return result


class PhotoGallery(HTMLParser):
    """Read photos in the current product's containers, including named QC groups."""

    void_tags = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}
    gallery_classes = {"product-detail", "product-gallery", "product-description", "product-styles", "sku-gallery", "variant-gallery"}

    def __init__(self):
        super().__init__()
        self.stack = []
        self.images = []
        self.qc = []

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        classes = (values.get("class") or "").lower().split()
        in_gallery = bool(self.gallery_classes.intersection(classes))
        in_qc = any(name.startswith("qc-photo") or name == "qc-gallery" for name in classes)
        if self.stack:
            in_gallery |= self.stack[-1][1]
            in_qc |= self.stack[-1][2]
        if tag == "img" and (in_gallery or in_qc):
            path = photo_url(values.get("data-src") or values.get("data-original") or values.get("src") or "")
            if not path:
                return
            if path not in self.images:
                self.images.append(path)
            labeled_qc = in_qc or re.search(r"\bqc\b|quality[\s_-]*check|质检", values.get("alt", ""), re.I)
            if labeled_qc and path not in self.qc:
                self.qc.append(path)
        elif tag not in self.void_tags:
            self.stack.append((tag, in_gallery, in_qc))

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                del self.stack[i:]
                break


def parse_detail(src):
    if '<div class="product-detail">' not in src:
        raise ValueError("Missing product detail")
    parser = PhotoGallery()
    section = src.split('<div class="detail-container">', 1)[-1].split('<section class="product-list">', 1)[0]
    parser.feed(section)
    buy = re.search(r'https?://(?:www\.)?weidian\.com/item\.html\?itemid=(\d+)', section, re.I)
    breadcrumb = re.search(r'<div class="breadcrumb">(.*?)</div>', src, re.S)
    slugs = re.findall(r"""href=["']/([\w-]+)/["']""", breadcrumb[1]) if breadcrumb else []
    category = next((CATEGORIES[slug.lower()] for slug in reversed(slugs) if slug.lower() in CATEGORIES), "other")
    return {"images": parser.images, "qc": parser.qc, "item": buy[1] if buy else None, "format": 2, "category": category}


def detail(row):
    key = row["recordId"]
    path = args.cache / "details" / f"{key}.json"
    if path.exists() and json.loads(path.read_text()).get("format") == 2:
        return
    src = fetch(f"{ORIGIN}/AllProducts/{key}.html").decode(errors="replace")
    write(path, parse_detail(src))


def image_hash(path):
    cache_name = hashlib.sha256(path.encode()).hexdigest() + ".json"
    file = args.cache / "hashes" / cache_name
    if file.exists() and len(json.loads(file.read_text())) >= 3:
        return
    data = fetch(urljoin(ORIGIN, path))
    with Image.open(io.BytesIO(data)) as original:
        thumb = ImageOps.exif_transpose(original).convert("RGB").resize((9, 8), Image.Resampling.BILINEAR).convert("L")
        pixels = thumb.tobytes()
        bits = "".join(
            "1" if pixels[y * 9 + x] > pixels[y * 9 + x + 1] else "0"
            for y in range(8) for x in range(8)
        )
    write(file, [path, f"{int(bits, 2):016x}", hashlib.sha256(data).hexdigest()])


def rows_now():
    rows = {}
    for file in sorted((args.cache / "lists").glob("*.json")):
        for row in json.loads(file.read_text())[0]:
            key = row["recordId"]
            if key not in rows or row["category"]:
                rows[key] = row
    return sorted(rows.values(), key=lambda row: row["date"], reverse=True)


def collect_listing(slug):
    page, tid = 1, None
    seen_pages = set()
    while True:
        rows, links = list_page((slug, page, tid))
        signature = tuple(row['recordId'] for row in rows)
        if signature in seen_pages:
            raise ValueError(f'Repeated source page in {slug} at {page}')
        seen_pages.add(signature)
        if not links or max(int(number) for _, number in links) <= page:
            break
        tid = links[0][0]
        page += 1


def merge_details(rows):
    entries = []
    images = set()
    for row in rows:
        key = row['recordId']
        path = args.cache / 'details' / f'{key}.json'
        detail_data = json.loads(path.read_text()) if path.exists() else {}
        cover = photo_url(row['image'])
        gallery = list(dict.fromkeys(image for image in [cover, *detail_data.get('images', [])] if image))
        images.update(gallery)
        category = row['category'] or detail_data.get('category', 'other')
        entries.append([
            key, row['name'], row['priceCny'], category, row['date'], row['views'],
            gallery, detail_data.get('item'), detail_data.get('qc', []), detail_data.get('format') == 2,
        ])
    return entries, images


def export(entries, images):
    signatures = {}
    for file in (args.cache / 'hashes').glob('*.json'):
        path, *signature = json.loads(file.read_text())
        if path in images:
            signatures[path] = signature
    missing_images = sorted(images - signatures.keys())
    missing_details = [row[0] for row in entries if not row[9]]
    if not entries or missing_details or missing_images:
        write(args.cache / 'incomplete.json', {'missingDetails': missing_details, 'missingImages': missing_images})
        raise SystemExit(f'Incomplete export: {len(entries)} products, {len(missing_details)} missing details, '
                         f'{len(missing_images)} missing image descriptors. See incomplete.json in the crawl cache.')
    write(args.out / 'records.json', entries)
    write(args.out / 'hashes.json', signatures)
    print({
        'records': len(entries), 'sourceIds': sum(bool(row[7]) for row in entries),
        'uniqueImages': len(images), 'indexedImages': len(signatures),
        'classifiedQcImages': sum(len(row[8]) for row in entries),
        'sourceRecordsWithoutImages': sum(not row[6] for row in entries),
    }, flush=True)


def checked_jobs(fn, jobs):
    failed = run(fn, jobs)
    if failed:
        write(args.cache / f'{fn.__name__}-failures.json', failed)
        raise SystemExit(f'{len(failed)} unresolved source requests. Resume with the same --cache.')


if args.phase in ('all', 'list'):
    checked_jobs(collect_listing, ['AllProducts', *CATEGORIES])
    write(args.cache / 'list-complete.json', True)

rows = rows_now()
if args.phase in ('all', 'detail'):
    checked_jobs(detail, rows[::-1] if args.reverse else rows)

entries, images = merge_details(rows)
if args.phase in ('all', 'images'):
    checked_jobs(image_hash, sorted(images, reverse=args.reverse))
if args.phase in ('all', 'export'):
    if not (args.cache / 'list-complete.json').exists():
        raise SystemExit('Run list discovery to completion before exporting.')
    export(entries, images)
