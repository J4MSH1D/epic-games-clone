import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useUser } from "./stores/user"

// tailwind css
import "./tailwind/index.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

const user = useUser()
user.check()

app.mount('#app')
