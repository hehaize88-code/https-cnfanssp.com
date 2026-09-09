import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { guides } from "@/lib/data";
import { seoArticles } from "@/lib/seo-articles";

export const metadata: Metadata = {
  title: { absolute: "AllChinaBuy Guides: Shipping, QC, Fees & Warehouse" },
  description: "Independent AllChinaBuy and ACBuy guides for shipping, warehouse checks, fees, tracking, returns, country delivery planning and spreadsheet research.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AllChinaBuy Guides: Shipping, QC, Fees & Warehouse",
    url: "https://allchinabuys.store/articles",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: seoArticles.length,
      itemListElement: seoArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: `https://allchinabuys.store/articles/${article.slug}`,
      })),
    },
  };

  return (
    <PageShell>
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
        <header className="page-hero">
          <div className="section-shell">
            <div className="breadcrumbs"><Link href="/">Home</Link> / Articles</div>
            <p className="eyebrow">Independent AllChinaBuy research desk</p>
            <h1>AllChinaBuy Shipping, Warehouse and Product Research Guides</h1>
            <p className="lede">Plan an ACBuy order from product research through warehouse checks, parcel submission, tracking and country-specific delivery—with live prices and policies always verified before payment.</p>
          </div>
        </header>
        <section className="section-shell section-block">
          <div className="section-heading"><div><p className="eyebrow">Keyword-led library</p><h2>{seoArticles.length} focused guides for real search tasks.</h2></div><p>The library now covers two distinct needs: spreadsheet and product research, plus the missing high-intent topics around shipping time, costs, tracking, fees, warehouse handling, returns and delivery to the USA, UK and Canada.</p></div>
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
