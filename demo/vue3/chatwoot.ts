import { createChatWoot } from '@productdevbook/chatwoot'

export default createChatWoot({
  init: {
    websiteToken: 'b6BejyTTuxF4yPt61ZTZHjdB',
  },
  settings: {
    locale: 'en',
    position: 'right',
    launcherTitle: 'Hello Vue.js',
  },
  partytown: false,
})