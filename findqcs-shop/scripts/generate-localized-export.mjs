import { promises as fs } from "node:fs";
import path from "node:path";
import generatedTranslations from "../app/translations.generated.json" with { type: "json" };
import seoTranslations from "../app/translations.seo.json" with { type: "json" };

const origin = "https://findqcs.shop";
const outputRoot = path.resolve("out");
const locales = ["nl", "de", "it", "es"];
const hrefLocales = ["en", ...locales];
const dictionaries = Object.fromEntries(locales.map((locale) => [locale, {
  ...generatedTranslations[locale],
  ...seoTranslations[locale],
}]));

function decodeHtml(value) {
  return value
    .replace(/&nbsp;/g, "\u00a0")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/(?:&#x27;|&#39;|&apos;)/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function encodeText(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function encodeAttribute(value) {
  return encodeText(value).replace(/"/g, "&quot;");
}

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

function translated(value, locale) {
  const decoded = decodeHtml(value);
  const normalized = normalize(decoded);
  if (dictionaries[locale][normalized]) return dictionaries[locale][normalized];

  const brandedTitle = normalized.match(/^(.*?)\s+\|\s+FindQC$/);
  if (brandedTitle && dictionaries[locale][brandedTitle[1]]) {
    return `${dictionaries[locale][brandedTitle[1]]} | FindQC`;
  }

  return decoded;
}

function routeFromUrl(url) {
  const parsed = new URL(url);
  return parsed.pathname === "/" ? "" : parsed.pathname.replace(/\/$/, "");
}

function fileForRoute(route) {
  return route ? path.join(outputRoot, `${route.slice(1)}.html`) : path.join(outputRoot, "index.html");
}

function localizedUrl(locale, route) {
  return `${origin}/${locale}${route}`;
}

function localizedPath(locale, route) {
  return `/${locale}${route}`;
}

function alternateMarkup(route, currentUrl) {
  const alternates = hrefLocales.map((locale) => {
    const href = locale === "en" ? `${origin}${route || "/"}` : localizedUrl(locale, route);
    return `<link rel="alternate" hreflang="${locale}" href="${href}">`;
  }).join("");
  return `<link rel="canonical" href="${currentUrl}">${alternates}<link rel="alternate" hreflang="x-default" href="${origin}${route || "/"}">`;
}

function setAlternates(html, route, currentUrl) {
  const cleaned = html
    .replace(/<link\b[^>]*\brel=["']canonical["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*\brel=["']alternate["'][^>]*\bhreflang=["'][^"']+["'][^>]*>/gi, "");
  return cleaned.replace("</head>", `${alternateMarkup(route, currentUrl)}</head>`);
}

function rewriteInternalUrl(value, locale) {
  if (!value || value.startsWith("#") || value.startsWith("mailto:") || value.startsWith("tel:")) return value;
  let parsed;
  try {
    parsed = new URL(decodeHtml(value), origin);
  } catch {
    return value;
  }
  if (parsed.origin !== origin) return value;
  const parts = parsed.pathname.split("/").filter(Boolean);
  if (locales.includes(parts[0])) parts.shift();
  const route = parts.length ? `/${parts.join("/")}` : "";
  return `${localizedPath(locale, route)}${parsed.search}${parsed.hash}`;
}

function translateJson(value, locale) {
  if (Array.isArray(value)) return value.map((item) => translateJson(item, locale));
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateJson(item, locale)]));
  if (typeof value !== "string") return value;
  if (value.startsWith(origin)) {
    const parsed = new URL(value);
    return `${localizedUrl(locale, routeFromUrl(value))}${parsed.hash}`;
  }
  return translated(value, locale);
}

function translateTextNodes(html, locale) {
  const protectedFragments = [];
  let protectedHtml = html.replace(/<(a|label)\b[^>]*\b(?:class=["'][^"']*\bnotranslate\b[^"']*["']|translate=["']no["'])[^>]*>[\s\S]*?<\/\1>/gi, (fragment) => {
    const marker = `\u0000FQPROTECTED${protectedFragments.length}\u0000`;
    protectedFragments.push(fragment);
    return marker;
  });

  protectedHtml = protectedHtml.split(/(<[^>]+>)/g).map((fragment) => {
    if (!fragment || fragment.startsWith("<") || fragment.includes("\u0000FQPROTECTED")) return fragment;
    if (!fragment.trim()) return fragment;
    const leading = fragment.match(/^\s*/)?.[0] || "";
    const trailing = fragment.match(/\s*$/)?.[0] || "";
    return `${leading}${encodeText(translated(fragment, locale))}${trailing}`;
  }).join("");

  return protectedHtml.replace(/\u0000FQPROTECTED(\d+)\u0000/g, (_, index) => protectedFragments[Number(index)]);
}

function translateAttributes(html, locale) {
  return html.replace(/\b(placeholder|alt|title|aria-label)=(['"])(.*?)\2/gi, (match, name, quote, value) => {
    if (!value.trim()) return match;
    return `${name}=${quote}${encodeAttribute(translated(value, locale))}${quote}`;
  });
}

function translateMeta(html, locale) {
  return html.replace(/<meta\b[^>]*>/gi, (tag) => {
    const identity = tag.match(/\b(?:name|property)=(['"])(.*?)\1/i)?.[2]?.toLowerCase();
    if (!["description", "og:title", "og:description", "twitter:title", "twitter:description"].includes(identity || "")) return tag;
    return tag.replace(/\bcontent=(['"])(.*?)\1/i, (_, quote, value) => `content=${quote}${encodeAttribute(translated(value, locale))}${quote}`);
  });
}

function translateHtml(sourceHtml, locale, route) {
  let html = sourceHtml.replace(/<html\b[^>]*\blang=(['"])[^"']*\1/i, `<html lang="${locale}"`);

  html = html.replace(/<script\b[^>]*type=(['"])application\/ld\+json\1[^>]*>([\s\S]*?)<\/script>/gi, (full, _quote, json) => {
    try {
      return `<script type="application/ld+json">${JSON.stringify(translateJson(JSON.parse(decodeHtml(json)), locale))}</script>`;
    } catch {
      return full;
    }
  });
  html = html
    .replace(/<script\b(?![^>]*type=(['"])application\/ld\+json\1)[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*\brel=(['"])(?:preload|modulepreload)\1[^>]*\bas=(['"])script\2[^>]*>/gi, "");

  html = translateTextNodes(html, locale);
  html = translateAttributes(html, locale);
  html = translateMeta(html, locale);

  html = html.replace(/<a\b([^>]*?)\bhref=(['"])(.*?)\2([^>]*)>/gi, (full, before, quote, href, after) => {
    return `<a${before}href=${quote}${encodeAttribute(rewriteInternalUrl(href, locale))}${quote}${after}>`;
  });

  html = html.replace(/<select\b([^>]*\baria-label=(['"])Language\2[^>]*)>/i, (full, attributes) => {
    const withoutHandler = attributes.replace(/\s+onchange=(['"])[\s\S]*?\1/i, "");
    const handler = "var p=location.pathname.replace(/^\\/(nl|de|it|es)(?=\\/|$)/,'')||'/';location.href=this.value==='en'?p:'/'+this.value+(p==='/'?'':p)";
    return `<select${withoutHandler} onchange="${handler.replace(/"/g, "&quot;")}">`;
  });
  html = html.replace(/<option\b([^>]*?)\sselected(?:=(['"])[^"']*\2)?([^>]*)>/gi, "<option$1$3>");
  html = html.replace(new RegExp(`<option\\b([^>]*\\bvalue=['"]${locale}['"][^>]*)>`, "i"), "<option$1 selected>");

  const currentUrl = localizedUrl(locale, route);
  html = setAlternates(html, route, currentUrl);
  html = html.replace(/<meta\b([^>]*\bproperty=(['"])og:url\2[^>]*\bcontent=)(['"])(.*?)\3([^>]*)>/i, `<meta$1"${currentUrl}"$5>`);
  return html;
}

const sitemapXml = await fs.readFile(path.join(outputRoot, "sitemap.xml"), "utf8");
const allUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const englishRoutes = allUrls.map(routeFromUrl).filter((route) => !new RegExp(`^/(${locales.join("|")})(/|$)`).test(route));

for (const route of englishRoutes) {
  const sourceFile = fileForRoute(route);
  const sourceHtml = await fs.readFile(sourceFile, "utf8");
  await fs.writeFile(sourceFile, setAlternates(sourceHtml, route, `${origin}${route || "/"}`));

  for (const locale of locales) {
    const destination = route
      ? path.join(outputRoot, locale, `${route.slice(1)}.html`)
      : path.join(outputRoot, `${locale}.html`);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(destination, translateHtml(sourceHtml, locale, route));
  }
}

console.log(`Generated ${englishRoutes.length * locales.length} localized HTML pages with canonical and hreflang metadata.`);
