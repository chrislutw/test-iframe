// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  plugins:[
    '~/plugins/vercel.client.ts'
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  build: {
    transpile: ['@esotericsoftware/spine-player', '@esotericsoftware/spine-core'],
  },
})
