import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';

const root = path.resolve('out');
const base = 'https://hacoovip.store';
const locales = ['en','de','es','fr','it'];
const sitemap = await readFile(path.join(root,'sitemap.xml'),'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.equal(urls.length, 165, 'Expected 33 pages in each of five languages');
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
const pages = new Map();
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m=>[m[1],m[2].replaceAll('&amp;','&')]));
const decode = text => text.replaceAll('&amp;','&').replaceAll('&quot;','"');
for (const url of urls) {
  const route = new URL(url).pathname;
  const html = await readFile(path.join(root, route === '/' ? 'index.html' : `${route.slice(1)}.html`), 'utf8');
  pages.set(route,html);
  const lang = locales.includes(route.split('/')[1]) ? route.split('/')[1] : 'en';
  assert.ok(html.includes(`<html lang="${lang}">`), `${route}: incorrect language`);
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(m=>attributes(m[0]));
  assert.equal(new URL(links.find(l=>l.rel==='canonical')?.href).href,new URL(url).href,`${route}: canonical`);
  const alternate = links.filter(l=>l.rel==='alternate' && l.hrefLang);
  assert.equal(alternate.length,6,`${route}: hreflang count`);
  for(const l of alternate) assert.ok(urls.some(u=>new URL(u).href===new URL(l.href).href),`${route}: missing alternate ${l.href}`);
  assert.equal((html.match(/<h1\b/g)||[]).length,1,`${route}: single H1`);
  assert.ok(/<meta name="description" content="[^"]+"/.test(html),`${route}: description`);
  assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html),`${route}: accidentally noindex`);
  assert.ok(!html.includes('codex-preview'),`${route}: development metadata`);
  for (const m of html.matchAll(/<a\b[^>]*>/g)) {
    const href = attributes(m[0]).href;
    if (!href || href.startsWith('#') || href.startsWith('mailto:')) continue;
    if (href.startsWith('/') && !href.startsWith('//')) {
      const target = new URL(href,base).pathname;
      assert.ok(urls.includes(base+target),`${route}: broken internal link ${href}`);
    }
    assert.ok(!href.includes('cnfanssp.com'),`${route}: old catalog URL`);
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(m[1]);
}
for (const locale of locales) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const articleUrls = urls.filter(u=>new URL(u).pathname.startsWith(`${prefix}/articles/`));
  assert.equal(articleUrls.length,18,`${locale}: articles`);
  const home = pages.get(prefix || '/');
  assert.equal((home.match(/<div class="home-article-thumbs">([\s\S]*?)<\/div><\/div>/)?.[1].match(/<h3>/g)||[]).length,4,`${locale}: latest four guides`);
  for (const slug of ['hacoo-shoes-finds','hacoo-clothing-finds','hacoo-bags-accessories','hacoo-website-vs-app']) {
    const html = pages.get(`${prefix}/articles/${slug}`);
    const body = html.match(/<div class="article-layout">([\s\S]*?)<section class="related-guides">/)?.[1] || '';
    const words = body.replace(/<[^>]*>/g,' ').split(/\s+/).filter(Boolean).length;
    assert.ok(words >= 800,`${locale}/${slug}: substantive complete body (${words})`);
    const graph = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
    const article = graph.flatMap(g=>g['@graph']||[g]).find(g=>g['@type']==='Article');
    assert.equal(article?.inLanguage,locale);
    assert.equal(article?.mainEntityOfPage,`${base}${prefix}/articles/${slug}`);
    if(locale!=='en') assert.ok(!html.match(/<h1>Hacoo (Shoes Finds|Clothing Finds|Bags and Accessories|Website vs App)/),`${locale}/${slug}: English heading`);
  }
}
console.log(`SEO checks passed: ${urls.length} pages, 90 article pages, 20 new localized guides, canonical/hreflang, internal links and structured data.`);
