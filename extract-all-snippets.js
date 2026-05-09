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

  // S01P01:
  processSnippet(
    javaController,
    { allowedTags: ['class', 'page01'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/page01_java.mdx` }
  );
  processSnippet(
    `${plainJte}/page01.jte`,
    { allowedTags: ['page01'], transformFn: snippetToCodeBlock(`html title="page01.jte"`), outFile: `${outRoot}/page01_jte.mdx` }
  );

  // S01P02:
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

  // S01P03:
  processSnippet(
    javaController,
    { allowedTags: ['class', 'page03'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/page03_java.mdx` }
  );
  processSnippet(
    `${plainJte}/page03withparamscomponent.jte`,
    { allowedTags: ['page03'], transformFn: snippetToCodeBlock(`html title="page03withparamscomponent.jte"`), outFile: `${outRoot}/page03_jte.mdx` }
  );

  // S01P04:
  processSnippet(
    javaController,
    { allowedTags: ['class', 'page04'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/page04_java.mdx` }
  );
  processSnippet(
    `${plainJte}/page04withcontentparamscomponent.jte`,
    { allowedTags: ['page04'], transformFn: snippetToCodeBlock(`html title="page04withcontentparamscomponent.jte"`), outFile: `${outRoot}/page04_jte.mdx` }
  );

  // S01P05:
  processSnippet(
    javaController,
    { allowedTags: ['class', 'page05'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/page05_java.mdx` }
  );
  processSnippet(
    `${plainJte}/page05withnestedcomponents.jte`,
    { allowedTags: ['page05'], transformFn: snippetToCodeBlock(`html title="page05withnestedcomponents.jte"`), outFile: `${outRoot}/page05_jte.mdx` }
  );


  // S02:
  let s02Root = `${srcRoot}/src/main/java/org/svenehrke/demo/web/p02simplevcdemos`;
  // S02P01:
  processSnippet(
    `${s02Root}/page01/Page.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="Page.java"`), outFile: `${outRoot}/s02p01_java.mdx` }
  );
  processSnippet(
    `${s02Root}/page01/Page.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="Page.jte"`), outFile: `${outRoot}/s02p01_jte.mdx` }
  );

  // S02P02:
  processSnippet(
    `${s02Root}/page02withcomponent/PageWithComponent.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="PageWithComponent.java"`), outFile: `${outRoot}/s02p02_java.mdx` }
  );
  processSnippet(
    `${s02Root}/page02withcomponent/PageWithComponent.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="PageWithComponent.jte"`), outFile: `${outRoot}/s02p02_jte.mdx` }
  );
  processSnippet(
    `${s02Root}/page02withcomponent/HelloWorld.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="HelloWorld.java"`), outFile: `${outRoot}/s02p02_helloworld_java.mdx` }
  );
  processSnippet(
    `${s02Root}/page02withcomponent/HelloWorld.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="HelloWorld.jte"`), outFile: `${outRoot}/s02p02_helloworld_jte.mdx` }
  );


  // S02P03:
  processSnippet(
    `${s02Root}/page03withparamscomponent/PageWithParamsComponent.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="PageWithParamsComponent.java"`), outFile: `${outRoot}/s02p03_java.mdx` }
  );
  processSnippet(
    `${s02Root}/page03withparamscomponent/PageWithParamsComponent.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="PageWithParamsComponent.jte"`), outFile: `${outRoot}/s02p03_jte.mdx` }
  );
  processSnippet(
    `${s02Root}/page03withparamscomponent/HelloWorldParams.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="HelloWorldParams.java"`), outFile: `${outRoot}/s02p03_helloworld_params_java.mdx` }
  );
  processSnippet(
    `${s02Root}/page03withparamscomponent/HelloWorldParams.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="HelloWorldParams.jte"`), outFile: `${outRoot}/s02p03_helloworld_params_jte.mdx` }
  );

  // S02P04:
  processSnippet(
    `${s02Root}/page04withcontentparamscomponent/PageWithContentParamsComponent.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="PageWithContentParamsComponent.java"`), outFile: `${outRoot}/s02p04_java.mdx` }
  );
  processSnippet(
    `${s02Root}/page04withcontentparamscomponent/PageWithContentParamsComponent.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="PageWithContentParamsComponent.jte"`), outFile: `${outRoot}/s02p04_jte.mdx` }
  );
  processSnippet(
    `${s02Root}/page04withcontentparamscomponent/HelloWorldContent.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="HelloWorldContent.java"`), outFile: `${outRoot}/s02p04_component_java.mdx` }
  );
  processSnippet(
    `${s02Root}/page04withcontentparamscomponent/HelloWorldContent.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="HelloWorldContent.jte"`), outFile: `${outRoot}/s02p04_component_jte.mdx` }
  );

  // S02P05:
  processSnippet(
    `${s02Root}/page05withnestedcomponents/PageWithNestedComponents.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="PageWithNestedComponents.java"`), outFile: `${outRoot}/s02p05_java.mdx` }
  );
  processSnippet(
    `${s02Root}/page05withnestedcomponents/PageWithNestedComponents.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="PageWithNestedComponents.jte"`), outFile: `${outRoot}/s02p05_jte.mdx` }
  );
  processSnippet(
    `${s02Root}/page05withnestedcomponents/HelloWorldNestedComponents.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="HelloWorldNestedComponents.java"`), outFile: `${outRoot}/s02p05_component_java.mdx` }
  );
  processSnippet(
    `${s02Root}/page05withnestedcomponents/HelloWorldNestedComponents.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="HelloWorldNestedComponents.jte"`), outFile: `${outRoot}/s02p05_component_jte.mdx` }
  );


}

main();
