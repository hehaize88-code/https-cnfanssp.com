import type { Lang } from "./site-data";
import { spreadsheetArticleSlugs } from "./seo-articles-spreadsheet";
import { newArticleSlugs, revisedArticleSlugs, revisionDate } from "./seo-refresh";

const originalDates: Record<string, string> = {
  "joyagoo-estimated-final-freight-adjustment-rules": "2026-09-10",
  "joyagoo-rehearsal-packing-policy-confirmations-limits": "2026-09-06",
  "joyagoo-warehouse-storage-policy-item-clocks-expiry-evidence": "2026-09-04",
  "joyagoo-five-day-return-clock-qc-timestamp-deadline": "2026-09-02",
  "joyagoo-return-eligibility-matrix-seller-condition-packaging": "2026-08-31",
  "joyagoo-fee-policy-free-agent-service-transaction-costs": "2026-08-29"
};
export function articleDates(slug: string, lang: Lang) {
  const isNew = newArticleSlugs.includes(slug) || (lang !== "en" && spreadsheetArticleSlugs.includes(slug));
  const published = isNew ? revisionDate : spreadsheetArticleSlugs.includes(slug) ? "2026-09-21" : originalDates[slug] ?? "2026-08-28";
  return { published, modified: revisedArticleSlugs.includes(slug) ? revisionDate : published };
}
export function formatArticleDate(date: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}
