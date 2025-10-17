import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import AnalysisPage from '../pages/AnalysisPage.vue';
import ListingPage from '../pages/ListingPage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/analysis',
    name: 'AnalysisPage',
    component: AnalysisPage
  },
  {
    path: '/listing',
    name: 'ListingPage',
    component: ListingPage
  },
  {
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
