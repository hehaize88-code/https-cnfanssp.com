import type { Metadata } from "next";
import { EditorialPage } from "../components/EditorialPage";

export const metadata: Metadata = { title: "Product Categories for QC Research – FindQCs", description: "Browse shoes, hoodies, T-shirts, jackets, pants, headwear, accessories, jerseys and electronics.", alternates: { canonical: "/categories/" } };
const categories = [
  ["Shoes", "Check overall silhouette, toe shape, heel alignment, panel symmetry, sole finish and size label.", "shoes"], ["Hoodies & Sweaters", "Review fabric texture, print position, ribbing, hood shape, seams and garment measurements.", "hoodies-sweaters"],
  ["T-Shirts", "Check print scale, collar shape, shoulder alignment, hems, fabric appearance and measurements.", "t-shirts"], ["Jackets", "Review panel alignment, hardware, pockets, lining, fill distribution and closure operation.", "jackets"],
  ["Pants & Shorts", "Compare waist, rise, inseam, leg opening, pocket placement and overall cut.", "pants-shorts"], ["Headwear", "Inspect crown shape, brim symmetry, embroidery, patch placement and internal labels.", "headwear"],
  ["Accessories", "Check edges, hardware finish, engraving, stitching, closure alignment and dimensions.", "accessories"], ["Jerseys", "Review badge placement, name and number alignment, sponsor print, seams and selected size.", "Jersey"],
  ["Electronics", "Confirm model details, included accessories and visible condition. Photos cannot prove battery health or internal specifications.", "electronics"], ["Other Stuff", "Use the listing details to build a product-specific checklist before judging the photos.", "other-stuff"],
];
export default function Categories(){return <EditorialPage eyebrow="DISCOVER / CATEGORIES" title="Start with the product type." intro="Different products fail in different ways. Choose a category to open the connected catalogue, then apply the inspection notes shown here." breadcrumbs={[["Categories","/categories/"]]}>
  <div className="category-directory">{categories.map(([name,note,slug],i)=><a key={slug} href={`https://www.cnfanssp.com/${slug}/`} target="_blank" rel="noopener noreferrer"><span>{String(i+1).padStart(2,"0")}</span><div><h2>{name}</h2><p>{note}</p></div><b>↗</b></a>)}</div>
  <section className="directory-copy prose standalone" aria-labelledby="category-research-heading">
    <h2 id="category-research-heading">Build the checklist around the product</h2>
    <p>A useful QC review begins with the failure points that matter for that category. Footwear needs paired-item comparison, toe and heel shape, sole attachment and size-label checks. Clothing needs flat measurements, seam alignment and print or embroidery placement. Accessories often depend more on edges, hardware, closures and dimensions. Electronics require exact model and accessory matching, while ordinary photographs still cannot confirm battery condition, internal parts or long-term performance.</p>
    <h2>Use the listing before judging the photo</h2>
    <p>Open the current product page and record the selected color, size, material option and included pieces before inspecting small details. Product titles can describe several variations at once, so the selected option and visible labels are stronger identifiers than the headline alone. If the photograph does not show a detail needed to distinguish two variations, mark it as unknown and request a specific angle rather than assuming a match.</p>
    <h2>Separate defects from photo conditions</h2>
    <p>Start with centered overview images, then move to details. Uneven placement may come from folding, camera angle or lens distortion; apparent color differences may come from exposure and white balance. A repeatable sequence makes comparisons more reliable: confirm identity, inspect overall construction, check category-specific details, read measurements and record only what the evidence supports.</p>
  </section>
</EditorialPage>}
