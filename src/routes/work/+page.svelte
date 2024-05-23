<script lang="ts">
	import WorkListItem from '$lib/components/work/WorkListItem.svelte'
	import Highlight from '$lib/components/home/Highlight.svelte'
	import WorkTypeSection from '$lib/components/work/WorkTypeSection.svelte'
	import type { PageData } from './$types'
	import type { Experience } from '$lib/data/types'
	

	export let data: PageData
	let experiences: Experience[] = data.experiences as Experience[]

	let fullTimeExperiences: Experience[] = experiences.filter(
		(experience) => experience.type.toLowerCase() === 'full time'
	)
	let consultantExperiences: Experience[] = experiences.filter(
		(experience) => experience.type.toLowerCase() === 'consultant'
	)
	let internExperiences: Experience[] = experiences.filter(
		(experience) => experience.type.toLowerCase() === 'internship'
	)
</script>

<div>
	<!-- header -->
	<Highlight highlights={data.highlight} />

	<div class="ms-8 mt-8 mb-4 text-white text-3xl sm:text-4xl font-semibold">
		Work Experience ☕️
	</div>

	<!-- content -->
	<div class="grid grid-rows-1 grid-cols-1 gap-6 pe-8">
		<!-- separator -->
		<WorkTypeSection workTypeText={'Full Time'} />

		{#each fullTimeExperiences as experience}
			<WorkListItem {experience} />
		{/each}

		<!-- separator -->
		<WorkTypeSection workTypeText={'Consultant'} />

		{#each consultantExperiences as experience}
			<WorkListItem {experience} />
		{/each}

		<!-- separator -->
		<WorkTypeSection workTypeText={'Internship'} />

		{#each internExperiences as experience}
			<WorkListItem {experience} />
		{/each}
	</div>
</div>
