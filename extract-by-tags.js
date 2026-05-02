export default function extractByTags(content, tagConfig, delimiter = '...') {
  const lines = content.split('\n');

  const tagSet = new Set(Object.keys(tagConfig));

  const startRegex = /^(\s*)\/\/\s*docs:start\s+(.+)$/;
  const endRegex = /^\s*\/\/\s*docs:end\s+(.+)$/;
  const inlineRegex = /\/\/\s*docs:\s*(\S+)\s*$/;

  let active = null;
  let baseIndent = '';
  let result = [];
  let hasStartedOutput = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // -------------------------
    // INLINE TAG
    // -------------------------
    const inlineMatch = line.match(inlineRegex);
    if (inlineMatch) {
      const tag = inlineMatch[1];

      if (tagSet.has(tag)) {
        if (hasStartedOutput) {
          result.push(delimiter);
        }

        const indentMatch = line.match(/^(\s*)/);
        const inlineIndent = indentMatch ? indentMatch[1] : '';

        let cleaned = line.replace(/\s*\/\/\s*docs:\s*\S+\s*$/, '');

        if (cleaned.startsWith(inlineIndent)) {
          cleaned = cleaned.slice(inlineIndent.length);
        }

        const finalLine = tagConfig[tag] + cleaned.trimEnd();

        result.push(finalLine);
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
        baseIndent = startMatch[1];
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
      let cleaned = line;

      if (cleaned.startsWith(baseIndent)) {
        cleaned = cleaned.slice(baseIndent.length);
      }

      const finalLine = tagConfig[active] + cleaned;

      result.push(finalLine);
    }
  }

  return result.join('\n').trim();
}