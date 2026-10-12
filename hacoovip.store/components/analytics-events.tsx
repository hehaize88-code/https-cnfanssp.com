"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function sendEvent(name: string, parameters: Record<string, string | number | boolean>) {
  window.gtag?.("event", name, parameters);
}

export function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const url = new URL(anchor.href, window.location.href);
      const label = anchor.textContent?.trim().replace(/\s+/g, " ").slice(0, 100) || "unlabelled";

      if (["cnfanshp.com", "www.cnfanshp.com"].includes(url.hostname)) {
        const eventName = /^\/AllProducts\/\d+\.html$/.test(url.pathname)
          ? "main_product_click"
          : url.pathname === "/AllProducts/"
            ? "catalog_click"
            : "category_click";
        sendEvent(eventName, { link_url: url.href, link_text: label, page_path: window.location.pathname });
        sendEvent("outbound_click", { link_domain: url.hostname, link_url: url.href, page_path: window.location.pathname });
        return;
      }

      if (url.origin === window.location.origin && url.pathname.includes("/articles/")) {
        sendEvent("article_click", { link_url: url.pathname, link_text: label, page_path: window.location.pathname });
      }
    };

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      const action = new URL(form.action, window.location.href);
      if (!["cnfanshp.com", "www.cnfanshp.com"].includes(action.hostname) || !action.pathname.includes("/search")) return;
      const input = form.elements.namedItem("keywords");
      const query = input instanceof HTMLInputElement ? input.value.trim() : "";
      if (!query) return;
      sendEvent("search_submit", { search_term: query.slice(0, 100), page_path: window.location.pathname });
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
