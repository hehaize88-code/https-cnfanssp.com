import type { Article } from "./data";

// Each guide owns one decision; related links lead to the next unresolved check.
export const relatedArticles: Record<string, string[]> = {
  "weidian-taobao-1688-qc-photos": ["findqc-no-results-missing-qc-photos", "qc-variant-mismatch"],
  "findqc-image-search-product-match": ["weidian-taobao-1688-qc-photos", "qc-image-distortion"],
  "findqc-no-results-missing-qc-photos": ["weidian-taobao-1688-qc-photos", "missing-qc-photo-angles"],
  "sneaker-qc-checklist": ["qc-measurement-photo-geometry", "qc-lighting-vs-defect"],
  "how-findqc-works-2026": ["weidian-taobao-1688-qc-photos", "findqc-image-search-product-match"],
  "findqc-real-buyer-reviews-analysis": ["qc-photo-sample-bias", "can-you-trust-old-qc-photos"],
  "can-you-trust-old-qc-photos": ["qc-batch-drift", "qc-variant-mismatch"],
  "qc-variant-mismatch": ["weidian-taobao-1688-qc-photos", "check-a-listing-before-order"],
  "qc-batch-drift": ["can-you-trust-old-qc-photos", "qc-photo-sample-bias"],
  "qc-photo-sample-bias": ["findqc-real-buyer-reviews-analysis", "qc-batch-drift"],
  "blurry-qc-photos": ["missing-qc-photo-angles", "findqc-no-results-missing-qc-photos"],
  "qc-lighting-vs-defect": ["sneaker-qc-checklist", "blurry-qc-photos"],
  "qc-image-distortion": ["findqc-image-search-product-match", "qc-measurement-photo-geometry"],
  "missing-qc-photo-angles": ["sneaker-qc-checklist", "how-to-read-qc-photos"],
  "qc-measurement-photo-geometry": ["sneaker-qc-checklist", "qc-image-distortion"],
  "how-to-read-qc-photos": ["sneaker-qc-checklist", "missing-qc-photo-angles"],
  "qc-finder-vs-spreadsheet": ["weidian-taobao-1688-qc-photos", "check-a-listing-before-order"],
  "check-a-listing-before-order": ["qc-variant-mismatch", "how-to-read-qc-photos"],
};

export const articleImprovements: Record<string, Article["sections"][number]> = {
  "how-findqc-works-2026": {
    heading: "Choose the shortest route to a useful QC record",
    paragraphs: [
      "If you have a Weidian, Taobao or 1688 product URL, begin with link search and verify the identifier in the returned record. If you have only a photograph, use image search to discover candidates and then rebuild the source identity. If you have only a name, use a specific keyword and category to narrow the results. When a correct link returns nothing, follow the missing-results checks rather than assuming a similar product's album belongs to your item.",
      "The workflow explained here concerns the independent FindQC platform. The search box on this guide website opens a product catalog by keyword; it does not upload images or retrieve warehouse albums. Once you have a relevant historical album, use it to plan the angles and measurements needed for your own received unit. This keeps discovery, historical comparison and a current shipping decision as three distinct steps."
    ]
  },
  "findqc-real-buyer-reviews-analysis": {
    heading: "Read reviews alongside the product and photo record",
    paragraphs: [
      "Start with three checks for any buyer comment: does it concern the same product identifier, does it describe the variation you are considering, and does it contain a specific observation you can compare with a photo or measurement? A brief positive verdict may reflect that buyer's priorities rather than yours. If the comment does not identify a size, version or inspection detail, treat it as general context and keep your own unresolved questions visible.",
      "This article analyzes how to interpret public review signals; it does not present a new hands-on test, a representative customer survey or a guarantee of seller performance. No review count or favorable comment replaces current-unit inspection. Use a repeated, specific concern to choose an additional photo request, and distinguish several independent observations from multiple copies of the same story."
    ]
  },
  "can-you-trust-old-qc-photos": {
    heading: "Use old photos for preparation, then recheck the current unit",
    paragraphs: [
      "Old QC photos can help you identify labels, useful measurement points and angles worth requesting. Their value depends on matching the listing and variation, knowing the date where possible and understanding what the images actually show. They cannot confirm present inventory or the condition of a later order. If the album is undated, keep it undated in your notes; the day you found it is not the day the item was inspected.",
      "Photo age and batch drift are separate questions. Age concerns how far the evidence is removed from the present decision. Batch drift concerns whether construction or specification changed between groups of items. A recent album can show another batch, and an older one can still illustrate a useful inspection angle. Use this guide for evidence age and the batch-drift guide for comparing production differences."
    ]
  },
  "qc-variant-mismatch": {
    heading: "Resolve identity before approving construction",
    paragraphs: [
      "Compare your saved option text with the warehouse order record, both size labels where relevant, color or version codes and included pieces. A matching marketplace ID identifies the listing but may not identify the selected variation within it. If the labels conflict or the option is unclear, pause the approval decision and request a readable label or a wider view tied to your order. Checking neat stitching on the wrong version does not resolve the mismatch."
    ]
  },
  "qc-batch-drift": {
    heading: "Compare batches only after matching the variation",
    paragraphs: [
      "A visible difference between two albums is a reason to investigate, not automatic proof of batch drift. First rule out different variants, camera angles, lighting and measurement methods. Then compare repeatable construction details and any available dates or version labels. If you cannot connect each album to a defined product and variation, describe the difference without assigning a production cause. Use current photos of your received unit to decide whether the specific difference matters."
    ]
  },
  "qc-photo-sample-bias": {
    heading: "Count independent observations instead of thumbnails",
    paragraphs: [
      "Before relying on several positive albums, check whether they show different units or repeated copies of the same photo set. Record the date, seller, variant and source where available. An attractive collection of images does not reveal how many unphotographed or unpublished units exist. Use historical examples to identify checks worth performing, while keeping claims about defect rates or consistency out of the decision unless the underlying sample can actually support them."
    ]
  },
  "blurry-qc-photos": {
    heading: "Request the detail the original file cannot show",
    paragraphs: [
      "Open the original image at a sensible scale before deciding it is unusable. If a critical label, seam or endpoint remains unreadable, ask for a focused replacement showing that area and enough surrounding context to identify it. Enlarging or sharpening a compressed image cannot recover a missing measurement or prove the shape of a stitch. Keep the uncertain observation unresolved until an adequate view of the exact unit arrives."
    ]
  },
  "qc-lighting-vs-defect": {
    heading: "Test a suspected mark under a second view",
    paragraphs: [
      "A possible stain or color mismatch deserves a controlled comparison: an evenly lit full-item view and a clear close-up from another angle. Check whether the same color cast affects neutral objects in the frame and whether the mark remains in the same physical location. These checks can narrow the explanation without proving it. Keep option labels and a physical description from the service separate from your interpretation of the photograph."
    ]
  },
  "qc-image-distortion": {
    heading: "Align the camera before comparing the shape",
    paragraphs: [
      "When one side looks larger, compare the item's distance and angle to the camera before treating the difference as a defect. Ask for a centered view with both sides at similar distances on a level surface. For flexible products, also check how they are laid out or filled. If the difference persists under comparable conditions, document it precisely; if perspective remains uncontrolled, keep the shape judgment provisional."
    ]
  },
  "missing-qc-photo-angles": {
    heading: "Ask for the view that could change your decision",
    paragraphs: [
      "List the unresolved question first, then choose the angle that answers it. A heel-alignment concern needs a centered rear view; an unreadable size needs the label in focus; an uncertain seam needs a close-up with enough context to locate it. State that the photo must show your received unit. Repeating a front view adds little when the missing evidence is underneath, inside or at a measurement endpoint."
    ]
  },
  "qc-measurement-photo-geometry": {
    heading: "Define the measurement before reading the number",
    paragraphs: [
      "Name the dimension and its endpoints before interpreting a tape in a QC photo. A garment's flat chest width is not its circumference, and a shoe's outsole length is not its usable internal length. Ask for both endpoints, a straight tape and a camera view that makes placement clear. Compare the result with a reference measured by the same method, and keep any remaining fit uncertainty separate from the photographed number."
    ]
  },
  "how-to-read-qc-photos": {
    heading: "Follow a five-step QC photo check",
    paragraphs: [
      "First match the product and selected variation. Next review the full-item views for shape and missing pieces. Then check useful labels and measurements with visible endpoints. Inspect seams, edges and surfaces using clear close-ups, and finish by requesting any missing view that could change your decision. This order prevents a detailed cosmetic comparison from distracting you from a wrong size, version or bundle.",
      "Write observations in a form that another person can verify: which item, which area, which photo and what remains unclear. Avoid reducing the assessment to a generic approval word. A sneaker inspection benefits from its own angle and size checklist, while measurement disputes need a consistent setup. The related guides below address those narrower tasks without repeating the whole inspection workflow."
    ]
  },
  "qc-finder-vs-spreadsheet": {
    heading: "Use the spreadsheet for discovery and QC for inspection evidence",
    paragraphs: [
      "A product spreadsheet helps you organize candidates, categories and destination links. A QC finder helps you locate historical photo records for a product. Neither automatically proves that a listing is current or that your future unit will match a reference. Start with the spreadsheet to choose a candidate, open the exact listing, preserve its marketplace identifier and selected option, and then look for relevant QC evidence.",
      "When a sheet row and a QC result point to different identifiers, keep them as separate records until the relationship is verified. A shared product name or thumbnail is insufficient. If the listing is correct but the QC search is empty, use the no-results guide and plan current-unit checks; do not replace missing evidence with an attractive album from a different source."
    ]
  },
  "check-a-listing-before-order": {
    heading: "Save the selection that your later QC must match",
    paragraphs: [
      "Before ordering, save the original listing URL, marketplace identifier, seller, selected option text, size information, included pieces and current terms. Reopen the live destination just before acting because a saved screenshot may be outdated. The record gives you a concrete comparison when warehouse photos arrive: the question is whether the received unit matches the selection, not whether it resembles a product you remember browsing.",
      "If two options translate into similar names, keep the original option wording alongside your translation. Clarify a consequential ambiguity before submitting an order. A later photo cannot undo an accidental option choice or guarantee that an exchange is available. The short identity record is most valuable when it prevents that mistake at the start."
    ]
  }
};
