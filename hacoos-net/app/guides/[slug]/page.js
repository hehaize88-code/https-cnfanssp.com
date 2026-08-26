import { notFound } from "next/navigation";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import StructuredData from "@/components/StructuredData";
import { guides, guideContent, SITE_URL } from "../../data";
import { languageAlternates } from "../../i18n";
import { createPageMetadata } from "../../seo";

export function generateStaticParams(){return guides.map(g=>({slug:g.slug}));}
export async function generateMetadata({params}){const {slug}=await params;const g=guides.find(x=>x.slug===slug);if(!g)return{};return createPageMetadata({title:g.title,description:g.short,path:`/guides/${g.slug}`,alternates:languageAlternates(`/guides/${g.slug}`,"en"),type:"article"})}

export default async function GuidePage({params}){
  const{slug}=await params;
  const g=guides.find(x=>x.slug===slug);
  const c=guideContent[slug];
  if(!g||!c)notFound();
  const bodyText=[c.intro,...c.factBox.flat(),...c.sections.flatMap(([,paragraphs])=>Array.isArray(paragraphs)?paragraphs:[paragraphs]),...c.steps,c.sourceNote,c.image?.caption||""].join(" ");
  const wordCount=bodyText.trim().split(/\s+/).length;
  const schema={"@context":"https://schema.org","@type":"Article",headline:g.title,description:g.short,mainEntityOfPage:`${SITE_URL}/guides/${g.slug}/`,keywords:g.primaryKeyword,wordCount,author:{"@type":"Organization",name:"Hacoos Editorial",url:`${SITE_URL}/about/`},publisher:{"@type":"Organization",name:"Hacoos",url:`${SITE_URL}/`},datePublished:"2026-08-26",dateModified:"2026-08-26"};
  return <><StructuredData data={schema}/><article className="article"><header className="article-hero"><div className="wrap article-head"><span className="section-label">{c.kicker}</span><h1>{g.title}</h1><div className="article-meta"><span>Hacoos Editorial</span><span>{g.read} read</span><span>{wordCount.toLocaleString("en-US")} words</span><span>Reviewed August 26, 2026</span></div><p>{c.intro}</p></div></header>
    <div className="wrap article-fact-box" aria-label="Key facts">{c.factBox.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
    <div className="wrap article-body"><aside><span>In this guide</span>{c.sections.map(([h])=><a href={`#${h.toLowerCase().replaceAll(" ","-")}`} key={h}>{h}</a>)}<a href="#quick-process">Quick process</a><a href="#research-note">Research note</a></aside><div className="article-content">
      {c.image&&<figure className="article-figure"><img src={c.image.src} alt={c.image.alt}/><figcaption>{c.image.caption}</figcaption></figure>}
      {c.sections.map(([h,paragraphs])=><section id={h.toLowerCase().replaceAll(" ","-")} key={h}><h2>{h}</h2>{(Array.isArray(paragraphs)?paragraphs:[paragraphs]).map((paragraph,index)=><p key={`${h}-${index}`}>{paragraph}</p>)}</section>)}
      <section id="quick-process"><h2>Quick process</h2><ol>{c.steps.map((s,i)=><li key={s}><span>{i+1}</span>{s}</li>)}</ol></section>
      <section id="research-note" className="article-research-note"><span>Research note</span><p>{c.sourceNote}</p><p>Official policies and external listings can change. The live page and order-specific instructions remain the final reference.</p></section>
      <div className="article-callout"><h2>Continue with a live category</h2><p>Use the guide as context, then confirm current information on the destination listing.</p><Link className="button primary" href="/categories">Browse categories <Arrow/></Link></div>
    </div></div></article></>
}
