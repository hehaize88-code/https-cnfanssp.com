import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'node:test';
const root=fileURLToPath(new URL('../dist/client/',import.meta.url));
const base='https://allchinabuys.shop';
const langs=['en','de','fr','es','pl','ja'];
const files=await readdir(path.join(root,'articles'),{withFileTypes:true});
const slugs=files.filter(f=>f.isDirectory()).map(f=>f.name);
const routes=['/','/spreadsheet/','/finds/','/guide/','/qc/','/shipping/','/faq/','/articles/',...slugs.map(s=>`/articles/${s}/`)];
const loc=(l,r)=>l==='en'?r:`/${l}${r}`;
const get=(l,r)=>readFile(path.join(root,loc(l,r),'index.html'),'utf8');
test('all 150 localized pages retain full content, canonical and reciprocal alternates',async()=>{
 assert.equal(slugs.length,17);assert.equal(routes.length,25);
 for(const route of routes){
  const english=await get('en',route);
  for(const lang of langs){
   const html=await get(lang,route);
   assert.ok(html.includes(`<html lang="${lang}">`),`${lang}${route}: language`);
   assert.ok(html.includes(`rel="canonical" href="${base}${loc(lang,route)}"`),`${lang}${route}: canonical`);
   for(const alt of langs){
    assert.ok(html.includes(`hreflang="${alt}" href="${base}${loc(alt,route)}"`),`${lang}${route}: alternate ${alt}`);
    assert.ok(html.includes(`href="${loc(alt,route)}" hreflang="${alt}"`),`${lang}${route}: switch ${alt}`);
   }
   assert.ok(html.includes(`hreflang="x-default" href="${base}${route}"`));
   assert.equal((html.match(/<h2\b/g)||[]).length,(english.match(/<h2\b/g)||[]).length,`${lang}${route}: headings`);
   if (english.includes('data-native-guide=')) {
    assert.ok((html.match(/<p\b/g) || []).length >= 12, `${lang}${route}: full native guide`);
    assert.ok(html.includes('<table'), `${lang}${route}: worked example`);
   } else assert.equal((html.match(/<p\b/g)||[]).length,(english.match(/<p\b/g)||[]).length,`${lang}${route}: paragraphs`);
   assert.equal((html.match(/<img\b/g)||[]).length,(english.match(/<img\b/g)||[]).length,`${lang}${route}: images`);
   assert.doesNotMatch(html,/__VINEXT_RSC|translate_a\/element|googtrans|google_translate_element/);
   if(lang!=='en')assert.notEqual(html.match(/<title>(.*?)<\/title>/s)?.[1],english.match(/<title>(.*?)<\/title>/s)?.[1]);
   for(const [,href] of html.matchAll(/<a[^>]+href="(\/[^"]*)"/g)){
    const p=href.split(/[?#]/)[0];
    if(p.endsWith('/'))await readFile(path.join(root,p,'index.html'));
   }
   for(const [,raw] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs))JSON.parse(raw);
  }
 }
});
test('every language has seventeen articles and only the existing main-site commercial destination',async()=>{
 for(const l of langs){
  const hub=await get(l,'/articles/');assert.equal((hub.match(/class="articles-index-card"/g)||[]).length,17);
  const home=await get(l,'/');assert.ok(home.includes('action="https://www.cnfanssp.com/search.html"'));assert.ok(home.includes('name="channelid" value="2"'));
  const sources = new Set(['www.allchinabuy.com', 'm.allchinabuy.com', 'weidian.com', 'faq-in.uniqlo.com', 'uk.express.dhl.com', 'dct.dhl.com', 'si.ups.com']);
  for (const route of routes) {
   const html = await get(l, route);
   for (const [tag, url] of html.matchAll(/<a\b[^>]*?href="(https?:\/\/[^"]+)"[^>]*>/g)) {
    const host = new URL(url.replaceAll('&amp;', '&')).hostname;
    if (tag.includes('data-citation="true"')) assert.ok(sources.has(host), url);
    else assert.equal(host, 'www.cnfanssp.com');
   }
   if (route === '/faq/') {
    const schema = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m => JSON.parse(m[1])).find(x => x['@type'] === 'FAQPage');
    assert.equal(schema.mainEntity.length, 20);
    assert.equal((html.match(/<article id="part-/g) || []).length, 20);
   }
   if (route.startsWith('/articles/') && route !== '/articles/') assert.match(html, /data-native-guide=|data-worksheet=/);
  }
 }
 const sm=await readFile(path.join(root,'sitemap.xml'),'utf8');assert.equal((sm.match(/<loc>/g)||[]).length,150);
 assert.doesNotMatch(sm,/404|\.seo|content\/locales/);
 const js=await readFile(path.join(root,'site.js'),'utf8');assert.match(js,/product_search/);assert.match(js,/outbound_click/);assert.match(js,/product_click/);assert.match(js,/category_click/);
});
