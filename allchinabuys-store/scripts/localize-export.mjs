import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse, parseFragment, serialize } from 'parse5';
const out=path.join(process.cwd(),'out');
const languages=['en','de','fr','es','it','pl'];
const names={en:'English',de:'Deutsch',fr:'Français',es:'Español',it:'Italiano',pl:'Polski'};
const dictionaries=JSON.parse(fs.readFileSync('lib/translations.json','utf8'));
const site='https://allchinabuys.store',collect=process.argv.includes('--collect'),files=[];
function scan(dir){for(const ent of fs.readdirSync(dir,{withFileTypes:true})){if(ent.isDirectory()){if(!languages.slice(1).includes(ent.name)&&ent.name!=='_next')scan(path.join(dir,ent.name));}else if(ent.name.endsWith('.html'))files.push(path.join(dir,ent.name));}}
scan(out);
const routeFor=file=>{let rel=path.relative(out,file).replaceAll(path.sep,'/');return rel==='index.html'?'/':'/'+rel.replace(/\/index\.html$|\.html$/,'');};
const routes=new Set(files.map(routeFor));
const attr=(node,name)=>node.attrs?.find(a=>a.name===name)?.value;
const setAttr=(node,name,value)=>{node.attrs??=[];const a=node.attrs.find(a=>a.name===name);if(a)a.value=value;else node.attrs.push({name,value});};
const localized=(route,lang)=>lang==='en'?route:`/${lang}${route==='/'?'/':route}`;
const words=new Set();
const plain=key=>!/[A-Za-z]/.test(key)||/^(?:https?:\/\/|[^\s]+@)|^G-[A-Z0-9]+$/.test(key)||['AllChinaBuy','ACBuy','English','Deutsch','Français','Español','Italiano','Polski','USD','QC','ID','FAQ'].includes(key);
function value(source,lang){const key=source.trim();if(!key||plain(key))return source;words.add(key);if(lang==='en'||collect)return source;const replacement=dictionaries[lang]?.[key];if(!replacement)throw new Error(`Missing ${lang}: ${key.slice(0,160)}`);return source.replace(key,replacement);}
function schema(node,lang){if(Array.isArray(node))return node.map(n=>schema(n,lang));if(node&&typeof node==='object'){const next={};for(const [k,v] of Object.entries(node)){if(typeof v==='string'&&['headline','description','name','text','keywords','alternateName'].includes(k))next[k]=value(v,lang);else if(typeof v==='string'&&['url','item','mainEntityOfPage','@id'].includes(k)&&v.startsWith(site)){next[k]=site+localized(v.slice(site.length)||'/',lang);}else next[k]=schema(v,lang);}if(['Article','WebSite','CollectionPage'].includes(node['@type']))next.inLanguage=lang;return next;}return node;}
function element(html){return parseFragment(html).childNodes[0];}
const textOf=n=>n?.nodeName==='#text'?n.value:(n?.childNodes||[]).map(textOf).join(' ');
if(!collect){
 execFileSync(process.execPath,[fileURLToPath(import.meta.url),'--collect'],{stdio:'pipe'});
 const missing=JSON.parse(fs.readFileSync('.localization/missing.json','utf8'));
 for(const [lang,keys] of Object.entries(missing))if(keys.length)throw new Error(`Missing ${lang} translations before export: ${keys.slice(0,4).join(' | ')}`);
}
const originals=files.map(file=>({file,route:routeFor(file),html:fs.readFileSync(file,'utf8')}));
for(const original of originals)for(const lang of collect?['en']:languages){
 const doc=parse(original.html);let head,body,htmlNode;
 function visit(node,skip=false){
  if(node.tagName==='html'){htmlNode=node;setAttr(node,'lang',lang);setAttr(node,'data-page',original.route);setAttr(node,'data-language',lang);}
  if(node.tagName==='head')head=node;if(node.tagName==='body')body=node;
  if(node.tagName==='script'){if(attr(node,'type')==='application/ld+json'){const text=node.childNodes?.map(n=>n.value||'').join('');node.childNodes[0].value=JSON.stringify(schema(JSON.parse(text),lang));}return;}
  if(node.nodeName==='#text'&&!skip){node.value=value(node.value,lang);return;}
  if(node.attrs){
   for(const a of node.attrs)if(['placeholder','aria-label','title','alt'].includes(a.name))a.value=value(a.value,lang);
   if(node.tagName==='meta'){const key=attr(node,'name')||attr(node,'property');if(['description','og:title','og:description','og:image:alt','twitter:title','twitter:description','twitter:image:alt'].includes(key))setAttr(node,'content',value(attr(node,'content')||'',lang));if(key==='og:url')setAttr(node,'content',site+localized(original.route,lang));}
   if(node.tagName==='a'){const href=attr(node,'href');if(href){const url=new URL(href,site),route=url.pathname.replace(/\/$/,'')||'/';if(url.origin===site&&routes.has(route)&&!href.startsWith('#'))setAttr(node,'href',localized(route,lang)+url.search+url.hash);}}
   if(node.tagName==='option'){if(attr(node,'value')===lang)setAttr(node,'selected','');else node.attrs=node.attrs.filter(a=>a.name!=='selected');}
  }
  if(node.childNodes){node.childNodes=node.childNodes.filter(n=>!(n.tagName==='script'&&attr(n,'type')!=='application/ld+json')&&!(n.tagName==='link'&&(attr(n,'as')==='script'||['canonical','alternate'].includes(attr(n,'rel'))))&&n.nodeName!=='#comment');for(const child of node.childNodes)visit(child,skip||['style','code','pre','noscript'].includes(node.tagName));}
 }
 visit(doc);
 // Translated HTML is complete at build time; no English hydration tree is shipped.
 const title=textOf(head.childNodes.find(n=>n.tagName==='title'));
 const description=attr(head.childNodes.find(n=>n.tagName==='meta'&&attr(n,'name')==='description')||{},'content');
 for(const key of ['og:title','twitter:title','og:description','twitter:description']){const m=head.childNodes.find(n=>n.tagName==='meta'&&(attr(n,'property')===key||attr(n,'name')===key));if(m)setAttr(m,'content',key.endsWith('title')?title:description||'');}
 head.childNodes.push(element(`<link rel="canonical" href="${site}${localized(original.route,lang)}">`));
 if(!['/404','/_not-found'].includes(original.route))for(const code of [...languages,'x-default'])head.childNodes.push(element(`<link rel="alternate" hreflang="${code}" href="${site}${localized(original.route,code==='x-default'?'en':code)}">`));
 const languageNav=element('<nav class="locale-links"></nav>');setAttr(languageNav,'aria-label',value('Language',lang));
 for(const code of languages)languageNav.childNodes.push(element(`<a href="${localized(original.route,code)}" lang="${code}" hreflang="${code}"${code===lang?' aria-current="page"':''}>${names[code]}</a>`));
 body.childNodes.push(languageNav);
 setAttr(htmlNode,'data-menu-open',value('Close',lang));setAttr(htmlNode,'data-menu-closed',value('Menu',lang));
 if(!collect){head.childNodes.push(element('<meta name="release" content="allchinabuys-store-20261008-six-languages">'));head.childNodes.push(element('<script defer src="/site-ui.js"></script>'));const dest=lang==='en'?original.file:path.join(out,lang,path.relative(out,original.file));fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,serialize(doc));}
}
if(collect){fs.mkdirSync('.localization',{recursive:true});fs.writeFileSync('.localization/source.json',JSON.stringify([...words].sort(),null,2));const missing={};for(const lang of languages.slice(1))missing[lang]=[...words].filter(k=>!dictionaries[lang]?.[k]);fs.writeFileSync('.localization/missing.json',JSON.stringify(missing,null,2));console.log(JSON.stringify({sourceStrings:words.size,missing:Object.fromEntries(Object.entries(missing).map(([l,v])=>[l,v.length]))}));}
else{
 const xml=fs.readFileSync(path.join(out,'sitemap.xml'),'utf8');const entries=[...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m=>m[1]);
 const mapped=entries.flatMap(entry=>languages.map(lang=>'<url>'+entry.replace(/<loc>(.*?)<\/loc>/,(_,url)=>`<loc>${site}${localized(url.replace(site,'')||'/',lang)}</loc>`)+'</url>'));
 fs.writeFileSync(path.join(out,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+mapped.join('\n')+'\n</urlset>');
 fs.appendFileSync(path.join(out,'_headers'),languages.slice(1).map(l=>`\n/${l}/*\n  Cache-Control: public, max-age=0, must-revalidate\n  Cloudflare-CDN-Cache-Control: public, max-age=86400, stale-while-revalidate=604800\n`).join('')+'\n/site-ui.js\n  Cache-Control: public, max-age=0, must-revalidate\n');
 fs.writeFileSync(path.join(out,'release.json'),JSON.stringify({release:'allchinabuys-store-20261008-six-languages',languages,articles:originals.filter(x=>x.route.startsWith('/articles/')).length,pagesPerLanguage:originals.length,sitemapUrls:mapped.length}));
 console.log(`Published ${originals.length} static pages in each of ${languages.length} languages; ${mapped.length} sitemap URLs.`);
}
