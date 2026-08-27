import type { Metadata } from "next";
import { Breadcrumbs, Footer, Header, JsonLd, PageIntro } from "../components";
import { faqs, PLANNED_ORIGIN } from "../data";

export const metadata: Metadata = { title: "FindQC FAQ", description: "Clear answers about QC finders, product links, USD reference prices, inspection photos and research limits.", alternates: { canonical: `${PLANNED_ORIGIN}/faq` } };

export default function FAQPage() {
  return <><Header /><main><Breadcrumbs items={[{ label: "FAQ" }]} /><PageIntro eyebrow="Questions, answered" title="Know what the tool proves—and what it cannot." description="FindQC is built to make discovery and visible evidence easier to interpret, without turning a reference into a promise." /><section className="shell page-content faq-page"><div className="faq-list">{faqs.map((faq, i) => <details key={faq.q} open={i === 0}><summary><span>{String(i + 1).padStart(2, "0")}</span>{faq.q}<i>+</i></summary><p>{faq.a}</p></details>)}</div><div className="contact-card"><span>STILL DECIDING?</span><h2>Use the listing and exact-unit evidence together.</h2><p>Start with a current destination, preserve the product identifier, and request a focused warehouse photo when one missing view could change the answer.</p><a href="/guide">See the five-stage workflow →</a></div></section></main><Footer /><JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }} /></>;
}
