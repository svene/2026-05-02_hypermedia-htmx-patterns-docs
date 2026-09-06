# Documentation for 2025-08-23_ssfe-patterns-jte-vc-htmx

An [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/)
site that documents the hypermedia / htmx variant projects. The prose is written
by hand; every **code sample is extracted from the real variant source** via
`docs:start` / `docs:end` tag markers, so the docs cannot drift from the code.

Despite the folder name it is not limited to the JTE-VC variant: it currently
also covers the Hono variant, and the sidebar is scaffolded for Thymeleaf, the
JSX / Spring-Hono line and the two Graal-JSX demos. The intent is to grow
snippets from more variants over time.

## Usage

Prerequisites: Node 20+ (developed on Node 26).

````bash
npm install                # once
npm run extract-snippets   # pull code samples from the variant sources
npm run dev                # Starlight dev server on http://localhost:4321
````

Then open <http://localhost:4321/> — e.g. <http://localhost:4321/guides/example/>
— to see the live docs. The pages under `technologies/*` are the ones that embed
the extracted snippets.

The demo `<iframe>`s on those pages point at `http://localhost:3000/…`, i.e. the
documented variant's own dev server. Start that separately if you want the live
demos to load; the snippets and prose render fine without it.

## Dev cycle

1. Edit a variant's source. The source roots are the `srcRoot` paths in
   `extract-snippets/extract-jte-vc-snippets.js` and
   `extract-snippets/extract-hono-snippets.js` (currently
   `../../2025/2025-08-23_ssfe-patterns-jte-vc-htmx` and
   `../../2025/2025-12-27_ssfe-patterns-hono-htmx`). Keep the
   `docs:start <tag>` / `docs:end <tag>` markers around the region you want shown.
2. Re-run `npm run extract-snippets`. This rewrites `generated/snippets/**`
   (git-ignored).
3. The running `npm run dev` server hot-reloads the affected pages.

To add a new snippet: wrap the source region in markers, register it in the
matching `extract-*-snippets.js`, then `import` the generated `.mdx` from
`@snippets/…` in the relevant page under `src/content/docs/technologies/`.

## Notes

- `generated/` and `.astro/` are git-ignored and rebuilt by the steps above.
- `README_org.md` is the original Starlight starter-kit README, kept for
  reference.
- `npm run build` / `npm run preview` build and preview the static site.
