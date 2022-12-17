import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import router from '@/router/router'

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })

createApp(App).use(router).mount('#app')
