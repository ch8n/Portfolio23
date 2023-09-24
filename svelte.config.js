//import adapter from '@sveltejs/adapter-auto'
//import adapter from 'svelte-adapter-bun'
import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { importAssets } from 'svelte-preprocess-import-assets'
import adapter from '@sveltejs/adapter-static'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [importAssets(), vitePreprocess(), mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
}

export default config
