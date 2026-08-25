import assert from "node:assert/strict";
import test from "node:test";

test("renders the Pages advanced-mode worker and preserves real 404s", async () => {
  const workerUrl = new URL("../dist/client/_worker.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const env = {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  };
  const context = {
    waitUntil() {},
    passThroughOnException() {},
  };

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    env,
    context,
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<title>Hipobuy Spreadsheet 2026/);
  assert.match(html, /rel="canonical" href="https:\/\/spreadsheet-hipobuys\.com\/"/);

  const notFound = await worker.fetch(
    new Request("http://localhost/this-page-does-not-exist"),
    env,
    context,
  );
  assert.equal(notFound.status, 404);
});
