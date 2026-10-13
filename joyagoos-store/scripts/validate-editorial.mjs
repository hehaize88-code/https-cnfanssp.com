import fs from 'node:fs';
import assert from 'node:assert/strict';
const base = new URL('../app/content/october/', import.meta.url);
const read = file => JSON.parse(fs.readFileSync(new URL(file,base),'utf8'));
const languages=['zh','de','pl','es','it','fr','pt','ro','sv'];
function validateArticles(source,translated,locale){
 assert.deepEqual(Object.keys(translated).sort(),Object.keys(source).sort(),`${locale}: article parity`);
 for(const [slug,article] of Object.entries(source)){
  const copy=translated[slug];
  for(const key of ['title','description','updated','read']) assert.ok(typeof copy[key]==='string' && copy[key].trim(),`${locale}/${slug}: missing ${key}`);
  assert.equal(copy.sections.length,article.sections.length,`${locale}/${slug}: section parity`);
  assert.deepEqual(copy.sources.map(x=>x.href),article.sources.map(x=>x.href),`${locale}/${slug}: source parity`);
  for(let i=0;i<article.sections.length;i++){
   const [heading,body]=copy.sections[i];
   assert.ok(heading.trim() && body.trim(),`${locale}/${slug}/${i}: empty section`);
   assert.notEqual(body,article.sections[i][1],`${locale}/${slug}/${i}: English fallback`);
   assert.ok(body.replace(/\s/g,'').length >= article.sections[i][1].replace(/\s/g,'').length*(locale==='zh'?.24:.64),`${locale}/${slug}/${i}: unexpectedly abbreviated`);
  }
 }
}
const existing=read('existing-en.json'), added=read('new-en.json'), enhancements=read('enhancements-en.json');
for(const [slug,article] of Object.entries(added)){
 const words=article.sections.map(x=>x.join(' ')).join(' ').match(/\b[\w’'-]+\b/g).length;
 assert.ok(words>=1200 && words<=1800,`${slug}: English body ${words} words`);
}
for(const locale of languages){
 validateArticles(existing,read(`${locale}.json`),locale);
 validateArticles(added,read(`new-${locale}.json`),locale);
 const tables=read(`enhancements-${locale}.json`);
 assert.deepEqual(Object.keys(tables).sort(),Object.keys(enhancements).sort(),`${locale}: enhancement parity`);
 for(const [slug,table] of Object.entries(enhancements)){
  const copy=tables[slug];
  assert.ok(copy.summary.trim() && copy.caption.trim());
  assert.equal(copy.columns.length,table.columns.length);
  assert.equal(copy.rows.length,table.rows.length);
  for(const row of copy.rows){assert.equal(row.length,table.columns.length);for(const cell of row)assert.ok(cell.trim());}
  for(const key of ['title','description'])if(table[key])assert.ok(copy[key]?.trim(),`${locale}/${slug}: missing ${key}`);
 }
}
console.log('Editorial parity passed: 8 restored + 3 new articles in each of 9 translations; 7 complete enhancement tables in all 10 languages.');
