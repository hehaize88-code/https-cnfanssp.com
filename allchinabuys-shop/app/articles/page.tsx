import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "AllChinaBuy Guides & Field Notes | AllChinaBuy Finds",
  description: "Independent guides for product discovery, warehouse QC and international parcel planning.",
  alternates: { canonical: "https://allchinabuys.shop/articles/" },
};

const articles = [
  { number: "01", label: "Start here · Spreadsheet", title: "How to Use an AllChinaBuy Spreadsheet", summary: "A 1,200+ word, link-first workflow for turning a product directory into a dated shortlist you can inspect and order.", read: "11 min read", href: "/articles/how-to-use-allchinabuy-spreadsheet/" },
  { number: "02", label: "Verify first · Listing", title: "AllChinaBuy Listing Identity Verification", summary: "Match a saved find to the current seller page, option, quantity and dated price evidence before ordering.", read: "12 min read", href: "/articles/allchinabuy-listing-identity-verification/" },
  { number: "03", label: "Order · Status", title: "AllChinaBuy Order Status Explained", summary: "Understand processing, confirmation requests, seller dispatch, warehouse receipt and the next action at each stage.", read: "9 min read", href: "/articles/allchinabuy-order-status-explained/" },
  { number: "04", label: "Warehouse · Storage", title: "AllChinaBuy Warehouse Guide", summary: "Use storage, standard QC, extra photos and measurements as a controlled decision stage before shipping.", read: "10 min read", href: "/articles/allchinabuy-warehouse-storage-guide/" },
  { number: "05", label: "Inspect · QC photos", title: "AllChinaBuy QC Photos: Warehouse Checklist", summary: "A detailed inspection process covering identity, measurements, image limits and after-sales evidence.", read: "11 min read", href: "/articles/warehouse-qc-photo-checklist/" },
  { number: "06", label: "After-sales · Return", title: "AllChinaBuy Return and Refund Guide", summary: "Prepare a precise warehouse return request and follow cancellation, seller return and refund completion separately.", read: "9 min read", href: "/articles/allchinabuy-return-refund-guide/" },
  { number: "07", label: "Budget · Payment", title: "AllChinaBuy Fees and Payment Methods", summary: "Separate seller price, domestic delivery, payment effects, warehouse services and international parcel charges.", read: "10 min read", href: "/articles/allchinabuy-fees-payment-methods/" },
  { number: "08", label: "Pack · Consolidate", title: "AllChinaBuy Parcel Packing Guide", summary: "Decide what to combine, what to split and which packaging to keep before comparing live routes.", read: "10 min read", href: "/articles/allchinabuy-parcel-packing-consolidation/" },
  { number: "09", label: "Ship · Calculator", title: "AllChinaBuy Shipping Cost and Calculator Guide", summary: "Plan physical and volumetric weight, route restrictions, packing and destination-specific costs.", read: "12 min read", href: "/articles/plan-allchinabuy-shipping/" },
  { number: "10", label: "Track · Delivery", title: "AllChinaBuy Tracking Guide", summary: "Read seller dispatch, warehouse arrival, international handoff, customs and last-mile events correctly.", read: "10 min read", href: "/articles/allchinabuy-tracking-order-parcel-status/" },
];

export default function ArticlesPage() {
  const schema = {"@context":"https://schema.org","@type":"ItemList","name":"AllChinaBuy Guides and Field Notes","itemListElement":articles.map((article,index)=>({"@type":"ListItem","position":index+1,"name":article.title,"url":`https://allchinabuys.shop${article.href}`}))};
  return <main className="articles-index">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <SiteHeader />
    <section className="articles-index-hero"><p className="section-kicker">10 independent guides · reviewed September 2026</p><h1>Guides &amp;<br/>Field Notes</h1><p>Practical answers for AllChinaBuy spreadsheet searches, order status, warehouse QC, fees, shipping and parcel tracking.</p></section>
    <section className="articles-index-list"><div className="articles-index-intro"><p className="section-kicker">Recommended reading order</p><h2>Find.<br/>Inspect.<br/>Ship.</h2><p>Start with discovery intent, protect the order at warehouse QC, then compare parcel choices and track the shipment. Each guide answers one search task so readers can move to the next stage without repeating the same advice.</p></div><div className="articles-index-cards">{articles.map(article=><a className="articles-index-card" href={article.href} key={article.href}><span className="article-card-number">{article.number}</span><div><small>{article.label}</small><h3>{article.title}</h3><p>{article.summary}</p><b>{article.read} <i>→</i></b></div></a>)}<div className="research-note"><b>Research standard</b><p>Guides are checked against the AllChinaBuy public shopping flow, order interface and relevant help tools on their stated dates. Platform information may change.</p></div></div></section>
    <SiteFooter />
  </main>;
}
