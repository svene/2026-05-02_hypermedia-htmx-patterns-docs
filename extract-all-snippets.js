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

  // Page01:
  processSnippet(
    `${srcRoot}/src/main/java/org/svenehrke/demo/web/p01plainjte/PlainJTEController.java`,
    {
      allowedTags: ['class', 'page01'],
      transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`),
      outFile: `${outRoot}/page01_java.mdx`,
    }
  );

  processSnippet(
    `${srcRoot}/src/main/java/jte/plainjte/page01.jte`,
    {
      allowedTags: ['page01'],
      transformFn: snippetToCodeBlock(`html title="page01.jte"`),
      outFile: `${outRoot}/page01_jte.mdx`,
    }
  );

  // Page02:
  processSnippet(
    `${srcRoot}/src/main/java/org/svenehrke/demo/web/p01plainjte/PlainJTEController.java`,
    {
      allowedTags: ['class', 'page02'],
      transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`),
      outFile: `${outRoot}/page02_java.mdx`,
    }
  );

  processSnippet(
    `${srcRoot}/src/main/java/jte/plainjte/page02withcomponent.jte`,
    {
      allowedTags: ['page02'],
      transformFn: snippetToCodeBlock(`html title="page02withcomponent.jte"`),
      outFile: `${outRoot}/page02_jte.mdx`,
    }
  );

  processSnippet(
    `${srcRoot}/src/main/java/jte/components/helloworld.jte`,
    {
      allowedTags: ['helloworld'],
      transformFn: snippetToCodeBlock(`html title="helloworld.jte"`),
      outFile: `${outRoot}/components/helloworld_jte.mdx`,
    }
  );



}

main();
