import { createRouter, createWebHistory } from 'vue-router'
// import DefaultLayout from './components/layouts/DefaultLayout.vue'
// import EmptyLayout from './components/layouts/emptyLayout/EmptyLayout.vue'
import MainPage from './components/views/MainPage.vue'

const routes = [
  {
    path: '/',
    component: MainPage,
    name: 'Home',
  },
  {
    path: '/games',
    component: () => import('./components/views/GamesPage.vue'),
    name: 'GamesPage',
  },
  // {
  //   path: '/sports',
  //   component: DefaultLayout,
  //   children: [{ path: '', name: 'Sports', component: { template: '<div>Sports Page</div>' } }],
  // },

  // {
  //   path: '/promotion',
  //   component: DefaultLayout,
  //   children: [
  //     { path: '', name: 'Promotion', component: { template: '<div>Promotion Page</div>' } },
  //   ],
  // },
  // {
  //   path: '/live-casino',
  //   component: DefaultLayout,
  //   children: [
  //     { path: '', name: 'Live Casino', component: { template: '<div>Live Casino Page</div>' } },
  //   ],
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
