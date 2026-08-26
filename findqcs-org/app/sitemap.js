import { articles, categories, products } from "../lib/data";

export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://findqcs.org";
  const staticRoutes = ["", "/products", "/categories", "/guides", "/guides/qc-photo-checklist", "/guides/how-to-buy", "/shipping", "/articles", "/faq", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 })),
    ...categories.map((category) => ({ url: `${base}/categories/${category.slug}`, changeFrequency: "weekly", priority: 0.75 })),
    ...products.map((product) => ({ url: `${base}/finds/${product.id}`, changeFrequency: "monthly", priority: 0.65 })),
    ...articles.map((article) => ({ url: `${base}/articles/${article.slug}`, changeFrequency: "monthly", priority: 0.7 })),
  ];
}
