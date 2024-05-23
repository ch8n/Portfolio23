<script>
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { derived } from 'svelte/store'

	let tabs = [
		{ name: 'Home', href: '/' },
		{ name: 'Awards', href: '/awards' },
		{ name: 'Work Experience', href: '/work-experience' },
		{ name: 'Contributions', href: '/contributions' }
	]

	// Derive the current page name based on the URL
	const currentPage = derived(page, ($page) => {
		const currentTab = tabs.find((tab) => tab.href === $page.url.pathname)
		return currentTab ? currentTab.name : ''
	})

	// Reactive statement to filter visible tabs
	$: filteredTabs = tabs.filter((tab) => tab.name !== $currentPage)

	// State to manage mobile menu visibility
	let mobileMenuOpen = false

	const navigateTo = (/** @type {string} */ href) => {
		goto(href)
		mobileMenuOpen = false // Close the menu when a tab is selected
	}

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen
	}
</script>

<div class="fixed top-0 w-full bg-gray-800 text-white shadow-md z-10">
	<div class="container mx-auto flex justify-between items-center py-4 px-6">

        <!-- mobile@ menu Icon -->
        <div class="lg:hidden">
			<button on:click={toggleMobileMenu} class="text-white">
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
		
        <!-- Selected tab -->
        <div class="text-2xl font-bold mx-auto lg:mx-0 lg:ml-0 lg:mr-auto">
			{$currentPage}
		</div>

        <!-- nav tabs -->
		<nav class="hidden lg:flex space-x-4">
			{#each filteredTabs as tab}
				<a
					href={tab.href}
					on:click|preventDefault={() => navigateTo(tab.href)}
					class="hover:text-gray-400"
				>
					{tab.name}
				</a>
			{/each}
		</nav>
	</div>

	<!-- @Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="lg:hidden bg-gray-800 text-white">
			{#each filteredTabs as tab}
				<a
					href={tab.href}
					on:click|preventDefault={() => navigateTo(tab.href)}
					class="block py-2 px-4 hover:bg-gray-700"
				>
					{tab.name}
				</a>
			{/each}
		</div>
	{/if}
</div>
