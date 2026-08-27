"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LANGUAGE, isSupportedLanguage, translate } from "../lib/i18n";
import { languagePath } from "../lib/routing";

const STORAGE_KEY = "findqcs-language";
const LanguageContext = createContext(null);

export default function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((nextLanguage) => {
    if (!isSupportedLanguage(nextLanguage)) return;
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    const destination = languagePath(window.location.pathname, nextLanguage);
    const nextUrl = `${destination}${window.location.search}${window.location.hash}`;

    // Every locale is a complete static edition. A real navigation is required
    // so server-rendered page copy, metadata and long-form content are replaced
    // together; replaceState only changed the address bar and left the current
    // language's server components on screen.
    if (nextUrl !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.location.assign(nextUrl);
    }
  }, []);

  const t = useCallback((key, values) => translate(language, key, values), [language]);
  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
