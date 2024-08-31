import './assets/main.css'
import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Antd from 'ant-design-vue';

const app = createApp(App)

app.use(router)

axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.defaults.withCredentials = true

app.config.globalProperties.axios = axios





app.use(Antd).mount('#app')
