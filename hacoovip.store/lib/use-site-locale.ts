"use client";

import { useCallback, useEffect, useState } from "react";
import { locales, type Locale } from "./site-data";

const STORAGE_KEY = "hacoovip-language";
const EVENT_NAME = "hacoovip-language-change";

export function useSiteLocale(initialLocale: Locale) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && locales.includes(saved)) setLocale(saved);

    const handleLanguage = (event: Event) => {
      const next = (event as CustomEvent<Locale>).detail;
      if (locales.includes(next)) setLocale(next);
    };
    window.addEventListener(EVENT_NAME, handleLanguage);
    return () => window.removeEventListener(EVENT_NAME, handleLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const changeLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
    window.dispatchEvent(new CustomEvent<Locale>(EVENT_NAME, { detail: next }));
  }, []);

  return { locale, changeLocale };
}
