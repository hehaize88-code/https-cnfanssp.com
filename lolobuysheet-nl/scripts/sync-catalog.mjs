import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import * as cheerio from 'cheerio';
execFileSync('python',['scripts/fetch-sources.py'],{stdio:'inherit'});
execFileSync('node',['scripts/parse-catalog.mjs'],{stdio:'inherit'});
execFileSync('python',['scripts/fetch-details.py'],{stdio:'inherit'});
await import('./finalize-catalog.mjs');
