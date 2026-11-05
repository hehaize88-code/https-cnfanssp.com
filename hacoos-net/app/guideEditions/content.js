import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import de from "./de.json";
import it from "./it.json";
import pt from "./pt.json";
import { RELEASE_DATE } from "./index";

const editions = { en, es, fr, de, it, pt };

export function applyEdition(slug, locale, previous) {
  const edition = editions[locale][slug];
  if (!edition) return previous;
  const reviewed = new Intl.DateTimeFormat(locale, {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(RELEASE_DATE));
  if (!edition.section) {
    return { ...edition, datePublished: RELEASE_DATE, dateModified: RELEASE_DATE, dateLabel: reviewed };
  }
  return {
    ...previous,
    intro: edition.intro,
    sections: [edition.section, ...previous.sections],
    sources: [...edition.sources, ...(previous.sources || [])],
    dateModified: RELEASE_DATE,
    dateLabel: reviewed,
  };
}
