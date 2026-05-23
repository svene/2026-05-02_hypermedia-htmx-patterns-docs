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
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="helloworld.ts"`), outFile: `${outRoot}/components/hono/helloworld_ts.mdx` }
  );

  processSnippet(
    `${components}/helloworldparams.ts`,
    { allowedTags: ['component'], transformFn: snippetToCodeBlock(`html title="helloworldparams.ts"`), outFile: `${outRoot}/components/hono/helloworldparams_ts.mdx` }
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

  // M01D03:
  processSnippet(
    `${m01}/m01d03.ts`,
    { allowedTags: ['page'], transformFn: snippetToCodeBlock(`html title="m01d03.ts"`), outFile: `${outRoot}/hono/m01d03_ts.mdx` }
  );



}
