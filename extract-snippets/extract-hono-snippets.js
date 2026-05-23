import { processSnippet } from './extract-snippet.js';
import { snippetToCodeBlock } from './extract-functions.js';

export function extractHonoSnippets() {
  const srcRoot = '../../2025/2025-12-27_ssfe-patterns-hono-htmx';
  const outRoot = 'generated/snippets';

  // M01:
  let m01 = `${srcRoot}/src/m01html`;
  let components = `${srcRoot}/src/components`;

  // Components:
  processSnippet(
    `${components}/helloworld.ts`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="helloworld.ts"`), outFile: `${outRoot}/components/helloworld_ts.mdx` }
  );

  // M01D01:
  processSnippet(
    `${m01}/m01d01.ts`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="m01d01.ts"`), outFile: `${outRoot}/hono/m01d01_ts.mdx` }
  );

  // M01D02:
  processSnippet(
    `${m01}/m01d02.ts`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="m01d02.ts"`), outFile: `${outRoot}/hono/m01d02_ts.mdx` }
  );



}
