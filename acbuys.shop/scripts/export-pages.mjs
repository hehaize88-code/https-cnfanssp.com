import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const origin = "https://acbuys.shop";
const outputDir = path.resolve("cloudflare-pages");
const clientDir = path.resolve("dist/client");
const serverEntry = path.resolve("dist/server/index.js");

const routes = [
  "/",
  "/articles",
  "/articles/acbuy-information-verification",
  "/articles/acbuy-qc-photos-guide",
  "/articles/acbuy-shipping-cost-guide",
  "/articles/acbuy-spreadsheet-guide",
  "/faq",
  "/guide",
  "/qc-guide",
  "/shipping",
];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const { default: worker } = await import(pathToFileURL(serverEntry).href);
const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};
const ctx = { waitUntil() {}, passThroughOnException() {} };

for (const route of routes) {
  const response = await worker.fetch(new Request(`${origin}${route}`), env, ctx);
  if (response.status !== 200) {
    throw new Error(`Static export failed for ${route}: HTTP ${response.status}`);
  }

  let html = await response.text();
  html = html.replace(
    /<meta(?=[^>]*name=["']robots["'])(?=[^>]*content=["']noindex, nofollow["'])[^>]*>/i,
    '<meta name="robots" content="index, follow, max-image-preview:large">',
  );

  if (!/<link[^>]+rel=["']canonical["']/i.test(html)) {
    html = html.replace("</head>", `<link rel="canonical" href="${origin}${route}"></head>`);
  }

  const targetDir = route === "/" ? outputDir : path.join(outputDir, route.slice(1));
  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, "index.html"), html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${origin}${route}</loc><lastmod>2026-08-26</lastmod></url>`).join("\n")}
</urlset>
`;

await writeFile(path.join(outputDir, "sitemap.xml"), sitemap);
await writeFile(path.join(outputDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile(
  path.join(outputDir, "404.html"),
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found | ACBuy Finds</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f7f3ea;color:#172036;font-family:Arial,sans-serif}.box{max-width:560px;padding:42px;text-align:center}b{color:#2155f5;font-size:12px;letter-spacing:.15em}h1{margin:18px 0 12px;font-size:56px;letter-spacing:-.06em}p{color:#687083;line-height:1.6}a{display:inline-block;margin-top:18px;padding:13px 18px;border-radius:10px;background:#2155f5;color:white;text-decoration:none;font-weight:800}</style></head><body><main class="box"><b>404</b><h1>Page not found.</h1><p>The address does not match a current guide or product-discovery page.</p><a href="/">Return home</a></main></body></html>`,
);

console.log(`Exported ${routes.length} routes to ${outputDir}`);
