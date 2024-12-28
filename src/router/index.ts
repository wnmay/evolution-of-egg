import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Egg from '@/views/Egg.vue'
import Credit from '@/views/Credit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/egg',
      name: 'egg',
      component: Egg,
    },
    {
      path: '/credit',
      name: 'credit',
      component: Credit,
    },
  ],
})

export default router
