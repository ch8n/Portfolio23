<script lang="ts">
	import '../app.css'
	import { toolbarItems } from '$lib/data/types'
	import { page } from '$app/stores'
	$: first = toolbarItems.find((item) => item.path === $page.route.id) || toolbarItems[0]
	$: others = toolbarItems.filter((item) => item.path !== first?.path)
</script>

<nav class="container px-24 mx-auto my-24">
	<ul class="grid items-center h-10 grid-cols-2 grid-rows-1">
		<li>
			<span class="text-black text-5xl font-semibold font-['Poppins']">
				<a href={first.path.toString()}>{first.label}</a>
			</span>
		</li>

		<ul class="grid items-center text-center h-12 grid-cols-4 grid-rows-1">
			{#each others as item}
				<span class="text-black text-md font-normal font-['Poppins']">
					<li class="">
						<a href={item.path.toString()}>{item.label}</a>
					</li>
				</span>
			{/each}
		</ul>
	</ul>
</nav>

<main class="container px-24 mx-auto my-24">
	<slot />
</main>

<style lang="postcss">
	:global() {
	}
</style>
