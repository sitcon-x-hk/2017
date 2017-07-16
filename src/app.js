export default {
  name: 'app',
  components: {
    Toolbar: () => import('./components/Toolbar.vue'),
    Drawer: () => import('./components/Drawer.vue'),
  },
  data() {
    return {
      width: window.innerWidth,
      links: [
        { link: { name: 'home' }, display: 'Home' },
        { link: '#', display: 'Organizer' },
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
