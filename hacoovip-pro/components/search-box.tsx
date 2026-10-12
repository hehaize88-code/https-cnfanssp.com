"use client";

import { FormEvent, useState } from "react";

export function SearchBox({ placeholder, button }: { placeholder: string; button: string }) {
  const [query, setQuery] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    const value = query.trim();
    const url = value
      ? `https://cnfanshp.com/search.html?keywords=${encodeURIComponent(value)}&channelid=2`
      : "https://cnfanshp.com/AllProducts/";
    (window as Window & { gtag?: (command: "event", name: string, parameters?: Record<string, string>) => void }).gtag?.("event", "search_submit", {
      search_term: value,
      outbound_destination: "cnfanshp.com",
      page_language: document.documentElement.lang,
      page_path: window.location.pathname,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="search-box" onSubmit={submit} role="search">
      <label className="sr-only" htmlFor="product-search">{placeholder}</label>
      <input id="product-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={placeholder} autoComplete="off" />
      <button type="submit">{button} <span aria-hidden="true">↗</span></button>
    </form>
  );
}
