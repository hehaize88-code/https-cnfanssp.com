import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Lang } from "./site-data";

export const releaseDate = "2026-10-10";
export const newArticleSlugs = ["hacoo-order-tracking", "hacoo-links-not-working", "hacoo-size-guide", "hacoo-qc-photo-checklist"] as const;
export function editorialContent(lang: Lang, slug: string) {
  const file = join(process.cwd(), "content", lang, `${slug}.md`);
  if (!existsSync(file)) {
    if (newArticleSlugs.includes(slug as never) || (lang !== "en" && ["hacoo-product-decision-matrix", "hacoo-facts-vs-preference-scorecard", "compare-specific-hacoo-variants", "hacoo-comparison-confidence-labels", "weight-hacoo-comparison-criteria", "compare-incomplete-hacoo-product-pages", "limit-hacoo-shortlist-to-three-candidates", "hacoo-must-haves-nice-to-haves-deal-breakers", "hacoo-knockout-rules-before-weighted-scores"].includes(slug))) throw new Error(`Missing editorial translation: ${lang}/${slug}`);
    return {};
  }
  const raw = readFileSync(file, "utf8");
  const [header, ...blocks] = raw.split(/^## /m);
  const meta = Object.fromEntries(header.trim().split("\n").filter(x => x.includes(": ")).map(x => { const p = x.indexOf(": "); return [x.slice(0, p), x.slice(p + 2)]; }));
  const sections = blocks.map(block => { const p = block.indexOf("\n"); return [block.slice(0, p).trim(), block.slice(p + 1).trim()] as const; });
  return { ...meta, sections, modified: releaseDate };
}
export const newArticles = Object.fromEntries(newArticleSlugs.map(slug => [slug, {
  title: "", excerpt: "", keyword: "", sourceNote: "", imageAlt: "", imageCaption: "",
  image: "/products/cnfanssp-shoes-2.jpg", sources: [], published: releaseDate,
  ...editorialContent("en", slug),
}])) as unknown as Record<typeof newArticleSlugs[number], {title:string;excerpt:string;keyword:string;sourceNote:string;imageAlt:string;imageCaption:string;image:string;sources:readonly [];published:string;sections:readonly(readonly[string,string])[];modified:string}>;
