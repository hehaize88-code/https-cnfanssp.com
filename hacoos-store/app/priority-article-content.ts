import type { Article } from "./article-content";
import type { ArticleKey } from "./localized-content";
import type { Locale } from "./site-data";
import { priorityArticleTranslations } from "./priority-article-translations";

export type PriorityArticleKey = Extract<ArticleKey,
  | "articles/hacoo-codes-product-id-guide"
  | "articles/hacoo-links-not-working"
  | "articles/hacoo-spreadsheet-verify-links"
>;

const en: Record<PriorityArticleKey, Article> = {
  "articles/hacoo-codes-product-id-guide": {
    minutes: 10,
    sections: [
      {
        heading: "A Hacoo code and a Hacoo link solve different problems",
        paragraphs: [
          "A shared URL is a route. A product code is an identifier. That distinction matters because routes can be copied through social posts, shortened, redirected or replaced, while the digits saved with a listing give you a separate value to compare. A URL that loads is not automatically the correct product, and a code pasted into a search box is not automatically proof that the result is current. The useful workflow combines both: use the code to locate a candidate record, then use the live destination to confirm what that record represents today.",
          "On this site, the product ID is treated as the anchor for research rather than a promise about stock, quality or availability. A code helps distinguish two visually similar cards and makes a stale spreadsheet recoverable when its clickable cell breaks. It does not certify a seller, lock a price or preserve a variant. Think of it as the label on a folder: it helps you retrieve the same record, but you still need to open the folder and inspect its current contents before relying on it.",
        ],
      },
      {
        heading: "Find the identifier before copying anything else",
        paragraphs: [
          "Start on the current destination page and locate the digits presented as the item or product ID. Copy them as plain text, without spaces, punctuation or words such as ID. If the page does not display a clear identifier, record the final URL after redirects and the page title, but mark the code field as unknown rather than guessing from a price, style number or image filename. Long numbers can appear in several parts of a page; only the value explicitly connected to the product record should be treated as the product ID.",
          "Keep the identifier in its own spreadsheet column. Do not hide it inside a note or hyperlink formula. Plain text prevents a spreadsheet from converting a long number, removing leading zeroes or displaying scientific notation. It also makes duplicates easy to find. Before saving, compare the copied digits character by character with the source. A one-digit error can lead to a different result that still looks plausible, which is more dangerous than an obvious broken link.",
        ],
        bullets: ["Product ID as plain text", "Final destination URL", "Current page title", "Checked date and region"],
      },
      {
        heading: "Match five fields before calling a code verified",
        paragraphs: [
          "A verified match needs more than identical digits. Compare the product ID, current title, first image, selected variant and source price. The ID establishes record identity. The title and first image catch a route that now represents a different item. The variant check confirms that the colour, size, bundle or style in the shared card is still available. The source price is a warning signal: small changes can be normal, but a completely different price range can indicate a different option or destination.",
          "Record disagreements instead of forcing a yes-or-no result. Useful statuses include verified, changed, unavailable, region-limited and needs review. For example, the ID and image may match while the named colour has disappeared. That is not a fully verified row, but it is not the same as a wrong product either. A status with a short reason gives the next reader enough context to decide whether to keep searching, choose another variant or stop using the entry.",
        ],
      },
      {
        heading: "Use real route checks without overstating what they prove",
        paragraphs: [
          "A route check confirms that the destination responded and displayed an identifiable product record at the time of review. In the current index, for example, the route ending in 3842 displayed AMIRI MA-1 Sneakers with product ID 7638942248, while the route ending in 24 displayed a 6PM hoodie set with product ID 7572947321. The site rechecked all eight indexed destination URLs on 17 September 2026 and received successful web responses. Those observations support the route and ID mapping; they do not guarantee that every size is in stock or that the same page will remain unchanged.",
          "Be precise about the layer you verified. A successful HTTP response only shows that a server answered. A visible title shows that content rendered. An ID match shows that the expected record was present. A variant match requires opening the option selector. A purchase decision requires additional evidence about measurements, recent item feedback and the final external checkout. Separating these layers prevents a green link-status cell from being mistaken for a quality or delivery guarantee.",
        ],
      },
      {
        heading: "Treat variants as records inside the record",
        paragraphs: [
          "Many product pages group several styles, colours or bundles under one product ID. The shared code can therefore lead to the right parent listing while still opening the wrong default option. Save the variant label exactly as shown, along with a short visual description and the price after selection. If the site changes the order of its options, the label and image will help you find the intended version again. Never assume that the cheapest displayed price belongs to the image used in a spreadsheet card.",
          "For size-dependent products, keep measurements separate from the product code. The ID identifies the listing, not the fit. A replacement listing with similar photographs may use a different chart, and the same parent listing may contain options with different construction. When a link is shared, the safest compact reference is product ID plus variant plus one measurement or distinguishing feature. That combination survives more interface changes than a screenshot or enthusiastic nickname alone.",
        ],
      },
      {
        heading: "Do not transfer evidence to a replacement code",
        paragraphs: [
          "When the original record disappears, a visually similar result should be created as a new row. Give it its own product ID, checked date, images, price and notes. Do not carry over the old rating, review count, measurements or quality claims. Those details belonged to another record and possibly another production period. Linking the rows with a note such as possible replacement preserves the research trail without presenting an unproven match as continuity.",
          "This rule also protects against misleading mirrors. A copied page may reuse the same hero image while pointing to a different product or option. Search the known code first, then a neutral description and category. Compare proportions and variant labels before price. If no candidate matches the identity fields, mark the old record unavailable. An honest unavailable status is more useful than a convenient replacement that sends readers to the wrong item.",
        ],
      },
      {
        heading: "Build a code-first routine you can repeat",
        paragraphs: [
          "For every new find, capture the product ID, final URL, title, first image, selected variant, source price, region and checked date. Open the saved URL in a clean browser session to make sure it does not depend on a temporary redirect or account state. Then search the saved ID inside your index and confirm that it returns only the intended row. If two rows use the same code, review whether they are duplicates or different variants of one parent listing.",
          "Recheck high-interest rows more often than dormant ones, but do not silently replace old evidence. Update the checked date only after completing the identity and variant comparison. Keep the previous status in a change note. This approach turns Hacoo codes into a practical retrieval system: the code narrows the search, the live route supplies current evidence, and the audit history explains what changed. That is stronger than treating either the number or the link as permanent truth.",
        ],
        bullets: ["Locate the explicit product ID", "Open and record the final URL", "Compare title, image, variant and price", "Save region, date and status", "Create a new row for any replacement ID"],
      },
    ],
    takeaways: ["Use the code as an anchor, not a guarantee.", "Verify ID, title, image, variant and price together.", "Record ambiguous results instead of forcing a match.", "Keep replacement IDs in new rows.", "Update a checked date only after a complete comparison."],
  },
  "articles/hacoo-links-not-working": {
    minutes: 10,
    sections: [
      {
        heading: "First identify what ‘not working’ actually means",
        paragraphs: [
          "A Hacoo link can fail in several different ways: the page may not load, it may redirect to a homepage, it may open a different product, it may show the correct item without the expected variant, or it may work on one device but not another. These are different problems and need different checks. Before searching for a replacement, write down what happened, the final address shown in the browser, the device or app used, the real delivery region and the time of the attempt.",
          "Do not begin by repeatedly clicking shortened mirrors. Each redirect can hide the original destination and make diagnosis harder. Preserve the shared URL as text, expand it once in a normal browser, and copy the final destination. If a warning page appears, do not bypass it by entering credentials on an unfamiliar domain. The goal is to recover the item identity, not merely to make any page open.",
        ],
      },
      {
        heading: "Recover the strongest evidence from the old link",
        paragraphs: [
          "Look for a product ID in the URL, page text, spreadsheet row, screenshot caption or message that contained the link. Save the old title, image, variant name, price and date as separate fields. Even partial evidence is useful when it is labelled honestly. A screenshot can confirm colour and shape but not the current destination. A remembered nickname may describe the category but is too weak to establish identity. The product ID, when explicitly associated with the record, is usually the best starting point.",
          "If the link still opens the wrong product, compare its displayed ID with the saved one. A different ID means the route or destination has changed; do not accept the new page just because the image is similar. If the ID matches but the title or image changed, record that as a changed listing and investigate the variants. This distinction tells you whether to search for the original record or to assess a modification within the same record.",
        ],
        bullets: ["Original URL and final URL", "Saved product ID", "Old title and image", "Expected variant", "Region, device and failure time"],
      },
      {
        heading: "Rule out device, app and region differences",
        paragraphs: [
          "Test the original route once in a current browser and once in the current official app or intended environment, using the real destination country. Clear only the site data needed for the test; do not erase order evidence or account records. A page that works in a browser but not in an in-app view may be an interface problem. A page that changes after the country is set may be region-dependent. Record the result instead of declaring the product globally unavailable.",
          "Avoid using a false address, borrowed account or VPN to force a result. That can display a catalog or option that cannot be used for the real destination and creates misleading verification. A region-limited status is a valid outcome. It tells future readers that the record exists but was not reproducible under the tested conditions. Good link maintenance describes the boundary of the evidence rather than pretending every visitor sees the same catalog.",
        ],
      },
      {
        heading: "Search in a sequence that limits false matches",
        paragraphs: [
          "Search the exact product ID first. If that produces no trustworthy result, search a short generic description plus the category and one distinctive feature. Work from strong evidence to weak evidence: ID, exact title fragment, variant label, visual characteristics, then price range. Brand-like nicknames and social captions should come last because they are frequently copied or altered. Open candidates in separate tabs so you can compare rather than replacing your only reference.",
          "For each candidate, compare the first image, silhouette, option labels and source price with the saved record. Confirm the candidate's own product ID. A close-looking page with a different ID is a possible replacement, not the recovered original. If several candidates remain, prefer an unresolved status over guessing. The cost of one dead row is small; the cost of directing every future reader to a convincing but wrong item is much larger.",
        ],
      },
      {
        heading: "Verify a replacement as a new destination",
        paragraphs: [
          "A replacement must pass the same five-field check as any new entry: current ID, title, first image, intended variant and source price. Add a new checked date and keep the region used. If review photos or measurements influenced the old choice, find current evidence attached to the new record. Do not transfer reviews, sales counts, delivery claims or sizing assumptions from the failed destination. Similar images do not establish the same seller, batch or option structure.",
          "Keep the old URL in a history column and connect it to the new row with a neutral note. This makes future changes traceable and allows a later reviewer to reverse a mistaken replacement. Never overwrite the old ID with the new one in place; that destroys the evidence needed to understand why the row changed. A clean audit trail is especially valuable when the same spreadsheet has been copied into several communities.",
        ],
      },
      {
        heading: "Know when to stop searching",
        paragraphs: [
          "Stop when the available evidence cannot distinguish between candidates. A low-resolution screenshot, a generic phrase such as black hoodie and a remembered price do not support an exact match. Mark the record unavailable or needs review, list the missing evidence and retain the old code. This is not a failed workflow. It prevents a weak inference from turning into a confident recommendation that other sites copy.",
          "Also stop if the route leads through an unfamiliar domain that requests login, payment information or an app installation unrelated to the expected destination. Link recovery should never require surrendering credentials. Return to the index, use known category routes and verify the domain before proceeding. The safest updated URL is one whose destination, item identity and option can all be explained from visible evidence.",
        ],
      },
      {
        heading: "Document the result so the next person can reproduce it",
        paragraphs: [
          "A recovered link is only useful when another reader can repeat the check. Save the original URL, final destination, product ID, matched fields, region, device and review date together. Add one sentence explaining why the old route failed and why the replacement was accepted or rejected. Avoid notes such as fixed or works now; they hide the evidence and become meaningless after the next catalog change. A compact, factual change record makes later audits faster and prevents the same weak candidate from being rediscovered.",
          "When sharing the result, separate observation from inference. It is fair to say that a page displayed a particular ID, title and option on the recorded date. It is not fair to turn that observation into a promise about stock, seller identity, quality or future availability. Preserve screenshots only when they do not expose account or order information, and never publish private tokens from a copied URL. Reproducible notes let people verify the route without inheriting hidden assumptions or sensitive data.",
        ],
      },
      {
        heading: "Use a seven-step recovery checklist",
        paragraphs: [
          "Preserve the old URL; record the failure type; extract the product ID and visual evidence; test the intended browser, app and real region; search the exact ID; compare candidate identity fields; and save any replacement as a new row. Finish by opening the new URL in a clean session and checking its final destination. Add the checked date only after that test. If no candidate passes, keep the old row with an unavailable status.",
          "This method improves both user trust and search usefulness. Readers landing from a query such as Hacoo links not working receive a diagnosis path instead of another unverified list. Editors gain a repeatable way to update rows without hiding history. Most importantly, the process separates a working route from a correct match. Restoring access is only the first half of the job; proving that the destination still represents the intended product is the second.",
        ],
        bullets: ["Preserve", "Classify", "Extract", "Test", "Search", "Compare", "Document"],
      },
    ],
    takeaways: ["Classify the failure before searching.", "Preserve the old URL and product ID.", "Test with the real region and intended environment.", "Treat a different ID as a replacement.", "Stop when the evidence cannot support an exact match."],
  },
  "articles/hacoo-spreadsheet-verify-links": {
    minutes: 11,
    sections: [
      {
        heading: "A useful Hacoo spreadsheet is an audit log, not a link dump",
        paragraphs: [
          "A long list can look authoritative while containing no evidence that its destinations were checked. The purpose of a Hacoo spreadsheet is not to collect the largest possible number of blue links. It is to preserve enough identity and review information that someone can tell whether a row still represents the same product. Every row should answer three questions: what record was intended, what destination was observed, and when and where was that comparison made.",
          "The year in a title does not make a spreadsheet current. Dates need to exist at row level because links change at different times. A sheet published in 2026 can still contain a row copied years earlier. Conversely, an older record can remain useful if its final route, ID, image and variant have just been rechecked. Freshness is a property of documented verification, not of the file name or the colour of an updated badge.",
        ],
      },
      {
        heading: "Use a schema that preserves identity",
        paragraphs: [
          "At minimum, create columns for status, product ID, final URL, current title, category, first image reference, intended variant, source price, currency, checked date, checked region and notes. Keep the ID as plain text and the URL as a visible value even if you also use a clickable label. Separate the source price from any converted comparison price so that exchange-rate changes do not look like listing changes. Use one row for one product record and intended variant.",
          "Add optional columns only when they support a decision. Measurements, review-evidence date, image-match result and previous URL can be valuable. Decorative rankings and vague scores are less useful unless the method is defined. Avoid merged cells, hidden identifiers and formulas that fetch data from unknown services. A portable sheet should remain understandable when exported to CSV, where formatting, images and embedded buttons may disappear.",
        ],
        bullets: ["Status and product ID", "Final URL and current title", "Image and intended variant", "Source price and currency", "Checked date, region and notes"],
      },
      {
        heading: "Verify the final destination, not the text on the button",
        paragraphs: [
          "Open each link and record the address after all expected redirects. Compare the hostname with the destination you intended to use. A cell labelled open product can hide an unrelated or shortened URL, so review the actual formula or link target. Do not treat an HTTP success alone as a pass. The page must render the expected product identity and expose enough information to compare the ID, title, image and option.",
          "Test the saved final URL in a clean session. Temporary tracking parameters can be removed when they are not required for the destination; account tokens and private session values should never be stored. If the route only works while signed in, note that limitation rather than distributing a session-dependent link. Record redirects that change the product identity as failures even when the final page looks polished.",
        ],
      },
      {
        heading: "Apply the same five-field test to every row",
        paragraphs: [
          "Compare product ID, current title, first image, selected variant and source price. Use controlled status values such as verified, changed, unavailable, region-limited and needs review. A verified status means all required fields were checked on the recorded date. Changed means the record still exists but one or more identity or option fields no longer match. Unavailable means no usable destination was found. Needs review means the evidence was incomplete or conflicting.",
          "Do not colour a row green merely because the link opens. Link health and product match are separate columns if you need both. A route can return successfully while pointing to the wrong item; a correct record may also be temporarily inaccessible in one region. Status notes should be short and specific, such as expected blue option missing or ID changed from one saved value to another. Specific notes make the next audit faster.",
        ],
      },
      {
        heading: "Audit in batches without lowering the standard",
        paragraphs: [
          "Start with rows that receive clicks, appear on the homepage or have not been checked recently. Work category by category so visual comparisons are easier, but avoid assuming similar items share the same route or option structure. A batch audit can confirm response status automatically, yet a human still needs to compare identity fields. Automation is best used to flag candidates for review, not to declare a product verified from a status code.",
          "Use a second pass for failed and changed rows. Search the saved product ID first, then the title and distinguishing features. Any replacement receives a new row and a new ID; the previous row keeps its history. If a mistake affected many copied rows, add a sheet-level change note explaining the scope and date. Do not silently rewrite the entire list, because readers may have saved or cited earlier identifiers.",
        ],
      },
      {
        heading: "Design the sheet for clicks you can interpret",
        paragraphs: [
          "Use clear link labels that describe the action, such as open matched listing, rather than vague text such as click here. Keep the product title, ID and status visible near the link. When the spreadsheet feeds a website, track outbound clicks as a separate analytics event with the destination, product ID and page path. Do not include personal information or account values. This reveals which rows deserve more frequent checks and which landing pages attract searches but fail to generate useful outbound activity.",
          "Click-through rate alone is not the goal. A high number of clicks to mismatched destinations is a poor outcome. Review click data alongside engagement, return visits and link-change reports. On a low-traffic site, individual sessions can distort percentages, so look for repeated patterns rather than reacting to a single day. Better titles can earn the search click; visible IDs, checked dates and precise actions help the visitor decide whether to continue.",
        ],
      },
      {
        heading: "Protect the sheet from silent edits and copied errors",
        paragraphs: [
          "Give editing access only to people who need it and keep a read-only public version. Use revision history or dated exports so an accidental paste, formula change or mass replacement can be traced. Validation rules can restrict status values and flag malformed IDs, but they should not pretend to verify a listing. Lock formula and header cells while leaving evidence fields editable. If a community copies the sheet, publish a visible source version and review date so readers can distinguish the maintained file from an unaudited mirror.",
          "Treat bulk imports as unverified until each row passes the normal identity checks. Duplicate detection should compare product IDs first and then review destination URLs, titles and images; similar titles alone are not enough. When an error is discovered, correct the maintained row, record the date and describe the scope of the change. Do not quietly replace every copy. Transparent corrections preserve trust and help downstream editors find which versions need another audit.",
        ],
      },
      {
        heading: "Publish with version history and a recheck rule",
        paragraphs: [
          "Before publishing, deduplicate product IDs, test every visible URL, check required fields and review the sheet on mobile. Freeze the audit date for that release and keep a change log. Recheck high-click rows on a shorter interval and review the rest on a risk-based schedule. A row should also return to the queue when its destination, title image, option list or source price changes materially.",
          "Never update a checked date automatically just because a crawler received a successful response. The date should mean that the required comparison was completed. If only route availability was tested, store that in a separate last-response field. This distinction keeps the spreadsheet honest and makes its dates useful. A smaller table with visible methods and current evidence will usually serve readers better than thousands of opaque links labelled updated.",
        ],
        bullets: ["Deduplicate IDs", "Test visible targets", "Review required fields", "Check mobile usability", "Publish a dated change log"],
      },
    ],
    takeaways: ["Treat each row as an auditable record.", "Store IDs and final URLs visibly.", "Separate link health from product match.", "Create new rows for replacement IDs.", "Change the checked date only after a full review."],
  },
};

export const priorityArticles: Record<Locale, Record<PriorityArticleKey, Article>> = {
  en,
  ...priorityArticleTranslations,
};
