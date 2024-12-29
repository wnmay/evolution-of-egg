import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Egg from '@/views/Egg.vue'
import Omelette from '@/views/Omelette.vue'
import FriedEgg from '@/views/FriedEgg.vue'

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
      path: '/omelette',
      name: 'omelette',
      component: Omelette,
    },
    {
      path: '/fried-egg',
      name: 'fried egg',
      component: FriedEgg,
    },
  ],
})

export default router
