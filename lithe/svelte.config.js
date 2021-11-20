import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: '../svelteBuild',
			assets: '../svelteBuild',
			fallback: null
		}),
		/*
		vite: {
			ssr: {
				include: ['@smui'],
			},
		}
		*/
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	],

};
