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
  { number: "01", key: "link" },
  { number: "02", key: "image" },
  { number: "03", key: "keyword" },
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
        eyebrow={<T id="guides.eyebrow" />}
        title={<><T id="guides.title1" /><br /><em><T id="guides.title2" /></em></>}
        intro={<T id="guides.intro" />}
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
          <span className="guide-research-stamp"><T id="guides.visual.stamp" /></span>
          <div className="guide-research-tabs">
            <span><T id="guides.visual.link" /></span>
            <span><T id="guides.visual.image" /></span>
            <span><T id="guides.visual.keyword" /></span>
          </div>
          <p><T id="guides.visual.caption" /></p>
        </div>
      </PageHero>

      <section className="guide-method-section">
        <header className="guide-section-heading">
          <span className="eyebrow"><T id="guides.methodsEyebrow" /></span>
          <h2><T id="guides.methodsTitle" /></h2>
          <p><T id="guides.methodsIntro" /></p>
        </header>
        <div className="guide-method-grid">
          {methods.map((method) => (
            <article className={`guide-method-card guide-method-${method.key}`} key={method.key}>
              <div className="guide-method-top">
                <span>{method.number}</span>
                <small><T id={`guides.methods.${method.key}.label`} /></small>
              </div>
              <h3><T id={`guides.methods.${method.key}.title`} /></h3>
              <p><T id={`guides.methods.${method.key}.text`} /></p>
              <div className="guide-method-note">
                <strong><T id="guides.bestWhen" /></strong>
                <span><T id={`guides.methods.${method.key}.best`} /></span>
              </div>
              <div className="guide-method-caution">
                <strong><T id="guides.watchFor" /></strong>
                <span><T id={`guides.methods.${method.key}.caution`} /></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="official-research-panel">
        <div className="official-research-head">
          <span className="eyebrow"><T id="guides.officialEyebrow" /></span>
          <h2><T id="guides.officialTitle" /></h2>
          <p><T id="guides.officialIntro" /></p>
        </div>
        <div className="official-fact-list">
          {[["01", "platform"], ["02", "data"], ["03", "boundary"]].map(([number, key]) => <div key={key}><span>{number}</span><div><h3><T id={`guides.facts.${key}.title`} /></h3><p><T id={`guides.facts.${key}.text`} /></p></div></div>)}
        </div>
        <footer className="official-source-row">
          <strong><T id="guides.continue" /></strong>
          <div>
            <Link href="/products"><T id="guides.continueProducts" /> <ArrowIcon size={13} /></Link>
            <Link href="/guides/qc-photo-checklist"><T id="guides.continueChecklist" /> <ArrowIcon size={13} /></Link>
            <Link href="/shipping"><T id="guides.continueShipping" /> <ArrowIcon size={13} /></Link>
          </div>
          <time dateTime="2026-08-26"><T id="guides.updated" /></time>
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
