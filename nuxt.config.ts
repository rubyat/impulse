// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/tailwind.css'
  ],
  // Nuxt auto-registers plugins from the root-level `plugins/` directory.
  // Keeping explicit list can cause path mismatches (app/plugins vs plugins).
  // Remove explicit registration and rely on auto-discovery.
  tailwindcss: {
    viewer: false
  },
  app: {
    head: {
      title: 'Impulse',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  }
})
