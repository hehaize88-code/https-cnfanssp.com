const cta = { eyebrow: "Browse deliberately", title: "Open the category map and verify each candidate on its destination page.", href: "/products", label: "Explore mapped finds" };

export const mappedIndexArticle = {
  slug: "mapped-findqc-product-index-without-recommendation",
  title: "How to Use a Mapped FindQC Product Index Without Treating It as a Recommendation",
  shortTitle: "Use a Mapped Product Index Carefully",
  description: "Use a mapped FindQC product index to narrow candidates while keeping inclusion, live listing status, quality and suitability as separate questions.",
  excerpt: "A product index is a navigation layer, not a best-products list. Follow a category route, verify the exact destination and keep unknowns visible before shortlisting.",
  category: "Product Index Navigation",
  readTime: "11 min read",
  date: "1 September 2026",
  dateISO: "2026-09-01",
  heroImage: "/products/tshirt.webp",
  heroAlt: "Folded shirt used as an editorial example of a mapped product find",
  keywords: ["FindQC product index", "mapped QC finds", "product category routes", "independent product index"],
  intro: [
    "A mapped product index solves a navigation problem: it turns a large catalogue into named categories and repeatable routes. It does not solve the buying decision. Inclusion in an index does not mean an item is best, current, authentic, defect-free or suitable for a particular buyer.",
    "Use the index to reduce search space, then verify every candidate on its exact destination page. Keep listing claims, reference images and unknowns separate. FindQC may provide QC research context; the buyer-selected agent, not FindQC or this index, executes purchase, warehouse, return, packing and international shipping steps.",
  ],
  sections: [
    { id: "purpose", title: "1. Define what the index is allowed to do", blocks: [
      { type: "p", text: "Treat the index as a map. A category label helps you enter the right part of the catalogue; a product card preserves a title, image, identifier and destination route. Those fields make discovery faster, but they do not independently verify the seller's current offer or the photographed unit. The card is the beginning of a check, not the end of one." },
      { type: "p", text: "Before browsing, write the decision you need to make at category level: compare several shoe shapes, find a hoodie with a particular construction, or locate accessories within a size limit. A precise purpose prevents a visually attractive card from becoming an accidental recommendation. If the index cannot answer the purpose, move to the live category rather than stretching the card's meaning." },
      { type: "callout", title: "Index boundary", text: "Mapped means organised and reachable. It does not mean endorsed, tested, available, authentic or guaranteed." },
    ] },
    { id: "route", title: "2. Start with the category route, not a “best” ranking", blocks: [
      { type: "p", text: "Choose the narrowest useful category and read its scope. Shoes, jerseys, electronics and accessories require different checks, so a route is useful when it reduces irrelevant results. Do not assume the first card is the strongest option. Ordering can reflect editorial grouping, update sequence or layout needs rather than quality." },
      { type: "p", text: "Scan enough cards to understand the range before opening one. Note visible product type, approximate reference price, broad shape and any identifier. Exclude obvious mismatches using category requirements, not popularity. A three-item working set is usually easier to verify than a long list collected without reasons." },
      { type: "list", title: "A useful first pass", items: ["Confirm the category matches the intended use.", "Reject obvious size, shape or compatibility mismatches.", "Keep two or three meaningfully different candidates.", "Record why each candidate survived.", "Leave price and availability for the live-page check."] },
    ] },
    { id: "card", title: "3. Read each product card as a set of clues", blocks: [
      { type: "p", text: "A title is a label, not a specification sheet. A thumbnail is a reference image, not proof of the delivered colour or condition. A displayed USD amount is an approximate reference unless the destination confirms a current price. An item identifier helps with continuity, but a listing can still change, redirect or become unavailable." },
      { type: "p", text: "Keep these fields separate in your notes. If the title suggests a material that the destination does not state, record the material as unverified. If the image shows an accessory that is not named in the selected option, do not assume it is included. The discipline is simple: card fields generate verification questions; they do not answer questions outside their visible scope." },
      { type: "table", headers: ["Card field", "Useful clue", "Must still be verified"], rows: [["Title", "Product family and search terms", "Exact model, composition and option"], ["Thumbnail", "Shape and visual identity", "Current image set and received condition"], ["Reference USD", "Rough shortlist position", "Live price, currency and option price"], ["Mapped link", "Destination route", "Redirect, availability and exact listing identity"]] },
    ] },
    { id: "destination", title: "4. Verify the exact destination before saving a candidate", blocks: [
      { type: "p", text: "Open the mapped link and wait for the final destination. Compare domain, route, product or source ID, seller context, title, first image and option set with the card. A redirect is not automatically wrong, but it requires a new identity check. If the final page is a category, login wall or unrelated replacement, the card is not currently a verified product route." },
      { type: "p", text: "Check whether the needed colour, size, version and quantity are selectable now. Record the verification date. Save the final URL rather than a temporary redirect. If the page cannot be reached, mark the candidate stale or unverified instead of inventing its availability from the old thumbnail." },
      { type: "list", title: "Destination identity gate", items: ["Final URL and product ID are recorded.", "Seller or store context does not conflict.", "Title and primary image describe the same product family.", "Required option exists and its label is captured.", "Current price state is separated from the index reference.", "Unavailable or replaced routes are not shortlisted as live."] },
    ] },
    { id: "evidence", title: "5. Keep three evidence layers separate", blocks: [
      { type: "p", text: "Layer one is what the index states: category, mapped title, thumbnail, reference amount and route. Layer two is what the live destination states: seller, current title, selected option, current amount and availability. Layer three is independent QC research: dated photos or records that may show a particular sample. Mixing layers produces confident but unsupported conclusions." },
      { type: "p", text: "A reference image can help confirm that the route was mapped to the intended family. It cannot prove the quality of the current unit. Historical QC can reveal angles worth checking, but it does not guarantee the next batch. The live page can state a material or size, but the statement is not a laboratory result. Label each claim by layer so its limit remains visible." },
      { type: "callout", title: "Research boundary", text: "FindQC supplies research evidence where available. The selected agent handles the actual order and warehouse unit; the mapped index does neither." },
    ] },
    { id: "shortlist", title: "6. Build a shortlist without unsupported rankings", blocks: [
      { type: "p", text: "Compare candidates against the same category-level requirements. Use neutral columns such as exact option available, required dimension stated, relevant QC context present, live price checked and critical unknowns. Do not add a quality score when the evidence does not measure quality. “Unknown” is a valid result and often the most important difference between candidates." },
      { type: "p", text: "Avoid calling one item best merely because its card is more complete. A complete card may reflect better indexing rather than a better product. Eliminate candidates that fail a required condition, then keep the remaining trade-offs explicit. If none satisfies the route's purpose, return to the category rather than lowering a non-negotiable requirement." },
      { type: "table", headers: ["Candidate", "Verified strength", "Material unknown", "Next action"], rows: [["A", "Exact option and live route", "One key measurement absent", "Seek current measurement"], ["B", "Clear dimensions", "Mapped link redirects", "Recheck identity"], ["C", "Current listing and QC context", "Reference price differs", "Use live option price"]] },
    ] },
    { id: "refresh", title: "7. Recheck a saved find before acting", blocks: [
      { type: "p", text: "A mapped route can age. Reopen saved candidates before checkout and again when a material option or price changes. Compare the final URL, source ID, seller context, options and current listing status with your saved record. Append changes rather than overwriting the earlier verification; the history explains why a candidate entered the shortlist." },
      { type: "p", text: "If a link is stale, report the mismatch with the mapped URL, final destination, date and observed conflict. Do not claim fraud or poor quality from a redirect alone. A responsible index corrects navigation evidence; it cannot decide why a seller changed a listing. Choose another verified candidate while the route is being reviewed." },
      { type: "list", title: "Recheck triggers", items: ["Immediately before purchase", "After a saved link redirects", "When a required option disappears", "When the title or thumbnail changes materially", "When the reference price and live option price diverge", "Before using historical QC for a current shortlist"] },
    ] },
    { id: "audit", title: "8. Audit the category-to-product route", blocks: [
      { type: "p", text: "A defensible route can be repeated by another person. They should be able to start at the category, open the same card, reach the final destination, identify the required option and see which facts remain unknown. Remove candidates whose route cannot be reproduced. Keep the reasons for inclusion and exclusion short and field-based." },
      { type: "p", text: "The final decision statement should be modest: this candidate remains because its exact destination and required option were verified on September 1, its reference image matches the product family, and two decision-relevant fields still need current evidence. That is more useful than a badge saying recommended. It tells the buyer what the index contributed and what the later purchase and warehouse process must still establish." },
      { type: "list", title: "Final route audit", items: ["Category purpose is explicit.", "No card order is treated as a quality ranking.", "Exact destination and option were verified.", "Index, listing and QC layers remain separate.", "Unknowns are preserved.", "Reference USD is not called a live quote.", "FindQC and agent responsibilities are correctly separated.", "The saved route has a verification date."] },
    ] },
  ],
  sources: [],
  related: ["product-search-link-id-keyword", "what-qc-photos-can-prove", "before-you-buy-qc-guide"],
  cta,
};

