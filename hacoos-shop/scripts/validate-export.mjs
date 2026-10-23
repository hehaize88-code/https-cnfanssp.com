import { readdir, readFile, access } from 'node:fs/promises';
import { join, relative } from 'node:path';
import assert from 'node:assert/strict';
const files = [];
async function walk(dir) { for (const e of await readdir(dir, { withFileTypes: true })) { const p = join(dir, e.name); if (e.isDirectory()) await walk(p); else if (p.endsWith('.html')) files.push(p); } }
await walk('out');
const slugs = Object.keys(JSON.parse(await readFile('content/articles/en.json', 'utf8')));
const languages = ['en','es','fr','de','it'];
for (const lang of languages) {
  const prefix = lang === 'en' ? '' : `${lang}/`;
  const hub = await readFile(`out/${prefix}articles/index.html`, 'utf8');
  assert.equal((hub.match(/<h2>/g) || []).length, 15, `${lang}: hub count`);
  for (const slug of slugs) {
    const path = `${prefix}articles/${slug}/`;
    const html = await readFile(`out/${path}index.html`, 'utf8');
    assert.ok(html.includes(`<html lang="${lang}"`), `${path}: initial HTML language`);
    assert.ok(html.includes(`rel="canonical" href="https://hacoos.shop/${path}"`), `${path}: canonical`);
    for (const code of [...languages, 'x-default']) assert.ok(html.includes(`hrefLang="${code}"`) || html.includes(`hreflang="${code}"`), `${path}: alternate ${code}`);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: one H1`);
    assert.ok(!html.includes('cnfanssp.com'), `${path}: old destination`);
    assert.ok(hub.includes(`href="/${path}"`), `${path}: hub discovery`);
    for (const block of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) JSON.parse(block[1]);
    for (const match of html.matchAll(/href="(\/[^"?#]*)"/g)) {
      const target = match[1];
      if (target.startsWith('/_next/')) continue;
      await access(`out${target}${target.endsWith('/') ? 'index.html' : ''}`).catch(() => { throw new Error(`${path}: broken local link ${target}`); });
    }
  }
}
const sitemap = await readFile('out/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, 115, '115 canonical sitemap URLs');
assert.equal(new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1])).size, 115);
for (const lang of languages) for (const slug of slugs) assert.ok(sitemap.includes(`https://hacoos.shop/${lang === 'en' ? '' : lang + '/'}articles/${slug}/`));
for (const file of files) { const html = await readFile(file, 'utf8'); assert.ok(!html.includes('cnfanssp.com'), `${relative('out', file)}: old domain`); }
console.log('75 article pages, five hubs, reciprocal language links, JSON-LD, internal routes and 115 sitemap URLs verified.');
