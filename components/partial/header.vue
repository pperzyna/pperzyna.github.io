<template>
  <div class="has-border-bottom--muted mb-2" :class="{ 'has-text-centered' : centered }">
    <component :is="tag" class="title has-border-bottom--success" :class="size"><slot /></component>
  </div>
</template>

<script>
export default {
  props: {
    centered: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "h3"
    },
    size: {
      type: String,
      default: "is-size-4"
    }
  }
};
</script>
