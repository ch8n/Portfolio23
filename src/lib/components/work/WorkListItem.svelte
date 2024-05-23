<script lang="ts">
	import type { Experience, ExperienceMap } from '$lib/data/types'
	import agbe_bg_icon from '$lib/assets/images/agbe_bg_icon.svg'
	import appsteet_bg_icon from '$lib/assets/images/appsteet_bg_icon.svg'
	import housing_bg_icon from '$lib/assets/images/housing_bg_icon.svg'
	import u2opia_bg_icon from '$lib/assets/images/u2opia_bg_icon.svg'
	import olly_bg_icon from '$lib/assets/images/olly_bg_icon.svg'
	import tsystem_bg_icon from '$lib/assets/images/tsystem_bg_icon.svg'
	import sehatq_bg_icon from '$lib/assets/images/sehatq_bg_icon.svg'
	import techimpact_bg_icon from '$lib/assets/images/techimpact_bg_icon.svg'
	import tata_bg_icon from '$lib/assets/images/tata_bg_icon.svg'
	import isst_bg_icon from '$lib/assets/images/isst_bg_icon.svg'

	export let experience: Experience

	const styles: ExperienceMap = {
		housing: {
			bg_color: 'bg-yellow-400',
			font_color: 'text-violet-700',
			icon_path: housing_bg_icon
		},
		deutsche: {
			bg_color: 'bg-pink-600',
			font_color: 'text-white',
			icon_path: tsystem_bg_icon
		},
		appstreet: {
			bg_color: 'bg-orange-500',
			font_color: 'text-zinc-800',
			icon_path: appsteet_bg_icon
		},
		u2opia: {
			bg_color: 'bg-purple-600',
			font_color: 'text-white',
			icon_path: u2opia_bg_icon
		},
		olly: {
			bg_color: 'bg-blue-800',
			font_color: 'text-white',
			icon_path: olly_bg_icon
		},
		deutsche_contract: {
			bg_color: 'bg-pink-600',
			font_color: 'text-white',
			icon_path: tsystem_bg_icon
		},
		sehat: {
			bg_color: 'bg-slate-500',
			font_color: 'text-white',
			icon_path: sehatq_bg_icon
		},
		tech4impact: {
			bg_color: 'bg-teal-500',
			font_color: 'text-white',
			icon_path: techimpact_bg_icon
		},
		agbe: {
			bg_color: 'bg-slate-400',
			font_color: 'text-white',
			icon_path: agbe_bg_icon
		},
		cmc: {
			bg_color: 'bg-blue-400',
			font_color: 'text-white',
			icon_path: tata_bg_icon
		},
		isst: {
			bg_color: 'bg-fuchsia-700',
			font_color: 'text-white',
			icon_path: isst_bg_icon
		}
	}
</script>

<div class="grid grid-cols-3">
	<div class="col-span-1 relative">
		<div class="absolute top-16 left-8">
			<div class={`w-12 h-12 ${styles[experience.id].bg_color} rounded-full drop-shadow-lg`}>
				<img src={styles[experience.id].icon_path} alt={experience.company} />
			</div>
		</div>
	</div>

	<!-- content -->
	<div
		class={`col-span-3 start-20 place-self-center relative overflow-clip w-4/5 p-8 ${
			styles[experience.id].bg_color
		} bg-opacity-95 rounded-tr-[36px] rounded-bl-[36px] rounded-br-[36px] drop-shadow-lg me-8`}
	>
		<div class="absolute right-1 top-5 w-64 h-64 rounded-full z-0">
			<img src={styles[experience.id].icon_path} alt={experience.company} />
		</div>

		<div class={`relative ${styles[experience.id].font_color}`}>
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
