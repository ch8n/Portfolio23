<script lang="ts">
	import type { PageData } from './$types'
	import type { Blog } from '$lib/data/types'
	import { formatDate } from '$lib/data/utils'

	export let data: PageData
	const blogs: Blog[] = data.blogs || []
</script>

<div>
	<section class="container mx-auto">
		<ul class="list-none">
			{#each blogs as post}
				<li class="border-2 rounded-xl p-4 mb-8">
					<a href={post.slug} class="text-3xl">{post.title}</a>
					<p class="text-base">{post.description}</p>
					<p class="text-sm">{formatDate(post.date)}</p>
				</li>
			{/each}
		</ul>
	</section>
</div>
