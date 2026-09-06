import { processSnippet } from './extract-snippet.js';
import { snippetToCodeBlock } from './extract-functions.js';

export function extractQuteSnippets() {
  const srcRoot = '../../2025/2025-12-21_ssfe-patterns-quarkus-qute-htmx';
  const java = `${srcRoot}/src/main/java/dev/svenehrke/demo/ssfepatterns`;
  const templates = `${srcRoot}/src/main/resources/templates/dev/svenehrke/demo/ssfepatterns`;
  const outRoot = 'generated/snippets/qute';

  const tpl = (dir, n, out, tag = 'page') => processSnippet(
    `${templates}/${dir}/${n}.html`,
    { allowedTags: [tag], transformFn: snippetToCodeBlock(`html title="${n}.html"`), outFile: `${outRoot}/${out}` }
  );
  const frag = (dir, n, out) => tpl(dir, n, out, 'component');
  const ctrl = (pkg, className, tag, out) => processSnippet(
    `${java}/${pkg}/${className}.java`,
    { allowedTags: [tag], transformFn: snippetToCodeBlock(`java title="${className}.java"`), outFile: `${outRoot}/${out}` }
  );

  // Shared layout fragments (tag "page" — they are documents, like the JTE-VC bulmapage)
  tpl('components', 'bulmapage', 'components/bulmapage_html.mdx');
  tpl('components', 'page_head', 'components/pagehead_html.mdx');

  // m01 — Simple Pages
  ['01', '02', '03', '04', '05'].forEach(n => {
    ctrl('m01plain', `M01D${n}`, 'page', `pages/m01/d${n}_java.mdx`);
    tpl('m01plain', `m01d${n}`, `pages/m01/d${n}_html.mdx`);
  });
  frag('components', 'helloworld', 'components/helloworld_html.mdx');
  frag('components', 'helloworldparams', 'components/helloworldparams_html.mdx');
  frag('components', 'helloworldcontent', 'components/helloworldcontent_html.mdx');

  // m03 — Page Patterns
  ['01', '02', '03'].forEach(n => {
    ctrl('m03pages', 'M03Routing', `d${n}`, `pages/m03/d${n}_java.mdx`);
    tpl('m03pages', `m03d${n}`, `pages/m03/d${n}_html.mdx`);
  });
  ctrl('m03pages', 'M03Routing', 'd04', 'pages/m03/d04_java.mdx');
  tpl('m03pages', 'm03d04p1', 'pages/m03/d04p1_html.mdx');
  tpl('m03pages', 'm03d04p2', 'pages/m03/d04p2_html.mdx');
  tpl('m03pages', 'm03d04mpalayout', 'components/m03d04mpalayout_html.mdx');

  // m04 — UI Patterns
  ['01', '02'].forEach(n => {
    ctrl('m04uipatterns', 'M04Routing', `d${n}`, `pages/m04/d${n}_java.mdx`);
    tpl('m04uipatterns', `m04d${n}`, `pages/m04/d${n}_html.mdx`);
  });
  frag('m04uipatterns', 'm04d01parent', 'components/m04d01parent_html.mdx');
  frag('m04uipatterns', 'm04d01child', 'components/m04d01child_html.mdx');
  frag('m04uipatterns', 'm04d02first', 'components/m04d02first_html.mdx');
  frag('m04uipatterns', 'm04d02second', 'components/m04d02second_html.mdx');

  // m05 — htmx Patterns
  ctrl('m05htmx', 'M05Routing', 'd01', 'pages/m05/d01_java.mdx');
  tpl('m05htmx', 'm05d01', 'pages/m05/d01_html.mdx');
  frag('m05htmx', 'm05d01message', 'components/m05d01message_html.mdx');
}
