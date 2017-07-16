<template>
  <v-navigation-drawer
        temporary
        v-model="drawer"
  >
    <v-list dense>
      <v-list-tile :to="nav.link" v-for="nav in links" :key="nav.display">
        <v-list-tile-content>
          {{ nav.display }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="sass">
  @import color

  .router-link-exact-active
    color: lighten($theme-red, 5%) !important
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
