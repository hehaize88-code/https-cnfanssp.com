"use client";

import { createContext, useContext, type ReactNode } from "react";
import { languages, localizedPath, type Lang } from "../i18n/paths";
export type { Lang } from "../i18n/paths";

type LanguageState = { lang: Lang; messages: Record<string, string> };
const LanguageContext = createContext<LanguageState>({ lang: "en", messages: {} });

export function LanguageProvider({ lang, messages, children }: LanguageState & { children: ReactNode }) {
  return <LanguageContext.Provider value={{ lang, messages }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext).lang; }
export function useMessages() { return useContext(LanguageContext).messages; }
export function changeLanguage(lang: Lang) {
  if (!languages.includes(lang)) return;
  window.location.assign(localizedPath(window.location.pathname, lang) + window.location.search + window.location.hash);
}
