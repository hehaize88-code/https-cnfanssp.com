"use client";

import { useEffect } from "react";

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  hacoovipAnalyticsReady?: boolean;
};

export function AnalyticsEvents() {
  useEffect(() => {
    const analytics = window as GtagWindow;
    const measurementId = "G-7874KPDKBY";
    if (!analytics.hacoovipAnalyticsReady) {
      analytics.hacoovipAnalyticsReady = true;
      const existing = document.querySelector(`script[src*="googletagmanager.com/gtag/js"][src*="${measurementId}"]`);
      if (!existing) {
        analytics.dataLayer = analytics.dataLayer || [];
        // Keep Google's standard gtag queue format (an Arguments object).
        // eslint-disable-next-line prefer-rest-params
        analytics.gtag = analytics.gtag || function () { analytics.dataLayer!.push(arguments); };
        analytics.gtag("js", new Date());
        analytics.gtag("config", measurementId);
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script);
      }
    }

    function trackClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-track]") : null;
      const eventName = target?.dataset.track;
      if (!target || !eventName) return;

      const link = target instanceof HTMLAnchorElement ? target : target.closest<HTMLAnchorElement>("a");
      (window as GtagWindow).gtag?.("event", eventName, {
        link_url: link?.href ?? "",
        link_text: target.textContent?.trim().slice(0, 100) ?? "",
        page_language: document.documentElement.lang,
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}
