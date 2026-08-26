import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { guides } from "@/lib/data";

export const metadata: Metadata = {
  title: "AllChinaBuy Articles & Buying Guides",
  description: "Read independent AllChinaBuy spreadsheet, QC photo and international shipping guides before opening the live product catalog.",
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
        </section>
      </main>
    </PageShell>
  );
}
