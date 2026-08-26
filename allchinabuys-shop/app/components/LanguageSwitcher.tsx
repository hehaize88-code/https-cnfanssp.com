"use client";

import { useEffect, useState } from "react";

type Language = "en" | "de" | "fr" | "es" | "pl" | "ja";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN · English" },
  { code: "de", label: "DE · Deutsch" },
  { code: "fr", label: "FR · Français" },
  { code: "es", label: "ES · Español" },
  { code: "pl", label: "PL · Polski" },
  { code: "ja", label: "JA · 日本語" },
];

declare global {
  interface Window {
    google?: { translate?: { TranslateElement: new (options: Record<string, unknown>, id: string) => void } };
    googleTranslateElementInit?: () => void;
  }
}

function clearTranslationCookies() {
  const domains = new Set<string | null>([null, location.hostname, `.${location.hostname}`]);
  const parts = location.hostname.split(".");
  for (let index = 1; index < parts.length - 1; index += 1) domains.add(`.${parts.slice(index).join(".")}`);
  domains.forEach(domain => {
    const domainPart = domain ? `;domain=${domain}` : "";
    document.cookie = `googtrans=;path=/;max-age=0;SameSite=Lax${domainPart}`;
  });
}

function setTranslationCookie(language: Language) {
  clearTranslationCookies();
  if (language !== "en") document.cookie = `googtrans=/en/${language};path=/;max-age=31536000;SameSite=Lax`;
}

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>("en");
  const [ready, setReady] = useState(false);
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("acb-language") as Language | null;
    const saved = languages.some(item => item.code === stored) ? stored as Language : "en";
    setLanguage(saved);
    setTranslationCookie(saved);
    document.documentElement.lang = saved;
    const pending = sessionStorage.getItem("acb-language-pending") === "1";
    if (pending) setSwitching(true);
    const savedScroll = Number(sessionStorage.getItem("acb-language-scroll") ?? "0");
    if (savedScroll > 0) {
      sessionStorage.removeItem("acb-language-scroll");
      window.requestAnimationFrame(() => window.scrollTo({ top: savedScroll, behavior: "auto" }));
    }
    const finish = () => {
      setReady(true);
      setSwitching(false);
      sessionStorage.removeItem("acb-language-pending");
    };
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement({
        pageLanguage: "en",
        includedLanguages: "en,de,fr,es,pl,ja",
        autoDisplay: false,
      }, "google_translate_element");
      window.setTimeout(finish, saved === "en" ? 100 : 700);
    };
    if (window.google?.translate?.TranslateElement) window.googleTranslateElementInit();
    else if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = finish;
      document.head.appendChild(script);
    }
    const failsafe = window.setTimeout(finish, 5000);
    return () => window.clearTimeout(failsafe);
  }, []);

  function change(next: Language) {
    if (next === language) return;
    setLanguage(next);
    setSwitching(true);
    localStorage.setItem("acb-language", next);
    sessionStorage.setItem("acb-language-pending", "1");
    sessionStorage.setItem("acb-language-scroll", String(window.scrollY));
    setTranslationCookie(next);
    document.documentElement.lang = next;
    window.setTimeout(() => window.location.reload(), 120);
  }

  return <>
    <div id="google_translate_element" aria-hidden="true" />
    <label className="language-switcher">
      <span className="sr-only">Translate the complete page</span>
      <select value={language} disabled={switching} onChange={event => change(event.target.value as Language)} aria-label="Translate the complete page" title={ready ? "Translate the complete page" : "Translation is loading"}>
        {languages.map(item => <option key={item.code} value={item.code}>{item.label}</option>)}
      </select>
    </label>
    {switching && <div className="language-transition" role="status" aria-live="polite"><span>Changing language…</span></div>}
  </>;
}
