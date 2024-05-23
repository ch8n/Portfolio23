<script lang="ts">
	import SocialConnect from '$lib/components/home/SocialConnect.svelte'

	import Contact from '$lib/components/home/Contact.svelte'
	import Highlight from '$lib/components/home/Highlight.svelte'
	import Resume from '$lib/components/home/Resume.svelte'

	import type { PageData } from './$types'
	import type { SocialMedia } from '$lib/data/types'

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

	let qualification = data.education
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
		<div class="mt-8">
			<a class="text-3xl font-semibold" href="/awards">Awards 🏆</a>

			<p class="px-4 my-4 text-white text-base font-normal">
				You can see list of Awards I have won over my contibution in the communities and
				participation into various challenges and events from
				<span class="text-teal-300 text-base font-semibold"><a href="/awards">here</a></span>
			</p>
		</div>

		<!-- Work experience -->
		<div class="mt-8">
			<a class="text-3xl font-semibold" href="/work">Work Experience ☕️</a>

			<p class="px-4 my-4 text-white text-base font-normal">
				Read more details about my past jobs from
				<span class="text-teal-300 text-base font-semibold"><a href="/work">here</a></span>, if you
				are interested to look into my community contributions click
				<span class="text-teal-300 text-lg font-semibold"><a href="/contributions">here</a></span>.
				If you want to see where I have been featured, check my awards sections
				<span class="text-teal-300 text-base font-semibold"><a href="/awards">here</a></span>. for
				more connect with me via
				<span class="text-teal-300 text-base font-semibold">
					<a href={data.linkedIn} target="_blank">LinkedIn</a>
				</span>, for more.
			</p>
		</div>

		<!-- qualifications -->
		<div class="mt-8">
			<a class="text-3xl font-semibold" href="">Qualification 🎓</a>

			<p class="px-4 my-4 text-white text-base font-normal">My College and Schooling Details:</p>
			<div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
				{#each qualification as qualify}
					<div class="px-8 py-4">
						<p class="text-lg font-semibold">{qualify.course}</p>
						<p class="text-sm font-normal">{qualify.school}</p>
						<p class="text-sm font-normal">
							<a href={qualify.marksheet}
								>Download Marksheet from
								<span class="text-teal-300 text-base font-semibold">here</span>
							</a>
						</p>
						<p class="text-sm font-normal">CGPA - {qualify.cgpa}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- testimonials -->
		<div class="mt-8">
			<a class="text-3xl font-semibold" href="">Testimonials 💐</a>

			<p class="px-4 my-4 text-white text-base font-normal">
				I’m ever greatful to the community who spread kinds words about me, read or write one from
				<span class="text-teal-300 text-base font-semibold"><a href="/testimonials">here</a></span>.
			</p>
		</div>
	</div>
</div>
