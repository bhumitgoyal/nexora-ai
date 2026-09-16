import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

async function processImage(inputPath, outputPath, options = {}) {
  const { maxWidth = 1920, quality = 82, format = 'webp' } = options;
  const inputStat = fs.statSync(inputPath);
  
  let pipeline = sharp(inputPath);
  const metadata = await pipeline.metadata();

  if (metadata.width && metadata.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  if (format === 'webp') {
    pipeline = pipeline.webp({ quality, effort: 6 });
  } else if (format === 'png') {
    pipeline = pipeline.png({ compressionLevel: 9, adaptiveFiltering: true });
  }

  await pipeline.toFile(outputPath);
  const outputStat = fs.statSync(outputPath);
  
  const savedKB = (inputStat.size - outputStat.size) / 1024;
  const percent = ((1 - outputStat.size / inputStat.size) * 100).toFixed(1);
  
  console.log(
    `${path.relative(publicDir, inputPath)} -> ${path.relative(publicDir, outputPath)}: ` +
    `${(inputStat.size / 1024).toFixed(1)} KB -> ${(outputStat.size / 1024).toFixed(1)} KB ` +
    `(-${percent}%, saved ${savedKB.toFixed(1)} KB)`
  );

  return {
    originalSize: inputStat.size,
    newSize: outputStat.size,
  };
}

async function run() {
  console.log('--- Starting Image Optimization ---\n');
  let totalOriginal = 0;
  let totalOptimized = 0;

  // 1. bhumit.png
  const bhumitIn = path.join(publicDir, 'bhumit.png');
  const bhumitOut = path.join(publicDir, 'bhumit.webp');
  if (fs.existsSync(bhumitIn)) {
    const res = await processImage(bhumitIn, bhumitOut, { maxWidth: 800, quality: 84 });
    totalOriginal += res.originalSize;
    totalOptimized += res.newSize;
  }

  // 2. Workflows
  const workflowsDir = path.join(publicDir, 'workflows');
  if (fs.existsSync(workflowsDir)) {
    const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.png'));
    for (const f of workflowFiles) {
      const inPath = path.join(workflowsDir, f);
      const outPath = path.join(workflowsDir, f.replace(/\.png$/, '.webp'));
      const res = await processImage(inPath, outPath, { maxWidth: 1920, quality: 82 });
      totalOriginal += res.originalSize;
      totalOptimized += res.newSize;
    }
  }

  // 3. Demos
  const demosDir = path.join(publicDir, 'demos');
  if (fs.existsSync(demosDir)) {
    const demoFiles = fs.readdirSync(demosDir).filter(f => f.endsWith('.png'));
    for (const f of demoFiles) {
      const inPath = path.join(demosDir, f);
      const outPath = path.join(demosDir, f.replace(/\.png$/, '.webp'));
      const res = await processImage(inPath, outPath, { maxWidth: 1920, quality: 82 });
      totalOriginal += res.originalSize;
      totalOptimized += res.newSize;
    }
  }

  console.log('\n-----------------------------------');
  console.log(`Total original: ${(totalOriginal / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total optimized: ${(totalOptimized / (1024 * 1024)).toFixed(2)} MB`);
  console.log(
    `Total reduction: -${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}% ` +
    `(${( (totalOriginal - totalOptimized) / (1024 * 1024) ).toFixed(2)} MB saved)`
  );
}

run().catch(console.error);
