import enUi from "../../content/editorial/en/ui.json";
import enGuides from "../../content/editorial/en/guides.json";
import enRevisions from "../../content/editorial/en/revisions.json";

export type Locale = "de" | "fr" | "es" | "it" | "pl";
type TextTree = string | TextTree[] | { [key: string]: TextTree };

function addPairs(base: TextTree, version: TextTree, result: Map<string, string>) {
  if (typeof base === "string" && typeof version === "string") {
    result.set(base, version);
  } else if (typeof base === "object" && typeof version === "object") {
    for (const [key, item] of Object.entries(base)) {
      addPairs(item, (version as Record<string, TextTree>)[key], result);
    }
  }
}

export async function loadEditorialTranslations(locale: Locale) {
  const [ui, guides, revisions] = await Promise.all([
    import(`../../content/editorial/${locale}/ui.json`),
    import(`../../content/editorial/${locale}/guides.json`),
    import(`../../content/editorial/${locale}/revisions.json`),
  ]);
  const result = new Map<string, string>();
  addPairs(enUi, ui.default, result);
  addPairs(enGuides, guides.default, result);
  addPairs(enRevisions, revisions.default, result);
  return result;
}
