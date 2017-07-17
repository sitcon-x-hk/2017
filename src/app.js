export default {
  name: 'app',
  components: {
    Toolbar: () => import(/* webpackChunkName: "app" */ './components/Toolbar.vue'),
    Drawer: () => import(/* webpackChunkName: "app" */ './components/Drawer.vue'),
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
  },
  mounted() {
    window.addEventListener('resize', this.resizeHandler, { passive: false });
  },
};
