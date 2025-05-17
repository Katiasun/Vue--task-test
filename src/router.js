import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: { template: '<div>Games Page</div>' } },
  { path: '/sports', component: { template: '<div>Sports Page</div>' } },
  { path: '/promotion', component: { template: '<div>Promotion Page</div>' } },
  { path: '/live-casino', component: { template: '<div>Live Casino Page</div>' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
