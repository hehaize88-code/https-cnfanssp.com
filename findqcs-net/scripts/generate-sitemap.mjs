import { readFile, writeFile } from "node:fs/promises";

const file = new URL("../public/sitemap.xml", import.meta.url);
const xml = await readFile(file, "utf8");
const languages = ["en", "de", "fr", "es", "it"];
const base = "https://findqcs.net";
const dates = new Map();
for (const match of xml.matchAll(/<url><loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod>/g)) {
  const path = new URL(match[1]).pathname;
  if (!/^\/(de|fr|es|it)\//.test(path)) dates.set(path, match[2]);
}

for (const path of [
  "/", "/articles/", "/categories/", "/guides/qc-photo-checklist/", "/guides/warehouse-lighting/",
  "/articles/no-qc-photos-found/", "/articles/football-shirt-qc-checklist/", "/articles/qc-photo-shoe-weight-with-box/",
]) dates.set(path, "2026-11-05");

const url = (path, lang) => base + (lang === "en" ? "" : "/" + lang) + path;
const entries = [];
for (const path of [...dates.keys()].sort()) {
  const alternates = [...languages, "x-default"].map(lang =>
    `<xhtml:link rel="alternate" hreflang="${lang}" href="${url(path, lang === "x-default" ? "en" : lang)}"/>`
  ).join("");
  for (const lang of languages) {
    entries.push(`  <url><loc>${url(path, lang)}</loc><lastmod>${dates.get(path)}</lastmod>${alternates}</url>`);
  }
}
await writeFile(file, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join("\n")}\n</urlset>\n`);
console.log(`${entries.length} sitemap URLs`);
