from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse,unquote
import json,xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[1] / 'dist' / 'pages'
class Page(HTMLParser):
 def __init__(self,s):
  super().__init__(); self.tags=[];self.text=[];self.skip=0;self.feed(s)
 def handle_starttag(self,t,a):
  d=dict(a);self.tags.append((t,d))
  if t in ['script','style']:self.skip+=1
 def handle_endtag(self,t):
  if t in ['script','style']:self.skip-=1
 def handle_data(self,d):
  if self.skip==0:self.text.append(d)
urls=[n.text for n in ET.parse(root/'sitemap.xml').findall('.//{*}loc')]
assert len(urls)==120,len(urls)
paths={urlparse(u).path for u in urls};errors=[];pages={}
for url in urls:
 path=urlparse(url).path;f=root/('index.html' if path=='/' else path[1:]+'.html');raw=f.read_text();p=Page(raw);pages[path]=p
 lang=path.split('/')[1] if path.split('/')[1] in ['de','fr','es','it'] else 'en'
 html=[d for t,d in p.tags if t=='html'];canonical=[d['href'] for t,d in p.tags if t=='link' and d.get('rel')=='canonical'];alts={d['hreflang']:d['href'] for t,d in p.tags if t=='link' and d.get('rel')=='alternate' and 'hreflang'in d}
 if html[0].get('lang')!=lang:errors.append((path,'lang'))
 if canonical!=[url]:errors.append((path,'canonical',canonical))
 if set(alts)!=set(['en','de','fr','es','it','x-default']):errors.append((path,'hreflang',alts))
 for l,u in alts.items():
  if urlparse(u).path not in paths:errors.append((path,'alternate missing',u))
 if len([1 for t,d in p.tags if t=='h1'])!=1:errors.append((path,'h1'))
 ids={d['id'] for t,d in p.tags if 'id'in d}
 for t,d in p.tags:
  if t=='a':
   href=d.get('href','');a=urlparse(href)
   if href.startswith('/') and not href.startswith('//') and unquote(a.path) not in paths:errors.append((path,'internal link',href))
   if href.startswith('#') and href[1:] not in ids:errors.append((path,'fragment',href))
   if a.scheme=='https' and a.hostname not in ['cnfanshp.com','www.cnfanshp.com','hacoos.store']:errors.append((path,'external',href))
 if 'www.cnfanssp.com' in raw:errors.append((path,'old domain'))
 visible=' '.join(p.text)
 if '¥' in visible or 'CNY' in visible:errors.append((path,'currency'))
 if '/articles/'in path:
  if not any(t=='nav' and d.get('class')=='article-toc' for t,d in p.tags):errors.append((path,'missing TOC'))
for l in ['en','de','fr','es','it']:
 prefix='' if l=='en'else'/'+l
 for slug in ['hacoo-order-tracking','hacoo-search-no-results','hacoo-returns-refunds']:
  p=pages[prefix+'/articles/'+slug];assert len([1 for t,d in p.tags if t=='section' and d.get('id','').startswith('section-')])==8
 home=pages[prefix or '/'];index=pages[prefix+'/articles']
 # Card hrefs appear only once in a grid: count article links not the hub.
 homecards=[d['href'] for t,d in home.tags if t=='a' and d.get('href','').startswith(prefix+'/articles/')]
 indexcards=[d['href'] for t,d in index.tags if t=='a' and d.get('href','').startswith(prefix+'/articles/')]
 if len(homecards)!=4:errors.append((prefix,'home cards',len(homecards)))
 if len(indexcards)!=15:errors.append((prefix,'index cards',len(indexcards)))
 forms=[d for t,d in home.tags if t=='form'];assert forms[0]['action']=='https://cnfanshp.com/search.html'
 assert any(t=='input'and d.get('name')=='channelid'and d.get('value')=='2'for t,d in home.tags)
print(json.dumps({'pages':len(urls),'article_pages':sum('/articles/' in x for x in paths),'new_article_pages':15,'home_cards_per_locale':4,'index_articles_per_locale':15,'errors':errors},ensure_ascii=False,indent=2))
if errors:raise SystemExit(1)
# Every alternate resolves back to this same language group.
for path,p in pages.items():
 alts={d['hreflang']:d['href'] for t,d in p.tags if t=='link' and d.get('rel')=='alternate'and'hreflang'in d}
 for u in alts.values():
  other={d['hreflang']:d['href'] for t,d in pages[urlparse(u).path].tags if t=='link'and d.get('rel')=='alternate'and'hreflang'in d};assert other==alts,(path,u)
print('Reciprocal hreflang passed. No broken internal links, missing fragments, old-domain anchors or non-USD visible prices.')
