import type { Metadata } from "next";
import { EditorialPage } from "../components/EditorialPage";

export const metadata: Metadata = { title: "Product Categories for QC Research – FindQCs", description: "Browse shoes, hoodies, T-shirts, jackets, pants, headwear, accessories, jerseys and electronics.", alternates: { canonical: "/categories" } };
const categories = [
  ["Shoes", "Check overall silhouette, toe shape, heel alignment, panel symmetry, sole finish and size label.", "shoes"], ["Hoodies & Sweaters", "Review fabric texture, print position, ribbing, hood shape, seams and garment measurements.", "hoodies-sweaters"],
  ["T-Shirts", "Check print scale, collar shape, shoulder alignment, hems, fabric appearance and measurements.", "t-shirts"], ["Jackets", "Review panel alignment, hardware, pockets, lining, fill distribution and closure operation.", "jackets"],
  ["Pants & Shorts", "Compare waist, rise, inseam, leg opening, pocket placement and overall cut.", "pants-shorts"], ["Headwear", "Inspect crown shape, brim symmetry, embroidery, patch placement and internal labels.", "headwear"],
  ["Accessories", "Check edges, hardware finish, engraving, stitching, closure alignment and dimensions.", "accessories"], ["Jerseys", "Review badge placement, name and number alignment, sponsor print, seams and selected size.", "Jersey"],
  ["Electronics", "Confirm model details, included accessories and visible condition. Photos cannot prove battery health or internal specifications.", "electronics"], ["Other Stuff", "Use the listing details to build a product-specific checklist before judging the photos.", "other-stuff"],
];
export default function Categories(){return <EditorialPage eyebrow="DISCOVER / CATEGORIES" title="Start with the product type." intro="Different products fail in different ways. Choose a category to open the connected catalogue, then apply the inspection notes shown here.">
  <div className="category-directory">{categories.map(([name,note,slug],i)=><a key={slug} href={`https://www.cnfanssp.com/${slug}/`} target="_blank" rel="noopener noreferrer"><span>{String(i+1).padStart(2,"0")}</span><div><h2>{name}</h2><p>{note}</p></div><b>↗</b></a>)}</div>
</EditorialPage>}
