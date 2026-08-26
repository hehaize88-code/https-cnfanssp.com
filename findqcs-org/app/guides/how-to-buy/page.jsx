import Link from "../../../components/LocalizedLink";
import Breadcrumbs from "../../../components/Breadcrumbs";
import PageHero from "../../../components/PageHero";
import SearchBox from "../../../components/SearchBox";
import { ArrowIcon, CheckIcon } from "../../../components/Icons";
import T from "../../../components/LocalizedText";
import { localizedMetadata } from "../../../lib/seo";

export const metadata = localizedMetadata({
  title: "How to Buy More Carefully: Search to Shipment",
  description: "Follow a practical workflow for product search, source-page verification, option records, warehouse QC review and shipment approval.",
}, "/guides/how-to-buy");

export default function HowToBuyPage() {
  return (
    <article className="shell inner-page guide-article expanded-guide">
      <Breadcrumbs items={[{ labelKey: "nav.guides", href: "/guides" }, { labelKey: "howBuy.crumb" }]} />
      <PageHero eyebrow={<T id="howBuy.eyebrow" />} title={<><T id="howBuy.title1" /><br /><em><T id="howBuy.title2" /></em></>} intro={<T id="howBuy.intro" />} ><SearchBox compact /></PageHero>

      <section className="official-search-methods" aria-labelledby="search-method-title">
        <header>
          <span className="eyebrow light"><T id="guides.methodsEyebrow" /></span>
          <h2 id="search-method-title"><T id="guides.methodsTitle" /></h2>
          <p><T id="guides.methodsIntro" /></p>
          <Link href="/articles/product-search-link-id-keyword"><T id="howBuy.searchGuide" /> <ArrowIcon size={16} /></Link>
        </header>
        <div>
          {["link", "image", "keyword"].map((key, index) => <article key={key}><span>0{index + 1} / <T id={`guides.methods.${key}.label`} /></span><h3><T id={`guides.methods.${key}.title`} /></h3><p><T id={`guides.methods.${key}.text`} /></p></article>)}
        </div>
      </section>

      <section className="buy-workflow-intro" aria-labelledby="workflow-title">
        <span className="depth-number">01—06</span>
        <div><small><T id="howBuy.workflowEyebrow" /></small><h2 id="workflow-title"><T id="howBuy.workflowTitle" /></h2></div>
        <p><T id="howBuy.workflowText" /></p>
      </section>

      <section className="buy-steps">
        {[1, 2, 3, 4, 5, 6].map((number, index) => <div key={number}><span>0{index + 1}</span><h2><T id={`howBuy.steps.${number}.title`} /></h2><p><T id={`howBuy.steps.${number}.text`} /></p></div>)}
      </section>
      <div className="article-callout wide"><strong><T id="howBuy.calloutTitle" /></strong><p><T id="howBuy.calloutText" /></p></div>

      <section className="order-record" aria-labelledby="order-record-title">
        <div>
          <span className="eyebrow"><T id="howBuy.recordEyebrow" /></span>
          <h2 id="order-record-title"><T id="howBuy.recordTitle" /></h2>
          <p><T id="howBuy.recordText" /></p>
        </div>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((number) => <li key={number}><CheckIcon size={17} /><span><strong><T id={`howBuy.record${number}Title`} /></strong><T id={`howBuy.record${number}Text`} /></span></li>)}
        </ul>
      </section>

      <section className="cost-boundaries" aria-labelledby="cost-boundary-title">
        <header>
          <span className="eyebrow light"><T id="howBuy.costEyebrow" /></span>
          <h2 id="cost-boundary-title"><T id="howBuy.costTitle" /></h2>
          <p><T id="howBuy.costText" /></p>
        </header>
        <div>
          {[1, 2, 3].map((number) => <article key={number}><span>0{number}</span><h3><T id={`howBuy.cost${number}Title`} /></h3><p><T id={`howBuy.cost${number}Text`} /></p></article>)}
        </div>
      </section>

      <section className="guide-source-note purchase-boundary" aria-label="Transaction boundary">
        <div><span><T id="howBuy.transactionEyebrow" /></span><strong><T id="howBuy.transactionTitle" /></strong></div>
        <p><T id="howBuy.transactionText" /></p>
        <Link href="/shipping"><T id="howBuy.transactionLink" /> <ArrowIcon size={16} /></Link>
      </section>

      <nav className="guide-next-links" aria-label="Continue the workflow">
        <Link href="/products"><small><T id="howBuy.next1Small" /></small><strong><T id="howBuy.next1Title" /></strong><ArrowIcon /></Link>
        <Link href="/guides/qc-photo-checklist"><small><T id="howBuy.next2Small" /></small><strong><T id="howBuy.next2Title" /></strong><ArrowIcon /></Link>
        <Link href="/categories"><small><T id="howBuy.next3Small" /></small><strong><T id="howBuy.next3Title" /></strong><ArrowIcon /></Link>
      </nav>
    </article>
  );
}
