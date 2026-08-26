import {
  categories,
  faqs,
  products,
  type Locale,
} from "@/lib/site-data";
import { seoArticles } from "@/lib/seo-articles";

const articleOrder = ["hacoo-spreadsheet-guide", "hacoo-reviews", "hacoo-qc-guide", "hacoo-shipping-guide"] as const;
const orderedArticles = (locale: Locale) => articleOrder.map((id) => seoArticles[locale].find((article) => article.id === id)!);

type UiCopy = {
  selectedReferences: string;
  object: string;
  paperNote: [string, string];
  signals: [string, string, string, string];
  kickers: [string, string, string, string, string];
  methodCards: Array<[string, string]>;
  libraryPrefix: string;
  searchHelp: string;
  entryPoints: string;
  editorialSteps: Array<[string, string]>;
  sourceNote: [string, string];
  articleLibrary: [string, string, string];
  guideHub: [string, string, string];
  guideSteps: Array<[string, string]>;
  onThisPage: string;
  fieldNote: string;
  completeMethod: string;
  qcCheckpoints: Array<[string, string]>;
  shippingBoard: Array<[string, string, string]>;
  shippingWarning: [string, string];
  independent: string;
  backToArticles: string;
};

type TextPair = [string, string];
type CardText = [string, string, string];
type GuideText = { title: string; standfirst: string; paragraphs: string[] };

type LocaleText = {
  ui: UiCopy;
  categories: TextPair[];
  products: CardText[];
  faqs: TextPair[];
  cards: CardText[];
  guides: GuideText[];
};

const enUi: UiCopy = {
  selectedReferences: "Selected product references",
  object: "OBJECT",
  paperNote: ["Search less.", "Inspect more."],
  signals: ["live categories", "complete languages", "before commitment", "source-page links"],
  kickers: ["01 / INDEX", "02 / CATEGORIES", "03 / METHOD", "04 / SEO ARTICLES", "05 / QUESTIONS"],
  methodCards: [
    ["Find the live source", "Keep the product page, variant and date together. A saved image alone is not a verifiable reference."],
    ["Compare real evidence", "Use measurements, current photos and construction details instead of trusting labels or popularity."],
    ["Resolve uncertainty", "Ask one precise question or request one targeted photo before the next irreversible step."],
  ],
  libraryPrefix: "HACOOS FIELD LIBRARY",
  searchHelp: "Search opens the current source catalogue. Use short category or product terms, then verify the exact listing.",
  entryPoints: "ENTRY POINTS",
  editorialSteps: [
    ["Start broad", "Learn how the live catalogue names the category before you add style, material or model words."],
    ["Save the source", "Record the product URL, variant and date together. Pages can change after you first see them."],
    ["Shortlist three", "Compare evidence and delivered cost. Stop searching when three options satisfy the same brief."],
  ],
  sourceNote: ["Every card opens a live source page", "Re-check the title, images, variant and availability before relying on a saved reference."],
  articleLibrary: ["SEO ARTICLE LIBRARY", "Four independent articles", "Each article has its own indexable URL, full language version and a focused search intent."],
  guideHub: ["DECISION PATH", "Use the guides in the right order", "Move from discovery to evidence, sizing and parcel planning without skipping the decision points that matter."],
  guideSteps: [
    ["Define the brief", "Write down use, fit, material and the detail you will not compromise on."],
    ["Verify the listing", "Keep the current source, variant, measurements and photo evidence together."],
    ["Review QC", "Separate visible facts from assumptions and request only the missing evidence."],
    ["Plan delivery", "Compare delivered cost, chargeable weight, protection and route conditions."],
  ],
  onThisPage: "ON THIS PAGE",
  fieldNote: "SEO ARTICLE",
  completeMethod: "COMPLETE METHOD",
  qcCheckpoints: [
    ["Identity", "Confirm colour, model, size and variant before judging details."],
    ["Silhouette", "Check overall proportion from centred front, back and side views."],
    ["Measure", "Ask for a visible tape and consistent measurement landmarks."],
    ["Material", "Compare texture, grain, sheen and colour across several areas."],
    ["Construction", "Follow seams, closures, edge finishing and stress points."],
    ["Decision", "Classify each issue by severity and request only missing evidence."],
  ],
  shippingBoard: [
    ["ACTUAL WEIGHT", "Item + packing", "Useful for dense, compact goods."],
    ["VOLUMETRIC WEIGHT", "Length × width × height", "Can control the charge for large, light parcels."],
    ["DELIVERED COST", "Product + route + risk", "The number to compare, not the listing price alone."],
  ],
  shippingWarning: ["Rules change by destination and route", "Verify current restrictions, taxes, insurance and carrier terms immediately before shipment. This library does not provide customs or legal advice."],
  independent: "Independent by design",
  backToArticles: "Back to all articles",
};

const de: LocaleText = {
  ui: {
    selectedReferences: "Ausgewählte Produktreferenzen",
    object: "OBJEKT",
    paperNote: ["Weniger suchen.", "Genauer prüfen."],
    signals: ["aktive Kategorien", "vollständige Sprachen", "vor der Entscheidung", "Links zu Quellseiten"],
    kickers: ["01 / INDEX", "02 / KATEGORIEN", "03 / METHODE", "04 / SEO-ARTIKEL", "05 / FRAGEN"],
    methodCards: [
      ["Die aktive Quelle finden", "Produktseite, Variante und Datum zusammen speichern. Ein einzelnes Bild ist keine überprüfbare Referenz."],
      ["Echte Belege vergleichen", "Maße, aktuelle Fotos und Verarbeitungsdetails nutzen, statt Etiketten oder Beliebtheit zu vertrauen."],
      ["Unsicherheit klären", "Vor dem nächsten unumkehrbaren Schritt eine präzise Frage stellen oder ein gezieltes Foto anfordern."],
    ],
    libraryPrefix: "HACOOS FELDBIBLIOTHEK",
    searchHelp: "Die Suche öffnet den aktuellen Quellkatalog. Kurze Produkt- oder Kategoriebegriffe verwenden und danach den genauen Eintrag prüfen.",
    entryPoints: "EINSTIEGE",
    editorialSteps: [
      ["Breit beginnen", "Zuerst verstehen, wie der Live-Katalog die Kategorie benennt, dann Stil, Material oder Modell ergänzen."],
      ["Quelle speichern", "Produkt-URL, Variante und Datum zusammen festhalten. Seiten können sich später ändern."],
      ["Drei auswählen", "Belege und gelieferte Gesamtkosten vergleichen. Die Suche beenden, sobald drei Optionen denselben Kriterien entsprechen."],
    ],
    sourceNote: ["Jede Karte öffnet eine aktive Quellseite", "Titel, Bilder, Variante und Verfügbarkeit erneut prüfen, bevor eine gespeicherte Referenz verwendet wird."],
    articleLibrary: ["SEO-ARTIKELBIBLIOTHEK", "Vier unabhängige Artikel", "Jeder Artikel besitzt eine eigene indexierbare URL, eine vollständige Sprachversion und eine klar abgegrenzte Suchintention."],
    guideHub: ["ENTSCHEIDUNGSWEG", "Die Ratgeber in der richtigen Reihenfolge nutzen", "Von der Entdeckung über Belege und Größen bis zur Paketplanung gehen, ohne wichtige Entscheidungspunkte zu überspringen."],
    guideSteps: [
      ["Anforderungen definieren", "Nutzung, Passform, Material und das nicht verhandelbare Detail notieren."],
      ["Eintrag prüfen", "Aktuelle Quelle, Variante, Maße und Fotobelege zusammenhalten."],
      ["QC bewerten", "Sichtbare Fakten von Annahmen trennen und nur fehlende Belege anfordern."],
      ["Lieferung planen", "Gesamtkosten, abrechenbares Gewicht, Schutz und Routenbedingungen vergleichen."],
    ],
    onThisPage: "AUF DIESER SEITE",
    fieldNote: "SEO-ARTIKEL",
    completeMethod: "VOLLSTÄNDIGE METHODE",
    qcCheckpoints: [
      ["Identität", "Farbe, Modell, Größe und Variante bestätigen, bevor Details bewertet werden."],
      ["Silhouette", "Gesamtproportion anhand gerader Vorder-, Rück- und Seitenansichten prüfen."],
      ["Messen", "Ein sichtbares Maßband und einheitliche Messpunkte anfordern."],
      ["Material", "Textur, Körnung, Glanz und Farbe an mehreren Stellen vergleichen."],
      ["Verarbeitung", "Nähte, Verschlüsse, Kanten und belastete Punkte systematisch verfolgen."],
      ["Entscheidung", "Jeden Befund nach Schwere einordnen und nur fehlende Belege anfordern."],
    ],
    shippingBoard: [
      ["TATSÄCHLICHES GEWICHT", "Artikel + Verpackung", "Relevant für dichte, kompakte Waren."],
      ["VOLUMENGEWICHT", "Länge × Breite × Höhe", "Kann bei großen, leichten Paketen die Berechnung bestimmen."],
      ["GESAMTKOSTEN", "Produkt + Route + Risiko", "Diese Zahl vergleichen, nicht nur den Listenpreis."],
    ],
    shippingWarning: ["Regeln unterscheiden sich nach Ziel und Route", "Aktuelle Beschränkungen, Steuern, Versicherung und Transportbedingungen direkt vor dem Versand prüfen. Diese Bibliothek bietet keine Zoll- oder Rechtsberatung."],
    independent: "Bewusst unabhängig",
    backToArticles: "Zurück zu allen Artikeln",
  },
  categories: [
    ["Schuhe", "Court-, Lauf- und Alltagssilhouetten"], ["Hoodies", "Referenzen für Gewicht, Form und Stoff"],
    ["T-Shirts", "Prints, Basics und saisonale Schichten"], ["Jacken", "Außenschichten und technische Formen"],
    ["Hosen & Shorts", "Passformorientierte Unterteile und Sets"], ["Kopfbedeckungen", "Caps, Strick und abschließende Details"],
    ["Accessoires", "Taschen, Hüllen, Schmuck und Uhren"], ["Elektronik", "Kleine Geräte und Alltagsnutzen"],
  ],
  products: [
    ["Performance-Courtschuh", "Schuhe", "Referenz für Form, Außensohle und Dämpfung"],
    ["Hoodie im Archivschnitt", "Hoodies", "Referenz für Grafikplatzierung und Stoffgewicht"],
    ["Strukturierte Alltagstasche", "Accessoires", "Referenz für Beschläge und Konstruktion"],
    ["Statement-Uhr", "Accessoires", "Referenz für Zifferblatt, Fassung und Schließe"],
    ["Praktische Handyhülle", "Accessoires", "Referenz für Oberfläche und Gerätepassform"],
    ["Minimalistisches Alltagsaccessoire", "Accessoires", "Referenz für Material und Details"],
  ],
  faqs: [
    ["Ist Hacoos.org die offizielle Hacoo-Website?", "Nein. Hacoos.org ist ein unabhängiger Informationsindex. Hacoo beschreibt sich als globale Community zum Teilen von Inhalten; diese Bibliothek ist ein eigenständiges Recherche- und Navigationsprojekt."],
    ["Verkauft oder versendet diese Website Produkte?", "Nein. Sie veröffentlicht redaktionellen Kontext und Links zu aktiven Referenzseiten. Kauf, Zahlung, Verkäuferkontakt, Prüfung und Versand finden an anderer Stelle statt."],
    ["Warum kann sich eine Produktseite nach dem Speichern ändern?", "Der Quellkatalog ist aktiv. Titel, Bilder, Verfügbarkeit, Preise und Kaufoptionen können sich ändern. Die Quellseite vor einer Entscheidung erneut öffnen."],
    ["Was sollte ich vor der Nutzung einer Referenz prüfen?", "Genaue Variante, Größentabelle, Material, Verkäuferhistorie, aktuelle Fotos, Rückgabebedingungen und gelieferte Gesamtkosten bestätigen. Ein nützlicher Link ist ein Ausgangspunkt, kein Qualitätsbeweis."],
    ["Ist ein Hacoo Spreadsheet ein offizieller Hacoo-Katalog?", "Nicht automatisch. Hacoo beschreibt sich aktuell als Content-Community; Tabellen sind häufig unabhängige Sammlungen. Eigentümer, Aktualisierungsdatum und Ziel prüfen."],
    ["Ist Hacoo seriös?", "Hacoo ist eine reale, aktuell gelistete App mit offiziellen Seiten und umfangreicher öffentlicher Bewertungshistorie. Das garantiert keinen bestimmten Creator, Artikel, Versand oder Erstattung. Prüfe die genaue Transaktion in deiner Region."],
    ["Warum unterscheiden sich Hacoo-Bewertungen?", "Stores und Plattformen decken andere Regionen, Nutzer, Zeiten und Berechnungen ab. Am 26. August 2026 zeigten Apple Portugal, Google Play und Trustpilot deutlich verschiedene Werte; Quelle und Datum gehören immer dazu."],
    ["Hat jeder Hacoo-Link QC-Fotos oder einen festen Versandpreis?", "Nein. Belege, Seitendetails, Routen und Preise unterscheiden sich. Nutze die aktuelle Zielseite und den verantwortlichen Dienst statt einer alten Tabellenbehauptung."],
  ],
  cards: [
    ["Entdeckung", "Mit Absicht suchen, nicht mit einem Haufen Screenshots", "Vor dem Stöbern eine kurze Anforderung formulieren, Kategoriesprache verwenden und Belege an jeder Referenz halten."],
    ["Qualitätskontrolle", "QC ohne Rätselraten: eine wiederholbare Fotoprüfung", "Eine praktische Reihenfolge für Silhouette, Maße, Material, Verarbeitung, Symmetrie und Verpackung."],
    ["Größen", "Das Kleidungsstück messen, das bereits passt", "Warum Körpermaße allein nicht reichen und wie eine Größentabelle mit einem realen Stück verglichen wird."],
    ["Versand", "Paketberechnung vor dem Bezahlen", "Abrechenbares Gewicht, Schutz und Konsolidierung abwägen, bevor ein Schnäppchen teuer wird."],
  ],
  guides: [
    {
      title: "Mit Absicht suchen, nicht mit einem Haufen Screenshots",
      standfirst: "Am schnellsten verschwendet man einen Abend, indem man dutzende ähnlich aussehende Links sammelt, ohne festzuhalten, warum einer davon nützlich war.",
      paragraphs: [
        "Mit einer Anforderung in einem Satz beginnen: Gegenstand, Nutzung, unverzichtbares Detail und akzeptabler Kompromiss. ‚Dunkler Alltagshoodie, mittleres Gewicht, ruhige Vorderseite, locker aber nicht kurz‘ ist suchbar. ‚Schöner Hoodie‘ ist es nicht. Die Anforderung liefert Begriffe für Filter und einen Grund, ungeeignete Ergebnisse früh auszusortieren.",
        "In Schichten suchen. Zuerst die Kategorie öffnen, um die Namensmuster des Katalogs zu verstehen. Danach Produkttyp, Silhouette, Material oder ein markantes Konstruktionsdetail ergänzen. Nicht mit einer langen Reihe von Marketingbegriffen beginnen; Titel sind oft uneinheitlich, übersetzt oder abgekürzt. Zwei kurze Suchen liefern meist mehr als eine überladene Anfrage.",
        "Für jede vielversprechende Referenz die Quell-URL, das Datum, die genaue Variante und einen Satz zum Auswahlgrund speichern. Das Bild ergänzen, das das entscheidende Detail belegt. Ein Screenshot ohne Quellseite ist verwaist: Er zeigt nicht, ob der Eintrag geändert wurde, ob die gewünschte Farbe wählbar ist oder ob der Preis zu einer anderen Option gehört.",
        "Beliebtheit als Anlass zur Prüfung behandeln, nicht als Qualitätsnote. Ein oft aufgerufener Artikel kann attraktiv, günstig, beworben oder einfach alt sein. Entscheidend bleiben produktspezifische Belege: aktuelle Fotos, konsistente Maße, Verarbeitungsdetails, Verkäuferhistorie und die Bedingungen der exakten Variante.",
        "Die Suche beenden, sobald drei Referenzen die Anforderung erfüllen. In einer kleinen Tabelle Quellpreis, erwartetes Gewicht, Materialangabe, verfügbare Maße, Fotobelege, offene Fragen und wahrscheinliche Gesamtkosten vergleichen. Ziel ist nicht, jeden Eintrag zu finden, sondern eine kurze Liste, die einer Prüfung standhält.",
      ],
    },
    {
      title: "QC ohne Rätselraten: eine wiederholbare Fotoprüfung",
      standfirst: "Qualitätsfotos werden nützlich, wenn sie jedes Mal in derselben Reihenfolge geprüft und sichtbare Fakten von Annahmen getrennt werden.",
      paragraphs: [
        "Mit der Identität beginnen. Farbe, Modell, Größe und Variante bestätigen, bevor winzige Details betrachtet werden. Viele teure Fehler sind keine Mängel, sondern klar fotografierte falsche Optionen. Bei ähnlichen Varianten Etikett, Bestellreferenz oder Größenanhänger im selben Bild anfordern.",
        "Dann Silhouette und Proportion prüfen. Eine gerade, zentrierte Vorder- und Rückansicht verwenden. Verhältnis von Breite zu Höhe, Schulterposition, Zehenform, Taschenstruktur oder Geometrie der Hülle prüfen, bevor gezoomt wird. Eine perfekte Naht rettet nicht die falsche Form. Wenn Maße wichtig sind, ein flach liegendes, bei null sichtbares Maßband verlangen.",
        "Anschließend Material und Oberfläche untersuchen. Unter neutralem Licht auf gleichmäßige Körnung, Flor, Glanz und Farbe achten. Kompression, Plastikfolie und Handykamera können Textur verzerren; daher mehrere Bereiche desselben Artikels vergleichen. Eine helle Nahaufnahme ist schwächer als mehrere normale Ansichten.",
        "Die Verarbeitung auf einem festen Weg prüfen: Hauptnähte, Kanten, Verschlüsse, Beschläge, Befestigungspunkte und stark belastete Bereiche. Bei Schuhen Sohlenverklebung und Symmetrie einbeziehen. Bei Taschen Griffansätze, Reißverschlussenden und Futter; bei Kleidung Bündchen, Säume, Taschen und die Rückseite auffälliger Stickereien oder Drucke.",
        "Mit Symmetrie und Verunreinigungen abschließen. Links und rechts vergleichen, wo Symmetrie erwartet wird, dann nach Flecken, Kleber, Kratzern, losen Fasern oder gequetschter Struktur suchen. Jeden Befund mit Ort und Schwere festhalten. ‚Sieht komisch aus‘ ist schwer nutzbar; eine konkrete Abweichung lässt sich überprüfen.",
        "Gegen die eigene Anforderung entscheiden, nicht gegen Perfektion. Befunde als akzeptable Abweichung, korrigierbare Präsentation, Funktionsmangel oder falscher Artikel einordnen. Fehlt ein Beleg, ein gezieltes Foto statt eines neuen zufälligen Sets anfordern. QC soll Unsicherheit vor dem nächsten unumkehrbaren Schritt verringern.",
      ],
    },
    {
      title: "Das Kleidungsstück messen, das bereits passt",
      standfirst: "Eine Größenangabe ist ein Name. Ein flaches Maß ist ein vergleichbarer Beleg.",
      paragraphs: [
        "Ein Kleidungsstück wählen, das so sitzt, wie das neue sitzen soll, nicht nur eines, das tragbar ist. Ohne Dehnung flach hinlegen. Brustbreite, Schulterbreite, Körperlänge und Ärmellänge an denselben Punkten wie in der Verkäufertabelle messen. Bei Hosen Bundbreite, Leibhöhe, Oberschenkel, Innenbein und Saumöffnung notieren.",
        "Gleiches mit Gleichem vergleichen. Ein Brustumfang ist nicht direkt mit einer flachen halben Brustweite vergleichbar. Raglanärmel und überschnittene Schultern nutzen andere Messpunkte als eingesetzte Ärmel. Erklärt die Tabelle die Methode nicht, ein Foto des flach gemessenen Artikels anfordern.",
        "Materialverhalten berücksichtigen. Strick, Rippbereiche und elastische Bünde können sich dehnen; dichter Webstoff möglicherweise nicht. Waschen, Pressen und Fertigungstoleranzen verändern Maße. Zwischen zwei Größen entscheiden, welche Dimension den Komfort bestimmt und welche Abweichung verträgt.",
        "Den Messdatensatz mit Quelllink und gewählter Variante speichern. Ändert sich der Eintrag, bleibt die Entscheidung nachvollziehbar. Diese Gewohnheit ist zuverlässiger als Größenempfehlungen von Personen mit unbekannter Passformvorliebe und Körperproportion.",
      ],
    },
    {
      title: "Paketberechnung vor dem Bezahlen",
      standfirst: "Der angegebene Produktpreis ist nur ein Bestandteil der endgültigen Entscheidung.",
      paragraphs: [
        "Vor mehreren Bestellungen tatsächliches Gewicht und Packvolumen schätzen. Beim Versand kann das tatsächliche oder das Volumengewicht gelten, je nachdem, welches höher ist. Schuhe, strukturierte Taschen und Schutzkartons beanspruchen oft mehr abrechenbaren Raum, als ihre Masse vermuten lässt.",
        "Schutz nach Risiko wählen. Das Entfernen der Verpackung kann Volumen senken, ein fester Karton schützt jedoch geformte Produkte. Vakuumverpackung hilft bei weicher Kleidung, eignet sich aber nicht für Teile, die knittern, sich verformen oder empfindliche Oberflächen besitzen. Ein Foto des gepackten Pakets macht den Kompromiss sichtbar.",
        "Konsolidierung verteilt Grundkosten auf mehrere Artikel, erhöht aber Wert und Komplexität eines Pakets. Ein großes Paket mit zwei kleineren anhand von Routenlimits, Versicherung und Tracking vergleichen. Der niedrigste Preis ist nicht automatisch die risikoärmste Option.",
        "Schließlich Zielregeln, Steuern, verbotene Materialien und Folgen einer unzustellbaren Sendung berücksichtigen. Diese Bedingungen unterscheiden sich nach Route und Ziel und können sich ändern. Unmittelbar vor dem Versand beim zuständigen Transportdienst prüfen, statt einem alten Community-Beitrag zu vertrauen.",
      ],
    },
  ],
};

const fr: LocaleText = {
  ui: {
    selectedReferences: "Références produit sélectionnées", object: "OBJET", paperNote: ["Cherchez moins.", "Vérifiez mieux."],
    signals: ["catégories actives", "langues complètes", "avant de décider", "liens vers les sources"],
    kickers: ["01 / INDEX", "02 / CATÉGORIES", "03 / MÉTHODE", "04 / ARTICLES SEO", "05 / QUESTIONS"],
    methodCards: [
      ["Trouver la source active", "Conservez ensemble la fiche produit, la variante et la date. Une image seule n’est pas une référence vérifiable."],
      ["Comparer des preuves réelles", "Utilisez les mesures, les photos actuelles et les détails de fabrication plutôt que la popularité ou l’étiquette."],
      ["Lever l’incertitude", "Posez une question précise ou demandez une photo ciblée avant la prochaine étape irréversible."],
    ],
    libraryPrefix: "BIBLIOTHÈQUE DE TERRAIN HACOOS", searchHelp: "La recherche ouvre le catalogue source actuel. Utilisez des termes courts, puis vérifiez la fiche exacte.", entryPoints: "POINTS D’ENTRÉE",
    editorialSteps: [
      ["Commencer large", "Comprenez d’abord comment le catalogue nomme la catégorie, puis ajoutez le style, la matière ou le modèle."],
      ["Conserver la source", "Notez ensemble l’URL, la variante et la date. Une page peut changer après votre première visite."],
      ["Retenir trois options", "Comparez les preuves et le coût livré. Arrêtez la recherche lorsque trois options répondent au même cahier des charges."],
    ],
    sourceNote: ["Chaque carte ouvre une fiche source active", "Vérifiez de nouveau le titre, les images, la variante et la disponibilité avant d’utiliser une référence enregistrée."],
    articleLibrary: ["BIBLIOTHÈQUE D’ARTICLES SEO", "Quatre articles indépendants", "Chaque article possède sa propre URL indexable, une version linguistique complète et une intention de recherche précise."],
    guideHub: ["PARCOURS DE DÉCISION", "Utiliser les guides dans le bon ordre", "Passez de la découverte aux preuves, aux tailles et à la préparation du colis sans ignorer les décisions importantes."],
    guideSteps: [
      ["Définir le besoin", "Notez l’usage, la coupe, la matière et le détail sur lequel vous ne transigerez pas."],
      ["Vérifier la fiche", "Conservez ensemble la source actuelle, la variante, les mesures et les preuves photo."],
      ["Examiner le QC", "Séparez les faits visibles des hypothèses et ne demandez que les preuves manquantes."],
      ["Préparer la livraison", "Comparez le coût livré, le poids facturable, la protection et les conditions de l’itinéraire."],
    ],
    onThisPage: "SUR CETTE PAGE", fieldNote: "ARTICLE SEO", completeMethod: "MÉTHODE COMPLÈTE",
    qcCheckpoints: [
      ["Identité", "Confirmez la couleur, le modèle, la taille et la variante avant d’évaluer les détails."],
      ["Silhouette", "Contrôlez les proportions à partir de vues de face, de dos et de côté bien centrées."],
      ["Mesures", "Demandez un ruban visible et des points de mesure cohérents."],
      ["Matière", "Comparez la texture, le grain, la brillance et la couleur sur plusieurs zones."],
      ["Fabrication", "Suivez les coutures, fermetures, finitions de bord et points de tension."],
      ["Décision", "Classez chaque problème par gravité et ne demandez que les preuves manquantes."],
    ],
    shippingBoard: [
      ["POIDS RÉEL", "Article + emballage", "Pertinent pour les objets denses et compacts."],
      ["POIDS VOLUMÉTRIQUE", "Longueur × largeur × hauteur", "Peut déterminer le tarif des colis grands et légers."],
      ["COÛT LIVRÉ", "Produit + itinéraire + risque", "Le chiffre à comparer, pas seulement le prix affiché."],
    ],
    shippingWarning: ["Les règles changent selon la destination et l’itinéraire", "Vérifiez les restrictions, taxes, assurances et conditions du transporteur juste avant l’envoi. Cette bibliothèque ne fournit pas de conseil douanier ou juridique."],
    independent: "Indépendant par conception", backToArticles: "Retour à tous les articles",
  },
  categories: [
    ["Chaussures", "Silhouettes terrain, running et quotidien"], ["Sweats à capuche", "Références de poids, de forme et de tissu"],
    ["T-shirts", "Imprimés, basiques et couches saisonnières"], ["Vestes", "Couches extérieures et formes techniques"],
    ["Pantalons et shorts", "Bas et ensembles guidés par la coupe"], ["Couvre-chefs", "Casquettes, mailles et pièces de finition"],
    ["Accessoires", "Sacs, étuis, bijoux et montres"], ["Électronique", "Petits appareils et utilité quotidienne"],
  ],
  products: [
    ["Chaussure de terrain performante", "Chaussures", "Référence de forme, semelle et amorti"],
    ["Sweat à coupe archive", "Sweats à capuche", "Référence de placement graphique et de grammage"],
    ["Sac de jour structuré", "Accessoires", "Référence de quincaillerie et de construction"],
    ["Montre affirmée", "Accessoires", "Référence de cadran, sertissage et fermoir"],
    ["Coque de téléphone utilitaire", "Accessoires", "Référence de finition et d’ajustement"],
    ["Accessoire quotidien minimal", "Accessoires", "Référence de matière et de détails"],
  ],
  faqs: [
    ["Hacoos.org est-il le site officiel de Hacoo ?", "Non. Hacoos.org est un index informatif indépendant. Hacoo se présente comme une communauté mondiale de partage de contenus ; cette bibliothèque est un projet distinct de recherche et de navigation."],
    ["Ce site vend-il ou expédie-t-il des produits ?", "Non. Il publie du contexte éditorial et des liens vers des fiches actives. Achat, paiement, échange avec le vendeur, inspection et expédition ont lieu ailleurs."],
    ["Pourquoi une fiche produit peut-elle changer après son enregistrement ?", "Le catalogue source est actif. Titres, images, disponibilité, prix et options d’achat peuvent changer. Rouvrez la source avant de décider."],
    ["Que vérifier avant d’utiliser une référence ?", "Confirmez la variante, le guide des tailles, la matière, l’historique du vendeur, les photos actuelles, les conditions de retour et le coût livré. Un lien utile est un point de départ, pas une preuve de qualité."],
    ["Un tableur Hacoo est-il un catalogue officiel ?", "Pas automatiquement. Hacoo se décrit aujourd’hui comme une communauté de contenu ; les tableurs sont souvent indépendants. Vérifiez propriétaire, date et destination."],
    ["Hacoo est-il fiable ?", "Hacoo est une application réelle et listée avec des pages officielles et un vaste historique d’avis. Cela ne garantit ni créateur, produit, livraison ni remboursement. Vérifiez la transaction exacte dans votre région."],
    ["Pourquoi les notes Hacoo diffèrent-elles ?", "Les plateformes couvrent d’autres régions, périodes et méthodes. Le 26 août 2026, Apple Portugal, Google Play et Trustpilot affichaient des scores sensiblement différents ; citez toujours source et date."],
    ["Chaque lien Hacoo a-t-il des photos QC ou un prix de livraison fixe ?", "Non. Preuves, détails, itinéraires et prix varient. Utilisez la destination actuelle et le service responsable plutôt qu’une ancienne affirmation de tableur."],
  ],
  cards: [
    ["Découverte", "Chercher avec une intention, pas avec une pile de captures", "Rédigez un bref cahier des charges, utilisez le vocabulaire des catégories et gardez les preuves avec chaque référence."],
    ["Contrôle qualité", "QC sans deviner : une revue photo répétable", "Une séquence pratique pour la silhouette, les mesures, la matière, la fabrication, la symétrie et l’emballage."],
    ["Tailles", "Mesurer le vêtement que vous possédez déjà", "Pourquoi les mensurations seules ne suffisent pas et comment comparer un tableau de tailles à une pièce réelle."],
    ["Expédition", "Calculer le colis avant de payer", "Estimez le poids facturable, la protection et les compromis de consolidation avant qu’une bonne affaire ne devienne coûteuse."],
  ],
  guides: [
    {
      title: "Chercher avec une intention, pas avec une pile de captures",
      standfirst: "Le moyen le plus rapide de perdre une soirée consiste à collecter des dizaines de liens visuellement similaires sans noter ce qui rend chacun utile.",
      paragraphs: [
        "Commencez par une phrase : l’objet, l’usage, le détail non négociable et le compromis acceptable. « Sweat sombre pour tous les jours, poids moyen, devant discret, ample mais pas court » constitue un besoin recherchable. « Beau sweat » ne l’est pas. Ce brief fournit le vocabulaire des filtres et une raison d’écarter rapidement les résultats inadéquats.",
        "Cherchez par couches. Ouvrez d’abord la catégorie pour comprendre les habitudes de nommage du catalogue. Ajoutez ensuite le type de produit, la silhouette, la matière ou un détail de construction distinctif. Évitez une longue suite de termes marketing : les titres sont souvent incohérents, traduits ou abrégés. Deux requêtes courtes révèlent généralement davantage qu’une requête surchargée.",
        "Pour chaque référence prometteuse, conservez l’URL source, la date, la variante exacte et une phrase expliquant sa sélection. Ajoutez l’image qui prouve le détail pertinent. Une capture sans page source devient orpheline : elle ne montre pas si la fiche a changé, si la couleur voulue est sélectionnable ou si le prix correspond à une autre option.",
        "Considérez la popularité comme un signal à examiner, pas comme une note de qualité. Un article très consulté peut être séduisant, bon marché, mis en avant ou simplement ancien. Les preuves utiles restent propres au produit : photos actuelles, mesures cohérentes, détails de fabrication, historique du vendeur et conditions de la variante exacte.",
        "Arrêtez la recherche lorsque trois références répondent au brief. Comparez dans un petit tableau le prix source, le poids attendu, la matière annoncée, les mesures, les preuves photo, les questions ouvertes et le coût livré probable. L’objectif n’est pas de trouver toutes les fiches, mais une liste courte capable de résister à la vérification.",
      ],
    },
    {
      title: "QC sans deviner : une revue photo répétable",
      standfirst: "Les photos de contrôle deviennent utiles lorsqu’elles sont examinées dans le même ordre et que les faits visibles sont séparés des hypothèses.",
      paragraphs: [
        "Commencez par l’identité. Confirmez couleur, modèle, taille et variante avant les petits détails. De nombreuses erreurs coûteuses ne sont pas des défauts, mais la mauvaise option clairement photographiée. Lorsque les variantes se ressemblent, demandez l’étiquette, la référence de commande ou la taille dans le même cadre.",
        "Passez à la silhouette et aux proportions. Utilisez des vues droites et centrées de face et de dos. Vérifiez largeur, hauteur, position des épaules, forme de l’avant de la chaussure, structure du sac ou géométrie de l’étui avant de zoomer. Une couture parfaite ne corrige pas une mauvaise forme. Pour les mesures, demandez un ruban posé à plat et visible depuis zéro.",
        "Examinez ensuite la matière et la surface. Recherchez un grain, un toucher visuel, une brillance et une couleur cohérents sous une lumière neutre. Compression, plastique et caméra de téléphone peuvent déformer la texture ; comparez plusieurs zones. Une seule photo rapprochée très lumineuse apporte moins de preuves que plusieurs vues ordinaires.",
        "Contrôlez la fabrication selon un chemin fixe : coutures principales, bords, fermetures, pièces métalliques, attaches et zones sollicitées. Pour les chaussures, incluez collage de semelle et symétrie. Pour les sacs, bases des poignées, extrémités des zips et doublure. Pour les vêtements, poignets, ourlets, poches et envers des broderies ou impressions visibles.",
        "Terminez par la symétrie et les contaminations. Comparez gauche et droite lorsque la symétrie est attendue, puis recherchez taches, colle, rayures, fibres libres ou structure écrasée. Notez chaque problème avec son emplacement et sa gravité. « Ça paraît bizarre » est difficile à traiter ; une différence précisément localisée peut être vérifiée.",
        "Décidez selon votre brief, pas selon la perfection. Classez les constats en variation acceptable, présentation corrigeable, défaut fonctionnel ou mauvais article. Si une preuve manque, demandez une seule photo ciblée plutôt qu’un nouveau lot aléatoire. Le QC sert à réduire l’incertitude avant l’étape irréversible suivante.",
      ],
    },
    {
      title: "Mesurer le vêtement que vous possédez déjà",
      standfirst: "Une taille indiquée est un nom. Une mesure à plat est une preuve comparable.",
      paragraphs: [
        "Choisissez un vêtement qui tombe comme vous souhaitez que le nouveau tombe, pas seulement un vêtement portable. Posez-le à plat sans l’étirer. Relevez largeur de poitrine, épaules, longueur du corps et manches avec les mêmes repères que le tableau vendeur. Pour un pantalon : taille à plat, fourche, cuisse, entrejambe et ouverture de jambe.",
        "Comparez des mesures de même nature. Un tour de poitrine ne se compare pas directement à une demi-largeur à plat. Les manches raglan et épaules tombantes utilisent d’autres repères que les manches montées. Si la méthode du tableau n’est pas expliquée, demandez une photo de l’article mesuré à plat.",
        "Intégrez le comportement de la matière. Maille, bords côtelés et tailles élastiques peuvent s’étirer ; un tissu dense peut ne pas bouger. Lavage, repassage et tolérance de fabrication modifient aussi les mesures. Entre deux tailles, déterminez la dimension qui contrôle le confort et celle qui accepte une variation.",
        "Conservez les mesures avec le lien source et la variante choisie. Si la fiche change, la décision reste vérifiable. Cette habitude est plus fiable que des recommandations de taille venant de personnes dont vous ignorez les proportions et la préférence de coupe.",
      ],
    },
    {
      title: "Calculer le colis avant de payer",
      standfirst: "Le prix produit affiché n’est qu’un élément de la décision finale.",
      paragraphs: [
        "Estimez le poids réel et le volume emballé avant plusieurs commandes. Le transport peut retenir le poids réel ou volumétrique, selon le plus élevé. Chaussures, sacs structurés et boîtes de protection occupent parfois davantage d’espace facturable que leur masse ne le suggère.",
        "Choisissez la protection selon le risque. Retirer l’emballage réduit parfois le volume, mais une boîte rigide protège un produit formé. La mise sous vide aide les vêtements souples, pas les pièces qui se froissent, se déforment ou portent des détails fragiles. Une photo du colis préparé rend le compromis visible.",
        "La consolidation répartit un coût de base sur plusieurs articles, mais augmente aussi la valeur et la complexité d’un colis. Comparez un grand colis et deux petits en tenant compte des limites d’itinéraire, de l’assurance et du suivi. Le tarif le plus bas n’est pas nécessairement l’option la moins risquée.",
        "Enfin, prenez en compte les règles de destination, taxes, matières interdites et conséquences d’un colis non distribuable. Elles varient selon l’itinéraire et peuvent changer. Vérifiez auprès du transporteur juste avant l’envoi plutôt que de vous fier à un ancien message communautaire.",
      ],
    },
  ],
};

const es: LocaleText = {
  ui: {
    selectedReferences: "Referencias de producto seleccionadas", object: "OBJETO", paperNote: ["Busca menos.", "Inspecciona más."],
    signals: ["categorías activas", "idiomas completos", "antes de decidir", "enlaces a páginas fuente"],
    kickers: ["01 / ÍNDICE", "02 / CATEGORÍAS", "03 / MÉTODO", "04 / ARTÍCULOS SEO", "05 / PREGUNTAS"],
    methodCards: [
      ["Encuentra la fuente activa", "Guarda juntos la página, la variante y la fecha. Una imagen aislada no es una referencia verificable."],
      ["Compara pruebas reales", "Usa medidas, fotos actuales y detalles de confección en lugar de confiar en etiquetas o popularidad."],
      ["Resuelve la incertidumbre", "Haz una pregunta precisa o solicita una foto concreta antes del siguiente paso irreversible."],
    ],
    libraryPrefix: "BIBLIOTECA DE CAMPO HACOOS", searchHelp: "La búsqueda abre el catálogo fuente actual. Usa términos cortos y después verifica la ficha exacta.", entryPoints: "PUNTOS DE ENTRADA",
    editorialSteps: [
      ["Empieza con amplitud", "Aprende cómo nombra la categoría el catálogo y después añade estilo, material o modelo."],
      ["Guarda la fuente", "Registra juntos la URL, la variante y la fecha. Las páginas pueden cambiar después de verlas."],
      ["Elige tres", "Compara pruebas y coste entregado. Deja de buscar cuando tres opciones cumplan el mismo objetivo."],
    ],
    sourceNote: ["Cada tarjeta abre una página fuente activa", "Vuelve a comprobar título, imágenes, variante y disponibilidad antes de confiar en una referencia guardada."],
    articleLibrary: ["BIBLIOTECA DE ARTÍCULOS SEO", "Cuatro artículos independientes", "Cada artículo tiene una URL indexable propia, una versión completa en cada idioma y una intención de búsqueda definida."],
    guideHub: ["RUTA DE DECISIÓN", "Usa las guías en el orden adecuado", "Pasa del descubrimiento a las pruebas, las tallas y la planificación del paquete sin saltarte decisiones importantes."],
    guideSteps: [
      ["Define el objetivo", "Anota el uso, el ajuste, el material y el detalle que no estás dispuesto a ceder."],
      ["Verifica la ficha", "Mantén juntos la fuente actual, la variante, las medidas y las pruebas fotográficas."],
      ["Revisa el QC", "Separa los hechos visibles de las suposiciones y pide solo las pruebas que falten."],
      ["Planifica la entrega", "Compara coste entregado, peso facturable, protección y condiciones de la ruta."],
    ],
    onThisPage: "EN ESTA PÁGINA", fieldNote: "ARTÍCULO SEO", completeMethod: "MÉTODO COMPLETO",
    qcCheckpoints: [
      ["Identidad", "Confirma color, modelo, talla y variante antes de valorar detalles."],
      ["Silueta", "Comprueba las proporciones en vistas centradas de frente, espalda y lateral."],
      ["Medidas", "Solicita una cinta visible y puntos de medición coherentes."],
      ["Material", "Compara textura, grano, brillo y color en varias zonas."],
      ["Confección", "Sigue costuras, cierres, remates y puntos sometidos a tensión."],
      ["Decisión", "Clasifica cada problema por gravedad y pide solo las pruebas que falten."],
    ],
    shippingBoard: [
      ["PESO REAL", "Artículo + embalaje", "Útil para objetos densos y compactos."],
      ["PESO VOLUMÉTRICO", "Largo × ancho × alto", "Puede determinar el precio de paquetes grandes y ligeros."],
      ["COSTE ENTREGADO", "Producto + ruta + riesgo", "La cifra que debes comparar, no solo el precio anunciado."],
    ],
    shippingWarning: ["Las reglas cambian según destino y ruta", "Comprueba restricciones, impuestos, seguro y condiciones del transportista justo antes del envío. Esta biblioteca no ofrece asesoramiento aduanero ni jurídico."],
    independent: "Independiente por diseño", backToArticles: "Volver a todos los artículos",
  },
  categories: [
    ["Calzado", "Siluetas de pista, running y uso diario"], ["Sudaderas", "Referencias de peso, forma y tejido"],
    ["Camisetas", "Estampados, básicos y capas de temporada"], ["Chaquetas", "Capas exteriores y formas técnicas"],
    ["Pantalones y shorts", "Prendas inferiores y conjuntos guiados por el ajuste"], ["Accesorios de cabeza", "Gorras, punto y piezas finales"],
    ["Accesorios", "Bolsos, fundas, joyería y relojes"], ["Electrónica", "Dispositivos pequeños y utilidad diaria"],
  ],
  products: [
    ["Zapatilla de pista de alto rendimiento", "Calzado", "Referencia de forma, suela y amortiguación"],
    ["Sudadera de corte archivo", "Sudaderas", "Referencia de colocación gráfica y gramaje"],
    ["Bolso de día estructurado", "Accesorios", "Referencia de herrajes y construcción"],
    ["Reloj llamativo", "Accesorios", "Referencia de esfera, engaste y cierre"],
    ["Funda de móvil utilitaria", "Accesorios", "Referencia de acabado y ajuste al dispositivo"],
    ["Accesorio diario minimalista", "Accesorios", "Referencia de material y detalles"],
  ],
  faqs: [
    ["¿Hacoos.org es la web oficial de Hacoo?", "No. Hacoos.org es un índice informativo independiente. Hacoo se describe como una comunidad global para compartir contenidos; esta biblioteca es un proyecto separado de investigación y navegación."],
    ["¿Esta web vende o envía productos?", "No. Publica contexto editorial y enlaces a páginas activas. La compra, el pago, la comunicación con el vendedor, la inspección y el envío tienen lugar en otros servicios."],
    ["¿Por qué puede cambiar una página después de guardarla?", "El catálogo fuente está activo. Pueden cambiar títulos, imágenes, disponibilidad, precios y opciones de compra. Abre de nuevo la fuente antes de decidir."],
    ["¿Qué debo comprobar antes de usar una referencia?", "Confirma variante, tabla de tallas, material, historial del vendedor, fotos actuales, condiciones de devolución y coste entregado. Un enlace útil es un punto de partida, no una prueba de calidad."],
    ["¿Una hoja Hacoo es un catálogo oficial?", "No automáticamente. Hacoo se describe hoy como comunidad de contenido; las hojas suelen ser colecciones independientes. Comprueba propietario, fecha y destino."],
    ["¿Hacoo es legítimo?", "Hacoo es una aplicación real y listada, con páginas oficiales y amplio historial público. Eso no garantiza creador, producto, entrega o reembolso. Verifica la transacción exacta en tu región."],
    ["¿Por qué cambian las puntuaciones de Hacoo?", "Las plataformas cubren regiones, periodos y métodos distintos. El 26 de agosto de 2026 Apple Portugal, Google Play y Trustpilot mostraban notas materialmente diferentes; cita siempre fuente y fecha."],
    ["¿Cada enlace Hacoo tiene fotos QC o envío fijo?", "No. Evidencia, detalle, rutas y precios varían. Usa la página actual y el servicio responsable en vez de una afirmación antigua."],
  ],
  cards: [
    ["Descubrimiento", "Busca con intención, no con una pila de capturas", "Crea un objetivo breve, usa el lenguaje de la categoría y conserva las pruebas junto a cada referencia."],
    ["Control de calidad", "QC sin adivinar: una revisión fotográfica repetible", "Una secuencia práctica para silueta, medidas, material, confección, simetría y embalaje."],
    ["Tallas", "Mide la prenda que ya tienes", "Por qué las medidas corporales no bastan y cómo comparar una tabla con una prenda real."],
    ["Envío", "Calcula el paquete antes de pagar", "Estima peso facturable, protección y consolidación antes de que una ganga resulte cara."],
  ],
  guides: [
    {
      title: "Busca con intención, no con una pila de capturas",
      standfirst: "La forma más rápida de perder una tarde es reunir decenas de enlaces parecidos sin anotar qué hacía útil a cada uno.",
      paragraphs: [
        "Empieza con una frase: objeto, uso, detalle no negociable y compromiso aceptable. «Sudadera oscura para diario, peso medio, frontal discreto, holgada pero no corta» es un objetivo que se puede buscar. «Sudadera bonita» no lo es. El objetivo proporciona vocabulario para los filtros y un motivo para descartar resultados pronto.",
        "Busca por capas. Empieza en la categoría para conocer los patrones de nombres del catálogo. Añade después tipo de producto, silueta, material o un detalle de construcción distintivo. No empieces con una larga cadena de términos comerciales; los títulos suelen ser inconsistentes, traducidos o abreviados. Dos búsquedas breves suelen descubrir más que una consulta sobrecargada.",
        "Para cada referencia prometedora, guarda la URL fuente, la fecha, la variante exacta y una frase que explique por qué pasó el filtro. Añade la imagen que demuestra el detalle importante. Una captura sin su fuente queda huérfana: no dice si la ficha cambió, si el color deseado se puede elegir o si el precio pertenece a otra opción.",
        "Trata la popularidad como una señal para investigar, no como una nota de calidad. Un artículo con muchas visitas puede ser atractivo, barato, promocionado o simplemente antiguo. Las pruebas relevantes siguen siendo específicas: fotos actuales, medidas coherentes, detalles de confección, historial del vendedor y condiciones de la variante exacta.",
        "Termina la búsqueda cuando tres referencias cumplan el objetivo. Compáralas en una tabla sencilla: precio fuente, peso previsto, material declarado, medidas, fotos, preguntas abiertas y coste entregado probable. El objetivo no es encontrar todas las fichas, sino una lista corta que resista la verificación.",
      ],
    },
    {
      title: "QC sin adivinar: una revisión fotográfica repetible",
      standfirst: "Las fotos de control son útiles cuando se revisan siempre en el mismo orden y se separan los hechos visibles de las suposiciones.",
      paragraphs: [
        "Empieza por la identidad. Confirma color, modelo, talla y variante antes de inspeccionar detalles mínimos. Muchos errores costosos no son defectos, sino la opción equivocada bien fotografiada. Cuando las variantes se parecen, pide que etiqueta, referencia o talla aparezcan en el mismo encuadre.",
        "Pasa a silueta y proporción. Usa vistas rectas y centradas de frente y espalda. Comprueba relación ancho-altura, hombros, puntera, estructura del bolso o geometría de la funda antes de ampliar. Una costura perfecta no arregla una forma incorrecta. Si importan las medidas, pide una cinta plana y visible desde cero.",
        "Examina después material y superficie. Busca grano, textura, brillo y color coherentes bajo luz neutra. La compresión, el plástico y la cámara pueden distorsionar la textura; compara varias zonas. Una sola foto brillante de cerca aporta menos que varias vistas normales.",
        "Revisa la confección siguiendo una ruta fija: costuras principales, bordes, cierres, herrajes, puntos de unión y zonas de esfuerzo. En calzado, incluye pegado de suela y simetría. En bolsos, bases de asas, extremos de cremalleras y forro. En prendas, puños, dobladillos, bolsillos y reverso de bordados o estampados visibles.",
        "Termina con simetría y contaminación. Compara izquierda y derecha donde corresponda y busca manchas, pegamento, arañazos, fibras sueltas o estructura aplastada. Registra cada problema con lugar y gravedad. «Se ve raro» sirve poco; una diferencia situada y medible se puede verificar.",
        "Decide según tu objetivo, no según la perfección. Clasifica los hallazgos como variación aceptable, presentación corregible, defecto funcional o artículo equivocado. Si falta una prueba, solicita una foto concreta en vez de otro conjunto aleatorio. El QC debe reducir la incertidumbre antes del siguiente paso irreversible.",
      ],
    },
    {
      title: "Mide la prenda que ya tienes",
      standfirst: "Una talla etiquetada es un nombre. Una medida en plano es una prueba comparable.",
      paragraphs: [
        "Elige una prenda que ajuste como quieres que ajuste la nueva, no solo una que puedas usar. Colócala plana sin estirar. Registra pecho, hombros, largo y manga usando los mismos puntos que la tabla del vendedor. Para pantalones, mide cintura en plano, tiro, muslo, entrepierna y abertura del bajo.",
        "Compara magnitudes equivalentes. Un contorno de pecho no se compara directamente con media anchura en plano. Las mangas raglán y los hombros caídos usan puntos diferentes de una manga montada. Si la tabla no explica su método, pide una foto del artículo medido en plano.",
        "Ten en cuenta el comportamiento del material. Punto, canalé y cinturas elásticas pueden ceder; un tejido denso quizá no. Lavado, planchado y tolerancia de fabricación también mueven medidas. Entre dos tallas, decide qué dimensión controla la comodidad y cuál admite variación.",
        "Guarda las medidas con el enlace fuente y la variante elegida. Si la ficha cambia, la decisión sigue siendo auditable. Este hábito es más fiable que consejos de personas cuyo gusto de ajuste y proporciones desconoces.",
      ],
    },
    {
      title: "Calcula el paquete antes de pagar",
      standfirst: "El precio anunciado del producto es solo una parte de la decisión final.",
      paragraphs: [
        "Estima peso real y volumen embalado antes de realizar varios pedidos. El envío puede usar peso real o volumétrico, el que sea mayor. Calzado, bolsos estructurados y cajas protectoras pueden ocupar más espacio facturable del que su masa sugiere.",
        "Elige la protección según el riesgo. Quitar embalaje reduce volumen, pero una caja rígida protege productos con forma. El vacío ayuda con prendas blandas, pero no con piezas que se arrugan, deforman o tienen superficies delicadas. Una foto del paquete preparado hace visible el compromiso.",
        "Consolidar reparte el coste base entre varios artículos, pero también aumenta valor y complejidad de un solo paquete. Compara un paquete grande con dos pequeños usando límites de ruta, seguro y seguimiento. La tarifa más baja no siempre es la opción de menor riesgo.",
        "Por último, considera reglas del destino, impuestos, materiales prohibidos y consecuencias de un paquete no entregable. Cambian por ruta y país. Compruébalas con el transportista justo antes del envío en vez de confiar en una publicación antigua de la comunidad.",
      ],
    },
  ],
};

const it: LocaleText = {
  ui: {
    selectedReferences: "Riferimenti prodotto selezionati", object: "OGGETTO", paperNote: ["Cerca meno.", "Controlla meglio."],
    signals: ["categorie attive", "lingue complete", "prima di decidere", "link alle pagine sorgente"],
    kickers: ["01 / INDICE", "02 / CATEGORIE", "03 / METODO", "04 / ARTICOLI SEO", "05 / DOMANDE"],
    methodCards: [
      ["Trova la fonte attiva", "Conserva insieme pagina prodotto, variante e data. Un’immagine isolata non è un riferimento verificabile."],
      ["Confronta prove reali", "Usa misure, foto aggiornate e dettagli costruttivi invece di fidarti di etichette o popolarità."],
      ["Risolvi l’incertezza", "Fai una domanda precisa o richiedi una foto mirata prima del passaggio irreversibile successivo."],
    ],
    libraryPrefix: "BIBLIOTECA SUL CAMPO HACOOS", searchHelp: "La ricerca apre il catalogo sorgente aggiornato. Usa termini brevi e poi verifica la scheda esatta.", entryPoints: "PUNTI DI INGRESSO",
    editorialSteps: [
      ["Parti in modo ampio", "Impara come il catalogo chiama la categoria, poi aggiungi stile, materiale o modello."],
      ["Salva la fonte", "Registra URL, variante e data insieme. Le pagine possono cambiare dopo la prima visita."],
      ["Selezionane tre", "Confronta prove e costo consegnato. Smetti di cercare quando tre opzioni soddisfano lo stesso brief."],
    ],
    sourceNote: ["Ogni scheda apre una pagina sorgente attiva", "Ricontrolla titolo, immagini, variante e disponibilità prima di fare affidamento su un riferimento salvato."],
    articleLibrary: ["BIBLIOTECA DI ARTICOLI SEO", "Quattro articoli indipendenti", "Ogni articolo ha un proprio URL indicizzabile, una versione linguistica completa e un intento di ricerca specifico."],
    guideHub: ["PERCORSO DECISIONALE", "Usa le guide nell’ordine corretto", "Passa dalla scoperta alle prove, alle taglie e alla pianificazione del pacco senza saltare i passaggi decisivi."],
    guideSteps: [
      ["Definisci il brief", "Annota uso, vestibilità, materiale e il dettaglio su cui non accetti compromessi."],
      ["Verifica la scheda", "Tieni insieme fonte attuale, variante, misure e prove fotografiche."],
      ["Esamina il QC", "Separa i fatti visibili dalle ipotesi e richiedi solo le prove mancanti."],
      ["Pianifica la consegna", "Confronta costo consegnato, peso fatturabile, protezione e condizioni della rotta."],
    ],
    onThisPage: "IN QUESTA PAGINA", fieldNote: "ARTICOLO SEO", completeMethod: "METODO COMPLETO",
    qcCheckpoints: [
      ["Identità", "Conferma colore, modello, taglia e variante prima di giudicare i dettagli."],
      ["Silhouette", "Controlla le proporzioni con viste centrate frontali, posteriori e laterali."],
      ["Misure", "Richiedi un metro visibile e punti di misurazione coerenti."],
      ["Materiale", "Confronta trama, grana, lucentezza e colore in più zone."],
      ["Costruzione", "Segui cuciture, chiusure, bordi e punti sottoposti a tensione."],
      ["Decisione", "Classifica ogni problema per gravità e chiedi solo le prove mancanti."],
    ],
    shippingBoard: [
      ["PESO REALE", "Articolo + imballaggio", "Utile per oggetti densi e compatti."],
      ["PESO VOLUMETRICO", "Lunghezza × larghezza × altezza", "Può determinare il costo di pacchi grandi e leggeri."],
      ["COSTO CONSEGNATO", "Prodotto + rotta + rischio", "Il valore da confrontare, non solo il prezzo esposto."],
    ],
    shippingWarning: ["Le regole cambiano in base a destinazione e rotta", "Verifica restrizioni, imposte, assicurazione e condizioni del corriere subito prima della spedizione. Questa biblioteca non offre consulenza doganale o legale."],
    independent: "Indipendente per scelta", backToArticles: "Torna a tutti gli articoli",
  },
  categories: [
    ["Scarpe", "Silhouette da campo, running e uso quotidiano"], ["Felpe con cappuccio", "Riferimenti per peso, forma e tessuto"],
    ["T-shirt", "Stampe, capi base e strati stagionali"], ["Giacche", "Strati esterni e forme tecniche"],
    ["Pantaloni e shorts", "Capi inferiori e completi guidati dalla vestibilità"], ["Copricapi", "Cappelli, maglieria e dettagli finali"],
    ["Accessori", "Borse, custodie, gioielli e orologi"], ["Elettronica", "Piccoli dispositivi e utilità quotidiana"],
  ],
  products: [
    ["Scarpa performante da campo", "Scarpe", "Riferimento per forma, suola e ammortizzazione"],
    ["Felpa dal taglio archivio", "Felpe con cappuccio", "Riferimento per grafica e peso del tessuto"],
    ["Borsa da giorno strutturata", "Accessori", "Riferimento per ferramenta e costruzione"],
    ["Orologio protagonista", "Accessori", "Riferimento per quadrante, incastonatura e chiusura"],
    ["Custodia telefono funzionale", "Accessori", "Riferimento per finitura e compatibilità"],
    ["Accessorio quotidiano minimale", "Accessori", "Riferimento per materiale e dettagli"],
  ],
  faqs: [
    ["Hacoos.org è il sito ufficiale di Hacoo?", "No. Hacoos.org è un indice informativo indipendente. Hacoo si descrive come una comunità globale di condivisione dei contenuti; questa biblioteca è un progetto separato di ricerca e navigazione."],
    ["Questo sito vende o spedisce prodotti?", "No. Pubblica contesto editoriale e link a pagine attive. Acquisto, pagamento, comunicazione con il venditore, ispezione e spedizione avvengono altrove."],
    ["Perché una pagina prodotto può cambiare dopo averla salvata?", "Il catalogo sorgente è attivo. Titoli, immagini, disponibilità, prezzi e opzioni di acquisto possono cambiare. Riapri la fonte prima di decidere."],
    ["Cosa controllare prima di usare un riferimento?", "Conferma variante, tabella taglie, materiale, storico del venditore, foto attuali, resi e costo consegnato. Un link utile è un punto di partenza, non una prova di qualità."],
    ["Un foglio Hacoo è un catalogo ufficiale?", "Non automaticamente. Hacoo si descrive oggi come comunità di contenuti; i fogli sono spesso collezioni indipendenti. Controlla proprietà, data e destinazione."],
    ["Hacoo è legittimo?", "Hacoo è un’app reale e listata con pagine ufficiali e un ampio storico pubblico. Questo non garantisce creator, prodotto, consegna o rimborso. Verifica la transazione nella tua regione."],
    ["Perché i punteggi Hacoo differiscono?", "Le piattaforme coprono regioni, periodi e metodi diversi. Il 26 agosto 2026 Apple Portogallo, Google Play e Trustpilot mostravano valori molto diversi; indica sempre fonte e data."],
    ["Ogni link Hacoo ha foto QC o spedizione fissa?", "No. Prove, dettagli, rotte e prezzi variano. Usa la pagina attuale e il servizio responsabile invece di una vecchia affermazione."],
  ],
  cards: [
    ["Scoperta", "Cerca con intenzione, non con una pila di screenshot", "Crea un brief breve, usa il linguaggio della categoria e conserva le prove con ogni riferimento."],
    ["Controllo qualità", "QC senza supposizioni: una revisione fotografica ripetibile", "Una sequenza pratica per silhouette, misure, materiale, costruzione, simmetria e imballaggio."],
    ["Taglie", "Misura il capo che possiedi già", "Perché le misure del corpo non bastano e come confrontare una tabella con un capo reale."],
    ["Spedizione", "Calcola il pacco prima del pagamento", "Stima peso fatturabile, protezione e consolidamento prima che un affare diventi costoso."],
  ],
  guides: [
    {
      title: "Cerca con intenzione, non con una pila di screenshot",
      standfirst: "Il modo più rapido per sprecare una serata è raccogliere decine di link simili senza annotare cosa rende utile ciascuno.",
      paragraphs: [
        "Inizia con una frase: oggetto, uso, dettaglio irrinunciabile e compromesso accettabile. «Felpa scura quotidiana, peso medio, fronte discreto, ampia ma non corta» è un brief ricercabile. «Bella felpa» non lo è. Il brief fornisce termini per i filtri e un motivo per eliminare presto i risultati inadatti.",
        "Cerca a strati. Parti dalla categoria per capire come il catalogo nomina i prodotti. Aggiungi poi tipologia, silhouette, materiale o dettaglio costruttivo. Evita lunghe stringhe di termini commerciali: i titoli sono spesso incoerenti, tradotti o abbreviati. Due ricerche brevi rivelano più di una query sovraccarica.",
        "Per ogni riferimento promettente salva URL, data, variante esatta e una frase sul motivo della selezione. Aggiungi l’immagine che dimostra il dettaglio importante. Uno screenshot senza fonte diventa orfano: non dice se la scheda è cambiata, se il colore è selezionabile o se il prezzo appartiene a un’altra opzione.",
        "Considera la popolarità un segnale da indagare, non un voto di qualità. Un articolo molto visto può essere attraente, economico, promosso o semplicemente vecchio. Contano prove specifiche: foto attuali, misure coerenti, dettagli costruttivi, storico del venditore e condizioni della variante esatta.",
        "Termina quando tre riferimenti soddisfano il brief. Confronta prezzo alla fonte, peso previsto, materiale dichiarato, misure, prove fotografiche, domande aperte e costo consegnato probabile. Lo scopo non è trovare ogni scheda, ma una lista breve che superi la verifica.",
      ],
    },
    {
      title: "QC senza supposizioni: una revisione fotografica ripetibile",
      standfirst: "Le foto di controllo diventano utili quando vengono esaminate sempre nello stesso ordine e i fatti visibili restano separati dalle ipotesi.",
      paragraphs: [
        "Inizia dall’identità. Conferma colore, modello, taglia e variante prima dei dettagli minimi. Molti errori costosi non sono difetti ma opzioni sbagliate fotografate bene. Quando le varianti si somigliano, chiedi etichetta, riferimento ordine o taglia nello stesso scatto.",
        "Passa a silhouette e proporzioni. Usa viste dritte e centrate davanti e dietro. Controlla rapporto larghezza-altezza, spalle, forma della punta, struttura della borsa o geometria della custodia prima di ingrandire. Una cucitura perfetta non corregge la forma sbagliata. Per le misure chiedi un metro piatto e visibile dallo zero.",
        "Esamina poi materiale e superficie. Cerca grana, pelo, lucentezza e colore coerenti sotto luce neutra. Compressione, plastica e fotocamera possono alterare la texture; confronta più zone. Un’unica foto ravvicinata e luminosa vale meno di diverse viste normali.",
        "Controlla la costruzione seguendo un percorso fisso: cuciture principali, bordi, chiusure, ferramenta, punti di attacco e zone di stress. Per le scarpe includi incollaggio della suola e simmetria. Per le borse basi dei manici, estremità delle zip e fodera. Per i capi polsi, orli, tasche e retro di ricami o stampe evidenti.",
        "Concludi con simmetria e contaminazioni. Confronta destra e sinistra dove previsto, poi cerca macchie, colla, graffi, fibre libere o struttura schiacciata. Registra posizione e gravità. «Sembra strano» è poco utile; una differenza precisa può essere verificata.",
        "Decidi rispetto al tuo brief, non alla perfezione. Classifica i risultati come variazione accettabile, presentazione correggibile, difetto funzionale o articolo sbagliato. Se manca una prova, chiedi una foto mirata invece di un altro set casuale. Il QC riduce l’incertezza prima del prossimo passaggio irreversibile.",
      ],
    },
    {
      title: "Misura il capo che possiedi già",
      standfirst: "Una taglia in etichetta è un nome. Una misura in piano è una prova confrontabile.",
      paragraphs: [
        "Scegli un capo che veste come vuoi che vesta quello nuovo, non soltanto uno indossabile. Stendilo senza tirarlo. Registra torace, spalle, lunghezza e maniche usando gli stessi punti della tabella del venditore. Per i pantaloni misura vita in piano, cavallo, coscia, interno gamba e apertura fondo.",
        "Confronta elementi equivalenti. Una circonferenza torace non si confronta direttamente con una mezza larghezza in piano. Maniche raglan e spalle scese usano punti diversi dalle maniche montate. Se la tabella non spiega il metodo, chiedi una foto dell’articolo misurato in piano.",
        "Considera il comportamento del materiale. Maglia, coste e vite elastiche possono allungarsi; un tessuto fitto forse no. Lavaggio, stiratura e tolleranza produttiva spostano le misure. Tra due taglie, decidi quale dimensione controlla il comfort e quale accetta variazione.",
        "Conserva le misure con il link fonte e la variante scelta. Se la scheda cambia, la decisione resta verificabile. Questa abitudine è più affidabile dei consigli di persone di cui non conosci preferenza di vestibilità e proporzioni.",
      ],
    },
    {
      title: "Calcola il pacco prima del pagamento",
      standfirst: "Il prezzo esposto del prodotto è solo una parte della decisione finale.",
      paragraphs: [
        "Stima peso reale e volume imballato prima di effettuare più ordini. La spedizione può usare peso reale o volumetrico, scegliendo il maggiore. Scarpe, borse strutturate e scatole protettive possono occupare più spazio fatturabile di quanto suggerisca la massa.",
        "Scegli la protezione in base al rischio. Rimuovere l’imballaggio riduce il volume, ma una scatola rigida protegge un prodotto sagomato. Il sottovuoto aiuta con capi morbidi, non con oggetti che si piegano, si deformano o hanno superfici delicate. Una foto del pacco pronto rende visibile il compromesso.",
        "Il consolidamento distribuisce il costo base su più articoli, ma aumenta valore e complessità di un singolo pacco. Confronta un pacco grande con due piccoli usando limiti della rotta, assicurazione e tracciamento. La tariffa più bassa non è sempre l’opzione meno rischiosa.",
        "Infine considera regole di destinazione, imposte, materiali vietati e conseguenze di una mancata consegna. Cambiano per rotta e paese. Verificale con il corriere subito prima della spedizione, invece di affidarti a un vecchio post della community.",
      ],
    },
  ],
};

const pt: LocaleText = {
  ui: {
    selectedReferences: "Referências de produto selecionadas", object: "OBJETO", paperNote: ["Pesquise menos.", "Verifique melhor."],
    signals: ["categorias ativas", "idiomas completos", "antes de decidir", "ligações para páginas de origem"],
    kickers: ["01 / ÍNDICE", "02 / CATEGORIAS", "03 / MÉTODO", "04 / ARTIGOS SEO", "05 / PERGUNTAS"],
    methodCards: [
      ["Encontre a fonte ativa", "Guarde página, variante e data em conjunto. Uma imagem isolada não é uma referência verificável."],
      ["Compare provas reais", "Use medidas, fotografias atuais e detalhes de construção em vez de confiar em etiquetas ou popularidade."],
      ["Resolva a incerteza", "Faça uma pergunta precisa ou peça uma fotografia específica antes da próxima etapa irreversível."],
    ],
    libraryPrefix: "BIBLIOTECA DE CAMPO HACOOS", searchHelp: "A pesquisa abre o catálogo de origem atual. Use termos curtos e depois verifique a ficha exata.", entryPoints: "PONTOS DE ENTRADA",
    editorialSteps: [
      ["Comece de forma ampla", "Perceba como o catálogo nomeia a categoria antes de acrescentar estilo, material ou modelo."],
      ["Guarde a fonte", "Registe URL, variante e data em conjunto. As páginas podem mudar depois da primeira visita."],
      ["Escolha três", "Compare provas e custo entregue. Pare de procurar quando três opções cumprirem o mesmo objetivo."],
    ],
    sourceNote: ["Cada cartão abre uma página de origem ativa", "Volte a confirmar título, imagens, variante e disponibilidade antes de confiar numa referência guardada."],
    articleLibrary: ["BIBLIOTECA DE ARTIGOS SEO", "Quatro artigos independentes", "Cada artigo tem um URL indexável próprio, uma versão linguística completa e uma intenção de pesquisa definida."],
    guideHub: ["PERCURSO DE DECISÃO", "Use os guias pela ordem correta", "Passe da descoberta às provas, aos tamanhos e ao planeamento do pacote sem ignorar decisões importantes."],
    guideSteps: [
      ["Defina o objetivo", "Anote utilização, corte, material e o detalhe em que não aceita compromisso."],
      ["Verifique a ficha", "Mantenha juntos a fonte atual, a variante, as medidas e as provas fotográficas."],
      ["Analise o QC", "Separe factos visíveis de suposições e peça apenas as provas em falta."],
      ["Planeie a entrega", "Compare custo entregue, peso faturável, proteção e condições da rota."],
    ],
    onThisPage: "NESTA PÁGINA", fieldNote: "ARTIGO SEO", completeMethod: "MÉTODO COMPLETO",
    qcCheckpoints: [
      ["Identidade", "Confirme cor, modelo, tamanho e variante antes de avaliar detalhes."],
      ["Silhueta", "Verifique as proporções em vistas centradas de frente, costas e lateral."],
      ["Medidas", "Peça uma fita visível e pontos de medição consistentes."],
      ["Material", "Compare textura, grão, brilho e cor em várias zonas."],
      ["Construção", "Siga costuras, fechos, acabamentos e pontos sujeitos a tensão."],
      ["Decisão", "Classifique cada problema por gravidade e peça apenas as provas em falta."],
    ],
    shippingBoard: [
      ["PESO REAL", "Artigo + embalagem", "Útil para objetos densos e compactos."],
      ["PESO VOLUMÉTRICO", "Comprimento × largura × altura", "Pode determinar o preço de pacotes grandes e leves."],
      ["CUSTO ENTREGUE", "Produto + rota + risco", "O valor a comparar, não apenas o preço anunciado."],
    ],
    shippingWarning: ["As regras mudam conforme o destino e a rota", "Confirme restrições, impostos, seguro e condições da transportadora imediatamente antes do envio. Esta biblioteca não presta aconselhamento aduaneiro ou jurídico."],
    independent: "Independente por definição", backToArticles: "Voltar a todos os artigos",
  },
  categories: [
    ["Calçado", "Silhuetas de campo, corrida e uso diário"], ["Sweatshirts", "Referências de peso, forma e tecido"],
    ["T-shirts", "Estampados, básicos e camadas sazonais"], ["Casacos", "Camadas exteriores e formas técnicas"],
    ["Calças e calções", "Peças inferiores e conjuntos guiados pelo corte"], ["Acessórios de cabeça", "Bonés, malhas e peças finais"],
    ["Acessórios", "Malas, capas, joias e relógios"], ["Eletrónica", "Pequenos dispositivos e utilidade diária"],
  ],
  products: [
    ["Sapatilha de campo de desempenho", "Calçado", "Referência de forma, sola e amortecimento"],
    ["Sweatshirt de corte arquivo", "Sweatshirts", "Referência de posicionamento gráfico e gramagem"],
    ["Mala de dia estruturada", "Acessórios", "Referência de ferragens e construção"],
    ["Relógio de destaque", "Acessórios", "Referência de mostrador, cravação e fecho"],
    ["Capa de telemóvel funcional", "Acessórios", "Referência de acabamento e ajuste"],
    ["Acessório diário minimalista", "Acessórios", "Referência de material e detalhes"],
  ],
  faqs: [
    ["Hacoos.org é o site oficial da Hacoo?", "Não. Hacoos.org é um índice informativo independente. A Hacoo descreve-se como uma comunidade global de partilha de conteúdos; esta biblioteca é um projeto separado de pesquisa e navegação."],
    ["Este site vende ou envia produtos?", "Não. Publica contexto editorial e ligações para páginas ativas. Compra, pagamento, contacto com vendedor, inspeção e envio acontecem noutros serviços."],
    ["Porque pode uma página mudar depois de a guardar?", "O catálogo de origem está ativo. Títulos, imagens, disponibilidade, preços e opções de compra podem mudar. Abra novamente a fonte antes de decidir."],
    ["O que devo verificar antes de usar uma referência?", "Confirme variante, tabela de tamanhos, material, histórico do vendedor, fotografias atuais, devoluções e custo entregue. Uma ligação útil é um ponto de partida, não uma prova de qualidade."],
    ["Uma folha Hacoo é um catálogo oficial?", "Não automaticamente. A Hacoo descreve-se hoje como comunidade de conteúdos; as folhas são muitas vezes independentes. Verifique proprietário, data e destino."],
    ["A Hacoo é legítima?", "A Hacoo é uma aplicação real e listada com páginas oficiais e amplo histórico público. Isso não garante criador, produto, entrega ou reembolso. Confirme a transação na sua região."],
    ["Porque diferem as pontuações Hacoo?", "As plataformas cobrem regiões, períodos e métodos diferentes. Em 26 de agosto de 2026 Apple Portugal, Google Play e Trustpilot mostravam valores distintos; indique sempre fonte e data."],
    ["Cada ligação Hacoo tem fotos QC ou envio fixo?", "Não. Provas, detalhes, rotas e preços variam. Use a página atual e o serviço responsável em vez de uma afirmação antiga."],
  ],
  cards: [
    ["Descoberta", "Pesquise com intenção, não com uma pilha de capturas", "Crie um objetivo curto, use a linguagem da categoria e mantenha as provas junto de cada referência."],
    ["Controlo de qualidade", "QC sem adivinhar: uma revisão fotográfica repetível", "Uma sequência prática para silhueta, medidas, material, construção, simetria e embalagem."],
    ["Tamanhos", "Meça a peça que já possui", "Porque as medidas do corpo não bastam e como comparar uma tabela com uma peça real."],
    ["Envio", "Calcule o pacote antes de pagar", "Estime peso faturável, proteção e consolidação antes de uma oportunidade ficar cara."],
  ],
  guides: [
    {
      title: "Pesquise com intenção, não com uma pilha de capturas",
      standfirst: "A forma mais rápida de perder uma noite é reunir dezenas de ligações semelhantes sem anotar o que tornava cada uma útil.",
      paragraphs: [
        "Comece com uma frase: objeto, utilização, detalhe não negociável e compromisso aceitável. «Sweatshirt escura para o dia a dia, peso médio, frente discreta, larga mas não curta» é um objetivo pesquisável. «Sweatshirt bonita» não é. O objetivo fornece vocabulário para filtros e uma razão para eliminar cedo os resultados inadequados.",
        "Pesquise por camadas. Comece na categoria para compreender os padrões de nomes do catálogo. Depois acrescente tipo de produto, silhueta, material ou detalhe construtivo. Evite uma longa sequência de termos comerciais; os títulos são muitas vezes inconsistentes, traduzidos ou abreviados. Duas pesquisas curtas revelam mais do que uma consulta sobrecarregada.",
        "Para cada referência promissora, guarde o URL de origem, a data, a variante exata e uma frase que explique a seleção. Acrescente a imagem que demonstra o detalhe importante. Uma captura sem a sua fonte fica órfã: não mostra se a ficha mudou, se a cor pode ser escolhida ou se o preço pertence a outra opção.",
        "Trate a popularidade como sinal para investigar, não como nota de qualidade. Um artigo muito visto pode ser atraente, barato, promovido ou simplesmente antigo. As provas relevantes continuam específicas: fotos atuais, medidas coerentes, detalhes construtivos, histórico do vendedor e condições da variante exata.",
        "Termine quando três referências cumprirem o objetivo. Compare preço na origem, peso esperado, material declarado, medidas, provas fotográficas, questões abertas e custo entregue provável. O objetivo não é encontrar todas as fichas, mas uma lista curta que resista à verificação.",
      ],
    },
    {
      title: "QC sem adivinhar: uma revisão fotográfica repetível",
      standfirst: "As fotografias de controlo tornam-se úteis quando são revistas sempre pela mesma ordem e os factos visíveis ficam separados das suposições.",
      paragraphs: [
        "Comece pela identidade. Confirme cor, modelo, tamanho e variante antes dos pequenos detalhes. Muitos erros caros não são defeitos, mas a opção errada bem fotografada. Quando as variantes se parecem, peça etiqueta, referência ou tamanho no mesmo enquadramento.",
        "Passe à silhueta e proporção. Use vistas direitas e centradas de frente e costas. Verifique relação largura-altura, ombros, forma da biqueira, estrutura da mala ou geometria da capa antes de ampliar. Uma costura perfeita não corrige a forma errada. Para medidas, peça uma fita plana e visível desde o zero.",
        "Examine depois material e superfície. Procure grão, textura, brilho e cor consistentes sob luz neutra. Compressão, plástico e câmara podem distorcer a textura; compare várias zonas. Uma única fotografia clara de perto fornece menos prova do que várias vistas normais.",
        "Analise a construção num percurso fixo: costuras principais, bordos, fechos, ferragens, pontos de união e áreas de tensão. No calçado, inclua colagem da sola e simetria. Nas malas, bases das alças, extremos dos fechos e forro. Na roupa, punhos, bainhas, bolsos e verso de bordados ou estampados visíveis.",
        "Termine com simetria e contaminação. Compare esquerda e direita onde esperado e procure manchas, cola, riscos, fibras soltas ou estrutura esmagada. Registe localização e gravidade. «Parece estranho» é pouco útil; uma diferença concreta pode ser confirmada.",
        "Decida em relação ao seu objetivo, não à perfeição. Classifique os resultados como variação aceitável, apresentação corrigível, defeito funcional ou artigo errado. Se faltar prova, peça uma foto específica em vez de outro conjunto aleatório. O QC reduz a incerteza antes do próximo passo irreversível.",
      ],
    },
    {
      title: "Meça a peça que já possui",
      standfirst: "Um tamanho na etiqueta é um nome. Uma medida em plano é uma prova comparável.",
      paragraphs: [
        "Escolha uma peça que assente como deseja que a nova assente, não apenas uma que consegue usar. Coloque-a plana sem esticar. Registe peito, ombros, comprimento e mangas com os mesmos pontos da tabela do vendedor. Para calças, meça cintura em plano, gancho, coxa, entreperna e abertura da bainha.",
        "Compare medidas equivalentes. Um contorno de peito não se compara diretamente com meia largura em plano. Mangas raglã e ombros descaídos usam pontos diferentes das mangas montadas. Se a tabela não explicar o método, peça uma fotografia do artigo medido em plano.",
        "Considere o comportamento do material. Malha, canelado e cinturas elásticas podem ceder; tecido denso talvez não. Lavagem, engomagem e tolerância de fabrico também alteram medidas. Entre dois tamanhos, decida qual dimensão controla o conforto e qual aceita variação.",
        "Guarde as medidas com a ligação de origem e a variante escolhida. Se a ficha mudar, a decisão continua verificável. Este hábito é mais fiável do que recomendações de pessoas cujas proporções e preferência de corte desconhece.",
      ],
    },
    {
      title: "Calcule o pacote antes de pagar",
      standfirst: "O preço anunciado do produto é apenas uma parte da decisão final.",
      paragraphs: [
        "Estime peso real e volume embalado antes de fazer várias encomendas. O envio pode usar peso real ou volumétrico, escolhendo o maior. Calçado, malas estruturadas e caixas protetoras podem ocupar mais espaço faturável do que a sua massa sugere.",
        "Escolha proteção conforme o risco. Remover embalagem pode reduzir volume, mas uma caixa rígida protege um produto com forma. O vácuo ajuda roupa macia, não peças que enrugam, deformam ou têm superfícies delicadas. Uma foto do pacote preparado torna o compromisso visível.",
        "A consolidação divide o custo base entre vários artigos, mas aumenta valor e complexidade de um só pacote. Compare um pacote grande com dois pequenos usando limites de rota, seguro e seguimento. A tarifa mais baixa nem sempre é a opção de menor risco.",
        "Por fim, considere regras do destino, impostos, materiais proibidos e consequências de uma entrega impossível. Mudam conforme rota e país. Confirme com a transportadora imediatamente antes do envio, em vez de confiar numa publicação antiga da comunidade.",
      ],
    },
  ],
};

function buildLocale(text: LocaleText, locale: Locale) {
  return {
    ui: text.ui,
    categories: categories.map((item, index) => ({ ...item, name: text.categories[index][0], note: text.categories[index][1] })),
    products: products.map((item, index) => ({ ...item, title: text.products[index][0], category: text.products[index][1], note: text.products[index][2] })),
    faqs: faqs.map((_, index) => text.faqs[index]),
    guideCards: orderedArticles(locale).map(({ id, tag, title, summary }) => ({ id, tag, title, summary })),
    longGuides: orderedArticles(locale),
  };
}

export const localizedContent = {
  en: { ui: enUi, categories, products, faqs, guideCards: orderedArticles("en").map(({ id, tag, title, summary }) => ({ id, tag, title, summary })), longGuides: orderedArticles("en") },
  de: buildLocale(de, "de"),
  fr: buildLocale(fr, "fr"),
  es: buildLocale(es, "es"),
  it: buildLocale(it, "it"),
  pt: buildLocale(pt, "pt"),
} satisfies Record<Locale, ReturnType<typeof buildLocale>>;

export const articleSlugs = [...articleOrder];
