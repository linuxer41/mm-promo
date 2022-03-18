// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter:adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),

		// prerender: {
		// 	// This can be false if you're using a fallback (i.e. SPA mode)
		// 	default: true
		// },
		// paths: {
		// 	base: '/mm-promo',
		// },
		// // If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// // For example, instead of '_app', use 'app_', 'internal', etc.
		// appDir: 'internal',
	}
};

export default config;
