import DiscoveryLinks from "@/components/DiscoveryLinks";
import { discoveryCopy } from "@/app/discoveryCopy";
import StructuredData from "@/components/StructuredData";
import { faqs } from "../data";
import { languageAlternates } from "../i18n";
import { createPageMetadata } from "../seo";

export const metadata=createPageMetadata({title:discoveryCopy.en.faq,description:discoveryCopy.en.faqLead,path:"/faq",alternates:languageAlternates("/faq","en")});
export default function FAQPage(){const schema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};return <><StructuredData data={schema}/><section className="page-hero simple-hero"><div className="wrap"><span className="section-label">Frequently asked</span><h1>{discoveryCopy.en.faq}</h1><p>{discoveryCopy.en.faqLead}</p><DiscoveryLinks context="faq"/></div></section><section className="section wrap faq-page"><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section></>}
