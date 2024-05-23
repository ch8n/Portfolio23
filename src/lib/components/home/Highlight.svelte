<script lang="ts">
	export let highlights: string[]
	import devImage from "$lib/assets/images/dev_pic.svg";
</script>

<!-- <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 pt-8">
	<img class={`col-span-1 mx-auto place-self-center`} src={`./assets/dev_pic.svg`} alt="" />

	<ul class={`lg:col-span-5 md:col-span-3 sm:grid-cols-1 ms-8 p-8 text-xl list-disc`}>
		{#each highlights as highlight}
			<li>{highlight}</li>
		{/each}
	</ul>
</div> -->

<div class="flex flex-col md:flex-row items-center">
	<!-- Image -->
	<img
		class="w-full md:w-auto mb-4 md:mb-0 md:mx-4"
		src={devImage}
		alt="Developer Pic"
	/>

	<!-- List -->
	<ul class="text-xl list-disc">
		{#each highlights as highlight}
			<li>{highlight}</li>
		{/each}
	</ul>
</div>
