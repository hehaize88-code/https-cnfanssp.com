import type { Metadata } from "next";
import { Breadcrumbs, Footer, Header, JsonLd, PageIntro } from "../components";
import { PLANNED_ORIGIN } from "../data";

export const metadata: Metadata = {
  title: "FindQC Real Hauls: Shipping Data, Countries and Cost Context",
  description: "A fact-checked reading of FindQC Real Hauls country, route, weight, cost and delivery statistics, with clear limits for planning a new parcel.",
  alternates: { canonical: `${PLANNED_ORIGIN}/shipping` },
};

const countries = [
  ["Netherlands", "64,812"], ["United States", "36,080"], ["Germany", "24,662"], ["United Kingdom", "22,099"], ["Canada", "20,900"], ["Australia", "6,908"], ["Italy", "4,895"], ["Norway", "4,642"], ["Spain", "3,729"], ["Romania", "3,674"], ["France", "2,662"], ["Poland", "1,914"],
];

const signals = [
  { label: "Average delivery", value: "12.7 days", note: "Worldwide, all-time dashboard value" },
  { label: "Average weight", value: "4.77 kg", note: "Dataset average, not a parcel quote" },
  { label: "Displayed cost/kg", value: "$15.67", note: "Historical aggregate" },
  { label: "Delivery rate", value: "99.4%", note: "Displayed dataset result" },
];

export default function ShippingPage() {
  return <><Header /><main><Breadcrumbs items={[{ label: "Shipping Data" }]} /><PageIntro eyebrow="Real Hauls research" title="Use shipping history to ask better questions—not promise a result." description="FindQC publishes anonymized aggregate logistics statistics authorized by MyCNBox. These figures describe the displayed dataset and should not be copied into a new parcel estimate without a current quote." />
    <section className="shell page-content"><div className="signal-grid">{signals.map((signal) => <article key={signal.label}><small>{signal.label}</small><strong>{signal.value}</strong><p>{signal.note}</p></article>)}</div>
      <div className="shipping-split"><div><span className="mini-label">DESTINATION EVIDENCE</span><h2>Countries visible in the public dataset</h2><p>The country counts explain why English, Dutch, German, Italian and Spanish are prioritized in this site's language module. They are parcel counts in FindQC's displayed analytics—not independently verified user totals.</p><div className="country-list">{countries.map(([country, count], index) => <div key={country}><span>{String(index + 1).padStart(2, "0")}</span><b>{country}</b><strong>{count}</strong></div>)}</div></div>
        <aside><span className="mini-label">ROUTE CONTEXT</span><h2>What the same dashboard showed</h2><ul><li>EUR DHL economy: 68,486 parcels</li><li>EUR DHL express: 28,556 parcels</li><li>EMS: 13,772 parcels</li><li>EMS-US: 12,078 parcels</li><li>Air: 211,299 parcels</li><li>Land: 5,973 parcels</li><li>Sea: 154 parcels</li></ul><p>Large route totals show common historical patterns. They do not establish availability, customs treatment, restrictions or price for a future shipment.</p></aside></div>
      <div className="guide-split"><div><span className="mini-label">USEFUL QUESTION</span><h2>Is the parcel bulky for its actual weight?</h2><p>FindQC's Product Intelligence guidance warns that dimensions can trigger volumetric charges. Compare actual and volumetric weight before choosing a line.</p></div><div><span className="mini-label">CURRENT CHECK</span><h2>Destination, restrictions and service level</h2><p>Obtain a live quote after packing. Check destination support, chargeable weight, prohibited-item rules, taxes, insurance, delivery terms and current line status.</p></div></div>
      <div className="article-callout"><div><span>LONG-FORM ANALYSIS</span><h2>How to interpret FindQC data without overclaiming</h2><p>The detailed 2026 guide explains Product Intelligence, anonymized haul data, review evidence and exact-unit QC in one auditable workflow.</p></div><a href="/articles/how-findqc-works-2026">Read the complete guide →</a></div>
      <p className="source-line">Source reviewed August 27, 2026: <a href="https://findqc.com/haulsStatis" target="_blank" rel="nofollow noopener noreferrer">FindQC Real Hauls analytics ↗</a>. Displayed figures can change.</p>
    </section></main><Footer /><JsonLd data={{ "@context": "https://schema.org", "@type": "Dataset", name: "FindQC Real Hauls research summary", url: `${PLANNED_ORIGIN}/shipping`, description: "Editorial summary of publicly displayed anonymized aggregate FindQC logistics statistics reviewed August 27, 2026.", temporalCoverage: "2026" }} /></>;
}
