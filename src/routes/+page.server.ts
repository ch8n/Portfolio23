import type { PageServerLoad } from './$types';
import home from '$lib/assets/home.json'

export const load = (async () => {
    return {...home};
}) satisfies PageServerLoad;