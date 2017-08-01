import { mapMutations } from 'vuex';
import { TRIGGER_DRAWER } from '../../store/mutations';

/* global window */

export default {
  props: {
    isMobile: Boolean,
    drawer: Boolean,
    links: Array,
  },
  data() {
    return {
      card: false,
    };
  },
  computed: {
    toolbarClass() {
      if (!this.card) return '';
      return ['scroll-card', 'elevation-2'];
    },
  },
  methods: {
    checkShowCard() {
      this.card = document.body.scrollTop > 100;
    },
    ...mapMutations({
      triggerDrawer: TRIGGER_DRAWER,
    }),
  },
  mounted() {
    window.addEventListener('scroll', () => this.checkShowCard(), { passive: true });
  },
};
