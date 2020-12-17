import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'

const routes = [
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: () => import('@/views/category/Category.vue')
  },
  {
    path: '/cart',
    component: () => import('@/views/cart/Cart.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/profile/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
