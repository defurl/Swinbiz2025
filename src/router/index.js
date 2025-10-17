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
    meta: {
      transition: 'fade',
      title: 'F&B Spot - Tìm địa điểm tốt nhất cho doanh nghiệp F&B'
    }
  },
  {
    path: '/analysis',
    name: 'AnalysisPage',
    component: AnalysisPage,
    meta: {
      transition: 'slide',
      title: 'Phân tích địa điểm - F&B Spot'
    }
  },
  {
    path: '/select-location',
    name: 'LocationSelection',
    component: LocationSelectionPage,
    meta: {
      transition: 'slide',
      title: 'Chọn vị trí - F&B Spot'
    }
  },
  {
    path: '/listing',
    name: 'ListingPage',
    component: ListingPage,
    meta: {
      transition: 'fade',
      title: 'Quản lý Listing - F&B Spot'
    },
    children: [
      {
        path: '',
        name: 'ListingIndex',
        redirect: '/listing/overview'
      },
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
        meta: {
          transition: 'slide',
          title: 'Tổng quan - F&B Spot'
        }
      },
      {
        path: 'listed',
        name: 'Listed',
        component: Listed,
        meta: {
          transition: 'slide',
          title: 'Tin đã đăng - F&B Spot'
        }
      },
      {
        path: 'create',
        name: 'Create',
        component: CreateListing,
        meta: {
          transition: 'slide',
          title: 'Đăng tin mới - F&B Spot'
        }
      },
    ],
  },
  {
    path: '/help',
    name: 'HelpPage',
    component: () => import('../pages/LandingPage.vue'), // Temporarily redirect to landing page
    meta: {
      transition: 'fade',
      title: 'Trợ giúp - F&B Spot'
    }
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
