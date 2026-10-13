import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const languages=['en','de','es','fr','it'];
const originals=JSON.parse(await readFile(join(root,'app/content/research-en.json'),'utf8'));
const slugs=originals.map(a=>a.slug);
let checked=0;
for(const lang of languages){
 const articles=JSON.parse(await readFile(join(root,`app/content/research-${lang}.json`),'utf8'));
 assert.deepEqual(articles.map(a=>a.slug),slugs,`${lang}: article parity`);
 const hub=await readFile(join(root,`out/${lang}/articles/index.html`),'utf8');
 const home=await readFile(join(root,`out/${lang}/index.html`),'utf8');
 assert(!/SEO PUBLISHING ORDER|SHOP CONTENT LANES/.test(hub),'Internal editorial labels must not be published');
 assert.equal((home.match(/class="research-card"/g)||[]).length,4,`${lang}: four homepage article cards`);
 for(const [index,article] of articles.entries()){
  const words=article.sections.flatMap(s=>s.paragraphs).join(' ').split(/\s+/).length;
  assert(words >= (lang==='en'?1000:700),`${lang}/${article.slug}: incomplete body (${words})`);
  assert.equal(article.sections.length,originals[index].sections.length,`${lang}: missing section`);
  if(lang!=='en')assert.notEqual(article.sections[0].paragraphs[0],originals[index].sections[0].paragraphs[0],`${lang}: English fallback`);
  const html=await readFile(join(root,`out/${lang}/articles/${article.slug}/index.html`),'utf8');
  assert(html.includes(`<html lang="${lang}">`),`${lang}: document language`);
  assert.equal((html.match(/<h1(?:\s[^>]*)?>/g)||[]).length,1,`${lang}: one H1`);
  for(const alternate of [...languages,'x-default']){
   const target=alternate==='x-default'?'en':alternate;
   assert(html.includes(`hrefLang="${alternate}" href="https://joyagoos.shop/${target}/articles/${article.slug}/"`),`${lang}: alternate ${alternate}`);
  }
  assert(hub.includes(`href="/${lang}/articles/${article.slug}/"`),`${lang}: missing hub link`);
  assert(home.includes(`href="/${lang}/articles/${article.slug}/"`),`${lang}: missing homepage link`);
  const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
  const schema=schemas.find(s=>s['@type']==='Article');
  assert.equal(schema?.inLanguage,lang);
  assert.equal(schema?.datePublished,'2026-10-13');
  assert.equal(schema?.dateModified,'2026-10-13');
  assert.equal(schema?.headline,article.title);
  for(const link of html.matchAll(/href="#([^"]+)"/g))assert(html.includes(`id="${link[1]}"`),`Missing anchor ${link[1]}`);
  for(const link of html.matchAll(/href="(\/(?:en|de|es|fr|it)\/[^"#?]*)"/g)){
   const route=decodeURIComponent(link[1]);
   await readFile(join(root,'out',route,'index.html'));
  }
  if(article.slug.includes('shipping-budget')) assert(html.includes('id="weight-comparison"'),`${lang}: calculator missing`);
  checked++;
 }
 const articleDirs=(await readdir(join(root,`out/${lang}/articles`),{withFileTypes:true})).filter(e=>e.isDirectory());
 assert.equal(articleDirs.length,23,`${lang}: 23 article routes`);
}
console.log(`Research release verified: ${checked} complete localized new articles; 23 articles per language; homepage, hub, metadata, schema, TOC and internal links pass.`);
