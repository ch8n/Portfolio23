<script lang="ts">
	import { goto } from '$app/navigation'

	const gotoAwards = () => {
		goto('/awards')
	}
</script>

<div class="p-12">
	<div class="text-white text-3xl font-semibold" on:click={gotoAwards}>Awards 🏆</div>

	<p class="px-4 my-4 text-white text-sm font-normal">
		You can see list of Awards I have won over my contibution in the communities and participation
		into various challenges and events from
		<span class="text-teal-300 text-sm font-semibold" on:click={gotoAwards}>here</span>
	</p>
</div>
