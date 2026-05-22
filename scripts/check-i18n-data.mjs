import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const esPath = path.join(root, 'src/data/es.json');
const enPath = path.join(root, 'src/data/en.json');
const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const issues = [];

function typeOf(value) {
  if (Array.isArray(value)) return 'array';
  if (value === null) return 'null';
  return typeof value;
}

function compareShape(a, b, label) {
  const ta = typeOf(a);
  const tb = typeOf(b);
  if (ta !== tb) {
    issues.push(`${label}: type mismatch ${ta} !== ${tb}`);
    return;
  }

  if (ta === 'object') {
    const aKeys = Object.keys(a).sort();
    const bKeys = Object.keys(b).sort();
    for (const key of aKeys) {
      if (!(key in b)) issues.push(`${label}.${key}: missing in en.json`);
    }
    for (const key of bKeys) {
      if (!(key in a)) issues.push(`${label}.${key}: extra in en.json`);
    }
    for (const key of aKeys) {
      if (key in b) compareShape(a[key], b[key], `${label}.${key}`);
    }
  }

  if (ta === 'array') {
    if (a.length !== b.length) issues.push(`${label}: array length mismatch ${a.length} !== ${b.length}`);
    const max = Math.max(a.length, b.length);
    for (let i = 0; i < max; i += 1) {
      if (i in a && i in b) compareShape(a[i], b[i], `${label}[${i}]`);
    }
  }
}

compareShape(es, en, 'data');

if (issues.length) {
  console.error('i18n shape check failed:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log('i18n shape check passed: es.json and en.json have matching structures.');
