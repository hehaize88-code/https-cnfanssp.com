export type GrowthArticleMeta = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  read: string;
  published: string;
  updatedLabel: string;
};

export type GrowthArticleBody = {
  callout: [string, string];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  sources: { label: string }[];
};

export const growthArticles: GrowthArticleMeta[] = [
  {
    slug: "superbuy-detailed-photos-guide",
    eyebrow: "Detailed photos",
    title: "Superbuy Detailed Photos: When Standard QC Photos Are Not Enough",
    description: "Learn when an extra warehouse photo or ruler measurement can resolve a real buying decision, how to write a precise request, and what an image still cannot prove.",
    read: "12 min read",
    published: "2026-09-12",
    updatedLabel: "Published 12 September 2026",
  },
  {
    slug: "superbuy-qc-photos-shoes-checklist",
    eyebrow: "Shoe QC",
    title: "Superbuy QC Photos for Shoes: Size, Symmetry, Soles and Defects",
    description: "A shoe-specific warehouse review method for checking the pair, measurements, construction and visible damage before parcel submission.",
    read: "13 min read",
    published: "2026-09-12",
    updatedLabel: "Published 12 September 2026",
  },
  {
    slug: "superbuy-clothing-qc-measurements-guide",
    eyebrow: "Clothing QC",
    title: "Superbuy Clothing QC Guide: Measurements, Prints and Stitching",
    description: "Use warehouse evidence to compare garment size, shape, graphics, seams and included pieces without treating a photo as proof of hidden quality.",
    read: "13 min read",
    published: "2026-09-12",
    updatedLabel: "Published 12 September 2026",
  },
  {
    slug: "superbuy-link-checker-marketplace-listings",
    eyebrow: "Link verification",
    title: "Superbuy Link Checker: Verify Taobao, Tmall, JD and Weidian Listings",
    description: "A repeatable way to check a marketplace link, imported options, seller details and current destination before using a Superbuy spreadsheet row.",
    read: "12 min read",
    published: "2026-09-12",
    updatedLabel: "Published 12 September 2026",
  },
  {
    slug: "superbuy-1688-vs-taobao-qc-aftersales",
    eyebrow: "Marketplace differences",
    title: "Superbuy 1688 vs Taobao QC: Inspection and After-Sales Differences",
    description: "Compare how listing structure, wholesale thresholds, inspection limits and seller after-sales terms change the evidence a buyer should preserve.",
    read: "13 min read",
    published: "2026-09-12",
    updatedLabel: "Published 12 September 2026",
  },
  {
    slug: "superbuy-volumetric-weight-calculator-examples",
    eyebrow: "Chargeable weight",
    title: "Superbuy Volumetric Weight Calculator: Formula and Parcel Examples",
    description: "Calculate dimensional weight, compare it with scale weight and test realistic packaging scenarios before choosing an eligible shipping line.",
    read: "12 min read",
    published: "2026-09-12",
    updatedLabel: "Published 12 September 2026",
  },
  {
    slug: "superbuy-rehearsal-packaging-vs-shipping-expert",
    eyebrow: "Parcel services",
    title: "Superbuy Rehearsal Packaging vs Shipping Expert: Which Reduces Uncertainty?",
    description: "Understand the different planning problems solved by packed-parcel measurement and route advice, then choose only the service your parcel actually needs.",
    read: "12 min read",
    published: "2026-09-12",
    updatedLabel: "Published 12 September 2026",
  },
  {
    slug: "superbuy-restricted-items-shipping-lines",
    eyebrow: "Line eligibility",
    title: "Superbuy Restricted Items: Check Shipping-Line Eligibility Before You Buy",
    description: "Screen batteries, liquids, powders, magnets, branded goods and other sensitive categories before they narrow the parcel routes shown at submission.",
    read: "13 min read",
    published: "2026-09-12",
    updatedLabel: "Published 12 September 2026",
  },
  {
    slug: "superbuy-warehouse-order-status-guide",
    eyebrow: "Order status",
    title: "Superbuy Warehouse Status Guide: Purchased, Stored and Submitted",
    description: "Interpret order and parcel milestones as separate evidence events so you know what has happened, who acts next and when support needs a precise record.",
    read: "12 min read",
    published: "2026-09-12",
    updatedLabel: "Published 12 September 2026",
  },
  {
    slug: "superbuy-spreadsheet-broken-links-options",
    eyebrow: "Spreadsheet maintenance",
    title: "Superbuy Spreadsheet Links: What to Do When a Listing or Option Changes",
    description: "Recognize redirects, removed products, replacement listings and changed variants, then rebuild a trustworthy product record without guessing.",
    read: "12 min read",
    published: "2026-09-12",
    updatedLabel: "Published 12 September 2026",
  },
];

export const growthArticleContent: Record<string, GrowthArticleBody> = {
  "superbuy-detailed-photos-guide": {
    callout: [
      "Request evidence, not reassurance",
      "A useful detailed-photo request names one area, one angle and the fact you need to decide. Availability and charges can vary, so confirm the current option in the live order screen.",
    ],
    sources: [
      { label: "Superbuy public homepage and Shopping Agent guidance, checked 12 September 2026" },
      { label: "Superbuy Inspection Information and value-added service guidance" },
      { label: "Superbuy public Help Center and service terms" },
    ],
    sections: [
      {
        heading: "Begin with the limits of the standard warehouse record",
        paragraphs: [
          `Superbuy currently describes free QC photos as part of its shopping-agent warehouse flow. Those standard images create an important checkpoint between the Chinese seller and international parcel submission. They can normally help a buyer match the received product to the ordered category, colour, visible size label, quantity and general condition. That is already more evidence than a marketplace thumbnail, but it is still a small photographic sample made under warehouse lighting. It should be read as a record of visible surfaces, not as a universal certificate of quality, authenticity, materials or performance.`,
          `Standard views become insufficient when a missing fact can change the decision. A shoe may be photographed from above while the heel alignment remains hidden. A garment may show a size label but no actual chest width. A bag may appear complete although the detachable strap is outside the frame. The correct response is not to order a large set of random pictures. First identify the unresolved fact, decide whether that fact would make you approve, return or exchange the item, and then ask for the smallest piece of evidence that can resolve it.`,
        ],
      },
      {
        heading: "Use a three-part detailed-photo request",
        paragraphs: [
          `Write the request as area, view and proof. The area identifies the exact component: left heel tab, inside size label, chest line, zip slider or included pouch. The view explains how it should be shown: both shoes together, garment laid flat, close-up under neutral light or ruler placed edge to edge. The proof states what you need to read: symmetry, printed size, measurement, scratch, count or presence of a component. This structure gives warehouse staff an observable task and gives you an image that can be compared with the saved listing.`,
          `Avoid subjective instructions such as check if it is perfect, high quality or authentic. Those phrases do not define a visible threshold and transfer your buying judgment to someone who does not know your priorities. They also encourage a yes-or-no response when the real need is a photograph. A better request says, for example, photograph both heel tabs together at the same distance so their height and centring can be compared. The resulting evidence may still require interpretation, but at least the image addresses a controlled question.`,
        ],
        bullets: [
          "Area: identify the exact component or surface",
          "View: specify angle, pairing, lighting or ruler placement",
          "Proof: state the visible fact that controls the decision",
          "Threshold: know what result would make you act",
        ],
      },
      {
        heading: "Ask for measurements that can be reproduced",
        paragraphs: [
          `A ruler photograph is most useful when the measurement method is defined before the image is taken. For clothing, name both endpoints and request that the garment is laid flat without deliberate stretching. Chest width should state armpit to armpit; body length should identify the shoulder point and hem; waist should say whether the band is relaxed or stretched. For shoes, an insole measurement can be more informative than a box label, but removal may not be possible. If only an outsole can be measured, record that it is a different proxy and compare it with the same type of measurement at home.`,
          `Small differences can come from fabric movement, ruler angle, camera perspective and where a seam is interpreted as the endpoint. Do not create false precision by treating every millimetre as a product defect. Establish a reasonable tolerance for the decision and ask for a second image only if the first measurement is unreadable or clearly uses the wrong endpoints. Save the seller size chart, submitted option and resulting photograph together. That chain shows whether the product matched the evidence available when you ordered, rather than comparing unrelated methods later.`,
        ],
      },
      {
        heading: "Use close-ups for defects without losing context",
        paragraphs: [
          `A close-up can establish whether a suspected mark is a stain, loose thread, cracked print, scratched surface or simply a shadow. However, a close-up without context can make a tiny feature appear severe or leave you unable to locate it on the product. When possible, pair the detail with an existing overall view or request that the photographed area remains identifiable. Refer to the original photo number and location, such as the outer side of the right shoe near the front seam, instead of asking staff to search the whole item for anything wrong.`,
          `Look for repeatable evidence across images. A mark visible at two angles is stronger than a single dark patch that moves with the lighting. A misaligned panel seen in the full pair and heel view is stronger than distortion at the edge of a wide-angle photograph. The purpose of a detailed photo is to reduce one uncertainty, not to manufacture certainty about the entire product. Hidden stitching, internal electronics, exact material composition, comfort and future durability remain outside what an ordinary warehouse image can demonstrate.`,
        ],
      },
      {
        heading: "Match the request to the product category",
        paragraphs: [
          `Different products need different evidence. Shoes benefit from paired views, size evidence, heel alignment, outsole condition and close-ups of any suspected separation. Clothing benefits from defined flat measurements, front and back graphics, embroidery, labels, closures and included pieces. Bags and accessories may require dimensions, strap length, clasp operation as visible evidence, hardware surfaces and a count of detachable components. Electronics may need model labels and included accessories, yet photographs alone do not prove safe operation or internal condition.`,
          `Prioritise the characteristic that carries the largest consequence. If fit is the main risk, measurement beats another beauty shot. If a set is valuable only when complete, a component count beats a logo close-up. If a rigid retail box matters to you, photograph its condition before choosing removal during packing. This decision-led method keeps the request economical and makes the later ship-or-return choice easier to defend. It also prevents a common mistake: collecting many images while leaving the only important question unanswered.`,
        ],
      },
      {
        heading: "Make the request while a remedy is still possible",
        paragraphs: [
          `Warehouse storage and seller after-sales timing are not the same clock. Superbuy currently advertises a 90-day free storage period, but that does not mean a marketplace seller must accept a return at any point during those 90 days. Review standard images promptly after intake. If a decision-critical area is missing, submit the targeted request through the current order interface and record the time. When the result arrives, decide whether to accept the item, seek clarification or use the available after-sales path without allowing the parcel plan to hide an unresolved product issue.`,
          `Do not submit the international parcel first and expect the same remedy later. Once an item has left the warehouse, an extra warehouse photograph is no longer available and a Chinese domestic return may no longer be practical. Before parcel submission, keep the original listing, selected option, order number, standard images, detailed request and response in one evidence folder. If support is needed, describe the mismatch using those records and ask for a specific permitted action rather than sending a general complaint.`,
        ],
      },
      {
        heading: "Check the live service terms before paying",
        paragraphs: [
          `Detailed-photo names, availability, processing time and charges can change by account, product, warehouse or service path. Forwarding items may receive a different default inspection from shopping-agent purchases, and some product categories cannot be opened, tested or professionally inspected. Certain sellers or marketplace arrangements may also limit inspection or after-sales support. The current order page is therefore the source for whether a particular service can be selected and what it costs at the moment of the request.`,
          `Treat an unavailable option as a risk signal rather than permission to invent evidence. You can decide using the standard photos, ask support whether another documented service applies, accept the uncertainty, or decline the product where a remedy remains available. The right choice depends on the value of the item and the consequence of being wrong. A low-cost accessory and an expensive fitted garment should not receive the same evidence budget merely because both appear in the warehouse.`,
        ],
      },
      {
        heading: "Close the loop with a written decision",
        paragraphs: [
          `When the requested image arrives, write a one-sentence conclusion tied to the fact it shows. For example: chest width is approximately 56 centimetres using the requested armpit-to-armpit method and falls within my acceptable range. Or: both heel tabs are visible together and the right tab is materially lower, so I will ask about return eligibility. This conclusion stops the same image from being reinterpreted each time you revisit the order and gives the future parcel record a clear reason for inclusion or exclusion.`,
          `The strongest Superbuy detailed-photo workflow is compact: preserve the listing, inspect the standard views, identify one unresolved decision, request one reproducible image, compare it with a written threshold and act before the relevant window closes. Extra photographs are valuable when they change a decision. They are wasteful when they merely repeat what is already visible or invite a subjective quality judgment. Use the service to convert uncertainty into evidence, while keeping its photographic limits explicit.`,
        ],
      },
    ],
  },

  "superbuy-qc-photos-shoes-checklist": {
    callout: [
      "Review the pair, not one attractive angle",
      "Match identity and size first, compare left and right together, then investigate repeated signs of damage. Warehouse images cannot prove comfort, authenticity or future wear.",
    ],
    sources: [
      { label: "Superbuy public Shopping Agent and inspection guidance, checked 12 September 2026" },
      { label: "Superbuy public Help Center guidance on QC and value-added services" },
      { label: "Current Superbuy homepage statements on free QC photos and storage" },
    ],
    sections: [
      {
        heading: "Preserve the exact shoe listing before warehouse arrival",
        paragraphs: [
          `Shoe QC starts before the parcel reaches Superbuy. Save the current marketplace URL, seller, selected colour, Chinese option text, model or version, ordered size and any size chart or insole guidance. Listings with many similar variants can share almost identical thumbnails while using different materials, soles or option names. A screenshot without the selected option is weak evidence. The warehouse review needs a reference that explains precisely which pair the agent was asked to purchase and what components, such as spare laces or a box, were expected.`,
          `Write down your rejection thresholds in advance. Wrong size, wrong colourway, missing shoe, major sole separation, severe pair asymmetry or a visible stain may be decisive. Tiny glue traces, packaging compression or colour variation under warehouse lights may be acceptable to one buyer and not another. Defining the threshold before looking at the photos reduces the temptation to approve because shipping plans are already underway or reject because a close-up makes a minor detail look larger than it is.`,
        ],
      },
      {
        heading: "Confirm identity, quantity and size before judging finish",
        paragraphs: [
          `Begin with the simplest facts. There should be a left and right shoe of the same model, colour and stated size. Compare panel shapes, outsole pattern, tongue construction, lace colour and visible labels with the saved listing. If the listing offered several editions, identify the features that distinguish your chosen version instead of relying on a broad translated name. A visually clean pair is still a wrong order when its size, version or included pieces do not match the submitted selection.`,
          `Read every visible size label, including any difference between the box, tongue, insole or internal tag. A printed number only proves what the label says; it does not prove the interior length or fit. If size is critical, use an available measured-photo service to request an insole length where removable, or clearly record an outsole measurement as a rougher proxy. Compare like with like. Do not compare an outsole number from the warehouse with an insole number from a shoe at home and treat the difference as exact fit evidence.`,
        ],
        bullets: [
          "Two matching shoes in the ordered model and colour",
          "Visible size labels agree with the submitted option",
          "Expected laces, inserts or other included pieces are present",
          "Measurement method is named and compared with the same method",
        ],
      },
      {
        heading: "Compare symmetry using paired views",
        paragraphs: [
          `Shoes should be evaluated as a pair. Compare toe height, vamp shape, eyestay position, panel width, lace alignment, collar height and the angle of each shoe from the same view. Then compare the heels together. Heel tabs, rear seams and midsole lines are difficult to judge when each shoe is photographed separately at a different angle. Perspective can create apparent differences, so use features near the centre of the frame and request a straight paired image only when the standard set leaves a material question open.`,
          `Symmetry does not mean mathematical identity. Soft uppers can settle differently, laces can pull one side, paper stuffing can alter a toe shape and camera distance can exaggerate proportions. Look for a pattern across more than one signal: a lower heel tab plus a tilted rear seam plus a visibly different collar height is stronger evidence than one isolated line. State what you observe rather than labelling the whole pair defective. That makes a request for clarification or after-sales review specific and verifiable.`,
        ],
      },
      {
        heading: "Inspect soles, glue and edge condition",
        paragraphs: [
          `Review the outsole for obvious dirt, deep scratches, missing sections, inconsistent tread and signs that suggest prior wear. Check the midsole and upper junction for large gaps, lifting or repeated separation. Small adhesive traces can look dramatic under bright light, while a structural opening usually remains visible from more than one angle. If the suspected issue appears only once, identify its location and request a close-up that keeps enough surrounding area to show where it sits on the shoe.`,
          `Do not infer long-term bonding strength from a photograph. A flush edge today does not guarantee durability, and a visible line may be moulding or design rather than a crack. Use the evidence for what it can establish: whether there is an obvious open gap, major stain, missing tread feature or physical damage before international shipping. If flex testing or other handling is not explicitly offered for the item, do not ask staff to perform an unlisted test that could damage the product or complicate a return.`,
        ],
      },
      {
        heading: "Review stitching, panels and surface marks",
        paragraphs: [
          `Trace the main stitching paths on both shoes. Look for skipped sections, loose ends at stress points, visibly crooked seams and panel edges that depart substantially from the opposite shoe. Review printed or embroidered details for centring and obvious damage, but do not use logo appearance as professional authentication. Marketplace images can be edited, versions can differ and warehouse photography has limited resolution. The useful comparison is whether the visible construction matches the ordered reference closely enough for your own acceptance rule.`,
          `Distinguish product marks from photographic effects. Reflective material, suede direction and shiny leather can change tone as the light moves. Compression may create temporary creases, particularly when shoes are packed tightly. A stain is more credible when its shape remains stable across angles; a shadow usually changes. Ask for neutral-light detail only when colour or a mark would alter the decision. Repeated requests for aesthetic reassurance can consume time without producing stronger evidence.`,
        ],
      },
      {
        heading: "Check box and accessories only when they matter",
        paragraphs: [
          `A retail box can add volume to the international parcel, yet it may protect a structured pair or matter to the buyer. Decide before packing whether the box is essential, optional or expendable. If condition matters, review it during QC and record any crushed corners or water damage before asking for removal or reinforcement. Do not approve a damaged product simply because the box looks good, and do not reject a usable shoe solely because ordinary outer packaging has travelled poorly unless packaging was part of the purchase value.`,
          `Count expected accessories such as spare laces, removable straps, tags or inserts. The saved listing must support the expectation; promotional photographs sometimes display props that are not included. If an accessory is absent from every standard image, request a count or grouped photograph instead of assuming loss. A complete evidence record states what was ordered, what the seller listing promised, what the warehouse received and which parts will remain after any packaging service.`,
        ],
      },
      {
        heading: "Resolve problems before parcel submission",
        paragraphs: [
          `Review shoe photos as soon as the stored record appears. Seller return rules and timing can be shorter or more restrictive than Superbuy warehouse storage. When a mismatch is visible, keep the order number, submitted option, listing capture and relevant photo number together. Describe the problem narrowly: ordered EU 43, visible tongue labels show EU 42; or the right outsole has an open separation at the outer forefoot shown in photos two and four. Then ask which current after-sales action is available before approving international shipment.`,
          `If evidence is ambiguous, choose one targeted request. Photograph both tongue labels, measure the removable insoles, show both heels at equal distance or provide a close-up of the suspected gap. Once the new image arrives, record approve, clarify again only for a genuinely unanswered fact, or request the available remedy. Sending the shoes internationally removes the warehouse checkpoint and makes a Chinese seller return far less practical, so do not let consolidation urgency override an unresolved size or condition issue.`,
        ],
      },
      {
        heading: "Create a concise ship decision",
        paragraphs: [
          `Finish with a written decision that another person could audit. Record the ordered size and visible label, the measurement method if used, the result of the pair comparison, any accepted cosmetic issue, included pieces, box choice and final status. Accepted does not mean certified authentic or guaranteed durable. It means the available visible evidence met the threshold you defined for this order. That distinction keeps the QC record honest and useful if the parcel is later packed with other items.`,
          `A dependable Superbuy shoe QC checklist follows one order: identity, quantity, labels, measurement, symmetry, soles, surfaces, accessories and remedy. It does not begin by zooming into every stitch. The order protects against the highest-cost mistakes first, especially receiving the wrong pair or size. Use standard images to establish broad facts, detailed photos to answer one decision-critical question and the live after-sales interface for any remedy. Then submit only the pair you have deliberately accepted.`,
        ],
      },
    ],
  },

  "superbuy-clothing-qc-measurements-guide": {
    callout: [
      "Fit evidence comes before aesthetic detail",
      "Match the ordered garment and obtain reproducible flat measurements first. Then inspect prints, embroidery, seams, closures and included pieces within the limits of warehouse photography.",
    ],
    sources: [
      { label: "Superbuy public inspection and Shopping Agent guidance, checked 12 September 2026" },
      { label: "Superbuy public Help Center guidance on warehouse photos and services" },
      { label: "Current Superbuy homepage workflow statements" },
    ],
    sections: [
      {
        heading: "Build a garment reference before ordering",
        paragraphs: [
          `Save the marketplace URL, seller, selected colour, size, version and quantity before the listing changes. Keep the size chart that was visible for that exact option and note whether its numbers describe body measurements or the finished garment. Those are not interchangeable. A seller may also use one page for several fabrics, seasonal versions or sets. Preserve the option image and original option wording whenever a translated label such as upgraded black or thick version could become ambiguous at warehouse intake.`,
          `Choose a similar garment that fits at home and measure it flat. Record chest width, length, shoulder, sleeve, waist, rise or inseam only where those dimensions control the decision. This reference is more useful than assuming that a familiar S, M or L maps consistently across sellers. Set a tolerance that reflects fabric and purpose. A fitted woven jacket may allow less variation than a loose sweatshirt, while stretch fabric needs both a relaxed measurement and an understanding that a static photo cannot predict comfort.`,
        ],
      },
      {
        heading: "Confirm garment identity and every included piece",
        paragraphs: [
          `At warehouse intake, match product type, colour, printed size label, visible model details and quantity with the submitted order. If the listing describes a set, count every piece. A hoodie and trouser combination should not be accepted from a single folded image that hides one component. For a reversible or detachable design, confirm that the relevant part is present. A visually attractive garment in the wrong version remains a fulfilment error, so complete identity checks before analysing minor stitching.`,
          `Read any warehouse warning and compare the first product view with the saved option image. Colour under warehouse lights may differ from a seller photograph, especially for black, navy, cream or reflective fabric. Look for stable colour blocking and construction details rather than expecting pixel-perfect colour. If the difference would change your decision, request an image under a more neutral view when available, but do not claim a photograph can reproduce how the material will look in every real lighting condition.`,
        ],
        bullets: [
          "Correct garment type, colour family and selected version",
          "Printed size label matches the submitted option",
          "Quantity and all advertised set components are visible",
          "Seller reference and warehouse item remain linked",
        ],
      },
      {
        heading: "Request flat measurements with named endpoints",
        paragraphs: [
          `A useful clothing measurement request tells staff how to place both garment and ruler. Ask for chest width with the item laid flat, armpit seam to armpit seam, without stretching. Define length from the relevant shoulder point to the hem. For trousers, say whether waist is measured straight across while relaxed, and whether inseam or outseam is needed. A photograph that only shows a ruler somewhere near the fabric cannot be compared reliably with your home reference.`,
          `Allow for ordinary measurement variation. Soft fabric moves, ribbing can contract, and the exact seam point may be interpreted differently. Compare the warehouse image with the same method you used at home, not with a body circumference or another seller chart. If the number appears implausible, first check units, ruler alignment and whether the garment is folded. Request a corrected image only when the method is visibly wrong or the result crosses the tolerance that would change approval.`,
        ],
      },
      {
        heading: "Inspect prints, embroidery and placement",
        paragraphs: [
          `Review the front and back at enough distance to judge centring, scale and orientation. Compare a graphic with garment landmarks such as the neckline, placket, pocket or side seams rather than the photograph border. For embroidery, look for missing areas, obvious puckering, loose threads and placement differences that remain visible in more than one view. Warehouse images can reveal gross misalignment, but they do not establish trademark authenticity, exact thread composition or how a print will survive repeated washing.`,
          `Wrinkles and camera angle can make a straight graphic appear curved. If the product is heavily folded or the suspected problem lies near a seam, request one flat overall image before concluding that placement is wrong. A detailed close-up is useful for cracked print or damaged embroidery, but retain an overall view so the issue has scale and location. State the observation precisely, such as the main print is visibly tilted relative to the hem, rather than turning one detail into a general claim about quality.`,
        ],
      },
      {
        heading: "Follow seams, hems, closures and hardware",
        paragraphs: [
          `Trace visible structural lines in a consistent order: neckline or waistband, shoulders, sleeves, side seams, pockets and hem. Look for missed stitching, open seams, major twisting, uneven paired details and holes or stains. On jackets and trousers, inspect zips, buttons, snaps, drawstrings and pocket openings as far as the photographs allow. A closed zip pictured once shows alignment at that moment; it does not prove long-term mechanical reliability or the internal finish hidden behind the lining.`,
          `Loose thread ends are not automatically an open seam. Search for a gap, unravelling path or repeated distortion before treating the issue as structural. Likewise, a hem can look uneven when the garment is draped on a pile. Ask for a flat view only if alignment matters to your threshold. The point of QC is not to discover microscopic imperfection in mass-produced clothing. It is to identify wrong fulfilment, decision-changing measurements and obvious visible damage before the expensive international leg.`,
        ],
      },
      {
        heading: "Recognise what photos cannot establish",
        paragraphs: [
          `An image cannot verify fibre content, fabric weight unless separately measured, breathability, softness, odour, colourfastness, shrinkage, warmth or comfort. It also cannot prove that a branded item is authentic. Labels and packaging can be photographed as visible objects, but they are not independent authentication. If a listing makes a material or performance claim that is essential, decide whether seller documentation, a platform service or the remaining uncertainty is acceptable before purchase rather than expecting warehouse photos to perform a laboratory test.`,
          `Photographs also have resolution, lighting and handling limits. Dark fabric can hide stitching, reflective surfaces can create bright marks and compression can temporarily change shape. Use multiple views to find repeatable signs and keep conclusions narrow. A defensible record might state that the size label, chest measurement, colour blocking and included belt match the order and no obvious exterior damage appears. It should not state that the garment will fit perfectly, last for years or contain the claimed fibre percentage.`,
        ],
      },
      {
        heading: "Use the after-sales window deliberately",
        paragraphs: [
          `Inspect the stored garment promptly. Superbuy currently advertises a 90-day free storage period, but seller return eligibility and timing are separate. If the wrong option, missing piece, material visible damage or unacceptable measurement is documented, preserve the order number, selected option, seller evidence and relevant warehouse images. Submit a specific request through the current after-sales path while it is still available. Do not wait until every other item for a future parcel has arrived before resolving the garment.`,
          `If the standard views do not settle the issue, request one targeted measurement or close-up where the live interface offers it. Once the result arrives, choose accept, ask for the available remedy, or consciously accept the uncertainty. International parcel submission should include only garments with closed QC decisions. After departure, a Chinese domestic exchange becomes much more difficult, and the evidence needed to separate seller, warehouse, carrier and customs damage is harder to reconstruct.`,
        ],
      },
      {
        heading: "Record the final clothing decision",
        paragraphs: [
          `Write a short acceptance record containing the ordered option, visible label, critical measurements, set components, major graphic or construction checks and any accepted variation. Add the photos or references used. If packaging instructions could affect the garment, record them separately: vacuum compression may suit some soft textiles but can create creases or distort structured pieces; removing presentation packaging saves volume but may reduce protection or value. The QC decision and packing decision should be linked without being confused.`,
          `The reliable sequence is simple: preserve the listing, define fit thresholds, match identity, measure with reproducible endpoints, inspect visible construction, acknowledge photo limits and resolve discrepancies before shipping. This produces more useful evidence than a generic request for a quality check. It also aligns the article, spreadsheet row and warehouse record around the same user decision: whether the exact garment received is acceptable enough to include in an international parcel.`,
        ],
      },
    ],
  },

  "superbuy-link-checker-marketplace-listings": {
    callout: [
      "A successful import is not the final verification",
      "Check the current destination, seller, option set, complete-product price and order form before treating a Taobao, Tmall, JD or Weidian link as usable.",
    ],
    sources: [
      { label: "Superbuy public homepage and Shopping Agent user guidance, checked 12 September 2026" },
      { label: "Superbuy public ordering guidance for marketplace links and manual orders" },
      { label: "Superbuy public service terms and Help Center" },
    ],
    sections: [
      {
        heading: "Define what a link check should prove",
        paragraphs: [
          `A Superbuy link checker workflow should answer whether the URL still reaches the intended listing and whether the order interface represents the same purchasable object. It is not enough for a page to return a successful response or display a familiar photograph. Sellers can replace content, reuse a listing for a new batch, add deposit options or redirect an expired product. A trustworthy spreadsheet therefore separates route status from product identity: reachable, redirected, removed, changed, incomplete or ready for option verification.`,
          `Superbuy currently presents link submission and keyword search as entry points for shopping-agent orders, with public guidance covering major Chinese marketplaces and manual handling when a product cannot be captured normally. That convenience does not remove the buyer's responsibility to read imported fields. The live marketplace listing and the final Superbuy order form are different evidence layers. Both need to describe the same seller, product, variant and quantity before payment is authorised.`,
        ],
      },
      {
        heading: "Preserve the source before pasting it",
        paragraphs: [
          `Save the original marketplace URL without unrelated tracking parameters, the seller or store name when visible, the listing title, first image and date checked. Record the intended product in neutral language rather than copying a promotional title. If the page contains multiple models, keep the exact option image or original Chinese option text. This source snapshot lets you detect whether Superbuy imported the correct listing and provides a reference if the seller later changes photographs, prices or variant labels.`,
          `Do not treat a screenshot as a replacement for the URL. Images hide redirects, seller identity, option controls, shipping notes and page updates. Likewise, a shortened or shared link may depend on an app session and fail in another browser. Whenever possible, open the destination in a clean session and preserve the stable listing address that resolves. A spreadsheet row should state the check date because every marketplace link is a time-sensitive pointer, not a permanent product guarantee.`,
        ],
        bullets: [
          "Stable source URL and marketplace",
          "Seller or store identity when visible",
          "Neutral product description and first image",
          "Exact intended option and date checked",
        ],
      },
      {
        heading: "Check Taobao, Tmall and JD imports field by field",
        paragraphs: [
          `When Superbuy captures a listing, compare the imported title, main image, base price, domestic delivery, option names and seller with the source. A lower imported price may belong to the cheapest accessory or smallest variant rather than the product shown in your spreadsheet. Choose the exact colour, size, model and quantity, then confirm how the order total changes. If required information is missing or the system cannot capture the page, use the current manual shopping-agent workflow rather than inventing values.`,
          `Marketplace presentation differs. Tmall store pages may offer a more structured retail catalogue, Taobao sellers may combine many options in one listing, and JD pages can use promotion or region-dependent displays. These are tendencies, not promises about a specific seller. The verification rule stays the same: the seller record, selected product and authorised order must agree. Do not infer seller reliability solely from the marketplace name or a polished storefront. Preserve only facts that are visible for the listing you are using.`,
        ],
      },
      {
        heading: "Treat Weidian links as option-sensitive records",
        paragraphs: [
          `Weidian product pages are often shared through mobile links and can contain option images or names that are easy to separate from their context. Open the page, identify the seller, inspect the complete option list and note whether the displayed price changes with selection. If the link opens a store home, social share page or unavailable product rather than the intended item, do not repair the row by choosing a visually similar listing on your own. Mark it as unresolved and search for a verified replacement.`,
          `When Superbuy imports the Weidian URL, compare the main image and selected variant again. A familiar product name is weak evidence when several batches or colourways share it. If the option text is unclear, preserve the original wording and add a specific order remark only where needed. The remark should define colour, size, model or included component; it should not ask the agent to choose the best version. A clear instruction supports purchasing, while a subjective instruction hides an unresolved product choice.`,
        ],
      },
      {
        heading: "Detect deposits, accessories and difference-payment links",
        paragraphs: [
          `One of the highest-risk spreadsheet errors is treating the lowest visible price as the complete product. A listing may include a deposit, replacement part, lace, strap, packaging option, repair fee or price-difference item alongside the main product. Read every option name and compare the selected image. If the title or description says deposit, balance, accessory or supplementary payment, the number cannot be used as the product price without explaining that context.`,
          `A product card should represent the option a reader expects to open. When the same source listing contains many unrelated components, a neutral range or no reference price is more honest than highlighting the minimum. Before submitting through Superbuy, confirm that the chosen option creates a complete order. If the agent requests an additional payment or clarification, return to the preserved source and record exactly which component or price change is being discussed rather than approving from the headline alone.`,
        ],
      },
      {
        heading: "Handle login walls, app links and regional differences",
        paragraphs: [
          `A link can work for the editor yet fail for another visitor because of marketplace login, region, device, language or app redirection. Test the destination in a normal browser and, where possible, without relying on a saved account session. Record a limited status such as accessible after login rather than calling it universally live. If a mobile share URL repeatedly loops or expires, look for the canonical product identifier and rebuild the stable link only when you can confirm that it reaches the same seller and item.`,
          `Do not bypass marketplace controls or copy private session data into a public spreadsheet. The goal is not to guarantee anonymous access to every Chinese marketplace page. It is to provide a transparent route and explain any access condition. Superbuy's own order interface may still capture a URL that a foreign browser presents poorly, but the buyer should compare the imported record carefully. If the source cannot be independently checked, label the uncertainty instead of presenting a verified badge.`,
        ],
      },
      {
        heading: "Recheck the final order before payment",
        paragraphs: [
          `The final verification happens after import and selection. Confirm product, seller, colour, size, model, quantity, unit price, China domestic delivery and any required remark. Save the submitted option. If the product uses a manual order, inspect every field because a typo can create a valid purchase of the wrong item. A route check answers where the link goes; an order check answers what Superbuy is authorised to buy. Both must be complete.`,
          `Keep product-stage cost separate from international shipping. A correctly imported listing does not establish delivered price or route eligibility. Weight, dimensions, packaging, restrictions, destination and the lines displayed after warehouse storage shape the later parcel. This separation matters for SEO pages too: a spreadsheet can accurately help with product discovery without pretending to calculate a universal total from a marketplace price.`,
        ],
      },
      {
        heading: "Maintain a dated status instead of a permanent verified claim",
        paragraphs: [
          `A sustainable Superbuy spreadsheet records last checked, result and next action. Use statuses such as live and matched, live but options changed, redirected, removed, login required or replacement under review. When a seller changes the page, keep the old observation in a maintenance log and update the public card only after the new destination is verified. Never redirect a broken row to a merely similar product because it preserves clicks; that destroys the evidence chain and can send readers to an unintended purchase.`,
          `The complete link-checking method is source capture, clean opening, identity comparison, option review, Superbuy import comparison and final order check. It works across Taobao, Tmall, JD and Weidian because it focuses on evidence rather than marketplace branding. A good result does not promise that the item will remain available. It tells the reader what was matched, when it was matched and which live fields must still be confirmed before paying.`,
        ],
      },
    ],
  },

  "superbuy-1688-vs-taobao-qc-aftersales": {
    callout: [
      "Marketplace source changes the evidence plan",
      "Do not assume a Taobao-style single-item order, standard photo set or return path applies to every 1688 supplier. Read the current warning shown for the exact source before payment.",
    ],
    sources: [
      { label: "Superbuy public 1688 ordering notices, checked 12 September 2026" },
      { label: "Superbuy public Shopping Agent, inspection and after-sales guidance" },
      { label: "Current 1688 and Taobao order-interface notices available through Superbuy" },
    ],
    sections: [
      {
        heading: "Start with the different commercial context",
        paragraphs: [
          `Taobao is commonly used for consumer-oriented marketplace purchases, while 1688 often serves wholesale and supply-chain transactions. That difference can affect minimum quantities, tiered pricing, packaging, seller communication and the remedy a supplier offers. It does not mean every Taobao seller is retail-friendly or every 1688 listing is unavailable to an individual. The exact listing and the warning shown in Superbuy's order flow control the decision. Marketplace labels help predict which questions to ask; they do not replace the current seller terms.`,
          `A spreadsheet row can obscure this context when it shows only an image and a low reference price. Record marketplace, seller, minimum order, unit basis and whether the price changes with quantity. On 1688, the apparent unit figure may depend on meeting a wholesale threshold or buying a specified number of pieces. On Taobao, a minimum price can still belong to an accessory or deposit. In both cases, choose the complete intended product and calculate the authorised quantity before comparing cost.`,
        ],
      },
      {
        heading: "Read every 1688 warning before purchase",
        paragraphs: [
          `Superbuy's current public forwarding and ordering interface displays explicit notices that some 1688 products can have price or domestic shipment changes according to purchase amount. It also warns that wholesale thresholds may apply. Some seller arrangements shown in that interface are not available for ordinary quality inspection, standard photo service or after-sales support. These are material limits. A buyer should capture the notice attached to the exact product rather than relying on a general article or another person's order.`,
          `If a listing states that inspection or after-sales is unavailable, decide before payment whether the lower price or supplier access justifies accepting that uncertainty. Do not assume support will create a return right later. Ask what quantity will be checked, how boxes are counted and what visible evidence will be provided. If the answer does not meet your threshold, choose another listing or seller while the decision is still reversible. The cheapest source becomes expensive when a wrong size, incomplete carton or damaged batch has no practical remedy.`,
        ],
        bullets: [
          "Marketplace and seller are recorded",
          "Minimum quantity and tiered price are understood",
          "Inspection and standard-photo availability are confirmed",
          "After-sales limits are accepted before payment",
        ],
      },
      {
        heading: "Compare imported price, quantity and domestic freight",
        paragraphs: [
          `For a 1688 order, verify whether the displayed price is per piece, per lot, per specification or tied to a quantity tier. Confirm the number of units Superbuy will submit and the seller's China domestic delivery charge for that amount. A price can change after the agent confirms stock or shipping with the supplier. Record the original figure, the revised request and the amount you authorise as separate events. This prevents a later total from looking like an unexplained fee.`,
          `Use the same discipline on Taobao. Select the exact variant and check whether domestic delivery changes by region or quantity. Do not compare a wholesale unit figure with a single Taobao product price without including the minimum quantity, unwanted pieces and parcel impact. The useful comparison is total cost for the usable goods you intend to receive, plus domestic delivery and the later international implications. An inexpensive bulk purchase can create a heavier parcel or surplus that was never part of the original need.`,
        ],
      },
      {
        heading: "Design inspection around how the goods are packed",
        paragraphs: [
          `A single Taobao garment may arrive as one identifiable item, whereas a 1688 purchase can arrive in multiple units, bags or cartons. Decide whether you need only an exterior and quantity check or item-level evidence. If the supplier or order interface limits opening, counting or standard photos, the warehouse record may show boxes rather than every piece. Record the promised packaging unit and quantity basis before ordering so the intake can be compared with something concrete.`,
          `For repeated units, sample photography does not prove every unit is identical. If the current service allows a count or additional inspection, define the minimum evidence that makes the batch acceptable. That may be one grouped quantity image, visible size labels across packs or a sample measurement. Avoid asking for an open-ended quality judgment across a wholesale carton. If the work you need is not offered, treat the uninspected remainder as residual risk rather than assuming the photographed sample represents all pieces.`,
        ],
      },
      {
        heading: "Keep QC scope and product claims separate",
        paragraphs: [
          `Where standard Taobao-style shopping-agent QC is available, use it to confirm identity, visible option, quantity and obvious exterior condition. Detailed photographs can answer a specific measurement or component question when the live order offers them. On a restricted 1688 seller, the scope may be narrower. In neither case should warehouse images be described as professional authentication, material testing or a durability guarantee. They are evidence produced within the service scope shown for that order.`,
          `Build category-specific thresholds. Clothing needs label and measurement evidence; shoes need pair identity and size; electronics may require model and included accessories but cannot be certified functional from an ordinary photograph; wholesale components may require dimensions or count. Marketplace choice changes the availability and economics of the check, but the principle remains the same: ask only for an observable fact, preserve the result and do not extend the conclusion beyond what the evidence demonstrates.`,
        ],
      },
      {
        heading: "Treat after-sales as a seller-specific path",
        paragraphs: [
          `Returns and exchanges depend on the seller, product category, condition, timing and current Superbuy process. A Taobao seller may offer a route that a specific 1688 supplier does not. Custom, wholesale, clearance or opened goods can have additional limits. Review the live terms before authorising purchase and again immediately after warehouse intake if a discrepancy appears. The existence of 90-day warehouse storage does not extend a seller's remedy window or create after-sales eligibility where the order notice excluded it.`,
          `When a remedy is available, preserve the exact listing, option, quantity, price authorisation, order number, warehouse record and photographs. Describe one documented mismatch and request the permitted action. For a multi-unit order, state how many pieces are affected and how that number was established. Do not send the international parcel while an important issue remains open. Once goods leave the warehouse, returning them to the Chinese supplier is usually far less practical and the chain of responsibility becomes harder to separate.`,
        ],
      },
      {
        heading: "Model parcel consequences before choosing wholesale quantity",
        paragraphs: [
          `A wholesale threshold changes more than product-stage cost. Extra units increase actual weight, may require a larger carton and can move the parcel into a higher volumetric or route bracket. Multiple identical items may also look commercial to destination authorities depending on local rules. Estimate the full quantity before ordering and consider whether all pieces can travel on the same eligible line. A low unit cost is not a saving when the minimum creates unwanted stock, oversized packaging or import complexity.`,
          `For either marketplace, check restricted-item status and destination requirements. The live shipping options appear after the goods and parcel inputs are known, so do not promise one route from a spreadsheet. Record packaging needs at the item level. Bulk soft textiles may consolidate efficiently, while rigid or fragile units may need space and reinforcement. Compare a consolidated parcel with a justified split only after warehouse weight, dimensions and restrictions are available.`,
        ],
      },
      {
        heading: "Choose the source that fits the evidence you need",
        paragraphs: [
          `A 1688 listing can be sensible when the required quantity, supplier terms, inspection scope and after-sales limits match the purchase. A Taobao listing can be sensible when a single-item option, clearer retail presentation or different seller remedy reduces uncertainty. Neither marketplace is automatically safer or cheaper for every product. Compare complete-product price, quantity, domestic delivery, evidence availability, seller terms and parcel impact on one worksheet.`,
          `The reliable workflow is to identify the source, capture its current notices, verify the exact unit and quantity, define inspection evidence, accept the real after-sales boundary and plan the resulting parcel. Recheck on the live Superbuy order screen because these conditions can change. This approach turns the 1688-versus-Taobao choice from a branding debate into a documented procurement decision and prevents a spreadsheet's lowest number from hiding the most important operational differences.`,
        ],
      },
    ],
  },

  "superbuy-volumetric-weight-calculator-examples": {
    callout: [
      "Calculate with the packed box, not the product alone",
      "Compare actual and volumetric weight under the formula shown for each currently eligible line. The larger planning value is useful, but the live quote and final carrier measurement still control the charge.",
    ],
    sources: [
      { label: "Superbuy public shipping calculator and charge guidance, checked 12 September 2026" },
      { label: "Superbuy public parcel forwarding and consolidation guidance" },
      { label: "Current Superbuy homepage statements on storage and shipping lines" },
    ],
    sections: [
      {
        heading: "Separate scale weight from volumetric weight",
        paragraphs: [
          `Actual weight is what the completed parcel registers on a scale. Volumetric weight converts the outer space occupied by that parcel into a billing comparison. A carrier may use the larger value, subject to the line's own divisor, rounding increments, minimums and oversize rules. This is why two boxes with the same scale weight can produce different Superbuy shipping estimates. A compact box of dense goods may be charged near actual weight, while a light carton holding shoe boxes can be charged on the space it occupies.`,
          `Do not calculate from the bare product dimensions unless the product will genuinely ship without other packaging. International measurements include the outer carton or bag, padding, reinforcement and empty space created by the combination of items. Seller weights may omit retail packaging or may only be approximate. Use an early estimate to screen a purchase, replace it with warehouse item data after intake, and calculate again from the packed parcel before selecting a route. Each stage should be dated so a later difference can be explained.`,
        ],
      },
      {
        heading: "Use the formula displayed for the live line",
        paragraphs: [
          `A common air-cargo example shown in Superbuy's public calculator uses length multiplied by width multiplied by height in centimetres, divided by 6,000, to produce kilograms. For a 45 by 35 by 25 centimetre box, the calculation is 39,375 divided by 6,000, or about 6.56 kilograms. If the same parcel weighs 2.40 kilograms on the scale, the volumetric result is the larger planning figure under that example. It is not automatically the final bill because the selected route may use a different rule.`,
          `Copy the divisor, unit system and rounding method from each route you are actually comparing. A formula using centimetres cannot accept dimensions entered in inches without conversion. Likewise, a result of 6.56 kilograms might be charged in a larger increment if the line rounds by 0.5 or 1 kilogram. Record the raw calculation and the rounded chargeable value separately. This prevents a calculator from creating false precision and makes it clear whether size, mass or the route's billing rules drive the estimate.`,
        ],
        bullets: [
          "Record outer length, width and height in one unit system",
          "Use the divisor displayed for the eligible route",
          "Compare the result with actual packed weight",
          "Apply the route's charging increment and limits",
        ],
      },
      {
        heading: "Compare three realistic packaging examples",
        paragraphs: [
          `Consider a soft-clothing parcel measuring 35 by 28 by 18 centimetres and weighing 2.8 kilograms. Under a 6,000 divisor, volumetric weight is about 2.94 kilograms, so actual and dimensional values are close. Next consider shoes in retail boxes inside a 50 by 40 by 30 centimetre carton weighing 4 kilograms. Volumetric weight becomes 10 kilograms under the same example. The difference shows why removing expendable box volume can matter more than trimming a few grams of paper.`,
          `A protected fragile parcel may move in the opposite direction. Suppose reinforcement changes a 32 by 25 by 20 centimetre box to 38 by 31 by 26 centimetres while scale weight rises from 3.1 to 3.7 kilograms. The volumetric result changes from about 2.67 to 5.10 kilograms under the example formula. The stronger package may still be the right choice if breakage risk is high. A calculator should reveal the cost consequence, not force the smallest box regardless of protection.`,
        ],
      },
      {
        heading: "Model compact, protected and split scenarios",
        paragraphs: [
          `Create at least three parcel plans. The compact plan removes expendable retail packaging and compresses only suitable soft goods. The protected plan keeps boxes or adds reinforcement for items whose structure or value needs it. The split plan isolates one bulky, fragile, restricted or urgent item. Enter dimensions and actual weight for each plan, then compare only the lines eligible for its complete contents and destination. The lowest theoretical volumetric weight is not meaningful if that line cannot carry the product.`,
          `Consolidation can reduce repeated starting charges, but the largest possible combined parcel is not automatically cheapest. One oversized item may expand the carton, increase dimensional weight, cross a line limit or remove several routes from consideration. Conversely, splitting every item can repeat minimum charges and packaging. The correct comparison uses live quotes for plausible configurations, not a slogan that consolidation or splitting always wins. Record why an item was separated so the choice remains connected to evidence.`,
        ],
      },
      {
        heading: "Treat removal and compression as product decisions",
        paragraphs: [
          `Package removal changes more than a formula. A shoe box may protect shape or have personal value. A presentation box may protect fragile components. Vacuum compression can reduce soft textile volume, but it may crease structured garments or be unsuitable for objects with rigid trim. Write item-specific packing instructions: which box can be removed, which component must remain, which area needs protection and which materials may be compressed. A vague request for the smallest package transfers important product trade-offs to the packer.`,
          `After any change, recalculate using the new outer dimensions and weight. Saving only the cheaper estimate hides why the number moved. Preserve before-and-after measurements with the packing instruction. If the revised parcel becomes eligible for a different line, compare the full terms again: tracking, estimated time, restrictions, compensation, customs model and final-mile handoff. A smaller chargeable weight is valuable only when the resulting package and route still meet the shipment's practical needs.`,
        ],
      },
      {
        heading: "Understand estimates, deposits and final adjustments",
        paragraphs: [
          `A Superbuy shipping estimate is a planning result based on the inputs available at that moment. The parcel-stage payment may be collected as a deposit using estimated weight, dimensions, route and destination. Superbuy's public guidance explains that logistics-provider measurements can determine the final fee, with a later reconciliation where applicable. Therefore, a precise calculator output should never be described as a guaranteed final charge. Keep a budget buffer and save the measurement and line terms used at submission.`,
          `When the final amount differs, compare the evidence in order: contents, packing instruction, warehouse measurements, route formula, weight increment, carrier measurement and any named service. Do not assume every increase is a hidden fee or every refund proves the original estimate was wrong. The aim is to identify which input changed. A dated record allows support to answer a specific discrepancy and helps improve the next parcel estimate with real dimensions rather than general anecdotes.`,
        ],
      },
      {
        heading: "Use the calculator as a decision tool",
        paragraphs: [
          `The best use of a volumetric-weight calculator is comparison. Before purchase, test a conservative product estimate to see whether the order still makes sense if packaging is bulky. At the warehouse, replace guesses with stored-item evidence and decide which packaging is expendable. Before submission, compare compact, protected and split configurations under the current eligible lines. After delivery, retain the final measurements and charge as a private benchmark for similar future items.`,
          `Avoid publishing a universal cost per kilogram. Destination, line, first-weight units, fuel or operational components, restrictions and temporary availability can change. The durable SEO answer is the method: measure the finished parcel, use the route-specific formula, compare actual with volumetric weight, apply rounding and verify the live quote. That method explains why shipping costs move and gives the user several controllable inputs without pretending a public article can see the exact price in a private account.`,
        ],
      },
      {
        heading: "Run a final calculation audit",
        paragraphs: [
          `Before payment, confirm that dimensions refer to the same parcel configuration shown in the contents list. Check units, divisor, actual weight, volumetric result, rounding increment and route limits. Ensure removed packaging is genuinely removed in the instruction and required protection remains included. Then verify item restrictions and destination details. A calculator result copied from another route or an earlier package is not evidence for the parcel being purchased now.`,
          `Write the final comparison in one line per scenario: contents, outer dimensions, scale weight, route rule, chargeable weight and live quoted total. Choose the line using all of its terms, not only the smallest number. This disciplined calculation makes a Superbuy shipping estimate useful: it exposes whether cost is driven by mass, volume, packaging or eligibility and provides a clear record if the final carrier measurement produces a later adjustment.`,
        ],
      },
    ],
  },

  "superbuy-rehearsal-packaging-vs-shipping-expert": {
    callout: [
      "Choose the service that answers the unknown",
      "Packed-parcel measurement can improve size and weight inputs; expert advice can help compare route and handling choices. Names and availability vary, so use the current Superbuy interface for the exact service offered.",
    ],
    sources: [
      { label: "Superbuy public Shipping Expert and shipping-calculator pages, checked 12 September 2026" },
      { label: "Superbuy public parcel forwarding, consolidation and packaging guidance" },
      { label: "Current Superbuy Help Center service and fee guidance" },
    ],
    sections: [
      {
        heading: "Identify the uncertainty before selecting a service",
        paragraphs: [
          `Buyers often use rehearsal packaging as a broad name for preparing or measuring a likely parcel before the final shipping decision. Superbuy currently also presents a Shipping Expert entry point for planning support. These concepts should not be treated as interchangeable buttons with guaranteed results. One uncertainty may be physical: which cartons will be removed and what the packed dimensions will be. Another may be logistical: which eligible line, protection level or split plan fits the contents and destination. State the unknown first, then check which current account service addresses it.`,
          `Do not buy an optional service simply because a forum calls it essential. A compact parcel with clear weight, no unusual restrictions and several suitable lines may already have enough evidence. A bulky shoe order, fragile mixed parcel or shipment near a size limit may benefit more from measured packaging. A restricted or destination-sensitive parcel may need route guidance even when dimensions are known. The decision should reflect how much a wrong estimate would cost and whether the service produces evidence that changes your action.`,
        ],
      },
      {
        heading: "Use packed-parcel measurement for physical uncertainty",
        paragraphs: [
          `A packaging or rehearsal-style step is most valuable when outer size is likely to drive chargeable weight. Retail boxes, rigid goods, reinforcement and mixed shapes can make product-level estimates misleading. Define the exact contents and instructions before measurement: boxes to keep or remove, soft goods that may be folded, fragile areas, acceptable compression and pieces that must remain together. Without that specification, the resulting dimensions may describe a package you never intended to ship.`,
          `The useful output is a relationship between contents, packing choice, actual weight and outer dimensions. Enter those dimensions into each eligible line's volumetric formula and apply its charging increments. If the parcel crosses a route limit or remains expensive, compare a justified split or revised packing instruction. Measurement reduces uncertainty; it does not guarantee the carrier will record identical values or that route availability and price will remain unchanged until payment.`,
        ],
        bullets: [
          "Contents are fixed before packing",
          "Removal, compression and protection instructions are explicit",
          "Outer dimensions and actual weight are recorded",
          "Quotes are refreshed after the measurement",
        ],
      },
      {
        heading: "Use expert guidance for route and handling uncertainty",
        paragraphs: [
          `Route choice depends on more than weight. Destination, product categories, batteries, liquids, powders, magnets, declared value, parcel dimensions and temporary carrier capacity can change eligibility. Expert guidance can be useful when the visible options are difficult to compare or when one item changes the whole parcel. Ask a bounded question that includes destination, contents, priority and risk: for example, compare currently eligible tracked lines for this measured parcel where the rigid box must remain.`,
          `Do not ask which route is universally best or cheapest. The answer can only be current for the described parcel and date. Request the criteria behind a recommendation: chargeable-weight method, estimated transit range, tracking, restrictions, handoffs, compensation terms and packaging assumptions. Save the response with the live quote. Advice is more valuable when it reveals why one line fits the evidence, not when it substitutes a name for the buyer's decision.`,
        ],
      },
      {
        heading: "Know when both steps may be useful",
        paragraphs: [
          `A difficult parcel can require physical evidence first and route comparison second. Imagine several shoe boxes plus a fragile accessory. The original warehouse item weights do not show the final carton volume, and removing every box may expose the fragile item. First define a protected packing scenario and obtain the available measurement. Then use the resulting weight and dimensions to compare eligible routes or request focused guidance. Reversing the order can produce advice based on a parcel that changes materially when packed.`,
          `The two steps still need a stopping rule. If measured packaging makes the parcel comfortably eligible and live route terms are clear, further consultation may add little. If every available line is unsuitable because of a restricted item, expert advice cannot change the product's classification by renaming it. Separate that item or resolve its eligibility. Optional services should reduce a named uncertainty, not create a ritual that delays every ordinary parcel.`,
        ],
      },
      {
        heading: "Compare cost against the value of better evidence",
        paragraphs: [
          `Check current service names, fees and processing information in the live Superbuy interface because they can vary. Evaluate the optional cost against the possible error. If a bulky parcel could be charged several kilograms above the scale weight, reliable dimensions may materially improve the choice. If two routes have similar totals but very different restrictions or tracking, a documented comparison may be valuable. For a small, replaceable item with a wide budget margin, the same service may not change the outcome.`,
          `Include time in the comparison. Waiting for additional handling can matter when a seller remedy or personal deadline is approaching. However, rushing an unresolved expensive parcel can be more costly than a short planning step. Record the request date, expected output and next decision so the order does not sit without ownership. The goal is not the smallest optional-service bill; it is the lowest reasonable total risk for the parcel you actually plan to send.`,
        ],
      },
      {
        heading: "Keep service output separate from guarantees",
        paragraphs: [
          `A measured parcel can still receive a final logistics-provider adjustment, and a route recommendation cannot guarantee transit time, customs clearance or delivery condition. Third-party carriers, export processing, flights, weather, customs and final-mile handoffs remain outside a simple planning choice. Save the terms shown when you submit the parcel, including cover or compensation details. Do not convert an estimated delivery window into a promised date or interpret a recommended line as universal approval for every item.`,
          `Likewise, expert guidance does not change import law or make a prohibited item permissible. Product descriptions and declared values must remain truthful. When classification or destination legality is uncertain, use official customs or regulatory sources for that product and country. Superbuy can explain service options within its platform, while the recipient remains responsible for understanding destination requirements. Keeping those roles separate prevents planning advice from being mistaken for legal clearance.`,
        ],
      },
      {
        heading: "Use a simple decision matrix",
        paragraphs: [
          `Choose physical measurement when unknown packed dimensions could alter chargeable weight, line eligibility or package protection. Choose route guidance when measured inputs exist but restrictions, handoffs or service terms are difficult to compare. Consider both when packing materially changes the route set. Choose neither when the parcel is simple, current quotes are clear and the cost difference cannot affect the decision. In every case, verify what the account actually offers rather than relying on an old label from another market or warehouse.`,
          `Write the conclusion beside the parcel group: unknown addressed, evidence received, quote refreshed and action chosen. If a service did not answer the question, contact support with the parcel number and exact missing information rather than paying repeatedly for loosely worded requests. This record makes the next shipment easier because you can compare which uncertainty actually mattered. It also keeps the recommendation honest: rehearsal-style measurement and Shipping Expert are tools for different planning gaps, not magic discounts.`,
        ],
      },
      {
        heading: "Submit only after the plan and parcel agree",
        paragraphs: [
          `Before payment, compare the final contents with the package that was measured or discussed. Confirm that no item was added, removed or returned afterward. Recheck outer dimensions, weight, packaging instructions, restricted-item notes and the selected line. If anything material changed, refresh the quote or advice. A previous measurement cannot describe a new parcel, and expert guidance for one contents list should not be applied to another.`,
          `The practical sequence is diagnose, measure where needed, compare current eligible lines, document the decision and submit. This prevents optional services from becoming isolated transactions. Each output supports the next step and stays attached to the parcel evidence. Used this way, packing measurement reduces physical uncertainty and expert input reduces route uncertainty, while the live Superbuy quote and final logistics measurement remain the financial source of truth.`,
        ],
      },
    ],
  },

  "superbuy-restricted-items-shipping-lines": {
    callout: [
      "Eligibility starts with the real contents",
      "Screen sensitive categories before purchase and describe them truthfully. A line shown for another parcel, country or date is not proof that it can carry your item.",
    ],
    sources: [
      { label: "Superbuy public Mail Restrictions and shipping guidance, checked 12 September 2026" },
      { label: "Superbuy public shipping calculator and parcel forwarding notices" },
      { label: "Current Superbuy service disclaimer on prohibited and infringing goods" },
    ],
    sections: [
      {
        heading: "Screen the product before the agent buys it",
        paragraphs: [
          `Restricted-item research belongs at the product stage, not only after warehouse arrival. Batteries, liquids, powders, magnets, pressurised containers, food, medicine, cosmetics, sharp objects, electronics and goods involving intellectual-property risk can face carrier or destination limits. The category alone may not settle the question: battery capacity, whether it is installed, liquid volume, material, brand treatment and destination rules can matter. Capture the listing and ask the live service which information is needed before committing to a purchase.`,
          `Superbuy's public pages state that customers must ensure goods comply with Chinese and destination laws and warn against illegal, prohibited, counterfeit or infringing items. A spreadsheet card cannot certify compliance, and a seller's willingness to dispatch domestically does not prove international eligibility. If the product works only when a specific uncertain route remains available, treat that as a fragile purchase plan. Choose an alternative item, obtain current clarification or accept the possibility that it may need a different disposition at the warehouse.`,
        ],
      },
      {
        heading: "Describe the item by transport-relevant facts",
        paragraphs: [
          `Build a short item record containing product type, material where known, battery or liquid presence, dimensions, weight, quantity, declared purpose and any warning shown during ordering. Do not hide a battery inside a generic label such as accessory or describe a liquid cosmetic as clothing. Accurate classification allows the platform and carrier to apply the correct route rules. An intentionally vague or false description can cause rejection, return, inspection, loss of coverage or customs problems.`,
          `When the seller description is unclear, do not guess. Ask for model details, ingredient or material information, battery specifications or packaging evidence where relevant. A warehouse photograph may confirm a printed label or included battery, but it cannot validate chemical composition or regulatory compliance. Decide whether the available evidence is enough before international submission. For high-risk or regulated products, consult the current destination authority or a qualified adviser instead of relying on forum shorthand.`,
        ],
        bullets: [
          "Product type and quantity are specific",
          "Battery, liquid, powder or magnet presence is disclosed",
          "Material and model evidence are preserved where relevant",
          "Destination and current carrier rules are checked",
        ],
      },
      {
        heading: "Understand why one item changes the whole route list",
        paragraphs: [
          `When items are consolidated, the complete contents determine eligibility. A battery-powered device added to ordinary clothing may remove lines that accepted the clothing alone. A liquid or oversized object can have the same effect. This does not mean the restricted item is impossible to send; it means the combined parcel has a different set of choices. After warehouse intake, compare a parcel containing everything with a justified split that isolates the limiting item. Use current quotes and restrictions for both scenarios.`,
          `Do not split goods to create inaccurate declarations or evade rules. A split should reflect genuine carrier eligibility, packaging, fragility, value or urgency. Record which item caused the difference and which line accepts it. If no compliant route appears, contact support with the exact product details or use the available return or alternative disposition while any remedy remains. Relabelling the item will not make the operational or legal restriction disappear.`,
        ],
      },
      {
        heading: "Treat branded and intellectual-property risk separately",
        paragraphs: [
          `A visible brand name can affect carrier treatment, customs attention and intellectual-property risk, but a warehouse image cannot authenticate an item. Do not publish or rely on a claim that QC photos prove legitimacy. Preserve the seller listing and any genuine documentation, understand the destination's import rules and avoid goods you cannot lawfully ship. Superbuy's disclaimer places responsibility on the user to avoid illegal, counterfeit and infringing products, even if a domestic seller accepted the order.`,
          `Route availability should not be interpreted as customs approval. A carrier can accept a category for transport while destination authorities later assess admissibility, value or intellectual-property concerns. Conversely, a branded item may face a platform restriction before a customs question arises. Keep these stages distinct. If lawful status is uncertain, the safe response is current official guidance, not a creative description or another buyer's successful tracking screenshot.`,
        ],
      },
      {
        heading: "Check packaging and handling conditions",
        paragraphs: [
          `Some items require protective or separated packaging, terminal insulation, leak prevention or limits on combination with other goods. Use only packaging services and instructions appropriate to the actual product and current carrier rules. A cosmetic bottle and an installed device battery create different risks. Ask for the visible condition of seals, terminals and outer packaging where that evidence matters, but do not request handling that could open or damage goods when the service does not permit it.`,
          `Packaging can also affect dimensions and chargeable weight. Separating a sensitive item may create an additional parcel and repeated minimum charges; reinforcement may increase volume. Include those consequences in the comparison rather than assuming eligibility is free. A compliant route with clear handling can be better than the lowest visible price. Save the selected line's restrictions and compensation exclusions at submission because a generic insurance label may not cover every sensitive product or failure mode.`,
        ],
      },
      {
        heading: "Recheck destination rules at parcel submission",
        paragraphs: [
          `Transport eligibility and import admissibility are different decisions. The shipping line addresses what the carrier will handle; destination law governs what may enter, how it is declared and which permits, taxes or agency controls apply. Rules can change after the product was purchased. Before submitting the parcel, check current official guidance for food, medicines, cosmetics, plants, animal products, wireless devices and other regulated categories. This article cannot classify an individual product or replace destination-specific advice.`,
          `Use truthful product descriptions, quantities and values. Preserve the order, payment evidence, warehouse record, parcel contents and declaration. If customs or a carrier asks for documents, verify the request through an official channel and provide the exact record requested. A consistent evidence file can resolve questions faster, while conflicting descriptions make the parcel harder to explain and can weaken a compensation claim.`,
        ],
      },
      {
        heading: "Compare only lines currently eligible for the full parcel",
        paragraphs: [
          `Once contents and destination are fixed, review the options Superbuy displays for that parcel. Compare total quote, chargeable-weight method, estimated transit range, tracking, carrier handoffs, size limits, product restrictions, customs arrangement and compensation terms. A route recommended in an old article or for another country is not a current option. Save the dated terms you choose because names, capacity and eligibility can change.`,
          `If an item carries a warning, confirm whether the line explicitly accepts it and whether extra packaging or documentation is required. Do not infer acceptance from the absence of a warning on a spreadsheet. When support provides a clarification, retain it with the item and parcel number. The route choice should be auditable: this was the real item, these were the available lines on this date and this option was selected for these recorded reasons.`,
        ],
      },
      {
        heading: "Create a pre-purchase stop rule",
        paragraphs: [
          `Before buying a sensitive item, define what would make you stop: no confirmed compliant line, missing battery specification, unclear liquid volume, destination prohibition, seller documentation gap or unacceptable return terms. A stop rule prevents sunk cost from turning uncertainty into a bad parcel decision. If the item reaches the warehouse despite an unexpected restriction, resolve it before storage time and seller remedies disappear. Do not keep adding ordinary products around a blocked item and hope consolidation will solve the problem.`,
          `The dependable method is identify, document, check transport restrictions, check destination rules, inspect the received item, compare eligible parcel configurations and declare truthfully. It may produce fewer exciting spreadsheet rows, but it avoids clicks that end in unusable stock or a parcel with no practical route. For SEO and for buyers, current eligibility evidence is more valuable than a permanent list that becomes wrong as carriers and regulations change.`,
        ],
      },
    ],
  },

  "superbuy-warehouse-order-status-guide": {
    callout: [
      "A status label is one event, not the whole story",
      "Record the exact label, timestamp, supporting evidence, next owner and next review. Order, warehouse and parcel milestones belong to different stages.",
    ],
    sources: [
      { label: "Superbuy public Order Status and Shopping Agent guidance, checked 12 September 2026" },
      { label: "Superbuy public parcel forwarding and warehouse guidance" },
      { label: "Current Superbuy Help Center and contact guidance" },
    ],
    sections: [
      {
        heading: "Separate product, warehouse and parcel timelines",
        paragraphs: [
          `A Superbuy purchase does not move through one continuous carrier timeline. The product stage covers order submission, purchasing from the marketplace seller and domestic movement to the warehouse. Warehouse intake creates an item record, inspection evidence and a decision to store, question, return or include in a parcel. International submission creates a new parcel with its own packing, route, payment and tracking events. Confusing those timelines makes ordinary transitions look like delays and makes genuine gaps harder to describe.`,
          `Create three columns or linked tables for order, warehouse item and international parcel. Keep their identifiers separate and connect them with a private item code. One marketplace order can contain several items, and one parcel can combine items from several orders. A parcel number should never overwrite the seller order number. The relationship explains where an item came from, what evidence approved it and where it went after consolidation.`,
        ],
      },
      {
        heading: "Interpret submitted and purchased as different evidence",
        paragraphs: [
          `Submitted normally means the buyer has created or authorised an order record in the platform; it does not by itself prove that the agent completed the marketplace purchase. Purchased or an equivalent live label indicates a later action, but the exact wording and sequence can vary. Copy the status shown in your account rather than forcing it into a universal list. Add a normalised note such as buyer submitted, agent action, seller action or payment clarification so the next owner is visible.`,
          `If movement pauses, check for unread messages, price changes, option clarification, domestic delivery charges or seller stock questions. A valid order may be waiting for the buyer rather than the agent. Do not place a duplicate simply because the latest label has not changed. Record the last event, what evidence should happen next and a review date. Contact support with the order number and exact gap when the current guidance or ordinary processing window no longer explains it.`,
        ],
        bullets: [
          "Exact live status text and timestamp",
          "Order or item identifier",
          "Evidence expected next",
          "Owner and review date",
        ],
      },
      {
        heading: "Distinguish seller dispatch from warehouse receipt",
        paragraphs: [
          `A seller can create a domestic tracking number before the Chinese carrier accepts the parcel. The first carrier scan is stronger dispatch evidence than the number alone. Likewise, a delivered scan at the warehouse address does not necessarily mean intake, identification and storage are complete. Record carrier acceptance, transit, delivered and warehouse processed as separate milestones. This creates a precise question if the carrier shows delivery but no warehouse item appears.`,
          `For parcel forwarding, Superbuy's public notices tell users to provide logistics information and match packages with tracking numbers. Missing or incorrect logistics details can cause abnormal-item handling. Keep sender, number of packages and each tracking number accurate. Shopping-agent orders and self-forwarded packages can therefore have different intake evidence. Label the service type in your tracker so you do not expect shopping-agent inspection or status behaviour from a forwarding record that follows another scope.`,
        ],
      },
      {
        heading: "Treat stored as the beginning of a decision window",
        paragraphs: [
          `Stored means the item has reached a warehouse stage where its record and available photos can be reviewed; it does not mean the buyer has approved it. Match product, colour, size, quantity and included pieces with the saved order. Review visible condition and request a targeted measurement or close-up only when it will change the decision. Record accept, clarify or after-sales. The stored label describes location and processing, while the decision field describes your judgment.`,
          `Superbuy currently advertises 90 days of free storage for its shopping workflow, but seller return eligibility is separate and can close sooner. Add both the warehouse deadline shown in the live account and the next QC review date. Resolve discrepancies promptly instead of waiting until all future purchases arrive. Storage is useful for consolidation only after each item has a closed inspection decision and a clear reason to remain.`,
        ],
      },
      {
        heading: "Build the parcel without losing item history",
        paragraphs: [
          `When accepted items are selected for submission, assign a parcel-group ID and keep the source item IDs attached. Record the intended contents, packaging instructions, restrictions, approximate weight and reason for grouping. Submitted for packing does not yet mean handed to an international carrier. The warehouse may measure, pack, quote or ask for another decision. Preserve those events so a change in dimensions or eligible routes can be traced to a specific parcel configuration.`,
          `If an item is excluded, state whether it remains stored, enters after-sales or belongs to a different parcel. Do not remove it from the record merely to make the contents list look complete. Consolidation creates one shipping object from several product histories. A reliable tracker maintains both levels: each item has an acceptance record, and the parcel has its own packing and route record.`,
        ],
      },
      {
        heading: "Separate parcel payment from carrier handoff",
        paragraphs: [
          `A shipping deposit or completed parcel payment is a financial event. Packing completed is a warehouse event. A carrier tracking number and first acceptance scan are logistics events. They may occur at different times. Record the selected line, quoted basis, payment timestamp, packed dimensions, actual weight, any later adjustment and first carrier scan separately. That sequence makes it possible to ask whether a parcel is waiting for packing, payment confirmation or collection.`,
          `Tracking can also pause between export, flight, customs and final-mile handoffs. Interpret milestones rather than assuming every quiet period means loss. Compare the current route's stated service information and use the parcel number when contacting support. If a destination carrier is named, verify its official tracking page before sharing personal data or paying an unexpected fee. The status tracker should reduce speculation by keeping the last verified event and responsible party visible.`,
        ],
      },
      {
        heading: "Use status evidence in support requests",
        paragraphs: [
          `A strong support message contains the correct identifier, service path, exact current status, last dated evidence and requested action. For example: domestic carrier shows delivered at the warehouse on 10 September, but no stored item record appears for order X; please confirm intake matching. Or: parcel Y was paid and packed, but no carrier acceptance scan appears; please confirm the handoff stage. These messages are easier to investigate than asking where the order is without defining which order or stage.`,
          `Keep screenshots free of unnecessary personal information when sharing them. The private tracker can reference protected payment or address documents without copying them into a public spreadsheet. Record the support response as a new event instead of overwriting the old status. This preserves whether the platform confirmed a delay, requested buyer action or provided a new tracking number and gives the next follow-up an accurate chronology.`,
        ],
      },
      {
        heading: "Close every item with an outcome",
        paragraphs: [
          `An item is not complete merely because the latest status stopped changing. Close it with a defined outcome: returned, refunded, cancelled, included in parcel, delivered or otherwise resolved. Keep the closing date and evidence. A return may have both a warehouse dispatch and refund event; a shipped item should link to its parcel and final delivery record. Historical rows help prevent duplicate purchases and show which status gaps actually mattered.`,
          `The durable Superbuy status method is to preserve exact labels while organising them by stage and ownership. Submitted, purchased, seller dispatched, delivered to warehouse, stored, parcel submitted, packed and carrier accepted are useful concepts, but the live account remains the source for the wording on a particular order. A tracker turns those labels into decisions by adding evidence, next action and closure rather than pretending a single status can explain the whole journey.`,
        ],
      },
    ],
  },

  "superbuy-spreadsheet-broken-links-options": {
    callout: [
      "Do not preserve a click by changing the product",
      "When a listing changes, mark the old row honestly and verify any replacement as a new evidence record. A similar image or title is not continuity.",
    ],
    sources: [
      { label: "Superbuy public Shopping Agent and marketplace-link guidance, checked 12 September 2026" },
      { label: "Current Taobao, Tmall, JD and Weidian link-handling guidance available through Superbuy" },
      { label: "Sheet Superbuy editorial link-verification method" },
    ],
    sections: [
      {
        heading: "Recognise the main kinds of link failure",
        paragraphs: [
          `A spreadsheet link can fail in several ways. It can return an error, redirect to a marketplace login, open a seller home page, show a removed product, load a different item or keep the same product while changing options and price. Those conditions should not share one broken label. Record a specific status: unreachable, access condition, redirected, removed, product replaced, options changed or price recheck. The distinction tells the reader whether the row is temporarily hard to open or no longer represents the advertised product.`,
          `Reachability alone is weak. A successful page can be more dangerous than a 404 when the seller has reused it for an unrelated item. Compare title, first image, seller, product type and option set with the last verified record. If the identity no longer agrees, stop presenting the old card as current. Keep the historical observation internally, but change the public status or remove the link until a valid destination has been confirmed.`,
        ],
      },
      {
        heading: "Preserve the last known-good record",
        paragraphs: [
          `A maintainable row needs an internal ID, exact destination URL, marketplace, seller when visible, neutral product title, first-image reference, intended option, reference price context and last-checked date. Preserve the original Chinese option text or image where translation is ambiguous. This record explains what the link represented when it was published and provides the baseline for identifying a later change. Without it, an editor can only guess whether the product moved or the original row was wrong.`,
          `Do not overwrite evidence silently. Add a maintenance event with date, observed change and next action. For example: 12 September, listing reachable but black size-L option removed; keep card paused and search same seller. Or: destination now displays an accessory rather than the jacket; retire row. A change log protects users and helps search engines receive stable, accurate pages instead of a URL that quietly changes subject.`,
        ],
        bullets: [
          "Last known-good URL, seller, title and image",
          "Exact intended option and price context",
          "Date and type of observed change",
          "Public status and replacement action",
        ],
      },
      {
        heading: "Check whether only an option changed",
        paragraphs: [
          `A seller can remove a colour or size while the main listing remains valid. In that case, the row may still be useful if its wording does not promise the missing option. Recheck the complete option list, selected images, price range and domestic delivery. If the spreadsheet specifically highlights the removed version, pause or update it. Do not substitute the nearest colour or size as if it were the original. Product identity can remain stable while the purchase decision changes materially.`,
          `When an option returns, verify it again rather than restoring the old status automatically. The seller may use the same label for a new batch, material or price. Save the new date and current selection. If a reader already created a Superbuy order before the change, the submitted order record and agent message become their source of truth; changing the public spreadsheet does not modify an existing private order. Keep those timelines separate.`,
        ],
      },
      {
        heading: "Treat redirects as unverified until identity matches",
        paragraphs: [
          `Marketplaces may redirect mobile shares, expired promotion links or removed items. Follow the redirect in a normal browser and compare the final seller, product, options and first image. A redirect to the same seller does not prove it is the same listing. A different URL can be a legitimate canonical address, but only the identity evidence can establish continuity. Record both the old and final destination during the check.`,
          `Avoid chains through unrelated tracking or affiliate pages that hide the final target. A public spreadsheet should make the destination understandable. If login or regional access prevents a reliable check, label the row accordingly and compare what Superbuy imports from the URL. A successful import can provide evidence, but it does not justify a verified status when the seller and option cannot be confirmed. Uncertainty should remain visible.`,
        ],
      },
      {
        heading: "Verify a replacement as a new product record",
        paragraphs: [
          `When the original is gone, search the same seller or catalogue for a replacement, but do not inherit the old row's claims. Compare product identity, options, size chart, price basis, domestic delivery and seller. Assign a new internal record or version and a new checked date. If the replacement uses different photographs, material, measurements or variant names, describe it as a new listing even when the product looks similar.`,
          `Keep the old slug only when the page topic remains truthful and the replacement is clearly documented; otherwise retire the card and add a new one. SEO continuity is not a reason to misrepresent the purchase. A user arriving from search needs the current facts more than an unchanged click count. Where no reliable replacement exists, point the reader to a category search or the main catalogue rather than selecting an unverified product on their behalf.`,
        ],
      },
      {
        heading: "Recheck prices without promising a fixed deal",
        paragraphs: [
          `A spreadsheet reference price can change because the seller edits options, ends a promotion, adds domestic delivery or replaces the cheapest component. Confirm which complete-product option the number represents. If the listing shows a range, do not attach the minimum to a premium version. Update the date and explain that the destination remains the source for current price, stock and currency conversion. The row should help comparison, not freeze a commercial offer that the site does not control.`,
          `Keep international shipping outside the product price. Even a stable listing cannot predict the packed parcel, chargeable weight, route eligibility, destination tax or later carrier adjustment. When users search for a Superbuy spreadsheet link, the honest click promise is a relevant current product destination with clear reference context. It is not a guaranteed delivered price.`,
        ],
      },
      {
        heading: "Protect existing orders from public-row changes",
        paragraphs: [
          `If a listing changes after an order was submitted, preserve the buyer's order confirmation, selected option, authorised amount and any agent message. The current public page may no longer show what was purchased. Compare warehouse intake with the private order evidence, not the newly edited spreadsheet row. If the seller changed price or option before purchase completion, record the clarification and decide whether to authorise it. Do not assume an earlier spreadsheet screenshot obliges the seller to fulfil a version that was never submitted.`,
          `At QC, link the received item to the saved order and use standard or targeted photos for visible facts. A broken public link does not automatically mean the warehouse item is wrong, and a working replacement link does not prove it is right. The private order history controls the comparison. This separation prevents routine spreadsheet maintenance from rewriting the evidence behind an active purchase.`,
        ],
      },
      {
        heading: "Use a recurring maintenance queue",
        paragraphs: [
          `Prioritise rows by clicks, impressions, age and risk. Frequently opened products and listings with many variants deserve more frequent review than low-interest stable pages. Check destination response, seller, product identity, options and price context. Update the visible last-checked date only after completing the whole comparison. A monitoring tool that only confirms HTTP success should not renew a verified badge.`,
          `The complete recovery process is detect, classify, preserve, verify and publish. Detect the change, classify its type, preserve the last known-good record, verify either the remaining option set or a true replacement, and publish a dated status. This method may temporarily reduce the number of live rows, but it improves trust and click quality. A smaller index of honest destinations is more useful than a large sheet whose links quietly drift into unrelated products.`,
        ],
      },
    ],
  },
};
