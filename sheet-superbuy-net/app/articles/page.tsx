import type { Metadata } from "next";
import Link from "next/link";
import { ResourceShell } from "../components/ResourceShell";
import { articles } from "../data";

export const metadata: Metadata = { title: "Superbuy Spreadsheet Articles", description: "Practical Superbuy spreadsheet guides covering product verification, QC photos, warehouse storage, consolidation and shipping costs.", alternates: { canonical: "/articles" } };

export default function ArticlesPage() {
  return <ResourceShell eyebrow="Articles" title="Practical guides for the steps after discovery." intro="Every guide starts with a real user decision: whether the listing is current, whether the warehouse item is acceptable and whether the parcel plan makes sense.">
    <div className="article-index">{articles.map((article, index) => <article className="article-index-card" key={article.slug}><span>0{index + 1}</span><div><p className="eyebrow">{article.eyebrow} · {article.read}</p><h2>{article.title}</h2><p>{article.description}</p></div><Link href={`/articles/${article.slug}`}>Read guide ↗</Link></article>)}</div>
  </ResourceShell>;
}
