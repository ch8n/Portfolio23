import github from '$lib/assets/github.json'
import home from '$lib/assets/home.json'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	return {
		highlights:home.highlights,
		bugs: github.bugs,
		features: github.features
	}
}) satisfies PageServerLoad
