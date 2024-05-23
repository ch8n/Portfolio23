import work from '$lib/assets/work_exp.json'
import home from '$lib/assets/home.json'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	return {
		highlight: home.highlights,
		...work
	}
}) satisfies PageServerLoad
