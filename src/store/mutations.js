export const TRIGGER_DRAWER = 'TRIGGER_DRAWER';

export default {
  [TRIGGER_DRAWER](state) {
    state.drawer = !state.drawer;
  },
};
