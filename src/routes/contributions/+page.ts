import type { Series } from '$lib/data/types'
import type { PageLoad } from './$types'

export const load = (async () => {
	try {
		const response = await fetch('api/blogs')
		const series: Series[] = await response.json()
		return { series }
	} catch (error) {
		console.error(error)
		return {
			series: []
		}
	}
}) satisfies PageLoad
