import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { guides } from "@/lib/data";
import { seoArticles } from "@/lib/seo-articles";

export const metadata: Metadata = {
  title: { absolute: "ACBuy Spreadsheet Articles and Product Research Guides" },
  description: "Read practical ACBuy spreadsheet articles covering shoe and clothing finds, QC photos, product IDs, listing comparison and safer catalog research.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <PageShell>
      <main>
        <header className="page-hero">
          <div className="section-shell">
            <div className="breadcrumbs"><Link href="/">Home</Link> / Articles</div>
            <p className="eyebrow">Independent ACBuy research desk</p>
            <h1>ACBuy Spreadsheet Articles and Product Research Guides</h1>
            <p className="lede">Use these source-first guides to compare AllChinaBuy finds, preserve exact product IDs, interpret warehouse QC photos and reach the live catalog with a clearer decision.</p>
          </div>
        </header>
        <section className="section-shell section-block">
          <div className="section-heading"><div><p className="eyebrow">New keyword-led library</p><h2>Ten focused guides for real search tasks.</h2></div><p>These pages target the strongest missing cluster: ACBuy spreadsheet, category finds, QC evidence, W2C links, product IDs, comparison and search. Each page has one primary intent so the articles support rather than compete with the spreadsheet and product index.</p></div>
          <div className="article-directory">
            {seoArticles.map((article, index) => (
              <article className="article-directory-card" key={article.slug}>
                <div><span>ARTICLE {String(index + 1).padStart(2, "0")}</span><b>{article.read}</b></div>
                <p>{article.kicker}</p>
                <h2>{article.title}</h2>
                <small>{article.description}</small>
                <Link href={`/articles/${article.slug}`}>Read focused guide <span>↗</span></Link>
              </article>
            ))}
          </div>
        </section>
        <section className="section-shell section-block">
          <div className="section-heading"><div><p className="eyebrow">Foundation guides</p><h2>Platform workflow and decision checks.</h2></div><p>The original guides cover spreadsheet use, QC, shipping and review research. They remain separate from the new category and product-discovery pages.</p></div>
          <div className="article-directory">
            {guides.map((guide, index) => (
              <article className="article-directory-card" key={guide.href}>
                <div><span>GUIDE {String(index + 1).padStart(2, "0")}</span><b>{guide.read}</b></div>
                <p>{guide.kicker}</p>
                <h2>{guide.title}</h2>
                <small>{guide.description}</small>
                <Link href={guide.href}>Read foundation guide <span>↗</span></Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
