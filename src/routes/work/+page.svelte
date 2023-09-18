<script lang="ts">
	import type { PageData } from './$types'
	import { goto } from '$app/navigation'

	export let data: PageData
	let experiences = data.experience

	const slugify = (input: string) =>
		input
			.toLowerCase()
			.replace(/[\s_]+/g, '-')
			.replace(/[^\w-]+/g, '')
			.replace(/--+/g, '-')

	const navigateWorkExp = (
		experience:
			| {
					designation: string
					company: string
					industry: string
					location: string
					duration: string
					type: string
			  }
			| {
					designation: string
					company: string
					industry: string
					location: string
					duration: number
					type: string
			  }
	) => {
		let slug = slugify(experience.company)
		goto(`/${slug}`)
	}
</script>

<div class="p-1" />

<div class="grid grid-flow-col grid-rows-4 gap-4">
	{#each experiences as experience}
		<div class="p-8" on:click={() => navigateWorkExp(experience)}>
			<p>Designation : {experience.designation}</p>
			<p>Company : {experience.company}</p>
			<p>Industry : {experience.industry}</p>
			<p>Location : {experience.location}</p>
			<p>Duration : {experience.duration}</p>
			<p>Type : {experience.type}</p>
		</div>
	{/each}
</div>
