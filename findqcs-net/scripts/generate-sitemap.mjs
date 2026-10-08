import {readFile,writeFile} from "node:fs/promises";

// Keep all existing English URLs and add their fully rendered language versions.
const file = new URL("../public/sitemap.xml",import.meta.url);
const current = await readFile(file,"utf8");
const paths = new Set([...current.matchAll(/<loc>https:\/\/findqcs\.net([^<]*)<\/loc>/g)].map(m=>m[1]).filter(p=>!/^\/(de|fr|es|it)\//.test(p)));
for (const slug of ["no-qc-photos-found","sneaker-qc-photo-checklist","seller-photos-vs-warehouse-qc"]) paths.add(`/articles/${slug}/`);
const languages = ["en","de","fr","es","it"];
const url = (path,lang) => `https://findqcs.net${lang==='en'?'':'/'+lang}${path}`;
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
for(const path of [...paths].sort()) for(const lang of languages) {
  xml+=`  <url><loc>${url(path,lang)}</loc><lastmod>2026-10-08</lastmod>`;
  for(const alternate of languages) xml+=`<xhtml:link rel="alternate" hreflang="${alternate}" href="${url(path,alternate)}"/>`;
  xml+=`<xhtml:link rel="alternate" hreflang="x-default" href="${url(path,'en')}"/></url>\n`;
}
xml+='</urlset>\n';
await writeFile(file,xml);
console.log(`${paths.size*languages.length} sitemap URLs`);
