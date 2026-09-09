"use client";

import { useEffect } from "react";

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a");
      if (!link || !window.gtag) return;
      const url = new URL(link.href, window.location.href);
      if (url.hostname === "www.cnfanssp.com") {
        const eventName = url.pathname.includes("/AllProducts/") ? "catalog_click" : "category_click";
        window.gtag("event", eventName, { link_url: url.href, link_text: link.textContent?.trim().slice(0, 100) });
      } else if (url.hostname === window.location.hostname && url.pathname.startsWith("/articles/")) {
        window.gtag("event", "article_click", { link_url: url.href, link_text: link.textContent?.trim().slice(0, 100) });
      }
    };
    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);
  return null;
}
