import type { Article } from "./data";
import copy from "./inspection-guides/en.json";

const publication = { published: "2026-11-05", modified: "2026-11-05", updated: "November 5, 2026", readTime: "7 min read" };

export const inspectionArticles: Article[] = [
  {
    ...publication,
    ...copy.clothing,
    slug: "clothing-qc-photos",
    illustration: { src: "/hoodie-measurements.svg", caption: "1. Flat chest width from underarm seam to underarm seam. 2. Body length from the high shoulder beside the neck to the bottom hem." },
    related: ["missing-qc-photo-angles", "qc-measurement-photo-geometry"],
    sources: [{ label: "SunFrog garment measurement guide", href: "https://www.sunfrog.com/sizing" }],
  },
  {
    ...publication,
    ...copy.bags,
    slug: "bag-qc-photos-opening-and-fit",
    illustration: { src: "/bag-measurements.svg", caption: "1. Clear opening between the zipper stops. 2. Outside width of the base. 3. Vertical drop from the inside of the raised strap to the top of the bag." },
    related: ["missing-qc-photo-angles", "how-to-read-qc-photos"],
    sources: [{ label: "Havin Bag measurement guide", href: "https://havinbag.com/pages/size-guide" }],
  },
];

export const updatedSections: Record<string, Article["sections"][number]> = {
  "weidian-taobao-1688-qc-photos": {
    heading: "Which number identifies my listing?",
    paragraphs: ["Compare the address in your browser with these three examples. The item number identifies the listing. Save the seller, size and colour alongside it so you can check which option the album shows."],
    bullets: [
      "Weidian · weidian.com/item.html?itemID=7683961628 → itemID is 7683961628. A shop homepage has a different address.",
      "Taobao · item.taobao.com/item.htm?id=703658328689 → id is 703658328689. Keep this number when removing tracking parameters.",
      "1688 · detail.1688.com/offer/999894145616.html → the offer number is 999894145616. Record the chosen specification separately.",
    ],
  },
  "missing-qc-photo-angles": {
    heading: "Three extra QC photo requests you can copy",
    paragraphs: ["Send the one request that settles your open question. Include your order reference in your private warehouse message and name the size or variant the photo should show."],
    bullets: [
      "Hoodie: Please lay my hoodie flat without stretching it. Place the tape straight from one underarm seam to the other and photograph both endpoints, including zero.",
      "Sneakers: Please stand both shoes on the same level surface, heels facing the camera. Take one photo from directly behind at heel height so I can compare their alignment.",
      "Bag: Please open the zipper fully without pulling the sides apart. Photograph the clear opening with a ruler between the two stops and both ends in view.",
    ],
  },
  "how-to-read-qc-photos": {
    heading: "How do I check the QC photos of my item?",
    paragraphs: ["Open the full-item photo first and match the colour, size and version to your order. Then enlarge the detail that matters for this item: the underarm seams on a hoodie, the two heels on a pair of shoes, or the usable zipper opening on a bag. Compare a second angle before you decide whether a difference is real."],
    bullets: ["If the wrong size is legible on the label, save the photo and contact the warehouse about the mismatch. If the label is folded, ask for a close-up of the unfolded label. Each situation calls for a different next step."],
  },
  "findqc-no-results-missing-qc-photos": {
    heading: "A working product link with an empty photo album",
    paragraphs: ["Open the original product page and look at the seller, item number and variant. If those match but the album is empty, keep that link in your notes. For an item already at the warehouse, open the order record and request the missing view of your unit. For an item you have yet to buy, record which feature you cannot verify before ordering."],
  },
};
