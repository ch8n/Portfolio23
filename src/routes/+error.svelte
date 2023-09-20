<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="p-1" />

<h1 class="text-3xl">Woops!...</h1>

<div class="p-1" />

<p class="text-xl">Something Went Wrong</p>

<div class="p-1" />

<pre>
    {JSON.stringify($page, null, 2)}
</pre>
