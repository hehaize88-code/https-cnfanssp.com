import assert from "node:assert/strict";
import test from "node:test";

test("renders canonical URLs and SEO schemas in static HTML", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  async function render(path) {
    const response = await worker.fetch(
      new Request(`http://localhost${path}`, {
        headers: { accept: "text/html" },
      }),
      {
        ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
      },
      { waitUntil() {}, passThroughOnException() {} },
    );
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    return response.text();
  }

  const home = await render("/");
  assert.match(home, /<link rel="canonical" href="https:\/\/findqcs\.net\/"\/>/i);
  assert.match(home, /Independent QC Photo Guide/i);
  assert.match(home, /"@type":"WebSite"/i);
  assert.match(home, /href="\/articles\/"/i);

  const guide = await render("/guides/size-and-measurements/");
  assert.match(guide, /<link rel="canonical" href="https:\/\/findqcs\.net\/guides\/size-and-measurements\/"\/>/i);
  assert.match(guide, /"@type":"Article"/i);
  assert.match(guide, /"@type":"BreadcrumbList"/i);
  assert.doesNotMatch(guide, /href="\/categories"(?!\/)/i);
});
