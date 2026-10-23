"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";
import { dictionaries, Lang, languageOptions } from "./translation-data";

type ContextValue = { lang: Lang; setLang: (lang: Lang) => void };
const LanguageContext = createContext<ContextValue>({ lang: "en", setLang: () => undefined });

function replaceText(raw: string, translated?: string) {
  if (!translated) return raw;
  const start = raw.match(/^\s*/)?.[0] ?? "";
  const end = raw.match(/\s*$/)?.[0] ?? "";
  return `${start}${translated}${end}`;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const originals = useRef(new WeakMap<Text, string>());
  const applying = useRef(false);

  function setLang(next: Lang) {
    setLangState(next);
    localStorage.setItem("acbuy-language", next);
  }

  useEffect(() => {
    const saved = localStorage.getItem("acbuy-language") as Lang | null;
    if (saved && languageOptions.some((item) => item.code === saved)) setLangState(saved);
  }, []);

  useEffect(() => {
    const apply = () => {
      if (applying.current) return;
      applying.current = true;
      document.documentElement.lang = lang;
      const map = lang === "en" ? null : dictionaries[lang];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
          return node.nodeValue?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        },
      });
      let node = walker.nextNode() as Text | null;
      while (node) {
        if (!originals.current.has(node)) originals.current.set(node, node.nodeValue ?? "");
        const original = originals.current.get(node) ?? "";
        const key = original.trim();
        const nextValue = replaceText(original, map?.get(key));
        if (node.nodeValue !== nextValue) node.nodeValue = nextValue;
        node = walker.nextNode() as Text | null;
      }
      document.querySelectorAll<HTMLInputElement>("input[placeholder]").forEach((input) => {
        if (!input.dataset.originalPlaceholder) input.dataset.originalPlaceholder = input.placeholder;
        const original = input.dataset.originalPlaceholder;
        const nextPlaceholder = map?.get(original) ?? original;
        if (input.placeholder !== nextPlaceholder) input.placeholder = nextPlaceholder;
      });
      applying.current = false;
    };

    apply();
    const observer = new MutationObserver(() => queueMicrotask(apply));
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function LanguageSwitcher() {
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <label className="language-switcher">
      <span aria-hidden="true">◎</span>
      <span className="language-label">Language</span>
      <select value={lang} onChange={(event) => setLang(event.target.value as Lang)} aria-label="Select language">
        {languageOptions.map((option) => <option key={option.code} value={option.code}>{option.short} · {option.label}</option>)}
      </select>
    </label>
  );
}
