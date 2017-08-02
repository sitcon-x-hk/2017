import { mapMutations, mapState } from 'vuex';
import { TRIGGER_DRAWER } from '../../store/mutations';


const eventbrite = 'https://sitcon-x-hk-2017.eventbrite.com/?aff=website&utm_source=website&utm_medium=website&utm_campaign=topbar&utm_content=register';

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
    registerLink() {
      if (this.clientID && this.clientID.length > 0) {
        return `${eventbrite}&_eboga=${this.clientID}`;
      }
      return eventbrite;
    },
    ...mapState(['clientID']),
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
