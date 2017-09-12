import Vue from 'vue';
import Router from 'vue-router';

/* global ga */

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/!/:path',
      redirect: to => `/${to.params.path}`,
    },
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
    {
      path: '/cfp',
      name: 'cfp',
      component: () => import(/* webpackChunkName: "cfp" */ './components/cfp/Page.vue'),
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      component: () => import(/* webpackChunkName: "sponsor" */ './components/sponsor/CallForSponsor.vue'),
    },
    {
      path: '/topic/the-geek',
      component: () => import('./components/topics/TheGeek.vue'),
    },
    {
      path: '/topic/culture-differences',
      component: () => import('./components/topics/CultureDifferences.vue'),
    },
    {
      path: '/topic/blockchain',
      component: () => import('./components/topics/Blockchain.vue'),
    },
  ],
});

router.afterEach((to) => {
  ga('set', 'page', `/2017${to.path}`);
  ga('send', 'pageview');
  window.scrollTo(0, 0);
});

export default router;
