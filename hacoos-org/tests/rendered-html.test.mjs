import assert from "node:assert/strict";
import test from "node:test";

test("renders indexable production metadata and SEO endpoints", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
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
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/hacoos\.org\/["']/i);
  assert.match(html, /<link[^>]+rel=["']alternate["'][^>]+hrefLang=["']de["'][^>]+href=["']https:\/\/hacoos\.org\/de["']/i);
  assert.match(html, /<meta[^>]+name=["']robots["'][^>]+content=["']index, follow["']/i);
  assert.doesNotMatch(html, /noindex|nofollow/i);

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

  const wwwResponse = await worker.fetch(
    new Request("https://www.hacoos.org/de?source=www"),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(wwwResponse.status, 308);
  assert.equal(wwwResponse.headers.get("location"), "https://hacoos.org/de?source=www");
});
