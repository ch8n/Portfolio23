<script lang="ts">
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
</script>

<Header />

<div class="bg-gray-800 text-white">
	<main class="container mx-auto p-4">
		<slot />
	</main>
	<!-- space -->
	<div class="h-20" />
</div>


<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

