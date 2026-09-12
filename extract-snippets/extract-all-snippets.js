import { extractJteSnippets } from './extract-jte-snippets.js';
import { extractJteVcSnippets } from './extract-jte-vc-snippets.js';
import { extractHonoSnippets } from './extract-hono-snippets.js';
import { extractThymeleafSnippets } from './extract-thymeleaf-snippets.js';
import { extractQuteSnippets } from './extract-qute-snippets.js';

function main() {
  extractJteSnippets();
  extractJteVcSnippets();
  extractHonoSnippets();
  extractThymeleafSnippets();
  extractQuteSnippets();

}

main();
