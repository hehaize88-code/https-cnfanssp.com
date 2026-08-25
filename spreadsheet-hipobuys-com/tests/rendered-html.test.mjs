import assert from "node:assert/strict";
import test from "node:test";

test("renders the Pages advanced-mode worker and preserves real 404s", async () => {
  const cacheEntries = new Map();
  globalThis.caches = {
    default: {
      async match(request) {
        const response = cacheEntries.get(request.url);
        return response ? response.clone() : undefined;
      },
      async put(request, response) {
        cacheEntries.set(request.url, response.clone());
      },
    },
  };
  const workerUrl = new URL("../dist/client/_worker.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const env = {
    ASSETS: {
      fetch: async (request) => {
        const pathname = new URL(request.url).pathname;
        if (pathname === "/assets/site.css") {
          return new Response("body{color:#111}", {
            headers: { "content-type": "text/css" },
          });
        }
        return new Response("Not found", { status: 404 });
      },
    },
  };
  const backgroundTasks = [];
  const context = {
    waitUntil(promise) { backgroundTasks.push(promise); },
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
  assert.match(html, /<title>Hipobuy Product Index 2026/);
  assert.match(html, /rel="canonical" href="https:\/\/spreadsheet-hipobuys\.com\/"/);
  assert.equal((html.match(/class="clean-product-card"/g) || []).length, 12);
  assert.equal(response.headers.get("x-hipo-cache"), "MISS");

  await Promise.all(backgroundTasks);
  const cachedHome = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    env,
    context,
  );
  assert.equal(cachedHome.status, 200);
  assert.equal(cachedHome.headers.get("x-hipo-cache"), "HIT");

  const rscResponse = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/x-component", rsc: "1" } }),
    env,
    context,
  );
  assert.equal(rscResponse.headers.get("x-hipo-cache"), null);

  const wwwRedirect = await worker.fetch(
    new Request("https://www.spreadsheet-hipobuys.com/spreadsheet?from=www"),
    env,
    context,
  );
  assert.equal(wwwRedirect.status, 301);
  assert.equal(wwwRedirect.headers.get("location"), "https://spreadsheet-hipobuys.com/spreadsheet?from=www");

  const slashRedirect = await worker.fetch(
    new Request("https://spreadsheet-hipobuys.com/spreadsheet/"),
    env,
    context,
  );
  assert.equal(slashRedirect.status, 301);
  assert.equal(slashRedirect.headers.get("location"), "https://spreadsheet-hipobuys.com/spreadsheet");

  const spreadsheet = await worker.fetch(
    new Request("https://spreadsheet-hipobuys.com/spreadsheet", { headers: { accept: "text/html" } }),
    env,
    context,
  );
  assert.equal(spreadsheet.status, 200);
  const spreadsheetHtml = await spreadsheet.text();
  assert.match(spreadsheetHtml, /rel="canonical" href="https:\/\/spreadsheet-hipobuys\.com\/spreadsheet"/);
  assert.doesNotMatch(spreadsheetHtml, /rel="canonical" href="https:\/\/spreadsheet-hipobuys\.com\/spreadsheet\/"/);

  const stylesheet = await worker.fetch(
    new Request("http://localhost/assets/site.css"),
    env,
    context,
  );
  assert.equal(stylesheet.status, 200);
  assert.equal(stylesheet.headers.get("content-type"), "text/css");
  assert.equal(stylesheet.headers.get("cache-control"), "public, max-age=31536000, immutable");
  assert.equal(await stylesheet.text(), "body{color:#111}");

  const notFound = await worker.fetch(
    new Request("http://localhost/this-page-does-not-exist"),
    env,
    context,
  );
  assert.equal(notFound.status, 404);
});
