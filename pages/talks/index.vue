<template>
  <div>
    <section class="hero is-muted">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">public speeches</h1>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <PartialHeader> latest talks </PartialHeader>
          <div class="columns pt-4">
            <div v-for="talk in latest" :key="talk.slug" class="column is-half">
              <PartialCard :content="talk" />
            </div>
          </div>
          <LayoutBar class="has-rounded my-6 py-6" />
          <PartialHeader> older talks </PartialHeader>
          <div class="columns pt-4 is-multiline">
            <div
              v-for="talk in older"
              :key="talk.slug"
              class="column is-one-third"
            >
              <PartialCard :content="talk" />
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
    const latest = await $content('talks', { deep: true })
      .where({ draft: false })
      .limit(2)
      .sortBy('createdAt', 'desc')
      .without(['body'])
      .fetch()
    const older = await $content('talks', { deep: true })
      .where({ draft: false })
      .skip(2)
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
      latest,
      older,
      blog: blog[0],
    }
  },

  head() {
    const title = 'Talks'
    const description = ''

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
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
