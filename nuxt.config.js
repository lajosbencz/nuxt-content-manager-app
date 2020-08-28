
export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'iview/dist/styles/iview.css'
  ],
  plugins: [
    '@/plugins/iview'
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-content-manager', {
      urlPrefix: '/nuxt-cms',
      dbFile: 'nuxt-cms.db',
    }]
  ],
  axios: {},
  build: {
  }
}
