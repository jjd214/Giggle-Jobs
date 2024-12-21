import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/view/HomeView.vue'
import JobsView from '@/view/JobsView.vue'
import NotFoundView from '@/view/NotFoundView.vue'
import JobView from '@/view/JobView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobView,
    },
  ],
  linkActiveClass: 'my-active-class',
  linkExactActiveClass: 'my-exact-active-class',
})

export default router
