<script lang="ts">
	import type { SocialMedia } from '$lib/data/types'
	import Fa from 'svelte-fa/src/fa.svelte'
	import {
		faTwitter,
		faLinkedin,
		type IconDefinition,
		faTelegram,
		faGithub,
		faMedium,
		faStackOverflow,
		faYoutube,
		faDiscord
	} from '@fortawesome/free-brands-svg-icons'

	export let socialMedia: SocialMedia[]

	const icons: { [key: string]: IconDefinition } = {
		telegram: faTelegram,
		linkedin: faLinkedin,
		twitter: faTwitter,
		github: faGithub,
		medium: faMedium,
		stackoverflow: faStackOverflow,
		youtube: faYoutube,
		discord: faDiscord
	}
</script>

<div class="mt-8">
	<a class="text-3xl font-semibold" href={socialMedia[0].url} target="_blank">Connect 🌎</a>

	<p class="px-4 my-4 text-white text-base font-normal">You can follow me on social media on :</p>
	<div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
		{#each socialMedia as social}
			<div class="grid p-2">
				<a class="place-self-center" href={social.url} target="_blank">
					<Fa size="2x" icon={icons[social.icon]} />
				</a>
				<p class="m-2 place-self-center">{social.name}</p>
			</div>
		{/each}
	</div>
</div>
