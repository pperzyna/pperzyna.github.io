<template>
  <section>
    <div class="hero is-muted">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">my résumé</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <figure class="image py-6 has-text-centered">
        <iframe
          title="cv"
          class="has-ratio"
          width="1240"
          height="1754"
          src="/file/piotr-perzyna-resume.pdf"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </figure>
      <LayoutMenu />
    </div>
  </section>
</template>

<script>
export default {
  head() {
    const title = "Curriculum Vitae"
    return {
      title,
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' },
      ],
    }
  },
}
</script>
