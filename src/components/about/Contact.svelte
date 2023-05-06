<script>
  import ClickableText from "../primitives/ClickableText.svelte";
  import NormalText from "../primitives/NormalText.svelte";
  import Title from "../primitives/Title.svelte";
  export let contact = {
    telegram: "https://t.me/ch810",
    email: "dev.ch8n@gmail.com",
    emailComposeUrl:
      "https://mail.google.com/mail/u/0/?fs=1&to=dev.ch8n@gmail.com&body=Dear%20Chetan%21%2C%0AI%20hope%20this%20email%20finds%20you%20well.%20My%20name%20is%20%5BYour%20Name%5D%20and%20I%20am%20reaching%20out%20to%20you%20today%20because%20%5BReason%20for%20contact%5D.%0A%0AI%20came%20across%20your%20%5Bwebsite%2Fprofile%2Fsocial%20media%20page%5D%20and%20was%20impressed%20by%20%5Bspecific%20aspect%20that%20caught%20your%20attention%5D.%20I%20believe%20that%20our%20%5Bcommon%20interest%2Fsimilar%20background%2Fprofessional%20expertise%5D%20could%20make%20for%20an%20interesting%20collaboration%20and%20I%20would%20love%20to%20discuss%20this%20further%20with%20you.%0A%0APlease%20let%20me%20know%20if%20you%20have%20some%20time%20available%20in%20the%20next%20few%20days%20to%20chat.%20Looking%20forward%20to%20hearing%20back%20from%20you%20soon.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D&su=Reaching%20out%20for%20collaboration%20opportunity&tf=cm",
  };
</script>

<Title content="Contact  📞" />
<div class="flex mt-2 ms-8">
  <NormalText content="You can connect with me through" />
  <ClickableText extClass="ms-1" content="Telegram" href={contact.telegram} />
  <NormalText extClass="ms-1" content="Or Email me at" />
  <ClickableText
    extClass="ms-1"
    content={contact.email}
    href={contact.emailComposeUrl}
  />
</div>

<style>
</style>
