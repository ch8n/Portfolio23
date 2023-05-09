<script>
  import DiscTextList from "../primitives/DiscTextList.svelte";
  import NormalText from "../primitives/NormalText.svelte";
  import Title from "../primitives/Title.svelte";
  export let sections = [
    {
      label: "Top ^",
      id: "Top ^",
    },
    {
      label: "Resume 🔖",
      id: "Resume",
    },
    {
      label: "Highlights 🔦",
      id: "Highlights",
    },
    {
      label: "Contact 📞",
      id: "Contact",
    },
    {
      label: "Connect 🌎",
      id: "Connect",
    },
    {
      label: "Work Experience ☕",
      id: "Work Experience",
    },
    {
      label: "Qualification 🎓",
      id: "Qualification",
    },
    {
      label: "Awards 🏆",
      id: "Awards",
    },
    {
      label: "Blogs 💻",
      id: "Blogs",
    },
    {
      label: "Testimonials 💐",
      id: "Testimonials",
    },
    {
      label: "About Website 📜",
      id: "About Website",
    },
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
          href={`#${section.id}`}
          on:click={(e) => {
            handleAnchorClick(e, section.id);
          }}
        >
          {section.label}
        </a>
      </li>
    {:else}
      <li><NormalText content="Woops! Nothing to see here..." /></li>
    {/each}
  </ul>
</div>

<style>
</style>
