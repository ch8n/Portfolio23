<script lang="ts">
	import type { PageData } from './$types'
	import Highlight from '$lib/components/home/Highlight.svelte'
	// import type { Blog, Series } from '$lib/data/types'
	// import { formatDate } from '$lib/data/utils'
	// import { onMount } from 'svelte'
	export let data: PageData
    // let series = data.series as Series[]
</script>


<!-- <div>
	<section class="container mx-auto">
		<ul class="list-none">
			{#each series as post}
				<a href={`/posts/${post.metadata.slug}`}>
					<li class="border-2 rounded-xl p-4 mb-8">
						<a class="text-3xl my-2">{post.metadata.title}</a>
						<p class="text-base my-2">{post.metadata.description}</p>
						<p class="text-sm my-2">{formatDate(post.metadata.date)}</p>
					</li>
				</a>
			{/each}
		</ul>
	</section>
</div> -->

<div>
	<!-- header -->
	<Highlight highlights={data.highlights}/>

	<p class="text-5xl">Blogs 📝</p>
	<p class="text-8xl">COMING SOON... </p>
</div>