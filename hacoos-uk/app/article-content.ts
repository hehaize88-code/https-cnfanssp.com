import type { Locale } from "./site-data";
import type { ArticleKey } from "./localized-content";
import { readinessArticles, readinessKey } from "./hu-article-content";

export type ArticleSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type Article = {
  minutes: number;
  sections: ArticleSection[];
  takeaways: string[];
};

const en: Record<ArticleKey, Article> = {
  "articles/find-product-links": {
    minutes: 9,
    sections: [
      {
        heading: "Why finding a Hacoo product can feel harder than opening a normal shop",
        paragraphs: [
          "A useful Hacoo link guide has to begin with the platform that exists now, not with an old shopping-app description copied from another blog. Hacoo's current website and mobile-store descriptions present it as a content-sharing and discovery community where people publish interests, rate products and services, and connect with other users. That discovery model explains why a visitor may hear about an item in a social post or spreadsheet but fail to reproduce the same result with a simple brand-name search.",
          "The app is also large enough that small interface changes matter. Google Play showed more than ten million downloads and tens of thousands of ratings when this guide was checked on 28 August 2026. A link can circulate across countries, devices and app versions long after the original poster created it. The practical question is therefore not merely whether a URL opens. It is whether the destination still represents the same item, option and price that made the link useful in the first place.",
        ],
      },
      {
        heading: "Set the region before you judge the search results",
        paragraphs: [
          "Region is one of the first variables to check. Recent public reviews on both Google Play and Trustpilot repeatedly mention country settings, regional availability and different visible selections. Those reports are individual experiences, not an official promise that every catalog differs, but they are consistent with the basic reality of international platforms: inventory, delivery coverage and promotional visibility can be market-specific. If a link appears empty or a search returns nothing, confirm the device region, delivery country and app version before deciding that the product has disappeared.",
          "Do not use a VPN, a borrowed account or a false delivery address simply to force a catalog view. That can create a mismatch between what is shown and what can actually be delivered. A safer process is to set the real destination, update the app through the official store, close and reopen it, and then try the direct link again. Record the region with the product ID when you save a find. That one extra field makes later troubleshooting much more useful than a screenshot with no context.",
        ],
      },
      {
        heading: "Verify five fields, not just the URL",
        paragraphs: [
          "Every product link in this index is checked against five practical fields: the current title, the first image, the selected variant, the product ID and the source price. The product ID is the most durable reference because titles and marketing images can change. The image is still important because it catches obvious misdirection: a page that opens successfully but shows a different silhouette, colour or category is not a verified match. Price is a secondary signal. A small price change can be normal; a completely different range may indicate that the destination or default option has changed.",
          "Variants deserve their own check. One listing may contain several colours, sizes, bundles or versions, and the cheapest default option may not be the one shown in a shared card. Open the option selector and compare the displayed image and price after choosing the intended variant. If the card claims a particular style count, confirm that the current listing still offers those choices. Save a screenshot of the exact selection rather than the landing state of the page.",
        ],
        bullets: ["Current title", "First image", "Selected variant", "Product ID", "Current source price"],
      },
      {
        heading: "Why spreadsheets become stale even when they look maintained",
        paragraphs: [
          "A spreadsheet is a map, not inventory. Rows are easy to copy and hard to audit. Dates often show when an editor added a row, not when somebody last tested the final destination. Images may be cached in the sheet after the underlying listing changes. Shortened links can add another layer that hides where the click will end. None of these problems makes spreadsheets useless; it means a useful sheet needs a visible verification method and a checked date.",
          "The strongest spreadsheet entries include enough information to recover from change: a stable ID, a plain-language product description, the current first image, the source price, the category and a verification date. A weak row contains only an enthusiastic label and a button. When comparing two indexes, prefer the one that makes it easy to detect its own mistakes. Transparency about uncertainty is more valuable than claiming that every link is permanently valid.",
        ],
      },
      {
        heading: "Use item-level evidence before popularity signals",
        paragraphs: [
          "Hacoo's official app description highlights ratings and reviews as part of its trust model. That makes recent item-level feedback useful, especially when buyers attach photos or discuss measurements. But a high average is not a substitute for inspecting the exact variant. Reviews can cover different colours or production periods, and older comments may refer to a version that is no longer the default. Sort by recent where possible and look for repeated observations rather than one dramatic opinion.",
          "Platform-level ratings answer a different question. Google Play, the UK Apple App Store and Trustpilot provide context about the overall service, not proof about a particular hoodie or pair of shoes. On 28 August 2026, Google Play showed 3.6 with about 57,700 reviews, the UK App Store showed 4.7 from about 77,000 ratings, and Trustpilot showed 3.6 from 3,274 reviews. The different audiences, countries and moderation systems make the divergence more useful than a blended score: it is a warning not to compress thousands of experiences into a single promise.",
        ],
      },
      {
        heading: "Treat disappearing links as a normal maintenance problem",
        paragraphs: [
          "A destination can stop working because an item sold out, a creator removed content, a moderation decision changed visibility, a region no longer shows the listing, or the platform replaced the record. Hacoo's 2025 Trust Center report says the company removed more than 1,000 deceptive posts and links and banned more than 500 malicious accounts, using its own internal enforcement figures. That does not explain any specific missing product, but it confirms that content and links are actively moderated rather than permanent.",
          "When a link fails, do not repeatedly click unknown mirrors. Search the saved product ID in the current index, then search a concise generic description and category. Compare images carefully. If you find a likely replacement, treat it as a new record and verify all five fields again. Never transfer an old rating, review count or quality claim to a replacement listing merely because the photo looks similar.",
        ],
      },
      {
        heading: "Keep the link journey separate from payment and support",
        paragraphs: [
          "This site is an independent research index. It does not process orders, take payment or control an external seller's support decision. That separation should remain obvious at every step. A product card is useful for discovery, but the destination page and the platform's current checkout terms control the transaction. Check the final price, delivery address, payment summary and after-sales conditions where the order is actually placed.",
          "Hacoo's official materials contain multiple support pages, and some wording differs between the general shipping page and the detailed return help article. The detailed help page describes a general 15-day return window, exclusions, evidence requirements and no current exchange service. Follow the instructions attached to the actual order rather than assuming a blog summary overrides them. Keep screenshots of the selected option, payment summary and delivery estimate because they preserve the context a support agent may need.",
        ],
      },
      {
        heading: "A repeatable two-minute link check",
        paragraphs: [
          "A fast routine is better than a complicated one you will not use. First, confirm the real delivery country and open the link in the current app or destination page. Second, compare title and first image. Third, select the intended colour, size or bundle and note the resulting price. Fourth, save the product ID. Fifth, scan recent item reviews for photos, measurements and repeated defects. Finally, capture the exact option before leaving the page.",
          "This process cannot guarantee quality or delivery, but it eliminates several avoidable errors: opening the wrong product, pricing the cheapest unrelated variant, relying on an expired screenshot or forgetting which option was intended. That is the proper role of a Hacoo spreadsheet in 2026: reduce search friction, preserve identifiers and make verification easier without pretending to be the platform or the seller.",
        ],
      },
    ],
    takeaways: ["Set the real region before searching.", "Match title, image, variant, ID and price.", "Use recent item-level reviews as evidence, not a guarantee.", "Treat replacement listings as new records.", "Keep discovery separate from checkout and support."],
  },
  "articles/read-qc-photos": {
    minutes: 10,
    sections: [
      {
        heading: "What Hacoo reviews can—and cannot—tell you",
        paragraphs: [
          "Hacoo explicitly promotes ratings and reviews as a way for users to share experiences about products, brands and services. That makes review photos an important research layer, but not an inspection certificate. A photo may show a different size, colour, batch or lighting setup. A reviewer may be satisfied because the item met a low price expectation, while another buyer may compare it with a different reference. Quality control starts by defining what the evidence actually represents.",
          "The wider rating picture is mixed. On 28 August 2026, Google Play showed 3.6 and around 57,700 reviews, the UK App Store showed 4.7 from roughly 77,000 ratings, and Trustpilot showed 3.6 from 3,274 reviews. Trustpilot's distribution was polarised, with half of reviews at five stars and roughly a third at one star. These figures should not be averaged into a verdict. They come from different audiences, countries and moderation systems; use them to identify questions, then answer those questions with current item-level evidence.",
        ],
      },
      {
        heading: "Start with identity before examining tiny details",
        paragraphs: [
          "The most common QC mistake is spending time on stitching while looking at the wrong variant. Begin with identity: product type, colour, selected size, material description and included pieces. Compare the current listing image with the image that led you to the product. If a set contains both a top and bottom, confirm both are included in the chosen option. If a shoe page contains many styles, make sure the review photo belongs to the same style code or thumbnail.",
          "Next, check the product ID and review date. An older review can still be useful for construction clues, but it is weaker evidence for current availability. Look for several recent photos that agree on the same basic shape and finish. When the listing has only polished studio images and no recent customer evidence, lower your confidence instead of filling the gap with assumptions.",
        ],
      },
      {
        heading: "Read the silhouette before the seams",
        paragraphs: [
          "Large structural differences matter more than a single loose thread. For clothing, compare shoulder line, body width, sleeve position, hem shape and how the fabric hangs. For shoes, compare toe shape, side profile, heel height, sole curve and the symmetry of the pair. For bags, check overall proportions, handle placement, panel alignment and whether the base sits evenly. View the object straight on before using angled photos, which can hide distortion.",
          "Symmetry is a practical shortcut. Place left and right sides mentally against the centre line. Uneven collars, shifted pockets, twisted soles or handles at different heights are easier to notice this way. Some variation is normal in soft materials, so use multiple views. A defect that appears in only one compressed image may be lighting; a mismatch visible from several angles is stronger evidence.",
        ],
      },
      {
        heading: "Inspect construction in a fixed order",
        paragraphs: [
          "After identity and shape, move from large components to small details. Check main seams and joins, then edges and folded areas, then closures and hardware, and finally labels or printed marks. This order prevents an attractive logo or decorative detail from distracting you from a weak zipper, separated sole or badly aligned panel. Zoom only after you understand the full object.",
          "For stitching, look for consistent spacing, straight lines, secure endpoints and no skipped areas. For edge paint or coating, check thickness and cracks at bends. For hardware, compare finish, placement and function rather than colour alone because white balance can change metallic tones. For printed elements, inspect alignment and clean edges. Do not claim authenticity from photos; the defensible goal is to identify visible construction quality and listing consistency.",
        ],
      },
      {
        heading: "Use measurements to turn photos into evidence",
        paragraphs: [
          "A ruler photo answers questions that perspective cannot. Ask for or use images showing chest width, garment length, shoulder width, sleeve length, waist, rise, inseam or insole length as relevant. The ruler should begin at the correct edge and remain flat. A single diagonal measurement can exaggerate size. Compare the numbers with a similar item you already own, measured using the same method.",
          "Measurements also reveal proportion issues. Two sweatshirts can share the same chest width but differ noticeably in body length and shoulder drop. Two shoes with the same labelled size can have different insole lengths or toe room. Record centimetres rather than relying on S, M, L or a familiar regional shoe number. The next article in this guide provides a complete sizing workflow.",
        ],
      },
      {
        heading: "Photograph problems the way the official return process expects",
        paragraphs: [
          "Hacoo's detailed return help article lists different evidence for different problems. Size issues may require the size label and product-bag barcode. Quality issues require a photo of the defect. Broken-item claims may need the outer package, product bag and damaged area. Wrong-product and missing-item cases have their own evidence lists. This is a useful QC lesson even before any claim exists: photograph context, not just a close-up with no way to identify the item.",
          "Keep the outer parcel, shipping label, inner bag, barcode and tags until inspection is complete. Take a full-item photo, then medium-distance context, then a clear close-up. Avoid filters and heavy markup on the only copy. If a parcel is damaged, photograph it before discarding or opening further when safe. The official page also says returned items must remain in suitable condition and that used, washed, modified or label-less products may be rejected.",
        ],
      },
      {
        heading: "Balance customer reviews instead of cherry-picking them",
        paragraphs: [
          "A credible review article should not collect only praise or only complaints. Recent Trustpilot entries include customers who report repeat orders, acceptable quality, useful tracking and responsive support. The same profile also includes reports of cancellations, inconsistent product quality and refund frustration. Google Play reviews similarly include both a large positive average and recent complaints about region settings, catalog visibility, tracking and service responses.",
          "Read patterns, not personalities. Count how many recent reviews mention the same issue, whether the company response addresses it, and whether the review concerns the same country and product category. Give more weight to specific observations with dates, photos or order-stage detail. Give less weight to one-line superlatives. Most importantly, do not present a third-party comment as verified fact about every order.",
          "Trustpilot also warns that the company has not invited customers to review recently and that the visible sample may not represent every customer. Keep that limitation beside any percentage you quote. A defensible review study records the sample date, platform, country, number of reviews examined and recurring themes. It separates delivery, cancellation, product quality, tracking and support because one order can be positive in one stage and negative in another. This method produces useful questions without pretending that public reviews are a controlled experiment.",
        ],
      },
      {
        heading: "Make a decision with an explicit defect budget",
        paragraphs: [
          "Before deciding, divide findings into three groups: identity failures, structural defects and cosmetic variation. An identity failure means the evidence does not match the intended product or option; stop and verify the link. A structural defect affects function or durability, such as a separating sole, broken closure or badly twisted construction. Cosmetic variation includes small stitch or colour differences that may be acceptable depending on price and expectations.",
          "Write down what you can accept before looking at the final price. This reduces the temptation to excuse a serious problem because the item seems cheap. A checked link and good photos improve the decision, but they cannot guarantee the unit that arrives. The best QC guide is therefore transparent: it helps you ask better questions, keep useful evidence and recognise uncertainty rather than replacing it with a confident score.",
        ],
      },
    ],
    takeaways: ["Confirm identity and variant before details.", "Judge shape before logos or tiny seams.", "Use ruler photos and repeatable measurement points.", "Keep packaging, labels and context photos.", "Balance repeated review themes rather than cherry-picking."],
  },
  "articles/size-before-you-buy": {
    minutes: 9,
    sections: [
      {
        heading: "Why the label is the least reliable part of a size decision",
        paragraphs: [
          "A familiar size letter feels convenient because it avoids measuring, but it does not travel well between brands, product categories or intended fits. One seller's medium can be another seller's small, and an oversized cut can be wider while still using the same label. The useful comparison is not the letter printed on the tag. It is the set of garment or shoe measurements attached to the exact selected variant.",
          "Hacoo's return guidance confirms why this matters. For a size issue, the official help article may ask for the size label, barcode on the product bag and a description of where the item is too large or small. That evidence is easier to provide when you saved the chart and measured before buying. It also helps distinguish a wrong-labelled item from a correct label that simply does not fit as expected.",
        ],
      },
      {
        heading: "Measure an item you own, not your body alone",
        paragraphs: [
          "Body measurements are useful, but the most practical reference is usually a similar item that already fits the way you want. Lay it flat without stretching it and use a flexible tape. Measure twice. Record the method as well as the number—for example, chest measured armpit to armpit, or length measured from the highest shoulder point. A number without a method is difficult to reproduce.",
          "Choose a reference with similar material and purpose. A fitted cotton T-shirt is not a good comparison for a padded jacket. A running shoe may need different toe room from a fashion trainer. If you want an oversized result, use an oversized garment you like rather than adding an arbitrary number of centimetres. The reference item turns an abstract chart into a concrete fit target.",
        ],
      },
      {
        heading: "Tops and outerwear: compare the complete shape",
        paragraphs: [
          "For T-shirts, sweatshirts and jackets, start with half-chest width, body length, shoulder width and sleeve length. Measure across the garment, not around it, unless the chart clearly states circumference. Shoulder construction matters: a dropped shoulder changes where sleeve length begins, so compare total span as well as individual numbers. Jackets need room for the layers you expect to wear beneath them.",
          "Length changes the visual fit even when width is correct. Compare front and back if the hem is curved or dropped. For hoodies, note hood size and ribbed hem because both affect how the body sits. For lined or padded garments, the internal space can feel smaller than the external measurement suggests. Allow a sensible ease margin rather than selecting a chart value exactly equal to your body.",
        ],
        bullets: ["Half-chest", "Body length", "Shoulder width", "Sleeve length", "Total span for dropped shoulders"],
      },
      {
        heading: "Trousers and shorts: waist alone is not enough",
        paragraphs: [
          "A trouser size decision should include waist, hip, front rise, back rise, thigh, inseam and leg opening where available. Elastic waists need both relaxed and stretched measurements. The rise determines where the waistband sits and changes the usable length. Two pairs with the same waist and inseam can fit very differently if the hip or thigh is narrow.",
          "Measure a reference pair flat and follow the same line shown in the seller's chart. Waist measured straight across differs from a waistband measured along its curve. Inseam begins at the crotch seam, while outseam begins at the waistband. For shorts, rise and leg opening often matter more than a small length difference. If a chart omits the dimension that usually causes you problems, treat that as missing evidence rather than guessing.",
        ],
      },
      {
        heading: "Shoes: insole length beats a regional conversion table",
        paragraphs: [
          "Regional shoe numbers are approximate conversions, and the internal shape of a shoe affects fit as much as nominal length. Measure the removable insole of a comfortable pair from heel to longest toe point. If the insole is fixed, trace your foot while standing and compare with an actual internal-length guide, allowing appropriate space. Do not add the same allowance for every shoe type; a soft trainer and a rigid dress shoe behave differently.",
          "Width and toe-box shape are critical. A shoe can be long enough but still uncomfortable across the forefoot. Look for review comments from people who mention foot width and the same selected style. If a listing contains nine or more designs, do not assume every design uses an identical last. Confirm that any size photo or review is attached to the intended variation.",
        ],
      },
      {
        heading: "Fabric, construction and intended fit change the numbers",
        paragraphs: [
          "Stretch fabric can accommodate a smaller flat measurement, while a heavy non-stretch weave requires more ease. Ribbed hems draw a garment inward. Thick lining reduces internal room. Washing can change cotton dimensions, and product care instructions may matter as much as the initial chart. Read the material description and recent reviews for comments about shrinkage, stiffness or unusual stretch.",
          "The intended silhouette also matters. Oversized, relaxed, regular and slim are not precise standards, but they tell you which reference garment to choose. Do not automatically size down an oversized item without checking length and sleeve proportions. Likewise, sizing up a slim garment may solve width but create shoulders or sleeves that are too long. Use the full measurement set rather than chasing one number.",
        ],
      },
      {
        heading: "Build a screenshot record before checkout",
        paragraphs: [
          "Save four things together: the product ID, selected variant, size chart and your reference measurements. Include the date because listings change. If the page uses a different chart for each colour or style, capture the one shown after making the selection. Keep the final price and option name in the same record. This takes less than a minute and prevents arguments with your own memory later.",
          "After delivery, measure before removing labels or washing if the fit seems wrong. Photograph the full item, size label, product-bag barcode and the relevant measurement. Hacoo's detailed help article specifically lists label and barcode evidence for size issues. Follow the current instructions in the order's support flow, because policies and evidence requirements can change after this guide's review date.",
        ],
      },
      {
        heading: "A final size decision rule",
        paragraphs: [
          "Choose the variant whose complete measurement profile is closest to a reference item with the fit you want. If you fall between two options, decide which dimension is hardest to alter or tolerate. Length and shoulder placement may matter more than a small width difference for a jacket; toe room may matter more than nominal size for shoes. If the chart is incomplete and reviews do not supply the missing evidence, delay the purchase rather than treating uncertainty as a bargain.",
          "This method cannot eliminate manufacturing variation, but it is far more reliable than choosing your usual letter size. It also creates a clear record if the delivered item differs from the published measurements. Good sizing guidance is not a universal conversion table. It is a repeatable comparison between a specific listing, a specific variant and an item you already know fits.",
          "If the delivered measurement differs materially from the saved chart, document the comparison before wearing or washing the item. Put the whole garment, label and tape position in separate clear photos, then retain the product bag and barcode. The official help flow distinguishes a size complaint from a wrong-item or quality complaint, so describe the problem precisely instead of choosing the most dramatic category. A careful record cannot guarantee approval, but it gives support the evidence its published guidance asks for and prevents a vague fit concern from becoming impossible to verify.",
        ],
      },
    ],
    takeaways: ["Use a well-fitting reference item.", "Record measurement method as well as numbers.", "Compare the complete shape, not one dimension.", "Use insole length and width evidence for shoes.", "Save the variant, chart, ID and date before checkout."],
  },
};

function translatedArticles(locale: Exclude<Locale, "en">): Record<ArticleKey, Article> {
  const data: Record<Exclude<Locale, "en">, Record<ArticleKey, Article>> = {
    de: {
      "articles/find-product-links": { minutes: 9, sections: [
        { heading: "Warum Hacoo-Produktlinks schwer zu finden sein können", paragraphs: ["Hacoos aktuelle Website und die Beschreibungen in den App-Stores stellen den Dienst als Community zum Teilen und Entdecken von Inhalten dar. Produkte werden deshalb häufig über Beiträge, Empfehlungen oder gespeicherte Links entdeckt. Eine normale Markensuche muss nicht dieselben Ergebnisse zeigen wie der Link eines anderen Nutzers.", "Bei der Prüfung am 28. August 2026 zeigte Google Play mehr als zehn Millionen Downloads. Links wandern damit durch Länder, Geräte und App-Versionen. Entscheidend ist nicht nur, ob eine URL öffnet, sondern ob Titel, Bild, Variante, Produkt-ID und Preis noch zum ursprünglichen Fund passen."] },
        { heading: "Zuerst Region und App-Version prüfen", paragraphs: ["Öffentliche Bewertungen erwähnen wiederholt Ländereinstellungen und regional unterschiedliche Sichtbarkeit. Einzelne Berichte sind kein Beweis für jedes Konto, zeigen aber eine sinnvolle Prüfreihenfolge: echtes Zielland einstellen, App aktualisieren, neu öffnen und den Direktlink erneut testen.", "Keine falsche Adresse oder fremdes Konto verwenden, nur um einen Katalog zu erzwingen. Speichere Region und Produkt-ID gemeinsam. So lässt sich später unterscheiden, ob ein Link entfernt wurde oder lediglich in einem anderen Markt nicht sichtbar ist."] },
        { heading: "Fünf Felder statt nur die URL abgleichen", paragraphs: ["Vergleiche aktuellen Titel, erstes Bild, gewählte Variante, Produkt-ID und Quellpreis. Die ID ist meist stabiler als Werbetext; das Bild deckt klare Fehlleitungen auf. Ein kleiner Preiswechsel ist normal, eine völlig andere Preisspanne kann auf eine neue Standardoption hindeuten.", "Öffne jede Variantenwahl. Der billigste Standardwert muss nicht dem Foto der geteilten Karte entsprechen. Speichere einen Screenshot nach der Auswahl von Farbe, Größe oder Set."] , bullets: ["Titel", "Erstes Bild", "Variante", "Produkt-ID", "Quellpreis"] },
        { heading: "Warum Tabellen altern", paragraphs: ["Eine Tabelle ist eine Karte, kein Lagerbestand. Zeilen werden leicht kopiert, Bilder bleiben zwischengespeichert und ein Datum kann das Hinzufügen statt die letzte Prüfung bezeichnen. Gute Einträge zeigen deshalb ID, Beschreibung, aktuelles Bild, Preis, Kategorie und Prüfdatum.", "Bevorzuge einen Index, der Fehler sichtbar macht. Die ehrliche Angabe eines Prüfdatums ist wertvoller als das Versprechen, ein Link bleibe dauerhaft gültig."] },
        { heading: "Bewertungen richtig einordnen", paragraphs: ["Hacoo nennt Bewertungen ausdrücklich als Teil seines Vertrauensmodells. Aktuelle artikelbezogene Fotos und Maße helfen, doch ältere Kommentare können andere Varianten oder Produktionszeiten betreffen.", "Google Play zeigte 3,6 bei rund 57.700 Bewertungen; der britische App Store 4,7 bei rund 77.000 und Trustpilot 3,6 bei 3.274 Bewertungen. Die unterschiedlichen Zielgruppen geben Kontext, aber keinen Beweis für einen einzelnen Artikel."] },
        { heading: "Verschwundene Links sind Wartungsfälle", paragraphs: ["Ein Link kann wegen Ausverkauf, regionaler Sichtbarkeit, Entfernung durch Ersteller oder Moderation verschwinden. Hacoos Trust Center berichtet für 2025 intern von mehr als 1.000 entfernten irreführenden Beiträgen und Links sowie über 500 gesperrten bösartigen Konten.", "Suche zuerst die gespeicherte ID, danach eine neutrale Beschreibung und Kategorie. Ein Ersatz ist ein neuer Datensatz: Alle fünf Felder müssen erneut geprüft werden; alte Bewertungen dürfen nicht übertragen werden."] },
        { heading: "Entdeckung von Zahlung und Support trennen", paragraphs: ["Diese Seite ist ein unabhängiger Rechercheindex und verarbeitet weder Bestellung noch Zahlung. Die Zielseite und die dort aktuellen Bedingungen bestimmen die Transaktion.", "Die ausführliche Hacoo-Hilfe nennt eine allgemeine Rückgabefrist von 15 Tagen, Ausnahmen, Nachweispflichten und derzeit keinen Umtausch. Maßgeblich bleiben die Hinweise im konkreten Auftrag. Speichere Auswahl, Zahlungsübersicht und Lieferprognose."] },
        { heading: "Der Zwei-Minuten-Check", paragraphs: ["Zielland bestätigen, Link öffnen, Titel und Bild vergleichen, Variante auswählen, Preis und ID sichern, neue Artikelbewertungen prüfen und die exakte Auswahl fotografieren.", "Das garantiert keine Qualität, verhindert aber falsche Produkte, unpassende Standardvarianten und überholte Screenshots. Genau dafür sollte eine Hacoo-Tabelle 2026 dienen."] },
      ], takeaways: ["Echte Region vor der Suche setzen.", "Titel, Bild, Variante, ID und Preis abgleichen.", "Aktuelle Artikelbewertungen als Hinweis nutzen.", "Ersatzlinks vollständig neu prüfen.", "Index und Checkout klar trennen."] },
      "articles/read-qc-photos": { minutes: 10, sections: [
        { heading: "Was Hacoo-Bewertungen aussagen können", paragraphs: ["Hacoo bewirbt Bewertungen als Möglichkeit, Erfahrungen zu Produkten und Diensten zu teilen. Fotos sind wertvoll, aber kein Prüfzeugnis: Größe, Farbe, Charge und Licht können abweichen.", "Google Play zeigte 3,6 bei rund 57.700 Bewertungen, der britische App Store 4,7 bei rund 77.000 und Trustpilot 3,6 bei 3.274. Unterschiedliche Zielgruppen und Regeln erklären, warum daraus kein gemeinsames Qualitätsurteil entstehen sollte."] },
        { heading: "Identität vor Details", paragraphs: ["Bestätige Produkt, Farbe, Größe, Material und enthaltene Teile, bevor du Nähte vergrößerst. Prüfe, ob das Bewertungsfoto wirklich zur gewählten Variante gehört.", "Nutze mehrere aktuelle Fotos. Fehlen Nutzerbilder vollständig, reduziere das Vertrauen, statt die Lücke durch Vermutungen zu füllen."] },
        { heading: "Silhouette vor kleinen Nähten", paragraphs: ["Bei Kleidung zählen Schulterlinie, Breite, Länge und Fall; bei Schuhen Zehenform, Seitenprofil, Ferse und Sohlenkurve; bei Taschen Proportionen, Griffe und Paneele.", "Symmetrie ist ein schneller Filter. Prüfe beide Seiten zur gedachten Mittellinie und bestätige Auffälligkeiten in mehreren Ansichten."] },
        { heading: "Konstruktion in fester Reihenfolge", paragraphs: ["Prüfe Hauptnähte, Kanten, Verschlüsse, Beschläge und zuletzt Etiketten oder Druck. So lenkt ein attraktives Detail nicht von einem schwachen Reißverschluss oder einer gelösten Sohle ab.", "Achte auf gleichmäßige Stichabstände, sichere Enden, saubere Kanten und funktionierende Hardware. Aus Fotos sollte keine Echtheitsbehauptung abgeleitet werden."] },
        { heading: "Maße machen Fotos belastbar", paragraphs: ["Linealbilder für Brust, Länge, Schulter, Ärmel, Bund, Schrittlänge oder Innensohle sind zuverlässiger als Perspektive. Das Maßband muss flach und am richtigen Punkt liegen.", "Vergleiche mit einem passenden eigenen Artikel. Buchstabengrößen allein reichen nicht, besonders wenn Schnitt oder Material abweichen."] },
        { heading: "Beweise passend zum Problem sichern", paragraphs: ["Hacoos Rückgabehilfe verlangt je nach Fall unterschiedliche Belege: Größenetikett und Beutelbarcode, Defektfoto, Außenpaket, beschädigte Stelle oder Versandetikett. Fotografiere deshalb Kontext und Detail.", "Außenverpackung, Etiketten und Beutel bis zum Abschluss der Prüfung behalten. Ungewaschene und unveränderte Ware erleichtert eine mögliche Prüfung."] },
        { heading: "Bewertungen ausbalancieren", paragraphs: ["Trustpilot enthält Lob für wiederholte Bestellungen, Tracking und Support, aber auch Berichte über Stornierungen, Qualitätsschwankungen und Erstattungen. Google Play zeigt ebenfalls positive Gesamtwerte und aktuelle Beschwerden.", "Suche wiederkehrende, konkrete Muster aus demselben Land und derselben Kategorie. Einzeilige Superlative wiegen weniger als datierte Beobachtungen mit Fotos."] },
        { heading: "Mit einem Defektbudget entscheiden", paragraphs: ["Trenne Identitätsfehler, strukturelle Defekte und kosmetische Abweichung. Bei falscher Variante zuerst den Link klären; funktionale Schäden wie gelöste Sohlen wiegen schwerer als kleine Stichunterschiede.", "Lege vor dem Preis fest, was akzeptabel ist. QC reduziert Unsicherheit, ersetzt sie aber nicht durch eine Garantie."] },
      ], takeaways: ["Identität vor Details.", "Form vor Logos prüfen.", "Maße reproduzierbar fotografieren.", "Verpackung und Etiketten behalten.", "Bewertungsmuster statt Einzelfälle lesen."] },
      "articles/size-before-you-buy": { minutes: 9, sections: [
        { heading: "Warum das Größenetikett wenig genügt", paragraphs: ["Buchstabengrößen ändern sich zwischen Marken, Kategorien und Schnitten. Entscheidend sind die Maße der exakt ausgewählten Variante.", "Hacoos Hilfe kann bei Größenproblemen Etikett, Beutelbarcode und eine Beschreibung der zu großen oder kleinen Stelle verlangen. Ein gespeicherter Chart erleichtert den Vergleich."] },
        { heading: "Ein passendes eigenes Kleidungsstück messen", paragraphs: ["Lege einen ähnlichen Artikel flach, ohne ihn zu dehnen, und miss zweimal. Notiere Methode und Zahl, etwa Achsel zu Achsel oder Schulterpunkt bis Saum.", "Wähle ähnliches Material und denselben Verwendungszweck. Ein dünnes Shirt ist keine gute Referenz für eine gefütterte Jacke."] },
        { heading: "Oberteile vollständig vergleichen", paragraphs: ["Bei Shirts, Hoodies und Jacken Brustbreite, Länge, Schulter und Ärmel prüfen. Bei überschnittener Schulter zusätzlich die Gesamtspanne vergleichen.", "Futter und Polster reduzieren Innenraum. Bei Jacken Platz für geplante Schichten einrechnen."], bullets: ["Halbe Brustweite", "Länge", "Schulter", "Ärmel", "Gesamtspanne"] },
        { heading: "Hosen brauchen mehr als den Bund", paragraphs: ["Bund, Hüfte, vordere und hintere Leibhöhe, Oberschenkel, Innenbein und Öffnung vergleichen. Bei Elastik entspanntes und gedehntes Maß beachten.", "Innenbein und Außenlänge nicht verwechseln. Fehlt das für dich kritische Maß, ist das fehlende Evidenz und kein Grund zu raten."] },
        { heading: "Bei Schuhen zählt die Innensohle", paragraphs: ["Miss die herausnehmbare Innensohle eines bequemen Paars von Ferse bis längstem Zehenpunkt. Regionale Umrechnungstabellen bleiben nur Näherungen.", "Breite und Zehenbox sind ebenso wichtig. Bei Listings mit vielen Designs prüfen, ob Größenfoto und Bewertung zur gewählten Ausführung gehören."] },
        { heading: "Material und Schnitt verändern Zahlen", paragraphs: ["Stretch, Futter, Rippenbündchen und schwere Gewebe beeinflussen das Tragegefühl. Bewertungen zu Schrumpfung, Steifigkeit oder Dehnung helfen.", "Nicht automatisch kleiner bei Oversize oder größer bei Slim wählen. Der komplette Maßsatz entscheidet."] },
        { heading: "Vor dem Checkout dokumentieren", paragraphs: ["Produkt-ID, Variante, Größentabelle, Referenzmaße und Datum gemeinsam speichern. Bei variantenabhängigen Charts erst auswählen, dann fotografieren.", "Bei falscher Passform vor Waschen und Etikettentfernung messen und vollständigen Artikel, Etikett, Barcode sowie relevante Maße fotografieren."] },
        { heading: "Die endgültige Größenregel", paragraphs: ["Wähle die Variante, deren Gesamtprofil deinem passenden Referenzartikel am nächsten kommt. Zwischen zwei Größen entscheidet das am schwersten tolerierbare Maß.", "Fehlen Chart und belastbare Bewertungen, verschiebe den Kauf. Gute Größenberatung ist ein reproduzierbarer Vergleich, keine universelle Umrechnungstabelle."] },
      ], takeaways: ["Passenden Referenzartikel nutzen.", "Methode und Maße speichern.", "Komplette Form vergleichen.", "Bei Schuhen Innensohle und Breite prüfen.", "Variante, Chart, ID und Datum sichern."] },
    },
    fr: {
      "articles/find-product-links": { minutes: 9, sections: [
        { heading: "Pourquoi les liens produit Hacoo sont parfois difficiles à retrouver", paragraphs: ["Le site actuel et les boutiques d’applications présentent Hacoo comme une communauté de partage et de découverte. Les articles circulent donc souvent par publications, recommandations et liens enregistrés; une recherche de marque classique ne reproduit pas forcément le résultat d’un autre utilisateur.", "Google Play affichait plus de dix millions de téléchargements le 28 août 2026. Un lien traverse pays, appareils et versions. Il faut vérifier non seulement qu’il s’ouvre, mais aussi que titre, image, variante, identifiant et prix correspondent toujours."] },
        { heading: "Vérifier d’abord la région", paragraphs: ["Des avis publics évoquent régulièrement les réglages de pays et une visibilité régionale différente. Ce ne sont pas des preuves universelles, mais ils suggèrent une méthode: choisir le vrai pays de livraison, mettre l’application à jour, la relancer et retester le lien.", "N’utilisez pas de fausse adresse pour forcer un catalogue. Enregistrez la région avec l’identifiant produit afin de distinguer suppression et indisponibilité locale."] },
        { heading: "Contrôler cinq champs", paragraphs: ["Comparez titre actuel, première image, variante sélectionnée, identifiant et prix source. L’identifiant résiste mieux aux changements de texte; l’image révèle une redirection évidente.", "Ouvrez toutes les options. Le prix par défaut peut correspondre à une autre couleur ou un autre lot. Capturez l’écran après la sélection exacte."], bullets: ["Titre", "Première image", "Variante", "Identifiant", "Prix source"] },
        { heading: "Pourquoi un tableur vieillit", paragraphs: ["Un tableur est une carte, pas un stock. Les lignes se copient, les images restent en cache et la date peut être celle de l’ajout plutôt que du dernier contrôle.", "Une fiche solide conserve identifiant, description, image, prix, catégorie et date de vérification. La transparence vaut mieux qu’une promesse de permanence."] },
        { heading: "Utiliser correctement les avis", paragraphs: ["Hacoo met en avant notes et avis dans son modèle de confiance. Les photos récentes et mesures sont utiles, mais peuvent concerner une autre variante.", "Google Play affichait 3,6 avec environ 57 700 avis, l’App Store britannique 4,7 avec environ 77 000 notes et Trustpilot 3,6 avec 3 274 avis. Ces publics différents donnent du contexte, pas une preuve sur un article précis."] },
        { heading: "Traiter les liens disparus comme un problème de maintenance", paragraphs: ["Un lien peut disparaître après rupture, changement régional, suppression ou modération. Le Trust Center Hacoo indique qu’en 2025 plus de 1 000 publications/liens trompeurs ont été retirés et plus de 500 comptes malveillants bannis, selon ses données internes.", "Cherchez l’identifiant, puis une description neutre. Toute fiche de remplacement doit être contrôlée comme une nouvelle entrée; ne transférez pas les anciens avis."] },
        { heading: "Séparer découverte, paiement et assistance", paragraphs: ["Ce guide indépendant ne traite ni commande ni paiement. Les conditions de la page de destination régissent la transaction.", "L’aide détaillée Hacoo décrit un délai général de retour de 15 jours, des exclusions, des preuves requises et l’absence actuelle d’échange. Conservez option, récapitulatif de paiement et délai affiché."] },
        { heading: "Le contrôle en deux minutes", paragraphs: ["Confirmez le pays, ouvrez le lien, comparez titre et image, choisissez la variante, notez prix et identifiant, lisez les avis récents puis capturez la sélection.", "Cette routine ne garantit pas la qualité, mais évite mauvais produit, variante par défaut trompeuse et capture périmée."] },
      ], takeaways: ["Définir la vraie région.", "Comparer titre, image, variante, ID et prix.", "Utiliser les avis récents comme indices.", "Revérifier toute fiche de remplacement.", "Séparer index et paiement."] },
      "articles/read-qc-photos": { minutes: 10, sections: [
        { heading: "Ce que les avis Hacoo peuvent réellement dire", paragraphs: ["Hacoo présente les avis comme un moyen de partager des expériences. Les photos sont précieuses, mais ne constituent pas un certificat: taille, couleur, série et lumière peuvent différer.", "Google Play affichait 3,6 pour environ 57 700 avis, l’App Store britannique 4,7 pour environ 77 000 notes et Trustpilot 3,6 pour 3 274. Ces publics différents ne doivent pas être fusionnés en verdict unique."] },
        { heading: "L’identité avant les détails", paragraphs: ["Confirmez article, couleur, taille, matière et pièces incluses avant de zoomer sur les coutures. Vérifiez que la photo d’avis appartient à la variante choisie.", "Recherchez plusieurs images récentes. Sans preuve utilisateur, réduisez le niveau de confiance au lieu d’inventer."] },
        { heading: "La silhouette avant les petites coutures", paragraphs: ["Pour les vêtements, observez épaules, largeur, longueur et tombé; pour les chaussures, bout, profil, talon et semelle; pour les sacs, proportions, poignées et panneaux.", "La symétrie constitue un filtre rapide. Confirmez toute anomalie sur plusieurs angles."] },
        { heading: "Inspecter dans un ordre fixe", paragraphs: ["Contrôlez coutures principales, bords, fermetures, pièces métalliques puis étiquettes et impressions. Un joli détail ne doit pas masquer une semelle décollée.", "Vérifiez régularité, finitions et fonctionnement. Une photo ne permet pas d’affirmer l’authenticité; elle permet seulement d’évaluer la cohérence visible."] },
        { heading: "Transformer les photos en mesures", paragraphs: ["Les photos avec règle pour poitrine, longueur, épaule, manche, taille, entrejambe ou semelle intérieure sont plus fiables que la perspective.", "Comparez avec un article personnel mesuré de la même manière. Les lettres S, M ou L ne suffisent pas."] },
        { heading: "Conserver les preuves adaptées", paragraphs: ["L’aide retour Hacoo demande selon le cas étiquette de taille, code-barres du sachet, photo du défaut, colis extérieur ou étiquette d’envoi. Photographiez le contexte puis le détail.", "Gardez emballage et étiquettes. Un article non lavé et non modifié facilite toute demande éventuelle."] },
        { heading: "Équilibrer les témoignages", paragraphs: ["Trustpilot contient des éloges sur commandes répétées et suivi, mais aussi des critiques sur annulations, qualité et remboursements. Google Play présente également moyenne positive et plaintes récentes.", "Cherchez des motifs précis et répétés dans le même pays et la même catégorie; donnez moins de poids aux superlatifs sans détail."] },
        { heading: "Décider avec un budget de défauts", paragraphs: ["Séparez erreur d’identité, défaut structurel et variation cosmétique. Une mauvaise variante exige de revoir le lien; une fermeture cassée compte plus qu’un petit écart de couture.", "Définissez l’acceptable avant de regarder le prix. Le QC réduit l’incertitude mais ne garantit pas l’exemplaire reçu."] },
      ], takeaways: ["Identité avant détails.", "Forme avant logos.", "Mesures reproductibles.", "Conserver emballage et étiquettes.", "Lire les tendances plutôt qu’un seul avis."] },
      "articles/size-before-you-buy": { minutes: 9, sections: [
        { heading: "Pourquoi l’étiquette de taille ne suffit pas", paragraphs: ["Les lettres varient selon marques, catégories et coupes. Les mesures de la variante exacte sont la vraie base.", "Pour un problème de taille, l’aide Hacoo peut demander étiquette, code-barres du sachet et description de la zone trop grande ou trop petite."] },
        { heading: "Mesurer un article qui vous va", paragraphs: ["Posez à plat un article comparable, sans l’étirer, et mesurez deux fois. Notez la méthode avec le chiffre.", "Choisissez matière et usage similaires: un T-shirt fin ne sert pas de référence à une veste doublée."] },
        { heading: "Comparer tout le haut", paragraphs: ["Pour T-shirts, sweats et vestes: demi-poitrine, longueur, épaules et manches. Avec épaules tombantes, comparez aussi l’envergure totale.", "La doublure réduit l’espace intérieur; prévoyez les couches portées sous une veste."], bullets: ["Demi-poitrine", "Longueur", "Épaules", "Manches", "Envergure"] },
        { heading: "Un pantalon ne se résume pas à la taille", paragraphs: ["Comparez taille, hanches, fourche avant/arrière, cuisse, entrejambe et ouverture. Pour un élastique, notez repos et extension.", "Ne confondez pas entrejambe et longueur extérieure. Une mesure manquante reste une incertitude."] },
        { heading: "Pour les chaussures, mesurer la semelle intérieure", paragraphs: ["Mesurez la semelle amovible d’une paire confortable du talon au point le plus long. Les conversions régionales restent approximatives.", "Largeur et forme du bout comptent autant. Vérifiez que l’avis concerne le style choisi."] },
        { heading: "Matière et coupe changent les chiffres", paragraphs: ["Élasticité, doublure, bords-côtes et tissus lourds modifient le volume utile. Lisez les avis sur rétrécissement et rigidité.", "Ne réduisez pas automatiquement une coupe oversize; comparez l’ensemble des mesures."] },
        { heading: "Créer un dossier avant paiement", paragraphs: ["Enregistrez identifiant, variante, tableau, mesures de référence et date. Capturez le tableau après avoir choisi l’option.", "En cas de problème, mesurez avant lavage et photographiez article, étiquette, code-barres et mesure concernée."] },
        { heading: "La règle finale", paragraphs: ["Choisissez le profil complet le plus proche d’un article de référence. Entre deux tailles, privilégiez la dimension la moins tolérable.", "Si le tableau est incomplet et les avis insuffisants, attendez. Une bonne méthode est une comparaison reproductible, pas une conversion universelle."] },
      ], takeaways: ["Utiliser un article de référence.", "Noter méthode et chiffres.", "Comparer la forme complète.", "Mesurer longueur et largeur des chaussures.", "Sauvegarder variante, tableau, ID et date."] },
    },
    es: {
      "articles/find-product-links": { minutes: 9, sections: [
        { heading: "Por qué cuesta encontrar algunos enlaces de Hacoo", paragraphs: ["La web y las tiendas de aplicaciones presentan Hacoo como comunidad para compartir y descubrir contenido. Muchos artículos se encuentran mediante publicaciones, recomendaciones o enlaces guardados; una búsqueda de marca no siempre reproduce lo que vio otra persona.", "Google Play mostraba más de diez millones de descargas el 28 de agosto de 2026. Un enlace circula entre países, dispositivos y versiones. Hay que comprobar que título, imagen, variante, ID y precio sigan coincidiendo."] },
        { heading: "Revisar primero la región", paragraphs: ["Las reseñas públicas mencionan ajustes de país y visibilidad regional. No prueban que todos los catálogos sean distintos, pero sugieren un orden útil: destino real, aplicación actualizada, reinicio y nuevo intento.", "No uses direcciones falsas para forzar un catálogo. Guarda región e ID juntos para distinguir eliminación de falta de disponibilidad local."] },
        { heading: "Comprobar cinco campos", paragraphs: ["Compara título actual, primera imagen, variante, ID y precio original. El ID resiste mejor los cambios de texto; la imagen detecta destinos equivocados.", "Abre las opciones. El precio más bajo puede pertenecer a otro color o lote. Guarda una captura después de seleccionar exactamente."], bullets: ["Título", "Primera imagen", "Variante", "ID", "Precio original"] },
        { heading: "Por qué envejecen las hojas", paragraphs: ["Una hoja es un mapa, no inventario. Las filas se copian, las imágenes quedan almacenadas y la fecha puede ser la de alta, no la última revisión.", "Una entrada sólida conserva ID, descripción, imagen, precio, categoría y fecha. La transparencia es más valiosa que prometer vigencia permanente."] },
        { heading: "Interpretar las reseñas", paragraphs: ["Hacoo destaca notas y reseñas como parte de su modelo de confianza. Fotos y medidas recientes ayudan, pero pueden corresponder a otra variante.", "Google Play mostraba 3,6 con unas 57.700 reseñas, la App Store británica 4,7 con unas 77.000 valoraciones y Trustpilot 3,6 con 3.274. Son contextos distintos, no una prueba sobre un producto concreto."] },
        { heading: "Tratar los enlaces caídos como mantenimiento", paragraphs: ["Un enlace puede desaparecer por agotamiento, región, retirada del creador o moderación. El Trust Center de Hacoo afirma que en 2025 retiró más de 1.000 publicaciones/enlaces engañosos y bloqueó más de 500 cuentas maliciosas, según datos internos.", "Busca primero el ID y después una descripción neutra. Cualquier sustituto es una ficha nueva y debe revisarse desde cero."] },
        { heading: "Separar descubrimiento, pago y soporte", paragraphs: ["Este índice independiente no procesa pedidos ni pagos. La ficha de destino y sus condiciones actuales controlan la transacción.", "La ayuda detallada de Hacoo describe un plazo general de devolución de 15 días, exclusiones, pruebas y ausencia actual de cambios. Guarda opción, resumen de pago y previsión."] },
        { heading: "La revisión de dos minutos", paragraphs: ["Confirma país, abre enlace, compara título e imagen, elige variante, anota precio e ID, revisa opiniones recientes y captura la selección.", "No garantiza calidad, pero evita producto equivocado, variante por defecto engañosa y capturas caducadas."] },
      ], takeaways: ["Configurar la región real.", "Comparar título, imagen, variante, ID y precio.", "Usar reseñas recientes como evidencia.", "Revisar desde cero cualquier sustituto.", "Separar índice y pago."] },
      "articles/read-qc-photos": { minutes: 10, sections: [
        { heading: "Qué pueden decir las reseñas de Hacoo", paragraphs: ["Hacoo presenta las reseñas como forma de compartir experiencias. Las fotos ayudan, pero no certifican nada: talla, color, lote e iluminación pueden cambiar.", "Google Play mostraba 3,6 con unas 57.700 reseñas, la App Store británica 4,7 con unas 77.000 valoraciones y Trustpilot 3,6 con 3.274. No deben mezclarse como un único veredicto."] },
        { heading: "Identidad antes que detalles", paragraphs: ["Confirma artículo, color, talla, material y piezas incluidas antes de ampliar costuras. Asegúrate de que la foto corresponde a la variante.", "Busca varias imágenes recientes. Sin pruebas de usuarios, reduce la confianza en lugar de suponer."] },
        { heading: "Silueta antes que costuras pequeñas", paragraphs: ["En ropa revisa hombros, ancho, largo y caída; en calzado, puntera, perfil, talón y curva de la suela; en bolsos, proporciones, asas y paneles.", "La simetría es un filtro rápido. Confirma cualquier anomalía en varios ángulos."] },
        { heading: "Inspección en orden fijo", paragraphs: ["Revisa uniones principales, bordes, cierres, herrajes y por último etiquetas e impresiones. Un detalle bonito no debe ocultar una cremallera débil.", "Comprueba regularidad, acabados y función. Las fotos no justifican afirmaciones de autenticidad."] },
        { heading: "Convertir fotos en medidas", paragraphs: ["Las imágenes con regla para pecho, largo, hombro, manga, cintura, entrepierna o plantilla son mejores que la perspectiva.", "Compara con una prenda propia medida del mismo modo. S, M y L no bastan."] },
        { heading: "Guardar las pruebas correctas", paragraphs: ["La ayuda de devoluciones pide, según el caso, etiqueta, código del embalaje, defecto, paquete exterior o etiqueta de envío. Fotografía contexto y detalle.", "Conserva embalaje y etiquetas; no lavar ni modificar facilita una posible reclamación."] },
        { heading: "Equilibrar opiniones", paragraphs: ["Trustpilot incluye elogios por pedidos repetidos y seguimiento, pero también críticas por cancelaciones, calidad y reembolsos. Google Play muestra media positiva y quejas recientes.", "Busca patrones específicos de país y categoría. Las frases sin detalle pesan menos que observaciones fechadas con fotos."] },
        { heading: "Decidir con un presupuesto de defectos", paragraphs: ["Separa error de identidad, defecto estructural y variación cosmética. Una variante equivocada exige revisar el enlace; un cierre roto pesa más que una pequeña diferencia de costura.", "Define lo aceptable antes de mirar el precio. El QC reduce incertidumbre, no garantiza el resultado."] },
      ], takeaways: ["Identidad antes que detalles.", "Forma antes que logos.", "Medidas reproducibles.", "Conservar embalaje y etiquetas.", "Leer patrones, no una sola opinión."] },
      "articles/size-before-you-buy": { minutes: 9, sections: [
        { heading: "Por qué no basta la etiqueta", paragraphs: ["Las letras cambian entre marcas, categorías y cortes. La referencia real son las medidas de la variante exacta.", "Para un problema de talla, la ayuda de Hacoo puede pedir etiqueta, código de la bolsa y explicación de la zona grande o pequeña."] },
        { heading: "Medir una prenda que ya te queda bien", paragraphs: ["Extiende una prenda comparable sin estirarla, mide dos veces y anota método además del número.", "Usa material y función similares: una camiseta fina no sirve como referencia de una chaqueta acolchada."] },
        { heading: "Comparar toda la parte superior", paragraphs: ["Para camisetas, sudaderas y chaquetas: medio pecho, largo, hombros y mangas. Con hombro caído, compara también la extensión total.", "El forro reduce espacio; deja margen para las capas que llevarás."], bullets: ["Medio pecho", "Largo", "Hombros", "Mangas", "Extensión total"] },
        { heading: "Un pantalón es más que la cintura", paragraphs: ["Compara cintura, cadera, tiro delantero y trasero, muslo, entrepierna y abertura. En elástico, anota relajado y estirado.", "No confundas entrepierna y largo exterior. Si falta tu medida crítica, falta evidencia."] },
        { heading: "En calzado manda la plantilla", paragraphs: ["Mide la plantilla extraíble de un par cómodo del talón al punto más largo. Las conversiones regionales son aproximadas.", "Anchura y puntera importan tanto como largo. Confirma que la reseña sea del estilo elegido."] },
        { heading: "Material y corte cambian las cifras", paragraphs: ["Elasticidad, forro, puños y tejidos pesados alteran el espacio útil. Busca reseñas sobre encogimiento o rigidez.", "No bajes automáticamente en oversize ni subas en slim: compara el conjunto."] },
        { heading: "Crear un registro antes de pagar", paragraphs: ["Guarda ID, variante, tabla, medidas de referencia y fecha. Captura la tabla después de elegir.", "Si no queda bien, mide antes de lavar y fotografía artículo, etiqueta, código y medida relevante."] },
        { heading: "La regla final", paragraphs: ["Elige el perfil completo más parecido a una prenda de referencia. Entre dos tallas, prioriza la dimensión menos tolerable.", "Si faltan tabla y reseñas útiles, espera. Una buena guía es una comparación repetible, no una conversión universal."] },
      ], takeaways: ["Usar una prenda de referencia.", "Guardar método y cifras.", "Comparar la forma completa.", "Medir plantilla y anchura.", "Guardar variante, tabla, ID y fecha."] },
    },
    it: {
      "articles/find-product-links": { minutes: 9, sections: [
        { heading: "Perché alcuni link Hacoo sono difficili da ritrovare", paragraphs: ["Il sito e gli store descrivono Hacoo come comunità di condivisione e scoperta. Gli articoli circolano quindi tramite post, consigli e link salvati; una normale ricerca del marchio può non mostrare lo stesso risultato.", "Google Play indicava oltre dieci milioni di download il 28 agosto 2026. Un link attraversa paesi, dispositivi e versioni: bisogna verificare titolo, immagine, variante, ID e prezzo."] },
        { heading: "Controllare prima la regione", paragraphs: ["Recensioni pubbliche citano impostazioni del paese e visibilità regionale. Non dimostrano che ogni catalogo sia diverso, ma suggeriscono un metodo: destinazione reale, app aggiornata, riavvio e nuovo tentativo.", "Non usare indirizzi falsi per forzare un catalogo. Salva regione e ID insieme per distinguere una rimozione da un limite locale."] },
        { heading: "Verificare cinque campi", paragraphs: ["Confronta titolo attuale, prima immagine, variante, ID e prezzo originale. L’ID resiste meglio ai cambi di testo; l’immagine rivela destinazioni sbagliate.", "Apri le opzioni. Il prezzo più basso può riferirsi a un altro colore o set. Cattura la schermata dopo la selezione."], bullets: ["Titolo", "Prima immagine", "Variante", "ID", "Prezzo originale"] },
        { heading: "Perché i fogli diventano vecchi", paragraphs: ["Un foglio è una mappa, non inventario. Le righe vengono copiate, le immagini restano in cache e la data può indicare l’inserimento, non l’ultimo controllo.", "Una voce solida conserva ID, descrizione, immagine, prezzo, categoria e data. La trasparenza vale più di una promessa di validità permanente."] },
        { heading: "Interpretare le recensioni", paragraphs: ["Hacoo mette in evidenza valutazioni e recensioni nel proprio modello di fiducia. Foto e misure recenti aiutano, ma possono riguardare un’altra variante.", "Google Play mostrava 3,6 con circa 57.700 recensioni, l’App Store britannico 4,7 con circa 77.000 valutazioni e Trustpilot 3,6 con 3.274. Sono contesti diversi, non prove sul singolo articolo."] },
        { heading: "Trattare i link spariti come manutenzione", paragraphs: ["Un link può sparire per esaurimento, regione, rimozione o moderazione. Il Trust Center Hacoo dichiara che nel 2025 ha rimosso oltre 1.000 post/link ingannevoli e bloccato più di 500 account dannosi, secondo dati interni.", "Cerca prima l’ID e poi una descrizione neutra. Ogni sostituto è una nuova scheda e va verificato da zero."] },
        { heading: "Separare scoperta, pagamento e assistenza", paragraphs: ["Questo indice indipendente non gestisce ordini o pagamenti. La pagina di destinazione e le condizioni correnti regolano la transazione.", "L’assistenza dettagliata Hacoo descrive 15 giorni generali per il reso, esclusioni, prove richieste e nessun cambio attuale. Salva opzione, riepilogo e previsione."] },
        { heading: "Il controllo in due minuti", paragraphs: ["Conferma il paese, apri il link, confronta titolo e immagine, seleziona la variante, registra prezzo e ID, leggi le recensioni recenti e salva la scelta.", "Non garantisce la qualità, ma evita prodotto errato, variante predefinita fuorviante e schermate obsolete."] },
      ], takeaways: ["Impostare la regione reale.", "Confrontare titolo, immagine, variante, ID e prezzo.", "Usare recensioni recenti come indizi.", "Verificare da zero ogni sostituto.", "Separare indice e pagamento."] },
      "articles/read-qc-photos": { minutes: 10, sections: [
        { heading: "Cosa possono dire le recensioni Hacoo", paragraphs: ["Hacoo presenta le recensioni come modo di condividere esperienze. Le foto aiutano ma non certificano: taglia, colore, lotto e luce possono cambiare.", "Google Play mostrava 3,6 con circa 57.700 recensioni, l’App Store britannico 4,7 con circa 77.000 valutazioni e Trustpilot 3,6 con 3.274. Non vanno unite in un unico verdetto."] },
        { heading: "Identità prima dei dettagli", paragraphs: ["Conferma articolo, colore, taglia, materiale e pezzi inclusi prima di ingrandire le cuciture. Verifica che la foto riguardi la variante scelta.", "Cerca più immagini recenti. Se mancano prove degli utenti, riduci la fiducia invece di supporre."] },
        { heading: "Sagoma prima delle piccole cuciture", paragraphs: ["Per i capi osserva spalle, larghezza, lunghezza e caduta; per le scarpe punta, profilo, tallone e suola; per le borse proporzioni, manici e pannelli.", "La simmetria è un filtro rapido. Conferma ogni anomalia da più angoli."] },
        { heading: "Ispezionare in ordine fisso", paragraphs: ["Controlla giunzioni principali, bordi, chiusure, minuteria e infine etichette e stampe. Un dettaglio attraente non deve nascondere una cerniera debole.", "Verifica regolarità, finiture e funzione. Le foto non giustificano dichiarazioni di autenticità."] },
        { heading: "Trasformare le foto in misure", paragraphs: ["Le immagini con righello per torace, lunghezza, spalla, manica, vita, interno gamba o soletta sono più affidabili della prospettiva.", "Confronta con un tuo articolo misurato nello stesso modo. S, M e L non bastano."] },
        { heading: "Conservare le prove corrette", paragraphs: ["L’aiuto resi richiede, a seconda del caso, etichetta, codice della busta, foto del difetto, pacco esterno o etichetta di spedizione. Fotografa contesto e dettaglio.", "Conserva imballaggio ed etichette; non lavare o modificare prima di una possibile richiesta."] },
        { heading: "Bilanciare le opinioni", paragraphs: ["Trustpilot contiene elogi per ordini ripetuti e tracking, ma anche critiche su cancellazioni, qualità e rimborsi. Google Play mostra media positiva e reclami recenti.", "Cerca schemi specifici nello stesso paese e categoria. Le frasi generiche pesano meno delle osservazioni datate con foto."] },
        { heading: "Decidere con un budget di difetti", paragraphs: ["Separa errore d’identità, difetto strutturale e variazione cosmetica. Una variante sbagliata richiede di ricontrollare il link; una chiusura rotta conta più di una cucitura lievemente diversa.", "Definisci ciò che accetti prima di guardare il prezzo. Il QC riduce l’incertezza, non garantisce il risultato."] },
      ], takeaways: ["Identità prima dei dettagli.", "Forma prima dei loghi.", "Misure riproducibili.", "Conservare imballaggio ed etichette.", "Leggere schemi, non una sola opinione."] },
      "articles/size-before-you-buy": { minutes: 9, sections: [
        { heading: "Perché l’etichetta non basta", paragraphs: ["Le lettere cambiano tra marchi, categorie e vestibilità. La base reale sono le misure della variante esatta.", "Per un problema di taglia, l’aiuto Hacoo può chiedere etichetta, codice della busta e descrizione della parte grande o piccola."] },
        { heading: "Misurare un capo che veste bene", paragraphs: ["Stendi un capo simile senza tirarlo, misura due volte e annota metodo oltre al numero.", "Usa materiale e funzione simili: una T-shirt sottile non è un riferimento per una giacca imbottita."] },
        { heading: "Confrontare tutto il capo superiore", paragraphs: ["Per T-shirt, felpe e giacche: mezzo torace, lunghezza, spalle e maniche. Con spalla scesa confronta anche l’ampiezza totale.", "La fodera riduce lo spazio; lascia margine per gli strati sotto una giacca."], bullets: ["Mezzo torace", "Lunghezza", "Spalle", "Maniche", "Ampiezza totale"] },
        { heading: "I pantaloni sono più della vita", paragraphs: ["Confronta vita, fianchi, cavallo davanti/dietro, coscia, interno gamba e apertura. Per elastico registra rilassato e teso.", "Non confondere interno gamba e lunghezza esterna. Una misura mancante è prova mancante."] },
        { heading: "Per le scarpe conta la soletta", paragraphs: ["Misura la soletta rimovibile di un paio comodo dal tallone al punto più lungo. Le conversioni regionali restano approssimative.", "Larghezza e punta contano quanto la lunghezza. Verifica che la recensione riguardi lo stile scelto."] },
        { heading: "Materiale e vestibilità cambiano i numeri", paragraphs: ["Elasticità, fodera, polsini e tessuti pesanti cambiano lo spazio utile. Cerca recensioni su restringimento e rigidità.", "Non scegliere automaticamente meno per oversize o più per slim: confronta l’insieme."] },
        { heading: "Creare un registro prima del pagamento", paragraphs: ["Salva ID, variante, tabella, misure di riferimento e data. Cattura la tabella dopo la selezione.", "Se non veste bene, misura prima di lavare e fotografa capo, etichetta, codice e misura rilevante."] },
        { heading: "La regola finale", paragraphs: ["Scegli il profilo completo più vicino al capo di riferimento. Tra due taglie, privilegia la dimensione meno tollerabile.", "Se tabella e recensioni utili mancano, aspetta. Una buona guida è un confronto ripetibile, non una conversione universale."] },
      ], takeaways: ["Usare un capo di riferimento.", "Salvare metodo e numeri.", "Confrontare la forma completa.", "Misurare soletta e larghezza.", "Salvare variante, tabella, ID e data."] },
    },
  };
  return data[locale];
}

export const articles: Record<Locale, Record<ArticleKey, Article>> = {
  en: { ...en, [readinessKey]: readinessArticles.en },
  de: { ...translatedArticles("de"), [readinessKey]: readinessArticles.de },
  fr: { ...translatedArticles("fr"), [readinessKey]: readinessArticles.fr },
  es: { ...translatedArticles("es"), [readinessKey]: readinessArticles.es },
  it: { ...translatedArticles("it"), [readinessKey]: readinessArticles.it },
};
