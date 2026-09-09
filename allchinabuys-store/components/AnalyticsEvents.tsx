"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function sendEvent(name: string, parameters: Record<string, string>) {
  window.gtag?.("event", name, parameters);
}

export function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const url = new URL(link.href, window.location.href);
      if (url.hostname !== "www.cnfanssp.com" && url.hostname !== "cnfanssp.com") return;

      sendEvent("outbound_catalog_click", {
        link_url: url.href,
        link_text: (link.textContent || link.getAttribute("aria-label") || "catalog link").trim().slice(0, 100),
        source_path: window.location.pathname,
      });
    };

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || !form.action.includes("cnfanssp.com/search.html")) return;
      const query = new FormData(form).get("keywords");
      sendEvent("catalog_search", {
        search_term: typeof query === "string" ? query.trim().slice(0, 100) : "",
        source_path: window.location.pathname,
      });
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
