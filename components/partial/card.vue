<template>
  <div>
    <nuxt-link v-show="content.photo" :to="content.url" :title="content.title">
      <figure class="image">
        <img
          :src="content.photo.source"
          :alt="content.title"
          loading="lazy"
          class="has-rounded has-shadow"
        />
      </figure>
    </nuxt-link>
    <div class="p-2 mt-2">
      <nuxt-link
        :to="content.url"
        class="is-size-5 has-text-weight-semibold has-text-grey-darker"
        :title="content.title"
      >
        {{ content.title }}
      </nuxt-link>
    </div>
    <div class="level is-size-7 has-text-grey px-2">
      <div class="level-left">
        <span v-if="content.workshop">
          <SvgIconCalendar class="pr-1 pt-1" /> {{ content.workshop.date | formatDate }}
        </span>
        <span v-else>
          <SvgIconCalendar class="pr-1 pt-1" /> {{ content.createdAt | formatDate }}
        </span>
      </div>
      <div class="level-right">
        <nuxt-link :to="content.url" class="has-text-grey" :title="content.title">
          read more
        </nuxt-link>
      </div>
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
