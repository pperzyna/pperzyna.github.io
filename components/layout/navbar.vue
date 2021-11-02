<template>
  <BNavbar wrapper-class="container">
    <template slot="brand">
      <nuxt-link
        class="navbar-item has-background-white"
        to="/"
        :class="{ 'is-hidden': $nuxt.$route.name == 'index' }"
        title="Piotr Perzyna"
      >
        <img
          src="/images/logo/piotrperzyna.png"
          alt="Piotr Perzyna"
          class="mr-2"
        />
        <SvgLogo />
      </nuxt-link>
    </template>

    <template slot="burger" v-if="$nuxt.$route.name == 'index'">
      <div class="ml-auto mt-3 is-hidden-desktop">
        <nuxt-link class="navbar-item" to="/contact/">
          <span
            class="
              button
              is-primary is-outlined is-rounded
              has-text-weight-semibold
            "
            >say Hello!</span
          >
        </nuxt-link>
      </div>
    </template>

    <template slot="end">
      <nuxt-link
        class="navbar-item"
        to="/blog/"
        :class="{ 'is-hidden-desktop': $nuxt.$route.name == 'index' }"
      >
        <span class="ml-2">blog</span>
      </nuxt-link>
      <nuxt-link
        class="navbar-item"
        to="/about/"
        :class="{ 'is-hidden-desktop': $nuxt.$route.name == 'index' }"
      >
        <span class="ml-2">about me</span>
      </nuxt-link>
      <nuxt-link class="navbar-item" to="/contact/">
        <span
          class="
            button
            is-primary is-outlined is-rounded
            has-text-weight-semibold
          "
          >say Hello!</span
        >
      </nuxt-link>
    </template>
  </BNavbar>
</template>

<script>
import { BNavbar } from 'buefy/dist/components/navbar'

export default {
  components: {
    BNavbar,
  },
}
</script>
