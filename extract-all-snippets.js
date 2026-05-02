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

  let name = 'PlainJTEController';
  
  processSnippet(
    `${srcRoot}/src/main/java/org/svenehrke/demo/web/p01plainjte/${name}.java`,
    {
      allowedTags: ['class', 'page01'],
      contentType: 'java',
      transformFn: snippetToCodeBlock(`java title="${name}.java"`),
      outFile: `${outRoot}/${name}_page01.mdx`,
      delimiter: '...'
    }
  );

  name = 'page01';
  processSnippet(
    `${srcRoot}/src/main/java/jte/plainjte/page01.jte`,
    {
      allowedTags: ['page01'],
      contentType: 'jte',
      transformFn: snippetToCodeBlock(`html title="${name}.jte"`),
      outFile: `${outRoot}/${name}_page01.mdx`,
      delimiter: '...'
    }
  );



}

main();
