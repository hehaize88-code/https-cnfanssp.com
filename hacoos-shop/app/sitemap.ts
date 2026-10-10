import type { MetadataRoute } from "next";
import { articleSlugs } from "./article-data";
import { getArticle } from "./article-locales";
import { languages, publicPages, routePath, articleRoutePath } from "./site";
export const dynamic = "force-static";
const origin = 'https://hacoos.shop';
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = languages.flatMap(lang => publicPages.map(page => ({
    url: origin + routePath(lang, page), lastModified: new Date('2026-10-10'),
    alternates: { languages: { ...Object.fromEntries(languages.map(code => [code, origin + routePath(code, page)])), 'x-default': origin + routePath('en', page) } },
  })));
  const articles = languages.flatMap(lang => articleSlugs.map(slug => ({
    url: origin + articleRoutePath(lang, slug), lastModified: new Date(getArticle(lang, slug).updatedISO!),
    alternates: { languages: { ...Object.fromEntries(languages.map(code => [code, origin + articleRoutePath(code, slug)])), 'x-default': origin + articleRoutePath('en', slug) } },
  })));
  return [...routes, ...articles];
}
