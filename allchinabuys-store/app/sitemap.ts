import type { MetadataRoute } from "next";
import { categories, products } from "@/lib/data";
import { seoArticles } from "@/lib/seo-articles";

const base = "https://allchinabuys.store";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-09T00:00:00Z");
  const indexableCategories = categories.filter((category) => products.some((product) => product.categorySlug === category.slug));
  return [
    { url: base, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    ...["/spreadsheet", "/finds", "/articles", "/guides/how-to-use", "/guides/qc-checks", "/guides/shipping", "/guides/reviews", "/faq"].map((path) => ({ url: `${base}${path}`, lastModified: updated, changeFrequency: "monthly" as const, priority: path === "/spreadsheet" ? .9 : .7 })),
    ...seoArticles.map(({ slug }) => ({ url: `${base}/articles/${slug}`, lastModified: updated, changeFrequency: "monthly" as const, priority: .75 })),
    ...indexableCategories.map(({ slug }) => ({ url: `${base}/categories/${slug}`, lastModified: updated, changeFrequency: "weekly" as const, priority: .7 })),
    ...products.map(({ slug }) => ({ url: `${base}/products/${slug}`, lastModified: updated, changeFrequency: "weekly" as const, priority: .6 })),
  ];
}
