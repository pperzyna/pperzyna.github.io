<template>
  <figure class="image is-16by9 has-text-centered mx-6">
    <iframe
      class="has-ratio"
      width="560"
      height="315"
      :src="`//www.slideshare.net/slideshow/embed_code/key/` + id"
      title="SlideShare Presentation"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      scrolling="no"
      allowfullscreen="true"
    ></iframe>
  </figure>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
  },
}
</script>
