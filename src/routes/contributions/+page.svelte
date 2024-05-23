<script lang="ts">
	import { goto } from '$app/navigation'
	import Highlight from '$lib/components/home/Highlight.svelte'
	import type { PageData } from './$types'
	import type { ContributionButton } from '$lib/data/types'
	import ContributionButtonUI from '$lib/components/contributions/ContributionButton.svelte'
	export let data: PageData

	type ContributionNavigation = {
		[id: string]: string
	}

	let navigation: ContributionNavigation = {
		blog: '/contributions/blogs',
		projects: '/contributions/projects',
		github: '/contributions/github'
	}

	let buttons: ContributionButton[] = [
		{
			id: 'blog',
			iconEmoji: '📝',
			label: 'Blogs',
			description: 'My written Blogs and Articles',
			bgColor: 'bg-gray-500',
			textColor: 'text-white'
		},
		{
			id: 'github',
			iconEmoji: '👷',
			label: 'Github Contributions',
			description: 'Contributions on github - Bugs, PRs',
			bgColor: 'bg-yellow-500',
			textColor: 'text-black'
		},
		{
			id: 'projects',
			iconEmoji: '🧪',
			label: 'Projects',
			description: 'My Personal Projects',
			bgColor: 'bg-green-500',
			textColor: 'text-white'
		}
	]

	const navigateTo = (button: ContributionButton) => {
		goto(navigation[button.id])
	}
</script>

<div>
	<!-- header -->
	<Highlight highlights={data.highlights} />

	<div>
		<p class="text-4xl">Contributions 🤝🌍</p>
		<p class="text-base ms-2">list of bugfixes, video, blogs etc</p>
	</div>

	<div class="mt-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6">
			{#each buttons as button}
				<ContributionButtonUI
					{button}
					onClick={() => {
						navigateTo(button)
					}}
				/>
			{/each}
		</div>
	</div>
</div>
