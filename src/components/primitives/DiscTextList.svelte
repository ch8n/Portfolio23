<script>
  import NormalText from "./NormalText.svelte";
  export let textList = [];
</script>

<div class="flex mt-2 ms-8">
  <ul class="list-disc">
    {#each textList as text}
      <li><NormalText content={text} /></li>
    {:else}
      <li><NormalText content="Woops! Nothing to see here..." /></li>
    {/each}
  </ul>
</div>

<style>
</style>
