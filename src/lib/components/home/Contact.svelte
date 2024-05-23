<script lang="ts">
	export let email: string
	export let emailCta: string
	export let telegram: string
</script>

<div class="mt-8">
	<a class="text-3xl font-semibold" href={email} target="_blank">Contact 📞</a>

	<p class="px-4 my-4 text-white text-base font-normal">
		You can connect with me through
		<span class="text-teal-300 text-base font-semibold">
			<a href={telegram} target="_blank">Telegram @ChetanGupta</a>
		</span>
		or Write email
		<span class="text-teal-300 text-base font-semibold">
			<a href={emailCta} target="_blank">@{email}</a>
		</span>
	</p>
</div>
