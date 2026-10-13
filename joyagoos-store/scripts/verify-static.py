"""Check actual exported HTML, independent of the article data and renderer."""
from pathlib import Path
from html.parser import HTMLParser
import fnmatch,json,re,xml.etree.ElementTree as ET

root=Path(__file__).resolve().parents[1]/'dist/pages'
base='https://joyagoos.store'
langs=['en','zh','de','pl','es','it','fr','pt','ro','sv']
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__();self.lang=None;self.links=[];self.canonical=[];self.alternates={};self.h1=[];self.title=[];self.schemas=[];self.capture=None;self.buff='';self.meta={};self.tables=0;self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='html':self.lang=a.get('lang')
  if tag=='a':self.links.append(a.get('href',''))
  if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  if tag=='link' and a.get('rel')=='alternate' and 'hreflang' in a:self.alternates[a['hreflang']]=a.get('href')
  if tag=='meta':self.meta[a.get('name',a.get('property',''))]=a.get('content','')
  if tag=='table':self.tables+=1
  if tag in ['h1','title'] or (tag=='script' and a.get('type')=='application/ld+json'):self.capture=tag;self.buff=''
 def handle_data(self,data):
  if self.capture:self.buff+=data
 def handle_endtag(self,tag):
  if tag==self.capture:
   if tag=='h1':self.h1.append(self.buff)
   elif tag=='title':self.title.append(self.buff)
   elif tag=='script':self.schemas.append(json.loads(self.buff))
   self.capture=None;self.buff=''
def path_for(lang,path):return path if lang=='en' else '/'+lang+('' if path=='/' else path)
def file_for(path):return root/('index.html' if path=='/' else path.lstrip('/')+'.html')
urls=[e.text for e in ET.parse(root/'sitemap.xml').iter() if e.tag.endswith('}loc') or e.tag=='loc']
assert len(urls)==250,(len(urls),'expected 250 canonical pages')
assert len(set(urls))==len(urls)
article_slugs=[]
for url in urls:
 path=url.removeprefix(base)
 if path.startswith('/articles/'):article_slugs.append(path.rsplit('/',1)[1])
assert len(article_slugs)==17
for url in urls:
 path=url.removeprefix(base);p=Page(file_for(path).read_text())
 first=path.split('/')[1];lang=first if first in langs[1:] else 'en'
 plain=path[len(lang)+1:] or '/' if lang!='en' else path
 assert p.lang==lang,(path,'html lang',p.lang)
 assert p.canonical==[url],(path,'canonical',p.canonical)
 assert len(p.h1)==1 and p.h1[0].strip(),(path,'H1')
 assert len(p.title)==1 and p.title[0].strip(),(path,'title')
 assert p.meta.get('description'),(path,'description')
 assert 'noindex' not in p.meta.get('robots',''),(path,'robots')
 for other in langs:
  expected=base+path_for(other,plain)
  assert p.alternates.get(other)==expected,(path,'hreflang',other,p.alternates.get(other),expected)
  assert path_for(other,plain) in p.links,(path,'language link',other)
 assert p.alternates.get('x-default')==base+plain
 for href in p.links:
  if href.startswith('/') and not href.startswith('//'):
   target=href.split('#')[0].split('?')[0] or path
   assert file_for(target).exists(),(path,'broken internal link',href)
 if '/articles/' in path:
  schema=[x for x in p.schemas if x.get('@type')=='Article']
  assert len(schema)==1 and schema[0]['inLanguage']==lang
  assert schema[0]['mainEntityOfPage']['@id']==url
  assert schema[0]['headline']==p.h1[0]
  if path.endswith(('joyagoo-tracking-not-updating','joyagoo-shipping-estimate-input-checklist','joyagoo-links-not-working','joyagoo-qc-photo-checklist','joyagoo-fees-explained','joyagoo-shipping-to-usa-guide','joyagoo-actual-vs-volumetric-weight')):assert p.tables==1,(path,'enhancement table')
 if plain=='/articles':
  prefix=path_for(lang,'/articles/')
  entries={x for x in p.links if x.startswith(prefix)}
  assert len(entries)==17,(path,'hub entries',len(entries))
 if plain=='/':
  prefix=path_for(lang,'/articles/')
  assert len({x for x in p.links if x.startswith(prefix)})==4,(path,'home articles')
  assert any('cnfanssp.com/AllProducts/4276.html' in x for x in p.links),(path,'product mapping')
  assert any('cnfanssp.com/hoodies-sweaters/' in x for x in p.links),(path,'category mapping')
  html=file_for(path).read_text()
  assert 'https://www.cnfanssp.com/search.html' in html and 'name="keywords"' in html
  assert 'G-EQVYBRD6DV' in html
p=Page((root/'404.html').read_text());assert not p.canonical and 'noindex' in p.meta.get('robots','')
redirects=(root/'_redirects').read_text()
for lang in langs:assert f'{path_for(lang,"/articles-2026")} {path_for(lang,"/articles")} 301' in redirects
assert base+'/sitemap.xml' in (root/'robots.txt').read_text()
# Check the effective cache policy for every public HTML entry, including aliases.
header_rules=[]
for block in (root/'_headers').read_text().strip().split('\n\n'):
 lines=block.splitlines()
 if lines:header_rules.append((lines[0], '\n'.join(lines[1:])))
assert len(header_rules)<=100,('Pages header rule limit',len(header_rules))
html_paths=[url.removeprefix(base) for url in urls]+[path_for(lang,'/articles-2026') for lang in langs]
for path in html_paths+['/index.html','/404.html','/robots.txt','/sitemap.xml']:
 policy='\n'.join(value for pattern,value in header_rules if fnmatch.fnmatchcase(path,pattern))
 assert 'Cache-Control: no-store' in policy and 'Cloudflare-CDN-Cache-Control: no-store' in policy,(path,'stale HTML risk')
assert not any('no-store' in value for pattern,value in header_rules if fnmatch.fnmatchcase('/assets/example.js',pattern)), 'fingerprinted assets should retain caching'
print('PASS: 250 pages; 17 articles × 10 languages; canonical/hreflang/HTML lang/schema; all internal links; 4 home articles; tables, 404, redirects and preserved product/category/search mappings.')
print('PASS: cache rules cover all HTML, language entry points, old article aliases and discovery files; fingerprinted asset caching retained.')
