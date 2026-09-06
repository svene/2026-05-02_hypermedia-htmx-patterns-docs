import { processSnippet } from './extract-snippet.js';
import { snippetToCodeBlock } from './extract-functions.js';

export function extractThymeleafSnippets() {
  const srcRoot = '../../2025/2025-08-23_ssfe-patterns-thymeleaf-htmx';
  const templates = `${srcRoot}/src/main/resources/templates`;
  const java = `${srcRoot}/src/main/java/org/svenehrke/demo/ssfepatterns`;
  const outRoot = 'generated/snippets/thymeleaf';

  // a demo page template (module dir + name); tag defaults to "page"
  const page = (dir, n, tag = 'page') => processSnippet(
    `${templates}/${dir}/${n}.html`,
    { allowedTags: [tag], transformFn: snippetToCodeBlock(`html title="${n}.html"`), outFile: `${outRoot}/pages/${dir}/${n}_html.mdx` }
  );

  // a shared fragment from templates/fragments/; tag defaults to "component"
  const fragment = (n, tag = 'component') => processSnippet(
    `${templates}/fragments/${n}.html`,
    { allowedTags: [tag], transformFn: snippetToCodeBlock(`html title="${n}.html"`), outFile: `${outRoot}/components/${n}_html.mdx` }
  );

  // one demo's slice of a module controller: the class wrapper + that demo's
  // handler(s), extracted with tags ['class', <demo>]
  const controller = (pkg, className, dir, demo) => processSnippet(
    `${java}/${pkg}/${className}.java`,
    { allowedTags: ['class', demo], transformFn: snippetToCodeBlock(`java title="${className}.java"`), outFile: `${outRoot}/pages/${dir}/${demo}_java.mdx` }
  );

  // Shared layout fragments
  fragment('layout', 'page');
  fragment('page-head', 'page');

  // m01 — Simple Pages
  ['d01', 'd02', 'd03', 'd04', 'd05'].forEach(d => {
    page('m01simplepages', d);
    controller('m01simplepages', 'M01Controller', 'm01simplepages', d);
  });
  fragment('helloworld');
  fragment('helloworldparams');
  fragment('helloworldcontent');

  // m03 — Page Patterns  (d04 handler snippet covers d04p1 + d04p2 + addMpaModel)
  ['d01', 'd02', 'd03'].forEach(d => {
    page('m03pages', d);
    controller('m03pages', 'M03Controller', 'm03pages', d);
  });
  page('m03pages', 'd04p1');
  page('m03pages', 'd04p2');
  controller('m03pages', 'M03Controller', 'm03pages', 'd04');
  fragment('m03d04-layout', 'page');

  // m04 — UI Patterns
  ['d01', 'd02'].forEach(d => {
    page('m04uipatterns', d);
    controller('m04uipatterns', 'M04Controller', 'm04uipatterns', d);
  });
  fragment('m04-parent');
  fragment('m04-child');
  fragment('m04-forwarder-first');
  fragment('m04-forwarder-second');

  // m05 — htmx Patterns  (d01 handler snippet covers the page + the message endpoint)
  page('m05htmxpatterns', 'd01');
  controller('m05htmxpatterns', 'M05Controller', 'm05htmxpatterns', 'd01');
  processSnippet(
    `${templates}/m05htmxpatterns/d01-message.html`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="d01-message.html"`), outFile: `${outRoot}/pages/m05htmxpatterns/d01-message_html.mdx` }
  );
}
