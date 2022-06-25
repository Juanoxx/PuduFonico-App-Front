import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Login from './views/login.vue'

createApp(App).use(router).mount('#app')
