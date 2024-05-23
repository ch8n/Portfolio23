<script lang="ts">
	import '../app.css'
	import { toolbarItems } from '$lib/data/types'
	import { page } from '$app/stores'
	import Header from '$lib/components/Header.svelte'
	$: first = toolbarItems.find((item) => item.path === $page.route.id) || toolbarItems[0]
	$: others = toolbarItems.filter((item) => item.path !== first?.path)
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

