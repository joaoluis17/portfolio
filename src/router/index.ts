import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Certifique-se de que este caminho está correto
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
