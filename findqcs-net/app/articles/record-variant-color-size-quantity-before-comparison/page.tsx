import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "../../components/EditorialPage";

const canonical = "/articles/record-variant-color-size-quantity-before-comparison/";

export const metadata: Metadata = {
  title: "QC Variant Record: Color, Size and Quantity Log | FindQCs",
  description: "Build a QC variant record for color, size, quantity, bundle and option text before comparing product inspection photos or measurements.",
  keywords: ["QC variant record", "product inspection variant log", "record color size quantity QC", "QC option comparison"],
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { type: "article", title: "Record Variant, Color, Size and Quantity Before QC Comparison", description: "A field-level QC variant log that prevents evidence from one option being assigned to another.", url: canonical, images: ["/og.png"], publishedTime: "2026-08-30", modifiedTime: "2026-08-30" },
  twitter: { card: "summary_large_image", title: "Build a QC Variant Record Before Comparison", description: "Freeze option identity before comparing photos, measurements or included parts.", images: ["/og.png"] },
};

export default function RecordVariantColorSizeQuantity() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Record Variant, Color, Size and Quantity Before QC Comparison",
    description: "A practical method for logging option-level identity before inspection evidence is compared.",
    image: "https://findqcs.net/og.png", datePublished: "2026-08-30", dateModified: "2026-08-30", inLanguage: "en",
    author: { "@type": "Organization", name: "FindQCs", url: "https://findqcs.net/" },
    publisher: { "@type": "Organization", name: "FindQCs", logo: { "@type": "ImageObject", url: "https://findqcs.net/findqc-logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://findqcs.net/articles/record-variant-color-size-quantity-before-comparison/" },
    keywords: "QC variant record, product inspection variant log, record color size quantity QC, QC option comparison",
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://findqcs.net/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://findqcs.net/articles/" },
    { "@type": "ListItem", position: 3, name: "QC Variant Record", item: "https://findqcs.net/articles/record-variant-color-size-quantity-before-comparison/" },
  ] };

  return <EditorialPage eyebrow="QC VARIANT RECORD / 11 MIN READ" title="Record variant, color, size and quantity before QC comparison." intro="A QC record becomes auditable only when another reviewer can tell exactly which option the evidence describes. Freeze the variant fields first; compare photographs, measurements and defects second." breadcrumbs={[["Articles", "/articles/"], ["QC Variant Record", canonical]]}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="article-layout"><aside className="toc"><strong>ON THIS PAGE</strong><a href="#why">1. Why option identity fails</a><a href="#schema">2. Build the record</a><a href="#normalize">3. Preserve and normalize</a><a href="#quantity">4. Quantity and bundles</a><a href="#evidence">5. Link evidence</a><a href="#conflicts">6. Resolve conflicts</a><a href="#comparison">7. Compare safely</a><a href="#audit">8. Final audit</a></aside>
      <div className="prose">
        <p className="lead">Two QC sets can show the same product name and still describe different evidence targets. One may be black in size M; another may be charcoal in size L. A third may be a two-piece bundle whose thumbnail shows only the main item. If those option fields are not recorded before comparison, precise-looking observations can be attached to the wrong target.</p>
        <p>This QC variant record is designed for already-found listings and inspection material. FindQC can help surface product and QC research, but it does not place the order, operate the warehouse, select a variant or execute a return. The buyer-selected agent handles those transaction steps. The record here makes the buyer's intended option and the evidence option explicit before any handoff.</p>

        <h2 id="why">1. Treat option identity as a separate evidence problem</h2>
        <p>A listing identity answers “which commercial page?” Variant identity answers “which exact selection on that page?” A matching item ID does not settle color, labelled size, quantity, version, bundle or custom text. Conversely, translated option names can differ while still referring to the same source choice. The method therefore stores both the original value and the reviewer’s normalized interpretation.</p>
        <p>Define the decision target before opening the most attractive QC image. If the intended purchase is a navy hoodie, size L, one unit, with no added lining, those are not incidental notes. They are constraints. A measurement from size M can help formulate a sizing question, but it cannot be filed as the measurement of size L. A close-up from a black option may show construction, but it cannot settle whether the navy color is correct.</p>
        <div className="check-block"><strong>OPTION IDENTITY RULE</strong><ul><li>Page match is necessary but not sufficient.</li><li>Every selectable field receives its own row.</li><li>Missing evidence stays missing.</li><li>A conflicting required field blocks direct transfer.</li><li>General construction context remains labelled contextual.</li></ul></div>

        <h2 id="schema">2. Build one canonical QC variant record</h2>
        <p>Use a stable header containing source URL or item ID, seller or store when shown, capture date and a short buyer reference. Beneath it, create one row each for product variant, color, labelled size, quantity, bundle or included parts, and any version-specific field. Electronics may need model, plug and voltage. Shoes may need colorway, tagged size and pair quantity. A garment may need fit name, lining or graphic option.</p>
        <div className="check-block"><strong>CORE VARIANT FIELDS</strong><ul><li>Original source option text</li><li>Normalized field name and value</li><li>Where the value was observed</li><li>Required, preferred or informational status</li><li>Evidence state: confirmed, possible, absent or conflicting</li><li>Capture date</li><li>Private file or screenshot reference</li></ul></div>
        <p>Add a “decision relevance” column. A tiny seller code may be informational, while shoe size and plug type are required. This column stops a reviewer from spending equal effort on every detail. It also makes conflict handling consistent: a required-field conflict blocks product-specific comparison; a preference conflict may simply be noted; an informational difference may have no effect.</p>
        <p>Do not use “same as listing” as a value. It hides what the listing said at the time. Copy the exact text into the source-value field, then translate or normalize in a separate field. This preserves an audit trail if the option menu changes later.</p>

        <h2 id="normalize">3. Preserve original wording before normalizing it</h2>
        <p>Option text can include seller shorthand, machine translation, punctuation, color codes and bundle counts. Preserve the original characters where possible. A normalized entry such as “dark blue” is useful for comparison, but it should never overwrite “藏青” or a seller code such as “N03.” Keeping both lets another reviewer see whether two labels are truly equivalent or merely assumed to be.</p>
        <p>Normalize units and field names, not unsupported meaning. Convert a clearly labelled EU 42 into a comparison column if needed, while retaining EU 42 as the source value. Do not convert a generic “XL” into a body measurement. Do not call “coffee” brown without recording that the mapping is editorial. If an option name is ambiguous, mark it unresolved and preserve the full selection path.</p>
        <div className="check-block"><strong>NORMALIZATION EXAMPLE</strong><ul><li>Source value: “深灰 / L / 单件”</li><li>Normalized: dark gray / L / one unit</li><li>Evidence: direct option-menu text</li><li>Unknown: whether L follows a standard measurement chart</li><li>Required recheck: size label and received quantity</li></ul></div>
        <p>Color deserves particular restraint. Warehouse lighting, exposure, compression and displays can alter appearance. Record the selected color name independently from the photographed appearance. A photo can support “the received item appears cooler than the neutral reference in this frame,” but not a definitive color mismatch when the source names or lighting are unresolved.</p>

        <h2 id="quantity">4. Record quantity, bundles and included parts explicitly</h2>
        <p>Quantity is often lost because the listing thumbnail shows one object even when the option sells a pair, set or multi-pack. Record order quantity and units per selected option separately. Two orders of a three-piece option equal six pieces, not two. If the bundle wording is unclear, do not infer the contents from promotional images.</p>
        <p>Use an included-parts list when completeness matters. For shoes, a pair is the product quantity while spare laces or a box are included parts. For electronics, the main device, plug, cable and adapter may be separate fields. For a bag, strap, pouch, lock and dust cover may each need a line. Mark whether each part is seller-stated, visible in QC or not shown.</p>
        <div className="check-block"><strong>QUANTITY EQUATION</strong><ul><li>Order quantity: number of selected listing units</li><li>Units per option: pieces promised in one selection</li><li>Expected total: order quantity × units per option</li><li>Visible total: pieces actually countable in evidence</li><li>Gap: expected parts not visible or wording unresolved</li></ul></div>
        <p>A packaging photo is not automatically proof of every included part. The record should say “box visible” or “strap visible,” not “complete package,” unless every required component is identifiable. This wording makes a later targeted photo request far easier.</p>

        <h2 id="evidence">5. Attach every QC observation to an option row</h2>
        <p>Each image set, measurement or video should carry the variant state it actually supports. Add the QC record ID or file group, evidence date, visible label, associated seller or item ID and confirmed option fields. If size is not visible, the record does not acquire a size because the listing target has one. Keep listing claims and QC observations in separate columns.</p>
        <p>Then classify the relationship: exact option, partial option match, contextual only or conflict. Exact means all required variant fields agree and none conflict. Partial means the product source likely matches but at least one required option field is absent. Contextual means the evidence is useful only for general construction or coverage planning. Conflict means a required field disagrees.</p>
        <div className="check-block"><strong>EVIDENCE ATTACHMENT</strong><ul><li>QC record or file-group ID</li><li>QC date</li><li>Directly visible variant fields</li><li>Fields supplied by metadata rather than image</li><li>Fields not shown</li><li>Relationship state</li><li>Allowed comparison use</li></ul></div>
        <p>Never let one matching field erase another conflict. The same color does not rescue a different size. The same size does not rescue a different model. Likewise, one absent field should not be described as a conflict; absence creates uncertainty, while conflict requires disagreeing evidence.</p>

        <h2 id="conflicts">6. Resolve conflicts without rewriting the source</h2>
        <p>When listing text, order details and QC metadata disagree, preserve all three. Record the source and timestamp of each value, then ask which source represents the actual selection or received unit. An order record can show what was submitted; a photographed label can show what is on the received item; a current listing can show what the page states now. None should silently overwrite the others.</p>
        <p>Use a conflict note with four parts: field, values, evidence strength and next question. For example: “Size — order record L; photographed neck label M; direct conflict; ask the selected agent to confirm the unit linked to this order.” This is more actionable than “wrong size?” and avoids an authenticity claim based on a label.</p>
        <div className="check-block"><strong>CONFLICT STATES</strong><ul><li>Resolved: an authoritative transaction record explains the difference.</li><li>Open: values disagree and another source is needed.</li><li>Display-only: wording differs but stable codes agree.</li><li>Material: a required field remains inconsistent.</li><li>Historical: the listing changed after the evidence date.</li></ul></div>
        <p>If a listing changes, append a dated revision. Do not edit the earlier value to match the new page. The old record may still accurately explain historical QC evidence even though it no longer describes the current option menu.</p>

        <h2 id="comparison">7. Compare only fields the variant match permits</h2>
        <p>After identity is established, write the comparison question at field level. Measurements may be compared only across the same labelled size or clearly stated different sizes. Color evidence should be compared only after selected names and lighting limits are recorded. Included-parts completeness needs the exact bundle. Surface construction may remain useful across colors if the model is fixed, but the limitation must be explicit.</p>
        <div className="check-block"><strong>SAFE COMPARISON MATRIX</strong><ul><li>Exact option: product-specific observations may be compared with normal evidence limits.</li><li>Different size: compare construction; keep measurements size-specific.</li><li>Different color: compare structure; do not transfer color conclusions.</li><li>Different bundle: do not transfer completeness conclusions.</li><li>Unknown option: use only to generate inspection questions.</li><li>Required conflict: stop direct comparison.</li></ul></div>
        <p>End each comparison line with an evidence limit. “Both size L records show similar seam placement, but they are two historical units” is honest. “This item always has aligned seams” is not. The log exists to preserve what the available sample can and cannot support.</p>

        <h2 id="audit">8. Audit the record before an agent handoff</h2>
        <p>Review the header, every required option, the expected quantity calculation, evidence relationships and unresolved conflicts. A second reviewer should be able to identify the intended selection and see why each QC set is exact, partial, contextual or conflicting without opening a private chat history.</p>
        <div className="check-block"><strong>FINAL AUDIT</strong><ul><li>Original and normalized option text both retained</li><li>Color, size, quantity, bundle and model recorded separately</li><li>Required fields identified before comparison</li><li>Order quantity separated from units per option</li><li>QC values captured independently from listing claims</li><li>Missing and conflicting states not confused</li><li>Every observation has a permitted-use note</li><li>Private details excluded from shared material</li></ul></div>
        <p>A concise handoff note can now say: “Target is dark gray, size L, one unit. The available QC set matches item and color but does not show the size label, so its measurement is contextual only. Please confirm the received size label and provide the existing warehouse measurement for the exact unit.” The selected agent decides what warehouse action is available under its terms; the record simply makes the evidence gap precise.</p>
        <p>Variant logging is intentionally mechanical. That is its strength. It prevents a polished comparison from hiding a basic identity error and leaves a dated trail when listings, options or evidence change.</p>

        <Link className="article-cta" href="/articles/map-listing-identity-to-qc-record/">Map the source listing before adding variant details <span>→</span></Link>
      </div>
    </div>
  </EditorialPage>;
}
