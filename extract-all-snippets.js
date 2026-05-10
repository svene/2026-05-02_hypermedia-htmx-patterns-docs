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
  const outRoot = 'generated/snippets';



  // S01:
  let javaController = `${srcRoot}/src/main/java/org/svenehrke/demo/web/s01plainjte/PlainJTEController.java`;
  let plainJte = `${srcRoot}/src/main/java/jte/plainjte`;
  let jteComponents = `${srcRoot}/src/main/java/jte/components`;

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

  // S01P01:
  processSnippet(
    javaController,
    { allowedTags: ['class', 's01d01'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/s01d01_java.mdx` }
  );
  processSnippet(
    `${plainJte}/s01d01.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="s01d01.jte"`), outFile: `${outRoot}/s01d01_jte.mdx` }
  );

  // S01P02:
  processSnippet(
    javaController,
    { allowedTags: ['class', 's01d02'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/s01d02_java.mdx` }
  );
  processSnippet(
    `${plainJte}/s01d02.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="s01d02.jte"`), outFile: `${outRoot}/s01d02_jte.mdx` }
  );

  // S01P03:
  processSnippet(
    javaController,
    { allowedTags: ['class', 's01d03'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/s01d03_java.mdx` }
  );
  processSnippet(
    `${plainJte}/s01d03.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="s01d03.jte"`), outFile: `${outRoot}/s01d03_jte.mdx` }
  );

  // S01P04:
  processSnippet(
    javaController,
    { allowedTags: ['class', 's01d04'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/s01d04_java.mdx` }
  );
  processSnippet(
    `${plainJte}/s01d04.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="s01d04.jte"`), outFile: `${outRoot}/s01d04_jte.mdx` }
  );

  // S01P05:
  processSnippet(
    javaController,
    { allowedTags: ['class', 's01d05'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/s01d05_java.mdx` }
  );
  processSnippet(
    `${plainJte}/s01d05.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="s01d05.jte"`), outFile: `${outRoot}/s01d05_jte.mdx` }
  );


  // S02:
  let s02Root = `${srcRoot}/src/main/java/org/svenehrke/demo/web/s02simplevcdemos`;
  // S02P01:
  processSnippet(
    `${s02Root}/s02d01/S02D01.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S02D01.java"`), outFile: `${outRoot}/s02d01_java.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d01/S02D01.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S02D01.jte"`), outFile: `${outRoot}/s02d01_jte.mdx` }
  );

  // S02P02:
  processSnippet(
    `${s02Root}/s02d02/S02D02.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S02D02.java"`), outFile: `${outRoot}/s02d02_java.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d02/S02D02.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S02D02.jte"`), outFile: `${outRoot}/s02d02_jte.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d02/HelloWorld.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="HelloWorld.java"`), outFile: `${outRoot}/s02d02_component_java.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d02/HelloWorld.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="HelloWorld.jte"`), outFile: `${outRoot}/s02d02_component_jte.mdx` }
  );


  // S02P03:
  processSnippet(
    `${s02Root}/s02d03/S02D03.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S02D03.java"`), outFile: `${outRoot}/s02d03_java.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d03/S02D03.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S02D03.jte"`), outFile: `${outRoot}/s02d03_jte.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d03/HelloWorldParams.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="HelloWorldParams.java"`), outFile: `${outRoot}/s02d03_component_java.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d03/HelloWorldParams.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="HelloWorldParams.jte"`), outFile: `${outRoot}/s02d03_component_jte.mdx` }
  );

  // S02P04:
  processSnippet(
    `${s02Root}/s02d04/S02D04.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S02D04.java"`), outFile: `${outRoot}/s02d04_java.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d04/S02D04.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S02D04.jte"`), outFile: `${outRoot}/s02d04_jte.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d04/HelloWorldContent.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="HelloWorldContent.java"`), outFile: `${outRoot}/s02d04_component_java.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d04/HelloWorldContent.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="HelloWorldContent.jte"`), outFile: `${outRoot}/s02d04_component_jte.mdx` }
  );

  // S02P05:
  processSnippet(
    `${s02Root}/s02d05/S02D05.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S02D05.java"`), outFile: `${outRoot}/s02d05_java.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d05/S02D05.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S02D05.jte"`), outFile: `${outRoot}/s02d05_jte.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d05/HelloWorldNestedComponents.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="HelloWorldNestedComponents.java"`), outFile: `${outRoot}/s02d05_component_java.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d05/HelloWorldNestedComponents.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="HelloWorldNestedComponents.jte"`), outFile: `${outRoot}/s02d05_component_jte.mdx` }
  );


}

main();
