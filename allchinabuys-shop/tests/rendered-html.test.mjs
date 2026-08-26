import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders the Cloudflare Pages static homepage", async () => {
  const html = await readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>AllChinaBuy Spreadsheet/);
  assert.match(html, /<link rel="canonical" href="https:\/\/allchinabuys\.shop\/"/);
  assert.match(html, /href="\/spreadsheet\/"/);
  assert.match(html, /src="\/allchinabuy-logo\.png"/);
});

test("exports independent pages and SEO discovery files", async () => {
  const spreadsheet = await readFile(new URL("../dist/client/spreadsheet/index.html", import.meta.url), "utf8");
  const article = await readFile(new URL("../dist/client/articles/how-to-use-allchinabuy-spreadsheet/index.html", import.meta.url), "utf8");
  const robots = await readFile(new URL("../dist/client/robots.txt", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../dist/client/sitemap.xml", import.meta.url), "utf8");

  assert.match(spreadsheet, /AllChinaBuy Spreadsheet Product Index/);
  assert.match(article, /AllChinaBuy Listing Verification/);
  assert.match(robots, /Sitemap: https:\/\/allchinabuys\.shop\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/allchinabuys\.shop\/articles\/plan-allchinabuy-shipping\//);
  assert.match(sitemap, /https:\/\/allchinabuys\.shop\/editorial-method\//);
});
