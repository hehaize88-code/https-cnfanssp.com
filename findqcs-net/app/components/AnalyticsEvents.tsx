"use client";
import { useEffect } from "react";

export function trackEvent(name: string, parameters: Record<string, string | number>) {
  const gtag = (window as Window & {gtag?: (...args: unknown[]) => void}).gtag;
  gtag?.("event", name, parameters);
}
export default function AnalyticsEvents() {
  useEffect(() => {
    const track = (event: MouseEvent) => {
      const link = (event.target as Element)?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const url = new URL(link.href);
      if (!["cnfanssp.com", "www.cnfanssp.com"].includes(url.hostname)) return;
      trackEvent("catalogue_click", {
        link_domain: url.hostname, link_path: url.pathname,
        link_type: /^\/AllProducts\/\d+\.html$/.test(url.pathname) ? "product" : "category",
        page_language: document.documentElement.lang,
      });
    };
    document.addEventListener("click", track);
    return () => document.removeEventListener("click", track);
  }, []);
  return null;
}
