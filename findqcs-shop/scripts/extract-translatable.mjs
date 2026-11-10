import fs from "node:fs";
import path from "node:path";
import { parse } from "@babel/parser";

const root = path.resolve(process.cwd(), "app");
const output = process.argv[2] || "/tmp/findqc-english-strings.json";
const strings = new Set();
const allowedAttributes = new Set(["alt", "aria-label", "placeholder", "title", "description", "eyebrow"]);

function normalize(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&nbsp;", " ")
    .replace(/\s+/g, " ")
    .trim();
}

function add(value) {
  if (typeof value !== "string") return;
  const text = normalize(value);
  if (text.length < 2 || !/[A-Za-z]/.test(text)) return;
  if (/^(https?:|mailto:|\/|\.\/|\.\.\/|#[A-Za-z0-9_-])/.test(text)) return;
  strings.add(text);
}

function walk(node, parent = null) {
  if (!node || typeof node !== "object") return;
  if (node.type === "JSXText") add(node.value);
  if (node.type === "JSXAttribute") {
    const name = node.name?.name;
    if (allowedAttributes.has(name) && node.value?.type === "StringLiteral") add(node.value.value);
  }
  if (node.type === "StringLiteral") {
    const skip = parent?.type === "ImportDeclaration"
      || parent?.type === "ExportAllDeclaration"
      || parent?.type === "ExportNamedDeclaration"
      || (parent?.type === "JSXAttribute")
      || (parent?.type === "ObjectProperty" && parent.key === node)
      || parent?.type?.startsWith("TS");
    if (!skip) add(node.value);
  }
  if (node.type === "TemplateElement") add(node.value?.cooked || node.value?.raw || "");

  for (const [key, value] of Object.entries(node)) {
    if (["loc", "start", "end", "extra", "comments", "tokens"].includes(key)) continue;
    if (Array.isArray(value)) value.forEach((child) => walk(child, node));
    else if (value && typeof value === "object") walk(value, node);
  }
}

function filesIn(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return filesIn(target);
    return /\.(ts|tsx)$/.test(entry.name) && entry.name !== "language.tsx" ? [target] : [];
  });
}

for (const file of filesIn(root)) {
  const source = fs.readFileSync(file, "utf8");
  const ast = parse(source, { sourceType: "module", plugins: ["typescript", "jsx"] });
  walk(ast);
}

[
  "Reviewed", "Independent research", "Research boundary", "KEEP READING", "Related field guides",
  "Read", "Open listing", "Listing matched", "listed", "approx.", "source views",
].forEach(add);

fs.writeFileSync(output, `${JSON.stringify([...strings].sort((a, b) => a.localeCompare(b)), null, 2)}\n`);
console.log(`Extracted ${strings.size} translatable strings to ${output}`);
