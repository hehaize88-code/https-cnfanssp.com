import Link from "../../../components/LocalizedLink";
import Breadcrumbs from "../../../components/Breadcrumbs";
import PageHero from "../../../components/PageHero";
import { ArrowIcon, CheckIcon } from "../../../components/Icons";
import T from "../../../components/LocalizedText";
import { categories } from "../../../lib/data";
import { localizedMetadata } from "../../../lib/seo";

export const metadata = localizedMetadata({
  title: "7-Step QC Photo Checklist Before Shipping",
  description: "Use a practical seven-stage checklist to compare order details, condition, construction, labels, measurements and packing in warehouse QC photos.",
}, "/guides/qc-photo-checklist");

export default function ChecklistPage() {
  return (
    <article className="shell inner-page guide-article expanded-guide">
      <Breadcrumbs items={[{ labelKey: "nav.guides", href: "/guides" }, { labelKey: "checklist.crumb" }]} />
      <PageHero eyebrow={<T id="checklist.eyebrow" />} title={<><T id="checklist.title1" /><br /><em><T id="checklist.title2" /></em></>} intro={<T id="checklist.intro" />} />

      <section className="guide-source-note" aria-label="Evidence boundary">
        <div><span><T id="checklist.evidenceEyebrow" /></span><strong><T id="checklist.evidenceTitle" /></strong></div>
        <p><T id="checklist.evidenceText" /></p>
        <Link href="/articles/what-qc-photos-can-prove"><T id="checklist.evidenceLink" /> <ArrowIcon size={16} /></Link>
      </section>

      <section className="before-review" aria-labelledby="before-review-title">
        <div className="depth-section-label">
          <span>00</span>
          <div><small><T id="checklist.prepareEyebrow" /></small><h2 id="before-review-title"><T id="checklist.prepareTitle" /></h2></div>
        </div>
        <div>
          {[1, 2, 3].map((number) => <article key={number}><span>0{number}</span><h3><T id={`checklist.prepare${number}Title`} /></h3><p><T id={`checklist.prepare${number}Text`} /></p></article>)}
        </div>
      </section>

      <div className="article-layout">
        <aside className="article-aside">
          <div><span><T id="checklist.useWhen" /></span><p><T id="checklist.useWhenText" /></p></div>
          <div><span><T id="checklist.keepInMind" /></span><p><T id="checklist.keepInMindText" /></p></div>
          <div><span><T id="checklist.sequenceTitle" /></span><p><T id="checklist.sequenceText" /></p></div>
          <Link href="/products"><T id="checklist.findProduct" /> <ArrowIcon /></Link>
        </aside>
        <div className="stage-list">
          {[1, 2, 3, 4, 5, 6, 7].map((number, index) => (
            <section key={number}>
              <span className="stage-no">0{index + 1}</span>
              <div><h2><T id={`checklist.stages.${number}.title`} /></h2><p><T id={`checklist.stages.${number}.text`} /></p></div>
              <CheckIcon size={24} />
            </section>
          ))}
          <div className="article-callout"><strong><T id="checklist.calloutTitle" /></strong><p><T id="checklist.calloutText" /></p></div>
        </div>
      </div>

      <section className="evidence-requests" aria-labelledby="evidence-request-title">
        <div className="depth-section-label">
          <span>08</span>
          <div><small><T id="checklist.requestEyebrow" /></small><h2 id="evidence-request-title"><T id="checklist.requestTitle" /></h2></div>
        </div>
        <div>
          {[1, 2, 3].map((number) => <article key={number}><small><T id="checklist.instead" /></small><h3><T id={`checklist.request${number}Quote`} /></h3><p><T id={`checklist.request${number}Text`} /></p></article>)}
        </div>
      </section>

      <section className="decision-framework" aria-labelledby="decision-framework-title">
        <header><span className="eyebrow light"><T id="checklist.decisionEyebrow" /></span><h2 id="decision-framework-title"><T id="checklist.decisionTitle" /></h2><p><T id="checklist.decisionIntro" /></p></header>
        <div>
          {[1, 2, 3].map((number) => <article key={number}><span>0{number}</span><h3><T id={`checklist.decision${number}Title`} /></h3><p><T id={`checklist.decision${number}Text`} /></p></article>)}
        </div>
      </section>

      <section className="guide-category-links" aria-labelledby="guide-category-title">
        <div className="section-heading compact-heading"><div><span className="eyebrow"><T id="checklist.categoryEyebrow" /></span><h2 id="guide-category-title"><T id="checklist.categoryTitle" /></h2></div><Link href="/categories" className="text-link"><T id="checklist.allCategories" /> <ArrowIcon /></Link></div>
        <div>
          {categories.map((category) => <a href={category.href} target="_blank" rel="noopener noreferrer" key={category.slug}><span>{category.code}</span><strong><T id={`category.${category.slug}.name`} /></strong><ArrowIcon size={15} /></a>)}
        </div>
      </section>

      <nav className="guide-next-links" aria-label="Continue reading">
        <Link href="/guides/how-to-buy"><small><T id="checklist.nextGuide" /></small><strong><T id="checklist.nextGuideTitle" /></strong><ArrowIcon /></Link>
        <Link href="/articles/before-you-buy-qc-guide"><small><T id="checklist.longer" /></small><strong><T id="checklist.longerTitle" /></strong><ArrowIcon /></Link>
      </nav>
    </article>
  );
}
