import adapter from '@sveltejs/adapter-cloudflare';
// import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	vitePlugin: {
		inspector: true,
	},

	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			// routes: {
			// 	include: ['/*'],
			// 	exclude: ['<all>']
			// }
		}),
		prerender: {
			entries: ['*', '/sitemap.xml'],
		},
	}
};

export default config;
