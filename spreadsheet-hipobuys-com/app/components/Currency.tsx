"use client";

import { useEffect, useState } from "react";
import fallback from "../catalog/exchange-rates.json";
import { t, type Lang } from "../i18n";

type Code = keyof typeof fallback.rates;
const codes = Object.keys(fallback.rates) as Code[];
const byLanguage: Record<string, Code> = {
  en:"USD", zh:"CNY", de:"EUR", es:"EUR", fr:"EUR", it:"EUR", nl:"EUR", pt:"EUR", pl:"PLN",
  ro:"RON", sv:"SEK", da:"DKK", fi:"EUR", el:"EUR", cs:"CZK", hu:"HUF", bg:"EUR", sk:"EUR",
  hr:"EUR", ja:"JPY", ko:"KRW", vi:"VND", th:"THB", id:"IDR"
};
const storageKey = "hipo-currency";
function preferred(lang: Lang): Code {
  try {
    const code = localStorage.getItem(storageKey);
    if (codes.includes(code as Code)) return code as Code;
  } catch {}
  return byLanguage[lang] || "USD";
}
function useCurrency(lang: Lang) {
  const [code, setCode] = useState<Code>(byLanguage[lang] || "USD");
  useEffect(() => {
    const update = (event?: Event) => {
      const requested = (event as CustomEvent<Code> | undefined)?.detail;
      setCode(requested && codes.includes(requested) ? requested : preferred(lang));
    };
    update();
    window.addEventListener("hipo-currency", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("hipo-currency", update);
      window.removeEventListener("storage", update);
    };
  }, [lang]);
  return code;
}
export function CurrencySwitcher({ lang }: { lang: Lang }) {
  const currency = useCurrency(lang);
  return <label className="language-switcher catalog-currency"><span className="sr-only">{t("Currency",lang)}</span>
    <select value={currency} aria-label={t("Currency",lang)} onChange={e => {
      const value = e.target.value as Code;
      try { localStorage.setItem(storageKey, value); } catch {}
      window.dispatchEvent(new CustomEvent("hipo-currency", { detail: value }));
    }}>{codes.map(code => <option key={code} value={code}>{code}</option>)}</select>
  </label>;
}
let tableRequest: Promise<typeof fallback> | undefined;
export function usePrices(lang: Lang) {
  const code = useCurrency(lang);
  const [table, setTable] = useState(fallback);
  useEffect(() => {
    tableRequest ??= fetch("/api/exchange-rates").then(async response => {
      if (!response.ok) throw new Error("Exchange rates unavailable");
      const result = await response.json();
      if (!(result.updated >= fallback.updated) || !codes.every(c => Number.isFinite(result.rates?.[c]) && result.rates[c] > 0)) throw new Error("Invalid rates");
      return result as typeof fallback;
    }).catch(() => { tableRequest = undefined; return fallback; });
    let active = true;
    tableRequest.then(result => { if (active) setTable(result); });
    return () => { active = false; };
  }, []);
  const format = new Intl.NumberFormat(lang, { style: "currency", currency: code });
  return { price: (cny: number) => format.format(cny * table.rates[code]), updated: new Intl.DateTimeFormat(lang).format(table.updated * 1000) };
}
