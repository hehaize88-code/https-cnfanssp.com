import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { transform } from "esbuild";

async function loadGrowthArticles() {
  const source = fs.readFileSync(new URL("../app/growth-articles.ts", import.meta.url), "utf8");
  const { code } = await transform(source, { loader: "ts", format: "esm", target: "es2022" });
  return import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);
}

function words(value) {
  return value.trim().split(/\s+/u).filter(Boolean).length;
}

test("publishes ten unique long-form SEO articles", async () => {
  const { growthArticles, growthArticleContent } = await loadGrowthArticles();
  assert.equal(growthArticles.length, 10);
  assert.equal(new Set(growthArticles.map((article) => article.slug)).size, 10);
  assert.equal(Object.keys(growthArticleContent).length, 10);

  for (const article of growthArticles) {
    const body = growthArticleContent[article.slug];
    assert.ok(body, `${article.slug}: body exists`);
    assert.ok(body.sections.length >= 8, `${article.slug}: has at least eight useful sections`);
    assert.ok(body.sources.length >= 3, `${article.slug}: has a stated research basis`);
    const visibleBody = [
      ...body.callout,
      ...body.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])]),
    ].join(" ");
    const wordCount = words(visibleBody);
    assert.ok(wordCount >= 1200 && wordCount <= 1800, `${article.slug}: ${wordCount} visible words`);
    assert.doesNotMatch(visibleBody, /\b(?:FAQ|frequently asked|Q&A)\b/iu, `${article.slug}: no Q&A content`);
  }
});

test("sitemap contains every new canonical article URL", async () => {
  const { growthArticles } = await loadGrowthArticles();
  const sitemap = fs.readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  for (const article of growthArticles) {
    assert.match(sitemap, new RegExp(`https://sheet-superbuy\\.net/articles/${article.slug}/`));
  }
});

test("analytics covers product, outbound, article, search and main-site intent", () => {
  const layout = fs.readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
  for (const event of ["product_click", "outbound_product_click", "article_click", "search_submit", "main_site_click"]) {
    assert.match(layout, new RegExp(event));
  }
});
