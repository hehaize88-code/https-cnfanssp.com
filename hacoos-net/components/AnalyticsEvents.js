"use client";

import { useEffect } from "react";

const DESTINATION_HOST = "cnfanssp.com";

function sendEvent(name, params) {
  if (typeof window.gtag === "function") window.gtag("event", name, params);
}

function linkKind(pathname) {
  if (pathname.startsWith("/AllProducts/")) return "product";
  if (pathname.startsWith("/category/")) return "category";
  if (pathname.startsWith("/search")) return "search";
  return "catalog";
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function onClick(event) {
      const anchor = event.target.closest?.("a[href]");
      if (!anchor) return;
      let destination;
      try { destination = new URL(anchor.href, window.location.href); } catch { return; }
      if (destination.hostname !== DESTINATION_HOST) return;
      sendEvent("outbound_catalog_click", {
        link_kind: linkKind(destination.pathname),
        link_path: destination.pathname,
        source_path: window.location.pathname,
        link_text: anchor.textContent.trim().slice(0, 80),
      });
    }

    function onSubmit(event) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      let destination;
      try { destination = new URL(form.action, window.location.href); } catch { return; }
      if (destination.hostname !== DESTINATION_HOST) return;
      const query = new FormData(form).get("keywords");
      sendEvent("catalog_search_submit", {
        source_path: window.location.pathname,
        search_term_length: typeof query === "string" ? query.trim().length : 0,
      });
    }

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  return null;
}
