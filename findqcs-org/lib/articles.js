const liveCatalog = {
  label: "Live catalog: all products",
  href: "https://www.cnfanssp.com/AllProducts/",
  note: "Used to verify current category routes, product-page structure and live listing fields.",
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
    sources: [liveCatalog],
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
    sources: [liveCatalog],
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
    sources: [],
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
    sources: [],
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
    sources: [],
    related: ["product-search-link-id-keyword", "before-you-buy-qc-guide", "what-qc-photos-can-prove"],
    cta: { eyebrow: "Plan the parcel", title: "Use the shipping guide before approving consolidation.", href: "/shipping", label: "Open shipping guide" },
  },
];

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug);
}
