<script>
  import DiscTextList from "../primitives/DiscTextList.svelte";
  import NormalText from "../primitives/NormalText.svelte";
  import Title from "../primitives/Title.svelte";
  export let sections = [
    "Top ^",
    "Resume",
    "Highlights",
    "Contact",
    "Connect",
    "Work Experience",
    "Qualification",
    "Awards",
    "Testimonials",
    "About Website",
  ];
  function handleAnchorClick(event, section) {
    event.preventDefault();
    const anchor = document.getElementById(section);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: "smooth",
    });
  }
</script>

<Title content="Content 📒" />
<div class="flex-col mt-2 ms-4">
  <ul class="list-none">
    {#each sections as section}
      <li>
        <a
          class="text-sm font-extralight"
          href={`#${section}`}
          on:click={(e) => {
            handleAnchorClick(e, section);
          }}>{section}</a
        >
      </li>
    {:else}
      <li><NormalText content="Woops! Nothing to see here..." /></li>
    {/each}
  </ul>
</div>

<style>
</style>
