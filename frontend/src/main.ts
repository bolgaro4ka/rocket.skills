import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

app.use(router)

axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.defaults.withCredentials = true

app.config.globalProperties.axios = axios





app.mount('#app')
