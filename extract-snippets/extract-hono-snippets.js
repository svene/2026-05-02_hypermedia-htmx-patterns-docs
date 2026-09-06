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

  // S01:
  const s01page = n => {
    const s01 = `${srcRoot}/src/s01html`;
    processSnippet(
      `${s01}/${n}.ts`,
      { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="${n}.ts"`), outFile: `${outRoot}/pages/s01/${n}_ts.mdx` }
    );
  }
  s01page('s01d01');
  s01page('s01d02');
  s01page('s01d03');
  s01page('s01d04');
  s01page('s01d05');

  // S02:
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

  const s02page = n => {
    const s02 = `${srcRoot}/src/s02jsx`;
    processSnippet(
      `${s02}/${n}.tsx`,
      { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="${n}.tsx"`), outFile: `${outRoot}/pages/s02/${n}_tsx.mdx`}
    );
  }
  s02page('s02d01');
  s02page('s02d02');
  s02page('s02d03');
  s02page('s02d04');
  s02page('s02d05');

  // S03:
  const s03page = n => {
    const s03 = `${srcRoot}/src/s03pages`;
    processSnippet(
      `${s03}/${n}.tsx`,
      { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="${n}.tsx"`), outFile: `${outRoot}/pages/s03/${n}_tsx.mdx`}
    );
  }
  s03page('s03d01');
  
  s03page('s03d02');
  s03page('s03d03');
  s03page('s03d04mpalayout');
  s03page('s03d04mpapage1');
  s03page('s03d04mpapage2');

  // S04:
  const s04page = n => {
    const s04 = `${srcRoot}/src/s04uipatterns`;
    processSnippet(
      `${s04}/${n}.tsx`,
      { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="${n}.tsx"`), outFile: `${outRoot}/pages/s04/${n}_tsx.mdx`}
    );
  }
  const s04Component = n => {
    const s04 = `${srcRoot}/src/s04uipatterns`;
    processSnippet(
      `${s04}/${n}.tsx`,
      { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="${n}.tsx"`), outFile: `${outRoot}/pages/s04/${n}_tsx.mdx`}
    );
  }

  s04page('s04d01');
  s04Component('s04d01child');
  s04Component('s04d01parent');
  s04page('s04d02');
  s04Component('s04d02first');
  s04Component('s04d02second');

  // S05:
  const s05page = n => {
    const s05 = `${srcRoot}/src/s05htmx`;
    processSnippet(
      `${s05}/${n}.tsx`,
      { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="${n}.tsx"`), outFile: `${outRoot}/pages/s05/${n}_tsx.mdx`}
    );
  }
  const s05Component = n => {
    const s05 = `${srcRoot}/src/s05htmx`;
    processSnippet(
      `${s05}/${n}.tsx`,
      { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="${n}.tsx"`), outFile: `${outRoot}/components/s05/${n}_tsx.mdx`}
    );
  }

  s05page('s05d01');
  s05Component('s05d01message');

}
