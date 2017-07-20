<template>
  <v-card light>
    <v-card-title primary-title>
      <div>
        <h3 class="headline black--text">Venue</h3>
        <div>4/F, Purple Zone, Academic 1, City University of Hong Kong Academic 1</div>
      </div>
    </v-card-title>
    <v-card-text>

      <gmap-map
        :center="center"
        :zoom="zoom"
      >
        <gmap-marker
          :position="center"
          cliclable
        />
      </gmap-map>
    </v-card-text>
  </v-card>
</template>

<style lang="sass" scoped>
  .vue-map-container
    width: 100%
    height: 500px
</style>

<script>
  import Vue from 'vue';
  import * as VueGoogleMaps from 'vue2-google-maps';

  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.GOOGLE_API_KEY,
    },
    installComponents: true,
  });

  export default {
    data() {
      return {
        center: {
          lat: 22.337609,
          lng: 114.171540,
        },
        zoom: 15,
      };
    },
  };
</script>
