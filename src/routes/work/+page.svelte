<script lang="ts">
	import type { PageData } from './$types'
	import { goto } from '$app/navigation'
	import type { Experience } from '$lib/data/types'

	export let data: PageData
	let experiences: Experience[] = data.experiences as Experience[]

	let fullTimeExperiences: Experience[] = []
	experiences.forEach((experience) => {
		if (experience.type.toLowerCase() === 'full time') {
			fullTimeExperiences.push(experience)
		}
	})

	let consultantExperiences: Experience[] = []
	experiences.forEach((experience) => {
		if (experience.type.toLowerCase() === 'consultant') {
			consultantExperiences.push(experience)
		}
	})

	let internExperiences: Experience[] = []
	experiences.forEach((experience) => {
		if (experience.type.toLowerCase() === 'internship') {
			internExperiences.push(experience)
		}
	})

	const slugify = (input: string) =>
		input
			.toLowerCase()
			.replace(/[\s_]+/g, '-')
			.replace(/[^\w-]+/g, '')
			.replace(/--+/g, '-')

	const navigateWorkExp = (experience: { company: string }) => {
		let slug = slugify(experience.company)
		goto(`/${slug}`)
	}
</script>

<div class="grid grid-rows-1 grid-cols-1 gap-6">
	<!-- separator -->
	<div class="grid grid-cols-2">
		<!-- line -->
		<div class="col-span-1 relative">
			<div class="z-10 absolute top-6 start-24">
				<div class={`ml-1 w-5 h-5 bg-black rounded-full drop-shadow-lg`} />
			</div>

			<div class="absolute z-0 left-28 -ml-0.5 w-0.5 h-screen bg-gray-600" />
		</div>

		<!-- content -->
		<div class={` w-3/4 col-span-2 start-20 place-self-center relative`}>
			<p class={`place-self-center text-3xl font-semibold py-4`}>Full Time</p>
		</div>
	</div>

	{#each fullTimeExperiences as experience}
		<div class="grid grid-cols-2">
			<!-- line -->
			<div class="col-span-1 relative">
				<div class="flex z-10 absolute top-16 left-8">
					<p class="place-self-center font-semibold px-2">2020</p>

					<div class={`w-12 h-12 ${experience.style.bg_color} rounded-full  drop-shadow-lg`}>
						<img src={`./assets/${experience.style.icon_path}`} alt={experience.company} />
					</div>
				</div>

				<div class="absolute z-0 left-28 -ml-0.5 w-0.5 h-screen bg-gray-600" />
			</div>

			<!-- content -->
			<div
				class={`col-span-2 start-20 place-self-center relative overflow-clip w-4/5 p-8  ${experience.style.bg_color} bg-opacity-95 rounded-tr-[36px] rounded-bl-[36px] rounded-br-[36px] drop-shadow-lg`}
			>
				<div class="absolute right-1 top-5 w-64 h-64 rounded-full z-0">
					<img src={`./assets/${experience.style.icon_path}`} alt={experience.company} />
				</div>

				<div class={`relative ${experience.style.font_color}`}>
					<p class={`text-3xl font-semibold pt-2`}>
						{experience.designation}
					</p>
					<p class={`text-xl pt-2`}>
						{experience.company} ({experience.industry})
					</p>
					<p class={`text-sm pt-2`}>
						{experience.location}
						{experience.duration}
					</p>
				</div>
			</div>
		</div>
	{/each}

	<!-- separator -->
	<div class="grid grid-cols-2">
		<!-- line -->
		<div class="col-span-1 relative">
			<div class="z-10 absolute top-6 start-24">
				<div class={`ml-1 w-5 h-5 bg-black rounded-full drop-shadow-lg`} />
			</div>
		</div>

		<!-- content -->
		<div class={` w-3/4 col-span-2 start-20 place-self-center relative`}>
			<p class={`place-self-center text-3xl font-semibold py-4`}>Consultant</p>
		</div>
	</div>

	{#each consultantExperiences as experience}
		<div class="grid grid-cols-2">
			<!-- line -->
			<div class="col-span-1 relative">
				<div class="flex z-10 absolute top-16 left-8">
					<p class="place-self-center font-semibold px-2">2020</p>

					<div class={`w-12 h-12 ${experience.style.bg_color} rounded-full  drop-shadow-lg`}>
						<img src={`./assets/${experience.style.icon_path}`} alt={experience.company} />
					</div>
				</div>

				<div class="absolute z-0 left-28 -ml-0.5 w-0.5 h-screen bg-gray-600" />
			</div>

			<!-- content -->
			<div
				class={`col-span-2 start-20 place-self-center relative overflow-clip w-4/5 p-8  ${experience.style.bg_color} bg-opacity-95 rounded-tr-[36px] rounded-bl-[36px] rounded-br-[36px] drop-shadow-lg`}
			>
				<div class="absolute right-1 top-5 w-64 h-64 rounded-full z-0">
					<img src={`./assets/${experience.style.icon_path}`} alt={experience.company} />
				</div>

				<div class={`relative ${experience.style.font_color}`}>
					<p class={`text-3xl font-semibold pt-2`}>
						{experience.designation}
					</p>
					<p class={`text-xl pt-2`}>
						{experience.company} ({experience.industry})
					</p>
					<p class={`text-sm pt-2`}>
						{experience.location}
						{experience.duration}
					</p>
				</div>
			</div>
		</div>
	{/each}

	<!-- separator -->
	<div class="grid grid-cols-2">
		<!-- line -->
		<div class="col-span-1 relative">
			<div class="z-10 absolute top-6 start-24">
				<div class={`ml-1 w-5 h-5 bg-black rounded-full drop-shadow-lg`} />
			</div>
		</div>

		<!-- content -->
		<div class={` w-3/4 col-span-2 start-20 place-self-center relative`}>
			<p class={`place-self-center text-3xl font-semibold py-4`}>Internship</p>
		</div>
	</div>

	{#each internExperiences as experience}
		<div class="grid grid-cols-2">
			<!-- line -->
			<div class="col-span-1 relative">
				<div class="flex z-10 absolute top-16 left-8">
					<p class="place-self-center font-semibold px-2">2020</p>

					<div class={`w-12 h-12 ${experience.style.bg_color} rounded-full  drop-shadow-lg`}>
						<img src={`./assets/${experience.style.icon_path}`} alt={experience.company} />
					</div>
				</div>

				<div class="absolute z-0 left-28 -ml-0.5 w-0.5 h-screen bg-gray-600" />
			</div>

			<!-- content -->
			<div
				class={`col-span-2 start-20 place-self-center relative overflow-clip w-4/5 p-8  ${experience.style.bg_color} bg-opacity-95 rounded-tr-[36px] rounded-bl-[36px] rounded-br-[36px] drop-shadow-lg`}
			>
				<div class="absolute right-1 top-5 w-64 h-64 rounded-full z-0">
					<img src={`./assets/${experience.style.icon_path}`} alt={experience.company} />
				</div>

				<div class={`relative ${experience.style.font_color}`}>
					<p class={`text-3xl font-semibold pt-2`}>
						{experience.designation}
					</p>
					<p class={`text-xl pt-2`}>
						{experience.company} ({experience.industry})
					</p>
					<p class={`text-sm pt-2`}>
						{experience.location}
						{experience.duration}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>
