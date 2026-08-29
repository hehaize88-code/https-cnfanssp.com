import fs from "node:fs";
import path from "node:path";

const projectRoot = process.env.SITES_PROJECT_ROOT || path.resolve(import.meta.dirname, "..");
const translationPath = path.join(projectRoot, "app/full-content-translations.generated.json");
const content = JSON.parse(fs.readFileSync(translationPath, "utf8"));
const locales = ["zh", "de", "pl", "es", "it", "fr", "pt", "ro", "sv"];
const english = content.en;

function fail(message) {
  throw new Error(`Translation completeness check failed: ${message}`);
}

function requireText(value, location) {
  if (typeof value !== "string" || !value.trim()) fail(`${location} is empty`);
}

for (const locale of locales) {
  const translated = content[locale];
  if (!translated) fail(`${locale} dataset is missing`);

  for (const [slug, sourceArticle] of Object.entries(english.articles)) {
    const article = translated.articles[slug];
    if (!article) fail(`${locale} article ${slug} is missing`);
    if (article.sections.length !== sourceArticle.sections.length) fail(`${locale} article ${slug} has ${article.sections.length} sections; expected ${sourceArticle.sections.length}`);
    if (article.sources.length !== sourceArticle.sources.length) fail(`${locale} article ${slug} has ${article.sources.length} sources; expected ${sourceArticle.sources.length}`);
    requireText(article.title, `${locale}.${slug}.title`);
    requireText(article.description, `${locale}.${slug}.description`);

    article.sections.forEach(([title, body], index) => {
      requireText(title, `${locale}.${slug}.sections[${index}].title`);
      requireText(body, `${locale}.${slug}.sections[${index}].body`);
      const sourceLength = sourceArticle.sections[index][1].replace(/\s+/g, "").length;
      const translatedLength = body.replace(/\s+/g, "").length;
      const minimumRatio = locale === "zh" ? 0.30 : 0.58;
      if (translatedLength < sourceLength * minimumRatio) fail(`${locale}.${slug}.sections[${index}] is unexpectedly short`);
    });
  }

  for (const [section, sourcePage] of Object.entries(english.pageContent)) {
    const page = translated.pageContent[section];
    if (!page) fail(`${locale} page ${section} is missing`);
    if (page.blocks.length !== sourcePage.blocks.length) fail(`${locale} page ${section} has ${page.blocks.length} blocks; expected ${sourcePage.blocks.length}`);
    requireText(page.kicker, `${locale}.${section}.kicker`);
    requireText(page.title, `${locale}.${section}.title`);
    requireText(page.intro, `${locale}.${section}.intro`);

    page.blocks.forEach((block, index) => {
      const sourceBullets = sourcePage.blocks[index].bullets || [];
      const translatedBullets = block.bullets || [];
      if (translatedBullets.length !== sourceBullets.length) fail(`${locale}.${section}.blocks[${index}] has ${translatedBullets.length} bullets; expected ${sourceBullets.length}`);
      requireText(block.title, `${locale}.${section}.blocks[${index}].title`);
      requireText(block.text, `${locale}.${section}.blocks[${index}].text`);
      translatedBullets.forEach((item, bulletIndex) => requireText(item, `${locale}.${section}.blocks[${index}].bullets[${bulletIndex}]`));
    });
  }
}

console.log(`Translation completeness verified for ${locales.length} languages, ${Object.keys(english.articles).length} articles and ${Object.keys(english.pageContent).length} functional pages.`);
