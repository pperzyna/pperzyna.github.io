<template>
  <div>
    <section class="hero is-muted">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">training & workshop</h1>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="columns mt-4">
        <div class="column is-8">
          <PartialHeader> upcoming workshops </PartialHeader>
          <div class="columns pt-4">
            <div
              v-for="content in upcoming"
              :key="content.slug"
              class="column is-half"
            >
              <PartialCard :content="content" />
            </div>
            <div v-if="upcoming" class="column has-text-centered my-6">
              ... sorry, no scheduled workshops at this time ...
            </div>
          </div>
          <LayoutBar class="has-rounded my-6 py-6" />
          <PartialHeader> past workshops </PartialHeader>
          <div class="columns pt-4 is-multiline">
            <div
              v-for="content in past"
              :key="content.slug"
              class="column is-one-third"
            >
              <PartialCard :content="content" />
            </div>
          </div>
        </div>
        <div class="column is-3 is-offset-1">
          <div class="sticky">
            <PartialHeader> last blog post </PartialHeader>
            <PartialCard :content="blog" class="mt-4 mb-6" />
            <PartialTwitter />
          </div>
        </div>
      </div>
      <LayoutMenu />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const upcoming = await $content('workshops', { deep: true })
      .where({ draft: false, 'workshop.past': false })
      .limit(2)
      .sortBy('createdAt', 'desc')
      .without(['body'])
      .fetch()
    const past = await $content('workshops', { deep: true })
      .where({ draft: false, 'workshop.past': true })
      // .limit(6)
      .sortBy('createdAt', 'desc')
      .without(['body'])
      .fetch()
    const blog = await $content('posts', { deep: true })
      .where({ draft: false })
      .limit(1)
      .sortBy('createdAt', 'desc')
      .without(['body'])
      .fetch()

    return {
      upcoming,
      past,
      blog: blog[0],
    }
  },

  head() {
    const title = 'Workshops'
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
