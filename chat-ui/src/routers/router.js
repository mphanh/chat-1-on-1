// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ChatPage from '../components/ChatPage.vue';
import AuthForm from '../components/AuthForm.vue'

const routes = [
  {
    path: '/',
    name: 'AuthForm',
    component: AuthForm
  },
  {
    path: '/chat',
    name: 'ChatPage',
    component: ChatPage,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
