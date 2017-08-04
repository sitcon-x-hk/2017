import store from './store';
import { SET_CLIENT_ID } from './store/mutations';

const trackingID = 'UA-74628515-1';

// eslint-disable-next-line
window.ga=window.ga||function(){(window.ga.window.q=window.ga.q||[]).push(arguments)};window.ga.l=+new Date;

const ga = window.ga;

ga('create', trackingID, 'auto');

function getClient() {
  const trackers = ga.getAll();
  if (!trackers.length) {
    ga(getClient);
  } else {
    trackers.some((tracker) => {
      if (tracker.get('trackingId') === trackingID) {
        store.commit(SET_CLIENT_ID, tracker.get('clientId'));
        return true;
      }
      return false;
    });
  }
}
ga(getClient);
