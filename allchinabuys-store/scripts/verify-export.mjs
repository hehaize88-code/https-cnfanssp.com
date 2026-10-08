import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { parse } from 'parse5';
const root='out',site='https://allchinabuys.store',languages=['en','de','fr','es','it','pl'];
const manifest=JSON.parse(fs.readFileSync(path.join(root,'release.json'),'utf8'));
assert.equal(manifest.articles,23);
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const flat=n=>[n,...(n.childNodes||[]).flatMap(flat)];
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
const localFile=route=>{const r=route.replace(/^\//,'').replace(/\/$/,'');for(const f of [r+'.html',r+'/index.html',r?r:'index.html'])if(fs.existsSync(path.join(root,f)))return path.join(root,f);return null;};
const files=[];function scan(dir){for(const f of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,f.name);if(f.isDirectory()&&f.name!=='_next')scan(p);else if(f.name.endsWith('.html'))files.push(p);}}scan(root);
let checked=0;
const articles=Object.fromEntries(languages.map(l=>[l,new Set()]));
for(const file of files){
 const html=fs.readFileSync(file,'utf8'),nodes=flat(parse(html));const h=nodes.find(n=>n.tagName==='html'),lang=attr(h,'lang'),route=attr(h,'data-page');
 assert(languages.includes(lang),file+': html language');
 const canonical=nodes.filter(n=>n.tagName==='link'&&attr(n,'rel')==='canonical');assert.equal(canonical.length,1,file+': canonical count');
 const expected=site+(lang==='en'?route:'/'+lang+(route==='/'?'/':route));assert.equal(attr(canonical[0],'href'),expected,file+': canonical');
 if(!['/404','/_not-found'].includes(route)){
  const alternatives=nodes.filter(n=>n.tagName==='link'&&attr(n,'hreflang'));
  assert.equal(alternatives.length,7,file+': hreflang set');
  for(const alt of alternatives)assert(localFile(new URL(attr(alt,'href')).pathname),file+': alternate missing');
 }
 const main=nodes.find(n=>n.tagName==='main'),visible=main?text(main):'';
 assert(!/Keyword role and publishing order|primary SEO phrase|Why this article comes first in the SEO|Build internal links around|Create a crawlable|keyword cannibali/i.test(visible),file+': editorial instruction leaked');
 const englishFile=localFile(route),english=englishFile?flat(parse(fs.readFileSync(englishFile,'utf8'))):[];
 if(lang!=='en'){
  const src=english.filter(n=>n.tagName==='p').map(text);const dst=nodes.filter(n=>n.tagName==='p').map(text);
  assert.equal(dst.length,src.length,file+': paragraph parity');
  for(let i=0;i<src.length;i++)if(src[i].length>90&&/[A-Za-z]/.test(src[i]))assert.notEqual(dst[i],src[i],file+': English paragraph fallback');
 }
 for(const a of nodes.filter(n=>n.tagName==='a'&&attr(n,'href'))){const u=new URL(attr(a,'href'),site);if(u.origin===site){assert(localFile(u.pathname),file+': broken internal link '+u.pathname);if(attr(a.parentNode,'class')!=='locale-links'&&!attr(a,'hreflang'))assert(lang==='en'?!/^\/(de|fr|es|it|pl)(\/|$)/.test(u.pathname):u.pathname.startsWith('/'+lang+'/'),file+': language lost');}else assert(['cnfanssp.com','www.cnfanssp.com'].includes(u.hostname),file+': unexpected external link');}
 for(const form of nodes.filter(n=>n.tagName==='form')){const u=new URL(attr(form,'action'),site);assert.equal(u.pathname,'/search.html');assert.equal(u.hostname,'www.cnfanssp.com');assert(nodes.some(n=>n.tagName==='input'&&attr(n,'name')==='keywords'));assert(nodes.some(n=>n.tagName==='input'&&attr(n,'name')==='channelid'&&attr(n,'value')==='2'));}
 const selected=nodes.filter(n=>n.tagName==='option'&&n.attrs?.some(a=>a.name==='selected'));if(selected.length)assert.equal(attr(selected[0],'value'),lang,file+': switcher');
 assert(!nodes.some(n=>n.tagName==='script'&&attr(n,'src')?.includes('/_next/')),file+': English hydration script');
 if(route?.startsWith('/articles/')){
  articles[lang].add(route);const article=nodes.find(n=>n.tagName==='article'&&n.attrs?.some(a=>a.name==='data-article-body'));assert(article,file+': article body');
  if(lang==='en'&&route.includes('/allchinabuy-')&&JSON.parse(fs.readFileSync('lib/seo-articles-new.json')).some(a=>route.endsWith(a.slug)))assert(text(article).split(/\s+/).length>=1200,file+': new article length');
 }
 for(const script of nodes.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json')){const data=JSON.parse(text(script));for(const d of Array.isArray(data)?data:[data])if(d['@type']==='Article'){assert.equal(d.inLanguage,lang);assert.equal(d.mainEntityOfPage,expected);}}
 checked++;
}
for(const l of languages)assert.equal(articles[l].size,23,l+': article count');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);assert.equal(new Set(urls).size,urls.length,'duplicate sitemap URL');for(const u of urls)assert(localFile(new URL(u).pathname),'missing sitemap target '+u);
console.log(JSON.stringify({verifiedHtmlPages:checked,articlesPerLanguage:Object.fromEntries(languages.map(l=>[l,articles[l].size])),sitemapUrls:urls.length,checks:'Complete paragraphs, canonical/hreflang, language links, article schema, search and catalog destinations'}));
