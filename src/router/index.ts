import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Products from '../views/products/Products.vue';
import Orders from '../views/orders/Orders.vue';
import Dashboard from '../views/Dashboard.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/',
    name: 'Home',
    component: Dashboard
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;