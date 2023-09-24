import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.resolve(fileURLToPath(import.meta.url), '../')
const defaultLayout = path.join(dirname, './src/lib/layouts/blog.svelte')
const codelabLayout = path.join(dirname, './src/lib/layouts/blog.svelte')

const config = defineConfig({
	extensions: ['.md', '.svx'],
    smartypants: true,
	layout: {
		default: defaultLayout,
		codelab: codelabLayout
	}
})

export default config
