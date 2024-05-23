<script lang="ts">
	import Highlight from '$lib/components/home/Highlight.svelte'
	import type { GithubContribution } from '$lib/data/types'
	import type { PageData } from './$types'
	export let data: PageData
	let projects: GithubContribution[] = data.projects
		.map((it) => {
			return it as GithubContribution
		})
		.reverse()

	let textColor = 'text-white'
	let bgColor = 'bg-green-500'
</script>

<div>
	<!-- header -->
	<Highlight highlights={data.highlights} />

	<div>
		<p class="text-3xl">Projects 🧪</p>
		<p class="text-base">Some of my personal projects...</p>
	</div>

	<div>
		<div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-6 mt-8">
			{#each projects as project, i}
				<a href={project.link} target="_blank">
					<div
						class={`${textColor} overflow-clip w-full md:w-full sm:w-80 h-56 bg-opacity-95 p-6 rounded-tr-[36px] rounded-bl-[36px] rounded-br-[36px] drop-shadow-lg ${bgColor} border`}
					>
						<p class={`text-3xl font-semibold pt-2 line-clamp-1`}>{i + 1}. {project.title}</p>
						<p class={`pl-6 text-xl pt-2 line-clamp-1`}>Project : {project.type} 🧪</p>
						<p class={`pl-6 text-sm pt-2 line-clamp-3`}>{project.description}</p>
						<p class={`pl-6 text-sm pt-2 line-clamp-1`}>{project.tech}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.line-clamp-1 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
