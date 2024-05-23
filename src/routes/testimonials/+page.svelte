<script lang="ts">
	import Highlight from '$lib/components/home/Highlight.svelte';
	import type { PageData } from './$types'
	export let data: PageData
</script>

<div>
	<!-- header -->
	<Highlight highlights={data.highlights}/>

	<p class="text-5xl">Testimonials 💐 Page</p>
	<p class="text-8xl">COMING SOON... </p>
</div>
