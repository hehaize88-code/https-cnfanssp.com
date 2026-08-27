"use client";

import { useEffect, useState } from "react";
import generatedTranslations from "./translations.generated.json";

type Locale = "en" | "nl" | "de" | "it" | "es";
type Dictionary = Record<string, string>;

export const localeOptions: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "nl", label: "Nederlands", short: "NL" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "it", label: "Italiano", short: "IT" },
  { code: "es", label: "Español", short: "ES" },
];

const translations = generatedTranslations as Record<Exclude<Locale, "en">, Dictionary>;
const languageEvent = "findqc-language-change";
const preferenceKey = "findqc-language";
const originals = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();
const originalTitles = new Map<string, string>();

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function validLocale(value: string | null): value is Locale {
  return localeOptions.some((option) => option.code === value);
}

function readLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const query = new URLSearchParams(window.location.search).get("lang");
  if (validLocale(query)) return query;
  const saved = window.localStorage.getItem(preferenceKey);
  return validLocale(saved) ? saved : "en";
}

function translatedValue(original: string, locale: Locale) {
  if (locale === "en") return original;
  return translations[locale][normalize(original)] || original;
}

function translateDocument(locale: Locale) {
  document.documentElement.lang = locale;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest(".notranslate,[translate='no']")) return NodeFilter.FILTER_REJECT;
      return node.nodeValue?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  let node = walker.nextNode() as Text | null;
  while (node) {
    const current = node.nodeValue || "";
    if (!originals.has(node)) originals.set(node, normalize(current));
    const original = originals.get(node) || normalize(current);
    const leading = current.match(/^\s*/)?.[0] || "";
    const trailing = current.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translatedValue(original, locale)}${trailing}`;
    node = walker.nextNode() as Text | null;
  }

  const attributes = ["placeholder", "alt", "title", "aria-label"];
  document.querySelectorAll<HTMLElement>(attributes.map((name) => `[${name}]`).join(",")).forEach((element) => {
    if (element.closest(".notranslate,[translate='no']")) return;
    let saved = originalAttributes.get(element);
    if (!saved) {
      saved = new Map();
      originalAttributes.set(element, saved);
    }
    attributes.forEach((name) => {
      const current = element.getAttribute(name);
      if (!current) return;
      if (!saved!.has(name)) saved!.set(name, current);
      const original = saved!.get(name) || current;
      element.setAttribute(name, translatedValue(original, locale));
    });
  });

  const routeKey = window.location.pathname;
  if (!originalTitles.has(routeKey)) originalTitles.set(routeKey, document.title);
  const originalTitle = originalTitles.get(routeKey) || document.title;
  document.title = translatedValue(originalTitle, locale);
}

function keepLocaleOnInternalLinks(locale: Locale) {
  document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
    if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;
    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (locale === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", locale);
    anchor.href = `${url.pathname}${url.search}${url.hash}`;
  });
}

export function LanguageRuntime() {
  useEffect(() => {
    let locale = readLocale();
    translateDocument(locale);
    keepLocaleOnInternalLinks(locale);

    const observer = new MutationObserver(() => {
      translateDocument(locale);
      keepLocaleOnInternalLinks(locale);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const onLanguage = (event: Event) => {
      locale = (event as CustomEvent<Locale>).detail;
      translateDocument(locale);
      keepLocaleOnInternalLinks(locale);
    };
    window.addEventListener(languageEvent, onLanguage);
    return () => {
      observer.disconnect();
      window.removeEventListener(languageEvent, onLanguage);
    };
  }, []);
  return null;
}

export function LanguageSwitcher() {
  const [locale, setLocale] = useState<Locale>("en");
  useEffect(() => setLocale(readLocale()), []);

  const change = (next: Locale) => {
    setLocale(next);
    window.localStorage.setItem(preferenceKey, next);
    const url = new URL(window.location.href);
    if (next === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", next);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new CustomEvent(languageEvent, { detail: next }));
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
