"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const languages = [
  { code: "en", translateCode: "en", label: "English", markets: "US · UK · Canada · Australia · Ireland" },
  { code: "zh", translateCode: "zh-CN", label: "简体中文", markets: "中国 · 全球华语用户" },
  { code: "de", translateCode: "de", label: "Deutsch", markets: "Deutschland · Österreich · Schweiz" },
  { code: "fr", translateCode: "fr", label: "Français", markets: "France · Belgique · Suisse" },
  { code: "es", translateCode: "es", label: "Español", markets: "España" },
  { code: "it", translateCode: "it", label: "Italiano", markets: "Italia" },
  { code: "pt", translateCode: "pt", label: "Português", markets: "Portugal" },
  { code: "pl", translateCode: "pl", label: "Polski", markets: "Polska" },
  { code: "nl", translateCode: "nl", label: "Nederlands", markets: "Nederland · België" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];

declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (options: Record<string, unknown>, elementId: string) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const STORAGE_KEY = "sheet-superbuy-language";
const SCRIPT_ID = "sheet-superbuy-google-translate";

function clearTranslateCookie() {
  const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  document.cookie = `googtrans=; ${expires}`;
  document.cookie = `googtrans=; ${expires}; domain=${window.location.hostname}`;
  const rootDomain = window.location.hostname.split(".").slice(-2).join(".");
  if (rootDomain.includes(".")) document.cookie = `googtrans=; ${expires}; domain=.${rootDomain}`;
}

function setTranslateCookie(translateCode: string) {
  clearTranslateCookie();
  const value = `/en/${translateCode}`;
  document.cookie = `googtrans=${value}; path=/; SameSite=Lax`;
  document.cookie = `googtrans=${value}; path=/; domain=${window.location.hostname}; SameSite=Lax`;
}

function hideGoogleChrome() {
  const selectors = [
    "iframe.goog-te-banner-frame",
    ".goog-te-banner-frame",
    ".goog-te-balloon-frame",
    ".VIpgJd-ZVi9od-ORHb-OEVmcd",
    ".VIpgJd-ZVi9od-aZ2wEe-wOHMyf",
  ];
  document.querySelectorAll<HTMLElement>(selectors.join(",")).forEach((element) => {
    element.style.setProperty("display", "none", "important");
    element.setAttribute("aria-hidden", "true");
  });
  document.documentElement.style.setProperty("top", "0px", "important");
  document.body.style.setProperty("top", "0px", "important");
}

function applyTranslation(translateCode: string, attempt = 0) {
  const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (select) {
    select.value = translateCode;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    hideGoogleChrome();
    return;
  }
  if (attempt < 30) window.setTimeout(() => applyTranslation(translateCode, attempt + 1), 100);
}

function loadTranslator(onReady: () => void) {
  window.googleTranslateElementInit = () => {
    if (!window.google || document.querySelector(".goog-te-combo")) {
      onReady();
      return;
    }
    new window.google.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: "zh-CN,de,fr,es,it,pt,pl,nl", autoDisplay: false },
      "google_translate_element",
    );
    window.setTimeout(onReady, 50);
  };

  if (window.google?.translate?.TranslateElement) {
    window.googleTranslateElementInit();
    return;
  }
  if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&hl=en";
    script.async = true;
    document.body.appendChild(script);
  }
}

export function LanguageMenu({ locale = "en" }: { locale?: string }) {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const initial = languages.some((item) => item.code === locale) ? locale as LanguageCode : "en";
  const [activeCode, setActiveCode] = useState<LanguageCode>(initial);
  const active = languages.find((item) => item.code === activeCode) || languages[0];

  useEffect(() => {
    hideGoogleChrome();
    const observer = new MutationObserver(hideGoogleChrome);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    const stored = window.localStorage.getItem(STORAGE_KEY);
    const selected = languages.find((item) => item.code === stored);
    if (selected && selected.code !== "en") {
      setActiveCode(selected.code);
      document.documentElement.lang = selected.translateCode;
      setTranslateCookie(selected.translateCode);
      loadTranslator(() => applyTranslation(selected.translateCode));
    } else {
      clearTranslateCookie();
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeCode === "en") return;
    const selected = languages.find((item) => item.code === activeCode);
    if (selected) window.setTimeout(() => applyTranslation(selected.translateCode), 80);
  }, [pathname, activeCode]);

  function selectLanguage(code: LanguageCode) {
    detailsRef.current?.removeAttribute("open");
    window.localStorage.setItem(STORAGE_KEY, code);
    const selected = languages.find((item) => item.code === code) || languages[0];
    if (code === "en") {
      clearTranslateCookie();
    } else {
      setTranslateCookie(selected.translateCode);
    }
    window.location.reload();
  }

  return <>
    <div id="google_translate_element" aria-hidden="true" />
    <details ref={detailsRef} className="language-menu notranslate" translate="no">
      <summary aria-label="Choose language and region"><span>{active.label}</span><b>⌄</b></summary>
      <div className="language-panel">
        <p>Language &amp; region</p>
        {languages.map((item) => <button
          type="button"
          className={item.code === active.code ? "active" : ""}
          onClick={() => selectLanguage(item.code)}
          key={item.code}
          lang={item.translateCode}
        >
          <span>{item.label}</span><small>{item.markets}</small>
        </button>)}
        <em>The selected language is applied to this page without changing its address or removing content.</em>
      </div>
    </details>
  </>;
}
