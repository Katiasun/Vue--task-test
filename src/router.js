import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from './components/layouts/DefaultLayout.vue'
// import EmptyLayout from './components/layouts/emptyLayout/EmptyLayout.vue'
import TheMainPage from './components/views/TheMainPage.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [{ path: '', name: 'Home', component: TheMainPage }],
  },

  {
    path: '/sports',
    component: DefaultLayout,
    children: [{ path: '', name: 'Sports', component: { template: '<div>Sports Page</div>' } }],
  },

  {
    path: '/promotion',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Promotion', component: { template: '<div>Promotion Page</div>' } },
    ],
  },
  {
    path: '/live-casino',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Live Casino', component: { template: '<div>Live Casino Page</div>' } },
    ],
  },
  {
    path: '/games',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Games',
        component: () => import('./components/views/TheGamesPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
