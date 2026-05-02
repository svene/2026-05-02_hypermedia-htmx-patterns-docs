import fs from 'fs';
import path from 'path';

function extractByTag(content, tag) {
  const lines = content.split('\n');

  let start = -1;
  let end = -1;
  let indent = '';

  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(\s*)\/\/\s*docs:start\s+(.+)$/);
    if (m && m[2] === tag) {
      start = i + 1;
      indent = m[1];
      break;
    }
  }

  for (let i = start; i < lines.length; i++) {
    const m = lines[i].match(/^\s*\/\/\s*docs:end\s+(.+)$/);
    if (m && m[1] === tag) {
      end = i;
      break;
    }
  }

  if (start === -1 || end === -1) return '';

  return lines
    .slice(start, end)
    .map(line => line.startsWith(indent) ? line.slice(indent.length) : line)
    .join('\n')
    .trim();
}

export function extractSnippetFromFile(filePath, tag, outFile) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const snippet = extractByTag(content, tag);

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

export function processSnippet(filePath, tag, transformFn, outFile) {
  const content = fs.readFileSync(filePath, 'utf-8');

  const snippet = extractByTag(content, tag);

  if (!snippet) {
    console.error(`Tag "${tag}" not found in ${filePath}`);
    return;
  }

  // 👇 callback transformation step
  const transformed = transformFn(snippet);

  if (!outFile) {
    throw new Error('outFile must be provided');
  }

  writeSnippet(outFile, transformed);
}