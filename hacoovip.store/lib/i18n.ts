import translations from "./translations.generated.json";
import { copy, type Locale } from "./site-data";

type TranslationTable = Record<Locale, Record<string, string>>;

const table = translations as TranslationTable;

const overrides: Partial<Record<Locale, Record<string, string>>> = {
  de: {
    "Hacoo home": "Hacoo-Startseite", "Primary navigation": "Hauptnavigation", product: "Produkt",
    "Featured Hacoo categories": "Ausgewählte Hacoo-Kategorien", "Product categories": "Produktkategorien",
    "Hacoo facts checked August 28 2026": "Hacoo-Fakten, geprüft am 28. August 2026",
    "Hacoo says users can share, review and connect. Read the source check →": "Laut Hacoo können Nutzer teilen, bewerten und Kontakte knüpfen. Quellenprüfung lesen →",
    "10M+ downloads": "Über 10 Mio. Downloads", "About 59K reviews and ~4.1 stars when checked. Read the app guide →": "Bei der Prüfung rund 59.000 Rezensionen und etwa 4,1 Sterne. App-Leitfaden lesen →",
    "Official guidance—not a guaranteed delivery date. See shipping facts →": "Offizielle Richtangabe – kein garantiertes Lieferdatum. Versandfakten ansehen →",
    "15–28 days": "15–28 Tage", "15–25 days": "15–25 Tage", "15–30 days": "15–30 Tage", "25–65 days": "25–65 Tage", Breadcrumb: "Brotkrümelnavigation",
  },
  es: {
    "Hacoo home": "Inicio de Hacoo", "Primary navigation": "Navegación principal", product: "producto",
    "Featured Hacoo categories": "Categorías destacadas de Hacoo", "Product categories": "Categorías de productos",
    "Hacoo facts checked August 28 2026": "Datos de Hacoo comprobados el 28 de agosto de 2026",
    "Hacoo says users can share, review and connect. Read the source check →": "Hacoo afirma que los usuarios pueden compartir, valorar y conectar. Verificación de fuentes →",
    "10M+ downloads": "Más de 10 M de descargas", "About 59K reviews and ~4.1 stars when checked. Read the app guide →": "Al comprobarlo: unas 59.000 reseñas y cerca de 4,1 estrellas. Leer la guía de la app →",
    "Official guidance—not a guaranteed delivery date. See shipping facts →": "Orientación oficial, no una fecha de entrega garantizada. Ver datos de envío →",
    "15–28 days": "15–28 días", "15–25 days": "15–25 días", "15–30 days": "15–30 días", "25–65 days": "25–65 días", Breadcrumb: "Ruta de navegación",
  },
  fr: {
    "Hacoo home": "Accueil Hacoo", "Primary navigation": "Navigation principale", product: "produit",
    "Featured Hacoo categories": "Catégories Hacoo à la une", "Product categories": "Catégories de produits",
    "Hacoo facts checked August 28 2026": "Informations Hacoo vérifiées le 28 août 2026",
    "Hacoo says users can share, review and connect. Read the source check →": "Hacoo indique que les utilisateurs peuvent partager, évaluer et échanger. Lire la vérification des sources →",
    "10M+ downloads": "Plus de 10 M de téléchargements", "About 59K reviews and ~4.1 stars when checked. Read the app guide →": "Lors de la vérification : environ 59 000 avis et près de 4,1 étoiles. Lire le guide de l’application →",
    "Official guidance—not a guaranteed delivery date. See shipping facts →": "Indication officielle, pas une date de livraison garantie. Voir les faits sur la livraison →",
    "15–28 days": "15–28 jours", "15–25 days": "15–25 jours", "15–30 days": "15–30 jours", "25–65 days": "25–65 jours", Breadcrumb: "Fil d’Ariane",
  },
  it: {
    "Hacoo home": "Home di Hacoo", "Primary navigation": "Navigazione principale", product: "prodotto",
    "Featured Hacoo categories": "Categorie Hacoo in evidenza", "Product categories": "Categorie di prodotti",
    "Hacoo facts checked August 28 2026": "Dati Hacoo verificati il 28 agosto 2026",
    "Hacoo says users can share, review and connect. Read the source check →": "Hacoo afferma che gli utenti possono condividere, recensire e connettersi. Leggi la verifica delle fonti →",
    "10M+ downloads": "Oltre 10 mln di download", "About 59K reviews and ~4.1 stars when checked. Read the app guide →": "Al momento del controllo: circa 59.000 recensioni e 4,1 stelle. Leggi la guida all’app →",
    "Official guidance—not a guaranteed delivery date. See shipping facts →": "Indicazione ufficiale, non una data di consegna garantita. Vedi i dati sulla spedizione →",
    "15–28 days": "15–28 giorni", "15–25 days": "15–25 giorni", "15–30 days": "15–30 giorni", "25–65 days": "25–65 giorni", Breadcrumb: "Percorso di navigazione",
  },
};

export function translate(locale: Locale, value: string) {
  return overrides[locale]?.[value] ?? table[locale]?.[value] ?? value;
}

export function localizedCopy(locale: Locale): Record<string, string> {
  return Object.fromEntries(
    Object.entries(copy.en).map(([key, value]) => [key, translate(locale, value)]),
  );
}
