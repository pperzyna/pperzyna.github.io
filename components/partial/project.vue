<template>
  <div class="has-text-centered">
    <a :href="content.project.link" :title="content.title">
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
      <span class="tag is-success has-text-weight-bold" v-if="content.project.opensource">Open-Source</span>
      <span class="tag is-primary has-text-weight-bold" v-else>Commercial</span>
      <a
        :href="content.project.link"
        class="is-size-5 has-text-weight-semibold has-text-grey-darker is-block mt-2"
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
