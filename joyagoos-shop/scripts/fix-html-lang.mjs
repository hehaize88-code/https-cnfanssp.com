import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = fileURLToPath(new URL("../out/", import.meta.url));
const languages = ["en", "de", "es", "fr", "it"];

async function updateHtmlFiles(directory, language) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await updateHtmlFiles(path, language);
      continue;
    }
    if (!entry.name.endsWith(".html")) continue;
    const html = await readFile(path, "utf8");
    const localized = html.replace('<html lang="en">', `<html lang="${language}">`);
    if (localized !== html) await writeFile(path, localized);
  }
}

for (const language of languages) {
  await updateHtmlFiles(join(outputDirectory, language), language);
}
