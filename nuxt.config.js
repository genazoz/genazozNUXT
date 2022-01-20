import en from "./locales/en-US.js";
import ru from "./locales/ru-RU.js";

export default {
  ssr: false,
  target: 'server',
  server: {
    host: '0.0.0.0',
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "genazozNUXT",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "/JS/TweenMax.min.js",
        type: "text/javascript"
      },
      {
        src: "/JS/swiper.min.js",
        type: "text/javascript"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["assets/scss/style.scss"],

  router: {
    // middleware: 'i18n'
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/firebase.js"],

  generate: {},

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/style-resources",
    "nuxt-lazy-load",
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "en",
            iso: "en-US",
            name: "En"
          },
          {
            code: "ru",
            iso: "ru-RU",
            name: "Ру"
          }
        ],
        defaultLocale: "ru",
        routes: {
          "project/_id": {
            en: "/project/:id?",
            ru: "/project/:id?"
          }
        },
        vueI18n: {
          fallbackLocale: "ru",
          messages: { ru, en }
        }
      }
    ]
  ],

  styleResources: {
    scss: ["assets/scss/style.scss"]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
