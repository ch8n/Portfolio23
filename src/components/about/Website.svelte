<script>
  import ClickableText from "../primitives/ClickableText.svelte";
  import DiscTextList from "../primitives/DiscTextList.svelte";
  import Title from "../primitives/Title.svelte";
  export let content = [
    "Build using Svelte.js",
    "All logos are open sourced and used under Creative Commons",
    "This is non-commerical website, contains ads for supporting hosting cost",
    "For Queries or Concerns about this site read Site policy",
  ];
</script>

<Title content="About Website 📜" />
<div class="flex-col mt-2 ms-8">
  <DiscTextList textList={content} />
</div>

<style>
</style>
