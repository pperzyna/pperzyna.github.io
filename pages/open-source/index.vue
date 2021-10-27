<template>
  <section>
    <div class="hero is-muted">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">open-source projects</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <PartialHeader> started by me </PartialHeader>
          <div class="columns is-multiline pt-4">
            <div
              v-for="project in started"
              :key="project.id"
              class="column is-one-third"
            >
              <PartialProject :content="project" />
            </div>
          </div>
          <LayoutBar class="has-rounded my-6 py-6" />
          <PartialHeader>supported by me </PartialHeader>
          <div class="columns pt-4 is-multiline">
            <div
              v-for="project in supported"
              :key="project.id"
              class="column is-one-third"
            >
              <PartialProject :content="project" />
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
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const started = await $content('open-source', { deep: true })
      .where({ draft: false, 'opensource.mine': true })
      .without(['body'])
      .fetch()
    const supported = await $content('open-source', { deep: true })
      .where({ draft: false, 'opensource.mine': false })
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
      started,
      supported,
      blog: blog[0],
    }
  },

  head() {
    const title = 'Open-Source'
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
