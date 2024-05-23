<script lang="ts">
	export let highlights: string[]
	import devImage from "$lib/assets/images/dev_pic.svg";
</script>

<div class="flex flex-col md:flex-row items-center mx-8">
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
