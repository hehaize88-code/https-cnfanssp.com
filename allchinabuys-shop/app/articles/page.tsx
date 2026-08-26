import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { guides } from "@/lib/data";

export const metadata: Metadata = {
  title: "AllChinaBuy Articles & Buying Guides",
  description: "Read independent AllChinaBuy spreadsheet, QC photo and international shipping guides before opening the live product catalog.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <PageShell>
      <main>
        <header className="page-hero">
          <div className="section-shell">
            <div className="breadcrumbs"><Link href="/">Home</Link> / Articles</div>
            <p className="eyebrow">Independent research desk</p>
            <h1>Articles for better buying decisions.</h1>
            <p className="lede">Practical, source-first articles covering spreadsheet use, warehouse QC photos and international shipping. Each article has its own indexable page and points readers to the relevant catalog only when useful.</p>
          </div>
        </header>
        <section className="section-shell section-block">
          <div className="section-heading"><div><p className="eyebrow">Recommended publication order</p><h2>Follow the buyer’s real decisions.</h2></div><p>Start broad, then move down the funnel: spreadsheet and ordering workflow, QC evidence, shipping cost, customer-review analysis. Later articles can cover returns, packaging, payment and country-specific delivery without making several pages compete for the same query.</p></div>
          <div className="article-directory">
            {guides.map((guide, index) => (
              <article className="article-directory-card" key={guide.href}>
                <div><span>ARTICLE 0{index + 1}</span><b>{guide.read}</b></div>
                <p>{guide.kicker}</p>
                <h2>{guide.title}</h2>
                <small>{guide.description}</small>
                <Link href={guide.href}>Read independent article <span>↗</span></Link>
              </article>
            ))}
          </div>
          <div className="keyword-roadmap"><div><b>C01</b><span>AllChinaBuy spreadsheet</span><small>Supporting: how to use AllChinaBuy, product links, warehouse</small></div><div><b>C02</b><span>AllChinaBuy QC photos</span><small>Supporting: warehouse photos, extra photo, measurements</small></div><div><b>C03</b><span>AllChinaBuy shipping cost</span><small>Supporting: calculator, volumetric weight, Shipping Expert</small></div><div><b>C04</b><span>AllChinaBuy reviews</span><small>Supporting: legit, customer service, shipping reviews</small></div></div>
        </section>
      </main>
    </PageShell>
  );
}
