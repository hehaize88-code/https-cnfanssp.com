import Image from "next/image";
import Link from "../../components/LocalizedLink";
import Breadcrumbs from "../../components/Breadcrumbs";
import PageHero from "../../components/PageHero";
import { ArrowIcon } from "../../components/Icons";
import T from "../../components/LocalizedText";
import { localizedMetadata } from "../../lib/seo";

export const metadata = localizedMetadata({
  title: "Product Search Methods & Practical QC Guides",
  description: "Choose between link, ID and keyword search, then use practical QC and buying guides before approving an international parcel.",
}, "/guides");

const methods = [
  { number: "01", key: "link", label: "Most exact", title: "Search by product link", text: "Use a complete catalog or marketplace link when you already know the candidate.", best: "You already know the exact listing.", caution: "A changed or removed listing still needs live verification." },
  { number: "02", key: "image", label: "Visual clue", title: "Compare by reference image", text: "Use an image to describe a visually distinctive product, then verify the actual destination.", best: "Reliable wording is missing.", caution: "Crop, angle and image quality can change similarity results." },
  { number: "03", key: "keyword", label: "Broad discovery", title: "Search by keywords", text: "Combine product type with a model, material or colour clue to narrow the catalog.", best: "You are exploring a category or model.", caution: "Broad wording usually needs more filtering." },
];

const guides = [
  { number: "01", key: "checklist", href: "/guides/qc-photo-checklist" },
  { number: "02", key: "howBuy", href: "/guides/how-to-buy" },
];

export default function GuidesPage() {
  return (
    <div className="shell inner-page researched-guides">
      <Breadcrumbs items={[{ labelKey: "nav.guides" }]} />

      <PageHero
        eyebrow="Product discovery + evidence"
        title={<>Search with a strong clue.<br /><em>Check with a fixed method.</em></>}
        intro="Use a full link or product ID when you have one. Use focused keywords for exploration. Then confirm the live listing and review warehouse evidence without guessing beyond the photos."
      >
        <div className="guide-research-visual">
          <div className="guide-research-images" aria-hidden="true">
            <div className="guide-research-photo guide-research-photo-main">
              <Image src="/products/shoes-60.jpg" alt="" fill sizes="(max-width: 760px) 60vw, 270px" />
            </div>
            <div className="guide-research-photo">
              <Image src="/products/hoodie.webp" alt="" fill sizes="(max-width: 760px) 35vw, 130px" />
            </div>
            <div className="guide-research-photo">
              <Image src="/products/electronics.webp" alt="" fill sizes="(max-width: 760px) 35vw, 130px" />
            </div>
          </div>
          <span className="guide-research-stamp">EVIDENCE{"\n"}FIRST</span>
          <div className="guide-research-tabs">
            <span>Link</span>
            <span>Image</span>
            <span>Keyword</span>
          </div>
          <p>Illustrative product images. They are not inspection records for a buyer's order.</p>
        </div>
      </PageHero>

      <section className="guide-method-section">
        <header className="guide-section-heading">
          <span className="eyebrow">Three starting routes</span>
          <h2>Start with the clue you already have.</h2>
          <p>Choose the most specific input available, then verify identity on the live destination before judging quality.</p>
        </header>
        <div className="guide-method-grid">
          {methods.map((method) => (
            <article className={`guide-method-card guide-method-${method.key}`} key={method.key}>
              <div className="guide-method-top">
                <span>{method.number}</span>
                <small>{method.label}</small>
              </div>
              <h3>{method.title}</h3>
              <p>{method.text}</p>
              <div className="guide-method-note">
                <strong>Best when</strong>
                <span>{method.best}</span>
              </div>
              <div className="guide-method-caution">
                <strong>Watch for</strong>
                <span>{method.caution}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="official-research-panel">
        <div className="official-research-head">
          <span className="eyebrow">Evidence rules</span>
          <h2>Search identifies a candidate. Evidence supports the decision.</h2>
          <p>The strongest workflow keeps discovery, the live offer and the warehouse record separate.</p>
        </div>
        <div className="official-fact-list">
          <div><span>01</span><div><h3>Identity first</h3><p>Confirm the exact product route, ID and option set before reading visual details.</p></div></div>
          <div><span>02</span><div><h3>Your order carries more weight</h3><p>Public examples can teach you where to look; your own warehouse record supports your shipment decision.</p></div></div>
          <div><span>03</span><div><h3>Keep unknowns visible</h3><p>Photos can support visible comparisons but cannot prove every material, hidden or long-term property.</p></div></div>
        </div>
        <footer className="official-source-row">
          <strong>Continue</strong>
          <div>
            <Link href="/products">Mapped product finds <ArrowIcon size={13} /></Link>
            <Link href="/guides/qc-photo-checklist">QC photo checklist <ArrowIcon size={13} /></Link>
            <Link href="/shipping">Shipping guide <ArrowIcon size={13} /></Link>
          </div>
          <time dateTime="2026-08-26">Updated 26 Aug 2026</time>
        </footer>
      </section>

      <section className="practical-guide-block">
        <header className="guide-section-heading">
          <span className="eyebrow"><T id="guides.practicalEyebrow" /></span>
          <h2><T id="guides.practicalTitle" /></h2>
          <p><T id="guides.practicalIntro" /></p>
        </header>
        <div className="guide-grid">
          {guides.map((guide) => (
            <Link className="guide-card" href={guide.href} key={guide.href}>
              <span className="guide-number">{guide.number}</span>
              <small><T id={`guides.cards.${guide.key}.label`} /></small>
              <h2><T id={`guides.cards.${guide.key}.title`} /></h2>
              <p><T id={`guides.cards.${guide.key}.text`} /></p>
              <b><T id="guides.read" /> <ArrowIcon /></b>
            </Link>
          ))}
        </div>
      </section>

      <section className="principle-banner">
        <span><T id="guides.ruleEyebrow" /></span>
        <h2><T id="guides.ruleTitle1" /><br /><T id="guides.ruleTitle2" /></h2>
        <p><T id="guides.ruleText" /></p>
      </section>
    </div>
  );
}
