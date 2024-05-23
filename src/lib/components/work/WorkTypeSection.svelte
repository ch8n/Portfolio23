<script lang="ts">
	export let workTypeText: string
</script>

<div class="grid grid-cols-2">
	<div class={` w-3/4 col-span-2 left-20 relative`}>
		<p class={`text-3xl font-semibold py-4`}>{workTypeText}</p>
		<div class="border-t-2 border-white w-full"></div>
	</div>
</div>
