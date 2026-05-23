import { processSnippet } from './extract-snippet.js';
import { extractJteVcSnippets } from './extract-jte-vc-snippets.js';

const snippetToCodeBlock = optionString => (snippet) => {
  return `
\`\`\`${optionString}
${snippet}
\`\`\`
`;
}

function main() {
  extractJteVcSnippets();
  const srcRoot = '../../2025/2025-08-23_ssfe-patterns-jte-vc-htmx';
  const outRoot = 'generated/snippets';



  // S01:
  let javaController = `${srcRoot}/src/main/java/org/svenehrke/demo/web/s01plainjte/PlainJTEController.java`;
  let plainJte = `${srcRoot}/src/main/java/jte/plainjte`;
  let jteComponents = `${srcRoot}/src/main/java/jte/components`;
  let jtePages = `${srcRoot}/src/main/java/jte/pages`;

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

  // S01D01:
  processSnippet(
    javaController,
    { allowedTags: ['class', 's01d01'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/s01d01_java.mdx` }
  );
  processSnippet(
    `${plainJte}/s01d01.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="s01d01.jte"`), outFile: `${outRoot}/s01d01_jte.mdx` }
  );

  // S01D02:
  processSnippet(
    javaController,
    { allowedTags: ['class', 's01d02'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/s01d02_java.mdx` }
  );
  processSnippet(
    `${plainJte}/s01d02.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="s01d02.jte"`), outFile: `${outRoot}/s01d02_jte.mdx` }
  );

  // S01D03:
  processSnippet(
    javaController,
    { allowedTags: ['class', 's01d03'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/s01d03_java.mdx` }
  );
  processSnippet(
    `${plainJte}/s01d03.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="s01d03.jte"`), outFile: `${outRoot}/s01d03_jte.mdx` }
  );

  // S01D04:
  processSnippet(
    javaController,
    { allowedTags: ['class', 's01d04'], transformFn: snippetToCodeBlock(`java title="PlainJTEController.java"`), outFile: `${outRoot}/s01d04_java.mdx` }
  );
  processSnippet(
    `${plainJte}/s01d04.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="s01d04.jte"`), outFile: `${outRoot}/s01d04_jte.mdx` }
  );

  // S01D05:
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
  // S02D01:
  processSnippet(
    `${s02Root}/s02d01/S02D01.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S02D01.java"`), outFile: `${outRoot}/s02d01_java.mdx` }
  );
  processSnippet(
    `${s02Root}/s02d01/S02D01.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S02D01.jte"`), outFile: `${outRoot}/s02d01_jte.mdx` }
  );

  // S02D02:
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


  // S02D03:
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

  // S02D04:
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

  // S02D05:
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

  // S03:
  let s03Root = `${srcRoot}/src/main/java/org/svenehrke/demo/web/s03pages`;

  processSnippet(
    `${jtePages}/bulmapage.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="bulmapage.jte"`), outFile: `${outRoot}/pages/bulmapage_jte.mdx` }
  );
  processSnippet(
    `${jtePages}/page_head.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="page_head.jte"`), outFile: `${outRoot}/pages/page_head_jte.mdx` }
  );

  // S03D01:
  processSnippet(
    `${s03Root}/s03d01/S03D01.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S03D01.java"`), outFile: `${outRoot}/s03d01_java.mdx` }
  );
  processSnippet(
    `${s03Root}/s03d01/S03D01.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S03D01.jte"`), outFile: `${outRoot}/s03d01_jte.mdx` }
  );

  // S03D02:
  processSnippet(
    `${s03Root}/s03d02/S03D02.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S03D02.java"`), outFile: `${outRoot}/s03d02_java.mdx` }
  );
  processSnippet(
    `${s03Root}/s03d02/S03D02.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S03D02.jte"`), outFile: `${outRoot}/s03d02_jte.mdx` }
  );

  // S03D03:
  processSnippet(
    `${s03Root}/s03d03/S03D03.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S03D03.java"`), outFile: `${outRoot}/s03d03_java.mdx` }
  );
  processSnippet(
    `${s03Root}/s03d03/S03D03.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S03D03.jte"`), outFile: `${outRoot}/s03d03_jte.mdx` }
  );

  // S03D04:
  processSnippet(
    `${s03Root}/s03d04/S03D04P1.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S03D04P1.java"`), outFile: `${outRoot}/s03d04p1_java.mdx` }
  );
  processSnippet(
    `${s03Root}/s03d04/S03D04P1.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S03D04P1.jte"`), outFile: `${outRoot}/s03d04p1_jte.mdx` }
  );
  processSnippet(
    `${s03Root}/s03d04/S03D04P2.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S03D04P2.java"`), outFile: `${outRoot}/s03d04p2_java.mdx` }
  );
  processSnippet(
    `${s03Root}/s03d04/S03D04P2.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S03D04P2.jte"`), outFile: `${outRoot}/s03d04p2_jte.mdx` }
  );
  processSnippet(
    `${s03Root}/s03d04/MpaLayout.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="MpaLayout.java"`), outFile: `${outRoot}/s03d04_mpa_layout_java.mdx` }
  );
  processSnippet(
    `${s03Root}/s03d04/MpaLayout.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="MpaLayout.jte"`), outFile: `${outRoot}/s03d04_mpa_layout_jte.mdx` }
  );

  // S04:
  let s04Root = `${srcRoot}/src/main/java/org/svenehrke/demo/web/s04uipatterns`;

  // S04D01:
  processSnippet(
    `${s04Root}/s04d01/S04D01.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S04D01.java"`), outFile: `${outRoot}/s04d01_java.mdx` }
  );
  processSnippet(
    `${s04Root}/s04d01/S04D01.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S04D01.jte"`), outFile: `${outRoot}/s04d01_jte.mdx` }
  );
  processSnippet(
    `${s04Root}/s04d01/Parent.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="Parent.java"`), outFile: `${outRoot}/s04d01_parent_java.mdx` }
  );
  processSnippet(
    `${s04Root}/s04d01/Parent.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="Parent.jte"`), outFile: `${outRoot}/s04d01_parent_jte.mdx` }
  );
  processSnippet(
    `${s04Root}/s04d01/Child.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="Child.java"`), outFile: `${outRoot}/s04d01_child_java.mdx` }
  );
  processSnippet(
    `${s04Root}/s04d01/Child.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="Child.jte"`), outFile: `${outRoot}/s04d01_child_jte.mdx` }
  );

  // S04D02:
  processSnippet(
    `${s04Root}/s04d02/S04D02.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S04D02.java"`), outFile: `${outRoot}/s04d02_java.mdx` }
  );
  processSnippet(
    `${s04Root}/s04d02/S04D02.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S04D02.jte"`), outFile: `${outRoot}/s04d02_jte.mdx` }
  );
  processSnippet(
    `${s04Root}/s04d02/First.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="First.java"`), outFile: `${outRoot}/s04d02_first_java.mdx` }
  );
  processSnippet(
    `${s04Root}/s04d02/First.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="First.jte"`), outFile: `${outRoot}/s04d02_first_jte.mdx` }
  );
  processSnippet(
    `${s04Root}/s04d02/Second.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="Second.java"`), outFile: `${outRoot}/s04d02_second_java.mdx` }
  );
  processSnippet(
    `${s04Root}/s04d02/Second.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="Second.jte"`), outFile: `${outRoot}/s04d02_second_jte.mdx` }
  );

  // S05:
  let s05Root = `${srcRoot}/src/main/java/org/svenehrke/demo/web/s05htmxpatterns`;

  // S05D01:
  processSnippet(
    `${s05Root}/s05d01/S05D01.java`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`java title="S05D01.java"`), outFile: `${outRoot}/s05d01_java.mdx` }
  );
  processSnippet(
    `${s05Root}/s05d01/S05D01.jte`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="S05D01.jte"`), outFile: `${outRoot}/s05d01_jte.mdx` }
  );
  processSnippet(
    `${s05Root}/s05d01/S05D01Message.java`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`java title="S05D01Message.java"`), outFile: `${outRoot}/s05d01_message_java.mdx` }
  );
  processSnippet(
    `${s05Root}/s05d01/S05D01Message.jte`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="S05D01Message.jte"`), outFile: `${outRoot}/s05d01_message_jte.mdx` }
  );


}

main();
