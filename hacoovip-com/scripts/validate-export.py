"""Validate the built static site using only Python's standard library."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "out"
DOMAIN = "https://hacoovip.com"
LANGS = ("en", "de", "es", "fr", "it")
NEW = ("hacoo-order-tracking", "hacoo-links-not-working", "hacoo-size-guide", "hacoo-qc-photo-checklist")
VOID = set("area base br col embed hr img input link meta param source track wbr".split())


class Node:
    def __init__(self, tag, attrs=()):
        self.tag, self.attrs, self.children = tag, dict(attrs), []

    def all(self, tag=None, cls=None):
        found = []
        for child in self.children:
            if isinstance(child, Node):
                if (not tag or child.tag == tag) and (not cls or cls in child.attrs.get("class", "").split()):
                    found.append(child)
                found += child.all(tag, cls)
        return found

    def text(self):
        return " ".join(c.text() if isinstance(c, Node) else c for c in self.children if not isinstance(c, Node) or c.tag not in ("script", "style"))

    def raw(self):
        return "".join(c.raw() if isinstance(c, Node) else c for c in self.children)


class Document(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.root = Node("document")
        self.stack = [self.root]
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                self.stack = self.stack[:i]
                break

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def page_file(path):
    return OUT / ("index.html" if path == "/" else path.lstrip("/") + ".html")


def normalized(url):
    return url if urlsplit(url).path else url + "/"


ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9", "x": "http://www.w3.org/1999/xhtml"}
entries = ET.parse(OUT / "sitemap.xml").getroot().findall("s:url", ns)
urls = [entry.findtext("s:loc", namespaces=ns) for entry in entries]
assert len(urls) == len(set(urls)) == 165, "Expected 165 unique sitemap URLs"
docs = {}
titles, descriptions = set(), set()
for url in urls:
    path = urlsplit(url).path
    file = page_file(path)
    assert file.is_file(), f"Missing exported route: {path}"
    doc = Document(file.read_text()).root
    docs[path] = doc
    lang = path.split("/")[1] if path.split("/")[1] in LANGS[1:] else "en"
    assert doc.all("html")[0].attrs["lang"] == lang, f"Wrong HTML language: {path}"
    assert doc.all("main")[0].attrs["lang"] == lang
    assert len(doc.all("h1")) == 1, f"Expected one H1: {path}"
    title = doc.all("title")[0].text()
    assert title and title not in titles, f"Duplicate/empty title: {path}"
    titles.add(title)
    desc = next(n.attrs.get("content") for n in doc.all("meta") if n.attrs.get("name") == "description")
    assert desc and desc not in descriptions, f"Duplicate/empty description: {path}"
    descriptions.add(desc)
    links = doc.all("link")
    assert [normalized(n.attrs["href"]) for n in links if n.attrs.get("rel") == "canonical"] == [url], f"Wrong canonical: {path}"
    alternates = {n.attrs["hreflang"]: normalized(n.attrs["href"]) for n in links if "hreflang" in n.attrs}
    base = path if lang == "en" else path[len(lang) + 1:] or "/"
    expected = {l: DOMAIN + (("" if l == "en" else "/" + l) + (base if base != "/" else "") or "/") for l in LANGS}
    expected["x-default"] = expected["en"]
    assert alternates == expected, f"Wrong hreflang group: {path}"
    visible = doc.all("main")[0].text()
    assert not re.search(r"whatsapp|cnfanssp\.com|CN¥6[.,]75", visible, re.I), f"Stale visible destination/price: {path}"
    for img in doc.all("img"):
        assert img.attrs.get("alt"), f"Missing image alt: {path}"
        assert (OUT / img.attrs["src"].lstrip("/")).is_file(), f"Missing image: {path}"
    graphs = [json.loads(n.raw()) for n in doc.all("script") if n.attrs.get("type") == "application/ld+json"]
    assert len(graphs) == 1
    if "/articles/" in path:
        body = doc.all(cls="article-body")[0]
        sections = body.all("section")
        bodies = [" ".join(n.text() for n in section.all("p")) for section in sections]
        assert all(bodies) and len(set(bodies)) == len(bodies), f"Repeated article section: {path}"
        article = next(g for g in graphs[0]["@graph"] if g["@type"] == "Article")
        assert article["inLanguage"] == lang and article["mainEntityOfPage"] == url
        slug = path.split("/")[-1]
        if slug in NEW:
            assert len(sections) == 9 and article["datePublished"] == "2026-10-10"
            assert len(body.all("p")) == 17, f"Missing translated paragraphs: {path}"
            if lang == "en":
                count = len(" ".join(bodies).split())
                assert 1200 <= count <= 1800, f"English article word count: {slug} {count}"
        assert article["dateModified"] >= article["datePublished"]
    if base in ("/", "/articles"):
        cards = doc.all(cls="article-cards")[0].all("a")
        assert len(cards) == (4 if base == "/" else 18), f"Article list count: {path}"
        assert [n.attrs["href"].split("/")[-1] for n in cards[:4]] == list(NEW)
    for form in doc.all("form"):
        assert form.attrs.get("action") == "https://www.cnfanshp.com/search.html"
        inputs = {n.attrs.get("name"): n.attrs for n in form.all("input")}
        assert inputs["channelid"]["value"] == "2" and "required" in inputs["keywords"]

for path, doc in docs.items():
    for a in doc.all("a"):
        target = urlsplit(a.attrs.get("href", ""))
        if target.netloc and target.netloc != "hacoovip.com":
            assert target.scheme == "https" and target.netloc == "www.cnfanshp.com", f"Unexpected external link: {path} {target.geturl()}"
            continue
        destination = target.path or path
        assert destination in docs, f"Broken internal route: {path} -> {destination}"
        if target.fragment:
            ids = {n.attrs.get("id") for n in docs[destination].all()}
            assert unquote(target.fragment) in ids, f"Broken anchor: {path} -> {target.geturl()}"
for entry in entries:
    url = entry.findtext("s:loc", namespaces=ns)
    alternates = {n.attrib["hreflang"]: n.attrib["href"] for n in entry.findall("x:link", ns)}
    html_alternates = {n.attrs["hreflang"]: normalized(n.attrs["href"]) for n in docs[urlsplit(url).path].all("link") if "hreflang" in n.attrs}
    assert alternates == html_alternates, f"Sitemap alternate mismatch: {url}"

assert (OUT / "404.html").is_file()
print("PASS: 165 routes; 5 languages; 90 articles; 20 new article translations; canonical/hreflang/sitemap; unique sections; images; internal links; catalogue destinations; search forms; latest four cards.")
