import store from './store';
import { SET_CLIENT_ID } from './store/mutations';

const trackingID = 'UA-74628515-1';

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
