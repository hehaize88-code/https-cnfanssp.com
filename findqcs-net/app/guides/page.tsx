import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "../components/EditorialPage";

export const metadata: Metadata = { title: "QC Guides – FindQCs", description: "Practical guides for reading QC photos, checking measurements, and evaluating product listings.", alternates: { canonical: "/guides/" } };

const guides = [
  ["QC PHOTO CHECKLIST", "How to Read QC Photos Before You Buy", "A complete step-by-step method for checking shape, stitching, color, labels, measurements and visible defects.", "/guides/qc-photo-checklist/", "12 min"],
  ["SEARCH & CAMERA", "Find Matching QC Photos Without Guesswork", "Use product links, keywords, visual candidates and record context without confusing a similar item with an exact match.", "/guides/warehouse-lighting/", "10 min"],
  ["FIT & SCALE", "Size Charts and Measurement Photos", "Compare actual measurements with a garment you own instead of relying on S, M, L or translated fit labels.", "/guides/size-and-measurements/", "11 min"],
];

export default function Guides() {
  return <EditorialPage eyebrow="RESEARCH LIBRARY / GUIDES" title="QC knowledge that helps you decide." intro="Shortcuts are useful only when they stay honest. These guides focus on what a photo can show, what it cannot prove, and how to make a more consistent decision." breadcrumbs={[["Guides","/guides/"]]}>
    <div className="guide-index">{guides.map(([tag,title,desc,href,time],i)=><Link href={href} className="guide-index-card" key={href}><span>{String(i+1).padStart(2,"0")}</span><div><p>{tag}</p><h2>{title}</h2><div>{desc}</div></div><aside>{time}<b>↗</b></aside></Link>)}</div>
    <div className="notice"><strong>Editorial standard</strong><p>FindQCs does not call an item “verified” merely because photos exist. Every guide separates observable details from claims that photos cannot establish.</p></div>
    <section className="directory-copy prose standalone" aria-labelledby="guide-sequence-heading"><h2 id="guide-sequence-heading">Use the guides in evidence order</h2><p>First verify that a record belongs to the product link, variation and relevant purchase period. Then inspect the complete item before zooming into logos, seams or labels. Finish with measurements and any category-specific checks. This order prevents a detailed inspection from creating false confidence in a photograph that may show another color, size or production run.</p><p>When a decision depends on an unclear area, request one useful image rather than several vague images. Describe the angle, measurement points or closure action required. Record the date and the observation that changed the decision so a later photo can confirm or correct it.</p></section>
  </EditorialPage>;
}
