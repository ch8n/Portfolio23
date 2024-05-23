<script lang="ts">
	import type { Award } from '$lib/data/types'

	export let award: Award
</script>

<div
	class="text-white left-20 overflow-clip w-4/5 p-8 bg-opacity-95 rounded-tr-[36px] rounded-bl-[36px] rounded-br-[36px] drop-shadow-lg bg-violet-500 border"
>
	<div class="flex flex-col md:flex-row items-center">
		<div class="">
			<div class="rounded-full drop-shadow-lg">
				<div class="text-4xl sm:text-8xl">🏆</div>
			</div>
		</div>

		<div class="mx-14">
			<a href={award.proof_link} target="_blank">
				<p class={`text-xl sm:text-3xl font-semibold pt-2`}>
					{award.title}
				</p>
				<p class={`text-lg sm:text-xl pt-2`}>
					{award.organization} ({award.type})
				</p>
				<p class={`text-sm pt-2`}>
					{award.description}
					{award.time}
				</p>
			</a>
		</div>
	</div>
</div>
