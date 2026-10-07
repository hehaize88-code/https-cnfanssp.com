"""Publish complete reviewed locale HTML from the English static export.
No network, model or translation API is used by production builds.
Every required string must exist in each committed dictionary or publication fails.
"""
from html.parser import HTMLParser
from html import escape
from pathlib import Path
from urllib.parse import urlsplit
import argparse,copy,json,re,xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'dist/client'; BASE='https://allchinabuys.shop'
LANGS={'en':'EN','de':'DE','fr':'FR','es':'ES','pl':'PL','ja':'日本語'}
VOID=set('area base br col embed hr img input link meta param source track wbr'.split())
ATTRS={'alt','title','placeholder','aria-label'}
META={'description','keywords','og:title','og:description','og:image:alt','twitter:title','twitter:description'}
SCHEMA_TEXT={'headline','description','name','text','articleBody','keywords'}
KEEP_NAMES={'AllChinaBuy','AllChinaBuy Finds','AllChinaBuy Finds Research Desk','Nike Dunk Low × Off-White','Autry Shoes','6PM Hoodie Set','Godspeed Hoodie','Celine Hoodie','Jersey 46','EN','DE','FR','ES','PL','日本語'}
class Node:
 def __init__(self,tag='',attrs=None,text=None):self.tag=tag;self.attrs=dict(attrs or []);self.children=[];self.text=text
 def walk(self):
  yield self
  for c in self.children:yield from c.walk()
class Parser(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.root=Node('root');self.stack=[self.root]
 def handle_starttag(self,t,a):
  n=Node(t,a);self.stack[-1].children.append(n)
  if t not in VOID:self.stack.append(n)
 def handle_startendtag(self,t,a):self.handle_starttag(t,a);self.handle_endtag(t)
 def handle_endtag(self,t):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].tag==t:self.stack=self.stack[:i];break
 def handle_data(self,d):self.stack[-1].children.append(Node(text=d))
 def handle_entityref(self,n):self.handle_data('&'+n+';')
 def handle_charref(self,n):self.handle_data('&#'+n+';')
def render(n,parent=''):
 if n.text is not None:return n.text if parent in ('script','style') else escape(n.text,quote=False)
 if n.tag=='root':return '<!DOCTYPE html>'+''.join(render(c) for c in n.children)
 a=''.join(' '+k if v is None else ' '+k+'="'+escape(str(v),quote=True)+'"' for k,v in n.attrs.items())
 if n.tag in VOID:return '<'+n.tag+a+'>'
 return '<'+n.tag+a+'>'+''.join(render(c,n.tag) for c in n.children)+'</'+n.tag+'>'
def read(path):
 p=Parser();p.feed(path.read_text());return p.root
def textval(n):return ''.join(c.text or '' for c in n.children if c.text is not None)
def meaningful(s):return bool(re.search('[A-Za-z]',s)) and s.strip() not in KEEP_NAMES and not s.strip().startswith(('https://','http://','/'))
def fields(root):
 def walk(n,hidden=False,language=False):
  hidden=hidden or n.tag in ('script','style','code')
  language=language or 'data-language-switcher' in n.attrs
  if n.text is not None:
   if not hidden and not language and meaningful(n.text.strip()):yield n,'text',n.text.strip()
  elif not hidden and not language:
   for k in ATTRS:
    if n.attrs.get(k) and meaningful(n.attrs[k]):yield n,k,n.attrs[k]
   if n.tag=='meta' and (n.attrs.get('name') in META or n.attrs.get('property') in META):
    if n.attrs.get('content') and meaningful(n.attrs['content']):yield n,'content',n.attrs['content']
  for c in n.children:yield from walk(c,hidden,language)
 yield from walk(root)
def schema_strings(x):
 if isinstance(x,dict):
  for k,v in x.items():
   if k in SCHEMA_TEXT and isinstance(v,str) and meaningful(v):yield v
   else:yield from schema_strings(v)
 elif isinstance(x,list):
  for v in x:yield from schema_strings(v)
def schemas(root):
 for n in root.walk():
  if n.tag=='script' and n.attrs.get('type')=='application/ld+json':yield n,json.loads(textval(n))
def route_for(path):
 rel=path.relative_to(OUT).as_posix()
 return '/' if rel=='index.html' else '/'+rel.removesuffix('index.html')
def locale_url(lang,path):return path if lang=='en' else '/'+lang+path
def clean(n):
 kept=[]
 for c in n.children:
  if c.tag=='script':
   if c.attrs.get('type')!='application/ld+json' and c.attrs.get('src')!='/site.js' and not 'googletagmanager.com' in c.attrs.get('src','') and 'gtag(' not in textval(c):continue
   if 'self.__VINEXT' in textval(c):continue
  if c.tag=='link' and c.attrs.get('rel') in ('modulepreload',):continue
  clean(c);kept.append(c)
 n.children=kept

def publish():
 paths=[p for p in OUT.rglob('index.html') if p.relative_to(OUT).parts[0] not in LANGS or p.name==p.relative_to(OUT).as_posix()]
 paths=sorted(paths)
 records=[(p,route_for(p),read(p)) for p in paths]
 keys=set()
 for _,_,root in records:
  keys.update(s for _,_,s in fields(root))
  for _,obj in schemas(root):keys.update(schema_strings(obj))
 loc=ROOT/'content/locales';loc.mkdir(exist_ok=True)
 (loc/'keys.json').write_text(json.dumps(sorted(keys),ensure_ascii=False,indent=2)+'\n')
 if args.extract:print(f'Extracted {len(keys)} strings from {len(records)} English pages');return
 dictionaries={lang:json.loads((loc/(lang+'.json')).read_text()) for lang in LANGS if lang!='en'}
 overrides=json.loads((loc/'overrides.json').read_text())
 for lang in dictionaries:dictionaries[lang].update(overrides.get(lang,{}))
 missing={lang:[k for k in keys if not dic.get(k)] for lang,dic in dictionaries.items()}
 if any(missing.values()):raise SystemExit('Incomplete translations: '+str({l:len(v) for l,v in missing.items()}))
 known_routes={route for _,route,_ in records}
 def tr(s,lang):return s if lang=='en' or not meaningful(s) else dictionaries[lang][s]
 def schema_translate(obj,lang,key=''):
  if isinstance(obj,dict):return {k:(lang if k=='inLanguage' else schema_translate(v,lang,k)) for k,v in obj.items() if not (k=='wordCount' and lang!='en')}
  if isinstance(obj,list):return [schema_translate(v,lang,key) for v in obj]
  if isinstance(obj,str):
   if obj.startswith(BASE) and obj[len(BASE):] in known_routes:return BASE+locale_url(lang,obj[len(BASE):])
   if key in SCHEMA_TEXT:return tr(obj,lang)
  return obj
 for _,route,original in records:
  for lang in LANGS:
   root=copy.deepcopy(original);clean(root)
   if lang!='en':
    for n in root.walk():
     if n.attrs.get('class')=='article-meta':n.children=[c for c in n.children if not re.search(r'^[\d,]+ words$',textval(c))]
   for n,k,s in list(fields(root)):
    val=tr(s,lang)
    if k=='text':
     lead=n.text[:len(n.text)-len(n.text.lstrip())];tail=n.text[len(n.text.rstrip()):];n.text=lead+val+tail
    else:n.attrs[k]=val
   head=next(n for n in root.walk() if n.tag=='head')
   head.children=[n for n in head.children if not (n.tag=='link' and n.attrs.get('rel') in ('canonical','alternate'))]
   head.children.append(Node('link',[('rel','canonical'),('href',BASE+locale_url(lang,route))]))
   for alt in LANGS:head.children.append(Node('link',[('rel','alternate'),('hreflang',alt),('href',BASE+locale_url(alt,route))]))
   head.children.append(Node('link',[('rel','alternate'),('hreflang','x-default'),('href',BASE+route)]))
   for n in root.walk():
    if n.tag=='html':n.attrs['lang']=lang
    if n.tag=='meta' and n.attrs.get('property')=='og:url':n.attrs['content']=BASE+locale_url(lang,route)
    if n.tag=='a' and 'data-language-link' not in n.attrs and n.attrs.get('href','').startswith('/'):
     url=urlsplit(n.attrs['href'])
     if url.path in known_routes:n.attrs['href']=locale_url(lang,url.path)+('?' +url.query if url.query else '')+('#'+url.fragment if url.fragment else '')
    if 'data-language-switcher' in n.attrs:
     n.children=[]
     for alt,label in LANGS.items():
      a=Node('a',[('href',locale_url(alt,route)),('hreflang',alt),('lang',alt),('data-language-link','true'),('aria-current','true' if alt==lang else 'false')]);a.children=[Node(text=label)];n.children.append(a)
   for n,obj in schemas(root):
    data=schema_translate(obj,lang)
    if isinstance(data,dict):data['inLanguage']=lang
    n.children=[Node(text=json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c'))]
   dest=OUT/locale_url(lang,route).lstrip('/')/'index.html';dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(render(root))
 # Locale URLs are explicit and do not redirect based on cookies or geolocation.
 ET.register_namespace('', 'http://www.sitemaps.org/schemas/sitemap/0.9');ET.register_namespace('xhtml','http://www.w3.org/1999/xhtml')
 sm=ET.Element('{http://www.sitemaps.org/schemas/sitemap/0.9}urlset')
 for route in sorted(known_routes):
  for lang in LANGS:
   url=ET.SubElement(sm,'{http://www.sitemaps.org/schemas/sitemap/0.9}url');ET.SubElement(url,'{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text=BASE+locale_url(lang,route);ET.SubElement(url,'{http://www.sitemaps.org/schemas/sitemap/0.9}lastmod').text='2026-10-07'
   for alt in [*LANGS,'x-default']:ET.SubElement(url,'{http://www.w3.org/1999/xhtml}link',{'rel':'alternate','hreflang':alt,'href':BASE+locale_url('en' if alt=='x-default' else alt,route)})
 ET.ElementTree(sm).write(OUT/'sitemap.xml',encoding='utf-8',xml_declaration=True)
 # English 404 stays noindex and contains no React hydration or translation widget.
 error=OUT/'404.html'
 if error.exists():
  root=read(error);clean(root);error.write_text(render(root))
 print(f'Published {len(records)} pages × {len(LANGS)} languages = {len(records)*len(LANGS)} complete HTML pages')
if __name__=='__main__':
 ap=argparse.ArgumentParser();ap.add_argument('--extract',action='store_true');args=ap.parse_args();publish()
