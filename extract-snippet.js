import fs from 'fs';
import path from 'path';
import extractByTags from './extract-by-tags.js';

export function extractByTags0(content, allowedTags, delimiter = '') {
  const lines = content.split('\n');
  const tagSet = new Set(allowedTags);

  const startRegex = /^(\s*)\/\/\s*docs:start\s+(.+)$/;
  const endRegex = /^\s*\/\/\s*docs:end\s+(.+)$/;
  const inlineRegex = /\/\/\s*docs:\s*(\S+)\s*$/;

  let active = null;
  let indent = '';
  let result = [];
  let hasStartedOutput = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // -------------------------
    // INLINE TAG (single line)
    // -------------------------
    const inlineMatch = line.match(inlineRegex);
if (inlineMatch) {
  const tag = inlineMatch[1];

  if (tagSet.has(tag)) {
    if (hasStartedOutput) {
      result.push(delimiter);
    }

    // capture indentation
    const indentMatch = line.match(/^(\s*)/);
    const inlineIndent = indentMatch ? indentMatch[1] : '';

    // remove trailing docs comment
    let cleaned = line.replace(/\s*\/\/\s*docs:\s*\S+\s*$/, '');

    // normalize indentation (same idea as block mode)
    if (cleaned.startsWith(inlineIndent)) {
      cleaned = cleaned.slice(inlineIndent.length);
    }

    result.push(cleaned.trimEnd());

    hasStartedOutput = true;
  }

  continue;
}

    // -------------------------
    // BLOCK START
    // -------------------------
    const startMatch = line.match(startRegex);
    if (startMatch) {
      const tag = startMatch[2];

      if (tagSet.has(tag)) {
        if (hasStartedOutput) {
          result.push(delimiter);
        }

        active = tag;
        indent = startMatch[1];
        hasStartedOutput = true;
      }

      continue;
    }

    // -------------------------
    // BLOCK END
    // -------------------------
    const endMatch = line.match(endRegex);
    if (endMatch) {
      const tag = endMatch[1];
      if (active === tag) active = null;
      continue;
    }

    // -------------------------
    // COLLECT BLOCK CONTENT
    // -------------------------
    if (active) {
      result.push(
        line.startsWith(indent) ? line.slice(indent.length) : line
      );
    }
  }

  return result.join('\n').trim();
}

export function extractSnippetFromFile(filePath, tags, outFile) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const snippet = extractByTags(content, tags);

  if (!snippet) {
    console.error(`Tag "${tag}" not found in ${filePath}`);
    return;
  }

  const outputPath =
    outFile ||
    path.join(
      path.dirname(filePath),
      `${path.basename(filePath, '.java')}__${tag}.txt`
    );

  fs.writeFileSync(outputPath, snippet, 'utf-8');

  console.log(`Created: ${outputPath}`);
}

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