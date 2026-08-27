import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { articles as englishArticles } from "../lib/articles.js";
import { getLocalizedArticles } from "../lib/localizedArticles.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "out");
const languages = ["en", "pl", "es", "de", "ro"];
const sitemap = readFileSync(path.join(out, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const failures = [];
const articleSlugs = englishArticles.map(({ slug }) => slug);
const englishUiResidues = [
  "Category field guide",
  "Buying advice",
  "Visible QC checks",
  "Common questions",
  "Approximate USD reference",
  "Open exact catalog page",
  "Category-specific evidence",
  "Decision boundary",
  "Related mapped finds",
  "PRODUCT INDEX",
];
const expectedIndexableProducts = 9;

function articleText(article) {
  const values = [];
  const visit = (value) => {
    if (typeof value === "string") values.push(value);
    else if (Array.isArray(value)) value.forEach(visit);
    else if (value && typeof value === "object") Object.values(value).forEach(visit);
  };
  visit({
    title: article.title,
    description: article.description,
    excerpt: article.excerpt,
    intro: article.intro,
    sections: article.sections,
    cta: article.cta,
  });
  return values.join(" ");
}

function words(value) {
  return value.toLocaleLowerCase().match(/\p{L}+(?:[-’']\p{L}+)*/gu) || [];
}

function trigrams(value) {
  const tokens = words(value);
  return new Set(tokens.slice(0, -2).map((word, index) => `${word} ${tokens[index + 1]} ${tokens[index + 2]}`));
}

function overlap(left, right) {
  const a = trigrams(left);
  const b = trigrams(right);
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const item of a) if (b.has(item)) shared += 1;
  return shared / Math.min(a.size, b.size);
}

function visibleText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&mdash;|&#x2014;/g, "—")
    .replace(/\s+/g, " ")
    .trim();
}

function expectedLanguage(pathname) {
  return pathname.match(/^\/(pl|es|de|ro)(?=\/|$)/)?.[1] || "en";
}

for (const language of languages.filter((candidate) => candidate !== "en")) {
  const localizedArticles = getLocalizedArticles(language);
  for (const englishArticle of englishArticles) {
    const localized = localizedArticles.find(({ slug }) => slug === englishArticle.slug);
    if (!localized) {
      failures.push(`Missing localized article data: ${language}/${englishArticle.slug}`);
      continue;
    }

    if (localized.title === englishArticle.title) failures.push(`English article fallback on ${language}/${englishArticle.slug}`);
    if (articleText(localized) === articleText(englishArticle)) failures.push(`English article body fallback on ${language}/${englishArticle.slug}`);
    if (localized.sections.length < 5) failures.push(`Localized article is too shallow: ${language}/${englishArticle.slug}`);

    const pathname = `/${language}/articles/${englishArticle.slug}`;
    const file = htmlPath(pathname);
    if (!existsSync(file)) {
      failures.push(`Missing localized article HTML: ${pathname}`);
      continue;
    }
    const rendered = visibleText(readFileSync(file, "utf8"));
    if (!rendered.includes(localized.title)) failures.push(`Localized H1 not rendered: ${pathname}`);
    if (rendered.includes(englishArticle.title)) failures.push(`English H1 remains visible: ${pathname}`);
  }
}

for (const article of englishArticles) {
  const wordCount = words(articleText(article)).length;
  if (wordCount < 1180 || wordCount > 1800) failures.push(`English article length outside 1200–1800 target: ${article.slug} (${wordCount})`);
}

function htmlPath(pathname) {
  const relative = pathname.replace(/^\//, "").replace(/\/$/, "");
  if (!relative) return path.join(out, "index.html");
  if (pathname.endsWith("/")) return path.join(out, relative, "index.html");
  return path.join(out, `${relative}.html`);
}

for (const url of urls) {
  const { pathname } = new URL(url);
  const file = htmlPath(pathname);
  const language = expectedLanguage(pathname);
  if (!existsSync(file)) {
    failures.push(`Missing HTML: ${url}`);
    continue;
  }

  const html = readFileSync(file, "utf8");
  if (!html.includes(`<html lang="${language}"`)) failures.push(`Wrong lang attribute: ${url}`);
  if (!html.includes(`<link rel="canonical" href="${url}"`)) failures.push(`Wrong canonical: ${url}`);
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) failures.push(`Expected one H1: ${url}`);

  const basePath = pathname.replace(/^\/(pl|es|de|ro)(?=\/|$)/, "") || "/";
  const englishOnly = ["/articles/warehouse-measurement-guide", "/articles/shipping-cost-checklist"].includes(basePath);
  for (const alternate of [...(englishOnly ? ["en"] : languages), "x-default"]) {
    const targetLanguage = alternate === "x-default" ? "en" : alternate;
    const prefix = targetLanguage === "en" ? "" : `/${targetLanguage}`;
    const expected = `https://findqcs.org${prefix}${basePath === "/" ? "/" : basePath}`;
    const pattern = new RegExp(`<link rel="alternate" hreflang="${alternate}" href="${expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`);
    if (!pattern.test(html)) failures.push(`Missing ${alternate} alternate: ${url}`);
  }

  if (language !== "en") {
    const localPrefix = `/${language}`;
    const hrefs = [...html.matchAll(/href="(\/[^"]*)"/g)].map((match) => match[1].split(/[?#]/)[0]);
    const pageLinks = hrefs.filter((href) => !path.extname(href) && !href.startsWith("/_next"));
    for (const href of pageLinks) {
      if (!href.startsWith(localPrefix)) failures.push(`Cross-language internal link on ${url}: ${href}`);
    }

    const rendered = visibleText(html);
    for (const phrase of englishUiResidues) {
      if (rendered.includes(phrase)) failures.push(`English UI residue on ${url}: ${phrase}`);
    }

    const englishFile = htmlPath(basePath);
    if (existsSync(englishFile) && !basePath.startsWith("/articles/")) {
      const englishHtml = readFileSync(englishFile, "utf8");
      for (const tag of ["section", "article", "details", "li", "h2", "h3"]) {
        const localizedCount = (html.match(new RegExp(`<${tag}[\\s>]`, "g")) || []).length;
        const englishCount = (englishHtml.match(new RegExp(`<${tag}[\\s>]`, "g")) || []).length;
        if (localizedCount !== englishCount) failures.push(`Content structure changed on ${url}: ${tag} ${localizedCount}/${englishCount}`);
      }
    }
  }
}

const providerSource = readFileSync(path.join(root, "components", "LanguageProvider.jsx"), "utf8");
if (!providerSource.includes("window.location.assign(nextUrl)")) failures.push("Language switcher does not load the complete locale edition");
if (providerSource.includes("history.replaceState")) failures.push("Language switcher still uses address-only replacement");

const sitemapAlternateCount = (sitemap.match(/<xhtml:link /g) || []).length;
const expectedUrls = (13 + 9 + englishArticles.length + expectedIndexableProducts) * languages.length - 8;
if (urls.length !== expectedUrls) failures.push(`Expected ${expectedUrls} sitemap URLs, found ${urls.length}`);
if (new Set(urls).size !== urls.length) failures.push("Sitemap contains duplicate URLs");
const expectedAlternateCount = (expectedUrls - 2) * 6 + 2 * 2;
if (sitemapAlternateCount !== expectedAlternateCount) failures.push(`Expected ${expectedAlternateCount} sitemap alternates, found ${sitemapAlternateCount}`);
if (!readFileSync(path.join(out, "robots.txt"), "utf8").includes("Sitemap: https://findqcs.org/sitemap.xml")) failures.push("robots.txt sitemap is incorrect");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(JSON.stringify({
  languages: languages.length,
  indexableUrls: urls.length,
  localizedArticlePages: articleSlugs.length * (languages.length - 1),
  bidirectionalAlternateLinks: sitemapAlternateCount,
  status: "passed",
}, null, 2));
