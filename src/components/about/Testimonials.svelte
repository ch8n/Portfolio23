<script>
  import ClickableText from "../primitives/ClickableText.svelte";
  import Title from "../primitives/Title.svelte";
  export let testimonialsLink = "";
</script>

<div id="Testimonials">
  <Title content="Testimonials 💐" />
  <div class="flex-col mt-2 ms-8">
    <p class="text-base font-normal">
      I’m grateful to the community who spread kinds words about me, read or
      write one from
      <span>
        <ClickableText content="here" href={testimonialsLink} />
      </span>
    </p>
  </div>
</div>

<style>
</style>
