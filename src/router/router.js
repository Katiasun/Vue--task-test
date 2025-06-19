import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'

const routes = [
  {
    path: '/',
    component: MainPage,
    name: 'Home',
  },
  {
    path: '/games',
    component: () => import('@/views/GamesPage.vue'),
    name: 'GamesPage',
  },
  {
    path: '/sport',
    component: () => import('@/views/SportPage.vue'),
    name: 'SportPage',
  },
  {
    path: '/promotions',
    component: () => import('@/views/PromotionsPage.vue'),
    name: 'PromotionsPage',
  },
  {
    path: '/live-casino',
    component: () => import('@/views/LiveCasinoPage.vue'),
    name: 'LiveCasinoPage',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundPage.vue'),
    meta: { layout: 'empty' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
