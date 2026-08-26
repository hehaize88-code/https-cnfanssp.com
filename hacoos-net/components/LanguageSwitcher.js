"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALES, LOCALE_NAMES, localeFromPath, localizePath, stripLocale } from "@/app/i18n";

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
    const hasLocalizedVersion = cleanPath === "/" || /^\/(spreadsheet|categories(?:\/[^/]+)?|products(?:\/[^/]+)?|guides(?:\/[^/]+)?|faq|about|contact|privacy|terms)$/.test(cleanPath);
    const nextPath = localizePath(hasLocalizedVersion ? cleanPath : "/", nextLocale);
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
