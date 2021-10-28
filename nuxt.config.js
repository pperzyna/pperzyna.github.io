import { getRoutes, getRoutesPayload } from './utils/url'

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
  plugins: ['~/plugins/format-date.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  googleAnalytics: {
    id: 'UA-162850461-1',
    fields: {
      cookieFlags: 'samesite=none;secure',
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    workbox: {
      clientsClaim: false,
    },
    meta: {
      ogHost: 'https://pperzyna.com',
    },
    manifest: {
      name: 'Piotr Perzyna',
      short_name: 'pperzyna.com',
      lang: 'en',
      start_url: `/blog/?utm_source=pwa`,
      description: '',
    },
    icon: {
      purpose: 'any',
    },
  },

  googleFonts: {
    display: 'swap',
    families: {
      Nunito: [400, 600, 700],
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    nestedProperties: ['workshop.past', 'opensource.mine'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[hash:base64:4]',
        },
      },
    },
    extractCSS: true,
    html: {
      minify: {
        minifyJS: false,
        minifyCSS: false,
        decodeEntities: true,
        useShortDoctype: true,
        trimCustomFragments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        collapseBooleanAttributes: true,
        processConditionalComments: true,
      },
    },
  },

  robots: {
    Allow: '/',
    Disallow: ['/_nuxt/', '/*.pdf$'],
    UserAgent: '*',
    Sitemap: ['https://pperzyna.com/sitemap/index.xml'],
  },

  sitemap: {
    gzip: true,
    path: '/sitemap/index.xml',
    lastmod: new Date(),
    hostname: 'https://pperzyna.com',
    sitemaps: [
      {
        gzip: true,
        path: '/sitemap/top.xml',
        defaults: {
          changefreq: 'weekly',
          priority: 0.9,
          lastmod: new Date(),
        },
        exclude: ['/**'],
        routes() {
          return getRoutes(['top'])
        },
      },
      {
        gzip: true,
        path: '/sitemap/blog.xml',
        defaults: {
          changefreq: 'weekly',
          priority: 1,
          lastmod: new Date(),
        },
        exclude: ['/**'],
        routes() {
          return getRoutes(['blog'])
        },
      },
      {
        gzip: true,
        path: '/sitemap/talks.xml',
        defaults: {
          changefreq: 'monthly',
          priority: 0.8,
          lastmod: new Date(),
        },
        exclude: ['/**'],
        routes() {
          return getRoutes(['talks'])
        },
      },
      ,
      {
        gzip: true,
        path: '/sitemap/workshops.xml',
        defaults: {
          changefreq: 'monthly',
          priority: 0.7,
          lastmod: new Date(),
        },
        exclude: ['/**'],
        routes() {
          return getRoutes(['workshops'])
        },
      },
    ],
  },

  router: {
    linkActiveClass: 'is-active',
    trailingSlash: true,
    prefetchLinks: false,
    prefetchPayloads: false,
  },

  generate: {
    crawler: false,
    fallback: '404.html',
    routes() {
      return getRoutesPayload()
    },
  },
}
