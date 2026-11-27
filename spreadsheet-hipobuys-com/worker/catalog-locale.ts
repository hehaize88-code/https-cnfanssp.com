import catalogTerms from "./catalog-terms.json";

const alternatives: Record<string, string> = {
  tee: "T-shirt", tees: "T-shirts", tshirt: "T-shirt", tshirts: "T-shirts",
  chaleco: "Vest", pantalones: "Pants", chaqueta: "Jacket", cazadora: "Jacket",
  camiseta: "T-shirt", guantes: "Gloves", zapatos: "Shoes", zapatillas: "Sneakers",
  mochila: "Backpack", sudadera: "Sweatshirt", conjunto: "Set", vaqueros: "Jeans",
  downjacket: "Down jacket", jacke: "Jacket", gorro: "Beanie",
};
const protectedNames = [
  "The North Face", "Purple Brand", "Off-White", "Off White", "White Mountaineering",
  "Moose Knuckles", "Palm Angels", "New Balance", "Stone Island", "Golden Goose",
  "Chrome Hearts", "Prada Sport", "Polo Ralph Lauren", "Ralph Lauren Polo",
  "Nike Air", "Air Jordan", "Jordan Brand", "Black Cat", "Pink Panther",
  "Blue Label", "Blue Ribbon Sports", "Canada Goose", "Under Armour",
  "Comme des Garçons", "True Religion", "A Bathing Ape", "Fear of God",
  "On Running", "Sporty & Rich", "Acne Studios", "Human Made",
];
const terms = new Map(catalogTerms.keys.map((key, index) => [key.toLowerCase(), index]));
for (const [alias, key] of Object.entries(alternatives)) {
  const index = terms.get(key.toLowerCase());
  if (index !== undefined) terms.set(alias, index);
}
const locales: Record<string, string[]> = catalogTerms.locales;
const reserved = new Set(protectedNames.map(name => name.toLowerCase()));
const escape = (word: string) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const pattern = new RegExp("\\b(?:" + [...reserved, ...terms.keys()].sort((a,b)=>b.length-a.length)
  .map(escape).join("|") + ")\\b", "gi");

export function localizedCatalogTitle(original: string, lang: string): string {
  const values = Object.hasOwn(locales, lang) ? locales[lang] : undefined;
  if (!values) return original;
  return original.replace(pattern, token => {
    const key = token.toLowerCase();
    const index = terms.get(key);
    if (reserved.has(key) || index === undefined) return token;
    return values[index] || token;
  });
}
