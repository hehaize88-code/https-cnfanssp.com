const languages = [
  { code: "en", label: "English", markets: "US · UK · Canada · Australia · Ireland" },
  { code: "zh", label: "简体中文", markets: "中国 · 全球华语用户" },
  { code: "de", label: "Deutsch", markets: "Deutschland · Österreich · Schweiz" },
  { code: "fr", label: "Français", markets: "France · Belgique · Suisse" },
  { code: "es", label: "Español", markets: "España" },
  { code: "it", label: "Italiano", markets: "Italia" },
  { code: "pt", label: "Português", markets: "Portugal" },
  { code: "pl", label: "Polski", markets: "Polska" },
  { code: "nl", label: "Nederlands", markets: "Nederland · België" },
];
export function LanguageMenu({ locale = "en" }: { locale?: string }) {
  return <details className="language-menu" translate="no">
    <summary aria-label="Choose language"><span data-active-language>{languages.find(x=>x.code===locale)?.label ?? "English"}</span><b>⌄</b></summary>
    <div className="language-panel"><p>Language</p>{languages.map(item=><a key={item.code} data-locale-switch={item.code} href={item.code==='en'?'/':`/${item.code}/`} hrefLang={item.code==='zh'?'zh-CN':item.code} lang={item.code==='zh'?'zh-CN':item.code}><span>{item.label}</span><small>{item.markets}</small></a>)}</div>
  </details>;
}
