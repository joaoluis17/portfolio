import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import AllCertificates from '../views/AllCertificates.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/certificates', component: AllCertificates },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

