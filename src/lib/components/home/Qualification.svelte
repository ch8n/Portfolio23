<script lang="ts">
	import type { Education } from "$lib/data/types"

	export let qualification: Education[]
</script>

<div class="mt-8">
	<p class="text-3xl font-semibold">Qualification 🎓</p>

	<p class="px-4 my-4 text-white text-base font-normal">My College and Schooling Details:</p>
	<div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
		{#each qualification as qualify}
			<div class="px-8 py-4">
				<p class="text-lg font-semibold">{qualify.course}</p>
				<p class="text-sm font-normal">{qualify.school}</p>
				<p class="text-sm font-normal">
					<a href={qualify.marksheet}
						>Download Marksheet from
						<span class="text-teal-300 text-base font-semibold">here</span>
					</a>
				</p>
				<p class="text-sm font-normal">CGPA - {qualify.cgpa}</p>
			</div>
		{/each}
	</div>
</div>
