"""Check the exported release, including localized content and crawlable links."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import json, re, xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'pages-dist'
LOCALES = ['en', 'de', 'fr', 'es', 'it']
SLUGS = ['shoes-spreadsheet', 'clothing-spreadsheet', 'links-not-working', 'tracking-not-updating']

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.tags = []
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))
    def attrs(self, name):
        return [attrs for tag, attrs in self.tags if tag == name]

tree = ET.parse(OUT / 'sitemap.xml')
urls = [el.text for el in tree.iter() if el.tag.endswith('}loc')]
assert len(urls) == len(set(urls)) == 80, f'Expected 80 distinct pages, got {len(urls)}'
titles = set()
new_count = 0
for url in urls:
    path = urlsplit(url).path
    parts = path.strip('/').split('/')
    locale = parts[0] if parts[0] in LOCALES else 'en'
    key = '/'.join(parts[1:]) if locale != 'en' else '/'.join(parts)
    filename = OUT / path.lstrip('/') / 'index.html'
    text = filename.read_text()
    page = Page(text)
    assert page.attrs('html')[0]['lang'] == locale, (path, 'html lang')
    assert len(page.attrs('h1')) == 1, (path, 'one H1')
    title = re.search(r'<title>(.*?)</title>', text).group(1)
    assert title not in titles, (path, 'duplicate title')
    titles.add(title)
    links = page.attrs('link')
    assert [x.get('href') for x in links if x.get('rel') == 'canonical'] == [url], (path, 'canonical')
    alternates = {x.get('hreflang'): x.get('href') for x in links if x.get('hreflang')}
    assert set(alternates) == set(LOCALES + ['x-default']), (path, 'hreflang count')
    for lang in LOCALES:
        expected = 'https://hacoos.pro/' + (lang + '/' if lang != 'en' else '') + (key + '/' if key else '')
        assert alternates[lang] == expected, (path, lang, alternates[lang])
    assert alternates['x-default'] == alternates['en']
    assert 'cnfanssp.com' not in text, (path, 'old destination')
    assert '/analytics.js' in text, (path, 'analytics missing')
    for a in page.attrs('a'):
        href = a.get('href', '')
        if href.startswith('/') and not href.startswith('//'):
            target = href.split('#')[0].split('?')[0]
            assert (OUT / target.lstrip('/') / 'index.html').is_file() or (OUT / target.lstrip('/')).is_file(), (path, 'broken internal link', href)
    for form in page.attrs('form'):
        if 'data-main-search' in form:
            assert form['action'] == 'https://www.cnfanshp.com/search.html'
            assert any(x.get('name') == 'channelid' and x.get('value') == '2' for x in page.attrs('input'))
    if key.startswith('articles/'):
        assert '"@type":"Article"' in text
        assert '2026-10-09' in text
        assert len([a for a in page.attrs('a') if a.get('href', '').startswith('#section-')]) >= 7
    if key.split('/')[-1] in SLUGS:
        article = json.loads((ROOT / f'app/content/new-{locale}.json').read_text())[key.split('/')[-1]]
        assert len(article['sections']) == 7
        assert sum(len(s['paragraphs']) for s in article['sections']) == 14
        assert all(s['heading'] in text for s in article['sections'])
        new_count += 1
    if key == '':
        # Latest four guides only, plus their visible index link.
        preview = re.search(r'<section class="section guide-preview">(.*?)</section>', text, re.S).group(1)
        assert preview.count('/articles/') == 5, (path, 'homepage article count')
assert new_count == 20
bundle = list((OUT / 'assets').glob('site-page-*.js'))
assert all(b'candidate A shows the colour' not in p.read_bytes() for p in bundle), 'Article body leaked into global client bundle'
print('PASS: 80 pages; 5 languages; 35 article pages; 20 new articles; unique titles; canonical/hreflang; internal links; homepage latest four; analytics and search targets.')
