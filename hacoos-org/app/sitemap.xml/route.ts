import { locales, sections } from "@/lib/site-data";
import { localizedContent } from "@/lib/localized-content";

export async function GET() {
  const urls = [
    ...locales.map((locale) => ({ url: `https://hacoos.org/${locale}`, lastmod: "2026-10-09" })),
    ...locales.flatMap((locale) => sections.map((section) => ({ url: `https://hacoos.org/${locale}/${section}`, lastmod: "2026-10-09" }))),
    ...locales.flatMap((locale) => localizedContent[locale].longGuides.map((article) => ({ url: `https://hacoos.org/${locale}/articles/${article.id}`, lastmod: article.modifiedAt ?? "2026-09-16" }))),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(({ url, lastmod }) => `\n  <url><loc>${url}</loc><lastmod>${lastmod}</lastmod></url>`).join("")}\n</urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
