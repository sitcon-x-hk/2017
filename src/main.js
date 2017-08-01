import Vue from 'vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router';
import store from './store';

sync(store, router);
Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.config.errorHandler = (err) => {
  console.error(err);
  /* globals ga */
  ga('send', 'exception', {
    exDescription: err.message,
    exFatal: false,
  });
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
