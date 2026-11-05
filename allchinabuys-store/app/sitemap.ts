import type { MetadataRoute } from "next";
import { categories, products } from "@/lib/data";
import { seoArticles } from "@/lib/seo-articles";

const base = "https://allchinabuys.store";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-10-08T00:00:00Z");
  const release = new Date("2026-11-05T00:00:00Z");
  const indexableCategories = categories.filter((category) => products.some((product) => product.categorySlug === category.slug));
  return [
    { url: base, lastModified: release, changeFrequency: "weekly", priority: 1 },
    ...["/spreadsheet", "/finds", "/articles", "/guides/how-to-use", "/guides/qc-checks", "/guides/shipping", "/guides/reviews", "/faq"].map((path) => ({ url: `${base}${path}`, lastModified: ["/spreadsheet", "/finds", "/articles"].includes(path) ? release : updated, changeFrequency: "monthly" as const, priority: path === "/spreadsheet" ? .9 : .7 })),
    ...seoArticles.map(({ slug, updated: articleUpdated, published }) => ({ url: `${base}/articles/${slug}`, lastModified: new Date(`${articleUpdated ?? published ?? "2026-09-09"}T00:00:00Z`), changeFrequency: "monthly" as const, priority: .75 })),
    ...indexableCategories.map(({ slug }) => ({ url: `${base}/categories/${slug}`, lastModified: slug === "t-shirts" ? release : updated, changeFrequency: "weekly" as const, priority: .7 })),
    ...products.map(({ slug, updated: recordDate }) => ({ url: `${base}/products/${slug}`, lastModified: recordDate === "November 5, 2026" || slug === "amiri-ma-1-sneakers" ? release : updated, changeFrequency: "weekly" as const, priority: .6 })),
  ];
}
