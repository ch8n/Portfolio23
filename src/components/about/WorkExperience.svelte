<script>
  import ClickableText from "../primitives/ClickableText.svelte";
  import Title from "../primitives/Title.svelte";
  export let links = {
    workexp: "",
    communityContribution: "",
    projects: "",
    linkedIn: "https://www.linkedin.com/in/chetan-gupta-84528aaa/",
  };
</script>

<Title title="Work Experience ☕" />
<div class=" mt-2 ms-8">
  <p class="text-base font-normal">
    Read more details about my past jobs from
    <span>
      <ClickableText content="here" href={links.workexp} />
    </span>
    , if your interested to look into my community contributions click
    <span>
      <ClickableText content="here" href={links.communityContribution} />
    </span>
    and If you want to see my personal projects click
    <span>
      <ClickableText content="here" href={links.projects} />
    </span>
    If you want to see where I have been featured, visit my individual Post. It has
    feature section on it.
  </p>

  <p class="mt-2">
    For more stalk me via
    <span>
      <ClickableText content="LinkedIn" href={links.linkedIn} />
    </span>
  </p>
</div>

<style>
</style>
