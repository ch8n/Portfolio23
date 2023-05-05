<script>
  export let content;
  export let href;
  export let extClass = "";
</script>

<a
  {href}
  class={`${extClass} text-base font-normal text-green-400 visited:text-emerald-500`}
  target="_blank"
>
  {content}
</a>
