"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALES, LOCALE_NAMES, localeFromPath, localizePath, stripLocale } from "@/app/i18n";

const ENGLISH_ONLY_GUIDES = new Set([
  "/guides/hacoo-finds-category-budget",
  "/guides/hacoo-clothing-color-palette",
  "/guides/hacoo-shoes-everyday-use",
  "/guides/hacoo-sneakers-shortlist",
  "/guides/hacoo-hoodies-sweaters-layering",
  "/guides/hacoo-t-shirts-fit-fabric-use",
  "/guides/hacoo-jackets-season-layering",
  "/guides/hacoo-pants-shorts-proportions",
]);

export default function LanguageSwitcher({ onNavigate }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = localeFromPath(pathname);
  const label = {
    en: "Language",
    es: "Idioma",
    fr: "Langue",
    de: "Sprache",
    it: "Lingua",
    pt: "Idioma",
  }[locale];

  function changeLanguage(event) {
    const nextLocale = event.target.value;
    const cleanPath = stripLocale(pathname);
    const hasLocalizedVersion = !ENGLISH_ONLY_GUIDES.has(cleanPath) && (cleanPath === "/" || /^\/(spreadsheet|categories(?:\/[^/]+)?|products(?:\/[^/]+)?|guides(?:\/[^/]+)?|faq|about|contact|privacy|terms)$/.test(cleanPath));
    const fallbackPath = cleanPath.startsWith("/guides/") ? "/guides" : "/";
    const nextPath = localizePath(hasLocalizedVersion ? cleanPath : fallbackPath, nextLocale);
    onNavigate?.();
    router.push(nextPath);
  }

  return (
    <label className="language-switcher">
      <span aria-hidden="true">◎</span>
      <span className="sr-only">{label}</span>
      <select value={locale} onChange={changeLanguage} aria-label={label}>
        {LOCALES.map((code) => <option value={code} key={code}>{LOCALE_NAMES[code]}</option>)}
      </select>
    </label>
  );
}
