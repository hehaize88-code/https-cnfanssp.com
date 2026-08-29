"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { isSiteLanguage, type SiteLanguage } from "./i18n";

const STORAGE_KEY = "joyagoos-language";

export function useLanguage(initialLanguage: SiteLanguage) {
  const [language, setLanguageState] = useState<SiteLanguage>(initialLanguage);
  const pendingScroll = useRef<{ x:number; y:number } | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const next = isSiteLanguage(saved) ? saved : initialLanguage;
    setLanguageState(next);
    document.documentElement.lang = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  }, [initialLanguage]);

  useLayoutEffect(() => {
    if (!pendingScroll.current) return;
    const { x, y } = pendingScroll.current;
    window.scrollTo(x, y);
    pendingScroll.current = null;
  }, [language]);

  const setLanguage = useCallback((next: SiteLanguage) => {
    pendingScroll.current = { x:window.scrollX, y:window.scrollY };
    setLanguageState(next);
    document.documentElement.lang = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return { language, setLanguage };
}
