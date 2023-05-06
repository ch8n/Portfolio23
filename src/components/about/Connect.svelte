<script>
  import {
    faTwitter,
    faLinkedin,
    faGithub,
    faReddit,
    faMediumM,
    faStackOverflow,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
  import CaptionText from "../primitives/CaptionText.svelte";
  import Title from "../primitives/Title.svelte";
  import Spacer from "../primitives/Spacer.svelte";
  import LabeledIcon from "../primitives/LabeledIcon.svelte";
  export let socialLinks = [
    {
      name: "Twitter",
      icon: faTwitter,
      url: "https://twitter.com/Ch8n2",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/chetan-gupta-84528aaa/",
    },
    {
      name: "Github",
      icon: faGithub,
      url: "https://github.com/ch8n",
    },
    {
      name: "Medium",
      icon: faMediumM,
      url: "https://chetan-garg36.medium.com/",
    },
    {
      name: "Reddit",
      icon: faReddit,
      url: "",
    },
    {
      name: "StackOF",
      icon: faStackOverflow,
      url: "https://stackoverflow.com/users/6938847/chetan-gupta",
    },
    {
      name: "Youtube",
      icon: faYoutube,
      url: "https://www.youtube.com/channel/UCE1-fhT9eKljcxKqbNBvPBQ",
    },
  ];
</script>

<Title title="Connect  🌎" />
<div class="flex-col mt-2 ms-8">
  <CaptionText content="You can follow me on social media on :" />
  <Spacer />
  <ul class="flex">
    {#each socialLinks as social}
      <li class="ms-4">
        <LabeledIcon
          faIcon={social.icon}
          label={social.name}
          href={social.url}
        />
      </li>
    {:else}
      <li>Woops!.. Nothing to see here.</li>
    {/each}
  </ul>
</div>

<style>
</style>
