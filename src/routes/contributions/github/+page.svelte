<script lang="ts">
	import Highlight from '$lib/components/home/Highlight.svelte'
	import type { GithubContribution } from '$lib/data/types'
	import type { PageData } from './$types'
	export let data: PageData
	let github = [...data.bugs, ...data.features]
	let contributions: GithubContribution[] = github
		.map((it) => {
			return it as GithubContribution
		})
		.reverse()

	let textColor = 'text-black'
	let bgColor = 'bg-yellow-400'
</script>

<div>
	<!-- header -->
	<Highlight highlights={data.highlights} />

	<div>
		<p class="text-3xl">Github Contributions 👷</p>
		<p class="text-base">Some bugfixes, features and PRs I resolved for Community!</p>
	</div>

	<div>
		<div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-6 mt-8">
			{#each contributions as contribution, i}
				<a href={contribution.link} target="_blank">
					<div
						class={`${textColor} overflow-clip w-full md:w-full sm:w-80 h-56 bg-opacity-95 p-6 rounded-tr-[36px] rounded-bl-[36px] rounded-br-[36px] drop-shadow-lg ${bgColor} border`}
					>
						<p class={`text-3xl font-semibold pt-2 line-clamp-1`}>{i + 1}. {contribution.title}</p>
						<p class={`pl-6 text-xl pt-2 line-clamp-1`}>Project : {contribution.type} 🧪</p>
						<p class={`pl-6 text-sm pt-2 line-clamp-3`}>{contribution.description}</p>
						<p class={`pl-6 text-sm pt-2 line-clamp-1`}>{contribution.tech}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
