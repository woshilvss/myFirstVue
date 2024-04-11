import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
import App from './App.vue'
import router from './router'
const routes = setupLayouts(generatedRoutes)
const app = createApp(App)
//hellodfs
app.use(createPinia())
app.use(router)

app.mount('#app')
