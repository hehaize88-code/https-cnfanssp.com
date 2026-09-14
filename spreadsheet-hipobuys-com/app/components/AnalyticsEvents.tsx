"use client";

import { useEffect } from "react";

type AnalyticsWindow = Window & {
  gtag?: (command: "event", eventName: string, parameters: Record<string, string>) => void;
};

function sendEvent(eventName: string, parameters: Record<string, string>) {
  (window as AnalyticsWindow).gtag?.("event", eventName, parameters);
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");
      if (link) {
        const destination = new URL(link.href, window.location.href);
        const parameters = {
          link_url: destination.href,
          link_text: (link.textContent || "").trim().slice(0, 100),
          source_page: window.location.pathname,
        };
        if (destination.hostname === "cnfanssp.com") sendEvent("catalog_click", parameters);
        else if (destination.origin === window.location.origin && destination.pathname.startsWith("/articles/")) sendEvent("article_click", parameters);
      }

      const categoryButton = target?.closest<HTMLButtonElement>(".clean-tabs button");
      if (categoryButton) sendEvent("category_filter", {
        category: (categoryButton.textContent || "").trim(),
        source_page: window.location.pathname,
      });
    };

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement | null;
      if (!form?.classList.contains("clean-search")) return;
      const input = form.querySelector<HTMLInputElement>("input");
      sendEvent("site_search", {
        search_term: input?.value.trim() || "all products",
        source_page: window.location.pathname,
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
