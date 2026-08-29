"use client";

type Option = { value: string; label: string };

const localizedPrefixes = new Set(["de", "es", "fr", "it"]);

export function LanguageSwitcher({ locale, label, options }: { locale: string; label: string; options: Option[] }) {
  function changeLanguage(next: string) {
    const url = new URL(window.location.href);
    const segments = url.pathname.split("/").filter(Boolean);
    if (segments[0] && localizedPrefixes.has(segments[0])) segments.shift();
    const rest = segments.length ? `/${segments.join("/")}` : "";
    url.pathname = next === "en" ? rest || "/" : `/${next}${rest}`;
    window.location.assign(url.toString());
  }

  return (
    <div className="language-switcher">
      <label className="sr-only" htmlFor="language">{label}</label>
      <select id="language" value={locale} onChange={(event) => changeLanguage(event.target.value)}>
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  );
}
