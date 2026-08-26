import type { MetadataRoute } from "next";
import { categories, products } from "@/lib/data";

const base = "https://allchinabuys.store";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-26T00:00:00Z");
  return [
    { url: base, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    ...["/spreadsheet", "/finds", "/articles", "/guides/how-to-use", "/guides/qc-checks", "/guides/shipping", "/guides/reviews", "/faq"].map((path) => ({ url: `${base}${path}`, lastModified: updated, changeFrequency: "monthly" as const, priority: path === "/spreadsheet" ? .9 : .7 })),
    ...categories.map(({ slug }) => ({ url: `${base}/categories/${slug}`, lastModified: updated, changeFrequency: "weekly" as const, priority: .7 })),
    ...products.map(({ slug }) => ({ url: `${base}/products/${slug}`, lastModified: updated, changeFrequency: "weekly" as const, priority: .6 })),
  ];
}
