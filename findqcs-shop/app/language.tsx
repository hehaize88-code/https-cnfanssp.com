"use client";

import { useState } from "react";

type Locale = "en" | "nl" | "de" | "it" | "es";

export const localeOptions: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "nl", label: "Nederlands", short: "NL" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "it", label: "Italiano", short: "IT" },
  { code: "es", label: "Español", short: "ES" },
];

function readLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const segment = window.location.pathname.split("/").filter(Boolean)[0];
  return localeOptions.some((option) => option.code === segment && segment !== "en") ? segment as Locale : "en";
}

function pathForLocale(locale: Locale) {
  const parts = window.location.pathname.split("/").filter(Boolean);
  if (["nl", "de", "it", "es"].includes(parts[0] || "")) parts.shift();
  const base = parts.length ? `/${parts.join("/")}` : "/";
  return locale === "en" ? base : `/${locale}${base === "/" ? "" : base}`;
}

export function LanguageSwitcher() {
  const [locale, setLocale] = useState<Locale>(readLocale);

  const change = (next: Locale) => {
    setLocale(next);
    window.location.assign(pathForLocale(next));
  };

  return (
    <label className="language-switcher notranslate" translate="no">
      <span className="sr-only">Language</span>
      <select aria-label="Language" value={locale} onChange={(event) => change(event.target.value as Locale)}>
        {localeOptions.map((option) => <option key={option.code} value={option.code}>{option.short} · {option.label}</option>)}
      </select>
    </label>
  );
}
