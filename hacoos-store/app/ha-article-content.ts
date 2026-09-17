import type { Locale } from "./site-data";
import type { Article } from "./article-content";

const en: Article = {
  minutes: 11,
  sections: [
    {
      heading: "Choose the entry point from the information you already have",
      paragraphs: [
        "A Hacoo spreadsheet, a finds page and a category route solve different starting problems. Use the spreadsheet when you already have an identifier, exact phrase or saved row and need a compact scan across fields. Use finds when you want a small set of currently presented product routes with images and source details. Use categories when you know the product type but not the item. This independent link atlas is not an official Hacoo spreadsheet. Hacoo currently describes itself as a lifestyle-discovery and content-sharing community, so every atlas route is an editorial navigation aid rather than platform inventory or a product guarantee.",
        "Before clicking, write the information state in one line: known ID, known image, known category, descriptive clue or only a broad idea. That line determines the shortest route. Starting from the wrong surface creates unnecessary tabs and encourages weak matching. A user with an ID should not browse an entire category; a user with only ‘everyday shoulder bag’ should not pretend one spreadsheet row is already verified.",
        "Use a simple routing card before the first click. Write the query, the starting evidence, the chosen surface, the expected output and a stop condition. For example: ‘Query: black everyday crossbody; evidence: category only; start: bags category; output: three routes with stated dimensions and closures; stop: three comparable candidates or no route with both must-have fields.’ The card keeps the task in the link-atlas lane. It prevents a discovery session from drifting into unsupported quality rankings, platform trust conclusions, shipping promises or an endless collection of attractive cards.",
      ],
    },
    {
      heading: "Use the spreadsheet for exact recovery and field scanning",
      paragraphs: [
        "The spreadsheet view is strongest when the task is recovery. Search the exact source ID, a distinctive neutral phrase or a saved category label. Read across one row: image, identifier, category, source price and checked context. Then open the destination and confirm those fields again. A row is a launch record, not evidence that current availability, price or options remain unchanged.",
        "Avoid broad hype terms inside the sheet. ‘Best finds’ produces mixed categories and no objective stop rule. Combine a noun with one observable clue: grey low-top shoe, zip hoodie with chest measurement, or tote with removable strap. If several rows look similar, keep the IDs visible and open only three. This prevents a detail from one route being remembered as part of another.",
      ],
    },
    {
      heading: "Use finds for a small current-facing discovery shelf",
      paragraphs: [
        "The finds surface is useful when you want to browse a limited editorial shelf rather than the whole atlas. Each card should give enough identity context—lead image, title, category, ID and source amount—to decide whether opening the route is worthwhile. It is not a ranking of quality and it does not authenticate what is shown. The value is reduced discovery friction and a visible match record.",
        "Choose finds when at least one displayed card genuinely fits the need. Do not click through every card merely because the shelf is short. Compare the card with your requirement, discard category or use-case mismatches, then open the strongest one or two. Recheck the destination's current first image and selected option before copying any specification into a shortlist.",
      ],
    },
    {
      heading:
        "Use categories when the product type is known but the item is not",
      paragraphs: [
        "Category-first navigation keeps relevant fields in view. Shoes need length, width and use surface; bottoms need waist method, rise and inseam; bags need dimensions, closure and capacity. A broad search across all products mixes those decision fields. Start with the closest category, then add a neutral feature or intended use. Categories are especially efficient on mobile because they reduce repeated backtracking.",
        "A category route should not be mistaken for a recommendation. It narrows vocabulary and candidates. If an item appears in an ambiguous category, follow its function rather than its marketing name. A small crossbody used for commuting belongs in a bag-capacity decision even if a card calls it an accessory. Record the category choice so a later recheck follows the same route.",
      ],
    },
    {
      heading: "Apply a three-question routing decision",
      paragraphs: [
        "First ask: do I have an exact ID or saved row? If yes, begin with the spreadsheet. Second: do I want to review a small set of current editorial cards? If yes, use finds. Third: do I know the product type and its important attributes but not the item? Use categories. If none applies, convert the broad idea into a category and two observable clues before opening anything.",
        "The routes can hand off to one another. A category may reveal a useful card; the card may provide an ID; the ID can be stored in the spreadsheet record. The handoff should move toward greater specificity. If it moves back into a broader feed without a reason, stop. That usually signals category drift rather than useful research.",
      ],
    },
    {
      heading: "Carry one identity row across every handoff",
      paragraphs: [
        "Keep the same five fields from start to destination: neutral description, final URL, source ID, first-image match and exact option. Add the checked date. This identity row prevents a spreadsheet entry, find card and category result from being treated as three separate products or, worse, three different products from being merged into one memory.",
        "Do not copy ratings, measurements or material claims until identity is stable. When a route redirects or the image changes, mark the row unresolved and begin a new candidate record. A replacement route is not a continuation merely because it looks similar. The current page controls current details; the atlas only helps you reach and organize it.",
      ],
    },
    {
      heading: "Use a stop rule instead of opening more tabs",
      paragraphs: [
        "Set a route-specific stop rule. For spreadsheet recovery: stop after the exact ID is found and destination identity passes. For finds: stop after two cards meet the written need. For categories: stop after three candidates share the same intended use and comparable fields. More tabs increase mix-ups without improving the decision automatically.",
        "Archive candidates that fail category, identity or one must-have attribute. Keep missing data visible. A blank measurement is not a reason to copy a number from a similar row. When the remaining question belongs to QC, sizing or current shipping information, move to that guide instead of stretching the link-atlas workflow into a policy or quality conclusion.",
      ],
    },
    {
      heading: "Complete the destination check and save the route",
      paragraphs: [
        "At the final route, compare title, first image, ID, selected option and current displayed source details. Check the real destination before acting and keep the atlas independent from checkout. Do not treat approximate price, availability or a checked date as a promise. Hacoo's independent creator context also means a creator statement should remain attributed, not promoted into an official platform claim.",
        "Save the path you used—spreadsheet, finds or category—plus the final route and date. Classify the result as matched, needs one check or archive. A matched result means identity and option are consistent, not that quality, authenticity, delivery or after-sales outcome is guaranteed. The best starting point is the one that reaches a verifiable candidate with the fewest assumptions.",
      ],
    },
  ],
  takeaways: [
    "Use spreadsheet for IDs and saved rows.",
    "Use finds for a small current-facing shelf.",
    "Use categories for a known product type.",
    "Carry one identity row across handoffs.",
    "Stop when the route reaches a verifiable candidate.",
  ],
};

const meta = {
  de: [
    "Den richtigen Einstieg wählen",
    "Tabelle für genaue Wiederaufnahme",
    "Funde für eine kleine Auswahl",
    "Kategorien bei bekanntem Produkttyp",
    "Drei Routingfragen",
    "Eine Identitätszeile behalten",
    "Stoppregel statt weiterer Tabs",
    "Ziel prüfen und Route speichern",
  ],
  fr: [
    "Choisir l'entrée selon les informations",
    "Le tableur pour retrouver exactement",
    "Les trouvailles pour une petite sélection",
    "Les catégories quand le type est connu",
    "Trois questions d'orientation",
    "Garder une ligne d'identité",
    "Une règle d'arrêt plutôt que des onglets",
    "Vérifier la destination et enregistrer",
  ],
  es: [
    "Elige la entrada según tus datos",
    "Usa la hoja para recuperar exactamente",
    "Usa hallazgos para una selección pequeña",
    "Usa categorías si conoces el tipo",
    "Tres preguntas de ruta",
    "Mantén una fila de identidad",
    "Regla de parada en vez de pestañas",
    "Comprueba destino y guarda la ruta",
  ],
  it: [
    "Scegli l'ingresso dai dati disponibili",
    "Usa il foglio per il recupero esatto",
    "Usa i finds per una piccola selezione",
    "Usa categorie se conosci il tipo",
    "Tre domande di percorso",
    "Mantieni una riga di identità",
    "Regola di stop invece di schede",
    "Controlla destinazione e salva",
  ],
} as const;
const body = {
  de: [
    "Tabelle, Funde und Kategorien lösen unterschiedliche Startprobleme. Die Tabelle passt zu ID oder Zeile, Funde zu einer kleinen Auswahl, Kategorien zu einem bekannten Produkttyp. Der Atlas ist unabhängig und kein offizieller Hacoo-Bestand.",
    "Suche ID oder neutrale Phrase, lies Bild, Kennung, Kategorie, Quellpreis und Datum und prüfe das Ziel erneut. Eine Zeile ist ein Startpunkt, keine Verfügbarkeitsgarantie.",
    "Funde reduzieren Reibung durch wenige Karten mit Identität. Sie ranken keine Qualität. Öffne nur Karten, die den vorher notierten Bedarf erfüllen.",
    "Kategorie zuerst hält passende Felder sichtbar: Schuhe brauchen Länge und Breite, Hosen Bund und Schritt, Taschen Maße und Verschluss. Kategorien sind keine Empfehlungen.",
    "ID vorhanden: Tabelle. Kleine aktuelle Auswahl gewünscht: Funde. Produkttyp bekannt: Kategorie. Fehlt alles, formuliere Kategorie plus zwei sichtbare Merkmale.",
    "Führe Beschreibung, Ziel-URL, ID, erstes Bild, Option und Datum durch jeden Übergang. Erst danach Maße, Material oder Bewertungen kopieren.",
    "Bei ID-Suche nach bestätigtem Ziel stoppen, bei Funden nach zwei passenden Karten, bei Kategorien nach drei vergleichbaren Kandidaten. Lücken bleiben leer.",
    "Am Ziel Titel, Bild, ID, Option und aktuelle Angaben prüfen. Speichere Route und Ergebnis als passend, eine Prüfung fehlt oder archivieren; keine Qualitäts- oder Liefergarantie.",
  ],
  fr: [
    "Tableur, trouvailles et catégories répondent à des départs différents. Le tableur sert à l'identifiant, les trouvailles à une petite sélection, les catégories à un type connu. L'atlas est indépendant.",
    "Recherchez identifiant ou phrase neutre, lisez image, catégorie, prix source et date, puis vérifiez la destination. Une ligne n'est pas une garantie de disponibilité.",
    "Les trouvailles réduisent la friction avec quelques cartes identifiables ; elles ne classent pas la qualité. Ouvrez seulement celles qui répondent au besoin écrit.",
    "La catégorie conserve les bons champs : longueur et largeur des chaussures, taille et fourche des bas, dimensions et fermeture des sacs. Ce n'est pas une recommandation.",
    "Identifiant connu : tableur. Petite sélection : trouvailles. Type connu : catégorie. Sinon, formulez type et deux indices visibles.",
    "Gardez description, URL, identifiant, première image, option et date à chaque passage. Copiez mesures ou matière seulement après identité stable.",
    "Arrêtez après le bon identifiant, deux cartes pertinentes ou trois candidats comparables. Laissez les données manquantes visibles.",
    "À la destination, vérifiez titre, image, identifiant, option et données actuelles. Enregistrez route et résultat sans garantie de qualité ou livraison.",
  ],
  es: [
    "Hoja, hallazgos y categorías resuelven inicios distintos. La hoja sirve para ID, hallazgos para una selección pequeña y categorías para un tipo conocido. El atlas es independiente.",
    "Busca ID o frase neutral, lee imagen, categoría, precio original y fecha y verifica el destino. Una fila no garantiza disponibilidad.",
    "Hallazgos reduce fricción con pocas tarjetas identificables; no clasifica calidad. Abre solo las que cumplen la necesidad escrita.",
    "La categoría mantiene campos relevantes: largo y ancho de zapatos, cintura y tiro de pantalones, medidas y cierre de bolsos. No es recomendación.",
    "ID conocido: hoja. Selección pequeña: hallazgos. Tipo conocido: categoría. Si no, escribe tipo y dos pistas visibles.",
    "Mantén descripción, URL, ID, primera imagen, opción y fecha en cada paso. Copia medidas o material solo tras estabilizar identidad.",
    "Para al confirmar el ID, tras dos tarjetas útiles o tres candidatos comparables. Deja vacíos visibles.",
    "En el destino confirma título, imagen, ID, opción y datos actuales. Guarda ruta y resultado sin prometer calidad ni entrega.",
  ],
  it: [
    "Foglio, finds e categorie risolvono partenze diverse. Il foglio serve per ID, i finds per una selezione piccola, le categorie per un tipo noto. L'atlante è indipendente.",
    "Cerca ID o frase neutra, leggi immagine, categoria, prezzo e data, poi verifica la destinazione. Una riga non garantisce disponibilità.",
    "I finds riducono attrito con poche schede identificabili; non classificano qualità. Apri solo quelle coerenti con il bisogno scritto.",
    "La categoria mantiene i campi giusti: lunghezza e larghezza scarpe, vita e cavallo pantaloni, misure e chiusura borse. Non è raccomandazione.",
    "ID noto: foglio. Piccola selezione: finds. Tipo noto: categoria. Altrimenti scrivi tipo e due indizi visibili.",
    "Mantieni descrizione, URL, ID, prima immagine, opzione e data in ogni passaggio. Copia misure o materiale solo dopo identità stabile.",
    "Fermati dopo ID confermato, due schede utili o tre candidati comparabili. Lascia visibili i dati mancanti.",
    "Alla destinazione controlla titolo, immagine, ID, opzione e dati attuali. Salva percorso e risultato senza promettere qualità o consegna.",
  ],
} as const;

const addenda = {
  de: " Quelle, Datum und Unsicherheit bleiben Teil des Datensatzes.",
  fr: " La source, la date et l'incertitude restent dans la fiche.",
  es: " La fuente, la fecha y la incertidumbre siguen dentro del registro.",
  it: " Fonte, data e incertezza restano nella scheda.",
};

export const haArticle: Record<Locale, Article> = {
  en,
  ...(Object.fromEntries(
    (Object.keys(meta) as Array<keyof typeof meta>).map((locale) => [
      locale,
      {
        minutes: 11,
        sections: meta[locale].map((heading, i) => ({
          heading,
          paragraphs: [body[locale][i], body[locale][i] + addenda[locale]],
        })),
        takeaways: en.takeaways,
      },
    ]),
  ) as Record<Exclude<Locale, "en">, Article>),
};
