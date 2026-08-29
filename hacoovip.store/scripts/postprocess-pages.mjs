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

    const html = await readFile(absolutePath, "utf8");
    const withoutPreviewMeta = html
      .replace(/<meta name="codex-preview" content="development"\s*\/?>(?:<\/meta>)?/g, "")
      .replace(/\[\\"\$\\",\\"meta\\",\\"\d+\\",\{\\"name\\":\\"codex-preview\\",\\"content\\":\\"development\\"\}\],?/g, "");
    const relativePath = path.relative(outputDirectory, absolutePath);
    const firstSegment = relativePath.split(path.sep)[0].replace(/\.html$/, "");
    const finalHtml = localizedPrefixes.has(firstSegment)
      ? withoutPreviewMeta.replace('<html lang="en">', `<html lang="${firstSegment}">`)
      : withoutPreviewMeta;
    if (finalHtml !== html) await writeFile(absolutePath, finalHtml);
  }
}

await visit(outputDirectory);
