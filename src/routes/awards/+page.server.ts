import awards from '$lib/assets/awards.json'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	return {
		...awards
	}
}) satisfies PageServerLoad
