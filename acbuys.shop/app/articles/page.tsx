import copy from "../../content/editorial/en/ui.json";
import type { Metadata } from "next";
import InfoPage from "../ui/InfoPage";
import { articles } from "./article-data";

export const metadata: Metadata = {
  title: copy.hubTitle,
  description: copy.hubIntro,
  alternates: { canonical: "https://acbuys.shop/articles/" },
};

export default function ArticlesPage() {
  const sections = articles.map((article) => ({
    kicker: article.category,
    title: article.title,
    body: <><p>{article.description}</p><a className="article-link" href={`/articles/${article.slug}/`}>{article.shortTitle} ↗</a></>,
  }));
  return <InfoPage canonicalPath="/articles/" accent="blue" eyebrow="Research & guides" title="ACBuy guides: find products, check orders and plan shipping." intro={copy.hubIntro} sections={sections} />;
}
