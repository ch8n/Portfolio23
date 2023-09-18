<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
	let experiences = data.experience
</script>

<div class="p-1" />

<div class="grid grid-flow-col grid-rows-4 gap-4">
	{#each experiences as experience}
		<div class="p-8">
			<p>{experience.designation}</p>
			<p>{experience.company}</p>
			<p>{experience.company_type}</p>
			<p>{experience.location}</p>
			<p>{experience.duration}</p>
			<p>{experience.type}</p>
		</div>
	{/each}
</div>
