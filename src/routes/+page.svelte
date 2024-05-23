<script lang="ts">
	import Testimonials from '$lib/components/home/Testimonials.svelte'
	import Qualification from '$lib/components/home/Qualification.svelte'
	import WorkExperience from '$lib/components/home/WorkExperience.svelte'
	import Awards from '$lib/components/home/Awards.svelte'
	import SocialConnect from '$lib/components/home/SocialConnect.svelte'
	import Contact from '$lib/components/home/Contact.svelte'
	import Highlight from '$lib/components/home/Highlight.svelte'
	import Resume from '$lib/components/home/Resume.svelte'

	import type { PageData } from './$types'
	import type { Education, SocialMedia } from '$lib/data/types'

	export let data: PageData

	let socialMedia: SocialMedia[] = [
		{ icon: 'telegram', url: data.telegram, name: 'Telegram' },
		{ icon: 'linkedin', url: data.linkedIn, name: 'LinkedIn' },
		{ icon: 'twitter', url: data.twitter, name: 'Twitter' },
		{ icon: 'github', url: data.github, name: 'Github' },
		{ icon: 'medium', url: data.medium, name: 'Medium' },
		{ icon: 'stackoverflow', url: data.stackoverflow, name: 'StackOverFlow' },
		{ icon: 'youtube', url: data.youtube, name: 'Youtube' },
		{ icon: 'discord', url: data.discord, name: 'Discord' }
	]

	let qualification = data.education as Education[]
	let highlights = data.highlights
</script>

<div class="p-4">
	<!-- header -->

	<Highlight {highlights} />

	<!-- main content -->
	<div class="mx-auto">
		<!-- Resume -->
		<Resume resumeLink={data.resume} />

		<!-- Contact -->
		<Contact email={data.email} emailCta={data.email_cta} telegram={data.telegram} />

		<!-- Connect -->
		<SocialConnect {socialMedia} />

		<!-- awards -->
		<Awards />

		<!-- Work experience -->
		<WorkExperience linkedIn={data.linkedIn} />

		<!-- qualifications -->
		<Qualification {qualification} />

		<!-- testimonials -->
		<Testimonials />
	</div>
</div>
