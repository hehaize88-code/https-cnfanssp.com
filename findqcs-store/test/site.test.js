import assert from "node:assert/strict";
import worker from "../src/index.js";

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
assert.match(home.body, /<title>FindQC Store — Source-Matched Product Finds &amp; Listing Checks<\/title>/);
assert.match(home.body, /<h1>FindQC Product Finds with Exact Source Links<\/h1>/);
assert.match(home.body, /Browse source-matched FindQC product finds, category directories and practical listing checks/);
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
assert.equal((sitemap.body.match(/<url>/g) || []).length, 80);
assert.doesNotMatch(sitemap.body, /\/privacy|\/terms/);

const article = await get("https://findqcs.store/articles/how-to-read-qc-photos");
assert.match(article.body, /"author":\{"@type":"Organization","name":"FindQC Store Editorial Team"/);
assert.match(article.body, /"publisher":\{"@type":"Organization","name":"FindQC Store","url":"https:\/\/findqcs.store"/);

console.log("findqcs.store regression checks passed");
