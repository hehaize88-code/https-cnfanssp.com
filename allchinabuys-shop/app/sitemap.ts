import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://allchinabuys.shop";
  const routes = ["/","/spreadsheet/","/finds/","/articles/","/guide/","/qc/","/shipping/","/faq/","/articles/allchinabuy-listing-identity-verification/","/articles/how-to-use-allchinabuy-spreadsheet/","/articles/warehouse-qc-photo-checklist/","/articles/plan-allchinabuy-shipping/"];
  return routes.map((route,i)=>({
    url: `${base}${route}`,
    lastModified: new Date(route.includes("allchinabuy-listing-identity-verification") ? "2026-08-28" : "2026-08-26"),
    changeFrequency: i === 0 ? "daily" : route.startsWith("/articles/") ? "monthly" : "weekly",
    priority: i === 0 ? 1 : route.startsWith("/articles/") ? 0.7 : 0.8,
  }));
}
