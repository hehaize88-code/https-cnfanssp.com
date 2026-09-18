import type { Article } from "./article-content";
import type { Locale } from "./site-data";

export type RemainingPriorityArticleKey =
  | "articles/hacoo-find-product-old-link-screenshot"
  | "articles/hacoo-shoes-links"
  | "articles/hacoo-hoodie-tracksuit-links"
  | "articles/hacoo-bag-links"
  | "articles/hacoo-wrong-product-link";

const en: Record<RemainingPriorityArticleKey, Article> = {
  "articles/hacoo-find-product-old-link-screenshot": {
    minutes: 10,
    sections: [
      {
        heading: "Start by preserving the old evidence",
        paragraphs: [
          "An old Hacoo link or screenshot is useful only if you preserve what it actually proves. Copy the original URL as text before opening it, save the screenshot at its original resolution and record when and where you received it. Note the visible product type, colour, option label, price, product ID and any distinctive construction detail. Do not crop away the browser address, caption or surrounding spreadsheet row until you have extracted those clues. They may be the only evidence that separates the intended item from a visually similar replacement.",
          "Keep observation and memory in different fields. A visible blue zip hoodie is evidence; remembering that the seller called it a limited edition is not. A screenshot can prove appearance at one moment but cannot prove that the current destination, seller or inventory is unchanged. Write unknown where a value is missing instead of filling gaps with a likely answer. A disciplined evidence record makes later searches faster because every candidate can be compared against the same fixed reference rather than a description that changes as you browse.",
        ],
      },
      {
        heading: "Extract the strongest searchable identifiers",
        paragraphs: [
          "Look first for an explicit product or item ID in the old URL, spreadsheet cell, screenshot text or message. Store long numbers as plain text so a spreadsheet does not round them. Then copy an exact title fragment, option label and neutral category description. Remove promotional adjectives that are likely to have been added by the person who shared the item. A phrase such as black cropped zip hoodie with contrast piping is more useful than must-have viral hoodie because it describes visible attributes that a current listing should still show.",
          "Build a short fingerprint from features that are difficult to confuse: number and placement of pockets, panel shape, sole profile, closure type, handle attachment, printed layout or included pieces. Colour alone is weak because lighting and filters change it. Price is also secondary because discounts and default options move. The strongest search bundle is usually the saved product ID, one exact title fragment, the product category and two structural features. Search those elements in that order rather than entering every uncertain clue at once.",
        ],
        bullets: ["Original URL", "Product ID", "Exact title fragment", "Variant or option label", "Two structural features"],
      },
      {
        heading: "Search from exact identity to broad description",
        paragraphs: [
          "Search the product ID inside the maintained index first. If the code returns a record, compare its destination rather than assuming the match is complete. If no reliable result appears, search the exact title fragment, then a category plus the structural fingerprint. Broad image-led searches should come later because copied photos can appear on unrelated pages. Open promising candidates in separate tabs so the original evidence remains visible and you can compare several pages without replacing the reference.",
          "Do not search only by a brand-like word or social nickname. Those terms are often removed, translated or reused across many products. When a screenshot contains a recognisable image but little text, describe the object literally and include its category. For shoes, note toe shape, panel arrangement and sole; for clothing, note silhouette, closures and graphic placement; for bags, note proportions, handle count and hardware. A structured description produces fewer attractive but incorrect candidates than a vague fashionable label.",
        ],
      },
      {
        heading: "Compare candidates with a fixed identity grid",
        paragraphs: [
          "Score every candidate against the same fields: product ID, current title, first image, intended variant, structural features and source price. The ID is decisive when the old evidence contains one. The image should match proportions as well as colour. The option selector must still contain the intended style, because a parent listing can keep its ID while losing the exact variant. Price can support a match, but it should not override a different ID, image or construction.",
          "Use result labels that explain uncertainty: exact record, changed record, possible replacement, region-limited, unavailable or needs review. A possible replacement is not the original product and should receive its own row. If two candidates share the same promotional photo, compare customer images, measurements and option thumbnails. If neither page exposes enough detail to distinguish them, stop at needs review. The goal is reproducible matching, not choosing the candidate that looks most convenient.",
        ],
      },
      {
        heading: "Handle region and device differences honestly",
        paragraphs: [
          "An old link may behave differently in a browser, an in-app view or another delivery region. Test the route once in the current intended environment and with the real destination country. Record the final URL and whether the page displayed a product, a homepage, an unavailable message or another item. Do not use a false address, borrowed account or VPN to make a hidden catalog appear. A result that cannot be reproduced for the actual destination is not a useful verified link for that reader.",
          "Separate technical access from identity. A page that loads only in the app may still be the correct record; a browser page that loads instantly may show the wrong product. Likewise, a region-limited page is not necessarily deleted worldwide. Give it a region-limited status with the tested country and date. This keeps the evidence accurate and prevents later editors from repeatedly replacing a valid but restricted record with unrelated global results.",
        ],
      },
      {
        heading: "Verify a recovered or replacement link from scratch",
        paragraphs: [
          "When a candidate appears to match, open the final destination in a clean session and compare all identity fields again. Select the exact colour, size, set or design shown in the old evidence. Record the price after selection, not the cheapest teaser price. Confirm the current product ID and save a new checked date. Review recent item-level photos for the same option, but do not treat their presence as proof of quality or future stock.",
          "If the ID differs from the old evidence, create a replacement record instead of overwriting the original. Give the new row its own URL, images, measurements, review date and notes. Never transfer ratings, sales counts or sizing claims from the vanished page. Similar photos can be copied, and a replacement may come from a different record or production period. Preserving both rows makes the change auditable and allows a future reviewer to reverse a weak match.",
        ],
      },
      {
        heading: "Know when the screenshot is not enough",
        paragraphs: [
          "Some screenshots do not contain enough unique information for an exact match. A low-resolution crop of a plain black T-shirt, a remembered price and no product code can correspond to hundreds of listings. In that case, record the category and visible features but do not publish a single destination as recovered. Ask for the uncropped image, original message or spreadsheet row if it is available. Missing evidence should remain visible rather than being converted into certainty by repeated searching.",
          "Stop immediately if a candidate route leads through an unfamiliar domain that asks for credentials, payment information or an unrelated installation. Recovery should never require exposing an account. Return to the maintained category routes and known destination domain. An honest unavailable result protects readers better than an unsafe or weakly matched URL, and it keeps the index from accumulating errors that other sites will copy.",
        ],
      },
      {
        heading: "Publish a match another person can reproduce",
        paragraphs: [
          "A finished recovery note should include the original URL, old product ID if known, final destination, current ID, matched fields, selected variant, tested region and date. Add one short explanation of why the result was accepted: for example, same ID, image and option label, with a changed title. If it is a replacement, say which fields matched and which could not be transferred. Avoid notes such as found it or working now, because they provide no evidence for the next audit.",
          "Reopen the saved link after recording it and confirm that the final address still displays the same item without relying on a temporary session. Keep private tokens, account information and order details out of the public record. This final clean-session test turns a personal discovery into a maintainable index entry. The link may still change later, but the stored evidence explains exactly what was observed and gives the next reviewer a reliable starting point.",
        ],
      },
    ],
    takeaways: ["Preserve the original evidence before searching.", "Search exact IDs before broad descriptions.", "Compare every candidate with the same identity fields.", "Create a new record for a different ID.", "Publish only matches another person can reproduce."],
  },
  "articles/hacoo-shoes-links": {
    minutes: 11,
    sections: [
      {
        heading: "A shoe link must identify both the listing and the style",
        paragraphs: [
          "Shoe pages often group several colourways or designs under one parent product ID. That means a Hacoo shoes link can reach the correct listing while opening the wrong default style. Begin by recording the current product ID, exact option label, first image and price after selecting the intended design. Count the visible style thumbnails and note one distinctive feature such as the panel layout, sole shape or fastening. The parent code is useful, but it does not replace an option-level check.",
          "Treat screenshots and spreadsheet cards as references, not inventory. A shared card may retain an older hero image after the destination changes its default option. Compare the live thumbnail and selected image side by side. If the intended colourway is gone, mark the row changed even when the product ID remains. This distinction prevents a working link from being presented as an exact match when it only reaches a related group of shoes.",
        ],
      },
      {
        heading: "Confirm the route before judging shoe quality",
        paragraphs: [
          "Verify the final destination domain and URL after redirects, then compare ID, title, first image, option and source price. Do not begin with stitching or logos until those fields agree. A quality review of the wrong style is wasted effort. If a shortened link lands on a homepage or another item, preserve the old route and search the saved code. Any candidate with a different code is a possible replacement and needs a new evidence record.",
          "Use clear statuses such as verified, changed, unavailable, region-limited and needs review. A successful server response only proves that a page answered; it does not prove that the intended shoe rendered. Open the saved route in a clean session and select the option again. Record the tested region and date, because catalog visibility can differ. A trustworthy shoe index shows what was compared rather than promising permanent availability.",
        ],
        bullets: ["Product ID", "Selected style", "First image", "Source price", "Checked region and date"],
      },
      {
        heading: "Read the silhouette before small details",
        paragraphs: [
          "Start shoe QC with overall shape: toe box, side profile, heel height, collar opening and sole curve. Compare the left and right shoes against a mental centre line. Twisted soles, uneven toe shapes or mismatched heel counters matter more than a tiny thread. Use straight-on side, top and heel views when possible; dramatic angled product photos can hide distortion and make proportions difficult to compare.",
          "Look for agreement across several recent item-level photos. One compressed image may exaggerate a shadow or colour shift. Repeated shape differences across views are stronger evidence. If the listing mixes several styles, confirm that each customer image belongs to the selected option. A review attached to the parent page may describe a different colourway or construction, so option identity must remain visible throughout the inspection.",
        ],
      },
      {
        heading: "Inspect panels, joins and soles in a repeatable order",
        paragraphs: [
          "After shape, inspect the major panels and their alignment, then stitching, edge finishing, eyelets or closures, heel construction and outsole bonding. Check whether corresponding panels meet at similar points on both shoes. Look for skipped stitches, unsecured ends, glue overflow, separating edges and warped components. These are visible construction observations; they should not be turned into authenticity claims that photographs cannot support.",
          "Sole attachment deserves special attention because it affects function and durability. Inspect the full perimeter, especially toe flex points and heel edges. For stitched soles, check that the stitch path is continuous and positioned consistently. For bonded soles, distinguish harmless surface residue from a visible gap. Hardware and printed elements come last, after the structure has passed. A fixed order keeps decorative details from distracting from a functional problem.",
        ],
      },
      {
        heading: "Use insole length and width evidence for sizing",
        paragraphs: [
          "Regional size conversions are approximate. Measure the removable insole of a comfortable pair from heel to the longest toe point and compare it with the live chart for the exact selected style. If no insole chart is shown, use foot length plus an appropriate allowance and look for recent reviews from people who mention width. Do not assume that every design under one product ID uses the same last or internal dimensions.",
          "Width and toe-box shape can make a shoe uncomfortable even when length is correct. Note forefoot width, instep volume and heel hold. Save the chart after selecting the style and size, because the page may display a different guide for another option. A useful record contains the product ID, style label, labelled size, published internal length, your reference measurement and the date. The size label alone is the weakest part of that record.",
        ],
      },
      {
        heading: "Balance reviews without treating them as inspection reports",
        paragraphs: [
          "Recent photos and specific comments can reveal recurring issues such as narrow fit, stiff materials, colour variation or sole separation. Give more weight to reviews that identify the option and include several clear views. Give less weight to a one-line rating or an image with no variant context. Reviews describe individual orders and expectations; they do not guarantee the unit another buyer will receive.",
          "Look for patterns across time rather than selecting only praise or complaints. If several recent buyers of the same style report a narrow toe box, that is a useful sizing signal. If one older review shows a construction flaw that does not recur, keep it as a question rather than a conclusion. Platform-level ratings describe the wider service and cannot replace current evidence attached to the exact shoe listing.",
        ],
      },
      {
        heading: "Save evidence before checkout and after delivery",
        paragraphs: [
          "Before checkout, save the final URL, product ID, selected style, size, chart, source price and delivery region. Capture the image after making every selection. This record helps detect a changed default option and provides context if the delivered pair differs. Keep the payment and support process on the actual destination platform; an independent link index cannot control inventory, shipping, returns or seller decisions.",
          "After delivery, photograph the unopened parcel if it is damaged, then the full pair, size labels, packaging barcode, soles and any defect. Keep tags and packaging until inspection is complete. Use a full view, medium context and close-up rather than a single cropped image. If a problem exists, follow the current support instructions attached to the order, because evidence requirements and time limits can change.",
        ],
      },
      {
        heading: "Apply a final shoe-link decision rule",
        paragraphs: [
          "Call the link verified only when the product ID, selected style, first image, price and size evidence describe the same shoe. Mark it changed when the parent record remains but the intended option or chart has disappeared. Mark it needs review when the route opens but the option identity is ambiguous. Treat a different product ID as a replacement, even if it reuses the same studio image.",
          "This rule keeps discovery separate from recommendation. A verified route reduces the chance of opening the wrong listing, while shape, construction, measurements and recent feedback inform the purchase decision. Neither layer guarantees quality or fit. The value of a Hacoo shoes guide is a transparent path from shared code to current evidence, with enough detail for another person to repeat the check.",
          "Before sharing the result, read the public card as a first-time visitor would. The visible shoe name, image, price and action label should describe the selected option rather than the cheapest item in the parent listing. Click through from both the article and the category or finds page, then confirm the same final ID. This last check catches correct research attached to the wrong button and makes the record useful outside the editor's own browser session.",
        ],
      },
    ],
    takeaways: ["Verify the exact shoe option, not only the parent ID.", "Judge silhouette before decorative details.", "Inspect sole attachment and panel alignment.", "Use insole length and width evidence.", "Save the selected style, chart, region and date."],
  },
  "articles/hacoo-hoodie-tracksuit-links": {
    minutes: 11,
    sections: [
      {
        heading: "Treat each hoodie or tracksuit option as a separate match",
        paragraphs: [
          "A single clothing listing can contain hoodies, trousers, complete sets, several colours and different graphic placements under one product ID. A shared Hacoo hoodie link may therefore reach the right parent page while selecting the wrong item. Record the product ID, exact option label, included pieces, current first image and price after selection. If the card shows a set, verify that both top and bottom are included rather than assuming the cheapest default price covers everything pictured.",
          "Use a plain description of the intended variant: zip or pullover, hood shape, pocket type, cuff and hem treatment, trouser cut and graphic position. These features survive title changes better than promotional names. Save the option thumbnail and the full selected image. A working route is only the start; the match is complete when the live option still describes the same garment or set that the original card promised.",
        ],
      },
      {
        heading: "Verify identity before fit or quality",
        paragraphs: [
          "Compare the final destination, product ID, current title, first image, chosen variant and source price. Check the delivery region and date. If the ID matches but the intended colour or set has disappeared, label the record changed. If the route opens another ID, treat the result as a replacement. Do not transfer measurements, reviews or quality claims from the old page merely because a new listing uses the same studio photograph.",
          "Open the saved route in a clean session and repeat the selection. This catches temporary redirects and default options that depend on an earlier session. Use verified, changed, unavailable, region-limited or needs review as controlled statuses. A transparent status with one sentence of evidence is more useful than a green badge based only on an HTTP response.",
        ],
        bullets: ["Parent product ID", "Exact garment or set", "Colour and graphic", "Selected price", "Checked region and date"],
      },
      {
        heading: "Compare the full silhouette before zooming in",
        paragraphs: [
          "For hoodies, inspect shoulder line, body width, body length, sleeve shape, hood volume, pocket position and hem. For tracksuit trousers, inspect rise, thigh width, taper, cuff and side-seam alignment. For sets, confirm that the top and bottom share the intended fabric tone and design. Large proportion errors affect fit more than one loose thread, so begin with straight-on full views before studying close-ups.",
          "Compare several recent item-level photos when available. Lighting can change dark colours and fabric texture, while camera angle can make a garment look longer or wider. Repeated differences across views are stronger evidence than one image. Make sure review photos belong to the selected variant; parent-page reviews may mix pullover, zip and set options that use different patterns.",
        ],
      },
      {
        heading: "Inspect construction in a consistent sequence",
        paragraphs: [
          "After shape, examine main seams and panel joins, then zipper or drawcords, pockets, cuffs, waistband, hems and printed or embroidered details. Look for twisted seams, uneven pocket height, skipped stitches, unsecured endpoints and distorted ribbing. On tracksuits, compare left and right stripes or graphics and check that trouser legs hang evenly. These observations describe visible construction; they do not establish authenticity.",
          "Fabric weight cannot be proven from one photograph, but drape, lining, close-up texture and repeated review comments can provide clues. Separate evidence from marketing terms such as premium or heavyweight. If the listing gives composition or weight, save it with the selected variant and date. A replacement page may use the same images while supplying a different fabric or chart, which is why each destination must be verified independently.",
        ],
      },
      {
        heading: "Measure a garment that already fits the intended way",
        paragraphs: [
          "Lay a similar hoodie flat and measure half-chest, body length, shoulder width and sleeve length using the same points shown in the listing chart. For trousers, record relaxed and stretched waist where relevant, hip, rise, thigh and inseam. Compare a fitted reference with a fitted listing and an oversized reference with an oversized listing. Choosing by S, M or L alone ignores differences in cut, material and measurement method.",
          "For a set, confirm that one option does not force incompatible top and bottom sizes. Save the chart after selecting the exact style because different variants under the same parent ID may use different measurements. Note whether figures are garment dimensions or body recommendations. If the chart omits the dimension that usually determines your fit, treat that as missing evidence instead of guessing from height or weight alone.",
        ],
      },
      {
        heading: "Match graphics, colours and included pieces carefully",
        paragraphs: [
          "Graphic placement is a strong identity clue. Compare distance from collar, pocket or side seam, overall scale and orientation rather than only the words in the print. For embroidery, inspect position and edge shape. Colour names are weaker because sellers use broad labels and photos vary by screen. Use a neutral visual description and compare multiple images, especially for black, cream, grey and navy items.",
          "Sets require an inclusion check. The hero image may show a complete outfit while the default option is trousers only. Read the selected option label and watch whether the image and price change. Record included pieces explicitly in the spreadsheet. A low teaser price that belongs to one component should never be displayed as the price of the full set.",
        ],
      },
      {
        heading: "Keep evidence that supports sizing or defect questions",
        paragraphs: [
          "Before checkout, save the final URL, product ID, selected style, size, chart, price and images. After delivery, inspect before washing or removing labels if fit or quality seems wrong. Photograph the full garment, size tag, inner bag barcode and the relevant measurement with the tape flat. For a defect, add a medium-distance view that shows where the close-up belongs.",
          "Keep packaging and tags until the inspection and current return period are resolved. Follow the support flow attached to the order rather than relying on a summary article. An independent index can preserve link evidence, but it cannot approve returns or guarantee delivery. Clear documentation simply makes the issue easier to explain and separates a published measurement difference from a preference about fit.",
        ],
      },
      {
        heading: "Use a final variant-match rule",
        paragraphs: [
          "A hoodie or tracksuit link is verified when product ID, garment type, included pieces, colour or graphic, selected price and chart all refer to the same current option. Mark the record changed when the parent ID remains but the intended option, set composition or measurements have changed. Create a new row for a different ID. If the listing mixes options so ambiguously that the exact item cannot be confirmed, use needs review.",
          "This rule prevents a common failure: showing the right-looking image beside the wrong component or default price. It also keeps link verification separate from fit and quality judgment. The route proves where the card leads; measurements, construction images and recent option-specific reviews help decide whether the item is suitable. A maintainable guide makes both layers visible without promising more than the evidence supports.",
          "Review the public entry after publishing. Its title should say whether it is a hoodie, trousers or a complete tracksuit; the first image should show the same option; and the displayed price should belong to the selected component or set. Open the card from the homepage, finds page and article where it appears. A correct destination hidden behind an inaccurate label still misleads the reader, so interface text and route evidence must be audited together.",
        ],
      },
    ],
    takeaways: ["Identify the exact garment or set under the parent ID.", "Confirm every included piece and selected price.", "Compare full silhouette before small details.", "Measure a similar garment with the same method.", "Create a new record when the product ID changes."],
  },
  "articles/hacoo-bag-links": {
    minutes: 10,
    sections: [
      {
        heading: "A bag link needs an option-level identity check",
        paragraphs: [
          "Bag listings commonly group several colours, sizes, materials or strap combinations under one product ID. A shared link can therefore open the correct parent record while showing a different default bag. Record the current ID, exact colour and size label, included straps or accessories, first image and price after selecting the intended option. Count visible variations and note structural features such as handle number, closure, base shape and pocket layout.",
          "Do not rely on colour name alone. Lighting, editing and screens can make black, brown, cream or grey look different, and sellers may use broad labels. Combine the option name with proportions and construction. A useful short fingerprint might be rectangular tote, two rolled handles, open top, removable inner pouch and dark trim. That description is far harder to confuse than a social nickname or a promotional title.",
        ],
      },
      {
        heading: "Confirm ID, image, size and price together",
        paragraphs: [
          "Open the final destination after redirects and compare product ID, current title, first image, selected option and source price. If the shared image shows a large tote but the current default price belongs to a mini pouch, the card is not accurately matched. Select the intended option before recording price or measurements. Save the tested region and date because catalog visibility and available colours can change.",
          "Use statuses that describe the evidence: verified, changed, unavailable, region-limited or needs review. A route that returns successfully but opens the wrong product is not healthy for the index. If the intended colour disappears under the same ID, mark it changed. If a different ID reuses the photo, create a replacement row and verify it from scratch rather than silently rewriting the original record.",
        ],
        bullets: ["Product ID", "Colour and size option", "Included straps or pouch", "First image", "Selected source price"],
      },
      {
        heading: "Compare proportions before hardware",
        paragraphs: [
          "Begin QC with width-to-height ratio, depth, base shape, handle drop and placement of major panels. Compare the bag straight on, from the side and from the base when possible. Check whether handles sit at the same height and whether the body stands or folds as intended. Large proportion differences are more informative than the colour of a small fitting, which may shift under different lighting.",
          "Use symmetry as a filter. Compare left and right panel edges, handle attachments, pocket position and closure alignment. Soft bags naturally change shape, so confirm an apparent problem in more than one view. If the listing contains many sizes, make sure each reference image belongs to the selected size; a mini and large version can share design details while having different proportions and interior layouts.",
        ],
      },
      {
        heading: "Inspect seams, edges, handles and closures",
        paragraphs: [
          "After proportions, inspect main seams and panel joins, then edge finishing, handle attachments, zipper or magnetic closure, feet and other hardware. Look for uneven stitch spacing, unsecured ends, cracked edge coating, gaps at stress points and visibly tilted fittings. On a detachable strap, check attachment points and whether the listing includes the strap for the selected option.",
          "Handles and base corners carry repeated stress, so they deserve more attention than decorative elements. Inspect reinforcement and alignment where handles meet the body. For zippers, compare the track and opening line, not merely the puller finish. Avoid authenticity claims from these details. The defensible purpose is to describe construction quality and confirm that the live option matches the referenced bag.",
        ],
      },
      {
        heading: "Verify measurements with a practical capacity test",
        paragraphs: [
          "Save width, height, depth and handle or strap drop for the exact selected size. Check where the listing measures width because tapered bags may differ at the top and base. Compare those numbers with a bag you own or make a simple paper rectangle to visualise the footprint. Product photos without scale can make a mini bag look full-sized, especially when the same model image is reused across variants.",
          "Translate dimensions into the items you need to carry. A phone, wallet, bottle or laptop has fixed measurements. Compare the narrowest opening and internal depth, not only exterior width. For a laptop, allow room for the closure and lining. If the listing omits a critical measurement, record it as missing rather than inferring capacity from the product title or model photograph.",
        ],
      },
      {
        heading: "Match colour and material using several views",
        paragraphs: [
          "Compare the selected thumbnail, studio images and recent customer photos under different lighting. Look for a consistent undertone and contrast between body, trim, lining and hardware. Material terms should be treated as listing claims unless supported by clear specifications; a photograph alone cannot prove composition. Record the published material description and date because replacements may reuse images with different text.",
          "For patterned or printed bags, compare motif scale, placement at panel seams and orientation. For quilted designs, compare grid size and alignment across pockets or flaps. These repeated relationships are strong identity clues. If the candidate matches colour but not pattern placement, closure or proportions, it should not be accepted simply because the first image looks familiar.",
        ],
      },
      {
        heading: "Preserve evidence before and after delivery",
        paragraphs: [
          "Before checkout, save final URL, product ID, selected colour and size, dimensions, included parts, price and current image. After delivery, photograph the outer parcel if damaged, then the full bag, labels, inner packaging, included straps and any defect. Use one full view, one context view and one close-up. Keep packaging until inspection and the current support window are resolved.",
          "If an item is missing or damaged, follow the evidence request shown in the actual order support flow. An independent link guide does not process payment, delivery or returns. Its role is to preserve what the destination displayed and help the buyer compare the received option with the saved record. Avoid publishing account information, order numbers or private tracking details in a public link index.",
        ],
      },
      {
        heading: "Apply a final bag-link verification rule",
        paragraphs: [
          "Call a bag link verified only when the product ID, selected colour and size, proportions, included parts, first image and source price agree. Mark it changed when the parent record remains but the intended option or dimensions have moved. Treat a new ID as a replacement. Use needs review when shared images and option labels are too ambiguous to identify one bag reliably.",
          "This method prevents the most common bag-link mistakes: showing a large version beside a mini price, missing a removable strap, confusing a colour under edited lighting or sending readers to a copied image on another record. It does not guarantee quality or availability. It creates a clear route from a shared card to the exact current option and leaves enough evidence for the next audit.",
          "Finish with a public-card test. The card title should name the correct size or option when that distinction affects the image or price, and the displayed photograph must represent the same selected bag. Open the route from every page where the item is promoted and compare the final ID again. This catches duplicated cards, stale article examples and category links that were not updated with the main spreadsheet. Record the correction in a dated change note instead of silently replacing the evidence.",
          "For popular rows, recheck the selected option more often than the parent URL. A listing can remain online while its large size, strap bundle or exact colour disappears. Keep route health and option identity in separate fields so a successful automated response never renews the human verification date. The date should advance only after the visible ID, option, image, dimensions and price have been compared again.",
        ],
      },
    ],
    takeaways: ["Verify colour, size and included parts under the parent ID.", "Compare proportions before hardware details.", "Save exact dimensions and opening size.", "Use several views for colour and pattern matching.", "Treat every different ID as a new record."],
  },
  "articles/hacoo-wrong-product-link": {
    minutes: 10,
    sections: [
      {
        heading: "A page can load successfully and still be wrong",
        paragraphs: [
          "The most misleading link failure is not a 404. It is a polished page that opens normally but shows a different item, option or price. A route may have been replaced, a shortened link may redirect elsewhere, or a parent listing may now default to another variant. Treat access and identity as separate tests. First record the original URL and final address; then compare the destination with the evidence attached to the card or spreadsheet row.",
          "Do not correct the row immediately. Preserve the old product ID, title, image, variant, price and checked date so the change remains traceable. If the old evidence is incomplete, mark each missing field. A wrong-looking destination may be a regional or option problem rather than a completely different record. A fixed checklist prevents the first plausible replacement from erasing the information needed to diagnose the failure.",
        ],
      },
      {
        heading: "Classify the mismatch before searching",
        paragraphs: [
          "Use four initial categories: different product ID, same ID with changed content, correct parent listing with wrong default variant, or region or device inconsistency. A different ID is a route-level mismatch. The same ID with a different title or image is a changed record that needs careful review. The correct parent with the wrong default may be recoverable by selecting the intended option. Region inconsistency requires a recorded country and environment rather than a universal broken label.",
          "Capture the final URL, visible ID, current first image and option state before interacting further. Note whether the page came from a browser, app or embedded view. Do not keep clicking shortened mirrors because each hop can hide the original destination. This classification narrows the next action and makes the final correction explainable to readers and future editors.",
        ],
        bullets: ["Different product ID", "Same ID, changed content", "Wrong default variant", "Region or device inconsistency", "Unknown — needs review"],
      },
      {
        heading: "Run the five-field identity test",
        paragraphs: [
          "Compare product ID, current title, first image, selected variant and source price. The ID anchors the record. Title and image catch a substituted item. Variant confirms the exact colour, size, bundle or style. Price is a warning signal: small changes can be normal, while a completely different range may reveal a teaser option or unrelated product. Record each field as match, mismatch or unknown rather than collapsing the result into one guess.",
          "A route should be labelled verified only when all required fields have been checked on the recorded date. If the ID and product match but the old colour is unavailable, use changed. If the route lands on a different ID, use wrong destination. If the page hides the ID or options, use needs review. These controlled labels make it possible to audit many rows without turning uncertainty into an unsupported pass.",
        ],
      },
      {
        heading: "Recover the intended variant under the same ID",
        paragraphs: [
          "When the parent ID matches, open every relevant option selector and compare thumbnails, labels, included pieces and price. The intended product may still exist under a non-default choice. Select colour before size when the image depends on colour, and select bundle before recording price. Save the exact option label and a screenshot after selection. Never assume the cheapest displayed amount belongs to the shared image.",
          "If the intended variant is absent, mark the row changed rather than forcing a nearby option. Do not replace a full set with trousers only or a large bag with a mini version because the parent route remains active. Variant-level accuracy is what turns a generic working link into a useful product match. The option record should contain enough detail for another person to reproduce the same selected state.",
        ],
      },
      {
        heading: "Search for the old record in a safe order",
        paragraphs: [
          "If the ID differs or the record disappeared, search the saved product ID first. Next use an exact title fragment, then a neutral category description with structural features. Compare candidates in separate tabs against the preserved image and option. Search by social nickname or broad colour only after stronger identifiers fail. Similar studio photos are common and cannot establish continuity by themselves.",
          "Stop when the evidence cannot separate candidates. A generic screenshot and remembered price do not justify an exact replacement. Mark the old row unavailable or needs review, list the missing evidence and keep the old ID. Do not follow unfamiliar domains that ask for credentials or payment. Recovery should remain inside known routes and visible product evidence.",
        ],
      },
      {
        heading: "Treat every replacement as a new record",
        paragraphs: [
          "A replacement with a different product ID receives its own URL, title, image, variant, price, measurements, review evidence, region and checked date. Link it to the old row with a note such as possible replacement. Do not copy ratings, sales counts, delivery claims or size charts. Those facts belonged to another record and may describe another seller, batch or option structure.",
          "Keep the original row and status in the change history. This makes the correction reversible and helps downstream copies identify which version they use. Silent overwrites create a dangerous illusion that the row was always correct. A visible history tells readers what changed and gives future editors a path to recheck the decision when the replacement also moves.",
        ],
      },
      {
        heading: "Correct the card, article and sitemap consistently",
        paragraphs: [
          "A wrong link may appear in several surfaces: product card, category page, search result, article example and structured data. Update every occurrence of the destination and verify that the first image and label still describe it. Keep the visible product ID near the action link. If the item is unavailable and no verified replacement exists, remove it from promoted cards or label it clearly instead of routing users to the homepage.",
          "After the correction, rebuild the site and test the exact generated URL, language alternates, canonical tag and sitemap entry. Check mobile taps as well as desktop clicks. Record an outbound click event with destination and product ID without collecting personal data. Analytics can reveal a frequently used row that deserves more frequent audits, but a high click count does not excuse a mismatched destination.",
        ],
      },
      {
        heading: "Use a final reproducibility check",
        paragraphs: [
          "Open the corrected route in a clean session with the real destination region. Confirm the final domain, ID, title, image, option and selected price. Then open the public card that points to it and repeat the click. Save the new checked date only after both paths agree. If the link requires a temporary account session or cannot be reproduced, do not mark it verified.",
          "Write a one-sentence change note that states the evidence, such as old route opened ID A; replacement ID B matches image and option but reviews were not transferred. This final note turns a private fix into an auditable correction. The objective is not to promise that the URL will never change. It is to make every current match explainable, testable and easy to review again.",
          "Schedule rechecks according to risk. Homepage cards, high-click rows and recently replaced links deserve shorter review intervals than dormant records. A crawler can flag redirects or response errors, but it cannot decide that a new title, image or option still represents the intended product. Keep automated route health in a separate field from the human identity check, and never advance the verified date from a status code alone.",
        ],
      },
    ],
    takeaways: ["Separate page access from product identity.", "Classify the mismatch before searching.", "Run the same five-field test every time.", "Never overwrite a different product ID in place.", "Recheck the public card in a clean session."],
  },
};

const compactArticle = (minutes: number, sections: Array<[string, string]>, takeaways: string[]): Article => ({
  minutes,
  sections: sections.map(([heading, paragraph]) => ({ heading, paragraphs: [paragraph] })),
  takeaways,
});

const de: Record<RemainingPriorityArticleKey, Article> = {
  "articles/hacoo-find-product-old-link-screenshot": compactArticle(9, [
    ["Alte Belege zuerst sichern", "Kopiere die ursprüngliche URL als Text, speichere den Screenshot in voller Auflösung und notiere Quelle, Datum, sichtbare ID, Titel, Variante, Preis und auffällige Merkmale. Trenne sichtbare Beobachtungen von Erinnerungen und schreibe unbekannt, wenn ein Wert fehlt. Der Screenshot belegt nur einen früheren Zustand, nicht das heutige Ziel."],
    ["Starke Suchmerkmale extrahieren", "Suche zuerst nach einer ausdrücklich genannten Produkt-ID und speichere lange Nummern als Text. Ergänze exakten Titelausschnitt, neutrale Kategorie, Variantenname und zwei strukturelle Merkmale. Farbe und Preis sind schwächere Hinweise, weil Licht, Rabatte und Standardoptionen wechseln."],
    ["Vom exakten Code zur Beschreibung suchen", "Durchsuche zuerst den gepflegten Index nach der ID, danach nach Titelfragment und einer sachlichen Beschreibung. Öffne Kandidaten getrennt und vergleiche sie mit dem unveränderten Ausgangsbeleg. Social-Media-Spitznamen und breite Bildsuchen kommen erst zuletzt, weil kopierte Fotos häufig falsche Treffer erzeugen."],
    ["Kandidaten mit demselben Raster vergleichen", "Prüfe ID, Titel, erstes Bild, Variante, strukturelle Merkmale und Quellpreis. Nutze exakter Datensatz, geändert, möglicher Ersatz, regional begrenzt, nicht verfügbar oder Prüfung nötig. Ein anderer Code ist ein neuer Datensatz; bei unklaren Kandidaten ist Prüfung nötig besser als eine bequeme Vermutung."],
    ["Region und Umgebung dokumentieren", "Teste den alten Weg einmal im aktuellen Browser und in der vorgesehenen Umgebung mit dem echten Lieferland. Notiere End-URL und Ergebnis. Nutze keine falsche Adresse, kein fremdes Konto und kein VPN. Technische Erreichbarkeit und Produktidentität bleiben zwei getrennte Prüfungen."],
    ["Treffer reproduzierbar veröffentlichen", "Speichere alte URL und ID, neues Ziel und ID, übereinstimmende Felder, Variante, Region und Datum. Öffne den Link in einer sauberen Sitzung erneut. Ein Ersatz erhält eigene Bilder, Maße und Bewertungen; alte Nachweise werden nicht übertragen. Fehlen eindeutige Merkmale, bleibt der alte Datensatz sichtbar nicht verfügbar."],
  ], ["Originalbeleg unverändert sichern.", "Exakte IDs zuerst suchen.", "Kandidaten feldweise vergleichen.", "Andere IDs als Ersatz führen.", "Nur reproduzierbare Treffer veröffentlichen."]),
  "articles/hacoo-shoes-links": compactArticle(9, [
    ["Listing und Schuhvariante getrennt identifizieren", "Ein Eltern-Listing kann viele Designs enthalten. Speichere Produkt-ID, genaue Stilbezeichnung, ausgewähltes Bild, Preis und ein Merkmal wie Paneelanordnung oder Sohlenform. Stimmt die ID, fehlt aber die gewünschte Farbe, ist die Zeile geändert und nicht vollständig verifiziert."],
    ["Route vor Qualitätsprüfung bestätigen", "Vergleiche Enddomain, ID, Titel, Bild, Option und Quellpreis und wiederhole die Auswahl in einer sauberen Sitzung. Ein erfolgreicher Serverstatus beweist nur Erreichbarkeit. Region und Datum gehören zum Ergebnis; eine andere ID wird als möglicher Ersatz neu erfasst."],
    ["Silhouette vor Details lesen", "Prüfe Zehenbox, Seitenprofil, Ferse, Öffnung und Sohlenkurve in geraden Ansichten. Vergleiche beide Schuhe auf Symmetrie. Wiederkehrende Formabweichungen in mehreren aktuellen Fotos sind aussagekräftiger als ein Schatten oder eine einzelne komprimierte Aufnahme."],
    ["Konstruktion in fester Reihenfolge prüfen", "Kontrolliere Paneele, Nähte, Kanten, Ösen oder Verschlüsse, Ferse und Sohlenverbindung. Suche nach ausgelassenen Stichen, gelösten Kanten, Spalten und verzogenen Teilen. Diese Punkte beschreiben sichtbare Verarbeitung und sind kein Echtheitsnachweis."],
    ["Innensohlenlänge und Breite vergleichen", "Messe die Innensohle eines passenden Paars und vergleiche sie mit der Tabelle der exakt gewählten Variante. Beachte Breite, Zehenraum, Spann und Fersenhalt. Speichere Stil, Größe, veröffentlichte Innenlänge, Referenzmaß und Datum; die regionale Größenangabe allein genügt nicht."],
    ["Belege vor und nach Lieferung sichern", "Vor dem Kauf speicherst du URL, ID, Stil, Größe, Tabelle, Preis und Region. Nach Lieferung fotografierst du Paar, Größenetiketten, Verpackung, Sohlen und Fehler. Ein Link gilt nur als verifiziert, wenn ID, Stil, Bild, Preis und Größenbeleg denselben Schuh beschreiben."],
  ], ["Exakte Stiloption prüfen.", "Form vor Dekor bewerten.", "Sohlen und Paneele kontrollieren.", "Innensohle und Breite messen.", "Stil, Region und Datum speichern."]),
  "articles/hacoo-hoodie-tracksuit-links": compactArticle(9, [
    ["Jede Kleidungsoption separat abgleichen", "Unter einer ID können Hoodie, Hose, Set, Farben und Grafiken liegen. Notiere genaue Option, enthaltene Teile, erstes Bild und Preis nach der Auswahl. Ein Setbild beweist nicht, dass der günstigste Standardpreis Oberteil und Hose umfasst."],
    ["Identität vor Passform bestätigen", "Vergleiche ID, Titel, Bild, Variante, Preis, Region und Datum. Bleibt die ID, verschwindet aber Farbe oder Set, ist der Eintrag geändert. Eine andere ID ist ein Ersatz mit eigenen Maßen und Bewertungen. Wiederhole die Auswahl in einer sauberen Sitzung."],
    ["Gesamte Silhouette vergleichen", "Bei Hoodies zählen Schulter, Weite, Länge, Ärmel, Kapuze, Tasche und Saum; bei Hosen Bund, Leibhöhe, Oberschenkel, Verjüngung und Bündchen. Prüfe gerade Gesamtansichten vor Nahaufnahmen und stelle sicher, dass Nutzerfotos zur gewählten Variante gehören."],
    ["Nähte, Verschlüsse und Grafiken prüfen", "Kontrolliere Hauptnähte, Reißverschluss oder Kordel, Taschen, Bündchen, Bund und Druck. Achte auf verdrehte Nähte, versetzte Taschen und ungleichmäßige Grafiken. Stoffgewicht bleibt ohne klare Spezifikation eine Vermutung und darf nicht aus einem Foto abgeleitet werden."],
    ["Passendes Referenzkleidungsstück messen", "Miss ein ähnlich sitzendes Kleidungsstück flach: Brust, Länge, Schulter und Ärmel; bei Hosen Taille, Hüfte, Leibhöhe, Oberschenkel und Innenbein. Speichere die Tabelle nach Auswahl des Stils und kläre, ob sie Kleidungs- oder Körpermaße zeigt."],
    ["Variantentreffer abschließend prüfen", "Verifiziert bedeutet, dass ID, Kleidungsart, enthaltene Teile, Farbe oder Grafik, Preis und Tabelle dieselbe Option beschreiben. Bei Unklarheit nutze Prüfung nötig. Vor dem Waschen fotografierst du Artikel, Etikett, Beutelbarcode und relevante Maße; aktuelle Supportregeln bleiben maßgeblich."],
  ], ["Exaktes Kleidungsstück oder Set identifizieren.", "Enthaltene Teile und Preis bestätigen.", "Silhouette zuerst prüfen.", "Mit gleicher Methode messen.", "Neue ID als neuen Datensatz führen."]),
  "articles/hacoo-bag-links": compactArticle(9, [
    ["Taschenoption auf Ebene von Farbe und Größe prüfen", "Eine ID kann viele Farben, Größen, Materialien und Riemen enthalten. Speichere ID, genaue Option, Zubehör, erstes Bild und Preis. Kombiniere Farbnamen mit Form, Griffzahl, Verschluss, Boden und Taschenanordnung, weil Licht und Displays Farben verändern."],
    ["ID, Bild, Größe und Preis gemeinsam bestätigen", "Wähle die gewünschte Tasche vor dem Erfassen von Preis und Maßen. Zeigt die Karte eine große Tote, der Preis gehört aber einer Mini-Pouch, stimmt der Eintrag nicht. Dokumentiere Region und Datum und erstelle bei anderer ID einen neuen Ersatzdatensatz."],
    ["Proportionen vor Beschlägen vergleichen", "Prüfe Verhältnis von Breite und Höhe, Tiefe, Boden, Griffhöhe und Paneele in Vorder-, Seiten- und Bodenansicht. Nutze Symmetrie für Griffe, Nähte, Taschen und Verschluss. Stelle sicher, dass Referenzbilder zur gewählten Größe gehören."],
    ["Nähte, Kanten, Griffe und Verschlüsse prüfen", "Kontrolliere Hauptnähte, Kantenfarbe, Griffansätze, Reißverschluss oder Magnet, Füße und Riemenbefestigung. Suche nach ungleichmäßigen Stichen, Rissen und Lücken an Belastungspunkten. Sichtbare Verarbeitung ist kein Echtheitsbeweis."],
    ["Maße in eine Kapazitätsprüfung übersetzen", "Speichere Breite, Höhe, Tiefe und Griff- oder Riemenlänge und beachte die Messstelle bei zulaufenden Formen. Vergleiche mit einer vorhandenen Tasche und mit festen Gegenständen wie Telefon, Flasche oder Laptop. Fehlt ein kritisches Maß, bleibt es unbekannt."],
    ["Endgültige Linkregel anwenden", "Verifiziert ist der Link nur, wenn ID, Farbe, Größe, Proportionen, Zubehör, Bild und Preis übereinstimmen. Nach Lieferung fotografierst du Paket, Tasche, Etiketten, Riemen und Mängel. Ein unabhängiger Index dokumentiert den Link, entscheidet aber nicht über Zahlung, Versand oder Rückgabe."],
  ], ["Farbe, Größe und Zubehör prüfen.", "Proportionen zuerst vergleichen.", "Genaue Maße speichern.", "Mehrere Ansichten nutzen.", "Andere ID als neuen Datensatz behandeln."]),
  "articles/hacoo-wrong-product-link": compactArticle(9, [
    ["Eine ladende Seite kann trotzdem falsch sein", "Trenne Erreichbarkeit und Identität. Sichere Original-URL, Endadresse, alte ID, Titel, Bild, Variante, Preis und Prüfdatum, bevor du etwas änderst. Eine polierte Zielseite beweist nicht, dass sie zum Karteninhalt gehört."],
    ["Abweichung zuerst einordnen", "Unterscheide andere Produkt-ID, gleiche ID mit geändertem Inhalt, richtiges Eltern-Listing mit falscher Standardvariante und regionale oder technische Abweichung. Erfasse End-URL, sichtbare ID, Bild und Option. Diese Einordnung bestimmt, ob du Varianten prüfst oder den alten Datensatz suchst."],
    ["Fünf-Felder-Test durchführen", "Vergleiche ID, Titel, erstes Bild, Variante und Quellpreis als Übereinstimmung, Abweichung oder unbekannt. Verifiziert gilt nur nach vollständiger Prüfung. Gleiche ID ohne alte Farbe bedeutet geändert; andere ID bedeutet falsches Ziel; verborgene Optionen bedeuten Prüfung nötig."],
    ["Variante oder alten Datensatz wiederfinden", "Öffne relevante Optionen und speichere Label, enthaltene Teile und Preis nach Auswahl. Fehlt der alte Datensatz, suche zuerst seine ID, dann Titelfragment und strukturelle Merkmale. Bei unklaren Kandidaten stoppe und behalte den alten Eintrag als nicht verfügbar."],
    ["Ersatz niemals still überschreiben", "Eine neue ID erhält eigene URL, Bilder, Maße, Bewertungen, Region und Datum. Verbinde beide Zeilen mit einer neutralen Notiz, aber übertrage keine Bewertungen oder Lieferangaben. Die Historie macht die Korrektur nachvollziehbar und umkehrbar."],
    ["Öffentlichen Weg erneut testen", "Aktualisiere Karte, Kategorie, Artikelbeispiel und strukturierte Daten konsistent. Baue die Seite und prüfe Canonical, Sprachalternativen und Sitemap. Öffne danach die öffentliche Karte in einer sauberen Sitzung und speichere erst dann das neue Prüfdatum."],
  ], ["Erreichbarkeit und Identität trennen.", "Abweichung vor der Suche klassifizieren.", "Fünf Felder prüfen.", "Andere ID nie überschreiben.", "Öffentlichen Klick erneut testen."]),
};

const fr: Record<RemainingPriorityArticleKey, Article> = {
  "articles/hacoo-find-product-old-link-screenshot": compactArticle(9, [
    ["Conserver d’abord les anciennes preuves", "Copiez l’URL originale, gardez la capture en pleine résolution et notez source, date, identifiant, titre, variante, prix et détails visibles. Séparez observation et souvenir; une capture prouve un ancien état, pas la destination actuelle."],
    ["Extraire les identifiants les plus forts", "Cherchez un identifiant explicitement associé au produit, puis un fragment exact du titre, la catégorie, la variante et deux caractéristiques structurelles. Couleur et prix restent secondaires car lumière, promotion et option par défaut peuvent changer."],
    ["Chercher du code exact vers la description", "Interrogez d’abord l’index avec l’ID, puis le titre et une description neutre. Ouvrez les candidats séparément et comparez-les à la preuve intacte. Les surnoms sociaux et la recherche par image viennent ensuite, car les photos sont souvent recopiées."],
    ["Comparer avec une grille fixe", "Contrôlez ID, titre, première image, variante, caractéristiques et prix. Utilisez fiche exacte, modifiée, remplacement possible, région limitée, indisponible ou à revoir. Un autre ID crée une nouvelle fiche; en cas d’ambiguïté, à revoir vaut mieux qu’une supposition."],
    ["Documenter région et environnement", "Testez le lien dans l’environnement prévu et avec le vrai pays de livraison. Notez URL finale et résultat, sans fausse adresse, compte emprunté ni VPN. Accès technique et identité produit sont deux vérifications distinctes."],
    ["Publier une correspondance reproductible", "Conservez ancienne URL et ID, nouvelle destination et ID, champs concordants, variante, région et date. Refaites le test en session propre. Un remplacement garde ses propres images, mesures et avis; faute de preuve unique, l’ancienne fiche reste indisponible."],
  ], ["Conserver la preuve originale.", "Chercher d’abord l’ID.", "Comparer champ par champ.", "Créer une fiche pour un nouvel ID.", "Publier un résultat reproductible."]),
  "articles/hacoo-shoes-links": compactArticle(9, [
    ["Identifier la fiche et le style", "Une fiche parent peut contenir plusieurs chaussures. Enregistrez ID, style exact, image sélectionnée, prix et détail distinctif. Si l’ID reste mais que le coloris disparaît, la fiche est modifiée et non totalement vérifiée."],
    ["Confirmer la route avant le QC", "Comparez domaine final, ID, titre, image, option et prix, puis répétez la sélection en session propre. Une réponse serveur prouve seulement l’accès. Date et région font partie du résultat; un autre ID est un remplacement à vérifier."],
    ["Lire la silhouette avant les détails", "Contrôlez boîte à orteils, profil, talon, ouverture et courbe de semelle dans des vues droites. Comparez les deux chaussures. Des écarts répétés sur plusieurs photos récentes valent davantage qu’une ombre isolée."],
    ["Inspecter la construction dans le même ordre", "Examinez panneaux, coutures, bords, œillets ou fermetures, talon et liaison de semelle. Cherchez points sautés, bords décollés, espaces et pièces tordues. Ces observations ne prouvent pas l’authenticité."],
    ["Comparer longueur intérieure et largeur", "Mesurez la semelle intérieure d’une paire adaptée et comparez-la au tableau du style sélectionné. Tenez compte largeur, avant-pied, cou-de-pied et talon. Conservez style, pointure, longueur publiée, mesure de référence et date."],
    ["Garder les preuves utiles", "Avant achat, enregistrez URL, ID, style, pointure, tableau, prix et région. Après livraison, photographiez paire, étiquettes, emballage, semelles et défauts. Le lien n’est vérifié que si ID, style, image, prix et mesures décrivent la même chaussure."],
  ], ["Vérifier le style exact.", "Observer la forme avant le décor.", "Contrôler semelle et panneaux.", "Mesurer longueur et largeur.", "Conserver style, région et date."]),
  "articles/hacoo-hoodie-tracksuit-links": compactArticle(9, [
    ["Rapprocher chaque option séparément", "Un ID peut regrouper sweat, pantalon, set, couleurs et motifs. Notez option exacte, pièces incluses, image et prix après sélection. Une photo de tenue ne prouve pas que le prix minimal couvre le haut et le bas."],
    ["Confirmer l’identité avant la coupe", "Comparez ID, titre, image, variante, prix, région et date. Même ID sans l’ancienne couleur signifie modifié; autre ID signifie remplacement avec ses propres mesures et avis. Répétez la sélection en session propre."],
    ["Comparer la silhouette complète", "Pour un sweat: épaules, largeur, longueur, manches, capuche, poche et bas. Pour le pantalon: taille, fourche, cuisse, coupe et cheville. Commencez par les vues entières et vérifiez que les photos d’avis concernent la variante."],
    ["Contrôler coutures, fermeture et motif", "Examinez coutures, zip ou cordon, poches, poignets, taille et impression. Repérez coutures torses, poches décalées et motifs asymétriques. Le poids du tissu reste inconnu sans spécification claire."],
    ["Mesurer un vêtement de référence", "Mesurez à plat un vêtement au tombé comparable: poitrine, longueur, épaules et manches; pour le pantalon, taille, hanches, fourche, cuisse et entrejambe. Sauvegardez le tableau après choix du style et distinguez mesures du vêtement et du corps."],
    ["Appliquer la règle finale de variante", "Vérifié signifie que ID, type, pièces incluses, couleur ou motif, prix et tableau décrivent la même option. Si le set est ambigu, utilisez à revoir. Avant lavage, photographiez article, étiquette, code du sachet et mesures pertinentes."],
  ], ["Identifier le vêtement ou set exact.", "Confirmer pièces et prix.", "Contrôler d’abord la silhouette.", "Mesurer avec la même méthode.", "Créer une fiche pour un autre ID."]),
  "articles/hacoo-bag-links": compactArticle(9, [
    ["Vérifier couleur et taille au niveau de l’option", "Un ID peut regrouper couleurs, tailles, matières et bandoulières. Enregistrez ID, option exacte, accessoires, image et prix. Combinez le nom de couleur avec forme, poignées, fermeture, base et poches."],
    ["Confirmer ensemble ID, image, taille et prix", "Sélectionnez le sac avant d’enregistrer prix et dimensions. Une grande tote avec le prix d’une mini pochette n’est pas une correspondance. Notez région et date et créez une nouvelle fiche si l’ID change."],
    ["Comparer les proportions avant la quincaillerie", "Contrôlez rapport largeur-hauteur, profondeur, base, tombé des poignées et panneaux, puis la symétrie des poignées, coutures, poches et fermeture. Vérifiez que les images correspondent bien à la taille choisie."],
    ["Inspecter coutures, bords et fermetures", "Examinez coutures principales, finition des bords, attaches, zip ou aimant, pieds et fixation de bandoulière. Cherchez points irréguliers, fissures et jeux aux zones de tension. La qualité visible ne prouve pas l’authenticité."],
    ["Transformer les dimensions en capacité", "Sauvegardez largeur, hauteur, profondeur et longueur de poignée ou sangle. Comparez avec un sac connu et avec téléphone, bouteille ou ordinateur. Si l’ouverture ou une dimension critique manque, notez-la comme inconnue."],
    ["Appliquer la règle finale", "Le lien est vérifié seulement si ID, couleur, taille, proportions, accessoires, image et prix concordent. Après réception, photographiez colis, sac, étiquettes, sangles et défauts. L’index documente le lien mais ne décide pas du retour."],
  ], ["Vérifier couleur, taille et accessoires.", "Comparer d’abord les proportions.", "Sauvegarder les dimensions exactes.", "Utiliser plusieurs vues.", "Traiter un autre ID comme nouvelle fiche."]),
  "articles/hacoo-wrong-product-link": compactArticle(9, [
    ["Une page accessible peut être fausse", "Séparez accès et identité. Conservez URL originale, destination, ancien ID, titre, image, variante, prix et date avant toute correction. Une page qui s’affiche correctement ne prouve pas qu’elle correspond à la carte."],
    ["Classer l’écart", "Distinguez autre ID, même ID avec contenu modifié, bonne fiche parent avec mauvaise variante par défaut, ou différence de région ou d’appareil. Capturez URL finale, ID visible, image et option; cette classe indique la prochaine vérification."],
    ["Exécuter le test des cinq champs", "Comparez ID, titre, première image, variante et prix comme concordant, différent ou inconnu. Même ID sans l’ancienne couleur signifie modifié; autre ID signifie mauvaise destination; options cachées signifient à revoir."],
    ["Retrouver variante ou ancienne fiche", "Ouvrez les options et sauvegardez libellé, pièces et prix après sélection. Si l’ancien produit a disparu, cherchez son ID puis le titre et les caractéristiques. Si plusieurs candidats subsistent, gardez l’ancien en indisponible."],
    ["Ne jamais écraser silencieusement", "Un nouvel ID reçoit ses propres URL, images, mesures, avis, région et date. Reliez les lignes par une note neutre sans transférer évaluations ou livraison. L’historique rend la correction traçable et réversible."],
    ["Retester le parcours public", "Corrigez carte, catégorie, exemples et données structurées, puis contrôlez canonical, langues et sitemap. Ouvrez la carte publique en session propre et ne changez la date qu’après concordance entre carte et destination."],
  ], ["Séparer accès et identité.", "Classer avant de chercher.", "Contrôler cinq champs.", "Ne pas écraser un autre ID.", "Retester le clic public."]),
};

const es: Record<RemainingPriorityArticleKey, Article> = {
  "articles/hacoo-find-product-old-link-screenshot": compactArticle(9, [
    ["Conserva primero las pruebas antiguas", "Copia la URL original, guarda la captura completa y anota fuente, fecha, ID, título, variante, precio y rasgos visibles. Separa observaciones de recuerdos; una captura demuestra un estado anterior, no el destino actual."],
    ["Extrae los identificadores más fuertes", "Busca un ID explícito y guárdalo como texto. Añade un fragmento exacto del título, categoría neutral, variante y dos rasgos estructurales. Color y precio son señales secundarias porque cambian con luz, promoción y opción predeterminada."],
    ["Busca desde el código exacto a la descripción", "Consulta primero el ID en el índice, después el título y una descripción objetiva. Abre candidatos por separado y compáralos con la prueba intacta. Los apodos sociales y búsquedas por imagen quedan para el final porque las fotos se copian."],
    ["Compara con una cuadrícula fija", "Revisa ID, título, primera imagen, variante, rasgos y precio. Usa registro exacto, cambiado, posible sustituto, limitado por región, no disponible o pendiente. Otro ID crea una ficha nueva; si hay ambigüedad, pendiente es mejor que adivinar."],
    ["Documenta región y entorno", "Prueba el enlace en el entorno previsto y con el país real de entrega. Guarda URL final y resultado sin dirección falsa, cuenta prestada ni VPN. El acceso técnico y la identidad del producto son comprobaciones distintas."],
    ["Publica una coincidencia reproducible", "Conserva URL e ID antiguos, destino e ID nuevos, campos coincidentes, variante, región y fecha. Repite el test en sesión limpia. Un sustituto mantiene imágenes, medidas y reseñas propias; sin evidencia única, el registro antiguo queda no disponible."],
  ], ["Conservar la prueba original.", "Buscar primero el ID.", "Comparar campo por campo.", "Crear ficha para otro ID.", "Publicar resultados reproducibles."]),
  "articles/hacoo-shoes-links": compactArticle(9, [
    ["Identifica listado y estilo", "Una ficha principal puede contener muchos diseños. Guarda ID, estilo exacto, imagen seleccionada, precio y un rasgo como paneles o suela. Si el ID coincide pero desaparece el color, la ficha está cambiada, no totalmente verificada."],
    ["Confirma la ruta antes del QC", "Compara dominio final, ID, título, imagen, opción y precio y repite la selección en sesión limpia. Una respuesta del servidor solo prueba acceso. Región y fecha forman parte del resultado; otro ID es un sustituto nuevo."],
    ["Lee la silueta antes de los detalles", "Revisa puntera, perfil, talón, abertura y curva de suela con vistas rectas. Compara ambos zapatos. Diferencias repetidas en varias fotos recientes pesan más que una sombra o una toma comprimida."],
    ["Inspecciona la construcción en orden", "Examina paneles, costuras, bordes, ojales o cierres, talón y unión de suela. Busca puntadas omitidas, bordes sueltos, huecos y piezas torcidas. Estas observaciones no demuestran autenticidad."],
    ["Compara plantilla y anchura", "Mide la plantilla de un par cómodo y compárala con la tabla del estilo elegido. Considera anchura, puntera, empeine y talón. Guarda estilo, talla, longitud publicada, medida de referencia y fecha."],
    ["Conserva pruebas útiles", "Antes de comprar guarda URL, ID, estilo, talla, tabla, precio y región. Tras recibir, fotografía par, etiquetas, embalaje, suelas y defectos. El enlace solo se verifica cuando ID, estilo, imagen, precio y medidas describen el mismo zapato."],
  ], ["Verificar el estilo exacto.", "Evaluar forma antes que decoración.", "Revisar suela y paneles.", "Medir plantilla y anchura.", "Guardar estilo, región y fecha."]),
  "articles/hacoo-hoodie-tracksuit-links": compactArticle(9, [
    ["Compara cada opción por separado", "Un ID puede agrupar sudadera, pantalón, conjunto, colores y gráficos. Anota opción exacta, piezas incluidas, imagen y precio tras seleccionar. Una foto de conjunto no prueba que el precio mínimo incluya ambas prendas."],
    ["Confirma identidad antes del ajuste", "Compara ID, título, imagen, variante, precio, región y fecha. El mismo ID sin el color antiguo significa cambiado; otro ID es un sustituto con medidas y reseñas propias. Repite la selección en sesión limpia."],
    ["Compara la silueta completa", "En sudaderas revisa hombros, ancho, largo, mangas, capucha, bolsillo y bajo; en pantalones cintura, tiro, muslo, estrechamiento y puño. Empieza con vistas completas y confirma que las fotos corresponden a la variante."],
    ["Revisa costuras, cierre y gráfico", "Examina costuras, cremallera o cordón, bolsillos, puños, cintura e impresión. Busca costuras torcidas, bolsillos desplazados y gráficos asimétricos. El peso del tejido sigue siendo desconocido sin especificación."],
    ["Mide una prenda de referencia", "Mide en plano una prenda de ajuste parecido: pecho, largo, hombros y mangas; para pantalones cintura, cadera, tiro, muslo y entrepierna. Guarda la tabla después de elegir estilo y distingue medidas de prenda y cuerpo."],
    ["Aplica la regla final de variante", "Verificado significa que ID, tipo, piezas, color o gráfico, precio y tabla describen la misma opción. Si el conjunto es ambiguo usa pendiente. Antes de lavar fotografía prenda, etiqueta, código de bolsa y medidas."],
  ], ["Identificar prenda o conjunto exacto.", "Confirmar piezas y precio.", "Revisar primero la silueta.", "Medir con el mismo método.", "Crear ficha para otro ID."]),
  "articles/hacoo-bag-links": compactArticle(9, [
    ["Comprueba color y tamaño en la opción", "Un ID puede reunir colores, tamaños, materiales y correas. Guarda ID, opción exacta, accesorios, imagen y precio. Combina el nombre del color con forma, asas, cierre, base y bolsillos."],
    ["Confirma ID, imagen, tamaño y precio", "Selecciona el bolso antes de registrar precio y dimensiones. Un tote grande con precio de mini bolsa no coincide. Guarda región y fecha y crea otra ficha cuando cambie el ID."],
    ["Compara proporciones antes del herraje", "Revisa relación ancho-alto, profundidad, base, caída de asas y paneles, además de simetría de asas, costuras, bolsillos y cierre. Confirma que las imágenes sean del tamaño elegido."],
    ["Inspecciona costuras, bordes y cierres", "Examina costuras, acabado de bordes, anclajes, cremallera o imán, pies y correa. Busca puntadas irregulares, grietas y huecos en zonas de tensión. La calidad visible no demuestra autenticidad."],
    ["Convierte medidas en capacidad", "Guarda ancho, alto, profundidad y longitud de asa o correa. Compara con un bolso conocido y con teléfono, botella u ordenador. Si falta la abertura o una dimensión crítica, márcala como desconocida."],
    ["Aplica la regla final", "El enlace se verifica solo si ID, color, tamaño, proporciones, accesorios, imagen y precio coinciden. Tras recibir, fotografía paquete, bolso, etiquetas, correas y defectos. El índice documenta el enlace, no decide devoluciones."],
  ], ["Verificar color, tamaño y accesorios.", "Comparar primero proporciones.", "Guardar medidas exactas.", "Usar varias vistas.", "Tratar otro ID como ficha nueva."]),
  "articles/hacoo-wrong-product-link": compactArticle(9, [
    ["Una página que carga puede estar equivocada", "Separa acceso e identidad. Conserva URL original, destino, ID antiguo, título, imagen, variante, precio y fecha antes de corregir. Una página bien presentada no demuestra que coincida con la tarjeta."],
    ["Clasifica la diferencia", "Distingue otro ID, mismo ID con contenido cambiado, ficha principal correcta con variante predeterminada incorrecta, o diferencia de región o dispositivo. Captura URL final, ID visible, imagen y opción."],
    ["Ejecuta la prueba de cinco campos", "Compara ID, título, primera imagen, variante y precio como igual, distinto o desconocido. Mismo ID sin color antiguo significa cambiado; otro ID significa destino incorrecto; opciones ocultas significan pendiente."],
    ["Recupera variante o ficha antigua", "Abre opciones y guarda etiqueta, piezas y precio tras seleccionar. Si desapareció el producto, busca ID, título y rasgos. Si varios candidatos siguen posibles, conserva el antiguo como no disponible."],
    ["Nunca sobrescribas en silencio", "Un ID nuevo recibe URL, imágenes, medidas, reseñas, región y fecha propias. Relaciona las filas con una nota neutral sin transferir valoraciones o envío. El historial permite auditar y revertir la corrección."],
    ["Vuelve a probar la ruta pública", "Corrige tarjeta, categoría, ejemplos y datos estructurados y revisa canonical, idiomas y sitemap. Abre la tarjeta pública en sesión limpia y cambia la fecha solo cuando tarjeta y destino coincidan."],
  ], ["Separar acceso e identidad.", "Clasificar antes de buscar.", "Comprobar cinco campos.", "No sobrescribir otro ID.", "Volver a probar el clic público."]),
};

const it: Record<RemainingPriorityArticleKey, Article> = {
  "articles/hacoo-find-product-old-link-screenshot": compactArticle(9, [
    ["Conserva prima le prove vecchie", "Copia l’URL originale, salva lo screenshot completo e annota fonte, data, ID, titolo, variante, prezzo e dettagli visibili. Separa osservazione e memoria; uno screenshot prova uno stato passato, non la destinazione attuale."],
    ["Estrai gli identificatori più forti", "Cerca un ID esplicito e salvalo come testo. Aggiungi un frammento esatto del titolo, categoria neutra, variante e due tratti strutturali. Colore e prezzo sono segnali secondari perché cambiano con luce, sconto e opzione predefinita."],
    ["Cerca dal codice esatto alla descrizione", "Interroga prima l’ID nell’indice, poi titolo e descrizione oggettiva. Apri i candidati separatamente e confrontali con la prova intatta. Soprannomi social e ricerca per immagine vengono dopo, perché le foto sono spesso copiate."],
    ["Confronta con una griglia fissa", "Controlla ID, titolo, prima immagine, variante, caratteristiche e prezzo. Usa record esatto, modificato, possibile sostituto, limitato per regione, non disponibile o da rivedere. Un altro ID crea un nuovo record."],
    ["Documenta regione e ambiente", "Prova il link nell’ambiente previsto con il vero paese di consegna. Registra URL finale e risultato senza indirizzi falsi, account prestati o VPN. Accesso tecnico e identità del prodotto restano verifiche distinte."],
    ["Pubblica una corrispondenza ripetibile", "Conserva URL e ID vecchi, destinazione e ID nuovi, campi corrispondenti, variante, regione e data. Ripeti in sessione pulita. Un sostituto mantiene immagini, misure e recensioni proprie; senza prova univoca il vecchio record resta non disponibile."],
  ], ["Conserva la prova originale.", "Cerca prima l’ID.", "Confronta campo per campo.", "Crea un record per un altro ID.", "Pubblica risultati ripetibili."]),
  "articles/hacoo-shoes-links": compactArticle(9, [
    ["Identifica scheda e stile", "Una scheda padre può contenere molti design. Salva ID, stile esatto, immagine selezionata, prezzo e un tratto come pannelli o suola. Se l’ID coincide ma il colore scompare, la scheda è modificata."],
    ["Conferma il percorso prima del QC", "Confronta dominio finale, ID, titolo, immagine, opzione e prezzo e ripeti in sessione pulita. Una risposta server prova solo l’accesso. Regione e data fanno parte del risultato; un altro ID è un sostituto nuovo."],
    ["Leggi la silhouette prima dei dettagli", "Controlla punta, profilo, tallone, apertura e curva della suola con viste dritte. Confronta entrambe le scarpe. Differenze ripetute in più foto recenti contano più di un’ombra isolata."],
    ["Ispeziona la costruzione in ordine", "Esamina pannelli, cuciture, bordi, occhielli o chiusure, tallone e unione della suola. Cerca punti mancanti, bordi sollevati, spazi e parti storte. Queste osservazioni non provano autenticità."],
    ["Confronta soletta e larghezza", "Misura la soletta di una scarpa comoda e confrontala con la tabella dello stile scelto. Considera larghezza, punta, collo e tallone. Salva stile, taglia, lunghezza pubblicata, misura di riferimento e data."],
    ["Conserva prove utili", "Prima dell’acquisto salva URL, ID, stile, taglia, tabella, prezzo e regione. Dopo la consegna fotografa paio, etichette, confezione, suole e difetti. Il link è verificato solo quando tutti i campi descrivono la stessa scarpa."],
  ], ["Verifica lo stile esatto.", "Valuta la forma prima del decoro.", "Controlla suola e pannelli.", "Misura soletta e larghezza.", "Salva stile, regione e data."]),
  "articles/hacoo-hoodie-tracksuit-links": compactArticle(9, [
    ["Abbina ogni opzione separatamente", "Un ID può includere felpa, pantalone, set, colori e grafiche. Annota opzione esatta, pezzi inclusi, immagine e prezzo dopo la selezione. La foto di un set non prova che il prezzo minimo includa entrambi i capi."],
    ["Conferma l’identità prima della vestibilità", "Confronta ID, titolo, immagine, variante, prezzo, regione e data. Stesso ID senza il vecchio colore significa modificato; altro ID significa sostituto con misure e recensioni proprie. Ripeti in sessione pulita."],
    ["Confronta la silhouette completa", "Per felpe controlla spalle, larghezza, lunghezza, maniche, cappuccio, tasca e fondo; per pantaloni vita, cavallo, coscia, taper e polsino. Parti da viste complete e conferma la variante nelle foto."],
    ["Controlla cuciture, chiusura e grafica", "Esamina cuciture, zip o cordino, tasche, polsini, vita e stampa. Cerca cuciture storte, tasche sfalsate e grafiche asimmetriche. Il peso del tessuto resta sconosciuto senza specifica."],
    ["Misura un capo di riferimento", "Misura in piano un capo dalla vestibilità simile: petto, lunghezza, spalle e maniche; per pantaloni vita, fianchi, cavallo, coscia e interno gamba. Salva la tabella dopo aver scelto lo stile."],
    ["Applica la regola finale", "Verificato significa che ID, tipo, pezzi, colore o grafica, prezzo e tabella descrivono la stessa opzione. Se il set è ambiguo usa da rivedere. Prima del lavaggio fotografa capo, etichetta, codice busta e misure."],
  ], ["Identifica capo o set esatto.", "Conferma pezzi e prezzo.", "Controlla prima la silhouette.", "Misura con lo stesso metodo.", "Crea un record per un altro ID."]),
  "articles/hacoo-bag-links": compactArticle(9, [
    ["Controlla colore e misura nell’opzione", "Un ID può raccogliere colori, misure, materiali e tracolle. Salva ID, opzione esatta, accessori, immagine e prezzo. Combina il nome colore con forma, manici, chiusura, base e tasche."],
    ["Conferma ID, immagine, misura e prezzo", "Seleziona la borsa prima di registrare prezzo e dimensioni. Una tote grande con prezzo di mini pouch non corrisponde. Salva regione e data e crea un nuovo record se cambia l’ID."],
    ["Confronta le proporzioni prima dell’hardware", "Controlla rapporto larghezza-altezza, profondità, base, caduta manici e pannelli, oltre alla simmetria di manici, cuciture, tasche e chiusura. Verifica che le foto siano della misura scelta."],
    ["Ispeziona cuciture, bordi e chiusure", "Esamina cuciture, finitura bordi, attacchi, zip o magnete, piedini e tracolla. Cerca punti irregolari, crepe e spazi nelle zone di tensione. La qualità visibile non prova autenticità."],
    ["Trasforma le misure in capacità", "Salva larghezza, altezza, profondità e lunghezza di manico o tracolla. Confronta con una borsa nota e con telefono, bottiglia o laptop. Se manca una misura critica, segnala sconosciuta."],
    ["Applica la regola finale", "Il link è verificato solo se ID, colore, misura, proporzioni, accessori, immagine e prezzo coincidono. Dopo la consegna fotografa pacco, borsa, etichette, tracolle e difetti. L’indice documenta il link, non decide il reso."],
  ], ["Verifica colore, misura e accessori.", "Confronta prima le proporzioni.", "Salva misure esatte.", "Usa più viste.", "Tratta un altro ID come nuovo record."]),
  "articles/hacoo-wrong-product-link": compactArticle(9, [
    ["Una pagina caricata può essere sbagliata", "Separa accesso e identità. Conserva URL originale, destinazione, vecchio ID, titolo, immagine, variante, prezzo e data prima di correggere. Una pagina ben fatta non prova la corrispondenza con la scheda."],
    ["Classifica la differenza", "Distingui altro ID, stesso ID con contenuto modificato, scheda padre corretta con variante predefinita errata, o differenza di regione o dispositivo. Cattura URL finale, ID visibile, immagine e opzione."],
    ["Esegui il controllo a cinque campi", "Confronta ID, titolo, prima immagine, variante e prezzo come uguale, diverso o sconosciuto. Stesso ID senza il vecchio colore significa modificato; altro ID significa destinazione errata; opzioni nascoste significano da rivedere."],
    ["Recupera variante o vecchia scheda", "Apri le opzioni e salva etichetta, pezzi e prezzo dopo la selezione. Se il prodotto è sparito, cerca ID, titolo e caratteristiche. Se restano più candidati, conserva il vecchio come non disponibile."],
    ["Non sovrascrivere mai in silenzio", "Un nuovo ID riceve URL, immagini, misure, recensioni, regione e data proprie. Collega le righe con una nota neutra senza trasferire valutazioni o consegna. La cronologia rende la correzione verificabile."],
    ["Riprova il percorso pubblico", "Correggi scheda, categoria, esempi e dati strutturati e controlla canonical, lingue e sitemap. Apri la scheda pubblica in sessione pulita e cambia la data solo quando scheda e destinazione coincidono."],
  ], ["Separa accesso e identità.", "Classifica prima di cercare.", "Controlla cinque campi.", "Non sovrascrivere un altro ID.", "Riprova il clic pubblico."]),
};

export const remainingPriorityArticles: Record<Locale, Record<RemainingPriorityArticleKey, Article>> = {
  en,
  de,
  fr,
  es,
  it,
};
