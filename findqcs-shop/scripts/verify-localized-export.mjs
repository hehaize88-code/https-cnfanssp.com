import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';

const root = path.resolve('out');
const origin = 'https://findqcs.shop';
const locales = ['en', 'nl', 'de', 'it', 'es'];
const urls = [...fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(x => x[1]);
const english = urls.filter(url => !/^\/(nl|de|it|es)(\/|$)/.test(new URL(url).pathname));
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
assert.equal(urls.length, english.length * locales.length, 'Locale route coverage differs');
const fileFor = pathname => path.join(root, pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`);
const read = pathname => fs.readFileSync(fileFor(pathname), 'utf8');
const tags = html => [...html.matchAll(/<link\b[^>]*>/g)].map(x => x[0]);
const count = (html, pattern) => [...html.matchAll(pattern)].length;
const paragraphs = html => [...html.matchAll(/<p\b[^>]*>(.*?)<\/p>/g)].map(x => x[1].replace(/<[^>]*>/g, '')).filter(s => s.length > 100);
for (const englishUrl of english) {
  const route = new URL(englishUrl).pathname.replace(/\/$/, '');
  const source = read(route || '/');
  for (const locale of locales) {
    const pathname = locale === 'en' ? route || '/' : `/${locale}${route}`;
    const html = read(pathname);
    assert(html.includes(`<html lang="${locale}"`), `Wrong language: ${pathname}`);
    const canonical = tags(html).filter(t => /rel="canonical"/.test(t));
    assert.equal(canonical.length, 1, `Canonical count: ${pathname}`);
    assert(canonical[0].includes(`href="${origin}${pathname}"`), `Canonical target: ${pathname}`);
    assert(!/<meta[^>]+name="robots"[^>]+noindex/.test(html), `Unexpected noindex: ${pathname}`);
    const alternates = tags(html).filter(t => /hreflang=/.test(t));
    assert.equal(alternates.length, 6, `Hreflang count: ${pathname}`);
    for (const target of locales) {
      const href = `${origin}${target === 'en' ? route || '/' : `/${target}${route}`}`;
      assert(alternates.some(t => t.includes(`hreflang="${target}"`) && t.includes(`href="${href}"`)), `Missing alternate ${target}: ${pathname}`);
    }
    assert.equal(count(html, /<h1\b/g), 1, `H1 count: ${pathname}`);
    if (route.startsWith('/articles/')) {
      assert.equal(count(html, /<section id="section-/g), count(source, /<section id="section-/g), `Missing section: ${pathname}`);
      assert.equal(count(html, /<p\b/g), count(source, /<p\b/g), `Missing paragraph: ${pathname}`);
      assert(html.includes(`"inLanguage":"${locale}"`), `Article language: ${pathname}`);
      if (locale !== 'en') {
        const enParagraphs = new Set(paragraphs(source));
        assert(!paragraphs(html).some(p => enParagraphs.has(p)), `English paragraph fallback: ${pathname}`);
      }
    }
    for (const match of html.matchAll(/<a\b[^>]*href="([^"#?]+)(?:[^" ]*)"/g)) {
      const href = match[1];
      if (!href.startsWith('/')) continue;
      assert(fs.existsSync(fileFor(href)), `Broken internal link ${href}: ${pathname}`);
      if (locale !== 'en') assert(href === `/${locale}` || href.startsWith(`/${locale}/`), `Cross-language link ${href}: ${pathname}`);
    }
    if (locale !== 'en') {
      for (const script of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
        if (script[1].includes('application/ld+json')) JSON.parse(script[2]);
        else new vm.Script(script[2]);
      }
      const select = html.match(/<select\b([^>]*)>/)?.[1] ?? '';
      assert(select.includes('onchange='), `Language switcher missing: ${pathname}`);
    }
  }
}
for (const locale of locales) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  assert.equal(count(read(prefix || '/'), /<article class="article-card">/g), 6);
  assert.equal(count(read(`${prefix}/articles`), /<article class="article-card">/g), 18);
}
// Verify that localized non-card links report article clicks, not only /articles paths.
const localized = read('/de/articles');
const js = [...localized.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].find(s => s[2].includes('document.addEventListener'))[2];
const handlers = {};
const win = { location: { pathname: '/de/articles', origin } };
Object.assign(win, { window: win, document: { addEventListener: (type, fn) => handlers[type] = fn }, URL, FormData: class { get() { return 'sneakers'; } } });
vm.runInNewContext(js, win);
const calls = []; win.gtag = (...args) => calls.push(args);
handlers.click({target: {closest: () => ({href: `${origin}/de/articles/sneaker-qc-checklist`, textContent: 'Guide', getAttribute: () => null})}});
handlers.submit({target: {matches: () => true}});
assert(calls.some(c => c[1] === 'article_click'));
assert(calls.some(c => c[1] === 'search_submit'));
console.log(`Verified ${urls.length} pages: language, full article coverage, canonical, hreflang, internal links, article counts and analytics.`);
