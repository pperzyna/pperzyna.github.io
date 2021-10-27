<template>
<div class="table-container">
  <table class="table is-fullwidth is-bordered">
    <tr>
      <td class="is-vcentered p-6">
        <h5>
          <a :href="url" :title="title">{{ title }}</a>
        </h5>
        <slot />
      </td>
      <td class="is-vcentered" width="30%">
        <a :href="url" :title="title">
          <figure class="image repository">
            <img :src="img" :alt="title" />
          </figure>
        </a>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: 'is-size-4',
    },
  },
}
</script>
