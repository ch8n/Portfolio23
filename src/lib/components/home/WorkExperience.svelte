<script lang="ts">
	import BaseLink from '$lib/components/BaseLink.svelte'
	export let linkedIn: string
</script>

<div class="mt-8">
	<BaseLink link="/work">
		<p class="text-3xl font-semibold">Work Experience ☕️</p>
	</BaseLink>

	<p class="px-4 my-4 text-white text-base font-normal">
		Read more details about my past jobs from
		<span class="text-teal-300 text-base font-semibold"><BaseLink link="/work">here</BaseLink></span
		>, if you are interested to look into my community contributions click
		<span class="text-teal-300 text-lg font-semibold"
			><BaseLink link="/contributions">here</BaseLink></span
		>. If you want to see where I have been featured, check my awards sections
		<span class="text-teal-300 text-base font-semibold"
			><BaseLink link="/awards">here</BaseLink></span
		>. for more connect with me via
		<span class="text-teal-300 text-base font-semibold">
			<a href={linkedIn} target="_blank">LinkedIn</a>
		</span>, for more.
	</p>
</div>
