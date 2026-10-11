import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'cloudflare-pages');
const manifestPath = path.join(root, 'content/static-export-manifest.json');
const langs = ['en', 'de', 'fr', 'es', 'it', 'pl'];
const origin = 'https://acbuys.shop';
const walk = directory => readdirSync(directory).sort().flatMap(name => {
  const file = path.join(directory, name);
  return statSync(file).isDirectory() ? walk(file) : [file];
});
const digest = file => createHash('sha256').update(readFileSync(file)).digest('hex');
const inventory = files => Object.fromEntries(files.sort().map(file => [path.relative(root, file).split(path.sep).join('/'), digest(file)]));
const sourceFiles = ['app', 'public', 'content/locales', 'scripts', 'build', 'worker'].flatMap(dir => walk(path.join(root, dir)));
sourceFiles.push(...['package.json', 'package-lock.json', 'vite.config.ts', 'next.config.ts', 'postcss.config.mjs'].map(file => path.join(root, file)));
const files = walk(output);
const pages = files.filter(file => path.basename(file) === 'index.html');
assert.equal(pages.length, 132, 'The complete six-language export must contain 132 pages');
const counts = Object.fromEntries(langs.map(lang => [lang, 0]));
const routes = new Set();
for (const file of pages) {
  const relative = path.relative(output, path.dirname(file)).split(path.sep).join('/');
  const route = relative ? `/${relative}/` : '/';
  const lang = langs.slice(1).includes(relative.split('/')[0]) ? relative.split('/')[0] : 'en';
  const html = readFileSync(file, 'utf8');
  counts[lang]++;
  routes.add(origin + route);
  assert.ok(html.includes(`<html lang="${lang}"`), `${route}: incorrect HTML language`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: expected one H1`);
  const links = html.match(/<link\b[^>]*>/g) || [];
  const canonical = links.filter(tag => /rel="canonical"/.test(tag));
  assert.equal(canonical.length, 1, `${route}: expected one canonical`);
  assert.ok(canonical[0].includes(`href="${origin}${route}"`), `${route}: incorrect canonical`);
  for (const alternate of [...langs, 'x-default']) {
    assert.equal(links.filter(tag => tag.includes(`hreflang="${alternate}"`)).length, 1, `${route}: missing ${alternate} alternate`);
  }
  assert.ok(/<script\b[^>]*src="\/site\.js\?v=20261007"/.test(html), `${route}: missing interactions`);
}
assert.deepEqual(counts, Object.fromEntries(langs.map(lang => [lang, 22])));
const sitemap = readFileSync(path.join(output, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, 132, 'Sitemap must include every language page once');
assert.deepEqual(new Set(urls), routes, 'Sitemap routes must match the exported pages');
assert.equal(readFileSync(path.join(root, 'public/site.js'), 'utf8'), readFileSync(path.join(output, 'site.js'), 'utf8'), 'Exported interactions are stale');
for (const file of files) assert.ok(statSync(file).size < 25 * 1024 * 1024, `Deployment file too large: ${file}`);
const current = { version: 1, pages: counts, source: inventory(sourceFiles), output: inventory(files) };
if (process.argv.includes('--write-manifest')) {
  writeFileSync(manifestPath, JSON.stringify(current, null, 2) + '\n');
  console.log('Recorded source and output hashes for the validated six-language export.');
} else {
  const expected = JSON.parse(readFileSync(manifestPath, 'utf8'));
  assert.deepEqual(current, expected, 'Source or export changed: rebuild and validate all language editions before publishing');
  console.log('PASS: verified source/output hashes, 132 pages, six languages, sitemap, canonicals and interactions.');
}
