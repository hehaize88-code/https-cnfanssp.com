import { getTrustPage } from "@/lib/trust-pages";
import type { Locale, TrustRouteName } from "@/lib/site-data";
import { SiteShell } from "./site-shell";

export function TrustView({ page, locale = "en" }: { page: TrustRouteName; locale?: Locale }) {
  const content = getTrustPage(locale, page);
  return <SiteShell locale={locale}><main className="inner-main">
    <header className="inner-hero"><span className="section-kicker">{content.kicker}</span><h1>{content.title}</h1><p>{content.intro}</p></header>
    <div className="trust-content">
      {content.sections.map((section) => <section key={section.heading}>
        <h2>{section.heading}</h2>
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
      </section>)}
    </div>
  </main></SiteShell>;
}
