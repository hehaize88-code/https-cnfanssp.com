import Link from "../../components/LocalizedLink";
import Breadcrumbs from "../../components/Breadcrumbs";
import PageHero from "../../components/PageHero";
import { ArrowIcon, CheckIcon } from "../../components/Icons";
import { localizedMetadata } from "../../lib/seo";

export const metadata = localizedMetadata({
  title: "International Shipping Cost & Parcel Checklist",
  description: "Plan actual and volumetric weight, packaging, service fees, route restrictions and uncertainty before approving an international parcel.",
}, "/shipping");

const layers = [
  ["Product", "Live item price plus domestic delivery to the warehouse."],
  ["Service", "Purchasing fees and optional photos, packing or reinforcement."],
  ["Parcel", "Actual or volumetric billable weight after consolidation."],
  ["Route", "Destination, category restrictions, service level and current pricing."],
];

export default function ShippingPage() {
  return (
    <div className="shell inner-page shipping-page">
      <Breadcrumbs items={[{ label: "Shipping" }]} />
      <PageHero
        eyebrow="Parcel planning / field guide"
        title={<>Estimate the parcel.<br /><em>Keep uncertainty visible.</em></>}
        intro="Product price is only one layer of delivered cost. Use a range for weight, packaging and route fees, then replace estimates with live warehouse values before payment."
      >
        <Link className="hero-source-link" href="/products">Start with product finds <ArrowIcon /></Link>
      </PageHero>

      <section className="shipping-layers" aria-labelledby="shipping-layers-title">
        <header>
          <span className="eyebrow">Cost map</span>
          <h2 id="shipping-layers-title">Four layers to keep separate</h2>
        </header>
        <div>
          {layers.map(([title, text], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="shipping-calculation" aria-labelledby="billable-weight-title">
        <div>
          <span className="eyebrow light">Billable weight</span>
          <h2 id="billable-weight-title">Actual weight is not always the charged weight.</h2>
          <p>Some routes compare scale weight with volumetric weight calculated from parcel dimensions. The greater result may be rounded up according to the route's current rules. Check the live divisor and rounding unit; there is no universal formula for every carrier.</p>
        </div>
        <div className="formula-card">
          <span>PLANNING FORMULA</span>
          <strong>length × width × height</strong>
          <i>÷ current route divisor</i>
          <small>Use centimetres only when the route specifies them. Verify units before calculating.</small>
        </div>
      </section>

      <section className="shipping-checklist" aria-labelledby="shipping-checklist-title">
        <div className="section-heading compact-heading"><div><span className="eyebrow">Before approval</span><h2 id="shipping-checklist-title">Six parcel questions</h2></div></div>
        <ol>
          {[
            "Have every product and visible concern been resolved before consolidation?",
            "Could boxes or bulky packaging push the parcel into volumetric charging?",
            "Does the selected route accept the product category and destination?",
            "Which protective packaging is necessary for the item type?",
            "Are taxes, duties or route-specific charges included or still uncertain?",
            "Has the final quote been checked against current warehouse weight and dimensions?",
          ].map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p><CheckIcon /></li>)}
        </ol>
      </section>

      <aside className="shipping-boundary">
        <div><span>Useful rule</span><h2>Estimate with a range. Pay from live values.</h2></div>
        <p>A historical haul or another buyer's quote is context, not a promise. Destination, date, billable weight, packaging and route availability can change the result.</p>
        <Link href="/articles/shipping-cost-checklist">Read the detailed shipping note <ArrowIcon /></Link>
      </aside>
    </div>
  );
}
