import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join, relative, sep } from "node:path";

const root = new URL("../out/", import.meta.url);
const supported = new Set(["de", "es", "fr", "it"]);

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (extname(entry.name) === ".html") {
      const parts = relative(root.pathname, path).split(sep);
      const language = supported.has(parts[0]) ? parts[0] : "en";
      const source = await readFile(path, "utf8");
      await writeFile(path, source.replace('<html lang="en"', `<html lang="${language}"`));
    }
  }
}

await walk(root.pathname);
