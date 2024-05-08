import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Products from '../views/products/Products.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/products',
    name: 'Home',
    component: Products
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;