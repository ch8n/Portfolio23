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

<div class="grid grid-rows-1 gap-6">
	{#each experiences as experience}
		<div
			class={`relative overflow-clip w-11/12 p-8 bg-[${experience.style.bg_hex}] bg-opacity-70 rounded-tr-[36px] rounded-bl-[36px] rounded-br-[36px] shadow`}
		>
			<div class="absolute right-1 top-10 w-64 h-64 rounded-full z-0">
				<img src={`./assets/${experience.style.icon_path}`} alt={experience.company} />
			</div>

			<div class="relative">
				<p class={`text-[${experience.style.font_hex}] text-3xl font-semibold`}>
					{experience.designation}
				</p>
				<p class={`text-[${experience.style.font_hex}] text-xl font-semibold pt-2`}>
					{experience.company} ({experience.industry})
				</p>
				<p class={`text-[${experience.style.font_hex}] text-sm font-semibold pt-2`}>
					{experience.location}
					{experience.duration}
				</p>
			</div>
		</div>
	{/each}
</div>
