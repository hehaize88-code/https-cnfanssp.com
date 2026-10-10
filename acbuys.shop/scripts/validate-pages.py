"""Verify deployed HTML structure, language parity and local navigation."""
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import xml.etree.ElementTree as ET
from bs4 import BeautifulSoup, Doctype

root=Path(__file__).resolve().parents[1]/'cloudflare-pages'
langs=['en','de','fr','es','it','pl']
counts={x:0 for x in langs}
pages={}
for p in root.rglob('index.html'):
 route='/'+p.parent.relative_to(root).as_posix().strip('.')
 if not route.endswith('/'):route+='/'
 pages[route]=BeautifulSoup(p.read_text(),'html.parser')
assert len(pages)==132, len(pages)
for route,s in pages.items():
 lang=route.split('/')[1] if route.split('/')[1] in langs[1:] else 'en'
 counts[lang]+=1
 assert isinstance(s.contents[0],Doctype),route
 assert s.html['lang']==lang,route
 assert len(s.select('h1'))==1,route
 assert len(s.select('link[rel="canonical"]'))==1,route
 assert s.select_one('link[rel="canonical"]')['href']=='https://acbuys.shop'+route,route
 alternates=s.select('link[hreflang]')
 assert {x['hreflang'] for x in alternates}==set(langs+['x-default']),route
 for x in alternates:
  path=urlsplit(x['href']).path
  assert path in pages,(route,path)
 assert 'noindex' not in s.find('meta',{'name':'robots'})['content'],route
 assert s.find('meta',{'name':'description'})['content'].strip(),route
 assert not s.select('script[type="module"]'),route
 assert len(s.select('script[src^="/site.js"]'))==1,route
 for script in s.select('script[type="application/ld+json"]'):
  d=json.loads(script.string)
  if d.get('@type')=='Article':
   assert d['inLanguage']==lang,route
   assert d['mainEntityOfPage']=='https://acbuys.shop'+route,route
 for a in s.select('a[href]'):
  href=a['href'];u=urlsplit(href)
  if u.scheme or u.netloc:continue
  path=u.path or route
  if path.startswith('/'):
   assert path in pages or (root/path.lstrip('/')).is_file(),(route,href)
   if path in pages and lang!='en':assert path.startswith('/'+lang+'/'),(route,href)
  if u.fragment and path in pages:
   assert pages[path].find(id=unquote(u.fragment)),(route,href)
 for a in s.select('img[src],link[rel="stylesheet"],script[src]'):
  u=urlsplit(a.get('src',a.get('href','')))
  if u.netloc:continue
  path=u.path
  if path.startswith('/'):assert (root/path.lstrip('/')).is_file(),(route,path)
 if '/articles/' in route and route.rsplit('/',2)[1]!='articles':
  enroute=route if lang=='en' else route[len(lang)+1:]
  assert len(s.select('.article-body section'))==len(pages[enroute].select('.article-body section')),route
  assert len(s.select('.article-body p'))==len(pages[enroute].select('.article-body p')),route
 if route.rstrip('/') in ['', '/de','/fr','/es','/it','/pl']:
  assert len(s.select('.product'))==8,route
  assert len(s.select('.empty'))==1,route
sitemap=ET.parse(root/'sitemap.xml')
locs={x.text for x in sitemap.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
assert locs=={'https://acbuys.shop'+p for p in pages}
assert set(counts.values())=={22},counts
print('PASS: 132 pages; 22 per language; canonicals, hreflang, sitemap, schema, assets, section parity and internal links verified.')
