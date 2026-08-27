import { researchedArticles } from "./research-articles";

export const MAIN_SITE = "https://www.cnfanssp.com";
export const PLANNED_ORIGIN = "https://findqcs.shop";

export const categories = [
  { name: "Shoes", href: `${MAIN_SITE}/shoes/`, note: "Sneakers, runners and casual pairs", mark: "SH" },
  { name: "Hoodies", href: `${MAIN_SITE}/hoodies-sweaters/`, note: "Hoodies, sweaters and layers", mark: "HD" },
  { name: "T-Shirts", href: `${MAIN_SITE}/t-shirts/`, note: "Tees and everyday tops", mark: "TS" },
  { name: "Jackets", href: `${MAIN_SITE}/jackets/`, note: "Outerwear and seasonal layers", mark: "JK" },
  { name: "Pants & Shorts", href: `${MAIN_SITE}/pants-shorts/`, note: "Bottoms, cargos and shorts", mark: "PS" },
  { name: "Headwear", href: `${MAIN_SITE}/headwear/`, note: "Caps, beanies and hats", mark: "HW" },
  { name: "Accessories", href: `${MAIN_SITE}/accessories/`, note: "Bags, belts and small goods", mark: "AC" },
  { name: "Jerseys", href: `${MAIN_SITE}/Jersey/`, note: "Football and sport jerseys", mark: "JR" },
  { name: "Electronics", href: `${MAIN_SITE}/electronics/`, note: "Small electronics and tech", mark: "EL" },
  { name: "Other Stuff", href: `${MAIN_SITE}/other-stuff/`, note: "Home, lifestyle and mixed finds", mark: "OS" },
];

export const products = [
  {
    name: "Autry Shoes",
    category: "Shoes",
    price: "$68.87",
    sourcePrice: "¥500",
    weight: "638 g",
    href: `${MAIN_SITE}/AllProducts/4276.html`,
    image: `${MAIN_SITE}/uploads/allimg/20251225/1-251225144612B9.gif`,
    alt: "Autry Shoes product image",
    id: "7645681448",
  },
  {
    name: "Represent Hoodie",
    category: "Hoodies",
    price: "$17.22",
    sourcePrice: "¥125",
    weight: "595 g",
    href: `${MAIN_SITE}/AllProducts/5214.html`,
    image: `${MAIN_SITE}/uploads/allimg/20260120/1-26012014115XI.webp`,
    alt: "Represent Hoodie product image",
    id: "7667202437",
  },
  {
    name: "Coach Bags",
    category: "Accessories",
    price: "$79.89",
    sourcePrice: "¥580",
    weight: "795 g",
    href: `${MAIN_SITE}/AllProducts/5.html`,
    image: `${MAIN_SITE}/uploads/allimg/20251016/1-2510161541131J.jpg`,
    alt: "Coach bags product image",
    id: "7574876754",
  },
  {
    name: "AMIRI MA-1 Sneakers",
    category: "Shoes",
    price: "$53.44",
    sourcePrice: "¥388",
    weight: "755 g",
    href: `${MAIN_SITE}/AllProducts/3842.html`,
    image: `${MAIN_SITE}/uploads/allimg/20251219/1-2512191533513J.webp`,
    alt: "AMIRI MA-1 Sneakers product image",
    id: "7638942248",
  },
];

export type Article = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  updated: string;
  sources?: { label: string; href: string }[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const articles: Article[] = [
  ...researchedArticles.map((article) => ({
    ...article,
    sources: article.sources ? article.sources.map((source) => ({ ...source })) : undefined,
    sections: article.sections.map((section) => ({
      ...section,
      paragraphs: [...section.paragraphs],
    })),
  })),
  {
    slug: "how-to-read-qc-photos",
    title: "How to Read QC Photos Before You Ship",
    description: "A practical, photo-by-photo method for checking shape, measurements, stitching, color and visible defects before international shipping.",
    readTime: "13 min read",
    updated: "August 27, 2026",
    sections: [
      {
        heading: "Start with the job QC photos can actually do",
        paragraphs: [
          "Warehouse quality-control photos are evidence of one received unit at one moment in time. They are useful because they replace a seller's polished listing image with a record of the item that reached the warehouse. They do not prove authenticity, material composition, long-term durability or how a garment will feel when worn. Treat them as an inspection checkpoint rather than a guarantee.",
          "A good review begins by separating visible facts from assumptions. You can confirm whether the color, size tag, printed design, major panels and included pieces match the order. You may be able to see loose threads, glue marks, dents, stains or uneven construction. You cannot reliably judge softness, odor, exact color under daylight or the strength of a seam hidden inside the product. That boundary keeps the decision realistic.",
        ],
      },
      {
        heading: "Verify the listing before inspecting details",
        paragraphs: [
          "Open the destination listing and compare its title, selected style, color and size with the warehouse photos. Many disappointing orders are not subtle quality failures; they are the wrong variation or a misunderstood option. Check the product identifier and selection notes where available, then compare the broad silhouette before zooming into logos or stitching.",
          "Look for the complete set of expected views: front, back, both sides, top or opening, sole or base, labels and packaging. A missing angle is not automatically suspicious, but it means the decision contains more uncertainty. If the side that matters most is not visible, request a focused additional image instead of guessing from an oblique photograph.",
        ],
        bullets: ["Correct product and variation", "Correct size label", "Expected accessories or removable parts", "No obvious transit damage", "Enough angles for a decision"],
      },
      {
        heading: "Use geometry before tiny details",
        paragraphs: [
          "The fastest useful check is symmetry. On shoes, compare the height of the heel counters, the curve of the toe boxes, the position of eyelets and the alignment of the outsoles. On garments, compare shoulder lines, sleeve lengths, pockets and the distance from prints to seams. On bags, compare handle placement, panel proportions, flap alignment and the way the base sits on a flat surface.",
          "Perspective can create false differences. A camera positioned closer to one side makes that side appear larger, and a soft item can collapse differently between shots. Use straight-on images for proportion checks and reserve angled shots for depth, texture and edge construction. If a possible flaw appears in only one distorted angle, look for confirmation in another image before rejecting the item.",
        ],
      },
      {
        heading: "Read measurements as evidence, not promises",
        paragraphs: [
          "A size label is only a label. A tape measurement is more useful, but it still needs context. Check where the tape begins, whether the fabric is flat, whether the item is stretched and whether the measurement is half-width or full circumference. Compare like with like: chest width against a garment you own, insole length against a measured insole, and bag dimensions against a familiar object.",
          "Small differences can come from camera angle, fabric tension and the thickness of the tape. Decide your acceptable range before reviewing the photo. A two-centimeter difference may be irrelevant for an oversized sweatshirt and decisive for fitted trousers. The question is not whether the number is perfectly identical to a chart; it is whether the received unit is likely to fit the intended use.",
        ],
      },
      {
        heading: "Inspect construction in a repeatable order",
        paragraphs: [
          "Move from large surfaces to edges and then to stress points. Scan for stains, discoloration and dents. Follow long seams for waviness or missed stitches. Check corners, zip ends, strap attachments, button holes and sole joins because these areas receive repeated force. Finally inspect decorative elements such as embroidery, prints and hardware alignment.",
          "Lighting matters. Warehouse LEDs can shift cream toward yellow and dark navy toward black. Compare color across several photographs and against a neutral object in the frame rather than relying on one image. Reflective glue, coated leather and glossy hardware may show highlights that resemble marks. A close-up taken from a second angle is usually more informative than an immediate return decision.",
        ],
        bullets: ["Surface condition", "Seam continuity", "Edge finishing", "Stress-point construction", "Print or embroidery alignment", "Hardware and closure function"],
      },
      {
        heading: "Avoid the five most common photo-reading mistakes",
        paragraphs: [
          "The first mistake is judging color from one frame. Automatic white balance, fluorescent lighting and a nearby colored surface can all change the appearance of fabric or leather. Look across the full set and use labels, paper or a ruler as a rough neutral reference. The second mistake is treating camera distortion as asymmetry. Wide lenses exaggerate whichever edge is nearest, so compare straight-on views before deciding that a toe, pocket or printed element is misplaced.",
          "The third mistake is zooming so far into a small mark that its scale disappears. Always return to the full image and compare the mark with the ruler, hand or packaging. The fourth is confusing a removable condition with structural damage: dust, a loose thread or protective film is different from a split seam, deep scratch or deformed panel. The fifth is accepting a crowd verdict without checking whether the commenters reviewed the same listing, variation and batch. Outside opinions help only when they are attached to the right evidence.",
        ],
      },
      {
        heading: "Set tolerances before the photos arrive",
        paragraphs: [
          "A useful inspection standard is personal and specific. Decide which differences are cosmetic, which affect function and which make the item unsuitable. You might accept a tiny glue trace on a shoe but reject a short insole measurement; accept an interior loose thread but reject a crooked exterior print; accept compressed packaging but reject a bent rigid bag frame. Writing these thresholds first reduces the tendency to approve everything because shipping feels urgent or reject everything because a close-up looks alarming.",
          "Prioritize defects by consequence. Functional issues interfere with wear or use, structural issues may worsen under stress, and cosmetic issues affect appearance without necessarily changing performance. Location matters too: a small mark on an outsole is different from the same mark on a light-colored front panel. If a photo cannot show whether an issue crosses your threshold, ask one answerable question. A well-framed extra image is more valuable than several generic photos, especially when return windows or warehouse storage time are limited.",
          "Keep the standard consistent across comparable items. Changing the tolerance after seeing a desirable product makes the review less reliable. A short written rule—acceptable, needs one more image, or return-level—keeps the final decision connected to evidence rather than excitement.",
        ],
      },
      {
        heading: "Make a decision with an uncertainty record",
        paragraphs: [
          "Write down the two or three observations that affect your choice. Separate confirmed defects from unverified concerns. For example: 'left pocket sits lower in the straight-on photo' is an observation; 'the whole garment is badly made' is a conclusion that may not follow. This discipline is especially useful when asking a community for a second opinion because other reviewers can respond to the same evidence.",
          "Approve when the received unit matches the selected listing, key dimensions fall within your range and no visible issue exceeds your tolerance. Request another photo when one missing angle could change the answer. Seek a return or exchange when the variation is wrong, a measurement is outside your limit, a structural defect is clearly visible or important included pieces are absent. Recheck current listing terms before acting because availability and return conditions can change.",
        ],
      },
    ],
  },
  {
    slug: "qc-finder-vs-spreadsheet",
    title: "QC Finder vs Spreadsheet: Use the Right Tool",
    description: "Understand what each discovery method is good at, where it fails, and how to combine search, listing data and warehouse photos.",
    readTime: "12 min read",
    updated: "August 27, 2026",
    sections: [
      {
        heading: "Two tools, two different questions",
        paragraphs: [
          "A product spreadsheet helps you discover listings. A QC finder helps you look for visual evidence connected with an item or similar item. Those jobs overlap, but they are not interchangeable. A well-organized spreadsheet is faster for browsing categories, comparing approximate prices and building a shortlist. A QC record is more useful after you have a specific link or product identifier and want to understand what arrived at a warehouse.",
          "Confusion begins when either tool is treated as verification. A listing appearing in a spreadsheet does not prove current stock, seller reliability or the quality of the next unit. An attractive set of QC photos does not prove that every batch, color or size will look identical. Both are research inputs. The final check still needs to happen against the current destination listing and the photos for the exact received unit.",
        ],
      },
      {
        heading: "Where spreadsheets are strongest",
        paragraphs: [
          "Spreadsheets reduce discovery time. Categories, prices, product names and direct listing destinations can be reviewed in a consistent layout without opening dozens of community posts. They are especially useful at the beginning of a search when the desired item is broad: a neutral hoodie, a small shoulder bag or a pair of low-top sneakers within a budget.",
          "Their weakness is freshness. Seller pages change, variations disappear, prices move and old links can redirect. A spreadsheet that was accurate last month still needs a destination check today. The most useful directories make that behavior obvious, preserve the source product identifier and send the user to a current listing instead of presenting an old snapshot as a live offer.",
        ],
      },
      {
        heading: "Where QC search is strongest",
        paragraphs: [
          "QC search is strongest when the query is specific. A source URL, marketplace identifier or distinctive product name can surface images that show real warehouse lighting, packaging and construction. Several records can reveal recurring details, different colorways or changes between batches. They also help a buyer prepare a personal checklist before the exact order reaches the warehouse.",
          "The main risk is mistaken identity. Similar-looking products may come from different sellers, batches or listings. Image search can return visually related items rather than the exact source. Always compare the product identifier and destination URL where available. If those do not match, use the photos as general reference only and do not attach their quality outcome to another listing.",
        ],
      },
      {
        heading: "A practical combined workflow",
        paragraphs: [
          "Begin with a category or name search to create a small shortlist. Open each destination and confirm that the page still exists, the selected variation is available and the displayed details match the card you used to discover it. Keep the original product identifier. Then search for QC references using the most precise input available, starting with the source link or identifier and using the product name only as a fallback.",
          "Compare several records if possible, but prioritize the exact unit photos supplied after purchase. Use older QC images to learn what angles, measurements and construction points deserve attention. When your own images arrive, repeat the same checklist without assuming that the result will match a previous buyer's unit.",
        ],
        bullets: ["Discover by category", "Confirm the live destination", "Save the product identifier", "Review related QC as reference", "Inspect the exact received unit", "Decide using your own tolerance"],
      },
      {
        heading: "What a trustworthy directory should show",
        paragraphs: [
          "A useful directory keeps the first image, product name and destination aligned. It makes approximate currency conversion clear, distinguishes listed weight from measured parcel weight, and does not call a product verified merely because a link returns a successful response. It also lets users reach category pages and exact product pages without dead buttons or hidden redirects.",
          "Editorial guidance should explain limitations, update dates and the difference between research and a guarantee. Search-friendly writing matters, but it should support the tool rather than replace it. A page that claims to be a QC database yet offers only decorative cards leaves the user's main task unfinished.",
        ],
      },
      {
        heading: "Check freshness without relying on a badge",
        paragraphs: [
          "An update date is helpful, but it is not enough on its own. A directory can publish a recent timestamp while linking to an older listing snapshot. Test freshness at the destination: does the product page still open, does the primary image identify the same item, are the expected variations visible and does the selected option show the same price range? A redirect to a search result or home page should be treated as a broken product path even when the server returns a successful status.",
          "Freshness also varies by field. A product name and image may remain stable while price, stock, weight notes or seller terms change. Good research keeps those claims separate rather than labeling the entire card verified. When you save a shortlist, include the date you last opened the final destination. That small note tells you which items need another check and prevents an old comparison from quietly becoming a current recommendation.",
        ],
      },
      {
        heading: "Evaluate evidence quality, not just evidence quantity",
        paragraphs: [
          "Ten photographs are not automatically better than three. A useful set covers different decision points: identity, overall shape, measurements, surfaces and construction. Ten near-identical front angles may leave the sole, label or closure completely unknown. When comparing QC records, rank them by relevance to your question and by confidence that they belong to the same product identity. Exact identifiers and matching variations carry more weight than a visual resemblance found through a broad keyword.",
          "Community comments should be read the same way. Look for reviewers who point to a visible feature, measurement or mismatch rather than a one-word approval. A specific observation can be checked against the image; a reputation claim usually cannot. Save the observations that matter and discard the vote count. The aim is not to collect enough positive opinions to feel safe. It is to reduce uncertainty around the exact attributes that would change your own decision.",
        ],
      },
      {
        heading: "Build a shortlist that remains auditable",
        paragraphs: [
          "Whether you use a finder or a spreadsheet, keep enough context to reconstruct the decision. Save the final destination URL, product identifier, selected variation, observed price and the date checked. Add a brief reason for keeping the item, such as a matching measurement chart or useful warehouse references. This is more durable than saving a product image alone, which can become detached from its seller and variation after a few days of browsing.",
          "Remove entries that redirect, lose their identifying image or no longer offer the intended selection. A smaller clean shortlist is more valuable than hundreds of unreviewed links. If sharing the list, distinguish direct observations from personal preferences. Another user can verify that a page showed a certain measurement, but only the buyer can decide whether that measurement suits the intended fit. Auditability turns a collection of links into a repeatable research process.",
        ],
      },
      {
        heading: "Choose based on the stage of your decision",
        paragraphs: [
          "Use a spreadsheet or category directory when you are exploring. Use precise QC search when you already have a link or identifier. Use the warehouse photos for your exact order when making the ship, exchange or return decision. This sequence prevents a common mistake: applying evidence from a similar product to the wrong listing.",
          "No single interface removes uncertainty. The advantage comes from moving between discovery, destination verification and exact-unit inspection without losing the product identity along the way. That is why every product card on this site opens its corresponding destination rather than an unrelated search page.",
        ],
      },
    ],
  },
  {
    slug: "check-a-listing-before-order",
    title: "The 10-Minute Listing Check Before You Order",
    description: "A fast pre-order routine for confirming the product identity, variation, price, weight notes, destination and evidence you will need later.",
    readTime: "11 min read",
    updated: "August 27, 2026",
    sections: [
      {
        heading: "Why the pre-order check saves more than a later QC review",
        paragraphs: [
          "QC photos can reveal what reached the warehouse, but they cannot repair a poor buying decision. If the wrong variation was selected, the size chart was misunderstood or the listing never promised an included accessory, the photos may simply confirm what the order already specified. Ten focused minutes before ordering can prevent days of return discussion and avoid paying international shipping for an unsuitable item.",
          "The goal is not to investigate every seller exhaustively. It is to preserve product identity and remove avoidable ambiguity. You should be able to answer four questions: what exact listing is this, which variation do I want, what evidence will I need when it arrives, and which details could make me reject it? Record those answers while the page is in front of you.",
        ],
      },
      {
        heading: "Confirm identity before price",
        paragraphs: [
          "Start with the destination URL and product identifier. Compare the listing title and primary image with the directory card. If a product name is generic, use the image, seller name and variation list together. Avoid relying on a shortened redirect when the final product page can be opened and saved.",
          "Then review the selected color, size, style and bundle. Some listing prices represent the least expensive variation rather than the option shown in the hero image. The relevant price is the amount for the exact selection you intend to order. Currency conversions on discovery pages should be treated as approximate because exchange rates and platform calculations change.",
        ],
      },
      {
        heading: "Read size information with a familiar reference",
        paragraphs: [
          "Do not choose solely from the letters S, M, L or XL. Compare the listing's measurements with an item you already own and like. Measure that reference using the same method shown on the chart: flat chest width, garment length, waist width or insole length. Write down the two dimensions that matter most so you can request matching warehouse photos later.",
          "Allow for normal manufacturing variation and the way you intend to wear the item. A fitted shirt and an oversized hoodie require different tolerances. If the chart is missing, inconsistent or shown only for another style, treat the uncertainty as part of the cost rather than assuming a familiar regional size standard applies.",
        ],
      },
      {
        heading: "Estimate the shipping consequence",
        paragraphs: [
          "A listed item weight is a planning clue, not a final parcel quote. Packaging, shoe boxes, protective material and volumetric calculation can change the billed shipment. Still, comparing the listed weight across shortlisted items helps identify which choices are likely to dominate a haul. A heavy low-value item may become less attractive once international shipping is considered.",
          "Decide whether original packaging is important before ordering. Removing a box may reduce volume but can also reduce protection or eliminate packaging you wanted to keep. The correct choice depends on the item and route. Record the preference so it is not forgotten during parcel submission.",
        ],
      },
      {
        heading: "Define the QC request in advance",
        paragraphs: [
          "Turn the listing into a short inspection brief. For shoes, that may include insole length, heel alignment and sole condition. For a hoodie, it may include chest width, garment length, print placement and stains. For a bag, it may include base width, handle alignment, corners and closure hardware. The brief should focus on visible questions that could change your decision.",
          "Avoid vague requests such as 'check quality.' A warehouse photograph can answer a specific visual question more reliably than a broad judgment. Ask for a straight-on view or tape placement when geometry matters, and a close-up when the concern is stitching, hardware or a mark.",
        ],
        bullets: ["Final product URL", "Product or marketplace ID", "Chosen variation", "Two key measurements", "Expected included pieces", "Three QC priority areas", "Packaging preference"],
      },
      {
        heading: "Compare the listing with one realistic alternative",
        paragraphs: [
          "A shortlist becomes more useful when every candidate is judged against the same criteria. Compare the exact selected price, key dimensions, listed weight, included pieces and the clarity of the product page. A cheaper option may carry more sizing uncertainty or less useful photography. A higher-priced option is not automatically better, but it may be easier to assess if the listing clearly separates variations and provides consistent measurement information.",
          "Keep the comparison small. One realistic alternative is enough to reveal whether you are choosing the item because it fits the brief or because it was the first appealing result. If neither option provides the information required for a confident order, continue searching instead of inventing certainty. The ability to walk away from an ambiguous listing is one of the most effective pre-order quality controls.",
        ],
      },
      {
        heading: "Review terms and timing at the final destination",
        paragraphs: [
          "Before submitting an order, reopen the final page and check current availability, seller notes, domestic delivery estimate and any return information presented by the purchasing service. These details can change independently of the product card that helped you discover the item. Take particular care with customized goods, clearance variations or listings that require confirmation, because the available remedies may differ from a standard in-stock item.",
          "Plan enough time to inspect the unit while action is still possible. A perfect checklist is not useful if photos are reviewed after a return window closes or warehouse deadlines create unnecessary pressure. Keep the order date, arrival notice and inspection decision together. This is operational information rather than proof of quality, but it protects the chance to act when the evidence shows a wrong variation, missing component or unacceptable defect.",
        ],
      },
      {
        heading: "Run a final sixty-second contradiction check",
        paragraphs: [
          "Before paying, scan the title, selected option, main image, price and size information one last time. Look specifically for contradictions: a title describing one material while the details describe another, a size chart for a different style, an option name that does not match the displayed image, or a low headline price that changes after selection. Contradictions do not always mean the listing is unusable, but they create questions that should be resolved before the order is submitted.",
          "Confirm that the destination saved in your notes is still the page in the checkout flow. If the listing changed or the chosen variation disappeared, pause and repeat the relevant part of the check. The final minute is deliberately simple. It catches accidental selection changes and outdated tabs—the mundane errors that careful QC photography cannot correct later.",
          "Do not let a countdown, low-stock message or temporary discount replace this check. Those signals may be genuine, but they do not change whether the chosen item meets the brief. A missed promotion is usually cheaper than ordering the wrong variation and paying domestic handling, return costs or international freight.",
        ],
      },
      {
        heading: "Save a small decision record",
        paragraphs: [
          "Keep the destination, selected variation and inspection brief together. A screenshot can help if the page changes, but the live listing should still be reopened before action because availability and terms may have moved. Do not treat an old screenshot as proof of current stock or policy.",
          "When the item reaches the warehouse, compare the exact unit with this record. If everything essential matches, the approval decision becomes simple. If it does not, you can describe the mismatch precisely. The value of the routine is not paperwork; it is continuity from discovery to inspection without losing the identity of the item you intended to buy.",
        ],
      },
    ],
  },
];

export const faqs = [
  { q: "What is a QC finder?", a: "A QC finder helps locate warehouse inspection photos or related visual references using a product link, marketplace identifier, name or image. The photos are evidence for research, not a guarantee for another unit." },
  { q: "Does FindQC sell products?", a: "No. FindQC is an independent product-discovery and inspection guide. Product and category buttons open the corresponding pages on the destination catalog." },
  { q: "Are the USD prices exact?", a: "No. USD amounts are approximate conversions of the source price observed during review. Always confirm the current destination price, selected variation and platform conversion before ordering." },
  { q: "Does a working link mean the product is verified?", a: "No. A successful destination only confirms that the page opened during review. It does not verify seller quality, stock, legality, authenticity or the condition of a future unit." },
  { q: "What should I check first in QC photos?", a: "Confirm the exact item, variation and size, then check overall geometry, measurements, surface condition, seams, stress points and included pieces. Request another angle when a missing view could change your decision." },
  { q: "Why do product cards open another catalog?", a: "The destination catalog contains the live product record. Keeping each card tied to its corresponding final page prevents image and product mismatches and lets you confirm current details at the source." },
];
