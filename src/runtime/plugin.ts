import { defineNuxtPlugin, useRuntimeConfig } from '#app'

import { createChatWoot } from './vue'

export default defineNuxtPlugin((nuxtApp) => {
  const { chatwoot } = useRuntimeConfig().public
  const _chatwoot = createChatWoot({
    init: chatwoot.init,
    partytown: chatwoot.partytown,
    settings: chatwoot.settings,
  })
  nuxtApp.vueApp.use(_chatwoot)
  nuxtApp.provide('chatwoot', _chatwoot)
})
