<template>
  <section class="container">
    <div class="columns is-multiline is-centered">

      <div class="column is-8">
        <PartialHeader centered tag="h1" size="is-size-2" class="mt-2 mb-6">
          {{ content.title }}
        </PartialHeader>
      </div>

      <div class="column is-8 content is-size-5">
        <nuxt-content :document="content" />
      </div>

    </div>
    <LayoutMenu />
  </section>
</template>

<script>
export default {

  async asyncData({ $content, params }) {
    const content = await $content('others', { deep: true })
      .where({ slug: 'nohello' })
      .fetch()
    return {
      content: content[0],
    }
  },

  head() {
    return {
      title: this.content.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.content.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.content.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.content.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.content.description,
        },
        this.canonical,
      ],
      script: [{ type: 'application/ld+json', json: this.Aritcle }],
    }
  },

  computed: {
    canonical() {
      if (this.content.canonical)
        return {
          hid: 'canonical',
          property: 'canonical',
          content: this.content.canonical,
        }
      return {
          hid: 'canonical',
          property: 'canonical',
          content: 'https://pperzyna.com' + this.$route.path,
      };
    },
    Aritcle() {
      return {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        headline: this.content.title,
        dateModified: this.content.updatedAt,
        datePublished: this.content.createdAt,
        // mainEntityOfPage: {
        //   '@type': 'WebPage',
        //   '@id': (
        //     this.$config.settings.baseUrl +
        //     this.localePath({
        //       name: 'blog-post',
        //       params: { post: this.content.slug },
        //     })
        //   ).replace('/amp/', '/'),
        // },
        author: {
          '@type': 'Organization',
          name: 'PiotrPerzyna',
        },
        publisher: {
          '@type': 'Organization',
          name: 'pperzyna.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://pperzyna.com/images/logo/piotrperzyna.png',
          },
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          xpath: [
            '/html/head/title',
            "/html/head/meta[@name='description']/@content",
          ],
        },
      }
    },
  },
}
</script>
