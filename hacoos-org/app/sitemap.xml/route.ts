import { locales, sections } from "@/lib/site-data";
import { articleSlugs } from "@/lib/localized-content";

export async function GET() {
  const urls = [
    "https://hacoos.org/",
    ...locales.map((locale) => `https://hacoos.org/${locale}`),
    ...locales.flatMap((locale) => sections.map((section) => `https://hacoos.org/${locale}/${section}`)),
    ...locales.flatMap((locale) => articleSlugs.map((slug) => `https://hacoos.org/${locale}/articles/${slug}`)),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `\n  <url><loc>${url}</loc><lastmod>2026-08-26</lastmod></url>`).join("")}\n</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
