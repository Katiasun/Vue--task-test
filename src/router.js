import { createRouter, createWebHistory } from 'vue-router'
import TheMainPage from './components/layout/TheMainPage.vue'

const routes = [
  { path: '/', name: 'Home', component: TheMainPage },
  { path: '/sports', component: { template: '<div>Sports Page</div>' } },
  { path: '/promotion', component: { template: '<div>Promotion Page</div>' } },
  { path: '/live-casino', component: { template: '<div>Live Casino Page</div>' } },
  {
    path: '/games',
    name: 'Games',
    component: () => import('./components/layout/TheGamesPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
