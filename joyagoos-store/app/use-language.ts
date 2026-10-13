"use client";

import { useCallback, useEffect } from "react";
import { withLanguage, type SiteLanguage } from "./i18n";

// A language is a real URL. Saved preferences must not replace the body of a
// different canonical page after hydration.
export function useLanguage(initialLanguage: SiteLanguage, _useSavedPreference = false) {
  useEffect(() => { document.documentElement.lang = initialLanguage; }, [initialLanguage]);
  const setLanguage = useCallback((next: SiteLanguage) => {
    const query = new URLSearchParams(window.location.search);
    query.delete("lang");
    const suffix = query.size ? `?${query.toString()}` : "";
    window.location.assign(withLanguage(window.location.pathname, next) + suffix + window.location.hash);
  }, []);
  return { language: initialLanguage, setLanguage };
}
