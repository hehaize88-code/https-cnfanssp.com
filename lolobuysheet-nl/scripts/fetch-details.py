import urllib.request,pathlib,json,concurrent.futures
root=pathlib.Path('/tmp/lolo-sources'); products=json.loads((root/'products.json').read_text())
def fetch(p):
 req=urllib.request.Request(p['source'],headers={'User-Agent':'Mozilla/5.0'})
 try:
  with urllib.request.urlopen(req,timeout=25) as r: data=r.read()
  (root/(p['recordId']+'.html')).write_bytes(data)
 except Exception as e: print(p['recordId'],type(e).__name__,flush=True)
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:list(ex.map(fetch,products))
print('Detail requests completed',flush=True)
