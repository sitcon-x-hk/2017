export const TRIGGER_DRAWER = 'TRIGGER_DRAWER';
export const UPDATE_DRAWER = 'UPDATE_DRAWER';

export default {
  [TRIGGER_DRAWER](state) {
    state.drawer = !state.drawer;
  },
  [UPDATE_DRAWER](state, value) {
    state.drawer = value;
  }
};
