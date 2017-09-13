<template>
  <v-layout column>
    <h3 class="primary--text">Organizer</h3>
    <v-container grid-list-md fluid class="mt-0">
      <v-layout row wrap class="list-organizers">
        <v-flex xs12 v-for="organizer in organizers" :key="organizer.name">
          <v-card light class="mt-2 mb-2">
            <v-card-media :src="organizer.logo" height="330px" />
            <v-card-title class="justify-center">
                <h3 class="headline black--text">{{ organizer.name }}</h3>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!--<h4 class="primary&#45;&#45;text mt-5">Co-Organizer</h4>-->
      <!--<v-container grid-list-md fluid>-->
        <!--<v-layout row wrap class="list-supporting-organizers">-->
          <!--<v-flex xs12 md6 lg6 v-for="organizer in coOrganizers" :key="organizer.name">-->
            <!--<v-card light>-->
              <!--<v-card-media :src="organizer.logo" height="230px" />-->
              <!--<v-card-title primary-title class="justify-center">-->
                <!--<h3 class="headline black&#45;&#45;text">{{ organizer.name }}</h3>-->
              <!--</v-card-title>-->
            <!--</v-card>-->
          <!--</v-flex>-->
        <!--</v-layout>-->
      <!--</v-container>-->
    <h4 class="primary--text mt-5">Supporting Organizer</h4>
    <v-container grid-list-md fluid>
      <v-layout row wrap class="list-supporting-organizers">
        <v-flex xs12 md6 lg6 v-for="organizer in supporting" :key="organizer.name">
          <v-card light>
            <v-card-media :src="organizer.logo" height="230px" />
            <v-card-title primary-title class="justify-center">
              <h3 class="headline black--text">{{ organizer.name }}</h3>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<style lang="stylus" src="./page.styl"></style>

<script>
  export default {
    data() {
      return {
        organizers: [
          { name: 'SITCON x HK Community', logo: '/2017/img/icons/logo-312x312.png' },
          { name: 'Hong Kong Joint Universities Computer Association', logo: '/2017/img/logos/juca.png' },
          { name: 'City University of Hong Kong', logo: '/2017/img/logos/cityu.png' },
        ],
        coOrganizers: [
          { name: 'Computer Science Society, City University of Hong Kong Students’ Union', logo: '/2017/img/logos/cityu.png' },
          { name: 'Computer Science Association, Engineering Society, HKUSU', logo: '/2017/img/logos/hkucsa.png' },
          { name: 'The Computer Science Society, Hong Kong Baptist University', logo: '/2017/img/logos/bucss.png' },
          { name: 'Student Society of Computing, The Open University of Hong Kong', logo: '/2017/img/logos/oucs.png' },
          { name: 'The Hong Kong Polytechnic University Students’ Union Society of Computing Studies', logo: '/2017/img/logos/polyuscs.png' },
          { name: 'The Computer Science and Engineering Students’ Society, HKUSTSU', logo: '/2017/img/logos/ustcs.jpg' },
        ],
        supporting: [
          { name: 'Hong Kong Creative Technology Association', logo: '/2017/img/logos/cota.png' },
          { name: 'Open Source Hong Kong', logo: '/2017/img/logos/oshk.png' },
          { name: 'Hong Kong Linux User Group', logo: '/2017/img/logos/hklug.jpg' },
          { name: 'SITCON - TW Community', logo: '/2017/img/logos/sitcontw.png' },
          { name: 'Electrical and Electronic Engineering Association, Engineering Society, HKUSU', logo: '/2017/img/logos/eeea.png' },
        ],
      };
    },
  };
</script>
