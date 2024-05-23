import type { Series } from '$lib/data/types'
import type { PageLoad } from './$types'
import home from '$lib/assets/home.json'

export const load = (async () => {
	try {
		const response = await fetch('api/blogs')
		const series: Series[] = await response.json()
		console.log(series)
		return {
			highlights: home.highlights,
			series
		}
	} catch (error) {
		console.error(error)
		return {
			highlights: home.highlights,
			series: []
		}
	}
}) satisfies PageLoad
