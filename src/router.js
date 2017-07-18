import Vue from 'vue';
import Router from 'vue-router';

/* global ga */

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './components/home/Page.vue'),
    },
    {
      path: '/coc',
      name: 'coc',
      component: () => import(/* webpackChunkName: "coc" */ './components/coc/Page.vue'),
    },
    {
      path: '/organizer',
      name: 'organizer',
      component: () => import(/* webpackChunkName: "organizer" */ './components/organizer/Page.vue'),
    },
    {
      path: '/venue',
      name: 'venue',
      component: () => import(/* webpackChunkName: "venue" */ './components/venue/Page.vue'),
    },
  ],
});

router.afterEach((to) => {
  ga('set', 'page', to.path);
  ga('send', 'pageview');
});

export default router;
