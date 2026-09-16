import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '..', 'src', 'content', 'caseStudies.ts');

let content = fs.readFileSync(filePath, 'utf8');

// Replace /workflows/*.png with /workflows/*.webp
content = content.replace(/\/workflows\/([a-zA-Z0-9_-]+)\.png/g, '/workflows/$1.webp');

// Replace /demos/*.png with /demos/*.webp
content = content.replace(/\/demos\/([a-zA-Z0-9_-]+)\.png/g, '/demos/$1.webp');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated image paths in src/content/caseStudies.ts');
