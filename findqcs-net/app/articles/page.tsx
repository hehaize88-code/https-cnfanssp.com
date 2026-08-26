import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "../components/EditorialPage";

export const metadata: Metadata = {
  title: "QC SEO Articles & Product Research | FindQCs",
  description: "Browse practical QC photo, warehouse lighting and product measurement articles with independent product research guidance.",
  alternates: { canonical: "/articles" },
};

const articles = [
  ["QC FINDER GUIDE", "How to Find QC Photos by Product Link or Keyword", "Start with an exact product link, widen to keyword or image search, and verify whether each result really matches the current listing.", "/guides/warehouse-lighting", "10 min"],
  ["QC PHOTO GUIDE", "How to Read QC Photos Before You Buy", "A repeatable inspection process for matching the listing, checking shape and stitching, reading measurements and spotting visible defects.", "/guides/qc-photo-checklist", "12 min"],
  ["SIZE RESEARCH", "QC Photo Size Guide: Clothing and Shoe Measurements", "Compare actual garment and footwear measurements with an item you already own instead of relying on translated size labels.", "/guides/size-and-measurements", "11 min"],
];

export default function Articles() {
  const schema = { "@context":"https://schema.org", "@type":"ItemList", name:"FindQCs SEO Articles", itemListElement:articles.map(([,title,,href],index)=>({"@type":"ListItem",position:index+1,name:title,url:`https://findqcs.net${href}`})) };
  return <EditorialPage eyebrow="SEO ARTICLES / RESEARCH" title="Practical articles for better QC decisions." intro="Independent, focused explanations for reading product photos, understanding measurements and avoiding conclusions that the evidence cannot support.">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <div className="guide-index">{articles.map(([tag,title,desc,href,time],i)=><Link href={href} className="guide-index-card" key={href}><span>{String(i+1).padStart(2,"0")}</span><div><p>{tag}</p><h2>{title}</h2><div>{desc}</div></div><aside>{time}<b>↗</b></aside></Link>)}</div>
    <div className="notice"><strong>Research standard</strong><p>Each article separates visible evidence from assumptions. Product photos can support comparison and defect checks, but they cannot certify authenticity, internal construction or long-term durability.</p></div>
  </EditorialPage>;
}
