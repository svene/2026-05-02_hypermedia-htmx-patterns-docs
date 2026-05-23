// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	vite: {
    	resolve: {
      		alias: {
				'@components': path.resolve(__dirname, './src/components'),
				'@snippets': path.resolve(__dirname, './generated/snippets'),
        		'@app': path.resolve('../../2025/2025-08-23_ssfe-patterns-jte-vc-htmx'),
      	},
    },
  },
	integrations: [
		starlight({
			title: 'Server Side Frontend Patterns - with plain JTE and ViewComponents',
			customCss: [
        		'./src/styles/custom.css',
      		],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Technologies',
					items: [
						{
							label: 'JTE',
							autogenerate: { directory: 'technologies/01_JTE' },
						},
						{
							label: 'Thymeleaf',
							autogenerate: { directory: 'technologies/02_Thymeleaf' },
						},
						{
							label: 'Hono JSX',
							autogenerate: { directory: 'technologies/03_Hono' },
						},
						{
							label: 'JSX with Spring & Hono',
							autogenerate: { directory: 'technologies/04_JsxSpringHono' },
						},
						{
							label: 'Embedded JSX: Spring',
							autogenerate: { directory: 'technologies/05_GraalJSXSpring' },
						},
						{
							label: 'Embedded JSX: Quarkus',
							autogenerate: { directory: 'technologies/06_GraalJSXQuarkus' },
						},
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
