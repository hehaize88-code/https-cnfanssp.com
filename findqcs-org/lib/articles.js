const liveCatalog = {
  label: "Live catalog: all products",
  href: "https://www.cnfanssp.com/AllProducts/",
  note: "Used to verify current category routes, product-page structure and live listing fields.",
};

const findQcSources = {
  whatIsQc: {
    label: "FindQC: What is QC?",
    href: "https://findqc.com/what-is-qc",
    note: "Official explanation of Standard and Premium QC, visible checks and the decisions available before international shipping.",
  },
  howItWorks: {
    label: "FindQC: How FindQC Works",
    href: "https://findqc.com/how-findqc-works",
    note: "Official documentation for link, keyword and image search, result grouping, ranking and the limits of similar-item matches.",
  },
  intelligence: {
    label: "FindQC: Product Intelligence",
    href: "https://findqc.com/product-intelligence",
    note: "Official description of Premium-only seller fulfillment, review, defect, return and historical shipping summaries.",
  },
  agentFlow: {
    label: "FindQC: How to Buy (Agent Flow)",
    href: "https://findqc.com/how-to-buy",
    note: "Official separation between FindQC research and the third-party agent that orders, warehouses, photographs and ships an item.",
  },
  terms: {
    label: "FindQC Terms of Service",
    href: "https://findqc.com/terms-of-service",
    note: "Official service boundaries: FindQC is an aggregation platform, not a seller, forwarder or authenticity certifier.",
  },
};

const checklistCta = {
  eyebrow: "Use the method",
  title: "Keep the seven-stage checklist beside your next warehouse photo set.",
  href: "/guides/qc-photo-checklist",
  label: "Open the QC checklist",
};

export const articles = [
  {
    slug: "before-you-buy-qc-guide",
    title: "The Practical QC Photo Checklist to Use Before You Ship",
    shortTitle: "Practical QC Photo Checklist",
    description: "A repeatable way to check product identity, condition, symmetry, construction, labels, measurements and packaging in warehouse photos.",
    excerpt: "Review warehouse photos in a fixed order, describe concerns precisely and avoid treating a limited image set as a quality guarantee.",
    category: "QC Basics",
    readTime: "9 min read",
    date: "26 August 2026",
    dateISO: "2026-08-26",
    heroImage: "/products/shoes-60.jpg",
    heroAlt: "Pair of grey shoes shown as an editorial inspection example",
    keywords: ["QC photo checklist", "warehouse photos", "product quality check", "before shipping"],
    intro: [
      "Warehouse photos are most useful when every image answers a specific question. They can reveal a wrong colour, visible damage, missing parts or a measurement mismatch while an item is still at the warehouse. They cannot prove everything about materials, authenticity or future durability.",
      "The practical solution is a fixed review sequence. Start with identity, move from the whole item to the smallest useful details, and finish with a written decision.",
    ],
    sections: [
      { id: "identity", title: "1. Confirm the item before judging quality", blocks: [
        { type: "p", text: "Open the source listing, selected options and warehouse record together. Confirm the product, colour, size, model, version and quantity. If the listing offers several bundles, check the exact option text rather than relying on the cover image." },
        { type: "list", title: "Identity checks", items: ["Product ID and destination match the intended item.", "Colour, size and version match the order.", "Included straps, cables, laces or other parts are present.", "Visible labels do not contradict the chosen option."] },
        { type: "callout", title: "Decision rule", text: "A correct-looking item in the wrong size or version is still the wrong order. Resolve identity before cosmetic details." },
      ] },
      { id: "whole-item", title: "2. Scan the whole shape from every supplied angle", blocks: [
        { type: "p", text: "Begin with the widest front, back, side and underside views. Look for stains, tears, crushed areas, obvious deformation and missing pieces. Compare corresponding areas such as two shoes, sleeves, pocket positions or opposite sides of a brim." },
        { type: "p", text: "Camera distance and soft materials can change apparent proportions. A concern is stronger when it remains visible across more than one angle." },
        { type: "figure", image: "/products/shoes-60.jpg", alt: "Shoes photographed from above for an overall shape comparison", caption: "Editorial reference: compare the pair and overall shape before zooming into stitching, labels or surface marks." },
      ] },
      { id: "construction", title: "3. Follow seams, edges, prints and hardware", blocks: [
        { type: "p", text: "Inspect seams, glued edges, print borders, embroidery, zips, buttons, eyelets and closures. Look for visible interruptions such as skipped stitching, a lifting edge, a loose component or a clearly displaced print." },
        { type: "p", text: "Do not enlarge a blurred image until compression artifacts look like defects. If a decisive area is not sharp enough, record it as not visible and ask for one focused close-up." },
      ] },
      { id: "measurements", title: "4. Read measurements as evidence, not decoration", blocks: [
        { type: "p", text: "Check where the ruler begins and ends, whether the item lies flat and whether fabric is stretched. Compare the warehouse measurement with both the seller chart and a similar item that already fits." },
        { type: "list", title: "Useful requests", items: ["Chest width measured straight between underarm seams.", "Insole removed and measured from heel to toe.", "Bag width shown with both ruler endpoints visible.", "Model or size label photographed square-on."] },
      ] },
      { id: "decision", title: "5. End with accept, investigate or resolve", blocks: [
        { type: "p", text: "Accept when the evidence answers your important questions. Investigate when one area is missing or ambiguous. Resolve through the order service when the visible item conflicts with the order or a non-negotiable requirement." },
        { type: "p", text: "Keep a short note with the product URL, selected option, concern, supporting image and date. This makes a follow-up photo easier to evaluate." },
      ] },
    ],
    sources: [findQcSources.whatIsQc, findQcSources.howItWorks, findQcSources.terms],
    related: ["product-search-link-id-keyword", "what-qc-photos-can-prove", "warehouse-measurement-guide"],
    cta: checklistCta,
  },
  {
    slug: "product-search-link-id-keyword",
    title: "Product Search by Link, ID or Keyword: Which Method Works Best?",
    shortTitle: "Link, ID or Keyword Search",
    description: "Choose the right product-search method, preserve exact identifiers and confirm that a result points to the intended live listing.",
    excerpt: "Start with the strongest identifier you have, then verify the route and option set before treating a result as a match.",
    category: "Product Discovery",
    readTime: "7 min read",
    date: "26 August 2026",
    dateISO: "2026-08-26",
    heroImage: "/products/tshirt.webp",
    heroAlt: "Folded shirt used as an editorial product-search example",
    keywords: ["product finder", "product link search", "item ID search", "product spreadsheet"],
    intro: [
      "Search quality depends on the strength of the clue entered into it. A complete product URL usually identifies one route. An item ID is compact and precise. A keyword is broad and useful for discovery, but it needs more filtering.",
      "FindQCS accepts familiar product terms and long IDs, maps curated results to exact catalog pages and sends broader queries to the live catalog search. The last step is always verification on the destination page.",
    ],
    sections: [
      { id: "link", title: "1. Use a complete link when you know the item", blocks: [
        { type: "p", text: "A full product link carries the domain, route and identifier together. It is the fastest way to return to a known listing. Paste the complete URL and confirm that the destination still describes the same product." },
        { type: "callout", title: "Best for", text: "Reopening a known candidate, sharing one exact product route or checking a curated card against the live destination." },
      ] },
      { id: "id", title: "2. Use an item ID when links are reformatted", blocks: [
        { type: "p", text: "An item ID helps when a messaging app removes tracking parameters or when several agent links wrap the same source. Keep the ID beside the product name, search it directly and compare the result with the original image and option set." },
        { type: "p", text: "IDs help with identity, not quality. A listing can change or disappear, so live details still need review." },
      ] },
      { id: "keyword", title: "3. Use keywords for exploration", blocks: [
        { type: "p", text: "Keywords work best when they combine a product type with one or two distinguishing clues such as a model phrase, material or colour. Very broad terms produce more candidates, while copied marketing titles may be noisy." },
        { type: "list", title: "Stronger patterns", items: ["Product type + model clue", "Category + material + colour", "Distinctive phrase from the source title", "Known catalog ID without punctuation"] },
      ] },
      { id: "verify", title: "4. Verify before saving the result", blocks: [
        { type: "p", text: "Check the product ID, title, first image and available variants on the destination. Similar thumbnails can represent different option sets. The correct result is the one whose identifiers and live details match your candidate." },
        { type: "table", headers: ["Signal", "Question"], rows: [["Route", "Is this the product page rather than a category page?"], ["Options", "Does the selected colour, size or version still exist?"], ["Image", "Does the first image match the saved candidate?"], ["Status", "Is the product currently available?"]] },
      ] },
      { id: "record", title: "5. Save a compact product record", blocks: [
        { type: "p", text: "Store the destination URL, product ID, chosen option and date checked together. A screenshot is only a secondary reference because it ages immediately. Searchable text makes later warehouse comparison more reliable." },
      ] },
    ],
    sources: [findQcSources.howItWorks, findQcSources.terms, liveCatalog],
    related: ["before-you-buy-qc-guide", "warehouse-measurement-guide", "shipping-cost-checklist"],
    cta: { eyebrow: "Search precisely", title: "Browse mapped finds and open the exact product route.", href: "/products", label: "Explore product finds" },
  },
  {
    slug: "what-qc-photos-can-prove",
    title: "What QC Photos Can Prove — and What They Cannot",
    shortTitle: "The Limits of QC Photos",
    description: "Separate visible observations from unsupported assumptions when evaluating warehouse product photos.",
    excerpt: "Use photo evidence fully without turning appearance into claims about materials, authenticity, safety or long-term performance.",
    category: "Evidence Literacy",
    readTime: "8 min read",
    date: "26 August 2026",
    dateISO: "2026-08-26",
    heroImage: "/products/electronics.webp",
    heroAlt: "Electronic accessory packaging used as an editorial QC evidence example",
    keywords: ["what QC photos show", "warehouse QC evidence", "product inspection photos"],
    intro: [
      "A photograph is evidence of what reached the camera from one angle at one moment. Many weak product decisions begin by stretching a visible clue into a much larger conclusion.",
      "A useful review names what is visible, what remains unknown and what extra evidence could change the decision.",
    ],
    sections: [
      { id: "visible", title: "1. Photos are strongest for identity and visible condition", blocks: [
        { type: "p", text: "Clear images can support observations about colour family, model labels, included pieces, major stains, scratches, tears, shape, print placement, seam direction and visible dimensions." },
        { type: "list", title: "Usually observable", items: ["Ordered colour, size label and model number", "Large marks or visible transport damage", "Missing included pieces", "Broad symmetry and hardware position", "Measurements with clear endpoints"] },
      ] },
      { id: "unknown", title: "2. Photos rarely establish hidden properties", blocks: [
        { type: "p", text: "Standard warehouse photos do not test fibre composition, battery health, electrical safety, waterproofing, internal construction, comfort, smell or long-term wear. A printed label shows what the label says; it is not an independent material test." },
        { type: "p", text: "Visual similarity also does not establish authenticity or authorization. Keep visual review and authenticity claims separate." },
      ] },
      { id: "camera", title: "3. Separate product issues from camera effects", blocks: [
        { type: "p", text: "Warehouse lighting can shift colour, wide lenses can stretch edges and plastic wrapping can create glare. Compression removes texture. Compare a suspicious area across frames and against neutral objects in the same scene." },
        { type: "figure", image: "/products/electronics.webp", alt: "Small electronic product in retail packaging", caption: "Packaging and model clues can be reviewed visually; performance and safety need different evidence." },
      ] },
      { id: "language", title: "4. Use evidence language that stays honest", blocks: [
        { type: "table", headers: ["Weak conclusion", "Stronger observation"], rows: [["It has no defects", "No large defect is visible in the supplied angles"], ["The material is premium", "The surface appears even in the available close-up"], ["The colour is exact", "The colour appears consistent across three images"], ["It will fit", "The shown measurement matches my reference garment"]] },
        { type: "p", text: "Precise wording tells you exactly which uncertainty remains and whether another photo, measurement or test would resolve it." },
      ] },
      { id: "request", title: "5. Request evidence tied to one decision", blocks: [
        { type: "p", text: "Ask for a close-up, angle or measurement that can change the outcome. One image of a heel seam, model label or ruler across the chest is more valuable than several repeated wide views." },
        { type: "callout", title: "Useful boundary", text: "When a required property cannot be tested, treat it as unresolved risk instead of forcing a visual conclusion." },
      ] },
    ],
    sources: [findQcSources.whatIsQc, findQcSources.howItWorks, findQcSources.terms],
    related: ["before-you-buy-qc-guide", "warehouse-measurement-guide", "shipping-cost-checklist"],
    cta: checklistCta,
  },
  {
    slug: "warehouse-measurement-guide",
    title: "How to Read Warehouse Measurements Without Fooling Yourself",
    shortTitle: "Warehouse Measurement Guide",
    description: "Check ruler endpoints, item position and measurement method before using warehouse photos to judge fit or dimensions.",
    excerpt: "A visible number is useful only when the ruler, endpoints and item position match the measurement you intend to compare.",
    category: "Fit & Sizing",
    readTime: "7 min read",
    date: "26 August 2026",
    dateISO: "2026-08-26",
    heroImage: "/products/hoodie.webp",
    heroAlt: "Hoodie used as an editorial garment measurement example",
    keywords: ["warehouse measurement photos", "QC sizing guide", "garment measurement"],
    intro: [
      "A ruler in a photograph creates an impression of precision. The measurement is comparable only when the item is positioned consistently, the endpoints are visible and the method matches your reference.",
      "Use warehouse measurements to reduce fit uncertainty, not to manufacture certainty down to the millimetre.",
    ],
    sections: [
      { id: "method", title: "1. Define the measurement before reading the number", blocks: [
        { type: "p", text: "Chest width, body circumference and pit-to-pit width are not interchangeable. Outsole length is not usable insole length. Write the exact endpoints and whether the item should be laid flat, stretched or measured around a curve." },
      ] },
      { id: "endpoints", title: "2. Check both ruler endpoints", blocks: [
        { type: "p", text: "Confirm that the tape begins at zero. Check that the far endpoint is visible and that the ruler follows a straight, appropriate line. A diagonal tape can add length; a bowed tape can hide it." },
        { type: "list", title: "Photo checks", items: ["Both endpoints appear in one frame.", "The item lies in the intended position.", "Tape markings are readable.", "The line matches the seller chart method."] },
      ] },
      { id: "reference", title: "3. Compare with an item you already own", blocks: [
        { type: "p", text: "Measure a similar garment, shoe or bag using the same endpoints and position. Your reference item often describes your fit preference better than a generic size letter." },
      ] },
      { id: "tolerance", title: "4. Allow a realistic tolerance", blocks: [
        { type: "p", text: "Soft garments shift when laid down, and manual placement changes a reading slightly. Decide which difference is harmless and which would affect fit. If the difference crosses your threshold, request a repeat photo." },
        { type: "callout", title: "Good request", text: "Please lay the garment flat and measure straight across the chest between the underarm seams, with both ends visible." },
      ] },
      { id: "record", title: "5. Save method and result together", blocks: [
        { type: "p", text: "Record the dimension name, endpoints, warehouse value, reference value and date. If you reorder, this is more reliable than remembering that a previous size was simply good or bad." },
      ] },
    ],
    sources: [findQcSources.whatIsQc, findQcSources.intelligence, findQcSources.agentFlow],
    related: ["before-you-buy-qc-guide", "what-qc-photos-can-prove", "product-search-link-id-keyword"],
    cta: checklistCta,
  },
  {
    slug: "shipping-cost-checklist",
    title: "International Shipping Cost Checklist: What to Estimate Before Checkout",
    shortTitle: "Shipping Cost Checklist",
    description: "Estimate parcel weight, volumetric weight, packaging, service fees and route constraints before approving international shipment.",
    excerpt: "Product price is only one part of delivered cost. Build a simple parcel estimate and keep uncertain fees visible before you commit.",
    category: "Shipping",
    readTime: "8 min read",
    date: "26 August 2026",
    dateISO: "2026-08-26",
    heroImage: "/products/jacket.webp",
    heroAlt: "Jacket used as an editorial parcel-planning example",
    keywords: ["international shipping estimate", "volumetric weight", "parcel cost checklist"],
    intro: [
      "A low product price can become a poor purchase when the item is heavy, bulky, fragile or limited to an expensive route. Delivered cost combines the live product amount with domestic delivery, service charges, warehouse work, packaging and international freight.",
      "You do not need a perfect quote at discovery. You need a transparent estimate that shows which inputs are known and which can still change.",
    ],
    sections: [
      { id: "layers", title: "1. Separate the cost layers", blocks: [
        { type: "list", title: "Common layers", items: ["Live product price and domestic delivery", "Purchasing or service charges", "Optional photos or packaging services", "International freight based on billable weight", "Taxes or route-specific charges where applicable"] },
        { type: "p", text: "Keep each line visible so an updated product price or packaging choice can be changed without rebuilding the estimate." },
      ] },
      { id: "weight", title: "2. Distinguish actual and volumetric weight", blocks: [
        { type: "p", text: "Some routes charge by the greater of actual weight and a volumetric calculation based on parcel dimensions. A lightweight but bulky box can cost more than its scale weight suggests. Check the route's current divisor and rounding rules." },
      ] },
      { id: "packaging", title: "3. Treat packaging as a cost and risk choice", blocks: [
        { type: "p", text: "Removing retail boxes may reduce volume but also reduce protection. Reinforcement, corner protection and waterproof wrapping add cost and sometimes weight. Choose what protects the product type." },
      ] },
      { id: "restrictions", title: "4. Check route eligibility before approval", blocks: [
        { type: "p", text: "Batteries, liquids, magnets, oversized parcels and other restricted categories may have fewer route options. Eligibility depends on destination and current carrier rules." },
        { type: "callout", title: "Planning rule", text: "Another buyer's historical quote is context, not a promise. Destination, weight, dimensions, service and date can change the result." },
      ] },
      { id: "range", title: "5. Use a range and recheck before payment", blocks: [
        { type: "p", text: "Create a low and high estimate based on plausible parcel weight and packaging. When warehouse dimensions and current route quotes become available, replace estimates with live values." },
      ] },
    ],
    sources: [findQcSources.intelligence, findQcSources.agentFlow, findQcSources.terms],
    related: ["product-search-link-id-keyword", "before-you-buy-qc-guide", "what-qc-photos-can-prove"],
    cta: { eyebrow: "Plan the parcel", title: "Use the shipping guide before approving consolidation.", href: "/shipping", label: "Open shipping guide" },
  },
];

const articleExtensions = {
  "before-you-buy-qc-guide": [
    { id: "same-versus-similar", title: "6. Separate the same item from a merely similar result", blocks: [
      { type: "p", text: "FindQC says its results can be grouped as likely same-item records and visually similar recommendations. That distinction matters. A similar result can teach you which angles or construction points deserve attention, but it cannot establish that your seller, version or production batch will be identical. Follow the marketplace link, compare the seller and variant, and treat any mismatch as a new candidate rather than evidence for the original one." },
      { type: "p", text: "When several historical records exist, look for a repeated pattern instead of selecting the cleanest photograph. Consistent alignment, labels and measurements across different records are more informative than one unusually good set. A repeated defect is a risk signal, not proof that your unit will have the same problem. The warehouse images for your own order remain the final visual checkpoint." },
    ] },
    { id: "premium-context", title: "7. Use Premium fields only when they are actually present", blocks: [
      { type: "p", text: "The official FindQC documentation distinguishes Standard QC, which is photo-only, from Premium QC, which may add video, measured weight, three-side dimensions, seller shipping time, domestic delivery, reviews, returns and defect history. Do not write down an estimated weight as if the warehouse measured it. Label every field as observed, reported, calculated or unknown." },
      { type: "p", text: "Premium information is most useful when it changes a decision. Dimensions can expose volumetric shipping risk; a video can show structure across angles; clustered return reasons may justify choosing another listing. Sample size and data freshness still matter. FindQC explicitly warns that third-party records may be incomplete or incorrect, so patterns should support judgment rather than replace it." },
    ] },
    { id: "photo-request", title: "8. Write a photo request that can be answered", blocks: [
      { type: "p", text: "A useful request names one area, one angle and one purpose. Ask for the left heel seam square-on, the size label without glare, or the insole beside a ruler with both endpoints visible. Avoid requests such as ‘check quality’ because they leave the photographer guessing and rarely create comparable evidence." },
      { type: "p", text: "Before paying for extra images, check whether another supplied frame already answers the question. If colour is the concern, request neutral lighting or a comparison with a neutral warehouse object; if symmetry is the concern, ask for a centered camera position. Save the new frame beside the original concern so the decision trail remains understandable later." },
    ] },
    { id: "final-record", title: "9. Keep a decision record until delivery", blocks: [
      { type: "p", text: "Save the source link, selected options, order reference, important warehouse images, measurements, packaging request and the decision date. This record is useful if a support conversation begins after dispatch, and it prevents memory from turning an uncertain image into a confident claim. Keep screenshots of time-sensitive listing details, but retain the searchable URL and item identifier too." },
      { type: "callout", title: "A defensible conclusion", text: "The item matches the ordered option; no major issue is visible in the supplied angles; the critical measurement is within my tolerance; one hidden property remains unverified; and the packaging request fits the product. That is stronger than simply saying the QC is good." },
    ] },
  ],
  "product-search-link-id-keyword": [
    { id: "image-search", title: "6. Use image search when the visual clue is stronger than the title", blocks: [
      { type: "p", text: "FindQC documents image search as a route for dead links, unreliable titles and look-alike discovery. Use a clean crop that contains the product rather than a collage, chat screenshot or busy room. Run more than one crop when a distinctive sole, print or hardware detail carries more identity than the whole silhouette." },
      { type: "p", text: "Visual similarity is not seller identity. After image search, confirm the marketplace, item identifier, option set and current listing. A result can be valuable as a comparison even when it is not the same item, but it should be labelled ‘similar reference’ in your notes. This prevents a convincing thumbnail from silently becoming false provenance." },
    ] },
    { id: "ranking", title: "7. Understand what a ranked result does and does not mean", blocks: [
      { type: "p", text: "FindQC says it standardizes records, reduces duplicates, groups likely same items and similar recommendations, then prioritizes match confidence, recency and completeness. A high result therefore means the system considers it useful for the query; it does not mean the product is the best quality, the seller is approved or the listing is authentic." },
      { type: "p", text: "Open several leading results when the purchase matters. Compare the identifiers and identify which fields caused one record to be more useful: a newer inspection, a complete photo set or Premium context. If the route changes after you click, return to the original source and record the final live URL rather than relying on a search-result position that can change." },
    ] },
    { id: "query-ladder", title: "8. Use a query ladder instead of repeating broad searches", blocks: [
      { type: "list", title: "A practical sequence", items: ["Exact marketplace URL when available", "Exact item ID copied without punctuation", "Distinctive title phrase plus product type", "Clean reference image or detail crop", "Broader category and material terms for alternatives"] },
      { type: "p", text: "Stop broadening once you find a verifiable match. If a keyword query is noisy, change one clue at a time so you know what improved it. Preserve model codes and seller-specific phrases; remove promotional adjectives that appear across unrelated listings. For multilingual titles, test the original marketplace wording before translating it." },
    ] },
    { id: "search-log", title: "9. Save enough information to reproduce the search", blocks: [
      { type: "p", text: "A small search log should include the input, method, date, FindQC result, marketplace destination and your identity check. It lets you revisit a candidate after a link changes and prevents duplicate work when several people are researching together. Record why a candidate was rejected as carefully as why another was saved." },
      { type: "callout", title: "Minimum proof of a match", text: "The marketplace route and item identifier agree, the option set contains the intended version, the first image is consistent, and the listing is live at the time checked. Anything less should remain a candidate, not a confirmed item." },
    ] },
  ],
  "what-qc-photos-can-prove": [
    { id: "standard-premium", title: "6. Match your conclusion to the QC tier", blocks: [
      { type: "p", text: "Standard QC answers a visual question: what does the photographed item look like? Premium QC can add risk and cost context through video, weight, dimensions, fulfillment history, reviews, defects and returns. The extra fields expand the evidence; they do not turn a historical record into a laboratory test or a guarantee for the next unit." },
      { type: "p", text: "Before quoting any figure, check that the item really has Premium QC and that the field is populated. Product Intelligence summaries are not available for every item. Missing data should remain missing. Substituting a seller estimate or another buyer’s parcel number makes the page look complete while making the decision less reliable." },
    ] },
    { id: "pattern-reading", title: "7. Read repeated records as patterns, not promises", blocks: [
      { type: "p", text: "Several independent records can reveal recurring placement, packaging or sizing issues. Count how often the issue appears, note whether the photographs show the same version, and look at record dates. One complaint among many clean records carries a different weight from the same defect appearing repeatedly, but neither pattern proves what will arrive in your order." },
      { type: "p", text: "Review summaries can compress useful themes, yet the original context still matters. A return can reflect fit preference, shipping damage, a wrong option or a manufacturing defect. Treat the stated reason and visible evidence separately. When the reason is unavailable, do not invent one from the return count." },
    ] },
    { id: "colour-texture", title: "8. Be especially careful with colour and texture", blocks: [
      { type: "p", text: "White balance, warehouse lamps, screen settings and compression can all shift colour. Compare the same area across several frames and look for neutral references in the scene. If a precise shade is a deal-breaker, ask for a new photograph in neutral light. Even then, describe the colour as it appears rather than calling it exact." },
      { type: "p", text: "Texture can be partly visible when light crosses a surface, and video can show how a material folds or reflects. Neither reveals fibre composition, chemical treatment, comfort or long-term durability. Product labels and seller descriptions can be recorded as claims, but they remain different from independent testing." },
    ] },
    { id: "decision-threshold", title: "9. Set the threshold before reviewing the images", blocks: [
      { type: "p", text: "Decide which issues are unacceptable, which need clarification and which are cosmetic tolerance. This reduces the temptation to change standards after becoming attached to a purchase. Use measurable thresholds where possible: a dimension range, a required included part, a centered print boundary or the absence of visible surface damage." },
      { type: "callout", title: "Evidence-first wording", text: "Write ‘not visible,’ ‘appears consistent,’ ‘conflicts with the selected option’ or ‘requires a closer image.’ These phrases preserve uncertainty and point directly to the next action: approve, request evidence, exchange, change size or return through the responsible third party." },
    ] },
  ],
  "warehouse-measurement-guide": [
    { id: "intelligence-boundary", title: "6. Know where FindQC measurements come from", blocks: [
      { type: "p", text: "FindQC states that QC photos, weight, dimensions and defect records generally originate with third-party agents. Product Intelligence summarizes activity for Premium QC items when enough information is available. This provenance matters: the figure is useful historical evidence, but FindQC did not measure your parcel and does not promise that the next unit or packaging configuration will match it." },
      { type: "p", text: "Record whether a dimension describes the product, retail box or outbound parcel. Three-side parcel dimensions help with freight planning, while garment or insole measurements help with fit. Mixing these fields creates precise-looking nonsense. When the label is unclear, keep the value out of the calculation until the source is confirmed." },
    ] },
    { id: "seller-time", title: "7. Read seller and domestic delivery time separately", blocks: [
      { type: "p", text: "The official Product Intelligence guide separates seller ship time, from order to dispatch, and domestic delivery, from dispatch to warehouse. A delay in one stage does not describe the other. Compare several records and dates before calling a seller consistently fast or slow, especially when holidays, stock shortages or preorder items could affect a small sample." },
      { type: "p", text: "Use fulfillment history as a planning signal. It can help when a deadline is real or when two similar listings differ mainly in reliability. It cannot guarantee the arrival date of your order. The purchasing agent and carrier remain responsible for the live process and should provide the current status." },
    ] },
    { id: "defects-returns", title: "8. Interpret defect and return signals with context", blocks: [
      { type: "p", text: "A defect history is strongest when reasons repeat and refer to comparable versions. Separate visible construction issues from wrong options, fit complaints and buyer preference. Return frequency without a denominator, timeframe or reason is difficult to interpret, so avoid turning an isolated number into a quality score." },
      { type: "p", text: "Use a recurring issue to create a targeted checkpoint for your own warehouse images. If several records mention heel glue, request a sharp heel view; if sizing appears inconsistent, request the relevant measurement. This converts historical information into a practical inspection step without claiming the same outcome in advance." },
    ] },
    { id: "decision-matrix", title: "9. Combine signals in a small decision matrix", blocks: [
      { type: "table", headers: ["Signal", "Useful interpretation", "Do not assume"], rows: [["Seller ship time", "Planning reliability across records", "A guaranteed dispatch date"], ["Dimensions", "Possible volumetric freight exposure", "Your final packed parcel size"], ["Defect themes", "Areas to inspect closely", "Every unit has the defect"], ["Reviews", "Recurring buyer observations", "Independent laboratory proof"]] },
      { type: "p", text: "Give the most weight to evidence tied to your exact listing and order. Use older or similar-item records to decide what to inspect, not to replace the inspection. When two signals conflict, preserve the conflict in your notes and seek a current source rather than averaging them into false certainty." },
    ] },
  ],
  "shipping-cost-checklist": [
    { id: "agent-boundary", title: "6. Keep FindQC research separate from the agent workflow", blocks: [
      { type: "p", text: "FindQC’s official buying guide says the third-party agent places the order, receives it, takes standard warehouse photos, assists with eligible exchanges or returns, consolidates packaging and arranges international shipping. FindQC helps research QC records and risk context; it does not take payment, hold the parcel or choose a route for you." },
      { type: "p", text: "This separation makes each checkpoint clearer. Verify the product and historical evidence during research, confirm options with the agent before purchase, inspect your unit after warehouse check-in, and use the agent’s live route quote before payment. A number copied from Product Intelligence is context, not the final freight invoice." },
    ] },
    { id: "volumetric-scenarios", title: "7. Model more than one packaging scenario", blocks: [
      { type: "p", text: "Build a compact, protected and box-retained scenario when packaging can materially change dimensions. Use the current carrier formula and rounding rule for each eligible route. The greater of actual and volumetric weight may become the billable weight, but divisors and restrictions differ, so the site should never present one universal formula as a live quote." },
      { type: "p", text: "Removing a retail box can reduce volume, yet it can also reduce protection or resale usefulness. Consolidation may save repeated base charges while creating a larger parcel. The right choice depends on the products, destination and current routes. Ask the agent for live measurements after packing when the difference affects the decision." },
    ] },
    { id: "route-comparison", title: "8. Compare routes on more than the headline price", blocks: [
      { type: "list", title: "Record for each eligible line", items: ["Quoted amount and billable weight", "Tracking coverage and estimated range", "Size, category and battery restrictions", "Insurance or compensation terms", "Customs and tax handling stated by the provider", "Date and currency of the quote"] },
      { type: "p", text: "Delivery examples from other buyers are useful context but not promises. Compare similar destinations, parcel profiles and dates, and give more weight to consistent ranges than an unusually fast result. Save the route name and terms visible when you paid because services and limits can change." },
    ] },
    { id: "approval-gate", title: "9. Use a final approval gate before international dispatch", blocks: [
      { type: "p", text: "Confirm that every item matches the order, decision-relevant QC concerns are resolved, measurements fall within tolerance, fragile parts have appropriate protection, prohibited or restricted contents use an eligible route, and the live total remains within the budget. International dispatch usually makes corrections slower and more expensive." },
      { type: "callout", title: "Keep the evidence trail", text: "Save the listing and options, warehouse QC images, measured weight and dimensions, packaging request, route quote, payment record and tracking number. If a problem occurs, this sequence shows what was known at each decision point without implying that FindQC handled the transaction." },
    ] },
  ],
};

const articleConclusions = {
  "before-you-buy-qc-guide": { id: "worked-example", title: "10. Worked example: turn a vague concern into a decision", blocks: [
    { type: "p", text: "Suppose a shoe listing has several historical QC sets. One pair appears uneven at the heel, while the remaining sets look consistent. First confirm whether those records share the same marketplace item and version. Then mark heel shape as a checkpoint rather than declaring the listing defective. When your order reaches the warehouse, compare both heels in a centered rear view, check whether packing pressure explains the shape, and request one focused image only if the wide view remains ambiguous." },
    { type: "p", text: "Now add the commercial limits. Confirm the ordered size label and any measured insole length, note the agent’s return window, and avoid approving shipment while a deal-breaker remains unresolved. If the follow-up frame shows a clear mismatch, use the third-party order service to request the appropriate remedy. If it resolves the concern, save both images and the reason for approval. This method uses FindQC to identify risk, the live listing to confirm identity, and your warehouse evidence to decide." },
  ] },
  "product-search-link-id-keyword": { id: "worked-search", title: "10. Worked example: recover an item from incomplete clues", blocks: [
    { type: "p", text: "Imagine that you have a cropped product image and an old chat message, but the shared link no longer opens. Start by checking the message for a marketplace domain or numeric identifier. Search the intact ID before changing anything. If that fails, search a distinctive phrase from the title with the product type. Use image search with a clean whole-item crop, then a second crop of a distinctive detail. Keep each result in a short candidate table rather than opening dozens of tabs without labels." },
    { type: "p", text: "For every candidate, compare the marketplace, seller, product identifier, options and first image. Mark it as exact, likely, similar or rejected, and write the reason. Exact means the identifiers and live route agree. Likely means strong visual and textual agreement but one identity field is missing. Similar means it is useful for discovery or QC comparison but should not inherit claims from the original item. This vocabulary prevents the search process from becoming more confident than its evidence." },
    { type: "p", text: "If no exact result appears, decide whether a similar alternative satisfies the real need. Compare its own live listing and QC history from the beginning. Do not splice the photos of one seller into the title, price or return terms of another. Search success is not finding a familiar picture; it is reaching a reproducible live route whose identity and options can be checked again before ordering." },
    { type: "p", text: "Recheck saved candidates immediately before purchase. Listings can be removed, variants can disappear, sellers can change images and prices can move. The saved product ID helps recover the route, but it does not freeze the listing. A final identity pass should take less than a minute and protects the rest of the QC workflow from being built around stale information." },
  ] },
  "what-qc-photos-can-prove": { id: "evidence-audit", title: "10. Audit the claim before publishing or sharing it", blocks: [
    { type: "p", text: "Before repeating a conclusion, underline the exact pixels or fields that support it. If the statement is ‘the ordered size label is visible,’ identify the frame and label. If the statement is ‘the parcel may be volumetric,’ identify the measured dimensions and the current route rule. If no direct support exists, rewrite the sentence as a question, a seller claim or an unresolved risk. This quick audit is especially important when a screenshot will be shared without the surrounding page." },
    { type: "p", text: "Separate four evidence levels: your order’s current warehouse record, historical same-item records, similar-item references and promotional listing material. The first level normally deserves the most weight for deciding what to ship. Historical records can expose patterns; similar items can teach inspection technique; promotional images describe what is offered. None should silently substitute for another. Label editorial images on an article so readers do not mistake them for FindQC records or a buyer’s inspection set." },
    { type: "p", text: "Finally, check whether the claim survives a camera explanation. Perspective can alter symmetry, glare can resemble a scratch, wrapping can deform soft goods and white balance can shift colour. Look for the issue in another angle, ask for a targeted frame when the decision justifies it, and stop when the property is not photographically testable. Honest uncertainty is useful because it tells the buyer which risk remains after the QC review." },
    { type: "p", text: "When writing a customer-review article, quote the reviewer’s experience as one person’s outcome and identify the product version, purchase date and evidence available when possible. Compare recurring themes across several independent reviews, include negative and neutral outcomes, and disclose when a review comes from a platform-controlled wall or an authorized partner. A review becomes persuasive through traceable context, not enthusiastic adjectives. Never convert a user’s satisfaction into proof of authenticity, safety or universal quality." },
  ] },
  "warehouse-measurement-guide": { id: "signal-workflow", title: "10. A repeatable workflow for Product Intelligence signals", blocks: [
    { type: "p", text: "Begin by recording the exact item route and whether the page shows Standard or Premium QC. If an Insights Report exists, note its visible sample context and date rather than copying only the headline. Read seller dispatch and domestic delivery as separate stages. Next, list recurring review, defect and return themes with the language used by the source. Finish with weight and dimensions, clearly identifying whether they describe an item, retail package or historical international parcel." },
    { type: "p", text: "Turn each signal into a decision question. A slow seller history asks whether your deadline can tolerate another delay. Repeated sizing comments ask for a warehouse measurement using defined endpoints. Large dimensions ask for a live packed estimate before route approval. A recurring cosmetic issue asks for a specific close-up. Signals become useful when they change what you verify; a dashboard copied without an action is merely decoration." },
    { type: "p", text: "Compare alternatives using the same columns and the same tolerance. Do not reward one listing for having more data while treating missing fields on another as zero risk. Write ‘unknown’ where evidence is absent. If a small sample conflicts with a larger set of current order evidence, explain the conflict. Product Intelligence is best used to prioritize questions, not to manufacture a single universal score." },
    { type: "p", text: "After your own item arrives, replace historical expectations with current evidence wherever possible. Save the actual warehouse time, measured dimensions, visible condition and resolution. Over repeated purchases, this creates a personal reference set tied to products and methods you understand. It is more useful than remembering only that a seller felt fast or that an item seemed true to size." },
    { type: "p", text: "For fit decisions, measure a garment or shoe you already use with the same endpoints shown in the warehouse frame. Compare widths with widths and internal shoe length with internal shoe length. Allow for soft fabric placement and manual measurement variation, then set a tolerance based on how the reference actually fits. Size letters alone are weak comparison points because charts and grading methods vary by listing. If the photographed ruler or endpoint is unclear, request a repeat rather than reading precision into a blurred mark." },
    { type: "p", text: "Publish the checked date beside any platform feature description. FindQC can change which fields appear, how reports are labeled or which records qualify for Premium summaries. A dated observation and direct primary-source link lets readers verify the current interface. It also keeps an evergreen guide honest when a tool evolves after publication." },
  ] },
  "shipping-cost-checklist": { id: "cost-worked-example", title: "10. Worked example: estimate without publishing a fake quote", blocks: [
    { type: "p", text: "Suppose you are considering a light jacket and boxed shoes. During discovery, record product prices and any stated domestic delivery, but leave service fees and international freight as separate unknowns. Historical Premium dimensions may show that the shoe box creates volume risk. Create two scenarios: retain the box with reinforcement, or remove it and use protective packing. Do not attach a final dollar figure until a current eligible route and its rules are known." },
    { type: "p", text: "When both items reach the warehouse, replace estimated weights with the agent’s measurements and confirm each item through its own QC set. Ask for packed dimensions for the scenario you intend to use. Apply the current route’s volumetric divisor, minimum increment and size limits exactly as shown by the provider. Compare the result with actual weight and use whichever billable rule the route states. Keep currency and quote date visible." },
    { type: "p", text: "The cheapest headline may not be the best total decision. Check tracking, expected range, category restrictions, compensation terms, tax handling and the value of the packaging removed. If the difference between routes is small, consistency or protection may matter more. If the parcel is near a size threshold, allow room for measurement and packing variation rather than budgeting to the last unit." },
    { type: "p", text: "Approve only after the source options, warehouse condition, packing plan and live route quote agree. Save the evidence as one record. This approach gives readers a real method without inventing a universal shipping price, because freight depends on destination, date, packed dimensions, billable weight, restrictions and the third-party service selected." },
    { type: "p", text: "Taxes and customs handling also need current, destination-specific verification. Avoid promising that a line is tax-free, seizure-proof or guaranteed to clear. Record exactly what the provider states, who collects any tax, what value is declared under the applicable process and which documents must accompany the parcel. Regulations and carrier practices can change. For an SEO guide, a clear checklist and links to current official terms are more useful than copying an old buyer’s total and presenting it as today’s rate." },
    { type: "p", text: "Customer shipping reviews can strengthen an article when their context is preserved. Group experiences by destination, parcel type, route and dispatch month; show the range rather than highlighting only the fastest delivery. Identify whether tracking, packaging and support were part of the review. Remove personal order details and do not call a small convenience sample representative. The purpose is to expose decision factors and recurring problems, not to manufacture a universal delivery promise." },
  ] },
};

for (const article of articles) {
  article.sections.push(...(articleExtensions[article.slug] || []));
  if (articleConclusions[article.slug]) article.sections.push(articleConclusions[article.slug]);
}

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug);
}
