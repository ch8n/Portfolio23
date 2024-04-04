import github from '$lib/assets/github.json'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	return {
		bugs: github.bugs,
		features: github.features
	}
}) satisfies PageServerLoad
