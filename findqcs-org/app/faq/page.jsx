import Breadcrumbs from "../../components/Breadcrumbs";
import PageHero from "../../components/PageHero";
import SearchBox from "../../components/SearchBox";
import { ArrowIcon } from "../../components/Icons";
import Link from "../../components/LocalizedLink";
import T from "../../components/LocalizedText";
import { translate } from "../../lib/i18n";
import { localizedMetadata } from "../../lib/seo";

export const metadata = localizedMetadata({
  title: "Product Search & QC Photo FAQ",
  description: "Clear answers about product search, mapped catalog links, USD estimates, QC photos, measurements and warehouse review limits.",
}, "/faq");

const faqGroups = [
  { title: "Using the product finder", items: [1, 3, 5, 6] },
  { title: "Reading QC evidence", items: [2, 4, 7, 8] },
];

const faqOrder = faqGroups.flatMap((group) => group.items);

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqOrder.map((number) => ({
      "@type": "Question",
      name: translate("en", `faq.items.${number}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: translate("en", `faq.items.${number}.answer`),
      },
    })),
  };

  return (
    <div className="shell inner-page faq-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ labelKey: "nav.faq" }]} />
      <PageHero eyebrow={<T id="faq.eyebrow" />} title={<><T id="faq.title1" /><br /><em><T id="faq.title2" /></em></>} intro={<T id="faq.intro" />}><SearchBox compact /></PageHero>

      <section className="faq-full-list" aria-label="Frequently asked questions">
        {faqGroups.map((group, groupIndex) => {
          const offset = groupIndex === 0 ? 0 : faqGroups[0].items.length;
          return (
            <div className="faq-group" key={group.title}>
              <header className="faq-group-heading">
                <span>0{groupIndex + 1}</span>
                <h2>{group.title}</h2>
              </header>
              <div>
                {group.items.map((number, index) => {
                  const displayNumber = String(offset + index + 1).padStart(2, "0");
                  return (
                    <details key={number} open={groupIndex === 0 && index === 0}>
                      <summary><span>{displayNumber}</span><T id={`faq.items.${number}.question`} /><b>+</b></summary>
                      <p><T id={`faq.items.${number}.answer`} /></p>
                    </details>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <section className="faq-research-panel" aria-labelledby="faq-research-title">
        <div>
          <span className="eyebrow light">Next useful step</span>
          <h2 id="faq-research-title">Turn an answer into a repeatable check.</h2>
          <p>Use the compact guides before you open a listing, approve warehouse photos or estimate a shipment.</p>
          <small>FindQCS is an independent discovery and education layer. It does not sell, inspect or authenticate products.</small>
        </div>
        <div className="faq-source-links">
          <Link href="/guides/qc-photo-checklist"><span>01</span><b>Seven-stage QC photo checklist</b><ArrowIcon /></Link>
          <Link href="/guides/how-to-buy"><span>02</span><b>Search-to-warehouse buying flow</b><ArrowIcon /></Link>
          <Link href="/shipping"><span>03</span><b>Shipping cost and parcel checklist</b><ArrowIcon /></Link>
          <Link href="/articles"><span>04</span><b>Evidence-led field notes</b><ArrowIcon /></Link>
        </div>
      </section>
    </div>
  );
}
