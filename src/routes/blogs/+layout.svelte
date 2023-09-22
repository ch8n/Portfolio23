<script lang="ts">
	import { goto } from '$app/navigation'
	import type { TabItem } from '$lib/data/types'
	import type { PageData } from './$types'
	export let data: PageData

	let selectedTab: TabItem | null = null

	const onTabSelect = (tab: TabItem) => {
		selectedTab = tab
		goto(tab.path)
	}

	let tabs: TabItem[] = [
		{
			path: '/blogs',
			label: 'Blogs'
		},
		{
			path: '/blogs/videos',
			label: 'Videos'
		},
		{
			path: '/blogs/contributions',
			label: 'Contributions'
		},
		{
			path: '/blogs/projects',
			label: 'Projects'
		}
	]
</script>

<div>
	<!-- header -->
	<div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 pt-8">
		<img class={`col-span-1 mx-auto place-self-center`} src={`./assets/dev_pic.svg`} alt="" />

		<ul class={`lg:col-span-5 md:col-span-3 sm:grid-cols-1 ms-8 p-8 text-xl list-disc`}>
			<li>I’m <span class="font-semibold">Senior Software Engineer (Android)</span> from India</li>
			<li>Currently working <span class="font-semibold">@Housing.com</span></li>
			<li>Having <span class="font-semibold">5+ Years of experience</span></li>
			<li><span class="font-semibold">Android development with Kotlin and Java</span></li>
			<li>
				Core team member @ <span class="font-semibold">Kotlin Mumbai</span> &
				<span class="font-semibold">The Code Monk</span>
			</li>
			<li>
				Technical Blogger @ <span class="font-semibold">Ex-Draft.dev</span>, Personally @
				<span class="font-semibold">chetangupta.net</span>
				and <span class="font-semibold">Medium</span>
			</li>
		</ul>
	</div>

	<div>
		<p class="text-5xl">Contributions 🤝🌍</p>
		<p class="text-base ms-2">list of bugfixes, video, blogs etc</p>
	</div>

	<div>
		<div class="mt-4 text-sm font-medium text-center text-gray-500 border-gray-200">
			<ul class="flex flex-wrap -mb-px">
				{#each tabs as tab}
					<li class="mr-2">
						{#if tab === selectedTab}
							<div
								class="inline-block p-4 text-blue-200 border-b-2 border-blue-200 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
								on:click={() => onTabSelect(tab)}
							>
								{tab.label}
							</div>
						{:else}
							<div
								class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
								on:click={() => onTabSelect(tab)}
							>
								{tab.label}
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</div>

		<div class="py-4" />
		<slot />
	</div>
</div>
