"""Create fully translated static routes; fail on any missing visible translation."""
from pathlib import Path
import json
import re
import argparse
from copy import deepcopy
from bs4 import BeautifulSoup, Comment, Doctype

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'cloudflare-pages'
LOCALES = ROOT / 'content/locales'
LANGS = ['en', 'de', 'fr', 'es', 'it', 'pl']
ORIGIN = 'https://acbuys.shop'
META = ['description', 'og:title', 'og:description', 'og:image:alt', 'twitter:title', 'twitter:description']
ATTRS = ['placeholder', 'aria-label', 'alt']

def path_for(route, lang):
    return route if lang == 'en' else '/' + lang + route

def strings(soup):
    for node in soup.find_all(string=True):
        if not isinstance(node, (Comment, Doctype)) and node.parent.name not in ['script', 'style'] and not (node.parent.name == 'option' and node.parent.find_parent(class_='language-switcher')) and node.strip():
            yield str(node).strip()
    for tag in soup.find_all('meta'):
        if (tag.get('name') or tag.get('property')) in META and tag.get('content'):
            yield tag['content']
    for tag in soup.find_all(True):
        for attr in ATTRS:
            if tag.get(attr):
                yield tag[attr]

def translate_schema(obj, t, lang, routes):
    if isinstance(obj, list):
        return [translate_schema(x, t, lang, routes) for x in obj]
    if isinstance(obj, dict):
        result = {}
        for k, v in obj.items():
            if k == 'inLanguage': result[k] = lang
            elif k in ['headline', 'description', 'name'] and isinstance(v, str): result[k] = t(v, strict=False)
            else: result[k] = translate_schema(v, t, lang, routes)
        return result
    if isinstance(obj, str) and obj.startswith(ORIGIN):
        route = obj[len(ORIGIN):]
        if route in routes: return ORIGIN + path_for(route, lang)
    return obj

parser = argparse.ArgumentParser()
parser.add_argument('--collect', action='store_true')
args = parser.parse_args()
pages = {}
for p in sorted(OUT.rglob('index.html')):
    route = '/' + str(p.parent.relative_to(OUT)).replace('\\', '/') + '/'
    if route == '/./': route = '/'
    if route.split('/')[1] in LANGS[1:]: continue
    pages[route] = BeautifulSoup(p.read_text(), 'html.parser')
if not pages: raise RuntimeError('Run the English export first')

extra = ['No matching preview finds.', 'Try another category or open the complete catalog.']
corpus = sorted({x for soup in pages.values() for x in strings(soup)} | set(extra))
LOCALES.mkdir(parents=True, exist_ok=True)
if args.collect:
    (LOCALES/'en.json').write_text(json.dumps(corpus, ensure_ascii=False, indent=2)+'\n')
    print(f'Collected {len(corpus)} unique strings from {len(pages)} routes')
    raise SystemExit

missing = []
written = []
for lang in LANGS:
    translations = {} if lang == 'en' else json.loads((LOCALES/(lang+'.json')).read_text())
    def t(value, strict=True):
        if lang == 'en' or not re.search(r'[A-Za-z]', value): return value
        if value in translations: return translations[value]
        if strict: missing.append((lang, value))
        return value

    for route, original in pages.items():
        soup = deepcopy(original)
        # Static production pages do not hydrate an English React tree over translated text.
        for script in list(soup.find_all('script')):
            if script.get('type') == 'application/ld+json':
                script.string = json.dumps(translate_schema(json.loads(script.string), t, lang, pages), ensure_ascii=False)
            elif 'googletagmanager.com/gtag/js' in script.get('src', '') or 'gtag(' in (script.string or ''):
                pass
            else: script.decompose()
        for link in list(soup.find_all('link')):
            if any(x in link.get('rel', []) for x in ['modulepreload', 'canonical', 'alternate']): link.decompose()
            elif link.get('as') == 'script': link.decompose()

        # Stable machine values are recorded before translating the labels.
        for button in soup.select('.filters button'): button['data-category'] = button.get_text(strip=True)
        for card in soup.select('.product'):
            card['data-category'] = card.select_one('.tag').get_text(strip=True)
            card['data-search'] = card.select_one('h3').get_text(strip=True).lower()
            card['data-price'] = re.sub(r'[^0-9.]', '', card.select_one('.product-copy footer b').get_text())
        for button in soup.select('.product-image button'): button['data-product'] = button.find_parent(class_='product')['data-search']

        for node in list(soup.find_all(string=True)):
            if isinstance(node, (Comment, Doctype)) or node.parent.name in ['script', 'style'] or (node.parent.name == 'option' and node.parent.find_parent(class_='language-switcher')) or not node.strip(): continue
            value = str(node)
            node.replace_with(value[:len(value)-len(value.lstrip())] + t(value.strip()) + value[len(value.rstrip()):])
        for tag in soup.find_all('meta'):
            if (tag.get('name') or tag.get('property')) in META and tag.get('content'): tag['content'] = t(tag['content'])
        for tag in soup.find_all(True):
            for attr in ATTRS:
                if tag.get(attr): tag[attr] = t(tag[attr])
        soup.html['lang'] = lang
        for option in soup.select('.language-switcher option'):
            option.attrs.pop('selected', None)
            if option.get('value') == lang: option['selected'] = ''

        for a in soup.select('a[href]'):
            href = a['href']
            base, mark, frag = href.partition('#')
            if base in pages: a['href'] = path_for(base, lang) + (mark+frag if mark else '')
        canonical = ORIGIN + path_for(route, lang)
        soup.head.append(soup.new_tag('link', rel='canonical', href=canonical))
        for other in LANGS:
            soup.head.append(soup.new_tag('link', rel='alternate', hreflang=other, href=ORIGIN+path_for(route, other)))
        soup.head.append(soup.new_tag('link', rel='alternate', hreflang='x-default', href=ORIGIN+route))
        # Per-route social metadata must describe this page, not inherit the homepage headline.
        desc = soup.find('meta', attrs={'name': 'description'})
        for key, value in [('og:title', soup.title.get_text()), ('twitter:title', soup.title.get_text()), ('og:description', desc['content'] if desc else ''), ('twitter:description', desc['content'] if desc else ''), ('og:url', canonical)]:
            tag = soup.find('meta', attrs={'property': key}) or soup.find('meta', attrs={'name': key})
            if tag: tag['content'] = value
            else: soup.head.append(soup.new_tag('meta', attrs={('name' if key.startswith('twitter:') else 'property'): key, 'content': value}))
        if soup.select_one('.product-grid'):
            for previous in soup.select('.empty'): previous.decompose()
            empty = soup.new_tag('div', attrs={'class':'empty', 'hidden':''})
            title = soup.new_tag('b'); title.string = t(extra[0]); empty.append(title)
            note = soup.new_tag('span'); note.string = t(extra[1]); empty.append(note)
            soup.select_one('.product-grid').insert_after(empty)
        js = soup.new_tag('script', src='/site.js?v=20261007', defer='')
        soup.body.append(js)
        target = OUT / path_for(route, lang).lstrip('/') / 'index.html'
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(str(soup))
        written.append(canonical)

if missing:
    raise RuntimeError('Missing translations: '+json.dumps(missing[:25], ensure_ascii=False)+f' ({len(missing)} total)')
sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + '\n'.join(f'<url><loc>{u}</loc><lastmod>2026-10-07</lastmod></url>' for u in written) + '\n</urlset>\n'
(OUT/'sitemap.xml').write_text(sitemap)
(OUT/'_headers').write_text('/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Cache-Control: public, max-age=0, must-revalidate\n\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n')
print(f'Exported {len(written)} complete pages across {len(LANGS)} languages')
