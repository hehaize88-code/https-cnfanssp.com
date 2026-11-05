import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { fieldGuides, guideBodies } from "../fieldGuides";

export default function FieldGuide({ slug }: { slug: string }) {
  const guide = fieldGuides[slug];
  const base = "https://allchinabuys.shop";
  const url = base + "/articles/" + slug + "/";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article", headline: guide.title, description: guide.summary,
        datePublished: "2026-11-05", dateModified: "2026-11-05", inLanguage: "en",
        mainEntityOfPage: url, image: base + "/og.png",
        author: { "@type": "Organization", name: "AllChinaBuy Finds Research Desk" },
        publisher: { "@type": "Organization", name: "AllChinaBuy Finds" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: base + "/" },
          { "@type": "ListItem", position: 2, name: "Articles", item: base + "/articles/" },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };
  return <main className="article-page">
    <SiteHeader />
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <header className="article-hero">
        <p className="section-kicker">{guide.label}</p><h1>{guide.title}</h1>
        <p className="article-dek">{guide.summary}</p>
        <div className="article-meta"><time dateTime="2026-11-05">5 November 2026</time><a href="/articles/">Articles</a></div>
      </header>
      <div className="field-prose" data-native-guide={slug} dangerouslySetInnerHTML={{ __html: guideBodies[slug] }} />
    </article>
    <SiteFooter />
  </main>;
}
