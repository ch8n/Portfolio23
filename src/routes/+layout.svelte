<script lang="ts">
	import '../app.css'
	import { toolbarItems } from '$lib/data/types'
	import { page } from '$app/stores'
	$: first = toolbarItems.find((item) => item.path === $page.route.id) || toolbarItems[0]
	$: others = toolbarItems.filter((item) => item.path !== first?.path)
</script>

<div class="container bg-gray-800 text-white">
	<nav class=" mx-auto pt-16 px-8">
		<ul class="grid items-center h-10 grid-cols-2 grid-rows-1">
			<li>
				<span class="text-5xl font-semibold">
					<a href={first.path.toString()}>{first.label}</a>
				</span>
			</li>

			<ul
				class="grid items-center text-center h-12 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:grid-rows-1"
			>
				{#each others as item}
					<span class=" text-md">
						<li class="">
							<a href={item.path.toString()}>{item.label}</a>
						</li>
					</span>
				{/each}
			</ul>
		</ul>
	</nav>

	<main class="mx-auto p-4">
		<slot />
	</main>
</div>

<style lang="postcss">
	:global() {
	}
</style>
