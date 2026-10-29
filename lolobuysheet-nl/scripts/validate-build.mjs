import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {load} from 'cheerio';
const origin='https://lolobuysheet.nl',root=path.resolve('dist');
const files=fs.readdirSync(root,{recursive:true}).filter(p=>p.endsWith('.html'));
const localeFiles=fs.readdirSync('src/data/locales').filter(p=>p.endsWith('.json'));
const langs=localeFiles.map(p=>p.replace('.json',''));
const en=JSON.parse(fs.readFileSync('src/data/locales/en.json'));
const fileFor=u=>path.join(root,decodeURIComponent(u.pathname),u.pathname.endsWith('/')?'index.html':'');
let links=0;
for(const name of files){
 const html=fs.readFileSync(path.join(root,name),'utf8'),$=load(html);
 assert.equal($('title').length,1,name+' title');assert($('title').text().trim(),name+' empty title');
 assert.equal($('link[rel="canonical"]').length,1,name+' canonical');
 const canonical=new URL($('link[rel="canonical"]').attr('href'));
 assert.equal(canonical.origin,origin,name+' origin');
 const alternates=$('link[rel="alternate"][hreflang]');assert.equal(alternates.length,25,name+' alternates');
 assert.equal(new Set(alternates.map((_,e)=>$(e).attr('hreflang')).get()).size,25);
 if(name!=='404.html')assert(fs.existsSync(fileFor(canonical)),name+' canonical target');
 alternates.each((_,e)=>{const u=new URL($(e).attr('href'));assert.equal(u.origin,origin);if(name!=='404.html')assert(fs.existsSync(fileFor(u)),name+' missing alternate '+u.href)});
 $('a[href]').each((_,e)=>{const href=$(e).attr('href');if(!href||href.startsWith('#')||/^(mailto|tel):/.test(href))return;const u=new URL(href,canonical);if(u.origin!==origin)return;links++;assert(fs.existsSync(fileFor(u)),name+' broken link '+href)});
 $('script[type="application/ld+json"]').each((_,e)=>JSON.parse($(e).html()));
 assert.equal((html.match(/window\.gtag\('config', 'G-0QCNL16SSV'/g)||[]).length,1,name+' GA config');
 if(name.includes('articles/')&&name.endsWith('/index.html')&&$('article.long-article').length){assert.equal($('h1').length,1);assert($('meta[name="robots"]').attr('content').startsWith('index,follow'));assert($('time').attr('datetime'));assert($('.article-next a').length===2);assert($('.related-article').length===4)}
}
const sitemap=load(fs.readFileSync(path.join(root,'sitemap.xml'),'utf8'),{xmlMode:true});const locs=sitemap('url>loc').map((_,e)=>sitemap(e).text()).get();assert.equal(locs.length,24*19);assert.equal(new Set(locs).size,locs.length);
for(const loc of locs){const f=fileFor(new URL(loc));assert(fs.existsSync(f));const $=load(fs.readFileSync(f));assert.equal($('link[rel="canonical"]').attr('href'),loc)}
for(const lang of langs){
 const prefix=lang==='en'?'':lang+'/';
 const hub=load(fs.readFileSync(path.join(root,prefix,'articles/index.html')));assert.equal(hub('.guide-grid .guide-card').length,13,lang+' article hub');
 const home=load(fs.readFileSync(path.join(root,prefix,'index.html'))),catalog=load(fs.readFileSync(path.join(root,prefix,'spreadsheet/index.html')));
 assert.notEqual(home('title').text(),catalog('title').text(),lang+' duplicate title');assert.equal(home('.priority-grid>a').length,6);
 for(const a of en.articles){const $=load(fs.readFileSync(path.join(root,prefix,'articles',a.slug,'index.html')));assert.equal($('.article-chapter').length,a.sections.length);assert.equal($('.chapter-copy>p').length,a.sections.reduce((n,s)=>n+s.paragraphs.length,0));}
}
assert(!fs.existsSync(path.join(root,'__qa-mobile.html')),'Remove local QA before publishing');
console.log(JSON.stringify({htmlPages:files.length,languages:langs.length,articlesPerLanguage:13,articlePages:24*13,sitemapUrls:locs.length,internalLinks:links,status:'passed'},null,2));
