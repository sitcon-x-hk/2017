<template>
  <v-navigation-drawer
        temporary
        v-model="drawer"
        light
  >
    <v-list dense>
      <v-list-tile :to="nav.link" v-for="nav in links" :key="nav.display" class="drawer-tile">
        <v-list-tile-content>
          {{ nav.display }}
        </v-list-tile-content>
      </v-list-tile>
      <!--<v-list-tile href="#" tag="a" class="ticket">-->
        <!--<v-list-tile-content>-->
          <!--Get Ticket-->
        <!--</v-list-tile-content>-->
      <!--</v-list-tile>-->
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="sass">
  @import color

  .router-link-exact-active .list__tile__content
    font-weight: bold
  .ticket
    background-color: $theme-red

    .list__tile__content
      color: white
      font-weight: bold

</style>

<script>
  import { mapState, mapMutations } from 'vuex';
  import { UPDATE_DRAWER } from '../store/mutations';

  export default {
    props: ['links'],
    computed: {
      drawer: {
        get() {
          return this.drawerState;
        },
        set(val) {
          this.updateDrawer(val);
        },
      },
      ...mapState({
        drawerState: 'drawer',
      }),
    },
    data() {
      return { display: true };
    },
    mounted() {
      this.display = true;
    },
    methods: mapMutations({
      updateDrawer: UPDATE_DRAWER,
    }),
  };
</script>
