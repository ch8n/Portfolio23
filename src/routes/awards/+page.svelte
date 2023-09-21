<script lang="ts">
	import { page } from '$app/stores'
	import type { PageData } from './$types'
	let pageData = page as PageData
</script>

<div>
	<!-- header -->
	<div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 mt-4">
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

	<!-- content -->
	<div class="grid grid-rows-1 grid-cols-1 gap-6 pe-8">
		<pre>{JSON.stringify(pageData, null, 2)}</pre>
	</div>
</div>
