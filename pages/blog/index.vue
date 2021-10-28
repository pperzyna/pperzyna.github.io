<template>
  <section>
    <div class="hero is-muted">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">blog</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns mt-4">
        <div class="column is-8">
          <PartialHeader> latest articles </PartialHeader>
          <div class="columns pt-4">
            <div v-for="post in latest" :key="post.slug" class="column is-half">
              <PartialCard :content="post" />
            </div>
          </div>
          <LayoutBar class="has-rounded my-6 py-6" />
          <PartialHeader> older articles </PartialHeader>
          <div class="columns pt-4 is-multiline">
            <div
              v-for="post in older"
              :key="post.slug"
              class="column is-one-third"
            >
              <PartialCard :content="post" />
            </div>
          </div>
        </div>
        <div class="column is-3 is-offset-1">
          <div class="sticky">
            <PartialTwitter />
          </div>
        </div>
      </div>
      <LayoutMenu />
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const latest = await $content('posts', { deep: true })
      .where({ draft: false })
      .limit(2)
      .sortBy('createdAt', 'desc')
      .without(['body'])
      .fetch()
    const older = await $content('posts', { deep: true })
      .where({ draft: false })
      .skip(2)
      // .limit(6)
      .sortBy('createdAt', 'desc')
      .without(['body'])
      .fetch()

    return {
      latest,
      older,
    }
  },

  head() {
    const title = 'Blog'
    const description = ''

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'canonical',
          property: 'canonical',
          content: 'https://pperzyna.com' + this.$route.path,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
    }
  },
}
</script>
