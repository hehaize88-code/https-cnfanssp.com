import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workerPromise = (async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
})();

async function fetchWorker(url) {
  const worker = await workerPromise;
  return worker.fetch(
    new Request(url, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders indexable production metadata", async () => {
  const response = await fetchWorker("http://localhost/en");

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /HacooVIP Pro/);
  assert.doesNotMatch(html, /name=["']robots["'][^>]*noindex/i);
  assert.match(html, /<html lang="en"/i);
  assert.match(html, /"@type":"WebSite"/);
});

test("canonicalizes every public origin with permanent redirects", async () => {
  const cases = [
    ["http://hacoovip.pro/", "https://hacoovip.pro/en"],
    ["http://hacoovip.pro/en/finds", "https://hacoovip.pro/en/finds"],
    ["http://www.hacoovip.pro/en", "https://hacoovip.pro/en"],
    ["https://www.hacoovip.pro/en", "https://hacoovip.pro/en"],
    ["https://hacoovip.pro/", "https://hacoovip.pro/en"],
  ];

  for (const [source, target] of cases) {
    const response = await fetchWorker(source);
    assert.equal(response.status, 308, source);
    assert.equal(response.headers.get("location"), target, source);
  }
});

test("sets edge-cacheable HTML headers and complete structured data", async () => {
  const home = await fetchWorker("https://hacoovip.pro/de");
  assert.equal(home.status, 200);
  assert.match(home.headers.get("cache-control") ?? "", /^public,/);
  assert.match(home.headers.get("cloudflare-cdn-cache-control") ?? "", /max-age=86400/);
  assert.doesNotMatch(home.headers.get("cache-control") ?? "", /no-store/i);
  assert.match(await home.text(), /<html lang="de"/i);

  const faq = await fetchWorker("https://hacoovip.pro/en/faq");
  const faqHtml = await faq.text();
  assert.match(faqHtml, /"@type":"FAQPage"/);
  assert.match(faqHtml, /"@type":"BreadcrumbList"/);

  const article = await fetchWorker("https://hacoovip.pro/en/articles/hacoo-reviews-2026");
  const articleHtml = await article.text();
  assert.match(articleHtml, /"datePublished":"2026-08-29"/);
  assert.match(articleHtml, /"author":\{"@type":"Organization"/);
  assert.match(articleHtml, /"image":\["https:\/\/hacoovip\.pro\//);
  assert.match(articleHtml, /"@type":"BreadcrumbList"/);
  assert.match(articleHtml, /Google Play US · 59,057/);
});

test("keeps every mobile module visible and readable", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const mobileCss = css.slice(css.indexOf("@media (max-width: 700px)"));
  assert.doesNotMatch(mobileCss, /font-size:\s*[789]px/);
  assert.doesNotMatch(mobileCss, /\.hero-gallery\s*\{[^}]*display:\s*none/s);
  assert.match(mobileCss, /\.hero-gallery\s*\{[^}]*display:\s*grid/s);
  assert.doesNotMatch(mobileCss, /\.notice-bar span:last-child\s*\{[^}]*display:\s*none/s);
});
