import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/picfile',
      name: 'picfile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PicfileView.vue')
    },
    {
      path: '/calc',
      name: 'calc',
      component: () => import('../views/CalcView.vue')
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('../views/ToDoListView.vue')
    }
    ,
    {
      path: '/weather',
      name: 'weather',
      component: () => import('../views/Weather.vue')
    },
    {
      path: '/animate',
      name: 'animate',
      component: () => import('../views/Animate.vue')
    }
  ]
})

export default router
