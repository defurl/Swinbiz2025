import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import AnalysisPage from '../pages/AnalysisPage.vue';
import ListingPage from '../pages/ListingPage.vue';
import Overview from '../components/Overview.vue';
import Listed from '../components/Listed.vue';
import CreateListing from '../components/CreateListing.vue';
import LocationSelectionPage from '../pages/SelectionPage.vue'; 


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
    path: '/select-location', // Add the new route
    name: 'LocationSelection',
    component: LocationSelectionPage,
  },
  {
    path: '/listing',
    name: 'ListingPage',
    component: ListingPage,
    children: [
      {
        path: '',
        redirect: '/listing/overview'
      },
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
      },
      {
        path: 'listed',
        name: 'Listed',
        component: Listed,
      },
      {
        path: 'create',
        name: 'Create',
        component: CreateListing,
      },
    ],
  },
  {
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
