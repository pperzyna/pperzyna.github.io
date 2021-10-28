<template>
  <section class="container">
    <div class="columns is-multiline is-centered">
      <div class="column is-8">
        <PartialBreadcrumb
          title="Blog"
          titleUrl="/blog/"
          :subtitle="content.title"
          :subtitleUrl="content.url"
        />
      </div>

      <div class="column is-8">
        <PartialHeader centered tag="h1" size="is-size-2" class="mt-2 mb-6">
          {{ content.title }}
        </PartialHeader>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="is-size-4" v-html="content.description"></p>
      </div>

      <div class="column is-8">
        <div class="columns px-4 is-mobile is-vcentered">
          <div class="column is-one-third-mobile has-text-grey p-0">
            <SvgIconCalendar class="pr-1" />
            {{ content.createdAt | formatDate }}
          </div>
          <div class="column is-two-thirds-mobile has-text-right p-0">
            <PartialShare :content="content" />
          </div>
        </div>
      </div>

      <div class="column is-7 has-text-centered">
        <picture class="image is-16by9 my-2"
          ><img
            :src="content.photo.source"
            :alt="content.title"
            loading="lazy"
            class="has-rounded"
        /></picture>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span
          class="is-size-7 mt-4 mb-3 has-text-grey"
          v-html="content.photo.credits"
        >
        </span>
      </div>

      <div class="column is-8 content is-size-5">
        <nuxt-content :document="content" />
      </div>

      <div class="column is-8">
        <PartialHeader> comments </PartialHeader>
        <Disqus shortname="pperzyna" />
      </div>

      <div class="column is-8 py-6">
        <PartialReadmore :prev="prev" :next="next" />
      </div>
    </div>
    <LayoutMenu />
  </section>
</template>

<script>
import { Disqus } from 'vue-disqus'

export default {
  components: { Disqus },

  async asyncData({ $content, params }) {
    const content = await $content('posts', { deep: true })
      .where({ slug: params.content })
      .fetch()

    const [prev, next] = await $content('posts', { deep: true })
      .only(['title', 'slug', 'photo', 'createdAt', 'url'])
      .sortBy('createdAt')
      .surround(params.content)
      .fetch()

    return {
      content: content[0],
      prev,
      next,
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
            url: 'https://pperzyna.com/img/logo/piotrperzyna.png',
          },
        },
        image: [this.content.photo.source],
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
