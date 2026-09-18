export const priorityArticleKeys = [
  "articles/how-long-does-hacoo-take-to-deliver-uk",
  "articles/how-to-use-hacoo-uk",
  "articles/what-is-hacoo-how-it-works",
  "articles/hacoo-returns-refunds-uk",
  "articles/hacoo-website-vs-app",
  "articles/hacoo-tracking-uk",
  "articles/hacoo-uk-vat-customs",
  "articles/hacoo-order-checklist-uk",
] as const;

export type PriorityArticleKey = (typeof priorityArticleKeys)[number];

export type ArticleSource = { label: string; href: string };
export type PriorityArticle = {
  minutes: number;
  published: string;
  reviewed: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  takeaways: string[];
  sources: ArticleSource[];
};

const hacooHome: ArticleSource = {
  label: "Hacoo official website — platform description and community model",
  href: "https://www.hacoo.app/",
};
const shipping: ArticleSource = {
  label: "Hacoo Shipping & Delivery — UK estimate, processing, split orders and after-sales",
  href: "https://www.hacoo.app/en-US/pages/shipping-info",
};
const appStore: ArticleSource = {
  label: "Apple App Store — Hacoo app listing and developer privacy disclosure",
  href: "https://apps.apple.com/gb/app/hacoo-discovering-inspiring/id1399907836",
};
const googlePlay: ArticleSource = {
  label: "Google Play — official Android app listing",
  href: "https://play.google.com/store/apps/details?id=com.saramart.android",
};
const govTax: ArticleSource = {
  label: "GOV.UK — tax and customs for goods sent from abroad",
  href: "https://www.gov.uk/goods-sent-from-abroad/tax-and-duty",
};

export const priorityArticleLabels: Record<PriorityArticleKey, { title: string; intro: string }> = {
  "articles/how-long-does-hacoo-take-to-deliver-uk": {
    title: "How Long Does Hacoo Take to Deliver to the UK? 2026 Guide",
    intro: "Use Hacoo's current UK estimate correctly, separate processing from transit, plan for split parcels and know when a tracking delay needs action.",
  },
  "articles/how-to-use-hacoo-uk": {
    title: "How to Use Hacoo in the UK: App, Region, Search and Orders",
    intro: "A practical UK workflow for setting the real region, checking a find, comparing sizes, reviewing delivery evidence and saving an order record.",
  },
  "articles/what-is-hacoo-how-it-works": {
    title: "What Is Hacoo and How Does It Work? UK Guide for 2026",
    intro: "Understand Hacoo's current community-and-discovery model, the roles of its website and app, and the checks a UK user should make before relying on a shared find.",
  },
  "articles/hacoo-returns-refunds-uk": {
    title: "Hacoo Returns and Refunds UK: Evidence, Timing and Lost Parcels",
    intro: "Build a useful after-sales record from the official 15-day statement, delivery evidence, item photos and the instructions shown for the actual order.",
  },
  "articles/hacoo-website-vs-app": {
    title: "Hacoo Website vs App: Official Routes, Login and Region Checks",
    intro: "Use the public website for policy and identity checks, the official app for account-specific activity, and avoid lookalike routes or region mismatches.",
  },
  "articles/hacoo-tracking-uk": {
    title: "Hacoo Tracking UK: Status Updates, Delays and Missing Parcels",
    intro: "Turn tracking scans into a dated UK delivery record, distinguish normal quiet periods from actionable problems and keep the evidence needed for carrier or platform support.",
  },
  "articles/hacoo-uk-vat-customs": {
    title: "Hacoo UK VAT and Customs: A Buyer’s 2026 Cost Checklist",
    intro: "Apply current GOV.UK rules to goods sent from abroad, distinguish VAT from customs duty and delivery charges, and avoid treating a displayed item price as the final landed cost.",
  },
  "articles/hacoo-order-checklist-uk": {
    title: "Hacoo Order Checklist UK: 12 Checks Before You Pay",
    intro: "A concise UK pre-payment review covering the real region, exact option, measurements, address, delivery estimate, tax uncertainty and privacy-safe evidence.",
  },
};

export const priorityArticles: Record<PriorityArticleKey, PriorityArticle> = {
  "articles/how-long-does-hacoo-take-to-deliver-uk": {
    minutes: 10,
    published: "2026-09-18",
    reviewed: "2026-09-18",
    sources: [shipping],
    sections: [
      {
        heading: "The short answer: plan around 15–25 days, not a guaranteed date",
        paragraphs: [
          "Hacoo's current Shipping & Delivery page lists 15–25 days for the United Kingdom. That is the clearest official answer to the query “how long does Hacoo take to deliver to the UK?”, but it is an estimate rather than a promise. The same page says receiving time combines processing and shipping, and warns that delays can happen. A sensible UK plan therefore treats the range as a starting window, not as a countdown that proves a parcel is late on day twenty-six.",
          "The estimate also applies at destination level, not to every item in every order. Stock position, order processing, the selected delivery service, a pre-order, a back-order and final-mile handoff can all change the path. The useful question is not only “how many days?” but “which stage is this order in, what date did that stage begin, and what evidence changed?” That framing produces better decisions than comparing one order with a fast delivery reported on social media.",
        ],
      },
      {
        heading: "Start the clock from the right event",
        paragraphs: [
          "Many delivery disputes begin because two different clocks are mixed together. The purchase date starts the customer's overall waiting period, while the dispatch date starts the carrier movement period. Hacoo says order processing normally takes three to five business days. Weekends, local holidays or an item awaiting availability can make calendar days and business days look very different. Record both dates, rather than assuming that a label created on the first day means the parcel entered international transit immediately.",
          "Create a simple timeline with order placed, payment confirmed, processing update, dispatch notice, first carrier acceptance scan, arrival-country scan and delivered scan. If the order page changes its estimate, record the new wording and date instead of overwriting the original. This does not make the estimate contractual, but it preserves what you saw and helps you identify whether the delay sits before dispatch, during international movement or after a UK carrier receives the parcel.",
        ],
        bullets: ["Order date", "Dispatch date", "First physical carrier scan", "Last movement scan", "Current estimated delivery window"],
      },
      {
        heading: "Processing time and shipping time are different",
        paragraphs: [
          "The official page explicitly defines receiving time as processing time plus shipping time. Processing covers work before the parcel is moving through the network. Shipping covers the journey after dispatch, including international transport and the last mile. A tracking number may exist while a parcel is still awaiting its first physical scan, so the appearance of a number is not the same as proof of movement. Look for a carrier event with a place or operational description.",
          "For planning, keep three columns: platform status, carrier status and your interpretation. “Shipped” on an order screen may mean the parcel was handed into a logistics flow; “label created” on a carrier page may mean only data was received. Your interpretation should stay cautious until the next scan. This separation is especially important when support asks for evidence, because a screenshot of an order status and a screenshot of carrier tracking answer different questions.",
        ],
      },
      {
        heading: "Why one order can arrive in more than one parcel",
        paragraphs: [
          "Hacoo's shipping page says available items may be dispatched before pre-ordered or back-ordered items. That means a multi-item order can split. Receiving one parcel does not prove that every item was packed into it, and a missing line on the first delivery is not automatically a lost item. Compare the parcel reference, dispatch notice and item lines before reporting a shortage. The order may show more than one tracking number or a second dispatch event later.",
          "Build an item-to-parcel table. List each ordered item, quantity, selected option, dispatch message, parcel number and received status. Photograph the outer label before opening, then record which items were actually inside. This approach prevents a partial delivery from being confused with a packing error. It also gives support a concise record if the order page shows one item as dispatched but no corresponding parcel or if a parcel arrives without an expected line.",
        ],
        bullets: ["Match every item line to a parcel reference", "Do not discard packaging before reconciliation", "Keep separate received and outstanding lists", "Check for later dispatch notices"],
      },
      {
        heading: "Use a deadline buffer for events and travel",
        paragraphs: [
          "A 15–25 day estimate is not a safe reason to order twenty-five days before a wedding, holiday, birthday or trip. A real deadline also needs time for processing variation, carrier delay, delivery attempts, inspection and a possible problem. Work backward from the last useful arrival date. Add time to try the item, check size and resolve an issue. If the order stops being useful after a specific date, make that condition explicit before paying.",
          "The correct buffer depends on the consequence of being late. An everyday item can tolerate more uncertainty than event clothing. A low-cost order can still create a high inconvenience if a replacement must be bought urgently. Write a go/no-go date in the record. If that date has passed, the disciplined decision may be to choose a local alternative rather than treating the official range as a guarantee it was never intended to be.",
        ],
      },
      {
        heading: "When quiet tracking is normal and when to investigate",
        paragraphs: [
          "International tracking can remain unchanged between export, line-haul movement, customs processing and handoff to a UK network. A quiet period is not proof that a parcel is lost, especially when the order is still inside the stated estimate. Investigate the last real scan: note its date, location, carrier and wording. Check whether the same tracking number works on a second carrier page after handoff, but avoid entering order credentials into unofficial tracking sites.",
          "Escalation becomes more reasonable when the estimate has passed, a carrier reports an exception, the parcel is marked delivered but cannot be found, or the status contradicts the address or destination. Hacoo's page directs users with delivered-but-missing parcels to the relevant carrier and also gives a support route. Prepare the order number, tracking number, delivery address in private, last scan and any safe delivery-place checks before making contact.",
        ],
      },
      {
        heading: "A practical UK delivery evidence pack",
        paragraphs: [
          "Keep only what helps resolve the order: confirmation, selected item lines, the delivery estimate shown for the order, dispatch notice, tracking history, parcel label and delivery photos where available. Store the files privately. If you need to share a screenshot publicly, redact the name, full address, phone number, email, order number, barcode and tracking number. Public posts rarely need those identifiers and exposing them can create account or delivery risk.",
          "Name evidence by date and event rather than with vague labels such as screenshot1. For example, 2026-09-18-order-confirmation and 2026-10-02-last-carrier-scan make the sequence understandable. Keep originals without annotations, then create redacted copies for sharing. A clean timeline is more useful than twenty overlapping screenshots, and it makes it easier to explain whether the problem concerns processing, international transit, UK handoff or a delivered status.",
        ],
      },
      {
        heading: "The decision rule for UK buyers",
        paragraphs: [
          "Use the official 15–25 day UK range as planning evidence and keep the live order estimate as transaction-specific evidence. Do not replace either with a creator's best-case story or an old forum post. If the order is within range and tracking shows normal movement, monitor it. If it is split, reconcile each item and parcel. If the range has passed or an exception appears, prepare the timeline and contact the responsible carrier or the support channel shown for the order.",
          "This method cannot predict the exact arrival day, but it answers the real search intent more honestly: Hacoo currently publishes a 15–25 day UK estimate, processing and shipping are separate, split dispatches are possible, and dates are not guaranteed. A buyer improves the outcome by allowing buffer, preserving evidence and escalating from the last verified event rather than from anxiety created by a silent status page.",
        ],
      },
    ],
    takeaways: ["Use 15–25 days as an estimate, not a promise.", "Record order and dispatch dates separately.", "Reconcile split orders item by item.", "Build buffer before an event or trip.", "Escalate from the last verified scan."],
  },
  "articles/how-to-use-hacoo-uk": {
    minutes: 11,
    published: "2026-09-18",
    reviewed: "2026-09-18",
    sources: [hacooHome, appStore, googlePlay, shipping],
    sections: [
      {
        heading: "Begin with the current Hacoo, not an old tutorial",
        paragraphs: [
          "Hacoo's current public website describes an open content-sharing community built around discovery, reviews and connections. That matters because older tutorials may present a narrower shopping flow or show screens that have changed. For a UK user, the safest starting point is the official website or the verified App Store or Google Play listing. Use those routes to identify the current app and developer before following a link from a spreadsheet, social post or search result.",
          "This independent guide does not process a Hacoo account, order or payment. Its job is to explain a repeatable verification workflow. Interfaces can differ by device, account, app version and region, so button names may move. The durable sequence is: install from an official store, set the real region, define the item, verify the exact option, compare measurements, review delivery evidence, confirm the address and save the final order record.",
        ],
      },
      {
        heading: "Install or update through an official app-store route",
        paragraphs: [
          "Open the Hacoo website and use its Get the App route, or search the Apple App Store or Google Play directly. Check the app name, developer identity, store URL, recent update information and privacy disclosure. Avoid downloading an APK or profile from a product-link group merely because it promises a different catalogue. A product find does not need permission to replace the official application on your phone.",
          "If the app is already installed but a guide no longer matches the interface, check the store for an update and restart the app. Do not assume that clearing data, changing countries or using a borrowed account is harmless. Those actions can change availability and may disconnect the view from your real delivery destination. Troubleshooting should preserve the real account and region so the result remains relevant to an actual UK order.",
        ],
      },
      {
        heading: "Set the real UK destination before judging a find",
        paragraphs: [
          "Region is not a cosmetic preference. It can affect visible content, delivery eligibility, pricing context and the route a shared link opens. Confirm the real destination as the United Kingdom and use the address you can genuinely receive at. A find that appears under another person's region is evidence that they saw it, not proof that the same option is available to you. Record the region alongside any saved link or code.",
          "When a link appears blank or different, retry it only after checking the app version, sign-in state and real region. Then compare the title, first image, selected option and identifier. If those identity fields do not match, treat the page as a different candidate even if the URL works. Do not force a foreign view with a false address; a catalogue result that cannot be delivered to the true destination is not a useful verification.",
        ],
      },
      {
        heading: "Search by attributes, then verify the destination",
        paragraphs: [
          "A broad brand or trend name can return many visually similar posts. Make the search more specific with item type, colour, silhouette, material wording and a distinctive feature. If you start from an external product index, treat it as a lead rather than an official Hacoo product page. Open the destination and compare the identity fields as one set. A matching image alone is insufficient when variants or bundles differ.",
          "Save one clean record per candidate: descriptive name, source URL or code, date, first image, option, size chart, displayed price and any stable identifier. Remove duplicates before comparing. This reduces the common mistake of treating the same listing reposted by several accounts as independent evidence. It also makes it easier to see whether a later change is a normal price update, a missing variant or a completely different destination.",
        ],
      },
      {
        heading: "Read reviews as evidence, not as a vote",
        paragraphs: [
          "Hacoo's public site emphasises community review and trust, but a platform-level rating cannot predict one selected item. Start with recent feedback attached to the exact product or variant. Check whether photos show the same colour, size or bundle, and look for repeated observations rather than a single dramatic claim. Separate comments about delivery, fit, material and customer service because they describe different parts of the experience.",
          "Photographs are strongest when they reveal proportions, labels, stitching, hardware or ruler measurements. Lighting and compression can distort colour, while perspective can make a shoe or bag look larger than it is. Use reviews to reduce uncertainty, not to create certainty. If the selected variant has little evidence, lower your confidence or pause; do not borrow confidence from reviews of another option that only shares the same landing page.",
        ],
      },
      {
        heading: "Choose size from measurements, not a familiar label",
        paragraphs: [
          "UK, EU and letter sizes are not universal measurements. Select the exact variant first, then save its current chart. Measure a comparable garment or shoe that already fits, using the same method shown by the chart. For clothing, useful fields may include chest width, body length, shoulder, sleeve, waist, rise and inseam. For shoes, foot length and internal length need enough allowance for the intended sock and fit.",
          "Write down the limiting measurement before choosing. A jacket may fit across the chest but fail at the shoulder or sleeve; trousers may match the waist but not the rise. If a chart lacks the dimension that controls your fit, the honest status is unknown. Sizing up automatically is not a method, and a creator's height and weight are weak substitutes for garment dimensions and fit preference.",
        ],
      },
      {
        heading: "Review delivery, address and total-cost uncertainty",
        paragraphs: [
          "Hacoo's shipping page currently lists 15–25 days for the UK and states that receiving time includes processing plus shipping. Use the range as planning context, not a guaranteed arrival. Check whether an item is pre-ordered or back-ordered, because the official page says available and delayed items can dispatch separately. If the purchase is tied to an event, set a no-go date with enough buffer to inspect the item after arrival.",
          "Read the address from the final review screen, not from memory: recipient, flat or house number, street, town or city, postcode and country. Confirm the displayed item total, delivery charge and any tax wording without assuming the first price seen is the final cost. Save the final summary privately. If a required field, fee or timeline remains ambiguous, pause before payment rather than hoping the next screen will correct it.",
        ],
      },
      {
        heading: "Save a privacy-safe order record",
        paragraphs: [
          "After placing an order, retain the confirmation, exact item lines, selected options, address summary, delivery estimate and payment record. Add dispatch notices and tracking later. Store originals privately and redact personal details before sharing anything in a group. A full address, phone number, email, order reference, barcode or tracking number should not be exposed merely to ask whether a status looks normal.",
          "The record should make the next action obvious. If an option changed before payment, stop. If processing continues, track the order date. If items split, match each parcel to its item lines. If something arrives, inspect it before removing tags or discarding packaging. This is how to use Hacoo in a way that survives interface changes: rely on a consistent evidence sequence instead of memorising one version of the app.",
        ],
      },
      {
        heading: "A final go, pause or stop decision",
        paragraphs: [
          "Go only when the real region, exact option, critical measurements, delivery window, address and price summary are sufficiently clear. Pause when one missing field can reasonably be checked, such as a size dimension or an address line. Stop when the destination contradicts a must-have requirement, the item cannot be delivered to the real region, the timing no longer works or the page changed identity. Not ordering can be a successful research outcome.",
          "This workflow answers more than where to tap. It explains how to preserve the meaning of the choice from discovery to delivery. The app supplies the account-specific interface; the public website supplies platform and policy context; your record supplies the evidence that a shared post cannot. When those three layers agree, the decision is better grounded and easier to resolve if something later changes.",
        ],
      },
    ],
    takeaways: ["Use the official store route.", "Set the real UK region first.", "Verify the exact option and measurements.", "Treat delivery dates as estimates.", "Keep the final order record private."],
  },
  "articles/what-is-hacoo-how-it-works": {
    minutes: 10,
    published: "2026-09-18",
    reviewed: "2026-09-18",
    sources: [hacooHome, appStore, googlePlay, shipping],
    sections: [
      {
        heading: "Hacoo's current official description",
        paragraphs: [
          "Hacoo's official website describes the service as an open content-sharing community for discovery, reviews and connections. It invites users to share lifestyle interests, find ideas and use community experience as a reference. That current description is the safest answer to “what is Hacoo?” because it comes from the platform itself. Older pages and third-party tutorials may use different labels, but they should not override how the service currently presents its purpose.",
          "For a UK visitor, the practical effect is that discovery can begin with a post, recommendation, shared link or app search rather than with a conventional store category. That is why the same item can be difficult to find again and why a link needs identity checks. The community context may help surface ideas, yet it does not make every post current, every review representative or every external destination an official Hacoo product page.",
        ],
      },
      {
        heading: "The website and app do different jobs",
        paragraphs: [
          "The public website explains Hacoo's community positioning and links to trust, safety, terms, privacy, contact and app routes. The mobile app is the account-specific environment where a user can encounter current content and features available to that device, region and account. A search engine result may show the public website even when a tutorial expects an app screen. That difference is normal and should not be solved by trusting an unofficial download.",
          "Use the website to verify identity and public policy context. Use the Apple App Store or Google Play listing to verify the application and review its current permissions or privacy disclosure. Use the installed app for account-specific actions. If a feature is absent, confirm version and region before deciding the platform removed it. Interfaces evolve, but the official route and the evidence you save remain more reliable than a screenshot from an undated blog post.",
        ],
      },
      {
        heading: "How discovery turns into a decision",
        paragraphs: [
          "A typical flow has four layers: discovery, identity, evaluation and transaction context. Discovery exposes an idea. Identity asks whether the opened destination is still the same item and option. Evaluation compares measurements, recent reviews, material wording and delivery evidence. Transaction context confirms the real region, address, price summary and conditions shown before payment. Skipping the middle layers turns inspiration into guesswork.",
          "The platform's emphasis on reviews can help evaluation, but a review must match the selected variant to be useful. A photo of another colour or size may demonstrate general construction while saying little about fit. A platform rating describes broad sentiment across many experiences and dates; it is not a product guarantee. The disciplined user narrows the evidence from platform, to listing, to exact option, to the actual order summary.",
        ],
      },
      {
        heading: "Why region and account context matter",
        paragraphs: [
          "Shared Hacoo content can cross borders faster than catalogue or delivery eligibility. A UK user may open something first posted under another country, app version or account state. The result can be blank, changed or unavailable. That does not automatically prove the original post was fake, and a working route does not prove it can be delivered to the UK. Set the true destination before treating visibility as evidence.",
          "Keep region with the saved record. If a link changes, compare the same app version, sign-in state and destination where possible. Avoid VPNs, false addresses and unofficial modified applications because they can produce a view unrelated to the real order path. Good research reproduces the conditions that matter to the buyer. A result that exists only after the destination is falsified is not a reliable UK buying option.",
        ],
      },
      {
        heading: "What Hacoo is not guaranteed to be",
        paragraphs: [
          "An independent guide should not describe Hacoo as a traditional proxy-buying agent unless the platform's current official material says so. It should not promise authenticity, fixed inventory, a universal delivery time or a successful refund. Community discovery and user reviews can inform a choice, but they do not certify a seller, product, material or outcome. The shipping page itself treats timing as guidance and says specific delivery dates are not guaranteed.",
          "Likewise, a third-party product index is not the official Hacoo catalogue. It can help a user find a route, but its job is to preserve the destination, image, option, source price and identifier at a check date. The transaction occurs elsewhere. That distinction protects the buyer from mistaking an editorial match for a platform promise and protects search quality by separating useful guidance from affiliation claims.",
        ],
      },
      {
        heading: "How delivery fits into the model",
        paragraphs: [
          "Hacoo's current shipping page lists a 15–25 day estimate for the UK and explains that receiving time includes processing plus shipping. It also states that pre-ordered or back-ordered items may dispatch separately from available items. Those facts belong to order planning, not to the definition of every community post. A user should consult the live delivery information associated with the actual transaction before assuming that a general discovery result is deliverable.",
          "This separation also explains why one order may show more than one parcel and why a creator's delivery story does not set your deadline. The platform publishes a general framework; the order supplies the specific item and status; the carrier supplies movement scans. A reliable explanation of how Hacoo works keeps those sources separate and uses each for the question it can actually answer.",
        ],
      },
      {
        heading: "The evidence hierarchy for a UK user",
        paragraphs: [
          "Use current official pages for the platform's identity and published policies. Use the official app stores for the genuine application and developer disclosures. Use the live order screen for transaction-specific selections, address and estimates. Use the carrier for physical movement. Use public reviews for themes and questions, not as binding rules. Use an independent guide for a method, not as a substitute for any of those sources.",
          "When two sources appear to conflict, check date and scope first. An old blog can be accurate for its time but obsolete now. A global help statement can differ from a destination-specific estimate. A carrier's delivered scan can conflict with what the recipient found. Do not average the statements into one confident answer. Record the conflict, identify the responsible source and ask for clarification through the current order or carrier route.",
        ],
        bullets: ["Official Hacoo page: identity and published policy", "Official app store: genuine application", "Order screen: selected transaction", "Carrier: parcel movement", "Public review: individual experience"],
      },
      {
        heading: "A safe first-session checklist",
        paragraphs: [
          "On a first visit, confirm the official domain, install through a verified store, set the real UK destination and read the platform's current description. Before acting on a shared find, compare title, image, variant, size information and identifier. Review recent item-level evidence, save the delivery estimate, read the final price and address summary, and keep the confirmation privately. These checks are useful even if the interface differs from the screenshots in this guide.",
          "The result is a simple answer: Hacoo currently presents itself as a community for sharing, discovery and trusted review, with a mobile app and public support pages. How it works for a buyer depends on moving carefully from content to an exact option and then to the actual order context. The community can help you discover; verification determines whether the find is still relevant to you.",
        ],
      },
    ],
    takeaways: ["Hacoo currently describes a discovery community.", "Website and app have different roles.", "Shared finds need identity checks.", "Region affects relevance.", "Official, order and carrier evidence are separate."],
  },
  "articles/hacoo-returns-refunds-uk": {
    minutes: 11,
    published: "2026-09-18",
    reviewed: "2026-09-18",
    sources: [shipping],
    sections: [
      {
        heading: "Start with the official 15-day after-sales statement",
        paragraphs: [
          "Hacoo's current Shipping & Delivery page says a customer can request after-sales support within 15 days of delivery if dissatisfied or if an issue occurs. It also says the customer must follow the refund instructions. That statement supplies a planning deadline, but the live order flow should control the exact evidence and steps for the particular case. Do not wait until the final day to discover that a photo, label or carrier record is missing.",
          "A return and a refund are not interchangeable words. The public page says a user does not need to return the product in the after-sales process it describes, while eligibility still depends on following instructions. A specific order may present more detailed wording. Save that wording before submitting. This guide explains how to prepare evidence; it does not promise approval or replace the terms shown in the account.",
        ],
      },
      {
        heading: "Inspect before washing, wearing or discarding packaging",
        paragraphs: [
          "Open the parcel carefully and photograph the outer condition and label before throwing anything away. Compare the received item with the confirmation: product, colour, size, quantity and included pieces. If the issue concerns fit, measure before washing. If it concerns damage, show both the full item and the defect. Keeping tags, inner bags, barcodes and packaging makes the record easier to connect to the order.",
          "The goal is not to produce a dramatic image; it is to make the problem identifiable. Take a full-item view, a medium view that locates the issue and a sharp close-up. Use neutral lighting and no beauty filter. For a measurement problem, place the tape flat and show its starting point. Keep original files with timestamps. Annotated copies can explain the issue, but the unedited original remains the stronger evidence.",
        ],
      },
      {
        heading: "Describe one problem in verifiable terms",
        paragraphs: [
          "A support request should state what was ordered, what arrived and how they differ. “Bad quality” is difficult to assess. “The selected black size M arrived in blue,” “the zip does not close,” or “the item line shows quantity two but the parcel contained one” identifies a checkable mismatch. Avoid claims about authenticity or material composition unless you have a responsible method to establish them.",
          "Use dates and references without posting them publicly. Include order date, delivery date, item line, selected option and the exact status shown. If the problem is a missing item, first check whether the order was split. Hacoo's shipping page says available items may dispatch separately from pre-orders or back-orders. A second parcel reference can change the correct issue from missing item to outstanding split shipment.",
        ],
      },
      {
        heading: "Build an evidence set for the issue type",
        paragraphs: [
          "Different problems require different proof. Wrong option: confirmation plus received label and full item. Size discrepancy: saved chart, selected size, label and flat measurement. Damage: outer parcel, inner packaging, full item and defect. Missing quantity: order lines, parcel label, unboxing record and contents. Delivered-but-not-received: carrier status, safe-place checks and contact record with the carrier.",
          "Do not send every screenshot you own without an index. Name files in order and provide a one-paragraph timeline. Support can understand five relevant files faster than thirty duplicates. If the in-app form limits attachments, prioritise identification, context and detail. Preserve the remaining originals in case a later reply requests another view. A concise pack improves clarity without changing the platform's eligibility decision.",
        ],
        bullets: ["Proof of selected option", "Proof of what arrived", "Context photo", "Detail photo", "Dated timeline"],
      },
      {
        heading: "Act promptly and preserve the submission record",
        paragraphs: [
          "Treat delivery day as day zero for your private deadline calendar and submit as soon as the issue is documented. Do not assume the last possible day in one time zone is safe in another. Save the submitted description, attachment names, case reference and timestamp. If the platform asks for more evidence, record the request and response date so the sequence remains clear.",
          "A confirmation that a message was sent is not the same as a refund decision. Track stages separately: request submitted, evidence requested, evidence supplied, decision issued, refund initiated and funds received. Payment networks can take additional time after a platform initiates a refund. Report what the account actually shows rather than telling others that a generic processing period applies to every bank or method.",
        ],
      },
      {
        heading: "Handle a delivered-but-missing parcel as a carrier problem first",
        paragraphs: [
          "Hacoo's shipping page says that when tracking states delivered but the parcel is not received, the customer should report it to the relevant shipping carrier. Check the full address privately, household members, reception, safe place, neighbour and any delivery photo. Ask the carrier for the scan details or case number. Do not publish the tracking number while asking a community group for help.",
          "Then retain the carrier response alongside the Hacoo order record. If the carrier confirms misdelivery or cannot locate the parcel, that evidence is more useful than a screenshot that says only delivered. If the parcel later appears, update the record. A delivered scan is a carrier assertion, not physical proof in your hands, but resolving the discrepancy requires the carrier's process and the current platform support route rather than speculation.",
        ],
      },
      {
        heading: "Keep refunds, chargebacks and complaints in the right order",
        paragraphs: [
          "Start with the platform's stated after-sales route and provide the requested evidence. A payment dispute is a separate process with its own rules and should not be used as a threat in the first message. If the platform route fails, review the protections and deadlines that apply to the actual payment method. Do not make a legal claim based on a social-media template, and do not submit inconsistent explanations to different organisations.",
          "Keep all messages factual and consistent: dates, item, amount, issue and requested resolution. Remove emotional commentary that does not help verify the event. If you seek independent consumer guidance, provide the complete timeline privately. This guide cannot determine legal rights for every transaction, but a well-organised record makes any later advice more accurate and prevents the details from changing across retellings.",
        ],
      },
      {
        heading: "A UK after-sales decision checklist",
        paragraphs: [
          "First decide whether the problem is item identity, size, damage, missing quantity, split shipment, tracking or delivery. Confirm the date received and the official 15-day planning window. Preserve the item and packaging, gather the smallest sufficient evidence set, read the instructions displayed for that order and submit promptly. Record every response. If a carrier owns the next step, obtain its case evidence before returning to platform support.",
          "The method cannot guarantee a refund, and it should not. It improves the quality of the request by connecting the order, item and problem without exposing private information. The strongest Hacoo returns and refunds guide for UK users is not a promise of success; it is a disciplined way to meet the published timing, follow the current instructions and preserve a clear record from delivery to final outcome.",
          "Close the record only when the practical outcome is confirmed. A message saying that a refund was approved is not the same as money appearing in the payment account, and a replacement tracking number is not the same as receipt. Note the final amount, method, date and any unresolved difference. If the case is refused, save the reason before deciding whether another authorised route is available. This final step prevents the same issue being reopened from memory with missing dates and also gives you a better basis for judging future purchases without turning one result into a claim about every customer.",
        ],
      },
    ],
    takeaways: ["Use the official 15-day statement as a deadline.", "Inspect before washing or discarding packaging.", "Match evidence to the issue.", "Contact the carrier for delivered-but-missing parcels.", "Track request and refund stages separately."],
  },
  "articles/hacoo-website-vs-app": {
    minutes: 9,
    published: "2026-09-18",
    reviewed: "2026-09-18",
    sources: [hacooHome, appStore, googlePlay, shipping],
    sections: [
      {
        heading: "The official website is the public reference point",
        paragraphs: [
          "The Hacoo website explains the platform's current community identity and links to its Trust Center, terms, privacy, contact and app route. It is useful when you need a public source that can be checked without relying on a screenshot from another user. The shipping page also publishes destination estimates and general after-sales wording. Bookmark the official domain rather than searching from scratch every time, because lookalike pages and old results can create confusion.",
          "The website is not necessarily a mirror of every account-specific app screen. A visitor who expects a particular search, login or product interface may think the site is broken when it is serving a different public purpose. Use it for identity, policy and support context. When a guide claims that Hacoo guarantees a feature, fee or time, check whether the current website actually supports that claim and note the date.",
        ],
      },
      {
        heading: "The app is the account and region context",
        paragraphs: [
          "The official mobile app is distributed through Apple and Google store listings. The app can present content and actions tied to the signed-in account, device, version and region. That context makes it the appropriate place to confirm the actual option, address, order summary and status. It also means another user's screenshot may not reproduce exactly on your phone, even if both people use Hacoo legitimately.",
          "Install or update through the official store, not through an APK shared with a product code. Check the developer identity, listing URL and update information. Store privacy disclosures can also show the categories of data the developer says the app may handle. Those disclosures are useful context, but they are not a substitute for reading the linked privacy policy or reviewing device permissions after installation.",
        ],
      },
      {
        heading: "How to verify an official route",
        paragraphs: [
          "Start with the exact domain: www.hacoo.app or hacoo.app. From there, use the Get the App link or open the recognised store directly. Check the browser address bar before entering account information. A page reached from an advert, shortened link or chat message should be treated as unverified until the hostname matches. HTTPS alone is not proof that a site belongs to Hacoo.",
          "On a store page, compare the app name, developer, icon, review history and linked privacy material. Do not use a product image as the identity check; icons and screenshots can be copied. If a page asks for unusual permissions, payment outside the expected flow or credentials on a different domain, stop and return to the official starting point. The safest route is reproducible without a private invitation link.",
        ],
      },
      {
        heading: "Login and account troubleshooting",
        paragraphs: [
          "If login fails, first confirm the current app version, network, sign-in method and exact email or phone route previously used. Avoid creating several accounts in quick succession because that can make order history and saved content harder to locate. Do not send a password, one-time code or full identity document to a social-media helper. Use the support or recovery route linked from the official service.",
          "When the website and app appear inconsistent, identify the question. Public policy may live on the website while the order state lives in the app. A web page loading correctly does not prove the account is healthy, and an app error does not invalidate a published policy. Capture the error message, version, device type, region and time, then report the smallest reproducible problem without including a password or payment data.",
        ],
      },
      {
        heading: "Region settings explain many apparent link failures",
        paragraphs: [
          "A shared discovery can be visible in one country or account context and absent in another. Before labelling a Hacoo link dead, set the actual United Kingdom destination, update the app, sign in normally and retry. Compare the opened title, image, option and identifier. A route that opens a different item is not repaired merely because the page returns a successful response.",
          "Do not use a false delivery address or VPN to manufacture availability. The goal is to decide whether the item is relevant to a real UK transaction. Record the region and check date with the link. If the item is unavailable, look for a genuinely new candidate and verify it from scratch. A similar image does not prove the same seller, measurements, batch or terms.",
        ],
      },
      {
        heading: "Use the website and app together",
        paragraphs: [
          "A productive sequence is website for platform identity and policy, official store for application identity, app for current discovery and transaction context, and carrier site for physical movement. Each layer answers a different question. Trying to make one layer answer all four produces bad advice—for example, using a general shipping page as proof of an exact delivery date or using an app screenshot as proof of a global policy.",
          "Save sources with labels. Write “official shipping page checked 18 September 2026” rather than “Hacoo says” with no route. Write “order screen showed” for a transaction-specific estimate. Write “carrier scan showed” for tracking. This language makes an article and a support request more trustworthy because another person can see the source and scope of each statement.",
        ],
      },
      {
        heading: "Privacy checks before you share a screen",
        paragraphs: [
          "Screenshots of the app can expose account name, email, address, order reference, tracking number, payment details or a barcode. Crop and redact a copy before posting. Keep the unedited original privately in case official support needs it. Never share a one-time login code. If someone asks to take remote control of the phone to fix a Hacoo link, decline and use the official support channel.",
          "On the web, review the hostname before accepting a cookie or login prompt. In the app, review device permissions and remove anything that is not needed for the feature you use. Privacy is not only a legal-policy issue; it is part of a practical buying record. A useful screenshot proves the relevant status while revealing as little identity and payment information as possible.",
        ],
      },
      {
        heading: "The website-versus-app rule",
        paragraphs: [
          "Use the website when you need a current public statement, safety link or route to the official app. Use the app when you need account, region, selected option, order or status context. Use the app stores when you need to verify the genuine application. If a tutorial sends you elsewhere, return to these anchors and reproduce the path. A trustworthy workflow does not depend on a hidden download or a stranger's credentials.",
          "This distinction resolves the main search intent without pretending the two experiences are identical. The website establishes what Hacoo publicly says it is. The app supplies the current user experience. The official stores connect the two. When region, version or login changes the result, record those variables instead of concluding that every mismatch is a scam or that every working page is safe.",
          "Review the route again whenever you return after a long gap. Apps can change developer disclosures, minimum operating-system requirements, sign-in methods and interface labels; websites can move support pages. Start from the official domain or store instead of an old deep link. If an archived tutorial remains useful, keep only the method that can still be reproduced and discard claims the current sources no longer support. A dated route check is more reliable than a permanent bookmark whose destination has silently changed.",
        ],
      },
    ],
    takeaways: ["Website: public identity and policy.", "App: account and region context.", "Stores: verify the genuine app.", "HTTPS alone is not ownership proof.", "Redact screenshots before sharing."],
  },
  "articles/hacoo-tracking-uk": {
    minutes: 10,
    published: "2026-09-18",
    reviewed: "2026-09-18",
    sources: [shipping],
    sections: [
      {
        heading: "Tracking is a sequence of evidence, not a live map",
        paragraphs: [
          "A Hacoo tracking page may show only selected events from several logistics providers. International parcels often pass through data submission, collection, export, line-haul, import processing, a UK handoff and final delivery. Not every transfer creates a public scan. Treat the history as a sequence of recorded events, not a minute-by-minute location. The last scan proves what one system recorded at that time, not where the parcel is now.",
          "Hacoo's shipping page currently estimates 15–25 days for the UK and says receiving time combines processing and shipping. Use that range beside tracking, not in place of it. An order can spend time in processing before the first carrier event. Build the record from order date, dispatch notice, first physical scan and latest scan so a quiet page is interpreted in the correct stage.",
        ],
      },
      {
        heading: "Distinguish a tracking number from carrier acceptance",
        paragraphs: [
          "A tracking number can be created when shipment data is sent to a logistics provider. Status wording such as label created, information received or pre-advice does not necessarily mean the parcel has been physically accepted. Look for a later event describing collection, acceptance, departure or processing at a named facility. Record the exact wording rather than translating it into “in transit” too early.",
          "If the order screen says shipped but the carrier shows only data received, the two systems may be describing different administrative steps. Wait inside the relevant processing context, then investigate if the status remains unchanged beyond the current order estimate or support guidance. A screenshot of both views is useful because it shows the mismatch without assuming which system is wrong.",
        ],
      },
      {
        heading: "Understand international quiet periods",
        paragraphs: [
          "After export, a parcel may travel without a public scan until it reaches an import hub or a partner network. Customs processing or bulk handoff can create additional silence. This is frustrating but not automatically evidence of loss. Note the last physical event, elapsed calendar days and whether the parcel remains inside the official UK estimate. Check again at sensible intervals rather than refreshing dozens of times per day.",
          "Avoid unofficial tracking sites that demand an account login or payment. A neutral multi-carrier viewer can help identify a partner, but verify important events with the named carrier when possible. Do not post the full tracking number in a public group. It can expose route, delivery area and delivery-management options. Share only redacted status wording if you need general interpretation.",
        ],
      },
      {
        heading: "Find the UK last-mile carrier",
        paragraphs: [
          "An international number may later map to a UK carrier reference. Look for wording that names a partner, a new number on the order page or a handoff event. Test the same number on the official site of the named carrier; some networks accept the original reference. Save the new number and connect it to the original rather than replacing it, because support may use either reference.",
          "Once the UK carrier has the parcel, its delivery instructions and evidence usually become more relevant to the last mile than the upstream aggregator. Check the full address privately, delivery preference, safe place and any access details. If the carrier offers a delivery photo or GPS confirmation, save it. Do not change the delivery destination through a link received from an unverified text message; open the carrier's official site independently.",
        ],
      },
      {
        heading: "Reconcile split shipments before reporting missing items",
        paragraphs: [
          "Hacoo states that available items may ship separately from pre-ordered or back-ordered items. One order can therefore produce several tracking histories. Create a table with item line, dispatch date, tracking number and received status. When a parcel arrives, photograph its label and list its contents before concluding that another item is missing.",
          "If an item shows dispatched but has no corresponding number, save the order status and ask support which parcel reference applies. If it remains unshipped, the issue is not yet a carrier loss. Keeping item and parcel records separate prevents contradictory reports and helps support see whether the question concerns stock, dispatch, international movement or final delivery.",
        ],
      },
      {
        heading: "When to contact the carrier and when to contact Hacoo",
        paragraphs: [
          "Contact the carrier when it controls the latest stage: address-access issue, failed delivery, held parcel, delivered scan or UK exception. Contact the platform when the order has not dispatched as expected, the tracking reference is invalid in every named system, item lines and parcels cannot be reconciled, or the order-specific support flow directs you there. In either case, provide the last verified event and case reference from the other party when relevant.",
          "Hacoo's public shipping page tells users with a delivered-but-missing parcel to report it to the respective carrier. Check household members, reception, neighbours and safe places first. Ask for a carrier case number or scan detail, then preserve that response. If the parcel appears later, update both records. A clear chain of contact is more persuasive than sending the same vague complaint to several organisations at once.",
        ],
      },
      {
        heading: "Build a tracking timeline that support can read",
        paragraphs: [
          "Use five columns: date and time, source, exact status, location and interpretation. The source might be Hacoo, an international logistics page or the UK carrier. Keep interpretation separate so “departed facility” is not rewritten as “left the country” unless the event actually says that. Add contact attempts and case numbers below the timeline. This structure shows movement and silence objectively.",
          "Store screenshots privately with filenames based on date and event. Redact public copies. Include the order reference only in the official support channel. A useful summary might say: dispatched 20 September, first acceptance 22 September, last export scan 25 September, no later event as of 4 October, still within or beyond the current estimate. That is easier to act on than ‘tracking has not moved for ages.’",
        ],
      },
      {
        heading: "A decision rule for delayed or missing tracking",
        paragraphs: [
          "If there is no physical acceptance scan, focus on dispatch confirmation and the platform. If there is international movement and the order remains within the estimate, monitor at measured intervals. If a carrier exception appears, follow that carrier's official instructions. If the estimate has passed without movement, prepare the timeline and use the current support route. If marked delivered but absent, complete local checks and open a carrier case promptly.",
          "Tracking cannot guarantee delivery, but it can identify the responsible stage. The best UK tracking workflow preserves original references, recognises split shipments, avoids exposing numbers publicly and escalates from the latest verified event. That turns a vague delay into a specific question that a carrier or platform team has a better chance of answering.",
          "After delivery, do not erase the record immediately. Keep the parcel label and timeline until the item count and condition have been checked and any relevant after-sales period has passed. Mark the actual receipt date, not merely the carrier's estimated date, because later evidence may use the delivery event as its starting point. If the delivered scan and physical receipt occurred on different days, preserve both facts. A complete history helps distinguish a tracking-data problem from a fulfilment or item problem and stops a later support request from depending on an approximate date.",
          "Keep any carrier case number beside the final delivery event so the completed history remains understandable without reopening old messages.",
        ],
      },
    ],
    takeaways: ["A number is not proof of acceptance.", "Quiet international periods can be normal.", "Preserve both international and UK references.", "Match every parcel to item lines.", "Escalate from the last verified event."],
  },
  "articles/hacoo-uk-vat-customs": {
    minutes: 11,
    published: "2026-09-18",
    reviewed: "2026-09-18",
    sources: [govTax, shipping],
    sections: [
      {
        heading: "Why a displayed price is not the whole UK cost question",
        paragraphs: [
          "A product card or app screen can show an item price without answering where the goods are sent from, whether VAT is included, whether the order exceeds a customs threshold or whether a courier will add a handling charge. For UK planning, treat the final order summary and shipment origin as evidence, then apply current government rules. Do not promise “no customs” merely because another buyer paid nothing on a smaller or differently structured parcel.",
          "GOV.UK says VAT applies to goods sent from outside the UK to Great Britain, subject to the stated gift exception, and explains different collection points depending on value and circumstances. It also says Royal Mail, Parcelforce or a courier will contact the recipient if VAT, duty or delivery charges must be paid to receive goods. The official notice, not a message in a social group, is the payment reference that matters.",
        ],
      },
      {
        heading: "Understand the £135 value line",
        paragraphs: [
          "For goods worth £135 or less in total, GOV.UK says a seller generally includes VAT in the total when the buyer purchases the goods and they are not excise goods. For goods worth more than £135, VAT may be collected by the delivery company before delivery or collection. The page also explains that customs duty can apply to goods sent from outside the UK when they are worth more than £135 or are excise goods.",
          "The threshold analysis uses the relevant consignment and government definitions, not an informal split you invent after checkout. Keep the goods value, postage, packaging and insurance visible in your order record. GOV.UK says VAT collected at delivery can be calculated on the total package value including those components and any duty owed. If the platform summary is unclear, record the uncertainty instead of calculating a confident final figure from an item price alone.",
        ],
      },
      {
        heading: "VAT, customs duty and courier charges are different",
        paragraphs: [
          "VAT is a consumption tax. Customs duty depends on factors including value, goods type and origin. A courier or postal operator may also charge for handling or delivery administration. These are separate lines even when one company collects them together. Ask which line a notice refers to before disputing it. A charge described as a carrier fee is not automatically customs duty, and a VAT amount is not evidence that duty was also charged.",
          "GOV.UK states that the duty rate for goods above £135 depends on what the goods are and where they came from, and directs users to the Trade Tariff service. An independent Hacoo guide should not invent a universal percentage for clothing, shoes or accessories. Product classification and origin can change the result. If the potential amount matters to the decision, use the government tariff route or seek responsible advice with the actual product details.",
        ],
      },
      {
        heading: "Great Britain and Northern Ireland are not identical cases",
        paragraphs: [
          "The GOV.UK page separates Great Britain from Northern Ireland for goods sent from abroad. It explains additional concepts for Northern Ireland, including whether goods are considered at risk of entering the EU. A guide that says “UK customs” without asking the destination can therefore be incomplete. Record England, Scotland, Wales or Northern Ireland as the destination region before applying a summary.",
          "Do not copy the Great Britain outcome into a Northern Ireland order or vice versa. The courier can tell the recipient how it treated the consignment, and GOV.UK provides the current rule framework. If the destination or origin is ambiguous, pause the estimate. The purpose of a budget sheet is to show the unknown, not to erase it with an average that may not apply.",
        ],
      },
      {
        heading: "Recognise a legitimate charge request",
        paragraphs: [
          "GOV.UK says the postal or courier company contacts the recipient if payment is required and sends a bill stating the fees. Treat an unexpected text link cautiously. Check the tracking reference through the official carrier site opened independently, compare the amount and parcel, and use the payment route the carrier confirms. Do not provide Hacoo login credentials to pay a customs notice.",
          "A real notice should connect to a parcel you expect and explain the charge. Scam messages often create urgency, use a lookalike domain or request a small redelivery payment unrelated to the official tracking page. Preserve the message without clicking, then navigate to the carrier yourself. If the account and carrier show no matching charge, contact the carrier through its published support route.",
        ],
      },
      {
        heading: "Build a landed-cost record before payment",
        paragraphs: [
          "Start with selected-item total, discount, delivery charge and any tax line shown at checkout. Add shipment origin if stated, destination region, total goods value and whether the order may split. Create separate fields for VAT shown, potential import VAT, possible duty and possible courier charge. Mark unknown rather than zero when evidence is absent. This prevents the displayed item price from being presented as a guaranteed delivered cost.",
          "Use pounds for the planning record but keep the original currency and exchange information from the actual payment. Card or payment-provider conversion can differ from a reference rate. Avoid publishing a fixed GBP equivalent that will become stale. The useful comparison is between the transaction summary and the later card or courier record, with dates, rather than between a live payment and an old exchange rate quoted by a blog.",
        ],
        bullets: ["Selected goods value", "Postage and packaging", "VAT shown at checkout", "Potential duty", "Potential carrier charge", "Payment-currency conversion"],
      },
      {
        heading: "What happens if goods are returned",
        paragraphs: [
          "GOV.UK provides routes to ask for a refund of VAT or customs duty when goods are returned or when a person believes too much tax was charged. The correct form depends on whether Royal Mail or Parcelforce delivered the goods or another courier did. Keep the import charge notice, payment proof, return evidence and platform refund record. A platform refund alone may not automatically refund an import payment collected separately.",
          "Follow the current government instructions and deadlines rather than assuming the carrier or seller will coordinate every part. Do not discard a customs label after delivery if a return is possible. If only part of a consignment is returned, the calculation can be more complicated; provide the actual documents when seeking guidance. This article offers a record method, not individual tax advice.",
        ],
      },
      {
        heading: "A cautious UK cost decision",
        paragraphs: [
          "Before paying, confirm the final order summary, destination, goods value and tax wording. Read current GOV.UK guidance for goods sent from abroad. If the order exceeds £135 or includes goods with special treatment, do not rely on a generic calculator. Budget a contingency when the seller's tax collection or shipment origin is unclear. If a charge notice arrives, verify it with the named carrier independently.",
          "The honest answer to “will Hacoo charge customs in the UK?” is conditional. The outcome depends on the consignment, origin, value, goods type, destination and what was already collected. A good guide replaces a yes-or-no promise with a traceable checklist. That may feel less simple, but it is far more useful than discovering after dispatch that an unknown was mistakenly recorded as zero.",
          "Recheck the government page on the day you decide, because tax thresholds, procedures and carrier collection practices can change after an article is published.",
        ],
      },
    ],
    takeaways: ["Item price is not always landed cost.", "Use the £135 rule carefully.", "VAT, duty and carrier fees differ.", "Northern Ireland needs separate treatment.", "Verify charge requests on the carrier's official site."],
  },
  "articles/hacoo-order-checklist-uk": {
    minutes: 10,
    published: "2026-09-18",
    reviewed: "2026-09-18",
    sources: [hacooHome, shipping, govTax],
    sections: [
      {
        heading: "1–2: Define the need and confirm the real UK region",
        paragraphs: [
          "First write the real use case in one sentence: everyday wear, a gift, travel, an event or a replacement for something specific. Add the latest useful arrival date and the must-have attributes. This prevents an attractive post from changing the goal after you begin. A low price is not useful if the size, function or timing fails the original need.",
          "Second, set the real destination to the United Kingdom and record the app version and date. A find shared under another region may not reproduce or may show different options. Do not use a false address or VPN to force visibility. The purpose is to decide whether the item works in the conditions of the actual order, not whether it can be made to appear somewhere on a screen.",
        ],
        bullets: ["Use case", "Must-have attributes", "Last useful arrival date", "Real delivery country", "App version and check date"],
      },
      {
        heading: "3–4: Verify the item and freeze the exact option",
        paragraphs: [
          "Third, compare the destination's title, first image, item type and identifier with the saved find. A URL that opens a different product is not a valid match. Check whether the page is an official Hacoo route or an external catalogue route. An independent index can help discovery, but it cannot guarantee stock, seller, product quality or the transaction shown in the Hacoo app.",
          "Fourth, select the exact colour, size, bundle and quantity before reading the final price. Save a screenshot after selection because the landing state may show the cheapest option rather than the one in the image. If changing an option changes the photo, material wording or delivery estimate, record the selected state as a distinct candidate. Do not combine evidence from two variants into one decision.",
        ],
      },
      {
        heading: "5–6: Compare measurements and review evidence",
        paragraphs: [
          "Fifth, save the current size chart and measure a comparable item you own. Use centimetres and the same method: flat chest width, body length, shoulder, sleeve, waist, rise, inseam or shoe internal length as relevant. Identify the limiting dimension. A familiar UK or EU label is only a starting point, and automatically sizing up can create a different fit problem.",
          "Sixth, read recent evidence for the selected variant. Look for repeated observations and useful photos, not simply a high average. Separate fit, construction, colour, delivery and support. Check whether reviewers show the same option. If evidence is sparse, mark confidence low. A review of another colour can help with general shape but may not establish your selected material, measurements or included pieces.",
        ],
      },
      {
        heading: "7–8: Check timing and split-shipment risk",
        paragraphs: [
          "Seventh, use Hacoo's current 15–25 day UK estimate as planning context and read the estimate shown for the actual order. The official page says receiving time includes processing and shipping and that dates are not guaranteed. Work backward from your deadline with buffer for processing, transit, delivery attempts and inspection. If the no-go date has passed, choose an alternative rather than converting an estimate into a promise.",
          "Eighth, check whether any item is pre-ordered or back-ordered. Hacoo says available items may ship separately from delayed items. A multi-item order may therefore create several parcels and timelines. Record which lines could split. If receiving several parcels would create access, travel or deadline problems, treat that as part of the decision before payment.",
        ],
      },
      {
        heading: "9: Read the UK address back from the final screen",
        paragraphs: [
          "Confirm recipient name, house or flat number, street, town or city, postcode and country. For halls, offices, gated buildings or shared entrances, use only the fields and delivery instructions the current flow provides. Do not add unnecessary personal detail. Read the address aloud from the final review screen and compare it with a trusted source rather than assuming autofill was correct.",
          "Hacoo's shipping page places responsibility on the buyer to enter the correct address and advises immediate contact if an error is found. That makes pre-payment checking much safer than hoping for a later edit. If a required line is unclear, pause. Take a private screenshot of the final address summary, then keep it out of public review or tracking posts.",
        ],
      },
      {
        heading: "10: Check the final cost and tax uncertainty",
        paragraphs: [
          "Read the selected goods total, discounts, delivery charge, tax wording, payment currency and final amount. GOV.UK rules for goods sent from abroad depend on value, origin, destination and goods type. Do not assume that a low displayed item price proves there can be no later VAT, customs duty or courier charge. Mark any unresolved charge as unknown, not zero.",
          "For goods above £135, or when the seller's VAT treatment and shipment origin are unclear, review current GOV.UK guidance and budget a contingency. Keep the transaction currency and later card conversion separate. A reference exchange rate is not the rate guaranteed by a payment provider. The goal is not to predict every penny; it is to prevent hidden assumptions from making the order look cheaper than the evidence supports.",
        ],
      },
      {
        heading: "11: Save the policy and evidence snapshot",
        paragraphs: [
          "Before paying, save the exact option, size chart, delivery estimate, final order summary and any return or after-sales wording shown. Hacoo's public shipping page currently states a 15-day after-sales request period after delivery and says users must follow refund instructions. The live order may provide more specific steps. Saving the wording gives the decision a date and source without claiming the rule can never change.",
          "Store the files privately with clear names. Keep originals and create redacted copies only if needed. Remove full address, email, phone, order reference, tracking number, barcode and payment details from anything public. A screenshot should prove the chosen option or status while exposing as little private data as possible. Evidence quality and privacy are compatible when the record is designed before a problem occurs.",
        ],
      },
      {
        heading: "12: Make a go, pause or stop decision",
        paragraphs: [
          "Go when the item identity, exact option, critical measurement, real region, address, timing and cost summary are sufficiently supported. Pause when a missing measurement, unclear fee or address field can reasonably be resolved. Stop when a must-have requirement is contradicted, the destination changed identity, the order cannot meet the real deadline or the page asks for an unsafe route. A no-buy decision can be the checklist working correctly.",
          "Write the reason in one sentence before payment. If the sentence depends on words such as probably, everyone or guaranteed without a source, return to the weak field. The checklist does not guarantee quality, delivery or a refund. It creates a traceable UK decision and a compact evidence pack. That is more valuable than a perfect-looking spreadsheet that cannot explain which option, region or rule applied when the order was placed.",
          "Run the same twelve checks again if you return to the order later. A saved basket does not freeze stock, option, price, chart, delivery wording or address. Compare the current state with the saved record and update the decision date. If a material field changed, do not reuse the old go result automatically. A two-minute recheck is particularly important after a promotion, app update or address edit, because the page may look familiar while the selected variant or total has changed.",
        ],
      },
    ],
    takeaways: ["Define the need before browsing.", "Verify region, item and exact option.", "Compare measurements and variant-level evidence.", "Check timing, address and tax uncertainty.", "Use go, pause or stop."],
  },
};
