<script>
  import NormalText from "../primitives/NormalText.svelte";
  import ClickableText from "../primitives/ClickableText.svelte";
  import Title from "../primitives/Title.svelte";
</script>

<div id="Resume">
  <Title content="Resume 🔖" />
  <div class="flex mt-2 ms-8">
    <NormalText content="Download my resume from" />
    <ClickableText
      extClass="ps-1"
      content="here"
      href="https://docs.google.com/document/d/1bHpgOAj3KjnCL6r1q0ONzAgmiZhAY5gDCdY2B3Pc3bQ/edit?usp=sharing"
    />
  </div>
</div>

<style>
</style>
