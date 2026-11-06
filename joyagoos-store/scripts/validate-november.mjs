import fs from 'node:fs';
import assert from 'node:assert/strict';
const root=new URL('../app/content/november/',import.meta.url);
const read=lang=>JSON.parse(fs.readFileSync(new URL(`${lang}.json`,root),'utf8'));
const en=read('en');
const langs=['en','zh','de','pl','es','it','fr','pt','ro','sv'];
const ui=read('ui');
for(const lang of langs){
 const data=read(lang);
 assert.deepEqual(Object.keys(data),Object.keys(en),`${lang}: article parity`);
 assert.deepEqual(Object.keys(ui[lang]),Object.keys(ui.en),`${lang}: interface parity`);
 for(const [slug,a] of Object.entries(data)){
  assert.ok(a.title && a.description && a.updated === '2026-11-06');
  assert.equal(a.sections.length,en[slug].sections.length,`${lang}/${slug}: sections`);
  assert.deepEqual(a.sources.map(s=>s.href),en[slug].sources.map(s=>s.href));
  const body=a.sections.map(s=>s.join(' ')).join(' ');
  if(lang==='en'){
   const count=body.match(/\b[\w’'-]+\b/g).length;
   assert.ok(count>=1200 && count<=1800,`${slug}: ${count} words`);
  }
  a.sections.forEach(([heading,text],i)=>{
   assert.ok(heading && text.length > (lang==='zh'?120:300),`${lang}/${slug}/${i}: complete section`);
   if(lang!=='en')assert.notEqual(text,en[slug].sections[i][1],`${lang}/${slug}: English fallback`);
  });
 }
}
console.log('November editorial checks passed: two complete guides and interface copy in all 10 languages; English bodies 1,200–1,800 words.');
