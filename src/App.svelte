<script>
  import MainIntro from "./components/about/MainIntro.svelte";

  import Awards from "./components/about/Awards.svelte";
  import Connect from "./components/about/Connect.svelte";
  import Contact from "./components/about/Contact.svelte";
  import Content from "./components/about/Content.svelte";
  import Highlights from "./components/about/Highlights.svelte";
  import Qualification from "./components/about/Qualification.svelte";
  import Resume from "./components/about/Resume.svelte";
  import Testimonials from "./components/about/Testimonials.svelte";
  import Website from "./components/about/Website.svelte";
  import WorkExperience from "./components/about/WorkExperience.svelte";
  import Spacer from "./components/primitives/Spacer.svelte";
</script>

<main>
  <div class="container mx-auto border">
    
    <div class="col-span-3 mt-24 mb-8 grid justify-items-center">
      <MainIntro />
    </div>

    <div class="invisible md:visible flex-col col-span-1 max-w-xs">
      <div class="mt-24 ms-4 sticky top-8">
        <Content />
      </div>
    </div>

    <div class="flex-col col-span-2 pe-24">
      <Spacer />
      <Resume />
      <Spacer />
      <Highlights />
      <Spacer />
      <Contact />
      <Spacer />
      <Connect />
      <Spacer />
      <WorkExperience />
      <Spacer />
      <Qualification />
      <Spacer />
      <Awards />
      <Spacer />
      <Testimonials />
      <Spacer />
      <Website />
      <div class="m-48" />
    </div>
  </div>
</main>

<style>
</style>
