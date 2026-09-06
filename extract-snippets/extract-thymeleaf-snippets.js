import { processSnippet } from './extract-snippet.js';
import { snippetToCodeBlock } from './extract-functions.js';

export function extractThymeleafSnippets() {
  const srcRoot = '../../2025/2025-08-23_ssfe-patterns-thymeleaf-htmx';
  const templates = `${srcRoot}/src/main/resources/templates`;
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

  // Shared layout fragments
  fragment('layout', 'page');
  fragment('page-head', 'page');

  // m01 — Simple Pages
  page('m01simplepages', 'd01');
  page('m01simplepages', 'd02');
  page('m01simplepages', 'd03');
  page('m01simplepages', 'd04');
  page('m01simplepages', 'd05');
  fragment('helloworld');
  fragment('helloworldparams');
  fragment('helloworldcontent');

  // m03 — Page Patterns
  page('m03pages', 'd01');
  page('m03pages', 'd02');
  page('m03pages', 'd03');
  page('m03pages', 'd04p1');
  page('m03pages', 'd04p2');
  fragment('m03d04-layout', 'page');

  // m04 — UI Patterns
  page('m04uipatterns', 'd01');
  page('m04uipatterns', 'd02');
  fragment('m04-parent');
  fragment('m04-child');
  fragment('m04-forwarder-first');
  fragment('m04-forwarder-second');

  // m05 — htmx Patterns
  page('m05htmxpatterns', 'd01');
  processSnippet(
    `${templates}/m05htmxpatterns/d01-message.html`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="d01-message.html"`), outFile: `${outRoot}/pages/m05htmxpatterns/d01-message_html.mdx` }
  );
}
