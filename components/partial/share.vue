<template>
  <div>
    <div class="has-text-grey is-size-7">share</div>
    <ShareNetwork
      class="p-1"
      network="facebook"
      :url="`https://pperzyna.com` + content.url"
      :title="content.title"
      :description="content.description"
      hashtags="pperzyna"
    >
      <SvgShareFacebook />
    </ShareNetwork>
    <ShareNetwork
      class="p-1"
      network="twitter"
      :url="`https://pperzyna.com` + content.url"
      :title="content.title"
      :description="content.description"
      hashtags="pperzyna"
    >
      <SvgShareTwitter />
    </ShareNetwork>
        <ShareNetwork
          class="p-1"
      network="linkedin"
      :url="`https://pperzyna.com` + content.url"
      :title="content.title"
      :description="content.description"
      hashtags="pperzyna"
    >
      <SvgShareLinkedin />
    </ShareNetwork>
    <ShareNetwork
      class="p-1"
      network="whatsApp"
      :url="`https://pperzyna.com` + content.url"
      :title="content.title"
      :description="content.description"
      hashtags="pperzyna"
    >
      <SvgShareWhatsapp />
    </ShareNetwork>
    <ShareNetwork
      class="p-1"
      network="telegram"
      :url="`https://pperzyna.com` + content.url"
      :title="content.title"
      :description="content.description"
      hashtags="pperzyna"
    >
      <SvgShareTelegram />
    </ShareNetwork>
    <ShareNetwork
      class="p-1"
      network="email"
      :url="`https://pperzyna.com` + content.url"
      :title="content.title"
      :description="content.description"
      hashtags="pperzyna"
    >
      <SvgShareEmail />
    </ShareNetwork>
  </div>
</template>

<script>
import { ShareNetwork } from 'vue-social-sharing'

export default {
  components: { ShareNetwork },

  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
