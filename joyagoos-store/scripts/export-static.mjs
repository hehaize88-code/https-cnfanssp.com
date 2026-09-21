import { copyFile, cp, mkdir, rm, writeFile } from "node:fs/promises";
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
    new Request(`https://joyagoos.store${pathname}`),
    {},
    executionContext,
  );
}

function localeFor(pathname) {
  const match = pathname.match(/^\/(zh|de|pl|es|it|fr|pt|ro|sv)(?:\/|$)/);
  return match?.[1] ?? "en";
}

function setDocumentLanguage(html, pathname) {
  return html.replace(
    /<html\s+lang=["'][^"']+["']/,
    `<html lang="${localeFor(pathname)}"`,
  );
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

const articleHubPaths = pageUrls
  .map((pageUrl) => new URL(pageUrl).pathname)
  .filter((pathname) => pathname === "/articles" || pathname.endsWith("/articles"));

for (const pathname of articleHubPaths) {
  const sourceFile = join(outputDir, `${pathname.slice(1)}.html`);
  const aliasPath = pathname.replace(/\/articles$/, "/articles-2026");
  const aliasFile = join(outputDir, `${aliasPath.slice(1)}.html`);
  await mkdir(dirname(aliasFile), { recursive: true });
  await copyFile(sourceFile, aliasFile);
}

const robotsResponse = await fetchPath("/robots.txt");
if (!robotsResponse.ok) throw new Error("Could not render robots.txt");
await writeFile(join(outputDir, "robots.txt"), await robotsResponse.text());
await writeFile(join(outputDir, "sitemap.xml"), sitemap);

const notFoundResponse = await fetchPath("/__static-export-not-found__");
const notFoundHtml = setDocumentLanguage(await notFoundResponse.text(), "/")
  .replace(/<title>.*?<\/title>/, "<title>Page Not Found | Joyagoos Store</title>")
  .replace(/<meta name="robots" content="index, follow"\/>/, '<meta name="robots" content="noindex, follow"/>')
  .replace(/<link rel="canonical"[^>]*>/g, "")
  .replace(/<link rel="alternate"[^>]*>/g, "");
await writeFile(join(outputDir, "404.html"), notFoundHtml);

const redirects = pageUrls
  .map((pageUrl) => new URL(pageUrl).pathname)
  .filter((pathname) => pathname !== "/")
  .map((pathname) => `${pathname}/ ${pathname} 301`)
  .join("\n");
const articleAliasRedirects = articleHubPaths
  .map((pathname) => pathname.replace(/\/articles$/, "/articles-2026"))
  .map((pathname) => `${pathname}/ ${pathname} 301`)
  .join("\n");
await writeFile(join(outputDir, "_redirects"), `https://www.joyagoos.store/* https://joyagoos.store/:splat 301\n${redirects}\n${articleAliasRedirects}\n`);
await writeFile(join(outputDir, "_headers"), `/articles\n  Cache-Control: no-cache, max-age=0, must-revalidate\n\n/articles/*\n  Cache-Control: no-cache, max-age=0, must-revalidate\n\n/articles-2026\n  Cache-Control: no-cache, max-age=0, must-revalidate\n\n/*/articles-2026\n  Cache-Control: no-cache, max-age=0, must-revalidate\n\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/joyagoo-logo.png\n  Cache-Control: public, max-age=604800\n`);

console.log(`Exported ${pageUrls.length} indexable pages to dist/pages.`);
