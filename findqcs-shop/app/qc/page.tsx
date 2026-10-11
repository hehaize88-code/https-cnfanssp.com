import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Footer, Header, JsonLd, PageIntro } from "../components";
import { PLANNED_ORIGIN } from "../data";

export const metadata: Metadata = { title: "FindQC QC Photos: 12-Point Warehouse Inspection Checklist", description: "Use a practical 12-point method to assess identity, measurements, construction and evidence limits in exact-unit warehouse QC photos.", alternates: { canonical: `${PLANNED_ORIGIN}/qc` } };

const checks = [
  ["Identity", "Match the listing, selected variation, color and product identifier."],
  ["Size label", "Confirm the received tag before judging measurements."],
  ["Measurements", "Check tape placement against a familiar reference item."],
  ["Front geometry", "Use a straight-on view for silhouette and alignment."],
  ["Back geometry", "Compare panel, seam, pocket and print placement."],
  ["Left / right", "Look for meaningful asymmetry while allowing for perspective."],
  ["Surfaces", "Scan for stains, dents, discoloration, scratches and glue marks."],
  ["Seams", "Follow long seams and inspect missed stitches or loose ends."],
  ["Stress points", "Check corners, strap mounts, zip ends, eyelets and sole joins."],
  ["Hardware", "Review closure alignment, finish and visible damage."],
  ["Included pieces", "Confirm laces, straps, inserts and requested packaging."],
  ["Missing evidence", "Request one focused photo when an unseen area could change the decision."],
];

export default function QCPage() {
  return <><Header /><main><Breadcrumbs items={[{ label: "QC Guide" }]} /><PageIntro eyebrow="12-point inspection" title="Read the unit you received—not the promise in a listing." description="QC photos show one warehouse unit. Use them to verify visible facts, record uncertainty and decide whether more evidence is needed." />
    <section className="shell page-content"><div className="checklist-grid">{checks.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</div>
      <div className="decision-grid"><article><span>APPROVE</span><h2>Evidence matches your limits</h2><p>The exact item and variation match, important dimensions are within your chosen range and no visible issue exceeds your tolerance.</p></article><article><span>REQUEST PHOTO</span><h2>One angle could change the answer</h2><p>Ask for a straight-on measurement or close-up that answers a specific visible question. Avoid vague requests to “check quality.”</p></article><article><span>REVIEW RETURN</span><h2>A material mismatch is visible</h2><p>The wrong variation, out-of-range measurement, clear structural defect or missing important piece deserves a current-policy check.</p></article></div>
      <div className="article-callout"><div><span>DEEPER GUIDE</span><h2>How to read QC photos before you ship</h2><p>Work through geometry, lighting, measurements, construction and decision records with examples of the reasoning process.</p></div><Link href="/articles/how-to-read-qc-photos">Read the full field guide →</Link></div>
    </section></main><Footer /><JsonLd data={{ "@context": "https://schema.org", "@type": "HowTo", name: "12-point QC photo checklist", url: `${PLANNED_ORIGIN}/qc`, step: checks.map((c, i) => ({ "@type": "HowToStep", position: i + 1, name: c[0], text: c[1] })) }} /></>;
}
