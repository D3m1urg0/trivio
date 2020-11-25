import tailwindTypography from '@tailwindcss/typography'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  server: {
    host: '',
  },
  // router: {
  //   base: '/trivio/',
  // },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Collana Trivio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'site_name', content: 'Collana Trivio' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Collana Trivio' },
      { hid: 'og:title', name: 'og:title', content: 'Collana Trivio' },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Collana Trivio è la prima linea editoriale dedicata ai Librigame della Casa Editrice Il Barone Games. In arrivo un crowdfunding che finanzierà un triplice progetto.',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Collana Trivio è la prima linea editoriale dedicata ai Librigame della Casa Editrice Il Barone Games. In arrivo un crowdfunding che finanzierà un triplice progetto.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          "Librigame, Librogame, Avventure a bivi, L'Artiglio in fiamme, Echo 931, La città che ride",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/icons', '@/plugins/mixins.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/gtm',
    [
      'nuxt-cookie-control',
      {
        locales: ['it'],
        css: true,
        controlButton: true,
      },
    ],
  ],

  cookies: {
    necessary: [
      {
        // if multilanguage
        // name: {
        //   en: 'Default Cookies',
        // },
        // else
        name: 'Cookie di default',
        // if multilanguage
        // description: {
        //   en: 'Used for cookie control.',
        // },
        // else
        description:
          'I cookie che memorizzeranno la tua scelta in questa schermata',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies'],
      },
    ],
    optional: [
      {
        name: 'Google Analitycs',
        // if you don't set identifier, slugified name will be used
        identifier: 'ga',
        // if multilanguage
        // description: {
        //   en: 'Google GTM is ...',
        // },
        // else
        description:
          'Google Analytics è un servizio offerto da Google che traccia e analizza il traffico web.',
        initialState: true,
        // src: 'https://www.googletagmanager.com/gtag/js?id=GTM-MFPSWZM',
        // async: true,
        cookies: ['_ga'],
        accepted: (ctx) => {
          // eslint-disable-next-line no-console
          window.$nuxt.$gtm.init('GTM-MFPSWZM')
        },
        declined: () => {},
      },
    ],
  },

  gtm: {
    enabled: true,
    debug: true,
    id: 'GTM-MFPSWZM',
    autoInit: false,
    scriptDefer: true,
    pageTracking: true,
    respectDoNotTrack: false,
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
