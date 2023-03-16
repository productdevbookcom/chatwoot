import { } from '@productdevbook/chatwoot/nuxt'

export default defineNuxtConfig({
  modules: [
    '@productdevbook/chatwoot/nuxt',
  ],

  chatwoot: {
    init: {
      websiteToken: 'b6BejyTTuxF4yPt61ZTZHjdB',
    },
    settings: {
      locale: 'en',
      position: 'left',
      launcherTitle: 'Hello Chat',
      // ... and more settings
    },
    // If this is loaded you can make it true, https://github.com/nuxt-modules/partytown
    partytown: false,
  },
})
