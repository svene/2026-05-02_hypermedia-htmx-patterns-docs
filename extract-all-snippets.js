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


  let javaController = `${srcRoot}/src/main/java/org/svenehrke/demo/web/p01plainjte/PlainJTEController.java`;
  let plainJte = `${srcRoot}/src/main/java/jte/plainjte`;
  let jteComponents = `${srcRoot}/src/main/java/jte/components`;

  // Page01:
  processSnippet(
    javaController,
    { allowedTags: ['class', 'page01'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/page01_java.mdx` }
  );
  processSnippet(
    `${plainJte}/page01.jte`,
    { allowedTags: ['page01'], transformFn: snippetToCodeBlock(`html title="page01.jte"`), outFile: `${outRoot}/page01_jte.mdx` }
  );

  // Page02:
  processSnippet(
    javaController,
    { allowedTags: ['class', 'page02'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/page02_java.mdx` }
  );
  processSnippet(
    `${plainJte}/page02withcomponent.jte`,
    { allowedTags: ['page02'], transformFn: snippetToCodeBlock(`html title="page02withcomponent.jte"`), outFile: `${outRoot}/page02_jte.mdx` }
  );

  // Components:
  processSnippet(
    `${jteComponents}/helloworld.jte`,
    { allowedTags: ['helloworld'], transformFn: snippetToCodeBlock(`html title="helloworld.jte"`), outFile: `${outRoot}/components/helloworld_jte.mdx` }
  );
  processSnippet(
    `${jteComponents}/helloworldparams.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="helloworldparams.jte"`), outFile: `${outRoot}/components/helloworldparams_jte.mdx` }
  );
  processSnippet(
    `${jteComponents}/helloworldcontent.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="helloworldcontent.jte"`), outFile: `${outRoot}/components/helloworldcontent_jte.mdx` }
  );

  // Page03:
  processSnippet(
    javaController,
    { allowedTags: ['class', 'page03'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/page03_java.mdx` }
  );
  processSnippet(
    `${plainJte}/page03withparamscomponent.jte`,
    { allowedTags: ['page03'], transformFn: snippetToCodeBlock(`html title="page03withparamscomponent.jte"`), outFile: `${outRoot}/page03_jte.mdx` }
  );

  // Page04:
  processSnippet(
    javaController,
    { allowedTags: ['class', 'page04'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/page04_java.mdx` }
  );
  processSnippet(
    `${plainJte}/page04withcontentparamscomponent.jte`,
    { allowedTags: ['page04'], transformFn: snippetToCodeBlock(`html title="page04withcontentparamscomponent.jte"`), outFile: `${outRoot}/page04_jte.mdx` }
  );

  // Page05:
  processSnippet(
    javaController,
    { allowedTags: ['class', 'page05'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/page05_java.mdx` }
  );
  processSnippet(
    `${plainJte}/page05withnestedcomponents.jte`,
    { allowedTags: ['page05'], transformFn: snippetToCodeBlock(`html title="page05withnestedcomponents.jte"`), outFile: `${outRoot}/page05_jte.mdx` }
  );


}

main();
