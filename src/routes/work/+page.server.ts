import type { PageServerLoad } from './$types'
import work from '$lib/assets/work_exp.json'

export const load = (async () => {
	return {
		...work
	}
}) satisfies PageServerLoad
