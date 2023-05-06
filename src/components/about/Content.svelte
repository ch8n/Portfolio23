<script>
  import DiscTextList from "../primitives/DiscTextList.svelte";
  import Title from "../primitives/Title.svelte";
  export let sections = [
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
</script>

<Title content="Content 📒" />
<div class="flex-col mt-2 ms-4">
  <DiscTextList textList={sections} />
</div>

<style>
</style>
