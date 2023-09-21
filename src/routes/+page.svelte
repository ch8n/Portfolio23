<script lang="ts">
	import type { PageData } from './$types'
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
	export let data: PageData
	let socialMedia: {
		icon: IconDefinition
		url: string
		name: string
	}[] = [
		{ icon: faTelegram, url: data.telegram, name: 'Telegram' },
		{ icon: faLinkedin, url: data.linkedIn, name: 'LinkedIn' },
		{ icon: faTwitter, url: data.twitter, name: 'Twitter' },
		{ icon: faGithub, url: data.github, name: 'Github' },
		{ icon: faMedium, url: data.medium, name: 'Medium' },
		{ icon: faStackOverflow, url: data.stackoverflow, name: 'StackOverFlow' },
		{ icon: faYoutube, url: data.youtube, name: 'Youtube' },
		{ icon: faDiscord, url: data.discord, name: 'Discord' }
	]

	let qualification = data.education
</script>

<div class="p-4">
	<!-- header -->
	<div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 pt-8">
		<img class={`col-span-1 mx-auto place-self-center`} src={`./assets/dev_pic.svg`} alt="" />

		<ul class={`lg:col-span-5 md:col-span-3 sm:grid-cols-1 ms-8 p-8 text-xl list-disc`}>
			<li>I’m <span class="font-semibold">Senior Software Engineer (Android)</span> from India</li>
			<li>Currently working <span class="font-semibold">@Housing.com</span></li>
			<li>Having <span class="font-semibold">5+ Years of experience</span></li>
			<li><span class="font-semibold">Android development with Kotlin and Java</span></li>
			<li>
				Core team member @ <span class="font-semibold">Kotlin Mumbai</span> &
				<span class="font-semibold">The Code Monk</span>
			</li>
			<li>
				Technical Blogger @ <span class="font-semibold">Ex-Draft.dev</span>, Personally @
				<span class="font-semibold">chetangupta.net</span>
				and <span class="font-semibold">Medium</span>
			</li>
		</ul>
	</div>

	<!-- main content -->
	<div class="mx-auto">
		<!-- Resume -->
		<div class="mt-8">
			<a class="text-3xl font-semibold" href={data.resume} target="_blank">Resume 🔖</a>

			<p class="px-4 my-4 text-white text-base font-normal">
				Download my resume from
				<span class="text-teal-300 text-base font-semibold">
					<a href={data.resume} target="_blank">here</a>
				</span>
			</p>
		</div>

		<!-- Contact -->
		<div class="mt-8">
			<a class="text-3xl font-semibold" href={data.email_cta} target="_blank">Contact 📞</a>

			<p class="px-4 my-4 text-white text-base font-normal">
				You can connect with me through
				<span class="text-teal-300 text-base font-semibold">
					<a href={data.telegram} target="_blank">Telegram @ChetanGupta</a>
				</span>
				or Write email
				<span class="text-teal-300 text-base font-semibold">
					<a href={data.email_cta} target="_blank">@{data.email}</a>
				</span>
			</p>
		</div>

		<!-- Connect -->
		<div class="mt-8">
			<a class="text-3xl font-semibold" href={data.telegram} target="_blank">Connect 🌎</a>

			<p class="px-4 my-4 text-white text-base font-normal">
				You can follow me on social media on :
			</p>
			<div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
				{#each socialMedia as social}
					<div class="grid p-2">
						<a class="place-self-center" href={social.url} target="_blank">
							<Fa size="2x" icon={social.icon} />
						</a>
						<p class="m-2 place-self-center">{social.name}</p>
					</div>
				{/each}
			</div>
		</div>

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
				<span class="text-teal-300 text-lg font-semibold"><a href="/blogs">here</a></span>
				and If you want to see my personal projects click
				<span class="text-teal-300 text-base font-semibold"><a href="/projects">here</a></span>. If
				you want to see where I have been featured, check my awards sections
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
