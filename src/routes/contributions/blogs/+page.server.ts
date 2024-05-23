import home from '$lib/assets/home.json'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	return {
		highlights:home.highlights,
	}
}) satisfies PageServerLoad
