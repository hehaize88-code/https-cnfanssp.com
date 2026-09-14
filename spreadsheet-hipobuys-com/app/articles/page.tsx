import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../components/GuideLayout";
import { articles } from "../article-data";

export const metadata: Metadata = {
  title: "Hipobuy Spreadsheet Articles: Link & Listing Checks",
  description: "Evidence-led Hipobuy spreadsheet articles covering product-link checks, listing verification, dead links, redirects and freshness labels.",
  alternates: { canonical: "/articles" }
};

export default function ArticlesPage() {
  return <GuideLayout kicker="Evidence-led buyer library" title="Hipobuy articles built around real decisions." intro="Long-form guides based on current official platform information, clearly separated from estimates, community reports and changing seller details.">
    <section className="article-hub">
      <div className="article-hub-intro"><p className="section-kicker">Published guides</p><h2>Verify the link before trusting the row.</h2><p>Start with the seven listing-verification guides: test the link, compare the live page, read its freshness label, and preserve the final source URL.</p></div>
      <div className="article-card-grid">{articles.map((article, index) => <article className="article-card" key={article.slug}>
        <div className="article-card-top"><span>{String(index + 1).padStart(2, "0")}</span><p>{article.readTime}</p></div>
        {article.image ? <Link className="article-card-image" href={`/articles/${article.slug}`}><img src={article.image} alt={article.imageAlt || ""} width="720" height="480" loading="lazy" /></Link> : <div className="article-card-visual"><b>{article.slug === "hipobuy-shipping-cost-guide" ? "Cost" : "Verify"}</b><span>{article.slug === "hipobuy-shipping-cost-guide" ? "item + parcel + import" : "link + source + date"}</span></div>}
        <p className="article-keyword">{article.kicker}</p>
        <h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
        <p>{article.description}</p>
        <Link className="article-card-link" href={`/articles/${article.slug}`}>Read full article <span>↗</span></Link>
      </article>)}</div>
    </section>
    <section className="editorial-note"><div><p className="section-kicker">Publishing standard</p><h2>Facts, claims and experience stay separate.</h2></div><div><p>Official platform statements are attributed and dated. Shipping figures remain estimates. Community reviews are used to identify recurring questions, not copied as universal conclusions.</p><ul><li>Enough detail to complete one buyer decision</li><li>A clearly defined purpose for every guide</li><li>Original checklists and decision frameworks</li><li>Visible source notes and update date</li><li>No fabricated review, delivery promise or price guarantee</li></ul></div></section>
  </GuideLayout>;
}
