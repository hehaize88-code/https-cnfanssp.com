import assert from "node:assert/strict";
import test from "node:test";

test("renders the SEO refresh and analytics on the production home page", async () => {
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
  assert.match(html, /Superbuy Spreadsheet 2026: Curated Finds, USD Prices &amp; QC Checks/i);
  assert.match(html, /main_site_click/);
  assert.match(html, /outbound_product_click/);
  assert.match(html, /search_submit/);
});

test("renders a new long-form article with canonical metadata and internal links", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("article-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/articles/superbuy-detailed-photos-guide/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Superbuy Detailed Photos: When Standard QC Photos Are Not Enough/);
  assert.match(html, /https:\/\/sheet-superbuy\.net\/articles\/superbuy-detailed-photos-guide\//);
  assert.match(html, /Continue the research/);
  assert.match(html, /"datePublished":"2026-09-12"/);
});
