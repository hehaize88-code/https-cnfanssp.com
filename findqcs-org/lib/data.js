export const MAIN_SITE = "https://www.cnfanssp.com";

export const categories = [
  {
    slug: "shoes",
    name: "Shoes",
    short: "Sneakers & footwear",
    description: "Browse footwear listings, compare available angles, and check shape, outsole, stitching and size-label details.",
    href: `${MAIN_SITE}/shoes/`,
    code: "01",
  },
  {
    slug: "hoodies-sweaters",
    name: "Hoodies",
    short: "Hoodies & sweaters",
    description: "Explore warm layers and use the QC checklist to review fabric weight, print placement, cuffs and measurements.",
    href: `${MAIN_SITE}/hoodies-sweaters/`,
    code: "02",
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    short: "Tees & tops",
    description: "Find everyday tops and inspect collar shape, print alignment, seams, tags and the measurement ruler when shown.",
    href: `${MAIN_SITE}/t-shirts/`,
    code: "03",
  },
  {
    slug: "jackets",
    name: "Jackets",
    short: "Outerwear",
    description: "Review outerwear listings with attention to hardware, lining, panel symmetry, embroidery and overall dimensions.",
    href: `${MAIN_SITE}/jackets/`,
    code: "04",
  },
  {
    slug: "pants-shorts",
    name: "Pants",
    short: "Pants & shorts",
    description: "Compare bottoms and check the waist, inseam, pocket placement, drawstrings and size information before ordering.",
    href: `${MAIN_SITE}/pants-shorts/`,
    code: "05",
  },
  {
    slug: "headwear",
    name: "Headwear",
    short: "Caps & hats",
    description: "Browse caps and hats while checking crown shape, embroidery, brim profile, closure hardware and label details.",
    href: `${MAIN_SITE}/headwear/`,
    code: "06",
  },
  {
    slug: "accessories",
    name: "Accessories",
    short: "Bags, watches & more",
    description: "Discover accessories and examine finishing, hardware, dimensions and protective packaging in the available images.",
    href: `${MAIN_SITE}/accessories/`,
    code: "07",
  },
  {
    slug: "jersey",
    name: "Jerseys",
    short: "Teamwear",
    description: "Browse jersey listings and check numbering, badges, print alignment, stitching and size charts before choosing.",
    href: `${MAIN_SITE}/jersey/`,
    code: "08",
  },
  {
    slug: "electronics",
    name: "Electronics",
    short: "Tech accessories",
    description: "Explore tech-related listings and confirm specifications, plug type, included parts and protective packaging.",
    href: `${MAIN_SITE}/electronics/`,
    code: "09",
  },
];

export const CATALOG_REVIEWED = "2026-08-26";

const PRODUCT_NOTES = {
  shoes: "Footwear listing",
  "hoodies-sweaters": "Hoodie listing",
  "t-shirts": "T-shirt listing",
  jackets: "Outerwear listing",
  "pants-shorts": "Pants listing",
  headwear: "Headwear listing",
  accessories: "Accessory listing",
  jersey: "Jersey listing",
  electronics: "Electronics listing",
};

// [main-site page ID, marketplace item ID, source-page title, CNY price,
// source-page views at review time, local first-listing image]
const PRODUCT_ROWS = {
  shoes: [
    ["6050", "7676983706", "shoes-60", "250", "803", "shoes-6050.jpg"],
    ["6049", "7673909327", "Socsks-59", "106", "963", "shoes-6049.jpg"],
    ["6048", "7673960543", "shoes-58", "288", "597", "shoes-6048.jpg"],
    ["6047", "7676969802", "shoes-57", "350", "961", "shoes-6047.jpg"],
    ["6046", "7673875019", "shoes-56", "240", "967", "shoes-6046.jpg"],
    ["6045", "7673948613", "shoes-55", "550", "907", "shoes-6045.jpg"],
    ["6044", "7676979982", "shoes-54", "329", "676", "shoes-6044.jpg"],
    ["6043", "7673922997", "shoes-53", "329", "867", "shoes-6043.jpg"],
    ["6042", "7673974257", "shoes-52", "449", "596", "shoes-6042.jpg"],
    ["6041", "7673962421", "shoes-51", "440", "610", "shoes-6041.jpg"],
    ["6040", "7673960535", "shoes-50", "180", "729", "shoes-6040.jpg"],
    ["6039", "7673930453", "shoes-49", "288", "937", "shoes-6039.jpg"],
  ],
  "hoodies-sweaters": [
    ["6127", "7676979998", "Hoodie-60", "118", "563", "hoodies-sweaters-6127.jpg"],
    ["6126", "7676916764", "Hoodie-59", "98", "865", "hoodies-sweaters-6126.jpg"],
    ["6125", "7676916764", "Hoodie-58", "98", "904", "hoodies-sweaters-6125.jpg"],
    ["6124", "7674025641", "Hoodie-57", "179", "568", "hoodies-sweaters-6124.jpg"],
    ["6123", "7674025641", "Hoodie-56", "179", "613", "hoodies-sweaters-6123.jpg"],
    ["6122", "7674025641", "Hoodie-55", "179", "627", "hoodies-sweaters-6122.jpg"],
    ["6121", "7673995991", "Hoodie-54", "124", "726", "hoodies-sweaters-6121.jpg"],
    ["6120", "7673995991", "Hoodie-53", "124", "536", "hoodies-sweaters-6120.jpg"],
    ["6119", "7673995991", "Hoodie-52", "124", "702", "hoodies-sweaters-6119.jpg"],
    ["6118", "7673514617", "Hoodie-51", "149", "612", "hoodies-sweaters-6118.jpg"],
    ["6117", "7673514617", "Hoodie-50", "149", "503", "hoodies-sweaters-6117.jpg"],
    ["6116", "7673514617", "Hoodie-49", "149", "857", "hoodies-sweaters-6116.jpg"],
  ],
  "t-shirts": [
    ["6187", "7678063505", "T-Shirts-60", "108", "539", "t-shirts-6187.jpg"],
    ["6186", "7678063505", "T-Shirts-59", "108", "857", "t-shirts-6186.jpg"],
    ["6185", "7678063505", "T-Shirts-58", "108", "686", "t-shirts-6185.jpg"],
    ["6184", "7678081287", "T-Shirts-57", "138", "892", "t-shirts-6184.jpg"],
    ["6183", "7678081287", "T-Shirts-56", "138", "858", "t-shirts-6183.jpg"],
    ["6182", "7678081287", "T-Shirts-55", "138", "549", "t-shirts-6182.jpg"],
    ["6181", "7683723404", "T-Shirts-54", "99", "568", "t-shirts-6181.jpg"],
    ["6180", "7683723404", "T-Shirts-53", "99", "622", "t-shirts-6180.jpg"],
    ["6179", "7683723404", "T-Shirts-52", "99", "574", "t-shirts-6179.jpg"],
    ["6178", "7683723404", "T-Shirts-51", "99", "694", "t-shirts-6178.jpg"],
    ["6177", "7680776941", "T-Shirts-50", "99", "568", "t-shirts-6177.jpg"],
    ["6176", "7680776941", "T-Shirts-49", "99", "818", "t-shirts-6176.jpg"],
  ],
  jackets: [
    ["6247", "7672835699", "Jackets-60", "289", "830", "jackets-6247.jpg"],
    ["6246", "7672835699", "Jackets-59", "289", "547", "jackets-6246.jpg"],
    ["6245", "7676922742", "Jackets-58", "159", "521", "jackets-6245.jpg"],
    ["6244", "7676922742", "Jackets-57", "159", "597", "jackets-6244.jpg"],
    ["6243", "7676922742", "Jackets-56", "159", "974", "jackets-6243.jpg"],
    ["6242", "7676922742", "Jackets-55", "159", "732", "jackets-6242.jpg"],
    ["6241", "7674027611", "Jackets-54", "128", "667", "jackets-6241.jpg"],
    ["6240", "7674027611", "Jackets-53", "128", "761", "jackets-6240.jpg"],
    ["6239", "7674027611", "Jackets-52", "128", "658", "jackets-6239.jpg"],
    ["6238", "7676995870", "Jackets-51", "126", "634", "jackets-6238.jpg"],
    ["6237", "7676995870", "Jackets-50", "126", "559", "jackets-6237.jpg"],
    ["6236", "7676995870", "Jackets-49", "126", "785", "jackets-6236.jpg"],
  ],
  "pants-shorts": [
    ["6307", "7671009113", "Pants/Shorts-60", "280", "766", "pants-shorts-6307.jpg"],
    ["6306", "7675719142", "Pants/Shorts-59", "78", "540", "pants-shorts-6306.jpg"],
    ["6305", "7676835194", "Pants/Shorts-58", "85", "876", "pants-shorts-6305.jpg"],
    ["6304", "7676835194", "Pants/Shorts-57", "85", "999", "pants-shorts-6304.jpg"],
    ["6303", "7673938753", "Pants/Shorts-56", "260", "578", "pants-shorts-6303.jpg"],
    ["6302", "7673938753", "Pants/Shorts-55", "260", "778", "pants-shorts-6302.jpg"],
    ["6301", "7673938753", "Pants/Shorts-54", "260", "855", "pants-shorts-6301.jpg"],
    ["6300", "7673938753", "Pants/Shorts-53", "260", "579", "pants-shorts-6300.jpg"],
    ["6299", "7681132386", "Pants/Shorts-52", "252", "518", "pants-shorts-6299.jpg"],
    ["6298", "7681132386", "Pants/Shorts-51", "252", "590", "pants-shorts-6298.jpg"],
    ["6297", "7681132386", "Pants/Shorts-50", "252", "615", "pants-shorts-6297.jpg"],
    ["6296", "7681075192", "Pants/Shorts-49", "142.2", "797", "pants-shorts-6296.jpg"],
  ],
  headwear: [
    ["6367", "7674005943", "Headwear-60", "146", "605", "headwear-6367.jpg"],
    ["6366", "7674005943", "Headwear-59", "146", "966", "headwear-6366.jpg"],
    ["6365", "7674005943", "Headwear-58", "146", "817", "headwear-6365.jpg"],
    ["6364", "7674005943", "Headwear-57", "146", "768", "headwear-6364.jpg"],
    ["6363", "7681094870", "Headwear-56", "182", "840", "headwear-6363.jpg"],
    ["6362", "7681094870", "Headwear-55", "182", "821", "headwear-6362.jpg"],
    ["6361", "7681094870", "Headwear-54", "182", "563", "headwear-6361.jpg"],
    ["6360", "7681094870", "Headwear-53", "182", "637", "headwear-6360.jpg"],
    ["6359", "7678081291", "Headwear-52", "126", "655", "headwear-6359.jpg"],
    ["6358", "7678081291", "Headwear-51", "126", "916", "headwear-6358.jpg"],
    ["6357", "7678081291", "Headwear-50", "126", "830", "headwear-6357.jpg"],
    ["6356", "7678081291", "Headwear-49", "126", "908", "headwear-6356.jpg"],
  ],
  accessories: [
    ["6427", "7628888202", "Accessories-60", "368", "860", "accessories-6427.jpg"],
    ["6426", "7628888202", "Accessories-59", "368", "507", "accessories-6426.jpg"],
    ["6425", "7628888202", "Accessories-58", "368", "681", "accessories-6425.jpg"],
    ["6424", "7625968235", "Accessories-57", "128", "757", "accessories-6424.jpg"],
    ["6423", "7625968235", "Accessories-56", "128", "741", "accessories-6423.jpg"],
    ["6422", "7625968235", "Accessories-55", "128", "692", "accessories-6422.jpg"],
    ["6421", "7627756733", "Accessories-54", "385", "527", "accessories-6421.jpg"],
    ["6420", "7627756733", "Accessories-53", "385", "780", "accessories-6420.jpg"],
    ["6419", "7627756733", "Accessories-52", "385", "858", "accessories-6419.jpg"],
    ["6418", "7631559938", "Accessories-51", "121.55", "719", "accessories-6418.jpg"],
    ["6417", "7631559938", "Accessories-50", "121.55", "669", "accessories-6417.jpg"],
    ["6416", "7631559938", "Accessories-49", "121.55", "978", "accessories-6416.jpg"],
  ],
  jersey: [
    ["6667", "7632511460", "Jersey-60", "99", "545", "jersey-6667.jpg"],
    ["6666", "7632511460", "Jersey-59", "99", "847", "jersey-6666.jpg"],
    ["6665", "7632511460", "Jersey-58", "99", "759", "jersey-6665.jpg"],
    ["6664", "7632511460", "Jersey-57", "99", "602", "jersey-6664.jpg"],
    ["6663", "7632591132", "Jersey-56", "180", "811", "jersey-6663.jpg"],
    ["6662", "7632591132", "Jersey-55", "180", "908", "jersey-6662.jpg"],
    ["6661", "7632591132", "Jersey-54", "180", "781", "jersey-6661.jpg"],
    ["6660", "7632591132", "Jersey-53", "180", "520", "jersey-6660.jpg"],
    ["6659", "7632181829", "Jersey-52", "109", "832", "jersey-6659.jpg"],
    ["6658", "7632181829", "Jersey-51", "109", "700", "jersey-6658.jpg"],
    ["6657", "7632181829", "Jersey-50", "109", "555", "jersey-6657.jpg"],
    ["6656", "7635179648", "Jersey-49", "84", "670", "jersey-6656.jpg"],
  ],
  electronics: [
    ["6547", "7670019556", "Electronics-60", "139", "960", "electronics-6547.jpg"],
    ["6546", "7670019556", "Electronics-59", "139", "686", "electronics-6546.jpg"],
    ["6545", "7670019556", "Electronics-58", "139", "658", "electronics-6545.jpg"],
    ["6544", "7675242652", "Electronics-57", "180", "513", "electronics-6544.jpg"],
    ["6543", "7675242652", "Electronics-56", "180", "975", "electronics-6543.jpg"],
    ["6542", "7675242652", "Electronics-55", "180", "836", "electronics-6542.jpg"],
    ["6541", "7675242652", "Electronics-54", "180", "718", "electronics-6541.jpg"],
    ["6540", "7675605992", "Electronics-53", "75", "864", "electronics-6540.jpg"],
    ["6539", "7675605992", "Electronics-52", "75", "680", "electronics-6539.jpg"],
    ["6538", "7675605992", "Electronics-51", "75", "981", "electronics-6538.jpg"],
    ["6537", "7675673962", "Electronics-50", "220", "833", "electronics-6537.jpg"],
    ["6536", "7675673962", "Electronics-49", "220", "764", "electronics-6536.jpg"],
  ],
};

export const products = Array.from({ length: 12 }, (_, rowIndex) =>
  categories.map(({ slug }) => {
    const [id, sourceId, name, price, views, image] = PRODUCT_ROWS[slug][rowIndex];
    return {
      id,
      sourceId,
      name,
      category: slug,
      price,
      views,
      image: `/products/catalog-current/${image}`,
      href: `${MAIN_SITE}/AllProducts/${id}.html`,
      note: PRODUCT_NOTES[slug],
      reviewedAt: CATALOG_REVIEWED,
    };
  }),
).flat();

for (const { slug } of categories) {
  const categoryCount = products.filter((product) => product.category === slug).length;
  if (categoryCount < 8 || categoryCount > 12) {
    throw new Error(`Product category ${slug} must contain 8–12 products; found ${categoryCount}.`);
  }
}

for (const field of ["id", "href", "image"]) {
  const values = products.map((product) => product[field]);
  if (new Set(values).size !== values.length) {
    throw new Error(`Product catalog contains a duplicate ${field}.`);
  }
}

export const faqs = [
  {
    question: "Does FindQCS sell products?",
    answer: "No. FindQCS is an independent product-discovery and QC education website. Product pages and purchase actions open the source catalog on cnfanssp.com, where availability and current details should be confirmed.",
  },
  {
    question: "Are the displayed images a guarantee of product quality?",
    answer: "No. Images are reference material, not a guarantee. Check the listing details and any warehouse or inspection images made available for your own order before approving international shipment.",
  },
  {
    question: "What can I search for?",
    answer: "You can search this site's mapped categories and product shortlist by a word such as shoes, hoodie or cap, or enter a known product ID. Matching results keep their exact source-page links instead of sending every query to a generic all-products page.",
  },
  {
    question: "Why should I check QC images before shipping?",
    answer: "A careful image review can help you spot visible issues such as an incorrect colour, obvious damage, missing parts or a measurement mismatch while the parcel is still at the warehouse. It cannot verify every material or performance detail.",
  },
];

export { articles } from "./articles.js";
