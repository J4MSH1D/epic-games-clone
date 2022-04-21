import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { base } from "./stores/api"

// tailwind css
import "./tailwind/index.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

const baseStorage = base()
baseStorage.getData()

app.mount('#app')
