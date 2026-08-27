import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const root = process.cwd();
const clientDir = join(root, "dist", "client");
const outputDir = join(root, "dist", "pages");
const serverModule = await import(join(root, "dist", "server", "index.js"));
const handler = serverModule.default;
const executionContext = {
  waitUntil() {},
  passThroughOnException() {},
};

async function fetchPath(pathname) {
  return handler.fetch(
    new Request(`https://hacoos.store${pathname}`),
    {},
    executionContext,
  );
}

function localeFor(pathname) {
  const match = pathname.match(/^\/(de|fr|es|it)(?:\/|$)/);
  return match?.[1] ?? "en";
}

function setDocumentLanguage(html, pathname) {
  const locale = localeFor(pathname);
  return html.replace(/<html\s+lang=["'][^"']+["']/, `<html lang="${locale}"`);
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const sitemapResponse = await fetchPath("/sitemap.xml");
if (!sitemapResponse.ok) throw new Error("Could not render sitemap.xml");
const sitemap = await sitemapResponse.text();
const pageUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

for (const pageUrl of pageUrls) {
  const pathname = new URL(pageUrl).pathname;
  const response = await fetchPath(pathname);
  if (!response.ok) {
    throw new Error(`Static render failed for ${pathname}: ${response.status}`);
  }
  const html = setDocumentLanguage(await response.text(), pathname);
  const relativeFile = pathname === "/" ? "index.html" : `${pathname.slice(1)}.html`;
  const outputFile = join(outputDir, relativeFile);
  await mkdir(dirname(outputFile), { recursive: true });
  await writeFile(outputFile, html);
}

const robotsResponse = await fetchPath("/robots.txt");
if (!robotsResponse.ok) throw new Error("Could not render robots.txt");
await writeFile(join(outputDir, "robots.txt"), await robotsResponse.text());
await writeFile(join(outputDir, "sitemap.xml"), sitemap);

const notFoundResponse = await fetchPath("/__static-export-not-found__");
const notFoundHtml = setDocumentLanguage(await notFoundResponse.text(), "/")
  .replace(/<title>.*?<\/title>/, "<title>Page Not Found | Hacoos Store</title>")
  .replace(/<meta name="robots" content="index, follow"\/>/, '<meta name="robots" content="noindex, follow"/>');
await writeFile(join(outputDir, "404.html"), notFoundHtml);

const redirects = pageUrls
  .map((pageUrl) => new URL(pageUrl).pathname)
  .filter((pathname) => pathname !== "/")
  .map((pathname) => `${pathname}/ ${pathname} 301`)
  .join("\n");
await writeFile(join(outputDir, "_redirects"), `${redirects}\n`);

console.log(`Exported ${pageUrls.length} indexable pages to dist/pages.`);
