export type Product = {
  name: string;
  category: string;
  price: string;
  note: string;
  status: "QC reference" | "Link checked" | "Options available";
  href: string;
  image: string;
  code: string;
  tone: string;
};

export const categories = [
  "All", "Shoes", "Hoodies", "T-Shirts", "Jackets", "Pants", "Headwear",
  "Accessories", "Jersey", "Bags", "Electronics", "Other",
];

export const products: Product[] = [
  { name: "HOKA shoes", category: "Shoes", price: "$50.70", note: "Compare the exact size and color before ordering.", status: "Link checked", href: "https://www.cnfanssp.com/AllProducts/4281.html", image: "/products/hoka.gif", code: "SH-01", tone: "blue" },
  { name: "New Balance 9060", category: "Shoes", price: "$53.20", note: "Review measurements and warehouse photos.", status: "QC reference", href: "https://www.cnfanssp.com/AllProducts/4282.html", image: "/products/new-balance-9060.webp", code: "SH-02", tone: "coral" },
  { name: "Autry shoes", category: "Shoes", price: "$70.00", note: "Multiple listings may use different option names.", status: "Options available", href: "https://www.cnfanssp.com/AllProducts/4276.html", image: "/products/autry-shoes.gif", code: "SH-03", tone: "lime" },
  { name: "Corteiz jacket", category: "Jackets", price: "$42.20", note: "Check fabric, zipper and size chart details.", status: "Link checked", href: "https://www.cnfanssp.com/AllProducts/4283.html", image: "/products/corteiz-jacket.webp", code: "JK-01", tone: "violet" },
  { name: "Stussy quilted jacket", category: "Jackets", price: "$58.90", note: "Use warehouse measurements for the final decision.", status: "QC reference", href: "https://www.cnfanssp.com/AllProducts/4261.html", image: "/products/stussy-quilted-jacket.webp", code: "JK-02", tone: "blue" },
  { name: "Akimbo Club hoodies", category: "Hoodies", price: "$28.37", note: "40+ styles shown on the source listing.", status: "Options available", href: "https://www.cnfanssp.com/AllProducts/3798.html", image: "/products/akimbo-club-hoodies.webp", code: "HD-01", tone: "coral" },
  { name: "6PM hoodie set", category: "Hoodies", price: "$28.00", note: "Inspect the complete set and selected variant.", status: "QC reference", href: "https://www.cnfanssp.com/AllProducts/24.html", image: "/products/6pm-hoodie-set.jpg", code: "HD-02", tone: "lime" },
  { name: "Stussy T-shirt", category: "T-Shirts", price: "$8.50", note: "Confirm print placement and garment measurements.", status: "Link checked", href: "https://www.cnfanssp.com/AllProducts/4271.html", image: "/products/stussy-tshirt.webp", code: "TS-01", tone: "violet" },
  { name: "Lululemon pants", category: "Pants", price: "$16.80", note: "Review waist, inseam and selected option.", status: "Options available", href: "https://www.cnfanssp.com/AllProducts/4272.html", image: "/products/lululemon-pants.webp", code: "PT-01", tone: "blue" },
  { name: "Canada Goose hat", category: "Headwear", price: "$11.30", note: "Check shape, embroidery and color under neutral light.", status: "QC reference", href: "https://www.cnfanssp.com/AllProducts/4252.html", image: "/products/canada-goose-hat.webp", code: "HW-01", tone: "coral" },
  { name: "Chrome Hearts bracelet", category: "Accessories", price: "$13.80", note: "Verify length, clasp and finish before shipping.", status: "Link checked", href: "https://www.cnfanssp.com/AllProducts/4259.html", image: "/products/chrome-hearts-bracelet.webp", code: "AC-01", tone: "lime" },
  { name: "Football windbreaker", category: "Jersey", price: "$23.70", note: "Confirm team, player and size options carefully.", status: "Options available", href: "https://www.cnfanssp.com/AllProducts/4245.html", image: "/products/football-windbreaker.webp", code: "JR-01", tone: "violet" },
];

export const navItems = [
  ["Spreadsheet", "/spreadsheet/"], ["Finds", "/finds/"], ["QC", "/qc/"],
  ["Shipping", "/shipping/"], ["Articles", "/articles/"], ["FAQ", "/faq/"],
] as const;

export const articles = [
  { slug: "superbuy-personal-order-tracker-setup", eyebrow: "Personal tracker", title: "Superbuy Personal Order Tracker: Set Up a Status Log That Stays Useful", description: "Build a private order spreadsheet for selected products, purchase events, warehouse milestones and the later parcel without turning it into a public product database.", read: "12 min read" },
  { slug: "how-to-use-superbuy-spreadsheet", eyebrow: "Beginner workflow", title: "How to Use a Superbuy Spreadsheet Without Buying Blind", description: "A practical path from a product row to a verified order, warehouse inspection and shipping decision.", read: "9 min read" },
  { slug: "superbuy-qc-photo-checklist", eyebrow: "Quality control", title: "Superbuy QC Photo Checklist: What to Inspect Before Shipping", description: "Turn warehouse photos into a repeatable approve, question or return decision.", read: "8 min read" },
  { slug: "superbuy-shipping-cost-guide", eyebrow: "Parcel planning", title: "Superbuy Shipping Cost: Estimate, Consolidate and Avoid Surprises", description: "Understand the difference between an estimate, a shipping deposit and the final verified parcel charge.", read: "10 min read" },
  { slug: "superbuy-review-2026", eyebrow: "Independent review", title: "Superbuy Review 2026: What Customers Praise, Question and Learn", description: "A balanced evidence review separating official service facts from recurring themes in public customer feedback.", read: "11 min read" },
];

export const SHOP_URL = "https://www.cnfanssp.com/AllProducts/";
