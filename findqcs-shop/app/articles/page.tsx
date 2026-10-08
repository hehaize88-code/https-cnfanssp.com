import type { Metadata } from "next";
import { ArticleCard, Breadcrumbs, Footer, Header, PageIntro } from "../components";
import { articles, PLANNED_ORIGIN } from "../data";

export const metadata: Metadata = { title: "FindQC Guides: QC Photos, Link Search and Sneaker Checks", description: "Independent FindQC articles covering QC finder search, QC photos, measurements, batch drift, image limits, reviews and shipping evidence.", alternates: { canonical: `${PLANNED_ORIGIN}/articles` } };

export default function ArticlesPage() {
  return <><Header /><main><Breadcrumbs items={[{ label: "Articles" }]} /><PageIntro eyebrow="Independent FindQC articles" title="Find QC photos and inspect the right product." description="Start with a marketplace link, a product image or a specific inspection problem. Choose a guide for your next step." /><section className="shell page-content"><nav className="guide-topics" aria-label="Choose a QC task"><a href="/articles/weidian-taobao-1688-qc-photos">Find photos from a link</a><a href="/articles/findqc-image-search-product-match">Match a product image</a><a href="/articles/findqc-no-results-missing-qc-photos">Fix missing search results</a><a href="/articles/sneaker-qc-checklist">Check a pair of shoes</a></nav><div className="article-grid article-hub">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
    <div className="editorial-note"><span>EDITORIAL STANDARD</span><h2>Evidence before adjectives</h2><p>We distinguish official platform descriptions, public aggregate data, buyer comments, live destination facts, approximate conversions and exact-unit QC evidence. A page opening successfully is never presented as proof of seller or product quality.</p></div></section></main><Footer /></>;
}
