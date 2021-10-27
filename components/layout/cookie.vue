<template>
  <section v-show="!cookie" class="has-background-success has-text-white p-6 is-vcentered">
    <div class="container">
      <div class="columns">
        <div class="column is-9">
          <span class="has-text-weight-bold is-block-desktop">
            This website uses cookies to provide services at the highest level.
          </span>
          By continuing to use the site, you agree to their use.
        </div>
        <div class="column is-3">
          <button class="button is-medium is-fullwidth is-rounded is-white has-text-weight-bold has-shadow" @click="accept">
            Got it!
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cookie: false,
    };
  },
  mounted() {
    this.cookie = typeof window !== 'undefined' ? localStorage.getItem('cookie:accepted') || false : false;
  },
  methods: {
    accept() {
      localStorage.setItem('cookie:accepted', true);
      this.cookie = true;
    },
  },
};
</script>
