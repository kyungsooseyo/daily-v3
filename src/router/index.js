import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/router-demo/home.vue';
const routes = [
  {
    path: '/', redirect: '/home',
  },
  {
    path: '/about', component: () => import('@/router-demo/about.vue')
  },
  {
    path: '/home', component: () => import('@/router-demo/home.vue'),
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router