export default function extractByTags(content, allowedTags, delimiter = '...') {
  const lines = content.split('\n');
  const tagSet = new Set(allowedTags);

  const startRegex = /^(\s*)\/\/\s*docs:start\s+(.+)$/;
  const endRegex = /^\s*\/\/\s*docs:end\s+(.+)$/;
  const inlineRegex = /\/\/\s*docs:\s*(\S+)\s*$/;

  let blocks = []; // collect blocks first
  let active = null;
  let baseIndent = '';
  let currentBlock = null;

  // -------------------------
  // PASS 1: collect blocks
  // -------------------------
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // INLINE
    const inlineMatch = line.match(inlineRegex);
    if (inlineMatch) {
      const tag = inlineMatch[1];

      if (tagSet.has(tag)) {
        const indentMatch = line.match(/^(\s*)/);
        const indent = indentMatch ? indentMatch[1] : '';

        let cleaned = line.replace(/\s*\/\/\s*docs:\s*\S+\s*$/, '');

        blocks.push({
          indent,
          lines: [cleaned],
        });
      }
      continue;
    }

    // START
    const startMatch = line.match(startRegex);
    if (startMatch) {
      const tag = startMatch[2];

      if (tagSet.has(tag)) {
        active = tag;
        baseIndent = startMatch[1];
        currentBlock = {
          indent: baseIndent,
          lines: [],
        };
      }
      continue;
    }

    // END
    const endMatch = line.match(endRegex);
    if (endMatch) {
      const tag = endMatch[1];

      if (active === tag && currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
        active = null;
      }
      continue;
    }

    // COLLECT
    if (active && currentBlock) {
      let cleaned = line;

      if (cleaned.startsWith(baseIndent)) {
        cleaned = cleaned.slice(baseIndent.length);
      }

      currentBlock.lines.push(cleaned);
    }
  }

  if (blocks.length === 0) return '';

  // -------------------------
  // PASS 2: find minimum indent
  // -------------------------
  const minIndentLength = Math.min(
    ...blocks.map(b => b.indent.length)
  );

  // -------------------------
  // PASS 3: build result
  // -------------------------
  const result = [];

  blocks.forEach((block, index) => {
    if (index > 0) {
      result.push(delimiter);
    }

    const relativeIndent = block.indent.slice(minIndentLength);

    for (let line of block.lines) {
      result.push(relativeIndent + line);
    }
  });

  return result.join('\n').trim();
}