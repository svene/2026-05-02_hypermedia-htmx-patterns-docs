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
				'@snippets': path.resolve(__dirname, './src/snippets'),
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
					label: 'Simple Pages',
					autogenerate: { directory: 'demos' },
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
