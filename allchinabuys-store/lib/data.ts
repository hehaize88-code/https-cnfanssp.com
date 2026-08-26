export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: string;
  sourceId: string;
  image: string;
  destination: string;
  summary: string;
  checks: string[];
  updated: string;
};

export const categories = [
  { slug: "shoes", name: "Shoes", mark: "01", destination: "https://www.cnfanssp.com/shoes/", description: "Sneakers, runners and everyday pairs with direct product records." },
  { slug: "hoodies-sweaters", name: "Hoodies", mark: "02", destination: "https://www.cnfanssp.com/hoodies-sweaters/", description: "Pullovers, zip-ups, knitwear and matching sets." },
  { slug: "t-shirts", name: "T-Shirts", mark: "03", destination: "https://www.cnfanssp.com/t-shirts/", description: "Graphic tees, polos and seasonal basics." },
  { slug: "jackets", name: "Jackets", mark: "04", destination: "https://www.cnfanssp.com/jackets/", description: "Light layers, puffers and weather-ready outerwear." },
  { slug: "pants-shorts", name: "Pants & Shorts", mark: "05", destination: "https://www.cnfanssp.com/pants-shorts/", description: "Cargo pants, denim, sweatpants and shorts." },
  { slug: "headwear", name: "Headwear", mark: "06", destination: "https://www.cnfanssp.com/headwear/", description: "Caps, beanies and other finishing pieces." },
  { slug: "accessories", name: "Accessories", mark: "07", destination: "https://www.cnfanssp.com/accessories/", description: "Belts, jewelry, wallets and useful extras." },
  { slug: "electronics", name: "Electronics", mark: "08", destination: "https://www.cnfanssp.com/electronics/", description: "Small electronics and everyday tech finds." },
];

export const products: Product[] = [
  {
    slug: "autry-shoes", name: "Autry Shoes", category: "Shoes", categorySlug: "shoes", price: "$69.40", sourceId: "7645681448",
    image: "https://www.cnfanssp.com/uploads/allimg/20251225/1-251225144612B9.gif", destination: "https://www.cnfanssp.com/AllProducts/4276.html",
    summary: "A clean low-profile sneaker listing with multiple warehouse images available on the source record.",
    checks: ["Confirm the selected color", "Compare insole length", "Review side-panel alignment"], updated: "August 26, 2026",
  },
  {
    slug: "amiri-ma-1-sneakers", name: "AMIRI MA-1 Sneakers — 9 styles", category: "Shoes", categorySlug: "shoes", price: "$40.00", sourceId: "Source record 3842",
    image: "https://www.cnfanssp.com/uploads/allimg/20251219/1-2512191533513J.webp", destination: "https://www.cnfanssp.com/AllProducts/3842.html",
    summary: "A multi-style sneaker listing. Open the source record before ordering to confirm the exact variant and size chart.",
    checks: ["Match the chosen variant", "Check sole shape", "Ask for size measurements"], updated: "August 26, 2026",
  },
  {
    slug: "yeezy-350-v2-collection", name: "350 V2 Shoes Collection", category: "Shoes", categorySlug: "shoes", price: "$41.70", sourceId: "7621270322",
    image: "https://www.cnfanssp.com/uploads/allimg/20251128/1-25112Q04252110.webp", destination: "https://www.cnfanssp.com/AllProducts/2640.html",
    summary: "A collection-style listing that requires careful colorway and sizing confirmation before payment.",
    checks: ["Verify colorway", "Check knit consistency", "Confirm outsole tone"], updated: "August 26, 2026",
  },
  {
    slug: "lv-run-away-shoes", name: "Run Away Shoes", category: "Shoes", categorySlug: "shoes", price: "$55.60", sourceId: "Source record 887",
    image: "https://www.cnfanssp.com/uploads/allimg/20251030/1-251030162313414.webp", destination: "https://www.cnfanssp.com/AllProducts/887.html",
    summary: "A mixed-material runner listing with multiple product images on the source page.",
    checks: ["Inspect heel shape", "Compare material panels", "Confirm label placement"], updated: "August 26, 2026",
  },
  {
    slug: "prada-hoodie", name: "PRADA Hoodie", category: "Hoodies", categorySlug: "hoodies-sweaters", price: "$28.50", sourceId: "Source record 4469",
    image: "https://www.cnfanssp.com/uploads/allimg/20251231/1-251231160U02c.jpg", destination: "https://www.cnfanssp.com/AllProducts/4469.html",
    summary: "A hoodie listing that should be checked for measurements, fabric weight and placement before shipping.",
    checks: ["Request chest measurement", "Check fabric texture", "Review embroidery edges"], updated: "August 26, 2026",
  },
  {
    slug: "palm-angel-hoodie", name: "Palm Angel Hoodie — 37 colors", category: "Hoodies", categorySlug: "hoodies-sweaters", price: "$24.90", sourceId: "Source record 584",
    image: "https://www.cnfanssp.com/uploads/allimg/20251027/1-25102G15S4155.webp", destination: "https://www.cnfanssp.com/AllProducts/584.html",
    summary: "A high-variant listing. Use the source page to confirm that the image, color name and selected option all match.",
    checks: ["Match color code", "Check print scale", "Confirm garment measurements"], updated: "August 26, 2026",
  },
  {
    slug: "6pm-hoodie-set", name: "6PM Hoodie Set", category: "Hoodies", categorySlug: "hoodies-sweaters", price: "$27.60", sourceId: "7572947321",
    image: "https://www.cnfanssp.com/uploads/allimg/20251016/1-251016161633357.jpg", destination: "https://www.cnfanssp.com/AllProducts/24.html",
    summary: "A two-piece set listing with multiple source images and separate details worth checking for both pieces.",
    checks: ["Confirm both pieces", "Compare top and bottom sizing", "Check color consistency"], updated: "August 26, 2026",
  },
  {
    slug: "embroidered-duckbill-cap", name: "Embroidered Duckbill Cap — 40 styles", category: "Headwear", categorySlug: "headwear", price: "$14.70", sourceId: "7684541713",
    image: "https://www.cnfanssp.com/uploads/allimg/20260204/1-2602041415562J.webp", destination: "https://www.cnfanssp.com/AllProducts/5985.html",
    summary: "A multi-style cap listing where the option thumbnail and selected code should be cross-checked carefully.",
    checks: ["Match style number", "Inspect embroidery", "Confirm adjustable closure"], updated: "August 26, 2026",
  },
];

export const guides = [
  { href: "/guides/how-to-use", kicker: "Start here", title: "How to use an AllChinaBuy spreadsheet", description: "A practical path from finding a listing to checking options and opening the source record.", read: "8 min" },
  { href: "/guides/qc-checks", kicker: "QC field guide", title: "Read warehouse photos before you ship", description: "A repeatable inspection checklist for sizing, alignment, color, materials and visible defects.", read: "9 min" },
  { href: "/guides/shipping", kicker: "Shipping", title: "Estimate freight without guessing", description: "Understand actual weight, volumetric weight, packaging choices and why the checkout estimate can change.", read: "10 min" },
  { href: "/guides/reviews", kicker: "Review analysis", title: "What AllChinaBuy customer reviews actually show", description: "A balanced, date-stamped reading of warehouse, QC, shipping and support reports across public review sources.", read: "11 min" },
];

export function getCategory(slug: string) { return categories.find((category) => category.slug === slug); }
export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }
