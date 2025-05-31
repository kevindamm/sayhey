// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    'nitro-cloudflare-dev',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },

  css: ['@picocss/pico'],
  content: {
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
  },
  compatibilityDate: '2025-05-15',

  nitro: {
    preset: 'cloudflare_module',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  eslint: {
    config: {
      stylistic: {
        semi: false,
        quotes: 'single',
        commaDangle: 'always-multiline',
      },
    },
  },
})
