import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { priorityGuideDefinitions, priorityGuideContent } from "../app/priorityArticles.js";

const root = path.resolve("out");
const origin = "https://hacoos.net";
const locales = ["en", "es", "fr", "de", "it", "pt"];
const added = ["hacoo-order-tracking", "hacoo-product-links-not-working", "find-hacoo-product-old-link-screenshot"];
const changed = [...added, "hacoo-returns-refunds", "shipping-planning", "hacoo-reviews-explained"];
const routes = (locale, route) => `${locale === "en" ? "" : `/${locale}`}${route}` || "/";
const fileFor = (route) => path.join(root, route.replace(/^\//, ""), "index.html");
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
const xml = await readFile(path.join(root, "sitemap.xml"), "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.equal(urls.length, new Set(urls).size, "Duplicate sitemap URLs");
let linksChecked = 0;
for (const url of urls) {
  const route = new URL(url).pathname;
  const html = await readFile(fileFor(route), "utf8");
  const locale = locales.slice(1).includes(route.split("/")[1]) ? route.split("/")[1] : "en";
  assert(html.includes(`<html lang="${locale}">`), `Wrong server HTML language: ${url}`);
  assert.equal([...html.matchAll(/<h1(?:\s[^>]*)?>/g)].length, 1, `Expected one h1: ${url}`);
  assert(!/<meta name="robots" content="[^"]*noindex/.test(html), `Unexpected noindex: ${url}`);
  const canonical = [...html.matchAll(/<link\s[^>]*>/g)].map((m) => attrs(m[0])).find((a) => a.rel === "canonical");
  assert.equal(canonical?.href, url, `Noncanonical sitemap URL: ${url}`);
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = match[1];
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const pathname = new URL(href.replaceAll("&amp;", "&"), origin).pathname;
    if (/\.[a-z0-9]+$/i.test(pathname)) await access(path.join(root, pathname));
    else await access(fileFor(pathname));
    linksChecked++;
  }
}
for (const locale of locales) {
  const content = JSON.parse(await readFile(`app/seoArticles/${locale}.json`, "utf8"));
  assert.deepEqual(Object.keys(content), added, `Incomplete article set: ${locale}`);
  const home = await readFile(fileFor(routes(locale, "/")), "utf8");
  const directory = await readFile(fileFor(routes(locale, "/guides/")), "utf8");
  const hub = await readFile(fileFor(routes(locale, "/spreadsheet/")), "utf8");
  for (const category of ["shoes", "headwear", "hoodies-sweaters", "t-shirts", "jackets", "pants-shorts", "accessories", "electronics"]) {
    assert(home.includes(routes(locale, `/categories/${category}`)), `Homepage missing category: ${locale}/${category}`);
  }
  for (const slug of changed) {
    const route = routes(locale, `/guides/${slug}/`);
    const html = await readFile(fileFor(route), "utf8");
    assert(urls.includes(origin + route), `Missing sitemap entry: ${route}`);
    const alternate = [...html.matchAll(/<link\s[^>]*>/g)].map((m) => attrs(m[0])).filter((a) => a.rel === "alternate" && a.hrefLang);
    assert.equal(alternate.length, 7, `Expected six languages plus x-default: ${route}`);
    for (const lang of [...locales, "x-default"]) {
      assert.equal(alternate.find((a) => a.hrefLang === lang)?.href, origin + routes(lang === "x-default" ? "en" : lang, `/guides/${slug}/`));
    }
    const graphs = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((m) => {
      const data = JSON.parse(m[1]); return data["@graph"] || [data];
    });
    const article = graphs.find((item) => item["@type"] === "Article");
    assert.equal(article?.inLanguage, locale, `Article language: ${route}`);
    assert.equal(article.dateModified, "2026-10-09", `Article date: ${route}`);
    if (added.includes(slug)) {
      assert.equal(article.datePublished, "2026-10-09", `Publication date: ${route}`);
      assert(article.wordCount >= 800, `Truncated translation: ${route}`);
      assert.equal(content[slug].sections.length, 8, `Missing sections: ${route}`);
      assert(content[slug].sections.every(([, paragraphs]) => paragraphs.length === 2), `Missing paragraphs: ${route}`);
      assert(!graphs.some((item) => item["@type"] === "FAQPage"), `Unrequested FAQ in new article: ${route}`);
      for (const entry of [home, directory, hub]) assert(entry.includes(routes(locale, `/guides/${slug}`)), `Missing article entry: ${route}`);
    }
  }
}
// Require the same article routes in every language, including older guides.
const englishGuides = urls.filter((url) => new URL(url).pathname.startsWith("/guides/"))
  .map((url) => new URL(url).pathname).filter((route) => route !== "/guides/").sort();
const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#x27;");
for (const locale of locales) {
  const prefix = locale === "en" ? "/guides/" : `/${locale}/guides/`;
  const actual = urls.filter((url) => new URL(url).pathname.startsWith(prefix))
    .map((url) => new URL(url).pathname).filter((route) => route !== prefix)
    .map((route) => locale === "en" ? route : route.slice(locale.length + 1)).sort();
  assert.deepEqual(actual, englishGuides, `Article route parity failed: ${locale}`);
  const directory = await readFile(fileFor(routes(locale, "/guides/")), "utf8");
  assert.equal((directory.match(/class="article-no"/g) || []).length, englishGuides.length, `Directory count: ${locale}`);
  const directoryPaths = new Set([...directory.matchAll(/<a\b[^>]*href="([^"]+)"/g)]
    .map((match) => new URL(match[1], origin).pathname.replace(/\/$/, "")));
  for (const route of englishGuides) {
    assert(directoryPaths.has(routes(locale, route.replace(/\/$/, ""))), `Directory entry missing: ${locale}${route}`);
    const html = await readFile(fileFor(routes(locale, route)), "utf8");
    const alternates = [...html.matchAll(/<link\s[^>]*>/g)].map((m) => attrs(m[0]))
      .filter((a) => a.rel === "alternate" && a.hrefLang);
    for (const lang of [...locales, "x-default"]) {
      assert.equal(alternates.find((a) => a.hrefLang === lang)?.href,
        origin + routes(lang === "x-default" ? "en" : lang, route), `Article alternate: ${locale}${route}/${lang}`);
    }
  }
  if (locale === "en") continue;
  const translated = JSON.parse(await readFile(`app/priorityTranslations/${locale}.json`, "utf8"));
  assert.deepEqual(Object.keys(translated).sort(), priorityGuideDefinitions.map((g) => g.slug).sort(), `Missing priority translation: ${locale}`);
  for (const [slug, article] of Object.entries(translated)) {
    const original = priorityGuideContent[slug];
    assert.deepEqual(article.sections.map((s) => s[1].length), original.sections.map((s) => s[1].length), `Missing translated paragraphs: ${locale}/${slug}`);
    assert.equal(article.factBox.length, original.factBox.length);
    assert.equal(article.steps.length, original.steps.length);
    assert.notEqual(article.intro, original.intro, `English body fallback: ${locale}/${slug}`);
    const html = await readFile(fileFor(routes(locale, `/guides/${slug}/`)), "utf8");
    assert(html.includes(`<h1>${escapeHtml(article.title)}</h1>`), `Wrong localized title: ${locale}/${slug}`);
    for (const paragraph of [article.intro, ...article.sections.flatMap((s) => s[1]), article.sourceNote]) {
      assert(paragraph.trim().length > 25, `Empty translation: ${locale}/${slug}`);
      assert(html.includes(escapeHtml(paragraph)), `Missing rendered paragraph: ${locale}/${slug}`);
    }
    const graphs = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .flatMap((m) => { const data = JSON.parse(m[1]); return data["@graph"] || [data]; });
    const schema = graphs.find((item) => item["@type"] === "Article");
    assert.equal(schema?.inLanguage, locale);
    assert.equal(schema.datePublished, "2026-09-15");
    assert.equal(schema.dateModified, "2026-10-09");
    assert(!graphs.some((item) => item["@type"] === "FAQPage"), `Unexpected FAQ: ${locale}/${slug}`);
  }
}
const switcher = await readFile("components/LanguageSwitcher.js", "utf8");
assert(!switcher.includes("ENGLISH_ONLY_GUIDES"), "Language switcher still redirects translated articles to the index");
console.log(`Verified ${urls.length} canonical pages, ${linksChecked} internal links, ${englishGuides.length} articles per language, 40 complete priority translations and six-language metadata parity.`);
