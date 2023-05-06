<script>
  import Fa from "svelte-fa";
  import CaptionText from "./CaptionText.svelte";
  export let faIcon;
  export let label;
  export let href;
</script>

<div>
  <a {href} target="_blank">
    <div class="grid justify-items-center">
      <Fa icon={faIcon} size="2x" />
      <CaptionText content={label} />
    </div>
  </a>
</div>
