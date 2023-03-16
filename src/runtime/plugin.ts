import { createChatWoot } from '../index'

import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const { chatwoot } = useRuntimeConfig().public
  const _chatwoot = createChatWoot({
    init: chatwoot.init,
    partytown: chatwoot.partytown,
  })
  nuxtApp.vueApp.use(_chatwoot)
  nuxtApp.provide('chatwoot', _chatwoot)
})
