import { spawnSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const buildOut = path.join(root, "out");
const staging = path.join(root, ".multilingual-out");
const dist = path.join(root, "dist");
const buildRun = path.join(root, ".next-build", `run-${Date.now()}`);
const languages = ["en", "pl", "es", "de", "ro"];
const localeMap = { en: "en_US", pl: "pl_PL", es: "es_ES", de: "de_DE", ro: "ro_RO" };
const englishOnlyRoutes = new Set([
  "/articles/warehouse-measurement-guide",
  "/articles/shipping-cost-checklist",
]);
function retireDirectory(directory, label) {
  if (!existsSync(directory)) return;
  const retiredRoot = mkdtempSync(path.join(tmpdir(), `findqcs-${label}-`));
  const retired = path.join(retiredRoot, path.basename(directory));
  renameSync(directory, retired);
}

function walk(directory, predicate, results = []) {
  for (const entry of readdirSync(directory)) {
    const absolute = path.join(directory, entry);
    if (statSync(absolute).isDirectory()) walk(absolute, predicate, results);
    else if (predicate(absolute)) results.push(absolute);
  }
  return results;
}

function routeFromHtml(relativePath) {
  const normalized = relativePath.split(path.sep).join("/");
  if (normalized === "index.html") return "/";
  return `/${normalized.replace(/\.html$/, "")}`;
}

function localizedUrl(route, language) {
  const prefix = language === "en" ? "" : `/${language}`;
  return `https://findqcs.org${prefix}${route === "/" ? "/" : route}`;
}

function stripMarkup(value) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function enrichHtml(html, route, language) {
  const canonical = localizedUrl(route, language);
  const alternatesForRoute = englishOnlyRoutes.has(route) ? ["en"] : languages;
  const links = [
    `<link rel="canonical" href="${canonical}"/>`,
    ...alternatesForRoute.map((candidate) => `<link rel="alternate" hreflang="${candidate}" href="${localizedUrl(route, candidate)}"/>`),
    `<link rel="alternate" hreflang="x-default" href="${localizedUrl(route, "en")}"/>`,
  ].join("");

  let output = html
    .replace(/<html\s+lang="[^"]*"/, `<html lang="${language}"`)
    .replace(/<link\s+rel="canonical"[^>]*>/gi, "")
    .replace(/<link\s+rel="alternate"\s+hreflang="[^"]+"[^>]*>/gi, "")
    .replace("<head>", `<head>${links}`)
    .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${canonical}"/>`)
    .replace(/<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:locale" content="${localeMap[language]}"/>`);

  return output;
}

function copyHtmlBuild(language, sourceRoot) {
  const destination = language === "en" ? staging : path.join(staging, language);
  mkdirSync(destination, { recursive: true });

  for (const source of walk(sourceRoot, (file) => file.endsWith(".html"))) {
    const relative = path.relative(sourceRoot, source);
    if (language !== "en" && ["404.html", "_not-found.html"].includes(relative)) continue;
    const target = path.join(destination, relative);
    mkdirSync(path.dirname(target), { recursive: true });
    writeFileSync(target, enrichHtml(readFileSync(source, "utf8"), routeFromHtml(relative), language));
  }

  const nextAssets = path.join(sourceRoot, "_next");
  if (existsSync(nextAssets)) cpSync(nextAssets, path.join(destination, "_next"), { recursive: true });

  const manifest = path.join(sourceRoot, "manifest.webmanifest");
  if (existsSync(manifest)) cpSync(manifest, path.join(destination, "manifest.webmanifest"));
}

function buildSitemap(routes) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const entries = routes.flatMap((route) => (englishOnlyRoutes.has(route) ? ["en"] : languages).map((language) => {
    const alternatesForRoute = englishOnlyRoutes.has(route) ? ["en"] : languages;
    const alternates = [
      ...alternatesForRoute.map((candidate) => `    <xhtml:link rel="alternate" hreflang="${candidate}" href="${localizedUrl(route, candidate)}" />`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl(route, "en")}" />`,
    ].join("\n");
    return `  <url>\n    <loc>${localizedUrl(route, language)}</loc>\n${alternates}\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  }));

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join("\n")}\n</urlset>\n`;
}

rmSync(staging, { recursive: true, force: true });
let indexableRoutes = [];

for (const language of languages) {
  const languageOut = path.join(buildRun, language);

  const result = spawnSync(process.execPath, [nextBin, "build"], {
    cwd: root,
    env: {
      ...process.env,
      NEXT_PUBLIC_SITE_LANGUAGE: language,
      NEXT_BUILD_DIR: path.relative(root, path.join(buildRun, language)),
    },
    stdio: "inherit",
  });
  if (result.status !== 0) process.exit(result.status ?? 1);

  if (language === "en") {
    const sourceSitemap = readFileSync(path.join(languageOut, "sitemap.xml"), "utf8");
    indexableRoutes = [...sourceSitemap.matchAll(/<loc>https:\/\/findqcs\.org([^<]*)<\/loc>/g)]
      .map((match) => match[1] || "/");

    for (const source of walk(languageOut, (file) => {
      const relative = path.relative(languageOut, file).split(path.sep).join("/");
      return !relative.startsWith("_next/")
        && !relative.endsWith(".html")
        && !relative.endsWith(".txt")
        && !["sitemap.xml", "robots.txt"].includes(relative);
    })) {
      const target = path.join(staging, path.relative(languageOut, source));
      mkdirSync(path.dirname(target), { recursive: true });
      cpSync(source, target);
    }
  }

  copyHtmlBuild(language, languageOut);
}

writeFileSync(path.join(staging, "sitemap.xml"), buildSitemap(indexableRoutes));
writeFileSync(path.join(staging, "robots.txt"), "User-Agent: *\nAllow: /\nSitemap: https://findqcs.org/sitemap.xml\n");

rmSync(buildOut, { recursive: true, force: true });
renameSync(staging, buildOut);
rmSync(buildRun, { recursive: true, force: true });

rmSync(dist, { recursive: true, force: true });
mkdirSync(path.join(dist, "client"), { recursive: true });
mkdirSync(path.join(dist, "server"), { recursive: true });
cpSync(buildOut, path.join(dist, "client"), { recursive: true });
const hostingConfig = path.join(root, ".openai", "hosting.json");
if (existsSync(hostingConfig)) {
  mkdirSync(path.join(dist, ".openai"), { recursive: true });
  cpSync(hostingConfig, path.join(dist, ".openai", "hosting.json"));
}
writeFileSync(path.join(dist, "server", "index.js"), `function withHeaders(response) {
  const headers = new Headers(response.headers);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  if ((headers.get("Content-Type") || "").includes("text/html")) {
    headers.set("Cache-Control", "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800");
  } else {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request, env) {
    const first = await env.ASSETS.fetch(request);
    if (first.status !== 404) return withHeaders(first);

    const url = new URL(request.url);
    if (/\\.[a-z0-9]+$/i.test(url.pathname)) return withHeaders(first);
    url.pathname = url.pathname.endsWith("/")
      ? url.pathname + "index.html"
      : url.pathname + ".html";
    return withHeaders(await env.ASSETS.fetch(new Request(url, request)));
  },
};
`);
console.log(`Multilingual export complete: ${indexableRoutes.length * languages.length} indexable URLs across ${languages.length} languages.`);
