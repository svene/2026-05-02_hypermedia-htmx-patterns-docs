import { processSnippet } from './extract-snippet.js';
import { snippetToCodeBlock } from './extract-functions.js';

export function extractJteSnippets() {
  const srcRoot = '../../2025/2025-08-23_hypermedia-patterns-jte-htmx';
  const templates = `${srcRoot}/src/main/jte`;
  const java = `${srcRoot}/src/main/java/org/svenehrke/demo/web`;
  const outRoot = 'generated/snippets/jte';

  // a demo page template (module dir + name); tag defaults to "page"
  const page = (dir, n, tag = 'page') => processSnippet(
    `${templates}/${dir}/${n}.jte`,
    { allowedTags: [tag], transformFn: snippetToCodeBlock(`html title="${n}.jte"`), outFile: `${outRoot}/pages/${dir}/${n}_jte.mdx` }
  );

  // a shared fragment from src/main/jte/fragments/; tag defaults to "component"
  const fragment = (n, tag = 'component') => processSnippet(
    `${templates}/fragments/${n}.jte`,
    { allowedTags: [tag], transformFn: snippetToCodeBlock(`html title="${n}.jte"`), outFile: `${outRoot}/components/${n}_jte.mdx` }
  );

  // one demo's slice of a module controller: the class wrapper + that demo's
  // handler(s), extracted with tags ['class', <demo>]
  const controller = (pkg, className, dir, demo) => processSnippet(
    `${java}/${pkg}/${className}.java`,
    { allowedTags: ['class', demo], transformFn: snippetToCodeBlock(`java title="${className}.java"`), outFile: `${outRoot}/pages/${dir}/${demo}_java.mdx` }
  );

  // Shared layout fragments
  fragment('layout', 'page');
  fragment('pagehead', 'page');

  // s01 — Simple Pages
  ['d01', 'd02', 'd03', 'd04', 'd05'].forEach(d => {
    page('s01simplepages', d);
    controller('s01simplepages', 'S01Controller', 's01simplepages', d);
  });
  fragment('helloworld');
  fragment('helloworldparams');
  fragment('helloworldcontent');

  // s03 — Page Patterns  (d04 handler snippet covers d04p1 + d04p2 + addMpaModel)
  ['d01', 'd02', 'd03'].forEach(d => {
    page('s03pages', d);
    controller('s03pages', 'S03Controller', 's03pages', d);
  });
  page('s03pages', 'd04p1');
  page('s03pages', 'd04p2');
  controller('s03pages', 'S03Controller', 's03pages', 'd04');
  fragment('s03d04mpalayout', 'page');

  // s04 — UI Patterns
  ['d01', 'd02'].forEach(d => {
    page('s04uipatterns', d);
    controller('s04uipatterns', 'S04Controller', 's04uipatterns', d);
  });
  fragment('s04parent');
  fragment('s04child');
  fragment('s04forwarderfirst');
  fragment('s04forwardersecond');

  // s05 — htmx Patterns  (d01 handler snippet covers the page + the message endpoint)
  page('s05htmxpatterns', 'd01');
  controller('s05htmxpatterns', 'S05Controller', 's05htmxpatterns', 'd01');
  page('s05htmxpatterns', 'd01message', 'component');
}
