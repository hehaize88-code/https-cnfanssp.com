import type { Metadata } from "next";
import InfoPage from "../ui/InfoPage";
import { articles } from "./article-data";

export const metadata: Metadata = {
  title: "ACBuy Shopping Articles | Finds, Fees, QC & Shipping",
  description: "Practical ACBuy guides covering the 2026 spreadsheet, legitimacy, fees, QC photos, warehouse storage, returns and international parcel planning.",
  alternates: { canonical: "https://acbuys.shop/articles/" },
};

export default function ArticlesPage() {
  const sections = articles.map((article) => ({
    kicker: `${article.category} · ${article.readingTime} min`,
    title: article.title,
    body: <><p>{article.description}</p><p><b>Primary topic:</b> {article.primaryKeyword}. The guide uses current records, clear decision steps and realistic limits instead of universal price, quality or delivery promises.</p><a className="article-link" href={`/articles/${article.slug}/`}>Read the complete article ↗</a></>,
  }));
  return <InfoPage canonicalPath="/articles/" accent="blue" eyebrow="Research & guides" title="ACBuy guides for finds, fees, QC, warehouse and shipping." intro="Start with the updated ACBuy spreadsheet for 2026, then open the focused guide that matches your next decision. Every article is grounded in current platform information and connected to a practical next step." sections={sections} />;
}
