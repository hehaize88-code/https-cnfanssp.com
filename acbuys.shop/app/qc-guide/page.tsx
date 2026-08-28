import type { Metadata } from "next";
import InfoPage from "../ui/InfoPage";

export const metadata: Metadata = { title: "ACBuy QC Photo Guide | 5-Point Warehouse Check", description: "Learn how to review ACBuy warehouse QC photos for shape, color, details, size, and visible defects.", alternates: { canonical: "https://acbuys.shop/qc-guide/" } };

export default function QcPage() {
  return <InfoPage canonicalPath="/qc-guide/" accent="coral" eyebrow="Warehouse inspection" title="Five checks before you accept warehouse QC." intro="QC photos are evidence, not decoration. Review them in a repeatable order so small details do not get lost in the excitement of a new arrival." sections={[
    { kicker: "Check 01", title: "Shape and symmetry", body: <><p>Begin with the whole item. Compare the left and right sides, overall proportions, panel alignment, toe shape, collar shape, bag structure, or garment drape. Large structural differences are easier to spot before zooming into fine details.</p></> },
    { kicker: "Check 02", title: "Color under warehouse lighting", body: <><p>Warehouse lighting can make neutral colors appear warmer or cooler. Compare several photos rather than judging a single frame. Ask whether the color difference appears consistently across the set and compare against the seller’s listing only as a reference.</p></> },
    { kicker: "Check 03", title: "Stitching, print, and hardware", body: <><p>Zoom in on seams, embroidery, printed graphics, zippers, buckles, and attachment points. Look for skipped stitches, loose threads, off-center graphics, rough edges, scratches, or mismatched hardware.</p><div className="callout"><b>Do not rely on logos alone</b><span>Construction, materials, measurements, and visible defects usually tell you more about the received item.</span></div></> },
    { kicker: "Check 04", title: "Measurements and size", body: <><p>A size label does not confirm fit. Compare available measurements with a garment or shoe you already own. Where the default photo set does not show the required measurement, use the platform’s current photo or service options.</p></> },
    { kicker: "Check 05", title: "Visible defects and next action", body: <><p>Check every surface for stains, tears, dents, glue marks, scratches, broken parts, and missing accessories. If something is unclear, pause and gather better evidence before accepting, returning, or exchanging the item.</p></> },
  ]} />;
}
