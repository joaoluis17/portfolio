import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import AllCertificates from '../views/AllCertificates.vue';
import AllProjects from '../views/AllProjects.vue';
import CV from '../views/CV.vue';

const routes = [
  { path: '/', component: Home },
  {
    path: '/certificates',
    name: 'AllCertificates',
    component: AllCertificates
  },
  {
    path: '/projects',
    name: 'AllProjects',
    component: AllProjects
  },
  { path: '/contact', component: Contact },
  { path: '/cv', component: CV }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

