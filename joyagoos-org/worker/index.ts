/** Cloudflare Worker entry point for joyagoos.org. */
import handler from "vinext/server/app-router-entry";

const siteOrigin = "https://joyagoos.org";
const languages = ["en", "de", "es", "fr", "it"];
const pages = [
  "",
  "spreadsheet/",
  "finds/",
  "guide/",
  "qc/",
  "shipping/",
  "faq/",
  "articles/",
  "articles/joyagoo-buying-fees-guide/",
  "articles/joyagoo-qc-return-window-guide/",
  "articles/joyagoo-warehouse-rehearsal-shipping-guide/",
  "articles/volumetric-weight-guide/",
  "articles/joyagoo-reviews-buyer-signals/",
];

const robotsText = `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n`;
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${languages
  .flatMap((language) => pages.map((page) => `  <url><loc>${siteOrigin}/${language}/${page}</loc><lastmod>2026-08-28</lastmod></url>`))
  .join("\n")}\n</urlset>\n`;

interface Env {
  ASSETS: Fetcher;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (url.hostname === "www.joyagoos.org") {
      url.hostname = "joyagoos.org";
      if (url.pathname === "/") url.pathname = "/en/";
      return Response.redirect(url.toString(), 308);
    }
    const { pathname } = url;
    if (pathname === "/robots.txt") {
      return new Response(robotsText, { headers: { "content-type": "text/plain; charset=utf-8" } });
    }
    if (pathname === "/sitemap.xml") {
      return new Response(sitemapXml, { headers: { "content-type": "application/xml; charset=utf-8" } });
    }
    return handler.fetch(request, env, ctx);
  },
};

export default worker;
