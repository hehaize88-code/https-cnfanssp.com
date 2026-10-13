import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {parse} from 'parse5';
const root='dist/client',base='https://sheet-superbuy.net';
const release=JSON.parse(fs.readFileSync(root+'/release.json','utf8'));
const langs=release.languages;
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const select=(n,p)=>{const a=[];function walk(x){if(p(x))a.push(x);for(const c of x.childNodes??[])walk(c);}walk(n);return a;};
const classes=(n,c)=>(attr(n,'class')??'').split(/\s+/).includes(c);
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
function load(route){return parse(fs.readFileSync(path.join(root,route,'index.html'),'utf8'));}
const english=JSON.parse(fs.readFileSync('.sites-runtime/english-pages.json','utf8'));
const articles=english.filter(p=>p.slug);
assert.equal(articles.length,19);assert.equal(new Set(articles.map(p=>p.slug)).size,19);
let count=0,links=0;
for(const lang of langs){
 for(const page of english){
  const route=lang==='en'?page.path:'/'+lang+page.path;
  const d=load(route);const html=select(d,n=>n.tagName==='html')[0];
  assert.ok(!text(d).includes('\\fn')&&!text(d).includes('\\fscx'),route+' translation formatting artifacts');
  assert.equal(attr(html,'lang'),lang==='zh'?'zh-CN':lang,route+' language');
  assert.equal(select(d,n=>n.tagName==='h1').length,1,route+' H1');
  assert.equal(attr(select(d,n=>n.tagName==='link'&&attr(n,'rel')==='canonical')[0],'href'),base+route);
  const alternatives=select(d,n=>n.tagName==='link'&&attr(n,'hreflang'));
  assert.equal(alternatives.length,10,route+' hreflang');assert.equal(new Set(alternatives.map(n=>attr(n,'hreflang'))).size,10);
  assert.equal(select(d,n=>n.tagName==='meta'&&attr(n,'name')==='robots'&&attr(n,'content').includes('noindex')).length,0,route+' indexable');
  const title=text(select(d,n=>n.tagName==='title')[0]);assert.ok(title.length>10);assert.ok(title.includes('Superbuy'),route+' title brand');
  for(const a of select(d,n=>n.tagName==='a')){
   const h=attr(a,'href');if(!h||h.startsWith('#'))continue;
   if(h.startsWith('/')){const target=new URL(h,base);const targetFile=target.pathname.includes('.')?path.join(root,target.pathname):path.join(root,target.pathname,'index.html');assert.ok(fs.existsSync(targetFile),route+' broken internal link '+h);if(attr(a,'data-locale-switch')===undefined&&lang!=='en')assert.ok(target.pathname.startsWith('/'+lang+'/'),route+' wrong language link '+h);links++;}
   else {const u=new URL(h);assert.ok(['www.cnfanssp.com','cnfanssp.com'].includes(u.hostname),route+' unexpected external link '+h);}
  }
  for(const image of select(d,n=>n.tagName==='img')){const src=attr(image,'src');assert.ok(src?.startsWith('/'));assert.ok(fs.existsSync(path.join(root,src)),route+' missing image '+src);}
  for(const script of select(d,n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json'))JSON.parse(text(script));
  if(page.path==='/articles/'){assert.equal(select(d,n=>classes(n,'article-index-card')).length,19,route+' article count');}
  if(page.path==='/'){
   assert.equal(select(d,n=>n.tagName==='div'&&classes(n,'clean-article-list'))[0].childNodes.filter(n=>n.tagName==='a').length,4,route+' latest articles');
   const headings=select(d,n=>n.tagName==='h3').map(text).join(' ');
   for(const brand of ['HOKA','New Balance','Autry','Corteiz','Stussy','Akimbo Club','6PM','Lululemon','Canada Goose','Chrome Hearts'])assert.ok(headings.includes(brand),route+' preserved product brand '+brand);
  }
  if(page.slug){
   const source=load(page.path);const body=select(d,n=>classes(n,'article-body'))[0];const enBody=select(source,n=>classes(n,'article-body'))[0];
   assert.equal(select(body,n=>n.tagName==='p').length,select(enBody,n=>n.tagName==='p').length,route+' complete paragraphs');
   assert.equal(select(body,n=>n.tagName==='section').length,select(enBody,n=>n.tagName==='section').length,route+' complete sections');
   assert.equal(select(body,n=>n.tagName==='li').length,select(enBody,n=>n.tagName==='li').length,route+' complete lists');
   const content=text(body);assert.ok(content.length>(lang==='zh'?1000:3000),route+' full article');
   if(lang!=='en'){assert.notEqual(title,page.meta.title,route+' translated title');}
   const articleSchema=select(d,n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json').map(n=>JSON.parse(text(n))).find(o=>o['@type']==='Article');assert.ok(articleSchema);assert.equal(articleSchema.mainEntityOfPage,base+route);assert.equal(articleSchema.dateModified,'2026-10-13');
   assert.equal(select(d,n=>n.tagName==='script'&&text(n).includes('FAQPage')).length,0,route+' no article FAQ');
  }
  count++;
 }
}
assert.equal(count,234);assert.equal((fs.readFileSync(root+'/sitemap.xml','utf8').match(/<loc>/g)??[]).length,count);
const js=fs.readFileSync(root+'/site.js','utf8');for(const event of ['product_click','search_submit','main_site_click','shipping_calculator_use'])assert.ok(js.includes(event));
assert.ok(!js.includes('translate.google.com'));assert.ok(fs.readFileSync(root+'/404.html','utf8').includes('noindex'));
console.log(`PASS: ${count} pages; 19 full articles in every language; ${links} internal links; canonical/hreflang, assets, schemas and content parity verified.`);
