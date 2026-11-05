import { fieldGuides } from "../fieldGuides";

export default function GuideLinks({ slugs }: { slugs: string[] }) {
  return <div className="category-reading field-links">{slugs.map(slug => (
    <a href={`/articles/${slug}/`} key={slug}>{fieldGuides[slug].title}</a>
  ))}</div>;
}
