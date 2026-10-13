import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {chargeableWeight} from '../app/shipping-math.ts';
const copy=JSON.parse(await readFile(new URL('../app/content/articles.json',import.meta.url),'utf8'));
const langs=['en','de','es','fr','it'];
const base='https://spreadsheet-hipobuys.com';
const localized=(path,lang)=>lang==='en'?path:`/${lang}${path==='/'?'':path}`;
const escape=text=>text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#x27;');
test('weight calculation follows the chosen rule and billing increment',()=>{
  assert.deepEqual(chargeableWeight(3,40,30,25,5000,.5,true),{volume:6,billed:6});
  assert.equal(chargeableWeight(3,40,30,25,5000,.5,false).billed,3);
  assert.equal(chargeableWeight(3.01,10,10,10,5000,.5,false).billed,3.5);
  assert.equal(chargeableWeight(.3,1,1,1,5000,.1,false).billed,.30000000000000004);
  assert.throws(()=>chargeableWeight(3,40,30,25,0,.5,true));
});
test('all 105 pages have complete localized HTML and reciprocal SEO metadata',async()=>{
  const entries=new Map();
  globalThis.caches={default:{async match(req){return entries.get(req.url)?.clone();},async put(req,res){entries.set(req.url,res.clone());}}};
  const {default:worker}=await import('../dist/client/_worker.js');
  const env={ASSETS:{fetch:async()=>new Response('body{}',{headers:{'content-type':'text/css'}})}};
  const pending=[];
  const ctx={waitUntil(p){pending.push(p);},passThroughOnException(){}};
  const fetch=(path,headers={accept:'text/html'})=>worker.fetch(new Request(base+path,{headers}),env,ctx);
  const paths=['/','/spreadsheet','/qc','/shipping','/guides','/articles','/faq',...copy.map(a=>`/articles/${a.slug}`)];
  await mkdir(new URL('../work/html/',import.meta.url),{recursive:true});
  for(const lang of langs) {
    const n=langs.indexOf(lang);
    for(const path of paths) {
      const url=localized(path,lang);
      const res=await fetch(url);
      assert.equal(res.status,200,url);
      const html=await res.text();
      const visible=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');
      assert.match(html,new RegExp(`<html lang="${lang}"`),url);
      assert.ok(html.includes(`rel="canonical" href="${base+url}"`),`canonical ${url}`);
      assert.equal((html.match(/rel="canonical"/g)||[]).length,1,url);
      assert.equal((visible.match(/<h1\b/g)||[]).length,1,`H1 ${url}`);
      for(const alternate of langs) assert.ok(html.includes(`hrefLang="${alternate}" href="${base+localized(path,alternate)}"`),`alternate ${alternate}: ${url}`);
      assert.ok(html.includes(`hrefLang="x-default" href="${base+path}"`),url);
      assert.doesNotMatch(html,/translate_a\/element|google_translate_element/);
      const article=copy.find(a=>path===`/articles/${a.slug}`);
      if(article) {
        assert.ok(visible.includes(escape(article.title[n])),`title ${url}`);
        for(const section of article.sections) for(const paragraph of section.paragraphs) {
          assert.ok(visible.includes(escape(paragraph[n])),`missing paragraph ${url}: ${paragraph[n].slice(0,45)}`);
          if(n)assert.ok(!visible.includes(escape(paragraph[0])),`English fallback ${url}`);
        }
        const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
        assert.ok(schemas.some(s=>s['@type']==='Article'&&s.inLanguage===lang&&s.mainEntityOfPage===base+url),`schema ${url}`);
      }
      if(path==='/articles')assert.equal((visible.match(/class="article-card"/g)||[]).length,14,url);
      if(path==='/') {
        assert.equal((visible.match(/class="clean-product-card"/g)||[]).length,12,url);
        for(const a of copy.slice(0,4))assert.ok(visible.includes(localized('/articles/'+a.slug,lang)),`latest article ${url}`);
      }
      // Other languages are linked deliberately; content links retain the selected locale.
      for(const a of visible.matchAll(/<a\b([^>]+)>/g)) {
        const href=/href="([^"]+)"/.exec(a[1])?.[1];
        if(!href||/hrefLang=/i.test(a[1]))continue;
        if(href.startsWith('/')&&lang!=='en')assert.ok(href===`/${lang}`||href.startsWith(`/${lang}/`),`wrong internal locale ${url}: ${href}`);
        if(href.startsWith('https:'))assert.equal(new URL(href).hostname,'cnfanssp.com',`unexpected outbound link ${href}`);
      }
      await writeFile(new URL(`../work/html/${lang}-${path==='/'?'home':path.slice(1).replaceAll('/','_')}.html`,import.meta.url),html);
    }
  }
  const sitemap=await (await fetch('/sitemap.xml')).text();
  assert.equal((sitemap.match(/<url>/g)||[]).length,105);
  for(const lang of langs)for(const path of paths)assert.ok(sitemap.includes(`<loc>${base+localized(path,lang)}</loc>`));
  const robots=await (await fetch('/robots.txt')).text();assert.ok(robots.includes(base+'/sitemap.xml'));
  const httpRedirect=await worker.fetch(new Request('http://spreadsheet-hipobuys.com/de/shipping?ref=test'),env,ctx);
  assert.equal(httpRedirect.status,301);
  assert.equal(httpRedirect.headers.get('location'),base+'/de/shipping?ref=test');
  const wwwRedirect=await worker.fetch(new Request('https://www.spreadsheet-hipobuys.com/fr'),env,ctx);
  assert.equal(wwwRedirect.status,301);
  assert.equal(wwwRedirect.headers.get('location'),base+'/fr');
  for(const path of ['/missing','/de/missing','/fr/articles/not-a-real-article','/zz/articles'])assert.equal((await fetch(path)).status,404,path);
  for(const [path,destination] of [['/de/shipping/','/de/shipping'],['/fr/','/fr']]) {
    const response=await fetch(path);assert.equal(response.status,301);assert.equal(response.headers.get('location'),base+destination);
  }
  await Promise.all(pending);
  assert.equal((await fetch('/de/articles')).headers.get('x-hipo-cache'),'HIT');
  assert.equal((await fetch('/de/articles',{accept:'text/x-component',rsc:'1'})).headers.get('x-hipo-cache'),null);
  console.log('Verified: 105 pages, 70 article versions, 5 hubs, reciprocal hreflang, sitemap, redirects and 404s.');
});
