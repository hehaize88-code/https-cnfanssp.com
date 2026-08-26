"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import translations from "@/lib/translations.json";

type LanguageCode = "en" | "de" | "fr" | "es" | "it" | "pl";

const languages: Array<{ code: LanguageCode; label: string }> = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
  { code: "pl", label: "Polski" },
];

const LanguageContext = createContext<{ language: LanguageCode; setLanguage: (language: LanguageCode) => void } | null>(null);
const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();

function translateNode(root: Node, language: LanguageCode) {
  const dictionary = translations[language] as Record<string, string> | undefined;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Text | null;

  while ((node = walker.nextNode() as Text | null)) {
    const parent = node.parentElement;
    if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE"].includes(parent.tagName)) continue;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue || "");
    const source = originalText.get(node) || "";
    const key = source.trim();
    if (!key) continue;
    const replacement = language === "en" ? key : dictionary?.[key] || key;
    node.nodeValue = source.replace(key, replacement);
  }

  const elements = root instanceof Element ? [root, ...Array.from(root.querySelectorAll("*"))] : Array.from(document.body.querySelectorAll("*"));
  for (const element of elements) {
    for (const attribute of ["placeholder", "aria-label", "title"]) {
      const value = element.getAttribute(attribute);
      if (!value) continue;
      let originals = originalAttributes.get(element);
      if (!originals) {
        originals = new Map<string, string>();
        originalAttributes.set(element, originals);
      }
      if (!originals.has(attribute)) originals.set(attribute, value);
      const source = originals.get(attribute) || value;
      element.setAttribute(attribute, language === "en" ? source : dictionary?.[source] || source);
    }
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("acb-language") as LanguageCode | null;
    const timer = window.setTimeout(() => {
      if (saved && languages.some(({ code }) => code === saved)) setLanguage(saved);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = language;
    window.localStorage.setItem("acb-language", language);
    translateNode(document.body, language);
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        for (const added of Array.from(record.addedNodes)) translateNode(added, language);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language, ready]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function LanguageSwitcher() {
  const context = useContext(LanguageContext);
  if (!context) return null;
  return (
    <label className="language-select">
      <span className="sr-only">Language</span>
      <select id="site-language" value={context.language} onChange={(event) => context.setLanguage(event.target.value as LanguageCode)} aria-label="Language">
        {languages.map(({ code, label }) => <option key={code} value={code}>{label}</option>)}
      </select>
    </label>
  );
}
