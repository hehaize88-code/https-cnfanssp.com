import urllib.request, pathlib, concurrent.futures, json
root=pathlib.Path('/tmp/lolo-sources'); root.mkdir(exist_ok=True)
urls={
'shoes':'https://www.cnfanssp.com/shoes/',
'hoodies':'https://www.cnfanssp.com/hoodies-sweaters/',
'tshirts':'https://www.cnfanssp.com/t-shirts/',
'pants':'https://www.cnfanssp.com/pants-shorts/',
'accessories':'https://www.cnfanssp.com/accessories/',
'jerseys':'https://www.cnfanssp.com/jersey/',
'script':'https://www.cnfanssp.com/template/moban/pc/static/js/script.js?v=2.3.0',
'logo':'https://usfile.lolobuy.com/lolobuyWeb/index/iconLolobuyLogo.svg',
'favicon':'https://www.lolobuy.com/loloBuyIcon.png'}
def fetch(k,u):
 req=urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0'})
 with urllib.request.urlopen(req,timeout=35) as r: data=r.read()
 (root/(k+'.html')).write_bytes(data)
 print(k,len(data),flush=True)
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:
 list(ex.map(lambda kv:fetch(*kv),urls.items()))
pathlib.Path('public/brand/lolobuy.svg').write_bytes((root/'logo.html').read_bytes())
pathlib.Path('public/brand/favicon.png').write_bytes((root/'favicon.html').read_bytes())
