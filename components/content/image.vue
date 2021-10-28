<template>
  <figure class="image has-text-centered">
    <img class="has-ratio" :src="src" :alt="title" />
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
