export default function extractByTags(content, options) {
    const {
        allowedTags,
        delimiter = '...'
    } = options;

    // replace all leading tabs with spaces for indent determination later:
    const lines = content.split('\n')
        .map(line => line.replace(/^[\t ]+/, (match) => match.replace(/\t/g, "  ")))
        ;
    const tagSet = new Set(allowedTags);

    let blocks = [];
    let active = null;
    let currentBlock = null;



    for (let line of lines) {
        const trimmed = line.trim();
        let matched = false;

        for (const tag of tagSet) {

            // -------- START --------
            const marker = `docs:start ${tag}`;
            if (line.includes(marker)) {
                active = tag;
                currentBlock = { lines: [] };

                if (trimmed !== marker) {
                    const nl = removeInlineComment(line);
                    if (nl.trim().length > 0) {
                        console.log(`Including line with start marker for tag "${tag}": '${nl}'`);
                        currentBlock.lines.push(nl);
                    }
                }

                matched = true;
                break;
            }
            // -------- END --------
            const endMarker = `docs:end ${tag}`;
            if (line.includes(endMarker)) {
                if (active === tag && currentBlock) {
                    if (trimmed !== marker) {
                        const nl = removeInlineComment(line);
                        if (nl.trim().length > 0) {
                            currentBlock.lines.push(nl);
                        }
                    }

                    blocks.push(currentBlock);
                    currentBlock = null;
                    active = null;
                }
                matched = true;
                break;
            }

            // -------- INLINE --------
            if (line.includes(`docs: ${tag}`) && !line.includes('docs:start') && !line.includes('docs:end')) {
                const cleaned = removeInlineComment(line);
                blocks.push({
                    lines: [cleaned]
                });

                matched = true;
                break;
            }
        }

        if (matched) continue;

        // -------- CONTENT --------
        if (active && currentBlock) {
            currentBlock.lines.push(line);
        }
    }

    if (blocks.length === 0) return '';

    const allLines = blocks.flatMap(block => block.lines || []);
    const minLeadingSpaces = Math.min(
        ...allLines
            .filter(line => line.trim().length > 0) // ignore empty/whitespace-only lines
            .map(line => {
                const match = line.match(/^ */); // match leading spaces
                return match ? match[0].length : 0;
            })
    );
    const indent = " ".repeat(minLeadingSpaces);

    const normalizedBlocks = normalizeIndent(blocks, minLeadingSpaces);

    const result = [];

    normalizedBlocks.forEach((block, index) => {
        if (index > 0 && delimiter) {
            result.push('<BR>' === delimiter ? '' : delimiter);
        }
        block.lines.forEach(line => {
            result.push(line);
        });
    });

    return result.join('\n').trim();
}

function normalizeIndent(blocks, minLeadingSpaces) {
  if (minLeadingSpaces === 0) {
    return blocks; // nothing to do
  }

  const pattern = new RegExp(`^ {0,${minLeadingSpaces}}`);

  return blocks.map(block => ({
    ...block,
    lines: block.lines.map(line =>
      line.replace(pattern, "")
    )
  }));
}


function removeInlineComment(line) {
    const docsIdx = line.indexOf('docs:');
    if (docsIdx === -1) return line.trimEnd();

    const before = line.slice(0, docsIdx);

    const slashIdx = before.lastIndexOf('//');
    const htmlIdx = before.lastIndexOf('<!--');

    let cutIdx = -1;

    if (slashIdx !== -1 && htmlIdx !== -1) {
        cutIdx = Math.max(slashIdx, htmlIdx);
    } else {
        cutIdx = slashIdx !== -1 ? slashIdx : htmlIdx;
    }

    if (cutIdx === -1) cutIdx = docsIdx;

    return line.slice(0, cutIdx).trimEnd();
}