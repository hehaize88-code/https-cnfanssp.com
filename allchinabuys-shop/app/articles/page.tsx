import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "AllChinaBuy Guides & Field Notes | AllChinaBuy Finds",
  description: "Independent guides for product discovery, warehouse QC and international parcel planning.",
  alternates: { canonical: "https://allchinabuys.shop/articles/" },
};

const articles = [
  { number: "04", label: "Verify first · Listing", title: "AllChinaBuy Listing Identity Verification", summary: "A source-first audit for matching a saved find to the current seller page, option, quantity and dated price evidence.", read: "12 min read", href: "/articles/allchinabuy-listing-identity-verification/" },
  { number: "01", label: "Start here · Spreadsheet", title: "How to Use an AllChinaBuy Spreadsheet", summary: "A 1,200+ word, link-first workflow for turning a product directory into a dated shortlist you can inspect and order.", read: "11 min read", href: "/articles/how-to-use-allchinabuy-spreadsheet/" },
  { number: "02", label: "Then inspect · QC", title: "Warehouse QC Photo Checklist", summary: "A 1,200+ word inspection process covering identity, measurements, extra-photo requests and after-sales evidence.", read: "11 min read", href: "/articles/warehouse-qc-photo-checklist/" },
  { number: "03", label: "Then ship · Parcel", title: "Plan AllChinaBuy Shipping Before Checkout", summary: "A 1,200+ word guide to calculators, parcel weight, route restrictions, tax handling and review evidence.", read: "12 min read", href: "/articles/plan-allchinabuy-shipping/" },
];

export default function ArticlesPage() {
  return <main className="articles-index">
    <SiteHeader />
    <section className="articles-index-hero"><p className="section-kicker">Research desk</p><h1>Guides &amp;<br/>Field Notes</h1><p>Practical reading for finding listings, checking warehouse photos and planning an international parcel.</p></section>
    <section className="articles-index-list"><div className="articles-index-intro"><p className="section-kicker">Recommended reading order</p><h2>Find.<br/>Inspect.<br/>Ship.</h2><p>Start with discovery intent, then protect the order at warehouse QC, and only then compare international parcel choices. This sequence follows the platform's current purchase → inspection/storage → international delivery workflow.</p></div><div className="articles-index-cards">{articles.map(article=><a className="articles-index-card" href={article.href} key={article.href}><span className="article-card-number">{article.number}</span><div><small>{article.label}</small><h3>{article.title}</h3><p>{article.summary}</p><b>{article.read} <i>→</i></b></div></a>)}<div className="research-note"><b>Research standard</b><p>Guides are checked against AllChinaBuy's public shopping flow, order interface and relevant help tools on their stated dates. Platform information may change.</p></div></div></section>
    <SiteFooter />
  </main>;
}
