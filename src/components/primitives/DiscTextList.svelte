<script>
  import BodyText1 from "./BodyText1.svelte";
  export let textList = [];
</script>

<div class="flex mt-2 ms-8">
  <ul class="list-disc">
    {#each textList as text}
      <li><BodyText1 content={text} /></li>
    {:else}
      <li><BodyText1 content="Woops! Nothing to see here..." /></li>
    {/each}
  </ul>
</div>

<style>
</style>
