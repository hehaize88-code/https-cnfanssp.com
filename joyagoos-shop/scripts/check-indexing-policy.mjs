import { readFile, readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = fileURLToPath(new URL("../out/", import.meta.url));
const sitemap = await readFile(join(outputDir, "sitemap.xml"), "utf8");
const sitemapUrls = new Set(
  [...sitemap.matchAll(/<loc>(https:\/\/joyagoos\.shop[^<]+)<\/loc>/g)].map((match) => match[1]),
);
const expectedArchiveSlugs = new Set([
  "joyagoo-buying-fees-guide",
  "joyagoo-qc-return-window-guide",
  "joyagoo-warehouse-rehearsal-shipping-guide",
  "volumetric-weight-guide",
  "joyagoo-reviews-buyer-signals",
]);

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return collectHtmlFiles(path);
      return path.endsWith(".html") ? [path] : [];
    }),
  );
  return files.flat();
}

const failures = [];
const archiveRoutes = [];
const indexableRoutes = [];
for (const file of await collectHtmlFiles(outputDir)) {
  const routePath = relative(outputDir, file).split(sep).join("/");
  if (!/^(en|de|es|fr|it)\//.test(routePath) || !routePath.endsWith("index.html")) continue;

  const html = await readFile(file, "utf8");
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!robots || !canonical) {
    failures.push(`${routePath}: missing robots or canonical metadata`);
    continue;
  }

  if (robots === "noindex, follow") {
    const slug = routePath.match(/articles\/([^/]+)\/index\.html$/)?.[1];
    if (!slug || !expectedArchiveSlugs.has(slug)) failures.push(`${routePath}: unexpected noindex page`);
    if (!canonical.startsWith("https://joyagoos.org/")) failures.push(`${routePath}: archive canonical must use joyagoos.org`);
    if (sitemapUrls.has(canonical.replace("https://joyagoos.org", "https://joyagoos.shop"))) failures.push(`${routePath}: archive URL must not be in sitemap`);
    archiveRoutes.push(routePath);
    continue;
  }

  if (robots !== "index, follow") failures.push(`${routePath}: unexpected robots value ${robots}`);
  if (!canonical.startsWith("https://joyagoos.shop/")) failures.push(`${routePath}: indexable canonical must use joyagoos.shop`);
  if (!sitemapUrls.has(canonical)) failures.push(`${routePath}: indexable canonical missing from sitemap`);
  indexableRoutes.push(routePath);
}

if (archiveRoutes.length !== 25) failures.push(`expected 25 localized archive routes, found ${archiveRoutes.length}`);
if (sitemapUrls.size !== 155) failures.push(`expected 155 sitemap URLs, found ${sitemapUrls.size}`);
if (indexableRoutes.length !== 155) failures.push(`expected 155 indexable localized routes, found ${indexableRoutes.length}`);

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Indexing policy verified: ${indexableRoutes.length} indexable routes, ${archiveRoutes.length} archived duplicate routes.`);
