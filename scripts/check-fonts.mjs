import { existsSync } from 'node:fs';
import { join } from 'node:path';

const requiredFonts = [
  'public/fonts/syncopate/Syncopate-Regular.woff2',
  'public/fonts/syncopate/Syncopate-Bold.woff2',
  'public/fonts/satoshi/Satoshi-Light.woff2',
  'public/fonts/satoshi/Satoshi-Regular.woff2',
  'public/fonts/satoshi/Satoshi-Medium.woff2',
  'public/fonts/satoshi/Satoshi-Bold.woff2',
  'public/fonts/jetbrains-mono/JetBrainsMono-Regular.woff2',
  'public/fonts/jetbrains-mono/JetBrainsMono-Bold.woff2',
];

const missing = requiredFonts.filter((file) => !existsSync(join(process.cwd(), file)));

if (missing.length) {
  console.error('Missing local WOFF2 font files:');
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

console.log('All local font files are present.');
