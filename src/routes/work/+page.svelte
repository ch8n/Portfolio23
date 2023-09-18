<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
	let experiences = data.experience
</script>

<div class="p-1" />

<div class="grid grid-flow-col grid-rows-4 gap-4">
	{#each experiences as experience}
		<div class="p-8">
			<p>Designation : {experience.designation}</p>
			<p>Company : {experience.company}</p>
			<p>Industry : {experience.industry}</p>
			<p>Location : {experience.location}</p>
			<p>Duration : {experience.duration}</p>
			<p>Type : {experience.type}</p>
		</div>
	{/each}
</div>
