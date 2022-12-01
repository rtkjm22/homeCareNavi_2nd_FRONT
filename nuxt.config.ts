// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    // インポートした型をdefinePropsに指定できるようにする（単純な型限定）
    // https://github.com/vuejs/core/issues/4294
    'vite-plugin-vue-type-imports/nuxt'
  ],

  ssr: false,

  // atoms,molecules及びorganismsからオートインポートを可能にする
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#components
  components: {
    // '~/components'を最初に記述すると、パスが全て'~/components'に吸われて失敗するので注意
    // https://github.com/nuxt/framework/issues/4947
    dirs: [
      '~/components/atoms',
      '~/components/molecules',
      '~/components/organisms',
      '~/components'
    ]
  },

  typescript: {
    strict: true
  },

  runtimeConfig: {
    public: {
      frontURL: 'http://localhost:8080',
      apiURL: 'http://localhost:3000',
      enabledMock: process.env.ENABLED_MOCK
    }
  },
  // vue-datepickerの依存関係をトランスパイルする
  // https://vue3datepicker.com/installation/#nuxt
  build: {
    transpile: ['@vuepic/vue-datepicker']
  }
})
