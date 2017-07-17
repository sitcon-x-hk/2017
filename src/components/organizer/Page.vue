<template>
  <v-layout column>
    <h3 class="primary--text">Organizer</h3>
    <v-container grid-list-md fluid>
      <v-layout row wrap class="list-organizers">
        <v-flex xs12 v-for="organizer in organizers" :key="organizer.name">
          <v-card light>
            <v-card-media :src="organizer.logo" height="300px" />
            <v-card-title primary-title>
              <h3 class="headline black--text">{{ organizer.name }}</h3>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <h4 class="white--text headline mt-5">Supporting Organizers</h4>
    <v-container grid-list-md fluid>
      <v-layout row wrap class="list-supporting-organizers">
        <v-flex xs12 md6 lg6 v-for="organizer in supporting" :key="organizer.name">
          <v-card light>
            <v-card-media :src="organizer.logo" height="200px" />
            <v-card-title primary-title>
              <h3 class="headline black--text">{{ organizer.name }}</h3>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<style lang="sass" src="./page.sass"></style>

<script>
  export default {
    data() {
      return {
        organizers: [
          { name: 'SITCON x HK Community', logo: '/2017/img/icons/logo.png' },
          { name: 'Hong Kong Joint Universities Computer Association', logo: '/2017/img/logos/juca.png' },
        ],
        supporting: [
          { name: 'Hong Kong Creative Technology Association', logo: 'https://file.hkoscon.org/organizer/cota.png' },
          { name: 'Open Source Hong Kong', logo: 'https://file.hkoscon.org/organizer/oshk.png' },
          { name: 'Hong Kong Linux User Group', logo: 'https://file.hkoscon.org/organizer/hklug.jpg' },
          { name: 'SITCON - TW Community', logo: 'http://sitcon.org/2017/images/logos/sitcon.png' },
        ],
      };
    },
  };
</script>
