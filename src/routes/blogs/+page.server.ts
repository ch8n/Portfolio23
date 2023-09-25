import type { Blog } from '$lib/data/types'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	try {
		const response = await fetch('http://localhost:5173/api/blogs')
		const blogs: Blog[] = await response.json()
		console.log(blogs)
		return { blogs }
	} catch (error) {
		console.error(error)
		return {}
	}
}) satisfies PageServerLoad
