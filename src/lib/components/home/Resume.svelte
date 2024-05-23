<script lang="ts">
	export let resumeLink: string
</script>

<div class="mt-8">
	<a class="text-3xl font-semibold" href={resumeLink} target="_blank">Resume 🔖</a>

	<p class="px-4 my-4 text-white text-base font-normal">
		Download my resume from
		<span class="text-teal-300 text-base font-semibold">
			<a href={resumeLink} target="_blank">here</a>
		</span>
	</p>
</div>
