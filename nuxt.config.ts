export default defineNuxtConfig({
  // Enlace del CSS global
  css: ['~/assets/css/main.css'],

  build: {
    transpile: ['gsap']
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image'
  ],
  
  image: { 
    provider: 'vercel',
    // Opcional: define formatos por defecto para asegurar WebP
    format: ['webp'],
    // Opcional: define tamaños de pantalla comunes para el responsive
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    }
  },

  // Habilita las herramientas de desarrollo si las necesitas, 
  // pero Nuxt las desactiva solo en producción
  devtools: { enabled: true }
})