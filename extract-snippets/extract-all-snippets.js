import { extractJteVcSnippets } from './extract-jte-vc-snippets.js';
import { extractHonoSnippets } from './extract-hono-snippets.js';
import { extractThymeleafSnippets } from './extract-thymeleaf-snippets.js';
import { extractQuteSnippets } from './extract-qute-snippets.js';

function main() {
  extractJteVcSnippets();
  extractHonoSnippets();
  extractThymeleafSnippets();
  extractQuteSnippets();

}

main();
