// nuxt.config.ts
export default defineNuxtConfig({
  // Enlace del CSS global
  css: ['~/assets/css/main.css'],

  build: {
    transpile: ['gsap']
  },

  modules: ['@nuxt/icon']
})