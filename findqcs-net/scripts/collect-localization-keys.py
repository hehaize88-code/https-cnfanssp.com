from pathlib import Path
from html.parser import HTMLParser
import json,re
project=Path(__file__).resolve().parent.parent
base=project/'dist/client';strings=set()
def add(s):
 s=re.sub(r'\s+',' ',s).strip()
 if re.search('[A-Za-z]',s) and not s.startswith(('http','/')) and s not in ['FindQCs','QC','EN','DE','FR','ES','IT','FAQ','ID','MIN','LANG','English','Deutsch','Français','Español','Italiano']:
  strings.add(s)
class Text(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.skip=0;self.schema=False;self.schema_text=""
 def handle_starttag(self,t,a):
  if t in ['script','style']:self.skip+=1
  if t=='script' and dict(a).get('type')=='application/ld+json':self.schema=True;self.schema_text='' 
  if not self.skip:
   for k,v in a:
    if k in ['alt','title','aria-label','placeholder'] or (t=='meta' and k=='content' and not (v or '').startswith(('http','/'))):add(v or '')
 def handle_endtag(self,t):
  if t in ['script','style']:self.skip=max(0,self.skip-1)
  if t=='script' and self.schema:
   def walk(x,key=''):
    if isinstance(x,dict):
     for k,v in x.items():walk(v,k)
    elif isinstance(x,list):
     for v in x:walk(v,key)
    elif isinstance(x,str) and key in ['headline','description','name','text','articleSection','keywords']:add(x)
   walk(json.loads(self.schema_text));self.schema=False
 def handle_data(self,d):
  if not self.skip:add(d)
  elif self.schema:self.schema_text+=d
keys={}
for f in base.rglob('*.html'):
 rel=f.relative_to(base)
 if rel.parts[0] in ['de','fr','es','it'] or rel.name=='404.html':continue
 strings.clear();Text().feed(f.read_text())
 keys['/'+str(rel).removesuffix('index.html')]=sorted(strings)
(project/'app/i18n/page-keys.json').write_text(json.dumps(keys,ensure_ascii=False,indent=2)+'\n')
print('Localization key lists:',len(keys),'routes')
