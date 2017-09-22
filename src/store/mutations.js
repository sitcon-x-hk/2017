export const TRIGGER_DRAWER = 'TRIGGER_DRAWER';
export const UPDATE_DRAWER = 'UPDATE_DRAWER';
export const SET_CLIENT_ID = 'SET_CLIENT_ID';
export const UPDATE_ONLINE = 'UPDATE_ONLINE';

export default {
  [TRIGGER_DRAWER](state) {
    state.drawer = !state.drawer;
  },
  [UPDATE_DRAWER](state, value) {
    state.drawer = value;
  },
  [SET_CLIENT_ID](state, value) {
    state.clientID = value;
  },
  [UPDATE_ONLINE](state, value) {
    state.online = value;
  },
};
