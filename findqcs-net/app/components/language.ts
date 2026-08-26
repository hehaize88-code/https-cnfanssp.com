"use client";

import { useSyncExternalStore } from "react";

export type Lang = "en" | "de" | "fr" | "es" | "it";

const languageEvent = "findqcs-language-change";
const supported = new Set<Lang>(["en", "de", "fr", "es", "it"]);

function readLanguage(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem("findqcs-lang") as Lang | null;
  return saved && supported.has(saved) ? saved : "en";
}

function subscribeLanguage(callback: () => void) {
  const notify = () => {
    document.documentElement.lang = readLanguage();
    callback();
  };
  window.addEventListener("storage", notify);
  window.addEventListener(languageEvent, notify);
  document.documentElement.lang = readLanguage();
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(languageEvent, notify);
  };
}

export function useLanguage(): Lang {
  return useSyncExternalStore(subscribeLanguage, readLanguage, () => "en");
}

export function changeLanguage(next: Lang) {
  window.localStorage.setItem("findqcs-lang", next);
  document.documentElement.lang = next;
  window.dispatchEvent(new Event(languageEvent));
}
