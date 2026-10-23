import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const languages = ['en', 'es', 'fr', 'de', 'it'];
const content = Object.fromEntries(await Promise.all(languages.map(async lang => [lang, JSON.parse(await readFile(`content/articles/${lang}.json`, 'utf8'))])));
const slugs = Object.keys(content.en).sort();
assert.equal(slugs.length, 15);
for (const lang of languages) {
  const records = content[lang];
  assert.deepEqual(Object.keys(records).sort(), slugs, `${lang}: article parity`);
  const titles = new Set();
  for (const slug of slugs) {
    const a = records[slug];
    assert.equal(a.slug, slug);
    for (const field of ['title', 'description', 'readTime', 'updated', 'publishedISO', 'updatedISO', 'sourceNote']) assert.ok(a[field]?.trim(), `${lang}/${slug}: ${field}`);
    assert.ok(!titles.has(a.title), `${lang}: duplicate title`); titles.add(a.title);
    assert.ok(Number.isFinite(Date.parse(a.updatedISO)) && Date.parse(a.updatedISO) >= Date.parse(a.publishedISO));
    assert.ok(a.sections.length >= content.en[slug].sections.length - 1, `${lang}/${slug}: missing sections`);
    const paragraphs = a.sections.flatMap(s => s.paragraphs);
    assert.ok(a.sections.every(s => s.heading && s.paragraphs.length && s.paragraphs.every(p => p.trim().length > 40)));
    assert.equal(new Set(paragraphs).size, paragraphs.length, `${lang}/${slug}: repeated paragraph`);
    const words = paragraphs.join(' ').split(/\s+/).length;
    const originalWords = content.en[slug].sections.flatMap(s => s.paragraphs).join(' ').split(/\s+/).length;
    assert.ok(words >= originalWords * (lang === 'de' ? .65 : .78), `${lang}/${slug}: condensed translation (${words}/${originalWords})`);
    if (lang !== 'en') assert.ok(paragraphs.every(p => !content.en[slug].sections.some(s => s.paragraphs.includes(p))), `${lang}/${slug}: English fallback`);
    assert.ok(!/24[–-]72/.test(paragraphs.join(' ')), `${lang}/${slug}: outdated review estimate`);
    for (const source of a.sources || []) {
      const url = new URL(source.url);
      assert.equal(url.protocol, 'https:');
      assert.ok(url.hostname === 'hacoo.app' || url.hostname.endsWith('.hacoo.app'));
    }
  }
  console.log(`${lang}: ${slugs.length} complete, distinct articles`);
}
