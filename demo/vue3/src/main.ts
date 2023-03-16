import { createApp } from 'vue'
import chatwoot from '../chatwoot'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)
app.use(chatwoot)
app.mount('#app')
