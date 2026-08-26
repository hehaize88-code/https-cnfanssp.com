import { DESTINATION } from "@/app/data";
import { Arrow, SearchIcon } from "./Icons";

const SEARCH_COPY = {
  en: { label: "Search live catalog", placeholder: "Search products...", button: "Search live catalog products" },
  es: { label: "Buscar en el catálogo actual", placeholder: "Buscar productos...", button: "Buscar productos en el catálogo actual" },
  fr: { label: "Rechercher dans le catalogue actuel", placeholder: "Rechercher un produit...", button: "Rechercher des produits dans le catalogue actuel" },
  de: { label: "Aktuellen Katalog durchsuchen", placeholder: "Produkte suchen...", button: "Produkte im aktuellen Katalog suchen" },
  it: { label: "Cerca nel catalogo attuale", placeholder: "Cerca prodotti...", button: "Cerca prodotti nel catalogo attuale" },
  pt: { label: "Pesquisar no catálogo atual", placeholder: "Pesquisar produtos...", button: "Pesquisar produtos no catálogo atual" },
};

export default function HeroSearch({ locale = "en" }) {
  const copy = SEARCH_COPY[locale] || SEARCH_COPY.en;

  return (
    <form
      className="search-card"
      role="search"
      action={`${DESTINATION}/search.html`}
      method="get"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SearchIcon/>
      <label>
        <span>{copy.label}</span>
        <input
          type="search"
          name="keywords"
          placeholder={copy.placeholder}
          aria-label={copy.placeholder}
          autoComplete="off"
          maxLength="80"
          required
        />
      </label>
      <input type="hidden" name="channelid" value="2"/>
      <input type="hidden" name="method" value="1"/>
      <button type="submit" aria-label={copy.button}><Arrow/></button>
    </form>
  );
}
