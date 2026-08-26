import assert from "node:assert/strict";
import test from "node:test";

test("renders indexable production metadata and SEO endpoints", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("https://hacoos.org/en", {
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

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/hacoos\.org\/en["']/i);
  assert.match(html, /<link[^>]+rel=["']alternate["'][^>]+hrefLang=["']de["'][^>]+href=["']https:\/\/hacoos\.org\/de["']/i);
  assert.match(html, /<meta[^>]+name=["']robots["'][^>]+content=["']index, follow["']/i);
  assert.doesNotMatch(html, /noindex|nofollow/i);
  assert.match(html, /Independent Hacoo Product Link Library/);
  assert.match(html, /WebSite/);
  assert.match(html, /\/products\/hacoo-product-01\.webp/);
  assert.doesNotMatch(html, /CNFansSP/);
  assert.equal(response.headers.get("x-hacoos-cache"), "MISS");

  const root = await worker.fetch(
    new Request("https://hacoos.org/"),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(root.status, 308);
  assert.equal(root.headers.get("location"), "https://hacoos.org/en");

  const robots = await worker.fetch(
    new Request("http://localhost/robots.txt"),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Allow: \/[\s\S]*Sitemap: https:\/\/hacoos\.org\/sitemap\.xml/);

  const sitemap = await worker.fetch(
    new Request("http://localhost/sitemap.xml"),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(sitemap.status, 200);
  const sitemapXml = await sitemap.text();
  assert.match(sitemapXml, /<loc>https:\/\/hacoos\.org\/en<\/loc>/);
  assert.match(sitemapXml, /<loc>https:\/\/hacoos\.org\/de\/articles\//);
  assert.doesNotMatch(sitemapXml, /<loc>https:\/\/hacoos\.org\/<\/loc>/);
  assert.equal((sitemapXml.match(/<url>/g) ?? []).length, 72);

  const httpResponse = await worker.fetch(
    new Request("http://hacoos.org/de?source=http"),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(httpResponse.status, 308);
  assert.equal(httpResponse.headers.get("location"), "https://hacoos.org/de?source=http");

  const httpRoot = await worker.fetch(
    new Request("http://hacoos.org/"),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(httpRoot.status, 308);
  assert.equal(httpRoot.headers.get("location"), "https://hacoos.org/en");

  const wwwResponse = await worker.fetch(
    new Request("https://www.hacoos.org/de?source=www"),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(wwwResponse.status, 308);
  assert.equal(wwwResponse.headers.get("location"), "https://hacoos.org/de?source=www");
});
