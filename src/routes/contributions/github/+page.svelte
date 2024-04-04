<script lang="ts">
	import type { GithubContribution } from '$lib/data/types'
	import type { PageData } from './$types'
	export let data: PageData
	let github = [...data.bugs, ...data.features]
	let contributions: GithubContribution[] = github
		.map((it) => {
			return it as GithubContribution
		})
		.reverse()
</script>

<div>
	<!-- header -->

	<div>
		<ul class="list-none grid items-center h-auto gap-5 grid-cols-2 grid-rows-1">
			{#each contributions as contribution, i}
				<a href={contribution.link} target="_blank">
					<div class={`border p-4 rounded-xl my-4`}>
						<p class={`text-3xl font-semibold pt-2`}>{i + 1}. {contribution.title}</p>
						<p class={`pl-6 text-xl pt-2`}>Bugfixes : {contribution.type}</p>
						<p class={`pl-6 text-sm pt-2`}>{contribution.description}</p>
						<p class={`pl-6 text-sm pt-2`}>{contribution.tech}</p>
					</div>
				</a>
			{/each}
		</ul>
	</div>
</div>
