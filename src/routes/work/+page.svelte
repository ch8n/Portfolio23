<script lang="ts">
	import type { PageData } from './$types'
	import { goto } from '$app/navigation'

	export let data: PageData
	let experiences = data.experiences

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
	<div class="absolute divide-x-2 divide-green-500" />

	{#each experiences as experience}
		<div class="grid grid-cols-2 h-44">
			<div class="col-span-1 relative">
				<div class="flex z-10 absolute top-16 left-8">
					<p class="place-self-center font-semibold px-2">2020</p>

					<div
						class={`w-12 h-12 ${experience.style.bg_color} rounded-full bottom-0 drop-shadow-lg`}
					>
						<img src={`./assets/${experience.style.icon_path}`} alt={experience.company} />
					</div>
				</div>

				<div class="absolute z-0 left-28 -ml-0.5 w-0.5 h-screen bg-gray-600" />
			</div>

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
