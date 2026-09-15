"use client";

import { useEffect } from "react";

export function sendAnalyticsEvent(name, parameters = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, parameters);
}

export default function Analytics() {
  useEffect(() => {
    function handleClick(event) {
      const link = event.target.closest("[data-analytics-event]");
      if (!link) return;
      sendAnalyticsEvent(link.dataset.analyticsEvent, {
        link_url: link.href || undefined,
        item_id: link.dataset.analyticsId || undefined,
        item_category: link.dataset.analyticsCategory || undefined,
        page_location: window.location.href,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
