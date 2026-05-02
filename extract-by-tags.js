export default function extractByTags(content, options) {
    const {
        allowedTags,
        delimiter = '...'
    } = options;

    const lines = content.split('\n');
    const tagSet = new Set(allowedTags);

    let blocks = [];
    let active = null;
    let baseIndent = '';
    let currentBlock = null;

    for (let line of lines) {
        const trimmed = line.trim();

        let matched = false;

        for (const tag of tagSet) {

            // -------- START --------
            if (trimmed.includes(`docs:start ${tag}`)) {
                active = tag;
                baseIndent = getIndent(line);
                currentBlock = {
                    indent: baseIndent,
                    lines: []
                };
                matched = true;
                break;
            }

            // -------- END --------
            if (trimmed.includes(`docs:end ${tag}`)) {
                if (active === tag && currentBlock) {
                    blocks.push(currentBlock);
                    currentBlock = null;
                    active = null;
                }
                matched = true;
                break;
            }

            // -------- INLINE --------
            if (
                trimmed.includes(`docs: ${tag}`) &&
                !trimmed.includes('docs:start') &&
                !trimmed.includes('docs:end')
            ) {
                const indent = active ? baseIndent : '';
                const cleaned = removeInlineComment(line);

                blocks.push({
                    indent,
                    lines: [cleaned.trimStart()]
                });

                matched = true;
                break;
            }
        }

        // 🚨 CRITICAL: skip further processing
        if (matched) continue;

        // -------- CONTENT --------
        if (active && currentBlock) {
            let cleaned = line;

            if (cleaned.startsWith(baseIndent)) {
                cleaned = cleaned.slice(baseIndent.length);
            }

            currentBlock.lines.push(cleaned);
        }
    }

    if (blocks.length === 0) return '';

    // ---------------- NORMALIZE INDENT ----------------
    const minIndent = Math.min(...blocks.map(b => b.indent.length));

    const result = [];

    blocks.forEach((block, index) => {
        if (index > 0) {
            result.push(delimiter);
        }

        const relativeIndent = block.indent.slice(minIndent);

        for (const line of block.lines) {
            result.push(relativeIndent + line);
        }
    });

    return result.join('\n').trim();
}

function getIndent(line) {
    return line.slice(0, line.length - line.trimStart().length);
}

function removeInlineComment(line) {
    const docsIdx = line.indexOf('docs:');
    if (docsIdx === -1) return line.trimEnd();

    // find nearest comment start BEFORE docs:
    const before = line.slice(0, docsIdx);

    const slashIdx = before.lastIndexOf('//');
    const htmlIdx = before.lastIndexOf('<!--');

    let cutIdx = -1;

    if (slashIdx !== -1 && htmlIdx !== -1) {
        cutIdx = Math.max(slashIdx, htmlIdx);
    } else {
        cutIdx = slashIdx !== -1 ? slashIdx : htmlIdx;
    }

    // fallback: if nothing found, cut at docsIdx
    if (cutIdx === -1) cutIdx = docsIdx;

    return line.slice(0, cutIdx).trimEnd();
}
