import type { MetadataRoute } from "next";
import guideIndex from "../content/field-guides/index.json";
import octoberArticles from "../content/october-articles.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://allchinabuys.shop";
  const routes = ["/","/spreadsheet/","/finds/","/articles/","/guide/","/qc/","/shipping/","/faq/","/articles/allchinabuy-listing-identity-verification/","/articles/how-to-use-allchinabuy-spreadsheet/","/articles/warehouse-qc-photo-checklist/","/articles/plan-allchinabuy-shipping/","/articles/allchinabuy-tracking-order-parcel-status/","/articles/allchinabuy-order-status-explained/","/articles/allchinabuy-warehouse-storage-guide/","/articles/allchinabuy-return-refund-guide/","/articles/allchinabuy-fees-payment-methods/","/articles/allchinabuy-parcel-packing-consolidation/"];
  routes.push(...[...Object.keys(guideIndex), ...Object.keys(octoberArticles)].map(slug=>`/articles/${slug}/`));
  return routes.map((route,i)=>({
    url: `${base}${route}`,
    lastModified: new Date("2026-11-05"),
    changeFrequency: i === 0 ? "daily" : route.startsWith("/articles/") ? "monthly" : "weekly",
    priority: i === 0 ? 1 : route.startsWith("/articles/") ? 0.7 : 0.8,
  }));
}
