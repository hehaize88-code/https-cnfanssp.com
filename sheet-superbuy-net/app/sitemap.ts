import type { MetadataRoute } from "next";
import { articles } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sheet-superbuy.net";
  const staticPages = ["", "/spreadsheet/", "/finds/", "/qc/", "/shipping/", "/articles/", "/faq/"];
  return [
    ...staticPages.map((path) => ({ url: `${base}${path}`, lastModified: new Date("2026-09-12"), changeFrequency: path === "" || path === "/finds/" || path === "/articles/" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .8 })),
    ...articles.map((article) => ({ url: `${base}/articles/${article.slug}/`, lastModified: new Date("published" in article ? article.published : article.slug === "superbuy-personal-order-tracker-setup" ? "2026-08-28" : "2026-08-24"), changeFrequency: "monthly" as const, priority: .75 })),
  ];
}
