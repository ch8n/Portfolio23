<script lang="ts">
	import type { ContributionButton } from '$lib/data/types'

	export let button: ContributionButton
	export let onClick: () => void

	function handleClick() {
		onClick()
	}
</script>

<div
	class={`${button.textColor} left-20 overflow-clip w-4/5 p-8 bg-opacity-95 rounded-tr-[36px] rounded-bl-[36px] rounded-br-[36px] drop-shadow-lg ${button.bgColor} border`}
	on:click|preventDefault={handleClick}
>
	<div class="flex flex-row items-center">
		<div class="">
			<div class="rounded-full drop-shadow-lg">
				<div class="text-5xl">{button.iconEmoji}</div>
			</div>
		</div>

		<div class="mx-8">
			<p class={`text-2xl font-semibold pt-2`}>
				{button.label}
			</p>
			<p class={`text-sm pt-2`}>
				{button.description}
			</p>
		</div>
	</div>
</div>
