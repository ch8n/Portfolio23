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
				<a href={`/posts/${post.slug}`}>
					<li class="border-2 rounded-xl p-4 mb-8">
						<a class="text-3xl my-2">{post.title}</a>
						<p class="text-base my-2">{post.description}</p>
						<p class="text-sm my-2">{formatDate(post.date)}</p>
					</li>
				</a>
			{/each}
		</ul>
	</section>
</div>
