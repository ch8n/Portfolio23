<script>
  import CaptionText from "../primitives/CaptionText.svelte";
  import ClickableText from "../primitives/ClickableText.svelte";
  import NormalText from "../primitives/NormalText.svelte";
  import Subtitle from "../primitives/Subtitle.svelte";
  import Title from "../primitives/Title.svelte";
  export let qualifications = [
    {
      degree: "B.Tech - Computer Science",
      institute: "Apeejay Stya University",
      marksheetUrl:
        "https://drive.google.com/file/d/1oM7XH78voOrppzf4mTxpM-IsSAt1x9cs/view?usp=share_link",
      cgpa: "4.09/4.3",
    },
    {
      degree: "Class XII (High School)",
      institute: "DPS, Deep public School",
      marksheetUrl:
        "https://drive.google.com/file/d/1HjBhFAsQyjuOYjHbOdiGlDQ-fJm_8W22/view?usp=share_link",
      cgpa: "8.2/10",
    },
    {
      degree: "Class X (Mid-High School)",
      institute: "AES, Andra Education Society School",
      marksheetUrl:
        "https://drive.google.com/file/d/1C9cJuZHeEtjE3TyIEQDFliqR3VCgkV3i/view?usp=share_link",
      cgpa: "7.6/10",
    },
  ];
</script>

<Title content="Qualification 🎓" />
<div class=" mt-2 ms-8">
  <CaptionText content="My College and Schooling Details:" />
  <div class="mt-4">
    <ul class="grid grid-cols-3">
      {#each qualifications as qualification}
        <li>
          <div>
            <Subtitle content={qualification.degree} />
            <CaptionText content={qualification.institute} />
            <p class="text-sm font-extralight">
              Download Marksheet from
              <span>
                <ClickableText
                  content="here"
                  href={qualification.marksheetUrl}
                />
              </span>
            </p>
            <CaptionText content={`CGPA - ${qualification.cgpa}`} />
          </div>
        </li>
      {:else}
        <li>
          <NormalText content="Woops! Nothing to see here..." />
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
</style>
