<template>
  <div class="columns">
    <div class="column">
      <PartialHeader v-if="prev" centered> previous </PartialHeader>
      <PartialCard v-if="prev" :content="prev" class="pt-4" />
    </div>
    <div class="column is-1 is-hidden-mobile"></div>
    <div class="column">
      <PartialHeader v-if="next" centered> next </PartialHeader>
      <PartialCard v-if="next" :content="next" class="pt-4" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => {},
    },
    next: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
