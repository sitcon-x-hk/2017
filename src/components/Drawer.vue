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
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="sass">
  @import color

  .router-link-exact-active .list__tile__content
    font-weight: bold
</style>

<script>
  import { mapState } from 'vuex';

  export default {
    props: ['links'],
    computed: mapState(['drawer']),
    data() {
      return { display: true };
    },
    mounted() {
      this.display = true;
    },
  };
</script>
