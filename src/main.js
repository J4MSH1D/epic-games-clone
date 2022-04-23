import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useUser } from "./stores/user"
import { base } from "./stores/api"

// tailwind css
import "./tailwind/index.css"

// Base css
import "./assets/css/base.css"

// Swiper css
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const app = createApp(App)

app.use(createPinia())
app.use(router)

const user = useUser()
const data = base()
user.check()
data.getData()

app.mount('#app')
