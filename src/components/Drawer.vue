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
      <v-list-tile tag="a" class="ticket" target="_blank" :href="registerLink">
        <v-list-tile-content>
          Get Ticket
        </v-list-tile-content>
      </v-list-tile>
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

  const eventbrite = 'https://sitcon-x-hk-2017.eventbrite.com/?aff=website&utm_source=website&utm_medium=website&utm_campaign=drawer&utm_content=register';

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
      registerLink() {
        if (this.clientID && this.clientID.length > 0) {
          return `${eventbrite}&_eboga=${this.clientID}`;
        }

        return eventbrite;
      },
      ...mapState({
        drawerState: 'drawer',
        clientID: 'clientID',
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
