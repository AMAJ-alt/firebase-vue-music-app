import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import Manage from '@/views/ManageView.vue';
import Nopage from '@/views/404View.vue';
import Song from '@/views/SongView.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'song',
    path: '/song/:id',
    component: Song,
  },
  {
    name: 'manage',
    // alias: '/mog',
    path: '/manage',
    component: Manage,
    meta: {
      requiresAuth: true,
    },
    beforeEnter: (to, from, next) => {
      console.log('manage routing in @/router/index.js');
      next();
      // console.log('is user logged in ?', store.state.userLoggedIn);
      // if (store.state.userLoggedIn) {
      //   next();
      // } else {
      //   next({ name: '404' });
      // }
    },
  },
  {
    path: '/man',
    redirect: { name: 'manage' },
  },
  {
    name: '404',
    path: '/:catchAll(.*)*',
    component: Nopage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
  // linkActiveClass: 'text-red-500',
});

router.beforeEach((to, from, next) => {
  // console.log(to.matched);
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }

  if (store.state.auth.userLoggedIn) {
    next();
  } else {
    next({ name: 'home' });
  }
});

export default router;
