import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  // We can add more routes here for other pages in the future
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
