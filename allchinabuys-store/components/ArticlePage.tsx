import Link from "next/link";
import type { ReactNode } from "react";
import { PageShell } from "./PageShell";

export function ArticlePage({ kicker, title, description, path, children }: { kicker: string; title: string; description: string; path: string; children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-08-26",
    dateModified: "2026-10-08",
    mainEntityOfPage: `https://allchinabuys.store${path}`,
    author: { "@type": "Organization", name: "AllChinaBuy Spreadsheet Editorial Desk" },
    publisher: { "@type": "Organization", name: "AllChinaBuy Spreadsheet" },
  };
  return (
    <PageShell>
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <header className="page-hero"><div className="section-shell"><div className="breadcrumbs"><Link href="/">Home</Link> / Guides / {kicker}</div><p className="eyebrow">{kicker} · Updated October 8, 2026</p><h1>{title}</h1><p className="lede">{description}</p></div></header>
        <div className="section-shell content-grid">
          <article className="article-body"><div className="research-note"><b>Editorial standard</b><span>Platform status checked October 8, 2026: the official homepage displayed maintenance. Earlier service descriptions and dated reviews are historical references. Confirm current availability and terms before payment.</span></div>{children}</article>
          <aside><div className="side-card"><p className="eyebrow">Keep browsing</p><h3>Use the guide beside a live product record.</h3><p>Open the catalog, choose an item, then return to this checklist before paying or submitting a parcel.</p><a className="button button-dark" href="https://www.cnfanssp.com/AllProducts/" target="_blank" rel="noopener noreferrer">Open live catalog</a><Link className="button button-outline" href="/finds">See checked finds</Link></div></aside>
        </div>
      </main>
    </PageShell>
  );
}
