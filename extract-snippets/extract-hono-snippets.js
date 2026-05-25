import { processSnippet } from './extract-snippet.js';
import { snippetToCodeBlock } from './extract-functions.js';

export function extractHonoSnippets() {
  const srcRoot = '../../2025/2025-12-27_ssfe-patterns-hono-htmx';
  const outRoot = 'generated/snippets/hono';

  
  // Components:
  const htmlComponent = n => {
    const components = `${srcRoot}/src/components`;
    processSnippet(
    `${components}/${n}.ts`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="${n}.ts"`), outFile: `${outRoot}/components/html/${n}_ts.mdx` }
    );
  }
  htmlComponent('helloworld');
  htmlComponent('helloworldparams');
  htmlComponent('helloworldcontent');
  htmlComponent('head');

  // M01:
  const m01page = n => {
    const m01 = `${srcRoot}/src/m01html`;
    processSnippet(
      `${m01}/${n}.ts`,
      { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="${n}.ts"`), outFile: `${outRoot}/pages/m01/${n}_ts.mdx` }
    );
  }
  m01page('m01d01');
  m01page('m01d02');
  m01page('m01d03');
  m01page('m01d04');
  m01page('m01d05');

  // M02:
  const jsxComponent = n => {
    const jsxComponents = `${srcRoot}/src/c00jsxcomponents`;
    processSnippet(
    `${jsxComponents}/${n}.tsx`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="${n}.tsx"`), outFile: `${outRoot}/components/jsx/${n}_tsx.mdx` }
    );
  }

  jsxComponent('helloworldjsx');
  jsxComponent('helloworldparamsjsx');
  jsxComponent('helloworldcontentjsx');
  jsxComponent('helloworldnestedjsx');
  jsxComponent('bulmapage');

  const m02page = n => {
    const m02 = `${srcRoot}/src/m02jsx`;
    processSnippet(
      `${m02}/${n}.tsx`,
      { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="${n}.tsx"`), outFile: `${outRoot}/pages/m02/${n}_tsx.mdx`}
    );
  }
  m02page('m02d01');
  m02page('m02d02');
  m02page('m02d03');
  m02page('m02d04');
  m02page('m02d05');

  // M03:
  const m03page = n => {
    const m03 = `${srcRoot}/src/m03pages`;
    processSnippet(
      `${m03}/${n}.tsx`,
      { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="${n}.tsx"`), outFile: `${outRoot}/pages/m03/${n}_tsx.mdx`}
    );
  }
  m03page('m03d01');
  
  m03page('m03d02');
  m03page('m03d03');
  m03page('m03d04mpalayout');
  m03page('m03d04mpapage1');
  m03page('m03d04mpapage2');

  // M04:
  const m04page = n => {
    const m04 = `${srcRoot}/src/m04pages`;
    processSnippet(
      `${m03}/${n}.tsx`,
      { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="${n}.tsx"`), outFile: `${outRoot}/pages/m03/${n}_tsx.mdx`}
    );
  }

}
