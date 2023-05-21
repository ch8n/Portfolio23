<script>
  import introImg from "../../assets/intro.png";
  import introImgSm from "../../assets/intro-sm.png";
  let screenWidth = 0;

  const getIntroImage = (screenWidth) => {
    if (screenWidth < 640) {
      return introImgSm;
    } else {
      return introImg;
    }
  };
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div id="Top ^" class="flex-col container mx-auto">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img
    class="aspect-auto"
    src={getIntroImage(screenWidth)}
    alt="background image"
  />

  <p class="text-md py-auto px-4 font-light text-center">
    I’m a senior software Engineer from India. Currently working at Housing.com.
    Having 5+ Years of experince in Android development with Kotlin and Java.
    Enthusiast about open source and Mobile technology and want to explore all
    opportunity around them. Core team member of Kotlin Mumbai and The Code
    Monk. Technical Blogger at Draft.dev and Personally write blogs at
    chetangupta.net and Medium
  </p>
</div>

<style>
</style>
