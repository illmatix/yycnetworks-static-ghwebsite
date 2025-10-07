#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import url from 'url';

// Load .env if present for local builds; in CI, process.env comes from secrets
try {
  const dotenv = await import('dotenv');
  dotenv.config();
} catch (e) {
  // dotenv not installed or not needed; ignore
}

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const files = [
  path.join(root, 'public', 'index.html'),
  path.join(root, 'public', 'contact.html'),
  path.join(root, 'public', 'privacy.html'),
  path.join(root, 'public', 'terms.html')
];

const values = {
  SITE_URL: process.env.SITE_URL,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  FORMSPREE_ID: process.env.FORMSPREE_ID,
};

let changedCount = 0;

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let contents = fs.readFileSync(file, 'utf8');
  let before = contents;

  // Replace tokens only if value is provided
  for (const [key, val] of Object.entries(values)) {
    if (!val) continue;
    const token = new RegExp('%' + key + '%', 'g');
    contents = contents.replace(token, val);
  }

  if (contents !== before) {
    fs.writeFileSync(file, contents, 'utf8');
    changedCount++;
  }
}

console.log(`[inject-env] Updated ${changedCount} file(s).`);
