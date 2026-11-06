import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
const root=process.cwd();
const languages=['en','de','es','fr','it'];
const cache=new Map();
const read=path=>{if(!cache.has(path))cache.set(path,readFile(join(root,path),'utf8'));return cache.get(path);};
const en=JSON.parse(await read('app/content/november-en.json'));
const ui=JSON.parse(await read('app/content/november-ui.json'));
const slugs=en.map(a=>a.slug);
const sitemap=await read('out/sitemap.xml');
const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
assert.equal(urls.length,190);
assert.equal(new Set(urls).size,190);
const revisionSlugs=['joyagoo-spreadsheet-shipping-budget-checklist','joyagoo-product-link-not-working','joyagoo-qc-photos-listing-comparison-guide','joyagoo-listing-availability-price-domestic-freight-recheck'];
const schemas=html=>[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
let articlesChecked=0;
for(const lang of languages){
 const articles=JSON.parse(await read(`app/content/november-${lang}.json`));
 assert.deepEqual(articles.map(a=>a.slug),slugs,`${lang}: missing translations`);
 const home=await read(`out/${lang}/index.html`);
 const hub=await read(`out/${lang}/articles/index.html`);
 for(const [i,a] of articles.entries()){
  assert.equal(a.sections.length,9,`${lang}/${a.slug}: complete structure`);
  assert(a.sections.every(s=>s.paragraphs.length===2),`${lang}: complete paragraphs`);
  const words=a.sections.flatMap(s=>s.paragraphs).join(' ').split(/\s+/).length;
  assert(words>=(lang==='en'?1200:800),`${lang}/${a.slug}: incomplete body (${words})`);
  if(lang==='en')assert(words<=1800);
  if(lang!=='en')assert.notEqual(a.sections[0].paragraphs[0],en[i].sections[0].paragraphs[0]);
  const html=await read(`out/${lang}/articles/${a.slug}/index.html`);
  const schema=schemas(html).find(s=>s['@type']==='Article');
  assert.equal(schema?.datePublished,'2026-11-06');
  assert.equal(schema?.dateModified,'2026-11-06');
  assert.equal(schema?.headline,a.title);
  assert.equal(schema?.inLanguage,lang);
  assert(schema?.citation.length>=2);
  assert(home.includes(`href="/${lang}/articles/${a.slug}/"`));
  assert(hub.includes(`href="/${lang}/articles/${a.slug}/"`));
  articlesChecked++;
 }
 for(const [i,slug] of revisionSlugs.entries()){
  const html=await read(`out/${lang}/articles/${slug}/index.html`);
  assert(html.includes(ui[lang].updates[i][0]));
  assert.equal(schemas(html).find(s=>s['@type']==='Article')?.dateModified,'2026-11-06');
 }
 const faq=await read(`out/${lang}/faq/index.html`);
 const questions=schemas(faq).find(s=>s['@type']==='FAQPage')?.mainEntity;
 assert.equal(questions.length,21,`${lang}: FAQ parity`);
 assert.equal(new Set(questions.map(q=>q.name)).size,21,`${lang}: repeated FAQ`);
 const shipping=await read(`out/${lang}/shipping/index.html`);
 assert(shipping.includes(ui[lang].storage[1]),`${lang}: storage parity`);
 assert(shipping.includes(`#weight-comparison`));
 assert(!shipping.includes(`href="/${lang}/articles/volumetric-weight-guide/"`),'primary shipping CTA must use an owned indexable guide');
 for(const page of ['guide','shipping']){
  const html=await read(`out/${lang}/${page}/index.html`);
  assert(html.includes('<caption>'),`${lang}/${page}: payment table`);
 }
}
// Check all indexable output, not just the new routes.
for(const url of urls){
 const route=new URL(url).pathname;
 const lang=route.split('/')[1];
 const html=await read(`out${route}index.html`);
 assert(html.includes(`<html lang="${lang}">`),`${route}: document language`);
 assert.equal((html.match(/<h1(?:\s[^>]*)?>/g)||[]).length,1,`${route}: one H1`);
 assert(html.includes(`<link rel="canonical" href="${url}"`),`${route}: canonical`);
 assert(html.includes('name="robots" content="index, follow"'),`${route}: indexable`);
 assert.equal((html.match(/<script[^>]+src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-BWGRZFMW66"/g)||[]).length,1,`${route}: one GA4 loader`);
 for(const alternate of [...languages,'x-default']){
  const target=alternate==='x-default'?'en':alternate;
  const destination=`https://joyagoos.shop/${target}/${route.split('/').slice(2).join('/')}`;
  assert(html.includes(`hrefLang="${alternate}" href="${destination}"`),`${route}: alternate ${alternate}`);
 }
 for(const match of html.matchAll(/href="((?:\/(?:en|de|es|fr|it)\/|#)[^"]*)"/g)){
  const target=new URL(match[1],url);
  const destination=await read(`out${target.pathname}index.html`);
  if(target.hash)assert(destination.includes(`id="${target.hash.slice(1)}"`),`${route}: broken anchor ${match[1]}`);
 }
}
console.log(`November release verified: ${articlesChecked} new localized articles; 20 revised article pages; 21 FAQ answers per language; all 190 indexable pages pass metadata, hreflang, GA4 and internal-link checks.`);
