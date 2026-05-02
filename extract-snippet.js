import fs from 'fs';
import extractByTags from './extract-by-tags.js';

export function writeSnippet(outputPath, content) {
  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`Created: ${outputPath}`);
}

export function processSnippet(filePath, tagConfig, transformFn, outFile, delimiter) {
  const content = fs.readFileSync(filePath, 'utf-8');

  const snippet = extractByTags(content, tagConfig, delimiter);

  if (!snippet) {
    console.error(`Could not create snippet for ${filePath}`);
    return;
  }

  // 👇 callback transformation step
  const transformed = transformFn(snippet);

  if (!outFile) {
    throw new Error('outFile must be provided');
  }

  writeSnippet(outFile, transformed);
}