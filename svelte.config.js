//import adapter from '@sveltejs/adapter-auto'
//import adapter from 'svelte-adapter-bun'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { importAssets } from 'svelte-preprocess-import-assets'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [importAssets(), vitePreprocess()],
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true,
			fallback: 'index.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
}

export default config
