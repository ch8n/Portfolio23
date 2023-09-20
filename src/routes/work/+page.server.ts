import work from '$lib/assets/work_exp.json'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	return {
		...work
	}
}) satisfies PageServerLoad
