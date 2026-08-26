import Link from "../../components/LocalizedLink";
import Breadcrumbs from "../../components/Breadcrumbs";
import PageHero from "../../components/PageHero";
import { ArrowIcon, CheckIcon } from "../../components/Icons";
import T from "../../components/LocalizedText";
import { localizedMetadata } from "../../lib/seo";

export const metadata = localizedMetadata({
  title: "International Shipping Cost & Parcel Checklist",
  description: "Plan actual and volumetric weight, packaging, service fees, route restrictions and uncertainty before approving an international parcel.",
}, "/shipping");

const layers = [
  "product", "service", "parcel", "route",
];

export default function ShippingPage() {
  return (
    <div className="shell inner-page shipping-page">
      <Breadcrumbs items={[{ labelKey: "nav.shipping" }]} />
      <PageHero
        eyebrow={<T id="shipping.eyebrow" />}
        title={<><T id="shipping.title1" /><br /><em><T id="shipping.title2" /></em></>}
        intro={<T id="shipping.intro" />}
      >
        <Link className="hero-source-link" href="/products"><T id="shipping.start" /> <ArrowIcon /></Link>
      </PageHero>

      <section className="shipping-layers" aria-labelledby="shipping-layers-title">
        <header>
          <span className="eyebrow"><T id="shipping.costMap" /></span>
          <h2 id="shipping-layers-title"><T id="shipping.layersTitle" /></h2>
        </header>
        <div>
          {layers.map((key, index) => (
            <article key={key}><span>0{index + 1}</span><h3><T id={`shipping.layers.${key}.title`} /></h3><p><T id={`shipping.layers.${key}.text`} /></p></article>
          ))}
        </div>
      </section>

      <section className="shipping-calculation" aria-labelledby="billable-weight-title">
        <div>
          <span className="eyebrow light"><T id="shipping.weightEyebrow" /></span>
          <h2 id="billable-weight-title"><T id="shipping.weightTitle" /></h2>
          <p><T id="shipping.weightText" /></p>
        </div>
        <div className="formula-card">
          <span><T id="shipping.formulaEyebrow" /></span>
          <strong><T id="shipping.formula" /></strong>
          <i><T id="shipping.divisor" /></i>
          <small><T id="shipping.formulaNote" /></small>
        </div>
      </section>

      <section className="shipping-checklist" aria-labelledby="shipping-checklist-title">
        <div className="section-heading compact-heading"><div><span className="eyebrow"><T id="shipping.beforeEyebrow" /></span><h2 id="shipping-checklist-title"><T id="shipping.questionsTitle" /></h2></div></div>
        <ol>
          {[1, 2, 3, 4, 5, 6].map((number, index) => <li key={number}><span>0{index + 1}</span><p><T id={`shipping.question${number}`} /></p><CheckIcon /></li>)}
        </ol>
      </section>

      <aside className="shipping-boundary">
        <div><span><T id="shipping.ruleEyebrow" /></span><h2><T id="shipping.ruleTitle" /></h2></div>
        <p><T id="shipping.ruleText" /></p>
        <Link href="/articles/shipping-cost-checklist"><T id="shipping.ruleLink" /> <ArrowIcon /></Link>
      </aside>
    </div>
  );
}
