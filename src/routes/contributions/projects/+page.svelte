<script lang="ts">
	import type { GithubContribution } from '$lib/data/types'
	import type { PageData } from './$types'
	export let data: PageData
	let projects: GithubContribution[] = data.projects
		.map((it) => {
			return it as GithubContribution
		})
		.reverse()
</script>

<div>
	<!-- header -->
	<div>
		<ul class="list-none grid items-center h-auto gap-5 grid-cols-2 grid-rows-1">
			{#each projects as project, i}
				<a href={project.link} target="_blank">
					<div class={`border p-4 rounded-xl my-4`}>
						<p class={`text-3xl font-semibold pt-2`}>{i + 1}. {project.title}</p>
						<p class={`pl-6 text-xl pt-2`}>Project : {project.type}</p>
						<p class={`pl-6 text-sm pt-2`}>{project.description}</p>
						<p class={`pl-6 text-sm pt-2`}>{project.tech}</p>
					</div>
				</a>
			{/each}
		</ul>
	</div>
</div>
