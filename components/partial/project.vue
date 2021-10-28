<template>
  <div class="has-text-centered">
    <a :href="content.opensource.link" :title="content.title">
      <figure class="image">
        <img
          :src="content.photo.source"
          :alt="content.title"
          loading="lazy"
          class="has-rounded has-shadow"
        />
      </figure>
    </a>
    <div class="p-2 mt-2">
      <a
        :href="content.opensource.link"
        class="is-size-5 has-text-weight-semibold has-text-grey-darker"
        :title="content.title"
      >
        {{ content.title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
