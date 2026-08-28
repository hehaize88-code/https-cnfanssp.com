import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "AllChinaBuy Guides & Field Notes | AllChinaBuy Finds",
  description: "Independent, evidence-led guides for listing checks, category-specific warehouse photos and parcel-size decisions.",
  alternates: { canonical: "https://allchinabuys.shop/articles/" },
  openGraph: {
    title: "AllChinaBuy Guides & Field Notes",
    description: "Evidence-led guides for listing checks, category QC and parcel-size decisions.",
    type: "website",
    url: "https://allchinabuys.shop/articles/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AllChinaBuy Spreadsheet & Finds" }],
  },
};

const articles = [
  { number: "01", label: "Listing verification", title: "Verify Listings & Recover Dead Product Links", summary: "A 1,200+ word workflow for checking destination pages, variants, dates and unavailable links before an order.", read: "11 min read", href: "/articles/how-to-use-allchinabuy-spreadsheet/" },
  { number: "02", label: "Category inspection", title: "QC Photos for Shoes, Clothing & Accessories", summary: "A 1,200+ word category-led process covering identity, measurements, extra-photo requests and visible evidence.", read: "11 min read", href: "/articles/warehouse-qc-photo-checklist/" },
  { number: "03", label: "Parcel-size decision", title: "Volumetric Weight: Split or Consolidate?", summary: "A 1,200+ word decision guide to parcel dimensions, packaging removal, consolidation and route eligibility.", read: "12 min read", href: "/articles/plan-allchinabuy-shipping/" },
];

export default function ArticlesPage() {
  const schema = {"@context":"https://schema.org","@type":"CollectionPage","name":"AllChinaBuy Guides & Field Notes","url":"https://allchinabuys.shop/articles/","description":"Evidence-led guides for listing checks, category QC and parcel-size decisions.","hasPart":articles.map(article=>({"@type":"Article","name":article.title,"url":`https://allchinabuys.shop${article.href}`}))};
  return <main className="articles-index">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <SiteHeader />
    <section className="articles-index-hero"><p className="section-kicker">Research desk</p><h1>Guides &amp;<br/>Field Notes</h1><p>Practical reading for finding listings, checking warehouse photos and planning an international parcel.</p></section>
    <section className="articles-index-list"><div className="articles-index-intro"><p className="section-kicker">Recommended reading order</p><h2>Find.<br/>Inspect.<br/>Ship.</h2><p>Start with discovery intent, then protect the order at warehouse QC, and only then compare international parcel choices. This sequence follows the platform's current purchase → inspection/storage → international delivery workflow.</p></div><div className="articles-index-cards">{articles.map(article=><a className="articles-index-card" href={article.href} key={article.href}><span className="article-card-number">{article.number}</span><div><small>{article.label}</small><h3>{article.title}</h3><p>{article.summary}</p><b>{article.read} <i>→</i></b></div></a>)}<div className="research-note"><b>Research standard</b><p>All three guides were checked against AllChinaBuy's public homepage, Help Center, User Guidance, freight calculator, goods notice and Shipping Expert interface on August 26, 2026. Platform information may change.</p></div></div></section>
    <SiteFooter />
  </main>;
}
