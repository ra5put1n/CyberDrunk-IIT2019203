import { createRouter, createWebHistory } from 'vue-router'
import welcome from '../views/welcome.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: welcome
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
