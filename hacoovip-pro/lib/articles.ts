import type { Lang } from "@/lib/site-data";
import { researchedEnglishArticles } from "@/lib/researched-articles-en";
import { translatedArticleExpansions } from "@/lib/translated-article-expansions";
import { translatedArticleParity } from "@/lib/translated-article-parity";
import { localizedPages } from "@/lib/page-translations";
import { pageParitySupplements } from "@/lib/page-parity-supplements";

export const articleSlugs = [
  "hacoo-spreadsheet-live-source",
  "hacoo-reviews-2026",
  "hacoo-shipping-time-cost",
] as const;

export type ArticleSlug = (typeof articleSlugs)[number];
export type Article = {
  title: string;
  description: string;
  readTime: string;
  factChecked?: string;
  sources?: string[];
  sections: { title: string; body: string[] }[];
};

const en: Record<ArticleSlug, Article> = {
  "hacoo-spreadsheet-live-source": {
    title: "How to use a Hacoo spreadsheet without losing the live source",
    description: "A practical system for moving from a curated visual index to the current product page while keeping image, title, option and price checks aligned.",
    readTime: "8 min read",
    sections: [
      { title: "What a Hacoo spreadsheet actually does", body: ["A Hacoo spreadsheet is best understood as a discovery index. It organizes products into a format that is faster to scan than an unstructured feed, usually with a picture, a short title, a price reference and a destination link. The index helps you create a shortlist; it does not replace the current destination page.", "Availability, options, prices and listing details can change after a card is added. Treat every saved entry as a route to verify rather than a permanent product record. This distinction is the foundation of a reliable workflow."] },
      { title: "Begin with a narrow category", body: ["Start with one clear product type such as shoes, hoodies, jerseys or accessories. If you already know the model, color or material, add that detail to your search. A narrow starting point reduces unrelated results and makes side-by-side comparison easier on a phone.", "Avoid opening many cards at once. Select two or three plausible matches, then inspect them completely before expanding the list. A small verified shortlist is more useful than dozens of unreviewed tabs."] },
      { title: "Use the image-title-destination check", body: ["Before relying on a route, compare three signals: the card image, the product title and the live destination. The first image should depict the same item, the title should describe the same product type, and the destination should still contain the expected listing. A page returning successfully only proves that the page exists; it does not prove that the product matches.", "If one signal differs, stop and return to the category or search page. Do not assume that a similar image or reused product number is close enough."] },
      { title: "Verify the live facts", body: ["Once the destination matches, review the current price, available options, visible measurements and all recent images. Pay attention to color names and variant labels because a card can show one option while the live page defaults to another. Record the currency and the date if you are comparing prices over time.", "The live destination is the best available source for current listing facts. Screenshots, social posts and copied spreadsheet values should be treated as older references, not guarantees."] },
      { title: "Build a useful shortlist", body: ["For each candidate, save the route, date checked, selected option and one short note explaining why it stayed on the list. Useful notes describe observable facts such as visible color, size information or image consistency. Avoid unsupported claims about authenticity, seller reliability or long-term quality.", "Remove entries that no longer match. A maintained shortlist should become smaller and clearer as you verify it; it should not grow indefinitely simply because more links are available."] },
      { title: "Repeat the check before acting", body: ["Reopen the destination shortly before you make a decision. Confirm that the first image, title, price and chosen option still match your saved record. If a route redirects or the listing changes, search again from the closest category instead of forcing the old entry to work.", "This final repeat catches the most common time-based mismatch: a correct card that pointed to a correct page when saved, but no longer represents the same live listing."] },
      { title: "Know what the index cannot prove", body: ["A curated spreadsheet cannot prove stock, authenticity, material composition, durability, delivery time or seller performance. It also cannot replace current platform rules or after-sales terms. Its purpose is narrower: help you discover products, organize routes and perform consistent checks.", "Used this way, the spreadsheet becomes a decision tool rather than a promise. Keep the live source attached to every conclusion and be willing to remove a route when the evidence changes."] },
    ],
  },
  "hacoo-reviews-2026": {
    title: "The mobile QC photo checklist",
    description: "A repeatable top-to-bottom review for silhouette, construction, labels and measurements, plus the limits of image-based inspection.",
    readTime: "9 min read",
    sections: [
      { title: "Set up the review", body: ["Open the reference image and the inspection image on the same device, then zoom to a comparable scale. Increase screen brightness and avoid judging color under a strong night-mode filter. Review one product at a time so details from different listings are not mixed.", "Write down the exact color and size you expect before inspecting small details. This creates a simple baseline and reduces the chance of approving the wrong variant because the overall product looks familiar."] },
      { title: "Start with the silhouette", body: ["Look at overall shape, proportions and color blocking before logos or stitching. For shoes, compare toe shape, sole height and the relationship between panels. For clothing, compare body length, sleeve shape and how the garment hangs. For bags, check outline, handle position and pocket placement.", "A major silhouette mismatch matters more than a tiny decorative difference. If the structure is clearly wrong, stop the review rather than searching for small details that appear correct."] },
      { title: "Compare both sides and repeated elements", body: ["Paired items and repeated graphics reveal inconsistencies quickly. Compare left and right shoes, sleeve prints, pocket positions, stripes, eyelets and repeated monograms. Look for differences in spacing, height and angle rather than expecting perfect photographic alignment.", "Remember that camera perspective can distort one side. Use several views when available and distinguish a genuine construction difference from a change caused by rotation, lens distance or fabric folding."] },
      { title: "Inspect construction and finishing", body: ["Move from large panels to seams, edges, hardware and closures. Check whether stitching paths are continuous, whether edges are clean, and whether zips, buttons and buckles sit in the expected position. On printed items, inspect alignment where the graphic crosses a seam.", "Image resolution may hide fine defects. Mark anything that cannot be seen as unknown rather than automatically acceptable. A checklist is useful because it records uncertainty as well as visible differences."] },
      { title: "Read labels and measurements", body: ["Confirm the visible size label, then prioritize actual measurements when they are provided. Compare chest width, length, waist, inseam or insole length with an item you already own and measure in the same way. A familiar size letter does not guarantee the same fit across listings.", "Labels can help identify a wrong option, but they do not prove material content or authenticity. Keep sizing decisions separate from brand claims."] },
      { title: "Review color with caution", body: ["Compare color across more than one photograph. Lighting, white balance and screen settings can shift black, cream, navy and saturated colors significantly. Use neutral objects in the frame as a rough reference and look for consistency between images rather than demanding an exact screen match.", "If color is the deciding factor, treat uncertainty honestly. Requesting or waiting for a clearer neutral-light image is safer than converting a poor photo into a confident conclusion."] },
      { title: "Make a documented decision", body: ["Finish with three labels: matched, mismatched or unclear. Add one sentence explaining the decision and save the relevant image or route with the date. This prevents repeated review and makes it easier to explain why a product was rejected or kept.", "QC photographs reduce obvious visual uncertainty. They cannot prove long-term durability, hidden construction, material composition, seller reliability or authenticity. A careful conclusion stays within what the images actually show."] },
    ],
  },
  "hacoo-shipping-time-cost": {
    title: "Shipping estimates that remain honest",
    description: "A framework for recording destination, parcel assumptions, current quotes and policy dates without turning estimates into promises.",
    readTime: "8 min read",
    sections: [
      { title: "Separate the product price from the delivered total", body: ["The displayed product price is only one part of the final amount. A useful estimate separates item cost, possible service charges, payment conversion, delivery cost and any local import obligations. Combining these inputs too early hides which assumption changed.", "Record every component in the same currency and write down the conversion rate date. This makes later comparisons meaningful and prevents a low product price from being mistaken for a low delivered cost."] },
      { title: "Define the destination first", body: ["A shipping figure has little value without a destination country or region. Available routes, carrier rules, taxes and delivery ranges can vary by location. Start every estimate with the exact destination and the date on which you checked support.", "Do not reuse another shopper's total unless the destination, parcel characteristics and quote date are comparable. Even then, treat it as context rather than a guaranteed rate."] },
      { title: "Record weight and packaging assumptions", body: ["Weight is important, but package dimensions and packaging choices may also affect the quote. Note whether the figure uses product weight, estimated packed weight or an actual measured parcel. Record any assumption about boxes, protective material or consolidation.", "If dimensions are unknown, label the estimate provisional. A precise-looking number built on missing package data is less useful than a clearly stated range."] },
      { title: "Compare routes on the same basis", body: ["When comparing options, use the same destination, weight, dimensions and quote date. Review what is included, tracking availability, restrictions and the current delivery range. The cheapest visible number is not automatically the best fit if it excludes a needed service or cannot carry the item type.", "Keep promotional discounts separate from the base quote so the comparison still makes sense after a temporary offer ends."] },
      { title: "Check after-sales and non-refundable costs", body: ["Read the current rules for cancellations, returns, rejected parcels and address problems. Identify which charges may remain non-refundable after a change. Old screenshots and community summaries can help locate a topic, but current platform terms should guide the final decision.", "Save the relevant policy date and avoid turning a previous experience into a universal promise. Rules and eligible categories may change."] },
      { title: "Use ranges instead of false precision", body: ["If a key input is uncertain, calculate a low and high case rather than publishing one exact total. Explain which weight, packaging or route assumption creates the difference. A range communicates uncertainty and gives you a trigger for rechecking when actual measurements arrive.", "Update the estimate instead of defending the first number. The goal is a useful decision record, not a prediction that must remain unchanged."] },
      { title: "Run a final quote check", body: ["Immediately before acting, reopen the live destination and shipping information. Confirm route availability, current price, parcel inputs, destination support and policy terms. Record the final quote with its date and currency.", "An honest shipping guide does not promise a delivery time or universal rate. It provides a repeatable method for collecting current inputs, comparing them fairly and showing where uncertainty remains."] },
    ],
  },
};

Object.assign(en, researchedEnglishArticles);

const de: Record<ArticleSlug, Article> = {
  "hacoo-spreadsheet-live-source": {
    title: "So nutzt du eine Hacoo-Tabelle, ohne die Live-Quelle zu verlieren",
    description: "Ein praktisches System vom kuratierten Index zur aktuellen Produktseite – mit abgestimmter Bild-, Titel-, Varianten- und Preisprüfung.",
    readTime: "8 Min. Lesezeit",
    sections: [
      { title: "Was eine Hacoo-Tabelle wirklich leistet", body: ["Eine Hacoo-Tabelle ist vor allem ein Entdeckungsindex. Sie ordnet Produkte mit Bild, kurzem Titel, Preisreferenz und Ziel-Link. Damit lässt sich schneller eine Auswahl bilden als in einem ungeordneten Feed; die aktuelle Zielseite ersetzt sie jedoch nicht.", "Verfügbarkeit, Varianten, Preise und Details können sich nach dem Eintragen ändern. Behandle jeden Eintrag als zu prüfenden Weg und nicht als dauerhaften Produktnachweis."] },
      { title: "Mit einer engen Kategorie beginnen", body: ["Starte mit einem klaren Produkttyp wie Schuhe, Hoodies, Trikots oder Accessoires. Ergänze Modell, Farbe oder Material, wenn du sie kennst. So sinkt die Zahl irrelevanter Treffer und Vergleiche auf dem Handy werden einfacher.", "Öffne zunächst nur zwei oder drei plausible Treffer und prüfe sie vollständig. Eine kleine verifizierte Auswahl ist wertvoller als viele ungeprüfte Tabs."] },
      { title: "Bild, Titel und Zielseite abgleichen", body: ["Vergleiche vor jeder Nutzung drei Signale: Kartenbild, Produkttitel und Live-Zielseite. Das erste Bild muss denselben Artikel zeigen, der Titel denselben Produkttyp beschreiben und das Ziel noch das erwartete Listing enthalten. Eine geladene Seite beweist nur ihre Existenz, nicht die Übereinstimmung.", "Weicht ein Signal ab, kehre zur Kategorie oder Suche zurück. Eine ähnliche Abbildung reicht nicht aus."] },
      { title: "Aktuelle Fakten prüfen", body: ["Kontrolliere auf der Zielseite den aktuellen Preis, verfügbare Varianten, sichtbare Maße und neue Bilder. Achte besonders auf Farbnamen und Optionsfelder, weil die Karte eine andere Variante zeigen kann als die Standardauswahl der Zielseite.", "Für aktuelle Listing-Daten ist die Live-Seite die wichtigste Quelle. Screenshots und kopierte Tabellenwerte sind ältere Referenzen, keine Zusagen."] },
      { title: "Eine nützliche Auswahlliste führen", body: ["Speichere je Kandidat Route, Prüfdatum, gewählte Variante und eine kurze sachliche Notiz. Gute Notizen beschreiben sichtbare Farbe, Maße oder Bildübereinstimmung und vermeiden unbelegte Aussagen über Echtheit oder Verkäuferqualität.", "Entferne Einträge, die nicht mehr passen. Eine gepflegte Auswahl wird durch Prüfung kleiner und klarer, nicht endlos größer."] },
      { title: "Vor der Entscheidung erneut prüfen", body: ["Öffne die Zielseite kurz vor deiner Entscheidung erneut. Bestätige Bild, Titel, Preis und Option. Leitet der Weg um oder hat sich das Listing geändert, suche erneut über die passende Kategorie.", "Dieser letzte Schritt findet häufige zeitbedingte Abweichungen: Ein ursprünglich korrekter Link repräsentiert später nicht mehr dasselbe Angebot."] },
      { title: "Grenzen des Index kennen", body: ["Eine kuratierte Tabelle beweist weder Lagerbestand noch Echtheit, Material, Haltbarkeit, Lieferzeit oder Verkäuferleistung. Sie ersetzt auch keine aktuellen Plattform- und Rückgaberegeln. Ihr Zweck ist enger: entdecken, ordnen und konsequent prüfen.", "So genutzt ist die Tabelle ein Entscheidungswerkzeug statt eines Versprechens. Jede Aussage bleibt mit der Live-Quelle verbunden."] },
    ],
  },
  "hacoo-reviews-2026": {
    title: "Die mobile Checkliste für QC-Fotos",
    description: "Eine wiederholbare Prüfung von Silhouette, Verarbeitung, Etiketten und Maßen – einschließlich der Grenzen einer Bildkontrolle.",
    readTime: "9 Min. Lesezeit",
    sections: [
      { title: "Prüfung vorbereiten", body: ["Öffne Referenz- und Prüfbild auf demselben Gerät und zoome auf einen vergleichbaren Maßstab. Erhöhe die Helligkeit und vermeide starke Nachtfilter. Prüfe immer nur ein Produkt, damit Details verschiedener Listings nicht vermischt werden.", "Notiere vorher die erwartete Farbe und Größe. Diese einfache Ausgangslage verhindert, dass eine falsche Variante nur wegen eines vertrauten Gesamteindrucks akzeptiert wird."] },
      { title: "Mit der Silhouette beginnen", body: ["Prüfe zuerst Form, Proportionen und Farbflächen. Bei Schuhen sind Zehenform, Sohlenhöhe und Paneelverhältnis wichtig; bei Kleidung Länge, Ärmel und Fall; bei Taschen Kontur, Griffe und Taschenposition.", "Eine deutliche Formabweichung ist wichtiger als ein winziges Dekordetail. Bei klar falscher Struktur sollte die Prüfung beendet werden."] },
      { title: "Beide Seiten und Wiederholungen vergleichen", body: ["Vergleiche linke und rechte Schuhe, Ärmeldrucke, Taschen, Streifen, Ösen und wiederholte Muster. Achte auf Abstand, Höhe und Winkel. Perspektive kann eine Seite verzerren; nutze deshalb mehrere Ansichten und trenne Baufehler von Kameraeffekten."] },
      { title: "Verarbeitung kontrollieren", body: ["Gehe von großen Flächen zu Nähten, Kanten, Beschlägen und Verschlüssen. Prüfe durchgehende Nähwege, saubere Abschlüsse und die Position von Reißverschlüssen oder Schnallen. Bei Drucken ist die Ausrichtung an Nähten besonders aufschlussreich.", "Ist ein Detail nicht sichtbar, markiere es als unklar statt automatisch als akzeptabel."] },
      { title: "Etiketten und Maße lesen", body: ["Bestätige das Größenetikett und priorisiere vorhandene Maße. Vergleiche Brustweite, Länge, Bund, Innenbein oder Innensohlenlänge mit einem eigenen Artikel, der gleich gemessen wurde. Ein Größenbuchstabe garantiert keine identische Passform.", "Etiketten können eine falsche Option zeigen, beweisen aber weder Material noch Echtheit."] },
      { title: "Farbe vorsichtig beurteilen", body: ["Vergleiche Farbe über mehrere Fotos. Licht, Weißabgleich und Display können Schwarz, Creme, Navy und kräftige Töne verschieben. Suche nach Konsistenz zwischen Bildern statt nach einer perfekten Bildschirmübereinstimmung.", "Ist die Farbe entscheidend und das Foto schlecht, bleibt das Ergebnis unklar. Ein besseres Bild ist sicherer als eine übertriebene Schlussfolgerung."] },
      { title: "Entscheidung dokumentieren", body: ["Beende die Prüfung mit: passend, abweichend oder unklar. Ergänze einen Begründungssatz und speichere Bild oder Route mit Datum. QC-Fotos reduzieren sichtbare Unsicherheit, beweisen aber keine Haltbarkeit, versteckte Konstruktion, Verkäuferleistung oder Echtheit."] },
    ],
  },
  "hacoo-shipping-time-cost": {
    title: "Versandschätzungen, die ehrlich bleiben",
    description: "Ein Rahmen für Zielort, Paketannahmen, aktuelle Angebote und Richtliniendaten – ohne Schätzungen als Zusagen darzustellen.",
    readTime: "8 Min. Lesezeit",
    sections: [
      { title: "Produktpreis und Gesamtbetrag trennen", body: ["Der Produktpreis ist nur ein Teil des Endbetrags. Trenne Warenwert, mögliche Gebühren, Währungsumrechnung, Versand und lokale Importpflichten. Werden alle Posten zu früh vermischt, ist später unklar, welche Annahme sich geändert hat.", "Notiere alles in derselben Währung und speichere das Datum des Wechselkurses."] },
      { title: "Zielort zuerst festlegen", body: ["Eine Versandzahl ist ohne Zielland kaum aussagekräftig. Routen, Carrier-Regeln, Steuern und Zeiträume unterscheiden sich je nach Ort. Beginne jede Schätzung mit dem genauen Ziel und dem Prüfdatum.", "Übernimm fremde Gesamtbeträge nur als Kontext, niemals als garantierten Tarif."] },
      { title: "Gewicht und Verpackung dokumentieren", body: ["Notiere, ob Produktgewicht, geschätztes Packgewicht oder gemessenes Paketgewicht verwendet wird. Auch Maße, Karton, Schutzmaterial und Zusammenlegung können den Preis beeinflussen.", "Sind Abmessungen unbekannt, kennzeichne die Schätzung als vorläufig. Eine ehrliche Spanne ist hilfreicher als falsche Genauigkeit."] },
      { title: "Routen auf gleicher Basis vergleichen", body: ["Vergleiche Optionen nur mit identischem Ziel, Gewicht, Maßen und Datum. Prüfe enthaltene Leistungen, Tracking, Einschränkungen und aktuelle Laufzeit. Der niedrigste sichtbare Preis ist nicht automatisch passend.", "Trenne zeitlich begrenzte Rabatte vom Grundpreis."] },
      { title: "Nachverkauf und nicht erstattbare Kosten", body: ["Lies aktuelle Regeln zu Storno, Rückgabe, abgelehnten Paketen und Adressfehlern. Ermittle, welche Kosten auch nach einer Änderung bestehen bleiben. Alte Screenshots können ein Thema zeigen, die aktuelle Richtlinie entscheidet.", "Speichere das Richtliniendatum und vermeide universelle Zusagen."] },
      { title: "Spannen statt Scheingenauigkeit", body: ["Fehlt ein wichtiger Wert, berechne einen niedrigen und hohen Fall. Erkläre, welche Gewichts-, Verpackungs- oder Routenannahme den Unterschied verursacht. Aktualisiere die Schätzung, sobald echte Maße vorliegen.", "Ziel ist ein nützlicher Entscheidungsnachweis, keine unveränderliche Vorhersage."] },
      { title: "Finales Angebot prüfen", body: ["Öffne unmittelbar vor der Entscheidung die aktuellen Versandinformationen. Bestätige Route, Preis, Paketdaten, Zielunterstützung und Regeln. Speichere das finale Angebot mit Datum und Währung.", "Ein ehrlicher Guide verspricht weder Lieferzeit noch Einheitspreis; er macht aktuelle Eingaben und Unsicherheit sichtbar."] },
    ],
  },
};

const es: Record<ArticleSlug, Article> = {
  "hacoo-spreadsheet-live-source": {
    title: "Cómo usar una hoja de Hacoo sin perder la fuente actual",
    description: "Un sistema práctico para pasar del índice visual a la página actual manteniendo alineadas imagen, título, variante y precio.",
    readTime: "8 min de lectura",
    sections: [
      { title: "Qué hace realmente una hoja de Hacoo", body: ["Una hoja de Hacoo funciona como índice de descubrimiento. Ordena productos con imagen, título breve, precio de referencia y enlace de destino. Ayuda a crear una selección más rápido que un feed desordenado, pero no sustituye la página actual.", "La disponibilidad, las variantes y el precio pueden cambiar después de añadir una tarjeta. Trata cada entrada como una ruta que debes verificar, no como un registro permanente."] },
      { title: "Empieza por una categoría concreta", body: ["Elige un tipo claro: zapatillas, sudaderas, camisetas, equipaciones o accesorios. Añade modelo, color o material si lo conoces. Un inicio concreto reduce resultados irrelevantes y facilita la comparación desde el móvil.", "Abre dos o tres candidatos y revísalos por completo antes de ampliar la lista. Una selección pequeña y verificada vale más que muchas pestañas sin comprobar."] },
      { title: "Comprueba imagen, título y destino", body: ["Compara tres señales: la imagen de la tarjeta, el título y la página actual. La primera imagen debe mostrar el mismo artículo, el título debe describir el mismo tipo y el destino debe conservar el anuncio esperado. Que una página cargue solo demuestra que existe.", "Si una señal no coincide, vuelve a la categoría o a la búsqueda. Una imagen parecida no es suficiente."] },
      { title: "Verifica los datos actuales", body: ["Revisa precio, opciones, medidas visibles e imágenes recientes. Presta atención al nombre del color y a la variante seleccionada, porque la tarjeta puede mostrar una opción distinta a la predeterminada en el destino.", "La página actual es la mejor fuente para los datos vigentes. Capturas y valores copiados son referencias anteriores, no garantías."] },
      { title: "Crea una selección útil", body: ["Guarda la ruta, la fecha, la opción elegida y una nota objetiva. Las notas útiles describen color, medidas o coincidencia visual y evitan afirmaciones sin pruebas sobre autenticidad o vendedor.", "Elimina las entradas que ya no coincidan. Una lista mantenida debe hacerse más clara a medida que verificas."] },
      { title: "Repite la comprobación antes de decidir", body: ["Vuelve a abrir el destino poco antes de actuar. Confirma imagen, título, precio y opción. Si la ruta redirige o el anuncio cambia, busca de nuevo desde la categoría más cercana.", "Esta repetición detecta el desajuste temporal más común: una tarjeta que era correcta cuando se guardó y dejó de representar el mismo anuncio."] },
      { title: "Conoce los límites del índice", body: ["Una hoja no demuestra stock, autenticidad, material, durabilidad, plazo de entrega ni rendimiento del vendedor. Tampoco sustituye las normas actuales. Sirve para descubrir, organizar y comprobar de forma coherente.", "Usada así, es una herramienta de decisión y no una promesa. Mantén cada conclusión conectada a la fuente actual."] },
    ],
  },
  "hacoo-reviews-2026": {
    title: "Lista móvil para revisar fotos de QC",
    description: "Una revisión repetible de silueta, construcción, etiquetas y medidas, con los límites de la inspección por imágenes.",
    readTime: "9 min de lectura",
    sections: [
      { title: "Prepara la revisión", body: ["Abre la referencia y la foto de inspección en el mismo dispositivo y usa una escala comparable. Aumenta el brillo y evita filtros nocturnos intensos. Revisa un solo producto para no mezclar detalles de anuncios diferentes.", "Anota antes el color y la talla esperados. Esta base evita aprobar una variante incorrecta solo porque el conjunto parece familiar."] },
      { title: "Empieza por la silueta", body: ["Observa forma, proporciones y bloques de color antes que logotipos o costuras. En calzado compara puntera, suela y paneles; en ropa, largo, mangas y caída; en bolsos, contorno, asas y bolsillos.", "Una diferencia estructural importa más que un pequeño detalle decorativo. Si la forma es claramente incorrecta, detén la revisión."] },
      { title: "Compara ambos lados y elementos repetidos", body: ["Compara zapato izquierdo y derecho, estampados de mangas, bolsillos, rayas, ojales y monogramas. Busca diferencias de espacio, altura y ángulo. La perspectiva puede deformar una vista, así que utiliza varias fotos y separa defectos reales de efectos de cámara."] },
      { title: "Revisa construcción y acabado", body: ["Pasa de los paneles grandes a costuras, bordes, herrajes y cierres. Comprueba continuidad, acabado y posición de cremalleras, botones o hebillas. En prendas impresas observa dónde el gráfico cruza una costura.", "Si la resolución no permite ver un detalle, márcalo como incierto en lugar de aceptarlo automáticamente."] },
      { title: "Lee etiquetas y medidas", body: ["Confirma la etiqueta de talla y da prioridad a las medidas reales. Compara ancho, largo, cintura, entrepierna o plantilla con una prenda propia medida del mismo modo. La misma letra de talla no garantiza el mismo ajuste.", "Las etiquetas ayudan a detectar una opción equivocada, pero no prueban material ni autenticidad."] },
      { title: "Evalúa el color con cautela", body: ["Compara el color en varias fotografías. Iluminación, balance de blancos y pantalla pueden alterar negros, crema, azul marino y tonos intensos. Busca coherencia entre imágenes, no una coincidencia perfecta con la pantalla.", "Si el color es decisivo y la foto es mala, conserva el resultado como incierto."] },
      { title: "Documenta la decisión", body: ["Termina con tres etiquetas: coincide, no coincide o no está claro. Añade una frase de motivo y guarda la imagen o ruta con fecha. Las fotos QC reducen incertidumbre visible, pero no prueban durabilidad, construcción oculta, vendedor o autenticidad."] },
    ],
  },
  "hacoo-shipping-time-cost": {
    title: "Estimaciones de envío que siguen siendo honestas",
    description: "Un marco para registrar destino, supuestos del paquete, cotizaciones actuales y fechas de políticas sin convertir estimaciones en promesas.",
    readTime: "8 min de lectura",
    sections: [
      { title: "Separa precio y total entregado", body: ["El precio del producto es solo una parte. Separa coste del artículo, posibles servicios, conversión, envío y obligaciones locales. Si mezclas todo demasiado pronto, no sabrás qué supuesto cambió.", "Registra cada componente en la misma moneda y apunta la fecha del cambio utilizado."] },
      { title: "Define primero el destino", body: ["Una cifra de envío vale poco sin país o región. Rutas, transportistas, impuestos y plazos varían por ubicación. Empieza cada cálculo con el destino exacto y la fecha de comprobación.", "Usa el total de otra persona solo como contexto, nunca como tarifa garantizada."] },
      { title: "Registra peso y embalaje", body: ["Indica si utilizas peso del producto, peso embalado estimado o una medición real. Dimensiones, caja, protección y consolidación también pueden influir.", "Si faltan medidas, marca la estimación como provisional. Un rango claro es mejor que una precisión falsa."] },
      { title: "Compara rutas con la misma base", body: ["Mantén destino, peso, dimensiones y fecha iguales. Revisa servicios incluidos, seguimiento, restricciones y plazo actual. La cifra más baja no siempre es adecuada si excluye algo necesario.", "Separa descuentos temporales del precio base."] },
      { title: "Revisa posventa y costes no reembolsables", body: ["Lee las reglas actuales de cancelación, devolución, rechazo y errores de dirección. Identifica qué cargos pueden mantenerse. Las capturas antiguas orientan, pero la política vigente debe dirigir la decisión.", "Guarda la fecha de la norma y evita convertir una experiencia anterior en promesa universal."] },
      { title: "Usa rangos", body: ["Si un dato clave es incierto, calcula un caso bajo y otro alto y explica qué supuesto provoca la diferencia. Actualiza el cálculo cuando lleguen medidas reales.", "El objetivo es un registro útil para decidir, no una predicción que deba permanecer igual."] },
      { title: "Haz una comprobación final", body: ["Antes de actuar, confirma ruta, precio, datos del paquete, soporte del destino y normas. Guarda la cotización final con fecha y moneda.", "Una guía honesta no promete tiempo ni tarifa universal; organiza entradas actuales y muestra la incertidumbre restante."] },
    ],
  },
};

const fr: Record<ArticleSlug, Article> = {
  "hacoo-spreadsheet-live-source": {
    title: "Utiliser un tableau Hacoo sans perdre la source en direct",
    description: "Une méthode pratique pour passer d’un index visuel à la page actuelle tout en vérifiant image, titre, variante et prix.",
    readTime: "8 min de lecture",
    sections: [
      { title: "Le rôle réel d’un tableau Hacoo", body: ["Un tableau Hacoo est avant tout un index de découverte. Il organise des produits avec une image, un titre court, un prix indicatif et un lien. Il accélère la création d’une sélection, mais ne remplace jamais la page actuelle.", "Disponibilité, variantes, prix et détails peuvent changer après l’ajout d’une carte. Chaque entrée est un chemin à vérifier, pas un enregistrement permanent."] },
      { title: "Commencer par une catégorie précise", body: ["Choisissez un type clair : chaussures, sweats, maillots ou accessoires. Ajoutez modèle, couleur ou matière si vous les connaissez. Un départ précis réduit le bruit et facilite la comparaison sur mobile.", "Ouvrez deux ou trois candidats et contrôlez-les complètement. Une petite sélection vérifiée vaut mieux que de nombreux onglets non contrôlés."] },
      { title: "Vérifier image, titre et destination", body: ["Comparez trois signaux : l’image de la carte, le titre et la page en direct. La première image doit montrer le même article, le titre décrire le même type et la destination contenir encore la fiche attendue. Une page qui charge prouve seulement qu’elle existe.", "Si un signal diffère, revenez à la catégorie ou à la recherche."] },
      { title: "Contrôler les données actuelles", body: ["Examinez le prix, les options, les mesures visibles et les images récentes. Faites attention au nom de couleur et à la variante sélectionnée : la carte peut montrer une option différente de celle affichée par défaut.", "La destination en direct est la meilleure source pour les données actuelles. Captures et valeurs copiées restent des références anciennes."] },
      { title: "Construire une sélection utile", body: ["Enregistrez le lien, la date, l’option choisie et une note factuelle. Une bonne note décrit couleur, mesures ou cohérence visuelle sans affirmer l’authenticité ou la fiabilité du vendeur.", "Supprimez les entrées qui ne correspondent plus. Une liste entretenue devient plus courte et plus claire."] },
      { title: "Recontrôler avant de décider", body: ["Rouvrez la destination peu avant votre décision. Confirmez image, titre, prix et option. Si le lien redirige ou si la fiche change, recommencez depuis la catégorie appropriée.", "Ce dernier passage détecte un problème fréquent : une carte correcte au moment de l’enregistrement ne représente plus la même fiche."] },
      { title: "Connaître les limites", body: ["Un tableau ne prouve ni stock, ni authenticité, ni matière, ni durabilité, ni délai, ni performance du vendeur. Il ne remplace pas les règles actuelles. Il sert à découvrir, organiser et vérifier.", "Ainsi utilisé, il devient un outil de décision plutôt qu’une promesse. Chaque conclusion reste liée à la source en direct."] },
    ],
  },
  "hacoo-reviews-2026": {
    title: "La checklist mobile des photos QC",
    description: "Un contrôle reproductible de la silhouette, de la construction, des étiquettes et des mesures, avec les limites de l’image.",
    readTime: "9 min de lecture",
    sections: [
      { title: "Préparer le contrôle", body: ["Ouvrez la référence et la photo d’inspection sur le même appareil, à une échelle comparable. Augmentez la luminosité et évitez un filtre nocturne fort. Examinez un seul produit à la fois.", "Notez à l’avance la couleur et la taille attendues. Cette base évite d’accepter une mauvaise variante parce que l’ensemble semble familier."] },
      { title: "Commencer par la silhouette", body: ["Regardez forme, proportions et blocs de couleur avant les logos. Pour les chaussures, comparez bout, semelle et panneaux ; pour les vêtements, longueur, manches et tombé ; pour les sacs, contour, anses et poches.", "Une différence structurelle compte davantage qu’un petit détail décoratif."] },
      { title: "Comparer les deux côtés", body: ["Comparez chaussure gauche et droite, impressions de manches, poches, rayures, œillets et motifs répétés. Cherchez des différences d’espacement, de hauteur et d’angle. La perspective peut déformer une vue : utilisez plusieurs photos."] },
      { title: "Inspecter construction et finition", body: ["Passez des grands panneaux aux coutures, bords, pièces métalliques et fermetures. Contrôlez la continuité, la propreté et la position des zips ou boucles. Sur un imprimé, observez l’alignement au passage d’une couture.", "Si un détail n’est pas visible, marquez-le comme incertain."] },
      { title: "Lire étiquettes et mesures", body: ["Confirmez l’étiquette de taille, puis privilégiez les mesures réelles. Comparez largeur, longueur, taille, entrejambe ou semelle intérieure avec un article personnel mesuré de la même manière. Une lettre de taille ne garantit pas la même coupe.", "Une étiquette aide à repérer une option erronée, sans prouver matière ou authenticité."] },
      { title: "Évaluer la couleur avec prudence", body: ["Comparez plusieurs photos. Éclairage, balance des blancs et écran peuvent modifier noir, crème, marine et couleurs vives. Cherchez la cohérence entre images plutôt qu’une correspondance parfaite.", "Si la couleur est décisive et l’image mauvaise, gardez le résultat incertain."] },
      { title: "Documenter la décision", body: ["Terminez par trois états : conforme, différent ou incertain. Ajoutez une phrase et conservez image ou lien avec la date. Les photos QC réduisent l’incertitude visible, mais ne prouvent pas durabilité, construction cachée, vendeur ou authenticité."] },
    ],
  },
  "hacoo-shipping-time-cost": {
    title: "Des estimations de livraison qui restent honnêtes",
    description: "Un cadre pour noter destination, hypothèses de colis, devis actuels et dates de politique sans transformer une estimation en promesse.",
    readTime: "8 min de lecture",
    sections: [
      { title: "Séparer prix produit et total livré", body: ["Le prix affiché n’est qu’une partie du total. Séparez article, services éventuels, conversion, livraison et obligations locales. Les mélanger trop tôt masque l’hypothèse qui a changé.", "Conservez tous les éléments dans la même devise et notez la date du taux de change."] },
      { title: "Définir d’abord la destination", body: ["Un montant d’envoi a peu de sens sans pays ou région. Routes, transporteurs, taxes et délais varient selon le lieu. Commencez chaque estimation par la destination exacte et la date de vérification.", "Le total d’un autre acheteur n’est qu’un contexte, jamais un tarif garanti."] },
      { title: "Noter poids et emballage", body: ["Précisez s’il s’agit du poids du produit, d’un poids emballé estimé ou d’une mesure réelle. Dimensions, carton, protection et regroupement peuvent aussi modifier le devis.", "Si les dimensions manquent, indiquez que l’estimation est provisoire."] },
      { title: "Comparer sur la même base", body: ["Utilisez destination, poids, dimensions et date identiques. Vérifiez services inclus, suivi, restrictions et délai actuel. Le prix visible le plus bas n’est pas toujours adapté.", "Séparez les remises temporaires du tarif de base."] },
      { title: "Vérifier après-vente et coûts non remboursables", body: ["Lisez les règles actuelles sur annulation, retour, colis refusé et erreur d’adresse. Identifiez les frais qui peuvent rester dus. Les anciennes captures orientent ; la politique actuelle décide.", "Enregistrez la date de la règle et évitez les promesses générales."] },
      { title: "Utiliser des fourchettes", body: ["Si une donnée clé est incertaine, calculez un cas bas et un cas haut et expliquez l’hypothèse responsable. Mettez l’estimation à jour quand les mesures réelles arrivent.", "Le but est un dossier utile pour décider, pas une prédiction immuable."] },
      { title: "Faire un dernier contrôle", body: ["Avant d’agir, confirmez route, prix, données du colis, prise en charge de la destination et règles. Enregistrez le devis final avec date et devise.", "Un guide honnête ne promet ni délai ni tarif universel ; il organise les données actuelles et montre l’incertitude restante."] },
    ],
  },
};

const it: Record<ArticleSlug, Article> = {
  "hacoo-spreadsheet-live-source": {
    title: "Usare un foglio Hacoo senza perdere la fonte live",
    description: "Un sistema pratico per passare dall’indice visivo alla pagina attuale mantenendo allineati immagine, titolo, variante e prezzo.",
    readTime: "8 min di lettura",
    sections: [
      { title: "Cosa fa davvero un foglio Hacoo", body: ["Un foglio Hacoo è soprattutto un indice di scoperta. Organizza prodotti con immagine, titolo breve, prezzo indicativo e link. Aiuta a creare una selezione più rapidamente di un feed disordinato, ma non sostituisce la pagina attuale.", "Disponibilità, varianti, prezzi e dettagli possono cambiare dopo l’inserimento. Ogni voce è un percorso da verificare, non un record permanente."] },
      { title: "Partire da una categoria precisa", body: ["Scegli un tipo chiaro: scarpe, felpe, maglie o accessori. Aggiungi modello, colore o materiale se li conosci. Un punto di partenza preciso riduce i risultati inutili e facilita il confronto da telefono.", "Apri due o tre candidati e controllali completamente. Una lista piccola e verificata vale più di molte schede non controllate."] },
      { title: "Controllare immagine, titolo e destinazione", body: ["Confronta tre segnali: immagine della scheda, titolo e pagina live. La prima immagine deve mostrare lo stesso articolo, il titolo lo stesso tipo di prodotto e la destinazione deve contenere ancora l’inserzione attesa. Una pagina caricata dimostra solo che esiste.", "Se un segnale non coincide, torna alla categoria o alla ricerca."] },
      { title: "Verificare i dati live", body: ["Controlla prezzo, opzioni, misure visibili e immagini recenti. Presta attenzione al nome del colore e alla variante selezionata: la scheda può mostrare un’opzione diversa da quella predefinita nella destinazione.", "La pagina live è la fonte migliore per i dati attuali. Screenshot e valori copiati restano riferimenti precedenti."] },
      { title: "Creare una selezione utile", body: ["Salva percorso, data, opzione scelta e una nota oggettiva. Le note utili descrivono colore, misure o corrispondenza visiva e non fanno affermazioni non provate su autenticità o venditore.", "Rimuovi le voci che non corrispondono più. Una lista mantenuta diventa più chiara con la verifica."] },
      { title: "Ripetere il controllo prima di decidere", body: ["Riapri la destinazione poco prima di agire. Conferma immagine, titolo, prezzo e opzione. Se il link reindirizza o l’inserzione cambia, ricomincia dalla categoria più vicina.", "Questo passaggio intercetta il problema temporale più comune: una scheda corretta al salvataggio che non rappresenta più lo stesso annuncio."] },
      { title: "Conoscere i limiti", body: ["Un foglio non prova stock, autenticità, materiale, durata, consegna o affidabilità del venditore. Non sostituisce le regole attuali. Serve a scoprire, organizzare e controllare in modo coerente.", "Usato così è uno strumento decisionale, non una promessa. Ogni conclusione resta collegata alla fonte live."] },
    ],
  },
  "hacoo-reviews-2026": {
    title: "La checklist mobile per le foto QC",
    description: "Un controllo ripetibile di silhouette, costruzione, etichette e misure, con i limiti dell’ispezione tramite immagini.",
    readTime: "9 min di lettura",
    sections: [
      { title: "Preparare il controllo", body: ["Apri riferimento e foto di ispezione sullo stesso dispositivo e usa una scala simile. Aumenta la luminosità ed evita filtri notturni forti. Controlla un prodotto alla volta per non mescolare dettagli.", "Annota prima colore e taglia attesi. Questa base evita di approvare una variante sbagliata solo perché l’insieme sembra familiare."] },
      { title: "Iniziare dalla silhouette", body: ["Osserva forma, proporzioni e blocchi di colore prima di logo e cuciture. Per le scarpe confronta punta, suola e pannelli; per l’abbigliamento lunghezza, maniche e caduta; per le borse contorno, manici e tasche.", "Una differenza strutturale conta più di un piccolo dettaglio decorativo."] },
      { title: "Confrontare entrambi i lati", body: ["Confronta scarpa sinistra e destra, stampe sulle maniche, tasche, righe, occhielli e motivi ripetuti. Cerca differenze di spazio, altezza e angolo. La prospettiva può deformare una vista: usa più foto e separa difetti reali dagli effetti della camera."] },
      { title: "Esaminare costruzione e finitura", body: ["Passa dai pannelli grandi a cuciture, bordi, parti metalliche e chiusure. Controlla continuità, pulizia e posizione di zip, bottoni o fibbie. Sulle stampe osserva l’allineamento in corrispondenza delle cuciture.", "Se un dettaglio non è visibile, segnalo come incerto invece di accettarlo."] },
      { title: "Leggere etichette e misure", body: ["Conferma l’etichetta della taglia e dai priorità alle misure reali. Confronta larghezza, lunghezza, vita, interno gamba o soletta con un capo tuo misurato allo stesso modo. La stessa lettera non garantisce la stessa vestibilità.", "Le etichette aiutano a trovare un’opzione errata ma non provano materiale o autenticità."] },
      { title: "Valutare il colore con cautela", body: ["Confronta più fotografie. Luce, bilanciamento del bianco e schermo possono alterare nero, crema, blu e colori saturi. Cerca coerenza tra immagini, non una corrispondenza perfetta.", "Se il colore è decisivo e la foto è scarsa, lascia il risultato incerto."] },
      { title: "Documentare la decisione", body: ["Concludi con tre stati: corrisponde, non corrisponde o incerto. Aggiungi una frase e salva immagine o percorso con la data. Le foto QC riducono l’incertezza visiva ma non provano durata, costruzione nascosta, venditore o autenticità."] },
    ],
  },
  "hacoo-shipping-time-cost": {
    title: "Stime di spedizione che restano oneste",
    description: "Un metodo per registrare destinazione, ipotesi del pacco, preventivi attuali e date delle regole senza trasformare stime in promesse.",
    readTime: "8 min di lettura",
    sections: [
      { title: "Separare prezzo e totale consegnato", body: ["Il prezzo del prodotto è solo una parte. Separa articolo, servizi possibili, conversione, spedizione e obblighi locali. Mescolare tutto troppo presto nasconde quale ipotesi è cambiata.", "Registra ogni voce nella stessa valuta e annota la data del cambio."] },
      { title: "Definire prima la destinazione", body: ["Una cifra di spedizione vale poco senza paese o regione. Rotte, vettori, imposte e tempi variano per luogo. Inizia ogni stima con la destinazione esatta e la data di controllo.", "Usa il totale di un’altra persona solo come contesto, mai come tariffa garantita."] },
      { title: "Registrare peso e imballaggio", body: ["Indica se usi peso del prodotto, peso imballato stimato o misura reale. Dimensioni, scatola, protezione e consolidamento possono cambiare il preventivo.", "Se mancano le dimensioni, definisci la stima provvisoria. Un intervallo chiaro è meglio di una falsa precisione."] },
      { title: "Confrontare le rotte sulla stessa base", body: ["Mantieni uguali destinazione, peso, dimensioni e data. Controlla servizi inclusi, tracking, restrizioni e tempi attuali. Il numero più basso non è sempre adatto.", "Separa gli sconti temporanei dalla tariffa base."] },
      { title: "Controllare post-vendita e costi non rimborsabili", body: ["Leggi le regole attuali su cancellazioni, resi, pacchi rifiutati ed errori di indirizzo. Individua i costi che possono restare. Gli screenshot vecchi orientano, ma conta la politica attuale.", "Salva la data della regola ed evita promesse universali."] },
      { title: "Usare intervalli", body: ["Se un dato chiave è incerto, calcola un caso basso e uno alto e spiega l’ipotesi che crea la differenza. Aggiorna il calcolo quando arrivano misure reali.", "L’obiettivo è un registro utile, non una previsione immutabile."] },
      { title: "Fare il controllo finale", body: ["Prima di agire conferma rotta, prezzo, dati del pacco, supporto della destinazione e regole. Salva il preventivo finale con data e valuta.", "Una guida onesta non promette tempi o tariffe universali; organizza dati attuali e mostra l’incertezza residua."] },
    ],
  },
};

Object.assign(de["hacoo-spreadsheet-live-source"], { title: "Hacoo Spreadsheet Guide: Produktlinks mit der Live-Quelle abgleichen", factChecked: "Fakten geprüft am 28. August 2026", sources: ["Hacoo Nutzungsbedingungen", "Hacoo Richtlinie für geistiges Eigentum", "Hacoo App-Store-Eintrag", "Hacoo Help Center"] });
Object.assign(es["hacoo-spreadsheet-live-source"], { title: "Guía Hacoo Spreadsheet: vincula cada producto con su fuente actual", factChecked: "Datos revisados el 28 de agosto de 2026", sources: ["Términos de Hacoo", "Política de propiedad intelectual", "Ficha de Hacoo en App Store", "Centro de ayuda Hacoo"] });
Object.assign(fr["hacoo-spreadsheet-live-source"], { title: "Guide Hacoo Spreadsheet : relier chaque produit à sa source en direct", factChecked: "Vérifié le 28 août 2026", sources: ["Conditions d’utilisation Hacoo", "Politique de propriété intellectuelle", "Fiche App Store Hacoo", "Centre d’aide Hacoo"] });
Object.assign(it["hacoo-spreadsheet-live-source"], { title: "Guida Hacoo Spreadsheet: collega ogni prodotto alla fonte live", factChecked: "Verificato il 28 agosto 2026", sources: ["Termini Hacoo", "Politica sulla proprietà intellettuale", "Scheda App Store Hacoo", "Centro assistenza Hacoo"] });

Object.assign(de["hacoo-reviews-2026"], { title: "Hacoo QC und Bewertungen: Fotos, Größenangaben und gemischtes Feedback richtig lesen", description: "Eine klare Methode, Produktnachweise von App-, Versand- und Supportbewertungen zu trennen.", factChecked: "Bewertungsstand geprüft am 29. August 2026 · Google Play en-US / USA", sources: ["Hacoo Trust Center", "Apple App Store UK", "Google Play USA", "Trustpilot Hacoo-Profil"] });
Object.assign(es["hacoo-reviews-2026"], { title: "Guía de QC y reseñas de Hacoo: fotos, tallas y opiniones mixtas", description: "Un método claro para separar pruebas del producto de opiniones sobre aplicación, entrega y soporte.", factChecked: "Valoraciones revisadas el 29 de agosto de 2026 · Google Play en-US / EE. UU.", sources: ["Trust Center de Hacoo", "Apple App Store UK", "Google Play EE. UU.", "Perfil Hacoo de Trustpilot"] });
Object.assign(fr["hacoo-reviews-2026"], { title: "Guide QC et avis Hacoo : photos, tailles et retours clients partagés", description: "Une méthode claire pour séparer les preuves produit des avis sur l’application, la livraison et le support.", factChecked: "Notes vérifiées le 29 août 2026 · Google Play en-US / États-Unis", sources: ["Trust Center Hacoo", "Apple App Store UK", "Google Play États-Unis", "Profil Trustpilot Hacoo"] });
Object.assign(it["hacoo-reviews-2026"], { title: "Guida Hacoo QC e recensioni: foto, taglie e feedback contrastanti", description: "Un metodo chiaro per separare le prove sul prodotto dalle opinioni su app, consegna e assistenza.", factChecked: "Valutazioni verificate il 29 agosto 2026 · Google Play en-US / USA", sources: ["Hacoo Trust Center", "Apple App Store UK", "Google Play USA", "Profilo Trustpilot Hacoo"] });

Object.assign(de["hacoo-shipping-time-cost"], { title: "Hacoo Versandzeit und Kosten: offizielle Länderangaben und Rückgabeprüfung", factChecked: "Offizielle Seiten geprüft am 28. August 2026", sources: ["Hacoo Shipping & Delivery", "Hacoo EU Help Center", "Hacoo Rückgabehilfe", "Hacoo Abrechnungsbedingungen"] });
Object.assign(es["hacoo-shipping-time-cost"], { title: "Tiempo y coste de envío Hacoo: plazos oficiales y comprobación de devoluciones", factChecked: "Páginas oficiales revisadas el 28 de agosto de 2026", sources: ["Hacoo Shipping & Delivery", "Centro de ayuda UE", "Ayuda de devoluciones", "Condiciones de facturación"] });
Object.assign(fr["hacoo-shipping-time-cost"], { title: "Délais et coûts Hacoo : fourchettes officielles et contrôle des retours", factChecked: "Pages officielles vérifiées le 28 août 2026", sources: ["Hacoo Shipping & Delivery", "Centre d’aide UE", "Aide au retour", "Conditions de facturation"] });
Object.assign(it["hacoo-shipping-time-cost"], { title: "Tempi e costi Hacoo: intervalli ufficiali e controllo dei resi", factChecked: "Pagine ufficiali verificate il 28 agosto 2026", sources: ["Hacoo Shipping & Delivery", "Centro assistenza UE", "Assistenza resi", "Condizioni di fatturazione"] });

const localizedArticleTitles = {
  de: {
    "hacoo-spreadsheet-live-source": ["Mit Hacoos eigener Beschreibung beginnen", "Verstehen, was Käufer mit „Hacoo Spreadsheet“ meinen", "Kategorien vor einzelnen Produktlinks nutzen", "Die Bild-Titel-Ziel-Regel anwenden", "Preise als datierte Referenzen behandeln", "Die gewählte Variante statt nur des ersten Fotos prüfen", "Ein Wartungsprotokoll führen", "Entdeckung und Bestellung trennen", "Nutzerbewertungen als Hinweis, nicht als Beweis nutzen", "Die letzte Prüfung vor dem Klick"],
    "hacoo-reviews-2026": ["Es gibt keine einzige Hacoo-Bewertungsnote", "App-Nutzung und Produktqualität trennen", "Hacoos eigene Vertrauensaussagen vorsichtig einordnen", "Eine mobile QC-Prüfung vorbereiten", "Mit Silhouette und Proportionen beginnen", "Von der Verarbeitung zu wiederholten Details gehen", "Größenfeedback als persönliche Erfahrung lesen", "Farb- und Materialaussagen vorsichtig bewerten", "Rückerstattungs- und Supportberichte im Kontext lesen", "Eine ausgewogene Schlussfolgerung formulieren"],
    "hacoo-shipping-time-cost": ["Hacoos veröffentlichte Zeitspannen als Orientierung nutzen", "Zuerst das Zielland dokumentieren", "Produktpreis und gelieferte Gesamtkosten trennen", "Gewichtsregeln brauchen Datum und Warnhinweis", "Bei manchen Bestellungen mit Teilpaketen rechnen", "Die Adresse sofort kontrollieren", "Tracking-Status als Beleg, nicht als Gewissheit behandeln", "Das 15-Tage-Fenster nach der Zustellung verstehen", "Erforderliche Nachweise für einen Fall dokumentieren", "Mit einer niedrigen und hohen Schätzung arbeiten", "Die abschließende Versandprüfung durchführen"],
  },
  es: {
    "hacoo-spreadsheet-live-source": ["Empieza por cómo se define Hacoo", "Entiende qué quieren decir los compradores con “Hacoo spreadsheet”", "Usa categorías antes que enlaces individuales", "Aplica la regla imagen-título-destino", "Trata los precios como referencias fechadas", "Comprueba la variante elegida, no solo la primera foto", "Mantén un registro de mantenimiento", "Separa descubrimiento y pedido", "Usa las reseñas como evidencia, no como prueba", "La comprobación final antes del clic"],
    "hacoo-reviews-2026": ["No existe una única puntuación de Hacoo", "Separa usabilidad de la app y calidad del producto", "Interpreta con cautela el lenguaje de confianza de Hacoo", "Prepara una revisión QC desde el móvil", "Empieza por silueta y proporciones", "Pasa de la construcción a los detalles repetidos", "Lee la talla como experiencia personal", "Evalúa color y material con cautela", "Lee reembolsos y soporte en su contexto", "Crea una conclusión equilibrada"],
    "hacoo-shipping-time-cost": ["Usa los plazos publicados por Hacoo como orientación", "Registra el destino antes que el precio", "Separa precio del producto y coste entregado", "Las reglas de peso necesitan fecha y advertencia", "Espera envíos parciales en algunos pedidos", "Comprueba la dirección inmediatamente", "Trata el tracking como evidencia, no como certeza", "Entiende el plazo posventa de 15 días", "Documenta las pruebas necesarias para una reclamación", "Utiliza una estimación baja y otra alta", "Haz la comprobación final del envío"],
  },
  fr: {
    "hacoo-spreadsheet-live-source": ["Commencer par la définition donnée par Hacoo", "Comprendre ce que les acheteurs appellent « Hacoo spreadsheet »", "Utiliser les catégories avant les liens individuels", "Appliquer la règle image-titre-destination", "Traiter les prix comme des références datées", "Contrôler la variante choisie, pas seulement la première photo", "Tenir un registre de maintenance", "Séparer découverte et commande", "Utiliser les avis comme indices, non comme preuves", "Le dernier contrôle avant le clic"],
    "hacoo-reviews-2026": ["Il n’existe pas une note Hacoo unique", "Séparer ergonomie de l’application et qualité produit", "Lire avec prudence le discours de confiance de Hacoo", "Préparer un contrôle QC sur mobile", "Commencer par la silhouette et les proportions", "Passer de la construction aux détails répétés", "Lire les avis de taille comme expériences personnelles", "Évaluer couleur et matière avec prudence", "Lire remboursements et support dans leur contexte", "Formuler une conclusion équilibrée"],
    "hacoo-shipping-time-cost": ["Utiliser les délais publiés par Hacoo comme repères", "Noter la destination avant le prix", "Séparer prix produit et coût livré", "Les règles de poids exigent une date et un avertissement", "Prévoir des colis partiels pour certaines commandes", "Vérifier immédiatement l’adresse", "Traiter le suivi comme un indice, non une certitude", "Comprendre le délai après-vente de 15 jours", "Documenter les preuves nécessaires à une demande", "Utiliser une estimation basse et haute", "Effectuer le dernier contrôle de livraison"],
  },
  it: {
    "hacoo-spreadsheet-live-source": ["Partire da come Hacoo descrive il servizio", "Capire cosa intendono gli acquirenti per “Hacoo spreadsheet”", "Usare le categorie prima dei singoli link", "Applicare la regola immagine-titolo-destinazione", "Trattare i prezzi come riferimenti datati", "Controllare la variante scelta, non solo la prima foto", "Tenere un registro di manutenzione", "Separare scoperta e ordine", "Usare le recensioni come indizi, non come prova", "Il controllo finale prima del clic"],
    "hacoo-reviews-2026": ["Non esiste un unico punteggio Hacoo", "Separare usabilità dell’app e qualità del prodotto", "Leggere con cautela il linguaggio di fiducia di Hacoo", "Preparare un controllo QC da mobile", "Iniziare da silhouette e proporzioni", "Passare dalla costruzione ai dettagli ripetuti", "Leggere la taglia come esperienza personale", "Valutare colore e materiali con cautela", "Leggere rimborsi e supporto nel loro contesto", "Creare una conclusione equilibrata"],
    "hacoo-shipping-time-cost": ["Usare gli intervalli pubblicati da Hacoo come guida", "Registrare la destinazione prima del prezzo", "Separare prezzo del prodotto e costo consegnato", "Le regole sul peso richiedono data e avvertenza", "Prevedere spedizioni parziali in alcuni ordini", "Controllare subito l’indirizzo", "Trattare il tracking come prova, non come certezza", "Comprendere la finestra post-vendita di 15 giorni", "Documentare le prove richieste per un reclamo", "Usare una stima bassa e una alta", "Eseguire il controllo finale della spedizione"],
  },
} as const;

const reviewTrustCaution = {
  de: "Diese Zahlen stammen von Hacoo selbst und wurden nicht unabhängig geprüft. Sie dürfen als Unternehmensaussage zitiert werden, aber nicht als externer Qualitätsnachweis. Für Käufer ist vor allem der beschriebene Bewertungsstandard nützlich: konkrete Mängel, Kontext und reale Nutzung sagen mehr aus als makellos klingendes Lob.",
  es: "Estas cifras proceden de Hacoo y no han sido auditadas de forma independiente. Pueden citarse como declaración de la empresa, pero no como prueba externa de calidad. Para el comprador resulta más útil el estándar descrito: defectos concretos, contexto y uso real aportan más que un elogio perfecto.",
  fr: "Ces chiffres sont déclarés par Hacoo et n’ont pas fait l’objet d’un audit indépendant. Ils peuvent être cités comme position de l’entreprise, jamais comme preuve externe de qualité. Pour l’acheteur, la norme décrite est plus utile : défaut précis, contexte et usage réel valent mieux qu’un éloge parfait.",
  it: "Questi dati sono dichiarati da Hacoo e non risultano verificati da un audit indipendente. Possono essere citati come posizione dell’azienda, non come prova esterna di qualità. Per chi acquista è più utile lo standard descritto: difetti specifici, contesto e uso reale informano più di un elogio perfetto.",
} as const;

const reviewConclusionExtras = {
  de: ["Schließe mit drei getrennten Ergebnissen: was die Produktfotos zeigen, welche wiederkehrenden Kundenthemen erkennbar sind und was die aktuelle offizielle Richtlinie sagt. Datiere jede Bewertungsmomentaufnahme, nenne die Quelle und zeige positive wie negative Muster, wenn die Belege geteilt sind.", "Ein nützlicher Artikel sagt dem Leser, was als Nächstes zu prüfen ist. Er verspricht weder Echtheit noch einheitliche Qualität, Lieferzeit oder garantierte Erstattung. Spezifische, aktuelle und produktbezogene Belege sind am stärksten; alles andere wird als Erfahrung, Unternehmensaussage oder unabhängige Beobachtung gekennzeichnet.", "Führe für spätere Aktualisierungen ein Änderungsprotokoll mit Note, Bewertungszahl, Beobachtungsdatum und wiederholten Problemen aus mehr als einer Quelle. Entferne Aussagen, die sich nicht mehr nachvollziehen lassen, damit ein alter Wert nicht Monate später als aktuell erscheint.", "Beachte auch die Zahl der Bewertungen hinter jeder Note. Neue Stimmen verändern ein kleines Profil stärker als eine App-Store-Seite mit Zehntausenden Bewertungen. Das Volumen ist kein Qualitätsbeweis, erklärt aber die Empfindlichkeit einer Momentaufnahme; Plattformwerte bleiben deshalb nebeneinander statt in einer Rangliste."],
  es: ["Termina con tres conclusiones separadas: qué muestran las fotos, qué temas se repiten entre clientes y qué establece la política oficial actual. Fecha cada puntuación, identifica la fuente e incluye patrones positivos y negativos cuando la evidencia esté dividida.", "Un artículo útil indica qué debe verificar el lector después. No promete autenticidad, calidad uniforme, plazo de entrega ni reembolso garantizado. La evidencia más fuerte es específica, reciente y vinculada al producto o a la política; lo demás se etiqueta como experiencia, declaración de empresa u observación independiente.", "Mantén un registro de cambios con puntuación, número de reseñas, fecha y problemas repetidos en más de una fuente. Elimina afirmaciones que ya no puedan reproducirse para que una nota antigua no aparezca meses después como evidencia actual.", "Revisa también cuántas valoraciones hay detrás de cada nota. Unas pocas opiniones nuevas mueven más un perfil pequeño que una tienda de apps con decenas de miles. El volumen no demuestra calidad, pero explica la sensibilidad de la captura; por eso las plataformas se muestran en paralelo y no como si respondieran la misma pregunta."],
  fr: ["Terminez par trois conclusions séparées : ce que montrent les photos, les thèmes clients qui se répètent et la règle officielle actuelle. Datez chaque note, identifiez sa source et présentez les tendances positives comme négatives lorsque les preuves sont partagées.", "Un article utile indique au lecteur ce qu’il doit vérifier ensuite. Il ne promet ni authenticité, ni qualité uniforme, ni délai, ni remboursement garanti. Les preuves les plus fortes sont précises, récentes et liées au produit ou à la règle ; le reste est identifié comme expérience, déclaration d’entreprise ou observation indépendante.", "Conservez un journal des mises à jour avec note, nombre d’avis, date d’observation et problème répété sur plusieurs sources. Supprimez ce qui n’est plus reproductible afin qu’une ancienne note ne soit pas présentée comme actuelle plusieurs mois plus tard.", "Examinez aussi le nombre d’avis derrière chaque moyenne. Quelques nouvelles notes déplacent davantage un petit profil qu’une page comptant des dizaines de milliers de votes. Le volume ne prouve pas la qualité, mais explique la sensibilité de l’instantané ; les plateformes restent donc côte à côte plutôt que classées comme si elles posaient la même question."],
  it: ["Concludi con tre risultati separati: ciò che mostrano le foto, i temi ricorrenti dei clienti e ciò che stabilisce la politica ufficiale corrente. Data ogni punteggio, identifica la fonte e includi segnali positivi e negativi quando le prove sono divise.", "Un articolo utile indica cosa verificare dopo. Non promette autenticità, qualità uniforme, tempi di consegna o rimborso garantito. Le prove più forti sono specifiche, recenti e legate al prodotto o alla regola; il resto viene indicato come esperienza, dichiarazione aziendale o osservazione indipendente.", "Conserva un registro degli aggiornamenti con punteggio, numero di recensioni, data e problemi ripetuti su più fonti. Rimuovi le affermazioni non più riproducibili, così un vecchio valore non viene presentato mesi dopo come prova corrente.", "Controlla anche quante valutazioni sostengono ogni media. Poche nuove opinioni spostano più un profilo piccolo che una pagina con decine di migliaia di voti. Il volume non prova la qualità, ma spiega quanto sia sensibile l’istantanea; i punteggi restano quindi affiancati e non diventano una classifica artificiale."],
} as const;

const shippingTrackingExtra = {
  de: "Speichere Tracking-Meldungen oder Screenshots mit Datum. Bei sichtbarem Schaden bleiben Außenverpackung und Etiketten erhalten. Die Hilfeseiten verlangen je nach Qualitätsmangel, Bruch, falschem oder fehlendem Artikel unterschiedliche Belege; gute Dokumentation beginnt bei der Zustellung und nicht erst nach dem Entsorgen der Verpackung.",
  es: "Guarda el texto del seguimiento o capturas con fecha. Si existe daño visible, conserva embalaje exterior y etiquetas. La ayuda solicita pruebas distintas para calidad, rotura, artículo equivocado o ausente; una buena documentación empieza en la entrega y no después de tirar el embalaje.",
  fr: "Conservez le texte du suivi ou des captures avec la date. En cas de dommage visible, gardez emballage extérieur et étiquettes. L’aide demande des preuves différentes selon défaut, casse, mauvais article ou article manquant ; la documentation commence à la livraison, avant de jeter l’emballage.",
  it: "Salva il testo del tracking o screenshot con data. In caso di danno visibile conserva imballaggio esterno ed etichette. L’assistenza richiede prove diverse per difetti, rotture, articolo errato o mancante; una buona documentazione inizia alla consegna, prima di eliminare l’imballaggio.",
} as const;

const shippingFinalParagraphs = {
  de: ["Unmittelbar vor dem Checkout werden Live-Produktpreis, Ziel, Versandbetrag, Währung, Adresse, angezeigter Bereich und aktuelle Nachverkaufsregeln kontrolliert und datiert. Bei mehreren Artikeln wird zusätzlich geprüft, ob Vorbestellungen oder Rückstände genannt sind; nach dem Versand erhält jedes Paket eine eigene Trackingzeile.", "Erstelle eine Bestellzeitleiste mit Zahlung, Versand, erstem Carrier-Scan und Zustellung. So lassen sich Bearbeitungs- und Transportverzögerungen trennen. Liegt ein Paket außerhalb des veröffentlichten Bereichs, vergleiche zuerst den letzten Status mit der auftragsbezogenen Schätzung. Persönliche Adressen, Telefonnummern, vollständige Trackingnummern und Zahlungsdaten gehören nie in öffentliche Reviews.", "Hacoos veröffentlichte Zeitspannen sind für die Planung nützlich, werden aber als Richtwerte und nicht als garantierte Termine beschrieben. Eine verantwortliche Versandseite nennt die offiziellen Bereiche, das Prüfdatum und die verbleibende Unsicherheit, ohne denselben Verlauf für jedes Paket zu versprechen."],
  es: ["Justo antes del checkout confirma precio live, destino, importe de envío, moneda, dirección, rango y norma posventa vigente, y guarda la fecha. Si hay varios artículos, comprueba preventas o pendientes; después de la expedición, sigue cada paquete por separado.", "Crea una cronología con pago, expedición, primer escaneo y entrega. Así se distingue una demora de procesamiento de otra del transportista. Si el paquete supera el rango publicado, compara el último evento con la estimación del pedido. Nunca publiques dirección, teléfono, tracking completo ni datos de pago en una reseña.", "Los plazos publicados por Hacoo sirven para planificar, pero la empresa los describe como orientativos y no garantizados. Una guía responsable reproduce los rangos oficiales, indica la fecha de la fuente y mantiene visible la incertidumbre sin prometer el mismo recorrido para todos los paquetes."],
  fr: ["Juste avant le checkout, confirmez prix live, destination, montant de livraison, devise, adresse, délai affiché et règle après-vente actuelle, puis notez la date. Pour plusieurs articles, vérifiez précommandes ou attente ; après expédition, suivez chaque colis séparément.", "Créez une chronologie avec paiement, expédition, premier scan et livraison. Elle distingue retard de traitement et retard du transporteur. Si le colis dépasse la fourchette publiée, comparez le dernier événement à l’estimation de la commande. Ne publiez jamais adresse, téléphone, suivi complet ni paiement dans un avis.", "Les délais publiés par Hacoo aident à planifier, mais l’entreprise les présente comme indicatifs et non garantis. Un guide responsable reproduit les fourchettes officielles, date la source et laisse l’incertitude visible sans promettre le même parcours pour chaque colis."],
  it: ["Subito prima del checkout conferma prezzo live, destinazione, importo di spedizione, valuta, indirizzo, intervallo e regola post-vendita corrente, salvando la data. Con più articoli controlla eventuali preordini o arretrati; dopo la partenza segui ogni pacco separatamente.", "Crea una sequenza con pagamento, spedizione, prima scansione e consegna. Così distingui ritardo di elaborazione e transito. Se il pacco supera l’intervallo pubblicato, confronta l’ultimo evento con la stima dell’ordine. Non pubblicare indirizzo, telefono, tracking completo o dati di pagamento in una recensione.", "Gli intervalli pubblicati da Hacoo sono utili per pianificare, ma l’azienda li descrive come indicativi e non garantiti. Una guida responsabile riporta le finestre ufficiali, data la fonte e lascia visibile l’incertezza senza promettere lo stesso percorso per ogni pacco."],
} as const;

function rebuildLocalizedArticles(lang: "de" | "es" | "fr" | "it") {
  const localized = { de, es, fr, it }[lang];
  const routePages = localizedPages[lang];

  for (const slug of articleSlugs) {
    const baseSections = localized[slug].sections;
    const extra = translatedArticleExpansions[lang][slug];
    const parity = translatedArticleParity[lang][slug];
    const titles = localizedArticleTitles[lang][slug];
    let bodies: string[][];

    if (slug === "hacoo-spreadsheet-live-source") {
      bodies = [extra[0].body, baseSections[0].body, baseSections[1].body, baseSections[2].body, [extra[1].body[0], baseSections[3].body[1]], [baseSections[3].body[0], extra[1].body[1]], parity.body.slice(0, 2), extra[2].body, extra[3].body, extra[4].body];
      bodies[1][0] = `${bodies[1][0]} ${routePages.spreadsheet.sections[0].body}`;
      bodies[1][1] = `${bodies[1][1]} ${routePages.spreadsheet.sections[1].body}`;
      bodies[2][0] = `${bodies[2][0]} ${routePages.finds.sections[0].body}`;
      bodies[2][1] = `${bodies[2][1]} ${routePages.guide.sections[0].body} ${routePages.finds.intro}`;
      bodies[3][1] = `${bodies[3][1]} ${routePages.spreadsheet.sections[2].body} ${routePages.guide.sections[1].body}`;
      bodies[4][1] = `${bodies[4][1]} ${routePages.shipping.sections[0].body} ${routePages.shipping.sections[3].body}`;
      bodies[5][0] = `${bodies[5][0]} ${routePages.guide.sections[2].body}`;
      bodies[6][0] = `${bodies[6][0]} ${baseSections[4].body[0] ?? ""}`.trim();
      bodies[6][1] = `${bodies[6][1]} ${baseSections[4].body[1] ?? ""}`.trim();
      bodies[9][0] = `${bodies[9][0]} ${baseSections[5].body[0] ?? ""} ${baseSections[6].body[0] ?? ""}`.trim();
      bodies[9][1] = `${bodies[9][1]} ${baseSections[5].body[1] ?? ""} ${baseSections[6].body[1] ?? ""} ${parity.body[2] ?? ""}`.trim();
    } else if (slug === "hacoo-reviews-2026") {
      bodies = [extra[0].body, extra[1].body, [extra[2].body[0], reviewTrustCaution[lang]], baseSections[0].body, baseSections[1].body, [baseSections[2].body[0], baseSections[3].body[0]], baseSections[4].body, baseSections[5].body, [extra[2].body[1], extra[4].body[1]], [...reviewConclusionExtras[lang]]];
      bodies[3][0] = `${bodies[3][0]} ${extra[3].body[0]}`.trim();
      bodies[3][1] = `${bodies[3][1]} ${extra[3].body[1]}`.trim();
      bodies[4][0] = `${bodies[4][0]} ${routePages.qc.sections[0].body}`.trim();
      bodies[4][1] = `${bodies[4][1]} ${routePages.qc.intro} ${routePages.qc.sections[1].body}`.trim();
      bodies[5][0] = `${bodies[5][0]} ${baseSections[2].body[1] ?? ""}`.trim();
      bodies[5][1] = `${bodies[5][1]} ${baseSections[3].body[1] ?? ""}`.trim();
      bodies[6][0] = `${bodies[6][0]} ${extra[4].body[0]}`.trim();
      bodies[6][1] = `${bodies[6][1]} ${routePages.qc.sections[2].body} ${pageParitySupplements[lang].qc}`.trim();
      bodies[7][0] = `${bodies[7][0]} ${routePages.qc.sections[0].body}`.trim();
      bodies[7][1] = `${bodies[7][1]} ${routePages.qc.sections[3].body} ${extra[4].body[0]}`.trim();
      bodies[9][0] = `${bodies[9][0]} ${baseSections[6].body[0] ?? ""}`.trim();
      parity.body.forEach((paragraph, index) => {
        bodies[9][index % bodies[9].length] = `${bodies[9][index % bodies[9].length]} ${paragraph}`.trim();
      });
      bodies[9][2] = `${bodies[9][2]} ${routePages.articles.intro}`.trim();
    } else {
      bodies = [extra[0].body, baseSections[1].body, baseSections[0].body, extra[1].body, [extra[2].body[0], parity.body[0]], [extra[2].body[1], extra[5].body[0]], [extra[5].body[0], shippingTrackingExtra[lang]], [extra[3].body[0], baseSections[4].body[0]], [extra[3].body[1], parity.body[1]], extra[4].body, [...shippingFinalParagraphs[lang]]];
      bodies[1][0] = `${bodies[1][0]} ${routePages.shipping.intro}`.trim();
      bodies[1][1] = `${bodies[1][1]} ${routePages.shipping.sections[1].body}`.trim();
      bodies[2][0] = `${bodies[2][0]} ${routePages.shipping.sections[0].body}`.trim();
      bodies[2][1] = `${bodies[2][1]} ${routePages.shipping.sections[3].body} ${pageParitySupplements[lang].shipping}`.trim();
      bodies[3][0] = `${bodies[3][0]} ${baseSections[2].body[0] ?? ""}`.trim();
      bodies[3][1] = `${bodies[3][1]} ${baseSections[2].body[1] ?? ""}`.trim();
      bodies[9][0] = `${bodies[9][0]} ${baseSections[5].body[0] ?? ""}`.trim();
      bodies[9][1] = `${bodies[9][1]} ${baseSections[5].body[1] ?? ""}`.trim();
      bodies[7][1] = `${bodies[7][1]} ${routePages.shipping.sections[2].body}`.trim();
      bodies[10][0] = `${bodies[10][0]} ${baseSections[3].body[0] ?? ""}`.trim();
      bodies[10][1] = `${bodies[10][1]} ${baseSections[3].body[1] ?? ""} ${baseSections[6].body[0] ?? ""}`.trim();
      bodies[10][2] = `${bodies[10][2]} ${baseSections[6].body[1] ?? ""} ${parity.body[2] ?? ""}`.trim();
    }

    localized[slug].sections = bodies.map((body, index) => ({ title: titles[index], body: body.filter(Boolean) }));
  }
}

for (const lang of ["de", "es", "fr", "it"] as const) rebuildLocalizedArticles(lang);

export const articles: Record<Lang, Record<ArticleSlug, Article>> = { en, de, es, fr, it };
