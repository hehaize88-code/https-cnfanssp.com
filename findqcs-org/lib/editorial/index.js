import { makeGuide } from './shared.js';
import { deEditorial } from './de.js';
import { esEditorial } from './es.js';
import { plEditorial } from './pl.js';
import { roEditorial } from './ro.js';
export const editorialLocales = Object.fromEntries(Object.entries({de:deEditorial,es:esEditorial,pl:plEditorial,ro:roEditorial})
  .map(([language, content])=>[language,Object.fromEntries(Object.entries(content).map(([slug, guide])=>[slug,makeGuide(slug,language,guide)]))]));
