import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Products from '../views/products/Products.vue';
import Orders from '../views/orders/Orders.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;