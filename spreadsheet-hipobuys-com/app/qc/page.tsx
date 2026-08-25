import type { Metadata } from "next";
import GuideLayout from "../components/GuideLayout";

export const metadata: Metadata = { title: "Hipobuy QC Photos: Warehouse Inspection Checklist", description: "Use this Hipobuy QC photo checklist to inspect shape, measurements, stitching, labels, color and visible defects before shipping.", alternates: { canonical: "/qc/" } };

export default function QCPage() { return <GuideLayout kicker="Warehouse decision" title="QC photos are evidence—not a quality guarantee." intro="Warehouse images help confirm what arrived. They cannot prove material composition, long-term durability or how an item will fit, so inspect what is visible and request clarification when the evidence is incomplete." accent="lime">
  <section className="qc-board"><div className="qc-board-head"><p className="section-kicker">Eight-point check</p><h2>Read the photo set in order</h2></div><div className="qc-grid">{[
    ["01","Order match","Confirm color, size, version and quantity against the order record."],
    ["02","Overall shape","Look for distortion, uneven panels or obvious asymmetry from a straight-on view."],
    ["03","Measurements","Compare photographed measurements with a garment you already own—not only a generic size label."],
    ["04","Stitching","Zoom into seams, hems, loose threads and alignment around high-stress areas."],
    ["05","Color","Remember that warehouse lighting changes color; compare several angles before deciding."],
    ["06","Labels & details","Check whether visible labels, hardware and printed details match the selected version."],
    ["07","Surface defects","Look for stains, scratches, glue marks, dents or damage from domestic transport."],
    ["08","Extra evidence","Request a close-up or measurement photo when the standard set cannot answer a material question."]
  ].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="content-split"><div className="sticky-title"><span>QC</span><h2>What photos cannot tell you</h2><p>A responsible guide separates visible evidence from assumptions.</p></div><div className="prose"><h3>Do not overclaim from images</h3><ul className="cross-list"><li>Exact fabric composition unless a reliable label or test confirms it</li><li>Comfort, fit or sizing consistency across different sellers</li><li>Long-term durability after washing or repeated use</li><li>Whether screen color exactly matches the item in natural light</li><li>Authenticity or brand authorization</li></ul><div className="callout lime-callout"><b>Request another photo when:</b><p>A suspected defect is partly hidden, the measurement is missing, or the selected option cannot be confirmed from the standard photo set.</p></div></div></section>
  <section className="action-banner"><div><p className="section-kicker">Next decision</p><h2>Approved the QC set?</h2><p>Now compare parcel weight, shipping-line restrictions, insurance and destination taxes.</p></div><a href="/shipping/">Plan shipping →</a></section>
  </GuideLayout>; }
