import type { Metadata } from "next";
import Link from "next/link";
import { ResourceShell } from "../components/ResourceShell";
import { articles } from "../data";

export const metadata: Metadata = { title: "Superbuy Guides 2026: Spreadsheet Links, QC & Shipping", description: "Read 15 evidence-led Superbuy guides covering spreadsheet link checks, detailed QC photos, measurements, warehouse status, restricted items and shipping weight.", alternates: { canonical: "/articles/" } };

export default function ArticlesPage() {
  return <ResourceShell eyebrow="Articles" title="Practical guides for the steps after discovery." intro="Every guide starts with a real user decision: whether the listing is current, whether the warehouse item is acceptable and whether the parcel plan makes sense.">
    <div className="article-index">{articles.map((article, index) => <article className="article-index-card" key={article.slug}><span>{String(index + 1).padStart(2, "0")}</span><div><p className="eyebrow">{article.eyebrow} · {article.read}</p><h2>{article.title}</h2><p>{article.description}</p></div><Link href={`/articles/${article.slug}/`}>Read guide ↗</Link></article>)}</div>
  </ResourceShell>;
}
