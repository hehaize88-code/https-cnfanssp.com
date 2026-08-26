import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "../../components/EditorialPage";

const canonical = "/articles/pre-purchase-qc-evidence-worksheet/";

export const metadata: Metadata = {
  title: "Pre-Purchase QC Evidence Worksheet: Auditable Checklist | FindQCs",
  description: "Build a pre-purchase QC evidence worksheet that records product identity, photo coverage, observations, gaps and an agent handoff decision.",
  keywords: ["pre-purchase QC evidence worksheet", "QC inspection worksheet", "QC photo decision log", "product inspection evidence record"],
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    title: "Pre-Purchase QC Evidence Worksheet: Build an Auditable Record",
    description: "A field-by-field worksheet for product identity, QC evidence, gaps and agent handoff decisions.",
    url: canonical,
    images: ["/og.png"],
    publishedTime: "2026-08-26",
    modifiedTime: "2026-08-26",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre-Purchase QC Evidence Worksheet: Build an Auditable Record",
    description: "Record product identity, QC photo coverage, observations and evidence gaps before an agent acts.",
    images: ["/og.png"],
  },
};

export default function PrePurchaseQcEvidenceWorksheet() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pre-Purchase QC Evidence Worksheet: Build an Auditable Record",
    description: "A practical worksheet for recording product identity, QC evidence, gaps and a pre-purchase decision before agent handoff.",
    image: "https://findqcs.net/og.png",
    datePublished: "2026-08-26",
    dateModified: "2026-08-26",
    inLanguage: "en",
    author: { "@type": "Organization", name: "FindQCs", url: "https://findqcs.net/" },
    publisher: { "@type": "Organization", name: "FindQCs", logo: { "@type": "ImageObject", url: "https://findqcs.net/findqc-logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://findqcs.net/articles/pre-purchase-qc-evidence-worksheet/" },
    keywords: "pre-purchase QC evidence worksheet, QC inspection worksheet, QC photo decision log, product inspection evidence record",
  };

  return <EditorialPage
    eyebrow="QC EVIDENCE RECORD / 11 MIN READ"
    title="Pre-purchase QC evidence worksheet: build an auditable record."
    intro="A useful worksheet does not decide for you. It preserves product identity, separates observations from assumptions and turns missing evidence into a precise next step before your chosen agent acts."
    breadcrumbs={[["Articles", "/articles/"], ["Pre-Purchase QC Evidence Worksheet", canonical]]}
  >
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <div className="article-layout">
      <aside className="toc">
        <strong>ON THIS PAGE</strong>
        <a href="#purpose">1. Define the decision</a>
        <a href="#identity">2. Lock product identity</a>
        <a href="#coverage">3. Map evidence coverage</a>
        <a href="#observations">4. Record observations</a>
        <a href="#gaps">5. Convert gaps into requests</a>
        <a href="#decision">6. Write the decision</a>
        <a href="#handoff">7. Prepare agent handoff</a>
      </aside>

      <div className="prose">
        <p className="lead">A folder full of product screenshots is not yet a QC evidence record. The record becomes useful when another person can identify the exact candidate, see what you reviewed, understand what remains unknown and follow the reason for your next action.</p>
        <p>The worksheet below is designed for the stage before purchase or before you instruct a buyer-selected agent to continue. It works with QC material you have already found, whether that material came from a public research platform, a seller listing or an earlier warehouse record. FindQC can help surface and organize research evidence, but it does not sell the product or run the buying, warehouse, return or international-shipping process. Those steps belong to the third party the buyer chooses.</p>

        <h2 id="purpose">1. Define the decision before collecting evidence</h2>
        <p>Begin with the decision, not the media. Write one sentence describing what you must decide now. “Choose between listing A and listing B” is different from “confirm that the selected blue, size-large variant deserves an order.” The first requires a comparison record; the second requires an identity and tolerance check. If the decision is vague, every new image feels relevant and the worksheet becomes a scrapbook.</p>
        <p>Add a boundary sentence: what is outside this review? A pre-purchase worksheet can compare visible construction, listed options, photographed measurements and known gaps. It cannot certify authenticity, hidden composition, safety, long-term durability or the condition of a future unit. It also cannot promise that an agent or seller will accept a later request. Current transaction rules must be checked where the transaction is controlled.</p>
        <div className="check-block"><strong>DECISION HEADER</strong><ul><li>Decision to make</li><li>Product category</li><li>Buyer’s deal-breakers</li><li>Acceptable uncertainties</li><li>Evidence cut-off date</li><li>Next responsible party</li></ul></div>
        <p>Deal-breakers should be observable. “No major defects” is too broad. “No visible stain on the front panel, correct ordered colour, and chest width within my written range” can be checked. Personal tolerances are not universal quality standards; they simply make your own decision consistent.</p>

        <h2 id="identity">2. Lock product identity in a single row</h2>
        <p>Evidence from the wrong item is worse than missing evidence because it creates false confidence. Give the candidate a short worksheet ID and record the full source link or stable item identifier privately. Then capture marketplace, seller or store name where shown, item title, model, colour, size, quantity and the date you opened the listing. If a source page changes, this row tells you which version your decision used.</p>
        <p>Do not rely on a cover photograph. Sellers can reuse promotional images across variants, and visually similar products can come from different sources. Compare fixed identifiers and variation details. If the QC record is grouped as the same item, preserve the record identifier and date. If it is only a similar result, say so. “Similar” can help discovery but cannot transfer measurements, defect history or seller-specific observations to the target.</p>
        <div className="check-block"><strong>IDENTITY ROW</strong><ul><li>Worksheet ID</li><li>Source item ID or saved link</li><li>Seller/store shown</li><li>Model or design</li><li>Colour and size</li><li>Quantity</li><li>Listing checked date</li><li>QC record and record date</li></ul></div>
        <p>Use three identity states: matched, possible match or conflict. Matched means the available fields agree on the target required for this decision. Possible match means a decisive field is absent. Conflict means at least one field disagrees. Only the first state should support a final product-specific conclusion; the second calls for more research, and the third stops the comparison.</p>

        <h2 id="coverage">3. Build a coverage map before judging quality</h2>
        <p>Create rows for the views needed by the category, then mark each clear, partial or absent. A clothing record might need front, back, both sides, neck label, care label, print or embroidery, cuffs, hem and measurement views. Footwear may need paired front and rear views, both profiles, outsoles, size labels, toe boxes and interior length evidence. The map prevents a large gallery from disguising one important missing angle.</p>
        <p>“Clear” means the area is identifiable, in focus and large enough to inspect. “Partial” means the area appears but glare, compression, a fold, perspective or a hand limits interpretation. “Absent” means it never appears. Do not upgrade a partial view because the gallery contains many other photographs. Quantity does not replace coverage.</p>
        <div className="check-block"><strong>COVERAGE MAP</strong><ul><li>Overall front and back</li><li>Left and right sides</li><li>Top, base or outsole</li><li>Labels and selected option</li><li>Critical construction area</li><li>Measurement endpoints</li><li>Accessories or included parts</li><li>Suspected defect close-up</li></ul></div>
        <p>Note the file or frame supporting each clear field. A simple reference such as “photo 4” or “video 00:18” makes the worksheet auditable. Avoid copying private addresses, payment records, tracking numbers or customer identities into the evidence packet; they do not improve the inspection and create unnecessary exposure.</p>

        <h2 id="observations">4. Separate observation, interpretation and confidence</h2>
        <p>For each relevant field, write what is visible before writing what it may mean. “The left print edge sits closer to the side seam than the right edge in the level front view” is an observation. “The print is misaligned” is an interpretation. The interpretation may be reasonable, but keeping both columns prevents camera angle or garment placement from disappearing from the record.</p>
        <p>Add a confidence label. Direct means the observation is visible in a matched, clear record. Supporting means several clues agree but no single view settles the point. Prompt only means the material suggests what to inspect on the future warehouse unit. Unknown means the record does not answer the question. These labels describe evidence strength, not product quality.</p>
        <div className="check-block"><strong>OBSERVATION LINE</strong><ul><li>Field inspected</li><li>Neutral visible observation</li><li>Photo or frame reference</li><li>Possible interpretation</li><li>Alternative explanation</li><li>Confidence label</li><li>Buyer tolerance</li><li>Result: pass, gap or stop</li></ul></div>
        <p>Use neutral language for colour, material and authenticity-sensitive details. Lighting and white balance can shift apparent colour. Photos can show texture but not prove fibre composition. Labels, codes and packaging can be recorded as clues, but they do not certify origin. Strong wording should follow strong evidence, not a familiar logo or convincing presentation.</p>

        <h2 id="gaps">5. Turn each important gap into a targeted request</h2>
        <p>An evidence gap is useful when it produces a specific instruction. Replace “need better QC” with the exact item, area, orientation and action. For example: “On the blue size-large item, photograph the full back laid flat and level, with both side seams visible.” For measurement evidence, name the endpoints and ask that the entire tape remain visible without a bend. For motion, name one component and one complete action.</p>
        <p>Rank gaps by decision impact. A missing packaging view may not matter when packaging is disposable. A missing size label matters when the selected variant is the central question. If the gap concerns a hidden property that ordinary warehouse media cannot establish, do not request a theatrical photo. Mark the property outside scope and use an appropriate independent source or a different product decision.</p>
        <div className="check-block"><strong>REQUEST FORMULA</strong><ul><li>Exact order item and variant</li><li>One area or component</li><li>Required angle or action</li><li>Framing and lighting instruction</li><li>Visible reference or endpoints</li><li>Reason the evidence changes the decision</li></ul></div>
        <p>Requests remain subject to the chosen agent’s current service and the seller’s current terms. The worksheet should never state that an exchange, return, added photo or video is guaranteed. Its job is to make the buyer’s question precise enough for the responsible third party to answer if that option is available.</p>

        <h2 id="decision">6. Write a decision that exposes its limits</h2>
        <p>Choose one state: proceed to agent verification, request more evidence, hold for identity or policy confirmation, or reject this candidate. Follow it with the decisive observation and the strongest known limit. “Proceed to agent verification: matched records show the required pocket layout; colour remains lighting-dependent” is more useful than “looks good.”</p>
        <p>A proceed state is not final approval of a future warehouse unit. It means the pre-purchase record is sufficient for the next controlled step. When the exact item arrives, compare its own photos and measurements with this worksheet. A public historical record describes another recorded unit; it cannot guarantee the condition, batch or dimensions of yours.</p>
        <div className="check-block"><strong>DECISION LINE</strong><ul><li>State and date</li><li>Decisive evidence</li><li>Confidence</li><li>Known limitation</li><li>Required next check</li><li>Responsible party</li></ul></div>
        <p>If two candidates remain close, duplicate the same worksheet fields for both. Never give one candidate a detailed inspection and the other a favourable assumption. Same-field comparison makes missing data visible and prevents a prettier gallery from winning by default.</p>

        <h2 id="handoff">7. Prepare a clean handoff for the chosen agent</h2>
        <p>The final handoff should be shorter than the research file. Include the exact source item, selected colour, size and quantity, plus a small list of QC focus points and hold conditions. Link or attach only the necessary reference frames. Keep your longer observation log for later comparison, but do not force the operator to interpret every research note.</p>
        <p>A concise handoff might say: “Order the selected black, size-medium variant. At warehouse check-in, hold before further processing. Confirm the size label, provide a level front and back view, and show the ruler across the chest from seam to seam. Please flag any front-panel stain.” This records the buyer’s requirements without pretending FindQC or this site performs the warehouse inspection.</p>
        <div className="check-block"><strong>FINAL AUDIT</strong><ul><li>Identity fields complete</li><li>Evidence dates preserved</li><li>Observations separated from claims</li><li>Important gaps converted to requests</li><li>No private data included</li><li>Agent-controlled terms left for confirmation</li></ul></div>
        <p>Save the worksheet with a stable name and date. When new evidence arrives, append a revision rather than silently replacing the old conclusion. That history shows what changed and why. The result is modest but valuable: a pre-purchase decision another person can reproduce, challenge and hand back to you without guessing what you meant.</p>

        <section aria-labelledby="sources-checked">
          <h2 id="sources-checked">Sources checked and evidence boundary</h2>
          <p>Checked 26 August 2026: FindQC’s current public explanations of QC, its research workflow, agent handoff, beginner checklist, Product Intelligence and Terms of Service; plus the W3C recommendations on provenance, metadata and version indicators. No fee, route, warehouse promise, return window or customer outcome is asserted in this article.</p>
        </section>

        <Link className="article-cta" href="/guides/qc-photo-checklist/">Continue with the QC photo inspection guide <span>→</span></Link>
      </div>
    </div>
  </EditorialPage>;
}
