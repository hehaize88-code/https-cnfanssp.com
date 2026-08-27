import type { Metadata } from "next";
import { Breadcrumbs, Footer, Header, JsonLd, PageIntro, SearchDesk } from "../components";
import { MAIN_SITE, PLANNED_ORIGIN } from "../data";

export const metadata: Metadata = {
  title: "FindQC Finds: Link Search, Image Search and Trending Products",
  description: "Learn how to use product links, marketplace IDs, image search, trends, seller pages and reviews without confusing a related find with an exact match.",
  alternates: { canonical: `${PLANNED_ORIGIN}/finds` },
};

const methods = [
  { n: "01", title: "Source link or product ID", strength: "Best for identity", copy: "Start with the final marketplace URL or identifier. Matching platform, product ID, seller and variation gives older QC references the strongest relevance." },
  { n: "02", title: "Product name search", strength: "Useful for distinctive names", copy: "Use a precise title when a link is unavailable. Generic names can mix sellers and batches, so verify the final destination before relying on any photo set." },
  { n: "03", title: "Image search", strength: "Best for discovery", copy: "A similar image can reveal alternatives, but visual resemblance does not prove a shared source. Treat every result as a new listing that needs its own identity check." },
  { n: "04", title: "Trending and seller pages", strength: "Best for shortlists", copy: "Popularity and shop pages can expose more records and comments. Use that activity to decide where to investigate, not as proof of quality or authenticity." },
];

const evidence = [
  ["Trending", "Shows what currently receives attention", "Popularity can change quickly and does not verify a unit"],
  ["Seller pages", "Organize listings and visible feedback around a shop", "Ratings and catalog size are context, not a guarantee"],
  ["Karma", "Helps surface active community material", "Engagement is not the same as product evidence"],
  ["Reviews", "Can reveal fit, flaws, packaging or communication questions", "Confirm review stage, listing identity and variation"],
  ["QC albums", "Show visible evidence from warehouse records", "Use the exact received unit for the final decision"],
];

export default function FindsPage() {
  return <><Header /><main><Breadcrumbs items={[{ label: "Finds" }]} /><PageIntro eyebrow="FindQC discovery workflow" title="Use the most exact search input you have." description="FindQC exposes link, image, trend, seller and community discovery surfaces. Their value depends on keeping product identity intact from the result to the final destination." />
    <section className="shell page-content"><SearchDesk compact />
      <div className="find-method-grid">{methods.map((method) => <article key={method.n}><span>{method.n}</span><small>{method.strength}</small><h2>{method.title}</h2><p>{method.copy}</p></article>)}</div>
      <div className="research-table-wrap"><div className="section-heading"><span className="section-index">FACT</span><h2>What each FindQC surface can prove</h2><p>The platform separates trends, sellers, karma, reviews and QC because they answer different questions. Keep those roles separate in your decision.</p></div><div className="research-table"><div className="research-table-head"><b>Surface</b><b>Useful for</b><b>Boundary</b></div>{evidence.map((row) => <div key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span><span>{row[2]}</span></div>)}</div></div>
      <div className="evidence-note"><b>Verified platform boundary</b><p>FindQC's public terms describe it as a QC discovery and aggregation platform, not a seller or forwarding service. Payments, shipping and returns are handled by third parties. This guide therefore treats its records as research evidence rather than a purchase guarantee. <a href="https://findqc.com/terms-of-service" target="_blank" rel="nofollow noopener noreferrer">Review the official terms ↗</a></p></div>
      <div className="center-action"><a href={`${MAIN_SITE}/AllProducts/`} target="_blank" rel="noopener noreferrer">Open the current product catalog ↗</a></div>
    </section></main><Footer /><JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "FindQC Finds and Search Methods", url: `${PLANNED_ORIGIN}/finds`, about: methods.map((method) => method.title) }} /></>;
}
