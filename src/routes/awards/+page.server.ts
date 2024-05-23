import awards from '$lib/assets/awards.json'
import home from '$lib/assets/home.json'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	return {
		highlight: home.highlights,
		...awards
	}
}) satisfies PageServerLoad
