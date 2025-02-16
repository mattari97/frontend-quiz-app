import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '@/views/WelcomeVue.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeView,
    },
  ],
});

export default router;
