import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/home/index.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: HomePage },
  { path: '/stores', component: HomePage },
  { path: '/enquiry', component: HomePage },
  {
    path: '/enquiry/franceise',
    component: () => import('@/views/enquiry/index.vue'),
    meta: { name: 'franceise' }
  },
  {
    path: '/enquiry/customer',
    component: () => import('@/views/enquiry/index.vue'),
    meta: { name: 'customer' }
  },
  {
    path: '/enquiry/join',
    component: () => import('@/views/enquiry/index.vue'),
    meta: { name: 'join' }
  },

  { path: '/:pathMatch(.*)*', redirect: '/' }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
