"use client";

import { useEffect } from "react";
type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
function track(name: string, parameters: Record<string, string | number>) {
  const target = window as AnalyticsWindow;
  const data = { ...parameters, language: document.documentElement.lang, page_path: location.pathname, transport_type: "beacon" };
  if (target.gtag) target.gtag("event", name, data);
  else { target.dataLayer ??= []; (function(..._args:unknown[]){ target.dataLayer!.push(arguments); })("event", name, data); }
}

export function AnalyticsEvents() {
  useEffect(() => {
    const click = (event: MouseEvent) => {
      const link = (event.target as Element)?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const url = new URL(link.href, location.href);
      if (!["cnfanssp.com", "www.cnfanssp.com"].includes(url.hostname)) return;
      const product = url.pathname.match(/^\/AllProducts\/(\d+)\.html$/i);
      track(product ? "product_click" : "catalog_click", {
        destination_path: url.pathname, link_domain: url.hostname,
        ...(product ? { product_id: product[1] } : {}),
        placement: link.closest("section")?.id || (link.closest("header") ? "header" : "article"),
      });
    };
    const submit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      if (!form.matches("form.search-bar")) return;
      const query = String(new FormData(form).get("keywords") || "").trim();
      // No free-text query is sent: it could contain personal information.
      track("product_search", { query_length: query.length, destination_path: new URL(form.action).pathname });
    };
    document.addEventListener("click", click);
    document.addEventListener("submit", submit);
    return () => { document.removeEventListener("click", click); document.removeEventListener("submit", submit); };
  }, []);
  return null;
}
