import type { MetadataRoute } from "next";
import { articleSlugs } from "@/lib/articles";
import { languages, routes } from "@/lib/site-data";
import { priorityArticleSlugs } from "@/lib/priority-articles-en";

const origin = "https://hacoovip.pro";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-19T00:00:00.000Z");
  const pages = languages.flatMap((lang) =>
    routes.map((route) => ({
      url: `${origin}/${lang}${route ? `/${route}` : ""}`,
      lastModified: updated,
      changeFrequency: route === "finds" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : route === "finds" ? 0.9 : 0.7,
    })),
  );
  const articlePages = languages.flatMap((lang) =>
    articleSlugs.map((slug) => ({
      url: `${origin}/${lang}/articles/${slug}`,
      lastModified: priorityArticleSlugs.includes(slug as (typeof priorityArticleSlugs)[number]) ? new Date("2026-09-19T00:00:00.000Z") : updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...pages, ...articlePages];
}
