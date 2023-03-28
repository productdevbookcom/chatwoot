import { createApp } from 'vue'
import { createChatWoot } from '@productdevbook/chatwoot/vue'
import App from './App.vue'
import './assets/main.css'

const chatwoot = createChatWoot({
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

const app = createApp(App)
app.use(chatwoot)
app.mount('#app')
