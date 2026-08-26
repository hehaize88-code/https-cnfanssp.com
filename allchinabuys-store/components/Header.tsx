"use client";

import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageModule";

const nav = [["Spreadsheet", "/spreadsheet"], ["Finds", "/finds"], ["Articles", "/articles"], ["Guide", "/guides/how-to-use"], ["QC", "/guides/qc-checks"], ["Shipping", "/guides/shipping"], ["FAQ", "/faq"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="preview-strip"><span>Independent product index</span><span>Edition 08 / 2026</span></div>
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="AllChinaBuy Index home"><img src="/allchinabuy-logo.png" alt="AllChinaBuy" className="brand-logo" /></Link>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">{nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav>
        <div className="nav-actions">
          <span className="header-status"><i /> Sources online</span>
          <LanguageSwitcher />
          <a className="button button-dark header-cta" href="https://www.cnfanssp.com/AllProducts/" target="_blank" rel="noopener noreferrer">Live catalog ↗</a>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? "Close" : "Menu"}</button>
        </div>
      </div>
    </header>
  );
}
