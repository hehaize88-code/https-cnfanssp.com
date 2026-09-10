import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
  assert.match(home, /QC Finder &amp; QC Photo Guide/i);
  assert.match(home, /"@type":"WebSite"/i);
  assert.match(home, /href="\/articles\/"/i);

  const guide = await render("/guides/size-and-measurements/");
  assert.match(guide, /<link rel="canonical" href="https:\/\/findqcs\.net\/guides\/size-and-measurements\/"\/>/i);
  assert.match(guide, /"@type":"Article"/i);
  assert.match(guide, /"@type":"BreadcrumbList"/i);
  assert.doesNotMatch(guide, /href="\/categories"(?!\/)/i);

  const worksheet = await render("/articles/pre-purchase-qc-evidence-worksheet/");
  assert.match(worksheet, /<link rel="canonical" href="https:\/\/findqcs\.net\/articles\/pre-purchase-qc-evidence-worksheet\/"\/>/i);
  assert.match(worksheet, /"@type":"Article"/i);
  assert.match(worksheet, /"@type":"BreadcrumbList"/i);
  assert.match(worksheet, /datePublished":"2026-08-26"/i);
  assert.doesNotMatch(worksheet, /href="https:\/\/(?:findqc\.com|[^"']*(?:agent|spreadsheet))/i);

  const freshness = await render("/articles/qc-evidence-freshness-source-record-review-dates/");
  assert.match(freshness, /<link rel="canonical" href="https:\/\/findqcs\.net\/articles\/qc-evidence-freshness-source-record-review-dates\/"\/>/i);
  assert.match(freshness, /"@type":"Article"/i);
  assert.match(freshness, /"@type":"BreadcrumbList"/i);
  assert.match(freshness, /datePublished":"2026-09-01"/i);
  assert.doesNotMatch(freshness, /href="https:\/\/(?:findqc\.com|[^"']*(?:agent|spreadsheet))/i);

  const prioritySlugs = [
    "qc-photo-angle-coverage-map",
    "qc-photo-lighting-color-difference",
    "qc-photo-scale-reference-guide",
    "qc-measurement-comparison-table",
    "qc-measurement-tolerance-guide",
    "qc-placement-alignment-observation-guide",
    "stitching-seam-qc-checklist",
    "qc-photo-symmetry-comparison",
    "print-embroidery-qc-photo-guide",
    "qc-material-evidence-composition-claims",
  ];

  const articleHub = await render("/articles/");
  const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");

  for (const slug of prioritySlugs) {
    assert.match(articleHub, new RegExp(`href="/articles/${slug}/"`, "i"));
    assert.match(sitemap, new RegExp(`<loc>https:\\/\\/findqcs\\.net\\/articles\\/${slug}\\/</loc>`, "i"));
    const html = await render(`/articles/${slug}/`);
    assert.match(html, new RegExp(`<link rel="canonical" href="https:\\/\\/findqcs\\.net\\/articles\\/${slug}\\/"\\/>`, "i"));
    assert.match(html, /"@type":"Article"/i);
    assert.equal((html.match(/"@type":"BreadcrumbList"/g) ?? []).length, 1);
    assert.doesNotMatch(html, /"@type":"FAQPage"/i);
    assert.doesNotMatch(html, /href="https:\/\/(?!(?:findqcs\.net|cnfanssp\.com))/i);

    const articleStart = html.indexOf('<article class="editorial-content shell">');
    const articleEnd = html.indexOf("</article>", articleStart);
    assert.ok(articleStart >= 0 && articleEnd > articleStart);
    const proseStart = html.indexOf('<div class="prose">', articleStart);
    assert.ok(proseStart > articleStart);
    const visibleText = html
      .slice(proseStart, articleEnd)
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&(?:amp|quot|#x27|#39|lt|gt);/g, " ");
    const words = visibleText.match(/[A-Za-z0-9]+(?:[’'-][A-Za-z0-9]+)*/g) ?? [];
    assert.ok(words.length >= 1200 && words.length <= 1800, `${slug} has ${words.length} visible article words`);
  }
});

test("does not keep HTML behind a long-lived Cloudflare edge cache", async () => {
  const headers = await readFile(new URL("../public/_headers", import.meta.url), "utf8");
  assert.match(headers, /\/\*[\s\S]*Cache-Control: no-cache, max-age=0, must-revalidate/i);
  assert.doesNotMatch(headers, /Cloudflare-CDN-Cache-Control:/i);
});
