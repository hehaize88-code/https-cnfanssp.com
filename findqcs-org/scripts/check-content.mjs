import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { articles } from '../lib/articles.js';
import { getLocalizedArticles } from '../lib/localizedArticles.js';
import { ARTICLE_LOCALES } from '../lib/articleLocales/index.js';
import { SITE_LANGUAGES } from '../lib/routing.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const slugs=articles.map(a=>a.slug);
assert.equal(new Set(slugs).size,slugs.length,'Duplicate article slug');
const failures=[];
for(const language of SITE_LANGUAGES) {
 const edition=getLocalizedArticles(language);
 assert.deepEqual(edition.map(a=>a.slug),slugs,`Article parity: ${language}`);
 for(const article of edition) {
  const name=`${language}/${article.slug}`;
  for(const field of ['title','description','seoTitle','heroAlt','quickAnswer','topic']) if(!article[field]) failures.push(`${name}: missing ${field}`);
  if(article.sections.length<5) failures.push(`${name}: incomplete workflow`);
  if(!article.cta.href) failures.push(`${name}: missing CTA destination`);
  if(!article.sources.length) failures.push(`${name}: missing sources`);
  if(new Set(article.sections.map(s=>s.id)).size!==article.sections.length) failures.push(`${name}: duplicate section IDs`);
  const assets=[article.heroImage,...article.sections.flatMap(s=>s.blocks.filter(b=>b.type==='figure').map(b=>b.image))];
  for(const asset of assets) if(!existsSync(path.join(root,'public',asset))) failures.push(`${name}: missing image ${asset}`);
  for(const slug of article.related) if(!slugs.includes(slug)) failures.push(`${name}: unknown related article ${slug}`);
  const eng=articles.find(a=>a.slug===article.slug);
  if(language!=='en') {
   if(article.title===eng.title||JSON.stringify(article.sections)===JSON.stringify(eng.sections)) failures.push(`${name}: English fallback`);
   // Two formerly misrouted topics must have their own translated data.
   if(['warehouse-measurement-guide','shipping-cost-checklist'].includes(article.slug)&&!ARTICLE_LOCALES[language][article.slug]) failures.push(`${name}: wrong legacy topic mapping`);
  }
  for(const section of article.sections) {
   if(!section.title||!section.blocks.length) failures.push(`${name}: empty section`);
   for(const b of section.blocks) {
    if(!['p','list','callout','table','figure'].includes(b.type)) failures.push(`${name}: unsupported block ${b.type}`);
    if(b.type==='table'&&b.rows.some(row=>row.length!==b.headers.length)) failures.push(`${name}: invalid table`);
   }
  }
 }
}
if(failures.length) {console.error(failures.join('\n'));process.exit(1);}
console.log(`Content checks passed: ${slugs.length} topics × ${SITE_LANGUAGES.length} languages = ${slugs.length*SITE_LANGUAGES.length} complete article pages.`);
