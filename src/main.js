import Vue from 'vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router';
import store from './store';
import { UPDATE_ONLINE } from './store/mutations';
import './ga';

sync(store, router);
Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.config.errorHandler = (err) => {
  // eslint-disable-next-line no-console
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

window.addEventListener('online', () => {
  store.commit(UPDATE_ONLINE, navigator.onLine);
});

window.addEventListener('offline', () => {
  store.commit(UPDATE_ONLINE, navigator.onLine);
});
