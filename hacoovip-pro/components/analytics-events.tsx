"use client";

import { useEffect } from "react";

type GtagWindow = Window & {
  gtag?: (command: "event", eventName: string, parameters?: Record<string, string>) => void;
};

export function AnalyticsEvents() {
  useEffect(() => {
    function trackClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-track]") : null;
      const eventName = target?.dataset.track;
      if (!target || !eventName) return;

      const link = target instanceof HTMLAnchorElement ? target : target.closest<HTMLAnchorElement>("a");
      (window as GtagWindow).gtag?.("event", eventName, {
        link_url: link?.href ?? "",
        link_text: target.textContent?.trim().slice(0, 100) ?? "",
      });
    }

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}
