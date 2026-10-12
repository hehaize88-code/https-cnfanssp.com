import type { MetadataRoute } from "next";
import { articleSlugs } from "@/lib/articles";
import { languages, routes } from "@/lib/site-data";
import { articleDates } from "@/lib/october-articles";

const origin = "https://hacoovip.pro";
const alternates = (path: string) => ({ languages: Object.fromEntries([
  ...languages.map((lang) => [lang, `${origin}/${lang}${path}`]),
  ["x-default", `${origin}/en${path}`],
]) });

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-10-12T00:00:00.000Z");
  const pages = languages.flatMap((lang) =>
    routes.map((route) => ({
      url: `${origin}/${lang}${route ? `/${route}` : ""}`,
      lastModified: updated,
      alternates: alternates(route ? `/${route}` : ""),
      changeFrequency: route === "finds" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : route === "finds" ? 0.9 : 0.7,
    })),
  );
  const articlePages = languages.flatMap((lang) =>
    articleSlugs.map((slug) => ({
      url: `${origin}/${lang}/articles/${slug}`,
      lastModified: new Date(`${articleDates(slug, lang).modified}T00:00:00.000Z`),
      alternates: alternates(`/articles/${slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...pages, ...articlePages];
}
