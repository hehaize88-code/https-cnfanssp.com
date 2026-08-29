import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const localizedPrefixes = new Set(["de", "es", "fr", "it"]);

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await visit(absolutePath);
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith(".html")) continue;

    const relativePath = path.relative(outputDirectory, absolutePath);
    const firstSegment = relativePath.split(path.sep)[0].replace(/\.html$/, "");
    if (!localizedPrefixes.has(firstSegment)) continue;

    const html = await readFile(absolutePath, "utf8");
    const localizedHtml = html.replace('<html lang="en">', `<html lang="${firstSegment}">`);
    if (localizedHtml !== html) await writeFile(absolutePath, localizedHtml);
  }
}

await visit(outputDirectory);
