// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@unocss/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
})
