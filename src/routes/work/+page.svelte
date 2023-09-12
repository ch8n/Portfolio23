<script lang="ts">
	let screenName = 'Work Page'
	import { onDestroy, onMount } from 'svelte'
	onMount(() => console.log(`On Mount called! @ ${screenName}`))
	onDestroy(() => console.log(`On Destory called! @ ${screenName}`))
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/work">Work Experience</a>
		</li>
	</ul>
</nav>

<p class="text-3xl">Work Page</p>
