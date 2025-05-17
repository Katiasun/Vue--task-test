import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import CountryFlag from 'vue-country-flag-next'
import 'vue-circle-flags/dist/vue-circle-flags.css'
import CircleFlags from 'vue-circle-flags'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('country-flag', CountryFlag)
app.use(CircleFlags)

app.mount('#app')
