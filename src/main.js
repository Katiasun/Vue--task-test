import './styles/static/main.css'
import './styles/static/fonts.css'
import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import CircleFlags from 'vue-circle-flags'
import CountryFlag from 'vue-country-flag-next'
import 'vue-circle-flags/dist/vue-circle-flags.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('country-flag', CountryFlag)
app.use(CircleFlags)

app.mount('#app')
