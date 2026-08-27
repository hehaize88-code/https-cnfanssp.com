import type { Metadata } from "next";
import { Breadcrumbs, Footer, Header, PageIntro, SearchDesk } from "../components";
import { MAIN_SITE, PLANNED_ORIGIN } from "../data";

export const metadata: Metadata = { title: "How FindQC Works", description: "A clear workflow from product discovery and destination verification to exact-unit QC inspection.", alternates: { canonical: `${PLANNED_ORIGIN}/guide` } };

const stages = [
  { n: "01", title: "Discover", copy: "Search by product name or browse an exact destination category. Keep the shortlist small enough to compare carefully.", action: "Search catalog" },
  { n: "02", title: "Confirm", copy: "Open the destination and match the product title, first image, identifier, variation and current source price.", action: "Match the listing" },
  { n: "03", title: "Prepare", copy: "Write down two key measurements, expected included pieces and the visible details that could change your decision.", action: "Build the brief" },
  { n: "04", title: "Inspect", copy: "Review the exact warehouse unit for geometry, measurements, surfaces, seams, edges and stress points.", action: "Use QC guide" },
  { n: "05", title: "Decide", copy: "Approve, request one focused image or review a return based on observed evidence and current destination terms.", action: "Record the result" },
];

export default function GuidePage() {
  return <><Header /><main><Breadcrumbs items={[{ label: "How It Works" }]} /><PageIntro eyebrow="Five-stage workflow" title="Keep product identity intact from search to warehouse." description="The useful part of a finder is not the number of buttons. It is the continuity between the card you saw, the listing you opened and the unit you inspect." />
    <section className="shell page-content"><SearchDesk compact /><div className="process-list">{stages.map((stage) => <article key={stage.n}><span>{stage.n}</span><div><h2>{stage.title}</h2><p>{stage.copy}</p></div><b>{stage.action} →</b></article>)}</div>
      <div className="guide-split"><div><span className="mini-label">WHAT FINDQC DOES</span><h2>Organizes discovery and inspection guidance</h2><p>It connects category and product references with practical QC education. It does not sell products, process payments or guarantee third-party goods.</p></div><div><span className="mini-label">WHAT YOU CONFIRM</span><h2>Live price, variation, evidence and current terms</h2><p>Availability, source price, currency conversion, return conditions and future unit quality can change. Reopen the destination before acting.</p></div></div>
      <div className="center-action"><a href={`${MAIN_SITE}/AllProducts/`} target="_blank" rel="noopener noreferrer">Start with the current product catalog ↗</a></div>
    </section></main><Footer /></>;
}
