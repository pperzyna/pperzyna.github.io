<template>
  <figure class="image is-16by9 has-text-centered mx-6">
    <iframe
      class="has-ratio"
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/` + id"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
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
