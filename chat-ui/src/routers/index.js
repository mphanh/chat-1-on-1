// router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import ChatPage from '../views/ChatPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
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
  ]
});
