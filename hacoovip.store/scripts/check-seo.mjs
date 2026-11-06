import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';

const root = path.resolve('out');
const base = 'https://hacoovip.store';
const locales = ['en','de','es','fr','it'];
const sitemap = await readFile(path.join(root,'sitemap.xml'),'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.equal(urls.length, 175, 'Expected 35 pages in each of five languages');
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
    assert.ok(!href.startsWith('https://cnfanshp.com/'),`${route}: bare catalog host loses paths`);
    assert.ok(!href.includes('cnfanssp.com'),`${route}: old catalog URL`);
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(m[1]);
}
for (const locale of locales) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const articleUrls = urls.filter(u=>new URL(u).pathname.startsWith(`${prefix}/articles/`));
  assert.equal(articleUrls.length,20,`${locale}: articles`);
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
const additions = ['hacoo-shipping-cost', 'hacoo-football-shirts-sizing'];
const revised = ['how-to-use-hacoo-spreadsheet', 'hacoo-clothing-finds', 'hacoo-shipping-returns-refunds'];
for (const locale of locales) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const data = JSON.parse(await readFile(`lib/shopping-articles.${locale}.json`, 'utf8'));
  assert.deepEqual(data.map(a=>a.slug), additions, `${locale}: complete matching article set`);
  for (const article of data) {
    const html = pages.get(`${prefix}/articles/${article.slug}`);
    assert.equal(article.sections.length,9,`${locale}/${article.slug}: full sections`);
    assert.equal(article.sections.reduce((n,s)=>n+s.paragraphs.length,0),18,`${locale}/${article.slug}: full translation`);
    const words = article.sections.flatMap(s=>s.paragraphs).join(' ').split(/\s+/).length;
    assert.ok(words >= (locale==='en' ? 1200 : 850),`${locale}/${article.slug}: complete guide (${words})`);
    assert.equal((html.match(/<table class="article-table">/g)||[]).length,1,`${locale}: visible worksheet`);
    assert.ok(html.includes('<time dateTime="2026-11-06">'),`${locale}: visible update date`);
    for (const source of article.sources) assert.ok(html.includes(`href="${source.url}"`),`${locale}: clickable source ${source.url}`);
    if(locale!=='en') {
      const english = JSON.parse(await readFile('lib/shopping-articles.en.json','utf8')).find(a=>a.slug===article.slug);
      for(const paragraph of english.sections.flatMap(s=>s.paragraphs)) assert.ok(!article.sections.some(s=>s.paragraphs.includes(paragraph)),`${locale}: untranslated paragraph`);
    }
    const graph = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
    const schema = graph.flatMap(g=>g['@graph']||[g]).find(g=>g['@type']==='Article');
    assert.equal(schema?.datePublished,'2026-11-06');
    assert.equal(schema?.dateModified,'2026-11-06');
    assert.equal(schema?.inLanguage,locale);
  }
  for(const slug of revised) {
    const html=pages.get(`${prefix}/articles/${slug}`);
    assert.ok(html.includes('<time dateTime="2026-11-06">'),`${locale}/${slug}: updated article`);
    assert.ok(html.includes(`href="${prefix}/articles/hacoo-shipping-cost"`),`${locale}/${slug}: related cost guide`);
  }
  for(const page of ['', '/spreadsheet', '/shipping']) {
    const html=pages.get(`${prefix}${page}` || '/');
    for(const slug of additions) assert.ok(html.includes(`href="${prefix}/articles/${slug}"`),`${locale}${page}: linked new guide`);
  }
}
console.log(`SEO checks passed: ${urls.length} pages, 100 article pages, 10 new localized guides, 15 revised article pages, canonical/hreflang, internal links, worksheets and structured data.`);
