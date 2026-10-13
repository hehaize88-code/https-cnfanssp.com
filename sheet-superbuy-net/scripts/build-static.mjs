/** Production build: render complete pages, then apply reviewed offline translation catalogs.
 * No browser translation, hydration or network service is needed by a visitor.
 */
import fs from 'node:fs';
import path from 'node:path';
import {build} from 'esbuild';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {parse,serialize} from 'parse5';
import {pathToFileURL} from 'node:url';
import './prepare-content.mjs';
const root=process.cwd(),runtime=path.join(root,'.sites-runtime');fs.mkdirSync(runtime,{recursive:true});
const langs=['en','zh','de','fr','es','it','pt','pl','nl'];
const labels={en:'English',zh:'简体中文',de:'Deutsch',fr:'Français',es:'Español',it:'Italiano',pt:'Português',pl:'Polski',nl:'Nederlands'};
const base='https://sheet-superbuy.net';
const paths=['','spreadsheet','finds','qc','shipping','articles','faq'];
const entry=paths.map((p,i)=>`import * as p${i} from './app/${p?p+'/':''}page.tsx';`).join('\n')+`\nimport * as detail from './app/articles/[slug]/page.tsx';\nexport {articles} from './app/data.ts';\nexport {detail};\nexport const routes=[${paths.map((p,i)=>`{path:${JSON.stringify(p?'/'+p+'/':'/')},module:p${i}}`).join(',')}];`;
await build({stdin:{contents:entry,resolveDir:root,sourcefile:'static-entry.tsx',loader:'tsx'},bundle:true,platform:'node',format:'esm',outfile:path.join(runtime,'static-pages.mjs'),jsx:'automatic',external:['react','react-dom','react-dom/server'],plugins:[{name:'static-next-links',setup(b){b.onResolve({filter:/^next\/(link|navigation)$/},args=>({path:args.path,namespace:'static-next'}));b.onLoad({filter:/.*/,namespace:'static-next'},args=>({loader:'js',contents:args.path==='next/link'?`import React from 'react';export default function Link({children,prefetch,replace,scroll,...props}){return React.createElement('a',props,children)}`:`export function notFound(){throw Error('404')}export function usePathname(){return '/'}`}));}}]});
const compiled=await import(pathToFileURL(path.join(runtime,'static-pages.mjs'))+'?v='+Date.now());
const routes=[...compiled.routes,...compiled.articles.map(a=>({path:'/articles/'+a.slug+'/',module:compiled.detail,slug:a.slug}))];
const attr=(n,key)=>n.attrs?.find(a=>a.name===key)?.value;
const setAttr=(n,key,value)=>{n.attrs??=[];const a=n.attrs.find(a=>a.name===key);if(a)a.value=String(value);else n.attrs.push({name:key,value:String(value)});};
const omitAttr=(n,key)=>{if(n.attrs)n.attrs=n.attrs.filter(a=>a.name!==key);};
const prefix=(p,lang)=>lang==='en'?p:'/'+lang+(p==='/'?'/':p);
const walk=(n,fn)=>{fn(n);for(const c of n.childNodes??[])walk(c,fn);};
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const textKeys=new Set();
const nameSet=new Set(['Superbuy','USD','QC','CNY','Taobao','Tmall','JD','Weidian','1688',...Object.values(labels)]);
const isText=s=>/[A-Za-z]{2}/.test(s)&&!nameSet.has(s)&&!/^https?:\/\//.test(s)&&!/^SH-|^JK-|^HD-|^TS-|^PT-|^HW-|^AC-|^JR-/.test(s);
const inheritedNoTranslate=n=>{for(let p=n;p;p=p.parentNode)if(attr(p,'translate')==='no'||p.tagName==='script'||p.tagName==='style')return true;return false;};
function translatable(n,callback){
 if(inheritedNoTranslate(n))return;
 if(n.nodeName==='#text'&&isText(n.value.trim()))callback(n.value.trim(),t=>{const m=n.value.match(/^(\s*)([\s\S]*?)(\s*)$/);n.value=m[1]+t+m[3];});
 for(const key of ['alt','placeholder','aria-label','title']){const v=attr(n,key);if(v&&isText(v))callback(v,t=>setAttr(n,key,t));}
}
function jsonStrings(obj,fn){if(Array.isArray(obj))return obj.map(x=>jsonStrings(x,fn));if(obj&&typeof obj==='object')return Object.fromEntries(Object.entries(obj).map(([k,v])=>[k,['name','headline','description','text','caption'].includes(k)&&typeof v==='string'&&isText(v)?fn(v):jsonStrings(v,fn)]));return obj;}
const prepared=[];
for(const route of routes){
 const props=route.slug?{params:Promise.resolve({slug:route.slug})}:{};
 const meta=route.module.generateMetadata?await route.module.generateMetadata(props):route.module.metadata;
 const element=await route.module.default(props);
 const html=renderToStaticMarkup(element);const doc=parse('<!doctype html><html><head></head><body>'+html+'</body></html>');
 walk(doc,n=>{translatable(n,(s)=>textKeys.add(s));if(n.tagName==='script'&&attr(n,'type')==='application/ld+json'){try{jsonStrings(JSON.parse(n.childNodes[0].value),s=>{textKeys.add(s);return s;});}catch(e){throw new Error('Invalid JSON-LD in '+route.path,{cause:e});}}});
 for(const s of [meta.title,meta.description])if(s&&isText(s))textKeys.add(s);
 prepared.push({path:route.path,slug:route.slug,meta,html});
}
fs.writeFileSync(path.join(runtime,'translation-input.json'),JSON.stringify([...textKeys],null,2));
fs.writeFileSync(path.join(runtime,'english-pages.json'),JSON.stringify(prepared));
if(process.argv.includes('--extract')){console.log(`Extracted ${prepared.length} pages, ${textKeys.size} complete text strings.`);process.exit(0);}
const out=path.join(root,'dist/client');fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});fs.cpSync('public',out,{recursive:true});
const css=fs.readFileSync('app/globals.css','utf8').replace('@import "tailwindcss";','');fs.writeFileSync(path.join(out,'site.css'),css);
const sitemap=[];let total=0;
for(const lang of langs){
 const translations=lang==='en'?{}:JSON.parse(fs.readFileSync(`content/locales/${lang}.json`,'utf8'));
 const t=s=>{if(lang==='en'||!isText(s))return s;if(!translations[s])throw new Error(`Missing ${lang} translation: ${s.slice(0,100)}`);return translations[s];};
 for(const page of prepared){
  const route=prefix(page.path,lang);const doc=parse('<!doctype html><html><head></head><body>'+page.html+'</body></html>');
  walk(doc,n=>{
   translatable(n,(s,put)=>put(t(s)));
   if(n.tagName==='a'){
    const switchLang=attr(n,'data-locale-switch');const h=attr(n,'href');
    if(switchLang){setAttr(n,'href',prefix(page.path,switchLang));if(switchLang===lang){setAttr(n,'aria-current','true');setAttr(n,'class','active');}}
    else if(h?.startsWith('/')&&!h.startsWith('//')&&!/\.(svg|png|webp|jpg|gif|xml|txt)$/.test(h))setAttr(n,'href',prefix(h.endsWith('/')||h.includes('#')?h:h+'/',lang));
   }
   if(attr(n,'data-active-language')!==undefined){n.childNodes=[{nodeName:'#text',value:labels[lang],parentNode:n}];}
   if(n.tagName==='script'&&attr(n,'type')==='application/ld+json'){
    let data=jsonStrings(JSON.parse(n.childNodes[0].value),t);
    function localize(o){if(Array.isArray(o))return o.map(localize);if(o&&typeof o==='object')return Object.fromEntries(Object.entries(o).map(([k,v])=>[k,localize(v)]));if(typeof o==='string'&&o.startsWith(base+'/')&&!/\.(png|svg|jpg)$/.test(o))return base+prefix(o.slice(base.length),lang);return o;}
    data=localize(data);data.inLanguage=lang==='zh'?'zh-CN':lang;n.childNodes[0].value=JSON.stringify(data).replaceAll('<','\\u003c');
   }
  });
  const title=t(page.meta.title),description=t(page.meta.description);const head=`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="index,follow,max-image-preview:large"><meta name="description" content="${escape(description)}"><title>${escape(title)}</title><link rel="canonical" href="${base+route}">${langs.map(l=>`<link rel="alternate" hreflang="${l==='zh'?'zh-CN':l}" href="${base+prefix(page.path,l)}">`).join('')}<link rel="alternate" hreflang="x-default" href="${base+page.path}"><meta property="og:type" content="${page.slug?'article':'website'}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${base+route}"><meta property="og:image" content="${base}/og.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(title)}"><meta name="twitter:description" content="${escape(description)}"><link rel="icon" href="/favicon.svg"><link rel="stylesheet" href="/site.css?v=20261013"><script defer src="/site.js?v=20261013"></script><script async src="https://www.googletagmanager.com/gtag/js?id=G-H4PY5G9L1M"></script>`;
  const htmlElement=doc.childNodes.find(x=>x.tagName==='html');setAttr(htmlElement,'lang',lang==='zh'?'zh-CN':lang);
  const headNode=htmlElement.childNodes.find(x=>x.tagName==='head');const sourceHead=parse('<html><head>'+head+'</head><body></body></html>').childNodes.find(x=>x.tagName==='html').childNodes.find(x=>x.tagName==='head');headNode.childNodes=sourceHead.childNodes;for(const c of headNode.childNodes)c.parentNode=headNode;
  const folder=path.join(out,route);fs.mkdirSync(folder,{recursive:true});fs.writeFileSync(path.join(folder,'index.html'),serialize(doc));
  sitemap.push(`<url><loc>${base+route}</loc><lastmod>2026-10-13</lastmod>${langs.map(l=>`<xhtml:link rel="alternate" hreflang="${l==='zh'?'zh-CN':l}" href="${base+prefix(page.path,l)}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${base+page.path}"/></url>`);total++;
 }
}
fs.writeFileSync(path.join(out,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'+sitemap.join('')+'</urlset>');
fs.copyFileSync(path.join(out,'sitemap.xml'),'public/sitemap.xml');
fs.writeFileSync(path.join(out,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
fs.writeFileSync(path.join(out,'_headers'),'/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Cache-Control: public, max-age=0, must-revalidate\n');
fs.writeFileSync(path.join(out,'404.html'),'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found</title><link rel="stylesheet" href="/site.css"></head><body><main class="article-page"><h1>Page not found</h1><p>The requested page is unavailable.</p><a href="/">Superbuy Spreadsheet home</a></main></body></html>');
fs.writeFileSync(path.join(out,'release.json'),JSON.stringify({release:'2026-10-13-multilingual-seo',languages:langs,articlesPerLanguage:compiled.articles.length,pages:total}));
// Support existing static-host output directories without a hosting-setting change.
fs.rmSync('out',{recursive:true,force:true});fs.cpSync(out,'out',{recursive:true});
console.log(`Built ${total} indexable pages: ${compiled.articles.length} articles in each of ${langs.length} languages.`);
