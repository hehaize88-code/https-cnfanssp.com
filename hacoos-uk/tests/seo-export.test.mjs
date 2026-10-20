import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const locales = ['en', 'de', 'fr', 'es', 'it'];
const base = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, base), 'utf8');
const content = Object.fromEntries(await Promise.all(locales.map(async (locale) => [locale, JSON.parse(await read(`app/content/${locale}.json`))])));
const keys = Object.keys(content.en);
const basePages = ['home', 'spreadsheet', 'finds', 'categories', 'qc-guide', 'shipping', 'guide', 'faq', 'articles', 'methodology'];
const route = (locale, key) => (locale === 'en' ? '' : `/${locale}`) + (key === 'home' ? (locale === 'en' ? '/' : '') : `/${key}`);
const file = (path) => `dist/pages/${path === '/' ? 'index' : path.slice(1)}.html`;
const attributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1].toLowerCase(), m[2].replaceAll('&amp;', '&')]));
const links = (html) => [...html.matchAll(/<link\b[^>]*>/g)].map((m) => attributes(m[0]));
const canonical = (html) => links(html).filter((a) => a.rel === 'canonical');
const schemas = (html) => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].flatMap((m) => { const obj = JSON.parse(m[1]); return obj['@graph'] || [obj]; });
const paragraphs = (article) => article.sections.flatMap((section) => section.paragraphs);

test('all 14 article topics have full translations with matching structure', () => {
  assert.equal(keys.length, 14);
  for (const locale of locales) {
    assert.deepEqual(Object.keys(content[locale]).sort(), [...keys].sort(), locale);
    for (const key of keys) {
      const actual = content[locale][key], source = content.en[key];
      assert.equal(actual.sections.length, source.sections.length, `${locale}/${key}: section count`);
      assert.equal(actual.takeaways.length, source.takeaways.length, `${locale}/${key}: takeaways`);
      assert.deepEqual(actual.sources.map((s) => s.href), source.sources.map((s) => s.href), `${locale}/${key}: sources`);
      source.sections.forEach((section, index) => {
        assert.equal(actual.sections[index].paragraphs.length, section.paragraphs.length, `${locale}/${key}: paragraphs ${index}`);
        assert.equal(actual.sections[index].bullets?.length || 0, section.bullets?.length || 0, `${locale}/${key}: bullets ${index}`);
      });
      assert.ok(actual.title && actual.intro && actual.reviewed && actual.published, `${locale}/${key}: editorial fields`);
      const bodyWords = paragraphs(actual).join(' ').split(/\s+/).length;
      assert.ok(bodyWords > 850, `${locale}/${key}: unexpectedly short body ${bodyWords}`);
      if (locale !== 'en') {
        const sourceParagraphs = new Set(paragraphs(source));
        assert.ok(!paragraphs(actual).some((p) => p.length > 100 && sourceParagraphs.has(p)), `${locale}/${key}: English fallback`);
      }
    }
  }
});

test('all 120 exported pages have correct language, canonical, reciprocal alternates and valid links', async () => {
  const sitemap = await read('dist/pages/sitemap.xml');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const expected = locales.flatMap((locale) => [...basePages, ...keys].map((key) => `https://hacoos.uk${route(locale, key)}`));
  assert.deepEqual([...urls].sort(), [...expected].sort());
  assert.equal(new Set(urls).size, 120);
  const expectedPaths = new Set(expected.map((url) => new URL(url).pathname));
  for (const locale of locales) {
    for (const key of [...basePages, ...keys]) {
      const path = route(locale, key), html = await read(file(path));
      assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`), path);
      assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: H1`);
      assert.equal(canonical(html).length, 1, `${path}: canonical count`);
      assert.equal(canonical(html)[0].href, `https://hacoos.uk${path}`, path);
      assert.doesNotMatch(html, /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/, path);
      assert.doesNotMatch(html, /codex-preview/, `${path}: preview tag`);
      const alternates = links(html).filter((a) => a.rel === 'alternate' && a.hreflang);
      assert.equal(alternates.length, 6, `${path}: alternates`);
      for (const language of [...locales, 'x-default']) {
        assert.equal(alternates.find((a) => a.hreflang === language)?.href, `https://hacoos.uk${route(language === 'x-default' ? 'en' : language, key)}`, path);
      }
      const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
      for (const tag of html.matchAll(/<a\b[^>]*>/g)) {
        const href = attributes(tag[0]).href;
        if (href?.startsWith('/') && !href.startsWith('//')) assert.ok(expectedPaths.has(href.split('#')[0]), `${path}: broken internal link ${href}`);
        if (href?.startsWith('#')) assert.ok(ids.has(href.slice(1)), `${path}: broken fragment ${href}`);
      }
      if (key.startsWith('articles/')) {
        const json = schemas(html);
        const article = json.find((s) => s['@type'] === 'Article');
        const breadcrumbs = json.find((s) => s['@type'] === 'BreadcrumbList');
        assert.equal(article?.inLanguage, locale, path);
        assert.equal(article?.mainEntityOfPage, `https://hacoos.uk${path}`, path);
        assert.equal(article?.dateModified, content[locale][key].reviewed, path);
        assert.equal(breadcrumbs?.itemListElement.at(-1).item, `https://hacoos.uk${path}`, path);
        assert.match(html, /class="long-article"/, path);
        assert.equal((html.match(/id="section-\d+"/g) || []).length, content[locale][key].sections.length, path);
      }
      if (key === 'home') {
        const preview = html.match(/class="section guide-preview"(.*?)<\/section>/s)?.[1] || '';
        assert.equal((preview.match(/<h3>/g) || []).length, 4, `${path}: homepage article limit`);
        const faq = schemas(html).find((s) => s['@type'] === 'FAQPage');
        assert.equal(faq?.mainEntity.length, 3, `${path}: FAQ matches visible questions`);
        assert.match(html, /action="https:\/\/www.cnfanshp.com\/search.html"/, path);
        assert.match(html, /name="channelid" value="2"/, path);
        assert.match(html, /data-track="outbound_product_click"/, path);
        assert.match(html, /data-track="outbound_category_click"/, path);
        assert.match(html, /data-track="search_redirect"/, path);
      }
      if (key === 'articles') {
        const library = html.match(/class="section article-library"(.*?)<\/section>/s)?.[1] || '';
        assert.equal((library.match(/<h3>/g) || []).length, 14, `${path}: article hub parity`);
      }
    }
  }
  const robots = await read('dist/pages/robots.txt');
  assert.match(robots, /Sitemap: https:\/\/hacoos.uk\/sitemap.xml/);
  assert.doesNotMatch(robots, /Disallow: \/\s*$/m);
  assert.match(await read('dist/pages/404.html'), /noindex/);
});
