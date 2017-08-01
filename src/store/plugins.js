import { TRIGGER_DRAWER, UPDATE_DRAWER } from './mutations';

/* globals ga */

function drawerTracking(store) {
  store.subscribe(({ type }, state) => {
    if ([TRIGGER_DRAWER, UPDATE_DRAWER].indexOf(type) !== -1) {
      ga('send', 'event', 'Drawer', 'Change', state.drawer ? 'Open' : 'Close');
    }
  });
}

export default [drawerTracking];
