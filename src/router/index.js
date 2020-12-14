import { createRouter, createWebHistory } from 'vue-router'
import All from '@/views/all/All.vue'

const routes = [
  {
    path: '',
    redirect: 'all'
  },
  {
    path: '/all',
    component: All
  },
  {
    path: '/class',
    component: () => import('@/views/class/Class.vue')
  },
  {
    path: '/cart',
    component: () => import('@/views/cart/Cart.vue')
  },
  {
    path: '/mine',
    component: () => import('@/views/mine/Mine.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
