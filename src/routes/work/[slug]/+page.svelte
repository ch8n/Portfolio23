<script lang="ts">
	import { page } from '$app/stores'
	
	
</script>

<div class="p-1" />

<!-- <p class="text-xl">
	Welcome to {page.params.slug}
</p> -->

<pre>
    {JSON.stringify($page, null, 2)}
</pre>
