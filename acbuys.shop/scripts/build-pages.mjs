import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const isPages = ['1', 'true'].includes(process.env.CF_PAGES);
// Pages publishes the complete committed export. Do not regenerate only English
// or require Python/application dependencies in a static deployment environment.
const command = isPages ? process.execPath : 'npm';
const args = isPages ? ['scripts/verify-static-export.mjs'] : ['run', 'rebuild:pages'];
const result = spawnSync(command, args, { cwd: root, stdio: 'inherit' });
if (result.error) throw result.error;
process.exit(result.status ?? 1);
