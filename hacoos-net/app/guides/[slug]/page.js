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
  const bodyText=[c.intro,...c.factBox.flat(),...c.sections.flatMap(([,paragraphs])=>Array.isArray(paragraphs)?paragraphs:[paragraphs]),...(c.matrix?.rows.flat()||[]),...(c.faqs?.flat()||[]),...c.steps,c.sourceNote,c.image?.caption||""].join(" ");
  const wordCount=bodyText.trim().split(/\s+/).length;
  const pageUrl=`${SITE_URL}/guides/${g.slug}/`;
  const schema=c.faqs?{"@context":"https://schema.org","@graph":[{"@type":"Article","@id":`${pageUrl}#article`,headline:g.title,description:g.short,mainEntityOfPage:{"@id":`${pageUrl}#webpage`},keywords:g.primaryKeyword,wordCount,author:{"@type":"Organization",name:"Hacoos Editorial",url:`${SITE_URL}/about/`},publisher:{"@type":"Organization",name:"Hacoos",url:`${SITE_URL}/`},datePublished:"2026-08-27",dateModified:"2026-08-27",inLanguage:"en"},{"@type":"WebPage","@id":`${pageUrl}#webpage`,url:pageUrl,name:g.title,inLanguage:"en",breadcrumb:{"@id":`${pageUrl}#breadcrumb`}},{"@type":"BreadcrumbList","@id":`${pageUrl}#breadcrumb`,itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${SITE_URL}/`},{"@type":"ListItem",position:2,name:"Guides",item:`${SITE_URL}/guides/`},{"@type":"ListItem",position:3,name:g.title,item:pageUrl}]},{"@type":"FAQPage",mainEntity:c.faqs.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}]}:{"@context":"https://schema.org","@type":"Article",headline:g.title,description:g.short,mainEntityOfPage:pageUrl,keywords:g.primaryKeyword,wordCount,author:{"@type":"Organization",name:"Hacoos Editorial",url:`${SITE_URL}/about/`},publisher:{"@type":"Organization",name:"Hacoos",url:`${SITE_URL}/`},datePublished:"2026-08-26",dateModified:"2026-08-26"};
  return <><StructuredData data={schema}/><article className="article"><header className="article-hero"><div className="wrap article-head"><span className="section-label">{c.kicker}</span><h1>{g.title}</h1><div className="article-meta"><span>Hacoos Editorial</span><span>{g.read} read</span><span>{wordCount.toLocaleString("en-US")} words</span><span>{c.dateLabel||"Reviewed August 26, 2026"}</span></div><p>{c.intro}</p></div></header>
    <div className="wrap article-fact-box" aria-label="Key facts">{c.factBox.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
    <div className="wrap article-body"><aside><span>In this guide</span>{c.sections.map(([h])=><a href={`#${h.toLowerCase().replaceAll(" ","-")}`} key={h}>{h}</a>)}<a href="#quick-process">Quick process</a><a href="#research-note">Research note</a></aside><div className="article-content">
      {c.image&&<figure className="article-figure"><img src={c.image.src} alt={c.image.alt}/><figcaption>{c.image.caption}</figcaption></figure>}
      {c.sections.map(([h,paragraphs])=><section id={h.toLowerCase().replaceAll(" ","-")} key={h}><h2>{h}</h2>{(Array.isArray(paragraphs)?paragraphs:[paragraphs]).map((paragraph,index)=><p key={`${h}-${index}`}>{paragraph}</p>)}</section>)}
      {c.matrix&&<section id="decision-matrix"><h2>{c.matrix.title}</h2><div className="comparison-table-wrap"><table className="comparison-table"><thead><tr>{c.matrix.headers.map((header)=><th key={header}>{header}</th>)}</tr></thead><tbody>{c.matrix.rows.map((row)=><tr key={row[0]}>{row.map((cell,index)=>index===0?<th key={cell}>{cell}</th>:<td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody></table></div></section>}
      {c.faqs&&<section id="wardrobe-faq"><h2>Hacoo wardrobe shortlist questions</h2><div className="faq-list">{c.faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>}
      <section id="quick-process"><h2>Quick process</h2><ol>{c.steps.map((s,i)=><li key={s}><span>{i+1}</span>{s}</li>)}</ol></section>
      <section id="research-note" className="article-research-note"><span>Research note</span><p>{c.sourceNote}</p><p>Official policies and external listings can change. The live page and order-specific instructions remain the final reference.</p></section>
      <div className="article-callout"><h2>Continue with a live category</h2><p>Use the guide as context, then confirm current information on the destination listing.</p><Link className="button primary" href="/categories">Browse categories <Arrow/></Link></div>
    </div></div></article></>
}
