export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'genazozNUXT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: '/JS/TweenMax.min.js', type: 'text/javascript',
      },
      {
        src: '/JS/swiper.min.js', type: 'text/javascript',
      },
      {
        src: '/JS/menu.js', type: 'text/javascript',
      },
      {
        src: '/JS/guide.js', type: 'text/javascript',
      },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/scss/style.scss'
  ],

  router: {
    middleware: 'i18n'
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/firebase.js",
    '~/plugins/i18n.js'
  ],

  generate: {
    routes: ['/',   '/about',    '/contact',      '/project', 
             '/en', '/en/about', '/en/contact' ,  '/en/project']
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/style-resources', 'nuxt-lazy-load'],
  
  styleResources: {
      scss: [
          'assets/scss/style.scss',
      ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
