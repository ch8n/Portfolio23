<script lang="ts">
	import type { PageData } from './$types'
	import type { Award } from '$lib/data/types'

	export let data: PageData
	let awards = data.awards as Award[]
</script>

<div>
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

	<div class="ms-16 mt-8 text-white text-3xl font-semibold">Awards 🏆</div>

	<!-- content -->
	<div class="grid grid-rows-1 grid-cols-1 gap-6 pe-8">
		{#each awards as award}
			<div class="grid grid-cols-2">
				<!-- line -->
				<div class="col-span-1 relative">
					<div class="flex z-10 absolute top-16 left-8">
						<p class="place-self-center font-semibold px-2">{award.year}</p>

						<div class={`w-12 h-12 ${award.style.bg_color} rounded-full  drop-shadow-lg`}>
							<img src={`./assets/${award.style.icon_path}`} alt={award.organization} />
						</div>
					</div>

					<div class="absolute z-0 left-28 -ml-0.5 w-0.5 h-screen bg-white" />
				</div>

				<!-- content -->
				<div
					class={`col-span-2 start-20 place-self-center relative overflow-clip w-4/5 p-8 ${award.style.bg_color} bg-opacity-95 rounded-tr-[36px] rounded-bl-[36px] rounded-br-[36px] drop-shadow-lg`}
				>
					<div class="absolute right-1 top-5 w-64 h-64 rounded-full z-0">
						<img src={`./assets/${award.style.icon_path}`} alt={award.organization} />
					</div>

					<div class={`relative ${award.style.font_color}`}>
						<p class={`text-3xl font-semibold pt-2`}>
							{award.title}
						</p>
						<p class={`text-xl pt-2`}>
							{award.organization}
						</p>
						<p class={`text-sm pt-2`}>
							{award.description}
						</p>
						<p class={`text-sm pt-2`}>
							{award.time}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
