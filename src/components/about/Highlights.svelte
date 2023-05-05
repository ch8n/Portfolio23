<script>
  import DiscTextList from "../primitives/DiscTextList.svelte";
  import Title from "../primitives/Title.svelte";
  export let highlights = [
    "Senior Android Developer at housing.com, building digital realestate listing application for Proptiger",
    "Senior Android Developer at Dutshe Telekom Digital Lab, building OTT platform",
    "Core team member at Kotlin Mumbai, Organize and Host talks",
    "Core team member at the Code Monk, contribute and develop Open Source Project in Android & Kotlin",
    "Feature at Various newsletter and magazine, KotlinWeekly, AndroidWeekly, ProAndroidDev, DroidCon",
  ];
</script>

<Title title="Highlights 🔦" />
<div class="mt-2 ms-4">
  <DiscTextList textList={highlights} />
</div>

<style>
</style>
