import { mapState } from 'vuex';

export default {
  name: 'app',
  components: {
    Toolbar: () => import('./components/toolbar/Component.vue'),
    Drawer: () => import(/* webpackChunkName: "app" */ './components/Drawer.vue'),
    FooterSocial: () => import(/* webpackChunkName: "app" */ './components/Footer.vue'),
    Jumbotron: () => import('./components/jumbotron/Component.vue'),
  },
  data() {
    return {
      width: window.innerWidth,
      links: [
        { link: { name: 'home' }, display: 'Home' },
        { link: { name: 'organizer' }, display: 'Organizer' },
        { link: { name: 'venue' }, display: 'Venue' },
        { link: { name: 'coc' }, display: 'Code of Conduct' },
      ],
    };
  },
  methods: {
    resizeHandler() {
      this.width = window.innerWidth;
    },
  },
  computed: {
    isMobile() {
      return this.width < 1024;
    },
    ...mapState({
      route: state => state.route.name,
    }),
  },
  mounted() {
    window.addEventListener('resize', this.resizeHandler, { passive: false });
  },
};
