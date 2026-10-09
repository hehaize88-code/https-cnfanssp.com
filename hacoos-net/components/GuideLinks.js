import Link from "next/link";
import { guides } from "@/app/data";
import { localizeGuides, localizePath } from "@/app/i18n";
import { HOME_GUIDE_SLUGS, relatedGuideSlugs, seoCopy } from "@/app/seoUpdates";
import { Arrow } from "./Icons";

export default function GuideLinks({ locale = "en", slug, compact = false }) {
  const copy = seoCopy(locale);
  const slugs = slug ? relatedGuideSlugs(slug) : HOME_GUIDE_SLUGS;
  const localized = localizeGuides(guides, locale);
  return <section className={compact ? "article-related" : "section wrap"} aria-label={copy.related}>
    <h2>{compact ? copy.related : copy.hubTitle}</h2>
    {!compact && <p className="large-copy">{copy.hubLead}</p>}
    <div className="research-grid">{slugs.map((key) => {
      const guide = localized.find((item) => item.slug === key);
      return guide && <Link className="research-card" href={`${localizePath(`/guides/${key}`, locale)}/`} key={key} data-guide-link="related">
        <h3>{guide.title}</h3><p>{guide.short}</p><Arrow size={18}/>
      </Link>;
    })}</div>
  </section>;
}
