<template>
  <div>
    <section class="hero is-medium is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Error {{ error.statusCode }}</h1>
          <h2 class="subtitle">
            {{ error.message }}
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return { statusCode: '', message: '' };
      },
    },
  },
};
</script>
