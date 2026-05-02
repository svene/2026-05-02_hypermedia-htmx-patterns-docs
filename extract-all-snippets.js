import { processSnippet } from './extract-snippet.js';

const snippetToCodeBlock = optionString => (snippet) => {
    return `
\`\`\`${optionString}
${snippet}
\`\`\`
`;
  }

function main() {
  const srcRoot = '../../2025/2025-08-23_ssfe-patterns-jte-vc-htmx';
  const outRoot = 'src/snippets';

  const name = 'PlainJTEController';
  processSnippet(
  `${srcRoot}/src/main/java/org/svenehrke/demo/web/p01plainjte/${name}.java`,
  'page01',
  snippetToCodeBlock(`java title="${name}.java"`),
  `${outRoot}/${name}_page01.mdx`
);
}

main();
