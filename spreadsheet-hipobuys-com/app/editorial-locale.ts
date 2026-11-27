import { legacyColumns, type Lang } from "./languages";

// The Pages entry and vinext's server renderer may be built as separate modules.
// Keep immutable, per-language dictionaries shared inside this Worker isolate.
type LocaleCache = Partial<Record<Lang, Record<string, string>>>;
const runtime = globalThis as typeof globalThis & { hipobuyEditorialLocales?: LocaleCache };
const cache = runtime.hipobuyEditorialLocales ??= {};

export async function loadEditorialLocale(lang: Lang, requestUrl: string, assets: { fetch(input: RequestInfo | URL): Promise<Response> }) {
  if (legacyColumns[lang] !== undefined || cache[lang]) return;
  const response = await assets.fetch(new URL(`/locales/articles-${lang}.json`, requestUrl).href);
  if (!response.ok) throw new Error(`Editorial locale ${lang} returned ${response.status}`);
  cache[lang] = await response.json() as Record<string, string>;
}

export function editorialText(key: string, lang: Lang): string {
  return cache[lang]?.[key] ?? key;
}
