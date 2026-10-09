import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const locales = ["en", "de", "fr", "es", "it", "pt"];
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };
const { default: worker } = await import("../dist/server/index.js");
const render = (url, headers = {}) => worker.fetch(new Request(url, { headers }), env, ctx);

test("all sitemap pages render with the correct language, canonical and reciprocal alternates", async () => {
  const xml = await (await render("https://hacoos.org/sitemap.xml")).text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.equal(urls.length, 138);
  const knownPaths = new Set(urls.map((url) => new URL(url).pathname));
  for (const url of urls) {
    const response = await render(url);
    assert.equal(response.status, 200, url);
    const html = await response.text();
    const { pathname } = new URL(url);
    const locale = pathname.split("/")[1];
    assert.ok(html.includes(`<html lang="${locale}">`), `${url}: server language`);
    assert.ok(html.includes(`rel="canonical" href="${url}"`), `${url}: canonical`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${url}: one heading`);
    assert.ok(html.includes("G-FNVB24S4VG"), `${url}: measurement ID`);
    assert.doesNotMatch(html, /cnfanssp\.com|<meta[^>]+content="[^"]*noindex/i);
    for (const alternate of locales) {
      const destination = url.replace(`/${locale}`, `/${alternate}`);
      assert.ok(html.includes(`hrefLang="${alternate}" href="${destination}"`), `${url}: ${alternate}`);
    }
    for (const match of html.matchAll(/<a\b[^>]*href="(\/[^"?#]*)/g)) {
      assert.ok(knownPaths.has(match[1]), `${url}: broken internal path ${match[1]}`);
    }
    if (pathname.endsWith("/articles")) assert.equal((html.match(/class="guide-card"/g) ?? []).length, 15);
    if (/^\/(en|de|fr|es|it|pt)$/.test(pathname)) assert.equal((html.match(/class="guide-card"/g) ?? []).length, 4);
    if (pathname.includes("/articles/")) {
      const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      const article = scripts.map((m) => JSON.parse(m[1])).find((item) => item["@type"] === "Article");
      assert.equal(article.inLanguage, locale);
      assert.equal(article.mainEntityOfPage, url);
      assert.ok(html.includes('class="article-related"'));
    }
  }
});

test("new translations retain every section and paragraph without English fallback", async () => {
  for (const locale of locales) {
    const articles = JSON.parse(await readFile(new URL(`../lib/articles/${locale}.json`, import.meta.url), "utf8"));
    assert.equal(articles.length, 3);
    for (const article of articles) {
      assert.equal(article.sections.length, 8);
      assert.ok(article.sections.every((section) => section.length === 3));
      const words = article.sections.flat().join(" ").split(/\s+/).length;
      assert.ok(words >= (locale === "en" ? 1200 : 1000), `${locale}/${article.id}: incomplete content`);
      assert.ok(words <= 1800, `${locale}/${article.id}: unexpected duplication`);
    }
  }
});

test("framework requests and query variants bypass the document cache; unknown routes stay 404", async () => {
  const document = await render("https://hacoos.org/de/articles");
  assert.equal(document.headers.get("x-hacoos-cache"), "MISS");
  for (const [url, headers] of [
    ["https://hacoos.org/de/articles", { rsc: "1" }],
    ["https://hacoos.org/de/articles?_rsc=validation", {}],
    ["https://hacoos.org/de/articles?utm_source=validation", {}],
  ]) {
    const response = await render(url, headers);
    assert.equal(response.headers.get("x-hacoos-cache"), null);
  }
  for (const path of ["/de/articles/not-an-article", "/xx/articles", "/en/not-a-section"]) {
    assert.equal((await render(`https://hacoos.org${path}`)).status, 404, path);
  }
});
