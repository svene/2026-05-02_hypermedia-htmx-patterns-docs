import { processSnippet } from './extract-snippet.js';
import { snippetToCodeBlock } from './extract-functions.js';

export function extractHonoSnippets() {
  const srcRoot = '../../2025/2025-12-27_ssfe-patterns-hono-htmx';
  const outRoot = 'generated/snippets';

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

  // M01:
  const m01page = n => {
    const m01 = `${srcRoot}/src/m01html`;
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

  // M02:
  const m02page = n => {
    const m02 = `${srcRoot}/src/m02jsx`;
    processSnippet(
      `${m02}/${n}.tsx`,
      { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="${n}.tsx"`), outFile: `${outRoot}/hono/${n}_tsx.mdx` }
    );
  }
  m02page('m02d01');
}
