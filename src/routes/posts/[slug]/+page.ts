import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load = (async ({ params }) => {
	try {
		console.log(params)
		const blog = await import(`../../../lib/blogs/${params.slug}.md`)
		const data = {
			content: blog.default,
			meta: blog.metadata
		}
		console.log(data)
		return data
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}) satisfies PageLoad
