export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Piotr Perzyna',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        property: 'og:site_name',
        content: 'PiotrPerzyna',
      },
      {
        property: 'twitter:site',
        content: '@pperzyna',
      },
      {
        property: 'twitter:creator”',
        content: '@pperzyna',
      },
    ],
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/css/bulma.scss', '@assets/css/style.scss'],

  // Transitions
  pageTransition: 'fade',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/format-date.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-fonts',
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  googleFonts: {
    display: 'swap',
    families: {
      Nunito: [400, 600, 700],
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    nestedProperties: ['workshop.past', 'opensource.mine']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    linkActiveClass: 'is-active',
    trailingSlash: true,
    prefetchLinks: false,
    prefetchPayloads: false,
  },
}
