<script>
  import Fa from "svelte-fa";
  import CaptionText from "./CaptionText.svelte";
  export let faIcon;
  export let label;
  export let href;
</script>

<div>
  <a {href} target="_blank">
    <Fa icon={faIcon} size="2x" class="ms-2" />
    <CaptionText content={label} />
  </a>
</div>
