import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "../components/EditorialPage";

export const metadata: Metadata = { title: "QC Guides – FindQCs", description: "Practical guides for reading QC photos, checking measurements, and evaluating product listings.", alternates: { canonical: "/guides" } };

const guides = [
  ["QC PHOTO CHECKLIST", "How to Read QC Photos Before You Buy", "A complete step-by-step method for checking shape, stitching, color, labels, measurements and visible defects.", "/guides/qc-photo-checklist", "12 min"],
  ["LIGHT & CAMERA", "Warehouse Lighting Without Guesswork", "Understand white balance, lens distortion and why one photo should never decide whether a color is correct.", "/guides/warehouse-lighting", "6 min"],
  ["FIT & SCALE", "Size Charts and Measurement Photos", "Compare actual measurements with a garment you own instead of relying on S, M, L or translated fit labels.", "/guides/size-and-measurements", "7 min"],
];

export default function Guides() {
  return <EditorialPage eyebrow="RESEARCH LIBRARY / GUIDES" title="QC knowledge that helps you decide." intro="Shortcuts are useful only when they stay honest. These guides focus on what a photo can show, what it cannot prove, and how to make a more consistent decision.">
    <div className="guide-index">{guides.map(([tag,title,desc,href,time],i)=><Link href={href} className="guide-index-card" key={href}><span>{String(i+1).padStart(2,"0")}</span><div><p>{tag}</p><h2>{title}</h2><div>{desc}</div></div><aside>{time}<b>↗</b></aside></Link>)}</div>
    <div className="notice"><strong>Editorial standard</strong><p>FindQCs does not call an item “verified” merely because photos exist. Every guide separates observable details from claims that photos cannot establish.</p></div>
  </EditorialPage>;
}
