<script>
  import ClickableText from "../primitives/ClickableText.svelte";
  import Title from "../primitives/Title.svelte";
  export let awardsLink = "";
</script>

<div id="Awards">
  <Title content="Awards 🏆" />
  <div class="flex-col mt-2 ms-8">
    <p class="text-base font-normal">
      You can see list of Awards I have won over my contibution in the
      communities and participation into various challenges and events from
      <span>
        <ClickableText content="here" href={awardsLink} />
      </span>
    </p>
  </div>
</div>

<style>
</style>
