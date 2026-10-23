import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

// Static export has one root layout. Write the route language into the initial
// HTML so search engines and assistive technology do not depend on JavaScript.
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith('.html')) {
      const locale = relative('out', file).split('/')[0];
      const lang = ['es', 'fr', 'de', 'it'].includes(locale) ? locale : 'en';
      const html = await readFile(file, 'utf8');
      await writeFile(file, html.replace(/<html\b([^>]*?)lang="[^"]*"/, `<html$1lang="${lang}"`));
    }
  }
}
await walk('out');
console.log('Static HTML languages finalized.');
