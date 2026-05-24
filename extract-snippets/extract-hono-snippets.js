import { processSnippet } from './extract-snippet.js';
import { snippetToCodeBlock } from './extract-functions.js';

export function extractHonoSnippets() {
  const srcRoot = '../../2025/2025-12-27_ssfe-patterns-hono-htmx';
  const outRoot = 'generated/snippets';

  // M01:
  let m01 = `${srcRoot}/src/m01html`;
  let components = `${srcRoot}/src/components`;

  // Components:
  const component = n => {
    processSnippet(
    `${components}/${n}.ts`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="${n}.ts"`), outFile: `${outRoot}/components/hono/${n}_ts.mdx` }
    );
  }
  component('helloworld');
  component('helloworldparams');
  component('helloworldcontent');

  // M01D01:
  const m01page = n => {
    processSnippet(
      `${m01}/${n}.ts`,
      { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="${n}.ts"`), outFile: `${outRoot}/hono/${n}_ts.mdx` }
    );
  }
  m01page('m01d01');
  m01page('m01d02');
  m01page('m01d03');
  m01page('m01d04');
  m01page('m01d05');

}
