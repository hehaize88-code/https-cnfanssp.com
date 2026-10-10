"use client";

import { useEffect } from "react";

const languageNames = { en: "English", de: "Deutsch", fr: "Français", es: "Español", it: "Italiano" };

export function LanguageSelect({ locale, label, routes }: { locale: string; label: string; routes: Record<string, string> }) {
  return <select className="language-trigger" aria-label={label} value={locale} onChange={(event) => { window.location.assign(routes[event.target.value]); }}>
    {Object.entries(languageNames).map(([key, name]) => <option key={key} value={key}>{name}</option>)}
  </select>;
}

type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

export function SiteAnalytics({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    const send = (eventName: string, parameters: Record<string, string | number>) => {
      const w = window as AnalyticsWindow;
      const args = ["event", eventName, { ...parameters, language: locale, page_path: window.location.pathname, transport_type: "beacon" }];
      if (w.gtag) w.gtag(...args);
      else {
        w.dataLayer = w.dataLayer || [];
        // gtag queues arguments objects, not event-shaped objects.
        (function (...values: unknown[]) { w.dataLayer!.push(arguments); })(...args);
      }
    };
    const onClick = (event: MouseEvent) => {
      if (event.type === "auxclick" && event.button !== 1) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[data-track]") : null;
      if (!link) return;
      const url = new URL(link.href);
      send(link.dataset.track!, {
        link_url: `${url.origin}${url.pathname}`,
        link_domain: url.hostname,
        placement: link.dataset.placement || "content",
        ...(link.dataset.productId ? { product_id: link.dataset.productId } : {}),
        ...(link.dataset.category ? { category: link.dataset.category } : {}),
      });
    };
    const onSubmit = (event: SubmitEvent) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || form.dataset.track !== "search_redirect" || !form.checkValidity()) return;
      const keywords = String(new FormData(form).get("keywords") || "").trim();
      if (!keywords) { event.preventDefault(); return; }
      send("search_redirect", {
        link_url: form.action,
        placement: form.dataset.placement || "content",
        search_length: keywords.length,
      });
    };
    document.addEventListener("click", onClick);
    document.addEventListener("auxclick", onClick);
    document.addEventListener("submit", onSubmit);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("auxclick", onClick);
      document.removeEventListener("submit", onSubmit);
    };
  }, [locale]);
  return null;
}
