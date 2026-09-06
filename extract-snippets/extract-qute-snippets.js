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

  // s01 — Simple Pages
  ['01', '02', '03', '04', '05'].forEach(n => {
    ctrl('s01plain', `S01D${n}`, 'page', `pages/s01/d${n}_java.mdx`);
    tpl('s01plain', `s01d${n}`, `pages/s01/d${n}_html.mdx`);
  });
  frag('components', 'helloworld', 'components/helloworld_html.mdx');
  frag('components', 'helloworldparams', 'components/helloworldparams_html.mdx');
  frag('components', 'helloworldcontent', 'components/helloworldcontent_html.mdx');

  // s03 — Page Patterns
  ['01', '02', '03'].forEach(n => {
    ctrl('s03pages', 'S03Routing', `d${n}`, `pages/s03/d${n}_java.mdx`);
    tpl('s03pages', `s03d${n}`, `pages/s03/d${n}_html.mdx`);
  });
  ctrl('s03pages', 'S03Routing', 'd04', 'pages/s03/d04_java.mdx');
  tpl('s03pages', 's03d04p1', 'pages/s03/d04p1_html.mdx');
  tpl('s03pages', 's03d04p2', 'pages/s03/d04p2_html.mdx');
  tpl('s03pages', 's03d04mpalayout', 'components/s03d04mpalayout_html.mdx');

  // s04 — UI Patterns
  ['01', '02'].forEach(n => {
    ctrl('s04uipatterns', 'S04Routing', `d${n}`, `pages/s04/d${n}_java.mdx`);
    tpl('s04uipatterns', `s04d${n}`, `pages/s04/d${n}_html.mdx`);
  });
  frag('s04uipatterns', 's04d01parent', 'components/s04d01parent_html.mdx');
  frag('s04uipatterns', 's04d01child', 'components/s04d01child_html.mdx');
  frag('s04uipatterns', 's04d02first', 'components/s04d02first_html.mdx');
  frag('s04uipatterns', 's04d02second', 'components/s04d02second_html.mdx');

  // s05 — htmx Patterns
  ctrl('s05htmx', 'S05Routing', 'd01', 'pages/s05/d01_java.mdx');
  tpl('s05htmx', 's05d01', 'pages/s05/d01_html.mdx');
  frag('s05htmx', 's05d01message', 'components/s05d01message_html.mdx');
}
