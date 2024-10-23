import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './App.vue';

const routes = [
  { path: '/', component: HomeView, alias: '/fellipe-brito' },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  // @ts-ignore
  routes,
});

export default router;
