<script lang="ts">
	import type { PageData } from './$types'
	import type { Award } from '$lib/data/types'
	import Highlight from '$lib/components/home/Highlight.svelte'
	import AwardsListItem from '$lib/components/awards/AwardsListItem.svelte'

	export let data: PageData
	let awards = data.awards as Award[]
</script>

<div>
	<!-- header -->
	<Highlight highlights={data.highlight} />

	<div class="ms-8 mt-8 mb-4 text-white text-3xl sm:text-4xl font-semibold">Awards 🏆</div>

	<!-- content -->
	<div class="grid grid-cols-1 place-items-center gap-6">
		{#each awards as award}
			<AwardsListItem {award} />
		{/each}
	</div>
</div>
