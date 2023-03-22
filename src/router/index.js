import { createRouter, createWebHistory } from 'vue-router'
import LiveScanner from "../components/LiveScanner.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/LiveScanner',
      name: 'Scanner',
      component: LiveScanner
    },
  ]
})

export default router
