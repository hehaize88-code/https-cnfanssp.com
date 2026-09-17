import assert from "node:assert/strict";
import worker from "../src/index.js";
import { localizedPriorityArticles } from "../src/priority-articles.js";
import { localizedPriorityArticlesSecondSet } from "../src/priority-articles-two.js";

async function get(url) {
  const response = await worker.fetch(new Request(url));
  return { response, body: await response.text() };
}

for (const [input, expected] of [
  ["http://findqcs.store/categories", "https://findqcs.store/categories"],
  ["http://www.findqcs.store/categories/", "https://findqcs.store/categories"],
  ["https://www.findqcs.store/articles/how-to-read-qc-photos/", "https://findqcs.store/articles/how-to-read-qc-photos"],
  ["https://findqcs.store/de/categories/shoes/", "https://findqcs.store/de/categories/shoes"],
  ["https://findqcs.store/de/", "https://findqcs.store/de"],
]) {
  const { response } = await get(input);
  assert.equal(response.status, 301, input);
  assert.equal(response.headers.get("location"), expected, input);
}

const home = await get("https://findqcs.store/");
assert.equal(home.response.status, 200);
assert.match(home.body, /<title>FindQC Store: QC Finder Guides, QC Photos &amp; Product Links<\/title>/);
assert.match(home.body, /<h1>QC Finder Guides, QC Photos and Exact Product Links<\/h1>/);
assert.match(home.body, /practical QC finder workflows/);
assert.equal((home.body.match(/application\/ld\+json/g) || []).length, 2);

for (const lang of ["en", "de", "es", "fr", "it"]) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const category = await get(`https://findqcs.store${prefix}/categories/shoes`);
  assert.equal(category.response.status, 200, lang);
  assert.equal((category.body.match(/class="category-detail-grid"/g) || []).length, 1, lang);
  assert.equal((category.body.match(/<li>/g) || []).length, 9, lang);
  assert.equal((category.body.match(/<details>/g) || []).length, 3, lang);
  assert.equal((category.body.match(/application\/ld\+json/g) || []).length, 2, lang);
}

const faq = await get("https://findqcs.store/faq");
assert.match(faq.body, /"@type":"FAQPage"/);

const privacy = await get("https://findqcs.store/privacy");
assert.match(privacy.body, /<meta name="robots" content="noindex,follow">/);

const sitemap = await get("https://findqcs.store/sitemap.xml");
assert.equal((sitemap.body.match(/<url>/g) || []).length, 140);
assert.doesNotMatch(sitemap.body, /\/privacy|\/terms/);
assert.match(sitemap.body, /product-requirements-brief-before-search/);
assert.match(sitemap.body, /define-product-use-case-before-search/);
assert.match(sitemap.body, /must-haves-vs-preferences-buyer-acceptance-criteria/);
assert.match(sitemap.body, /use-qc-finder-taobao-weidian-1688-links/);
assert.match(sitemap.body, /qc-photo-matching-exact-item-color-size-batch/);
assert.match(sitemap.body, /qc-finder-vs-qc-checker-vs-spreadsheet/);
assert.match(sitemap.body, /weidian-qc-photos-link-verification-workflow/);
assert.match(sitemap.body, /taobao-qc-photos-product-link-item-id-image/);
assert.match(sitemap.body, /1688-qc-photos-supplier-listing-variant-checks/);
assert.match(sitemap.body, /shoe-qc-photo-checklist-shape-stitching-labels-measurements/);
assert.match(sitemap.body, /clothing-qc-photo-checklist-hoodies-jackets-jerseys/);
assert.match(sitemap.body, /<loc>https:\/\/findqcs\.store\/spreadsheet<\/loc>/);

const article = await get("https://findqcs.store/articles/how-to-read-qc-photos");
assert.match(article.body, /"author":\{"@type":"Organization","name":"FindQC Store Editorial Team"/);
assert.match(article.body, /"publisher":\{"@type":"Organization","name":"FindQC Store","url":"https:\/\/findqcs.store"/);

for (const lang of ["en", "de", "es", "fr", "it"]) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const brief = await get(`https://findqcs.store${prefix}/articles/product-requirements-brief-before-search`);
  assert.equal(brief.response.status, 200, lang);
  assert.equal((brief.body.match(/<section id="step-/g) || []).length, 9, lang);
  assert.match(brief.body, /"@type":"Article"/);
  assert.match(brief.body, /"@type":"BreadcrumbList"/);
  assert.match(brief.body, /hreflang="x-default"/);
  assert.match(brief.body, /<meta property="og:type" content="article">/);
  assert.match(brief.body, /<meta property="og:url" content="https:\/\/findqcs\.store/);
  assert.doesNotMatch(brief.body, /<figure class="article-evidence-photo">/);
}

for (const lang of ["en", "de", "es", "fr", "it"]) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const sheet = await get(`https://findqcs.store${prefix}/spreadsheet`);
  assert.equal(sheet.response.status, 200, lang);
  assert.equal((sheet.body.match(/class="spreadsheet-row"/g) || []).length, 5, lang);
  assert.match(sheet.body, /qc-finder-vs-qc-checker-vs-spreadsheet/);
  for (const slug of [
    "use-qc-finder-taobao-weidian-1688-links",
    "qc-photo-matching-exact-item-color-size-batch",
    "qc-finder-vs-qc-checker-vs-spreadsheet",
    "weidian-qc-photos-link-verification-workflow",
  ]) {
    const guide = await get(`https://findqcs.store${prefix}/articles/${slug}`);
    assert.equal(guide.response.status, 200, `${lang}:${slug}`);
    assert.equal((guide.body.match(/<section id="step-/g) || []).length, 7, `${lang}:${slug}`);
    assert.match(guide.body, /"datePublished":"2026-09-17"/);
    assert.match(guide.body, /class="related-guides"/);
    assert.doesNotMatch(guide.body, /SEO Articles|SEO-Artikel|Artículos SEO|Articles SEO|Articoli SEO/);
  }
  for (const slug of [
    "taobao-qc-photos-product-link-item-id-image",
    "1688-qc-photos-supplier-listing-variant-checks",
    "shoe-qc-photo-checklist-shape-stitching-labels-measurements",
    "clothing-qc-photo-checklist-hoodies-jackets-jerseys",
  ]) {
    const guide = await get(`https://findqcs.store${prefix}/articles/${slug}`);
    assert.equal(guide.response.status, 200, `${lang}:${slug}`);
    assert.equal((guide.body.match(/<section id="step-/g) || []).length, 10, `${lang}:${slug}`);
    assert.match(guide.body, /"datePublished":"2026-09-17"/);
    assert.match(guide.body, /class="related-guides"/);
    assert.doesNotMatch(guide.body, /<figure class="article-evidence-photo">/);
  }
}

for (const guide of [...localizedPriorityArticles.en, ...localizedPriorityArticlesSecondSet.en]) {
  const visibleText = [guide.title, guide.description, guide.summary, ...guide.sections.flat()].join(" ");
  const words = visibleText.trim().split(/\s+/).length;
  assert.ok(words >= 1200 && words <= 1800, `${guide.slug} has ${words} English words`);
}

for (const lang of ["en", "de", "es", "fr", "it"]) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const useCase = await get(`https://findqcs.store${prefix}/articles/define-product-use-case-before-search`);
  assert.equal(useCase.response.status, 200, lang);
  assert.equal((useCase.body.match(/<section id="step-/g) || []).length, 9, lang);
  assert.match(useCase.body, /"@type":"Article"/);
  assert.match(useCase.body, /hreflang="x-default"/);
  assert.match(useCase.body, /<meta property="og:type" content="article">/);
  assert.doesNotMatch(useCase.body, /<figure class="article-evidence-photo">/);
}

console.log("findqcs.store regression checks passed");
