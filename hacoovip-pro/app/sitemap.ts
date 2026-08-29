import type { MetadataRoute } from "next";
import { articleSlugs } from "@/lib/articles";
import { languages, routes } from "@/lib/site-data";

const origin = "https://hacoovip.pro";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-29T00:00:00.000Z");
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
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...pages, ...articlePages];
}
