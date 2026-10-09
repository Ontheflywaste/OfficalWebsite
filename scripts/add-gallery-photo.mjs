#!/usr/bin/env node
/**
 * Resize a photo for the gallery and drop it into public/Images/gallery/.
 *
 *   npm run photo -- <source-file> <name>
 *   npm run photo -- ~/Downloads/IMG_1234.jpeg 2026-10-trade-show-booth
 *
 * Uses macOS `sips` (built in). Long edge becomes 2000px, JPEG quality 80.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';

const [src, name] = process.argv.slice(2);
const usage = 'Usage: npm run photo -- <source-file> <year-month-short-description>';

if (!src || !name) {
  console.error(usage);
  process.exit(1);
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) {
  console.error(`Name must be lowercase letters, numbers, and hyphens only (got "${name}").\n${usage}`);
  process.exit(1);
}
const source = resolve(src.replace(/^~/, process.env.HOME ?? ''));
if (!existsSync(source)) {
  console.error(`Source file not found: ${source}`);
  process.exit(1);
}
const outDir = resolve('public/Images/gallery');
const out = join(outDir, `${name}.jpg`);
if (existsSync(out)) {
  console.error(`A gallery photo named ${name}.jpg already exists. Pick a different name.`);
  process.exit(1);
}

try {
  const srcDims = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', source]).toString().match(/\d+/g).slice(-2).map(Number);
  const longEdge = Math.max(...srcDims);
  // Only shrink. Never upsample a small photo to 2000px.
  const resize = longEdge > 2000 ? ['-Z', '2000'] : [];
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '80', ...resize, source, '--out', out], { stdio: 'ignore' });
} catch {
  console.error('Could not run `sips`. This helper expects macOS. On another OS, resize to 2000px long edge as JPEG and save to public/Images/gallery/ by hand.');
  process.exit(1);
}

const kb = Math.round(statSync(out).size / 1024);
const dims = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', out]).toString().match(/\d+/g).slice(-2).join('x');

console.log(`\nSaved public/Images/gallery/${name}.jpg (${dims}, ${kb} KB)\n`);
console.log('Paste this at the top of GALLERY_PHOTOS in app/gallery/photos.ts and fill in the text:\n');
console.log(`  {
    src: '/Images/gallery/${name}.jpg',
    alt: 'DESCRIBE THE PHOTO FOR SOMEONE WHO CANNOT SEE IT',
    caption: 'WHAT VISITORS READ UNDER THE TILE',
    category: 'on-the-job', // 'on-the-job' | 'events' | 'our-team'
  },\n`);
