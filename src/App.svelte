<script>
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
  <div class="grid grid-cols-3">
    <div class="col-span-1 max-w-xs">
      <div class="mt-24 ms-4 fixed">
        <Content />
      </div>
    </div>
    <div class="col-span-2 pe-24">
      <Spacer />
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
      <Spacer />
      <Spacer />
    </div>
  </div>
</main>

<style>
</style>
