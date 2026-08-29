import type { ArticleSlug } from "@/lib/articles";
import type { Lang } from "@/lib/site-data";

export type SeoEntry = { title: string; description: string };
export type SeoRoute = "home" | "spreadsheet" | "finds" | "guide" | "qc" | "shipping" | "articles" | "faq";

export const pageSeo: Record<Lang, Record<SeoRoute, SeoEntry>> = {
  en: {
    home: {
      title: "Hacoo Item Checks, Fit Notes & Reviews | HacooVIP Pro",
      description: "Check received Hacoo items by color, size, quantity, measurements, fit and care details, then keep a clear record for an evidence-based review.",
    },
    spreadsheet: {
      title: "Hacoo Item Record Sheet: Size, Fit & Care Notes",
      description: "Build a dated Hacoo item record with the source link, selected variant, measurements, fit observations, care details and review notes.",
    },
    finds: {
      title: "Hacoo Items by Category for Post-Delivery Checks",
      description: "Browse matching item categories and use each route as a reference when recording the color, size, included parts and fit of a received item.",
    },
    guide: {
      title: "Hacoo Received Item Checklist: Measure, Test & Review",
      description: "Follow a practical received-item workflow for matching variants, taking consistent measurements, recording first use and writing a specific review.",
    },
    qc: {
      title: "Hacoo Item Check: Photos, Measurements & Fit Notes",
      description: "Use neutral-light photos, repeatable measurements and careful fit notes to document what a received Hacoo item shows—and what remains unknown.",
    },
    shipping: {
      title: "Hacoo Delivery Record: Parcel, Item & Timeline Checks",
      description: "Keep delivery timing separate from the physical item check, record each parcel clearly and verify current Hacoo guidance before relying on estimates.",
    },
    articles: {
      title: "Hacoo Item Check Guides: Fit, Care & Review Methods",
      description: "Read independent Hacoo guides on received-item records, measurements, fit evidence, review methods and dated platform information.",
    },
    faq: {
      title: "Hacoo Item Check FAQ: Size, Care, Reviews & Records",
      description: "Quick answers on recording a received Hacoo item, checking measurements and fit, protecting private details and writing a useful product review.",
    },
  },
  de: {
    home: {
      title: "Hacoo Artikel prüfen: Maße, Passform & Bewertungen",
      description: "Prüfe erhaltene Hacoo-Artikel nach Farbe, Größe, Menge, Maßen, Passform und Pflege und dokumentiere die Beobachtungen für eine sachliche Bewertung.",
    },
    spreadsheet: {
      title: "Hacoo Artikelliste: Maße, Passform und Pflege notieren",
      description: "Erstelle einen datierten Hacoo-Artikeldatensatz mit Quelllink, Variante, Maßen, Passform, Pflegehinweisen und konkreten Bewertungsnotizen.",
    },
    finds: {
      title: "Hacoo Artikel nach Kategorie für den Erhalt-Check",
      description: "Nutze passende Kategorien als Referenz, wenn du Farbe, Größe, Lieferumfang, Maße und Passform eines erhaltenen Hacoo-Artikels dokumentierst.",
    },
    guide: {
      title: "Hacoo Erhalt-Checkliste: Messen, testen und bewerten",
      description: "Folge einem klaren Ablauf zum Abgleich der Variante, für einheitliche Maße, erste Nutzungshinweise und eine nachvollziehbare Produktbewertung.",
    },
    qc: {
      title: "Hacoo Artikelcheck: Fotos, Maße und Passform",
      description: "Dokumentiere mit neutralem Licht, wiederholbaren Maßen und klaren Passformnotizen, was ein erhaltener Hacoo-Artikel zeigt und was unbekannt bleibt.",
    },
    shipping: {
      title: "Hacoo Lieferprotokoll: Paket, Artikel und Zeitlinie",
      description: "Trenne Lieferverlauf und Artikelprüfung, dokumentiere jedes Paket und prüfe aktuelle Hacoo-Angaben, bevor du dich auf Zeitspannen verlässt.",
    },
    articles: {
      title: "Hacoo Artikelcheck-Guides: Passform, Pflege und Reviews",
      description: "Unabhängige Hacoo-Guides zu erhaltenen Artikeln, Maßen, Passformbelegen, Bewertungsmethoden und datierten Plattforminformationen.",
    },
    faq: {
      title: "Hacoo Artikelcheck FAQ: Größe, Pflege und Bewertungen",
      description: "Kurze Antworten zum Dokumentieren erhaltener Hacoo-Artikel, zu Maßen und Passform, zum Schutz privater Daten und zu hilfreichen Reviews.",
    },
  },
  es: {
    home: {
      title: "Revisar artículos Hacoo: talla, ajuste y reseñas",
      description: "Comprueba color, talla, cantidad, medidas, ajuste y cuidados de un artículo Hacoo recibido y guarda un registro claro para una reseña basada en datos.",
    },
    spreadsheet: {
      title: "Registro de artículos Hacoo: medidas, ajuste y cuidado",
      description: "Crea un registro fechado con enlace de origen, variante elegida, medidas, observaciones de ajuste, cuidados y notas concretas para la reseña.",
    },
    finds: {
      title: "Artículos Hacoo por categoría para revisar al recibirlos",
      description: "Usa categorías y referencias coincidentes para anotar color, talla, piezas incluidas, medidas y ajuste de cada artículo Hacoo recibido.",
    },
    guide: {
      title: "Checklist de artículos Hacoo recibidos: medir y revisar",
      description: "Sigue un proceso práctico para confirmar variantes, medir de forma coherente, registrar el primer uso y escribir una reseña específica.",
    },
    qc: {
      title: "Revisión de artículos Hacoo: fotos, medidas y ajuste",
      description: "Documenta con luz neutra, medidas repetibles y notas de ajuste lo que muestra un artículo Hacoo recibido y lo que todavía no se puede saber.",
    },
    shipping: {
      title: "Registro de entrega Hacoo: paquete, artículo y tiempos",
      description: "Separa el recorrido del paquete de la revisión física del artículo y confirma la información actual de Hacoo antes de usar una estimación.",
    },
    articles: {
      title: "Guías Hacoo: ajuste, cuidado y reseñas de artículos",
      description: "Guías independientes sobre registros de artículos Hacoo recibidos, medidas, ajuste, métodos de reseña e información de plataforma con fecha.",
    },
    faq: {
      title: "FAQ Hacoo: talla, cuidado, reseñas y registros",
      description: "Respuestas rápidas para registrar un artículo Hacoo recibido, comprobar talla y ajuste, proteger datos privados y escribir una reseña útil.",
    },
  },
  fr: {
    home: {
      title: "Vérifier un article Hacoo : taille, mesures et avis",
      description: "Contrôlez couleur, taille, quantité, mesures, coupe et entretien d’un article Hacoo reçu, puis gardez une trace claire pour rédiger un avis factuel.",
    },
    spreadsheet: {
      title: "Fiche article Hacoo : mesures, coupe et entretien",
      description: "Créez une fiche datée avec lien source, variante, mesures, observations de coupe, entretien et notes précises pour votre avis produit.",
    },
    finds: {
      title: "Articles Hacoo par catégorie pour le contrôle à réception",
      description: "Utilisez les catégories et références correspondantes pour noter couleur, taille, éléments inclus, mesures et coupe d’un article Hacoo reçu.",
    },
    guide: {
      title: "Checklist Hacoo à réception : mesurer, tester et évaluer",
      description: "Suivez une méthode pratique pour confirmer la variante, mesurer de façon cohérente, noter la première utilisation et rédiger un avis précis.",
    },
    qc: {
      title: "Contrôle article Hacoo : photos, mesures et coupe",
      description: "Documentez avec une lumière neutre, des mesures répétables et des notes de coupe ce qu’un article Hacoo reçu montre et ce qui reste inconnu.",
    },
    shipping: {
      title: "Suivi de livraison Hacoo : colis, article et chronologie",
      description: "Séparez le parcours du colis du contrôle physique de l’article et revérifiez les informations Hacoo avant de retenir une estimation.",
    },
    articles: {
      title: "Guides Hacoo : coupe, entretien et avis produit",
      description: "Guides indépendants sur les articles Hacoo reçus, les mesures, les preuves de coupe, les méthodes d’avis et les informations datées.",
    },
    faq: {
      title: "FAQ Hacoo : taille, entretien, avis et fiches article",
      description: "Réponses rapides pour documenter un article Hacoo reçu, contrôler mesures et coupe, protéger les données privées et rédiger un avis utile.",
    },
  },
  it: {
    home: {
      title: "Controllare articoli Hacoo: taglia, misure e recensioni",
      description: "Controlla colore, taglia, quantità, misure, vestibilità e cura di un articolo Hacoo ricevuto e conserva dati chiari per una recensione concreta.",
    },
    spreadsheet: {
      title: "Scheda articolo Hacoo: misure, vestibilità e cura",
      description: "Crea una scheda datata con link fonte, variante, misure, note sulla vestibilità, istruzioni di cura e osservazioni per la recensione.",
    },
    finds: {
      title: "Articoli Hacoo per categoria da controllare alla consegna",
      description: "Usa categorie e riferimenti corrispondenti per annotare colore, taglia, parti incluse, misure e vestibilità di un articolo Hacoo ricevuto.",
    },
    guide: {
      title: "Checklist articoli Hacoo ricevuti: misura, prova e valuta",
      description: "Segui un metodo pratico per confermare la variante, misurare in modo coerente, registrare il primo uso e scrivere una recensione specifica.",
    },
    qc: {
      title: "Controllo articolo Hacoo: foto, misure e vestibilità",
      description: "Documenta con luce neutra, misure ripetibili e note sulla vestibilità ciò che un articolo Hacoo ricevuto mostra e ciò che resta ignoto.",
    },
    shipping: {
      title: "Registro consegna Hacoo: pacco, articolo e tempistiche",
      description: "Separa il percorso del pacco dal controllo fisico dell’articolo e verifica le informazioni Hacoo attuali prima di usare una stima.",
    },
    articles: {
      title: "Guide Hacoo: vestibilità, cura e recensioni prodotto",
      description: "Guide indipendenti su articoli Hacoo ricevuti, misure, prove di vestibilità, metodi di recensione e informazioni di piattaforma datate.",
    },
    faq: {
      title: "FAQ Hacoo: taglia, cura, recensioni e schede articolo",
      description: "Risposte rapide per registrare un articolo Hacoo ricevuto, controllare taglia e vestibilità, proteggere dati privati e scrivere una recensione utile.",
    },
  },
};

export const articleSeo: Record<Lang, Record<ArticleSlug, SeoEntry>> = {
  en: {
    "hacoo-spreadsheet-live-source": { title: "Hacoo Item Records: Keep the Live Product Source", description: "Use a dated Hacoo item record without losing the live source, selected variant, measurements and evidence needed for later fit or review notes." },
    "hacoo-reviews-2026": { title: "Hacoo Reviews & QC: Read Photos and Size Notes", description: "Separate product evidence from app, delivery and support opinions with dated rating sources, careful photo checks and measurement-based size notes." },
    "hacoo-shipping-time-cost": { title: "Hacoo Shipping Times, Costs & Delivery Records", description: "Read Hacoo’s published country ranges, separate estimates from guarantees and keep a clear parcel timeline before checking the received item." },
  },
  de: {
    "hacoo-spreadsheet-live-source": { title: "Hacoo Artikeldaten mit aktueller Produktquelle", description: "Führe einen datierten Hacoo-Artikeldatensatz mit Live-Quelle, Variante, Maßen und Belegen für spätere Passform- oder Bewertungsnotizen." },
    "hacoo-reviews-2026": { title: "Hacoo Bewertungen & QC: Fotos und Größenhinweise", description: "Trenne Produktbelege von App-, Liefer- und Supportmeinungen mit datierten Quellen, vorsichtiger Fotoprüfung und messbaren Größenangaben." },
    "hacoo-shipping-time-cost": { title: "Hacoo Versandzeiten, Kosten und Lieferprotokoll", description: "Lies veröffentlichte Länderbereiche, trenne Schätzung und Garantie und führe eine klare Paketzeitlinie bis zur Artikelprüfung." },
  },
  es: {
    "hacoo-spreadsheet-live-source": { title: "Registro Hacoo con la fuente de producto actual", description: "Mantén un registro fechado con fuente en vivo, variante, medidas y pruebas para posteriores notas de ajuste o reseña del artículo." },
    "hacoo-reviews-2026": { title: "Reseñas y QC Hacoo: fotos, tallas y contexto", description: "Separa pruebas del producto de opiniones sobre app, entrega y soporte usando fuentes fechadas, fotos y notas de talla basadas en medidas." },
    "hacoo-shipping-time-cost": { title: "Tiempos, costes y registro de entrega Hacoo", description: "Lee los plazos publicados por país, separa estimaciones de garantías y conserva una cronología clara antes de revisar el artículo recibido." },
  },
  fr: {
    "hacoo-spreadsheet-live-source": { title: "Fiche Hacoo reliée à la source produit en direct", description: "Conservez une fiche datée avec source en direct, variante, mesures et preuves utiles aux futures notes de coupe ou d’avis produit." },
    "hacoo-reviews-2026": { title: "Avis et QC Hacoo : photos, tailles et contexte", description: "Séparez preuves produit et opinions sur l’app, la livraison ou le support avec des sources datées, des photos et des mesures de taille." },
    "hacoo-shipping-time-cost": { title: "Délais, coûts et suivi de livraison Hacoo", description: "Lisez les fourchettes publiées par pays, séparez estimations et garanties et gardez une chronologie claire avant le contrôle de l’article." },
  },
  it: {
    "hacoo-spreadsheet-live-source": { title: "Scheda Hacoo collegata alla fonte prodotto live", description: "Conserva una scheda datata con fonte live, variante, misure e prove utili per future note su vestibilità o recensione del prodotto." },
    "hacoo-reviews-2026": { title: "Recensioni e QC Hacoo: foto, taglie e contesto", description: "Separa prove sul prodotto e opinioni su app, consegna o supporto con fonti datate, foto controllate e note taglia basate su misure." },
    "hacoo-shipping-time-cost": { title: "Tempi, costi e registro di consegna Hacoo", description: "Leggi gli intervalli pubblicati per Paese, separa stime e garanzie e conserva una cronologia chiara prima del controllo dell’articolo." },
  },
};
