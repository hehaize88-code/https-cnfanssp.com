import assert from 'node:assert/strict';
import worker from '../src/index.js';
import {seoArticles} from '../src/content.js';
const origin='https://findqcs.store';
const languages=['en','de','es','fr','it'];
const get=async(p)=>{const r=await worker.fetch(new Request(origin+p));return {r,html:await r.text()};};
for(const lang of languages){
 const prefix=lang==='en'?'':`/${lang}`;
 const articles=seoArticles[lang];assert.equal(articles.length,18);
 assert.deepEqual(articles.map(x=>x.slug),seoArticles.en.map(x=>x.slug));
 const home=await get(prefix||'/');assert.equal(home.r.status,200);assert.equal((home.html.match(/class="seo-card /g)||[]).length,4);
 for(const a of articles.slice(0,4))assert.ok(home.html.includes(`${prefix}/articles/${a.slug}`));
 const list=await get(prefix+'/articles');assert.equal((list.html.match(/class="seo-card /g)||[]).length,18);
 assert.ok(list.html.includes('"numberOfItems":18'));
 for(let i=0;i<articles.length;i++){
  const a=articles[i],en=seoArticles.en[i];assert.equal(a.sections.length,en.sections.length);
  assert.ok(a.summary && !a.summary.includes('undefined'));
  for(let j=0;j<a.sections.length;j++){
   const [heading,body]=a.sections[j];assert.ok(heading&&body);
   if(lang!=='en') {assert.notEqual(body,en.sections[j][1]);assert.ok(body.length>en.sections[j][1].length*.55,`${lang}:${a.slug}:${j} incomplete`);}
  }
  const path=prefix+'/articles/'+a.slug;const {r,html}=await get(path);assert.equal(r.status,200);
  assert.ok(html.includes(`<html lang="${lang}">`));assert.ok(html.includes(`<link rel="canonical" href="${origin}${path}">`));
  assert.ok(html.includes('hreflang="x-default"'));assert.equal((html.match(/rel="alternate" hreflang=/g)||[]).length,6);
  assert.equal((html.match(/<section id="step-/g)||[]).length,a.sections.length);
  assert.ok(!html.includes('<p>undefined</p>'));assert.ok(!html.includes('"@type":"FAQPage"'));
  for(const rel of a.related){assert.ok(articles.some(x=>x.slug===rel));}
  if(i<4){assert.ok(!html.includes('<figure class="article-evidence-photo">'));const words=[a.title,a.description,a.summary,...a.sections.flat()].join(' ').split(/\s+/).length;if(lang==='en')assert.ok(words>=1200 && words<=1800);}
 }
}
for(const p of ['/en','/en/','/en/articles']){const {r}=await get(p);assert.equal(r.status,301);assert.equal(r.headers.get('location'),origin+(p.replace(/^\/en/,'').replace(/\/$/,'')||'/'));}
for(const p of ['/favicon.ico','/favicon.png']){const {r}=await get(p);assert.equal(r.status,200);assert.equal(r.headers.get('content-type'),'image/png');}
const {html:xml}=await get('/sitemap.xml');const urls=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]);assert.equal(urls.length,160);assert.equal(new Set(urls).size,160);
for(const url of urls){const {r,html}=await get(new URL(url).pathname);assert.equal(r.status,200);assert.ok(!html.includes('content="noindex'));const links=[...html.matchAll(/<a[^>]+href="([^"]+)"/g)].map(x=>x[1]);for(const href of links){const u=new URL(href,url);assert.ok(['findqcs.store','www.cnfanssp.com','cnfanssp.com'].includes(u.hostname),href);}}
assert.equal((await get('/articles/missing-page')).r.status,404);
console.log('PASS: 90 articles, 160 indexable routes, five-language parity, four homepage cards, internal links and canonical redirects.');
