<template>
  <v-layout column>
    <h3 class="primary--text">Sponsor</h3>
    <v-container class="mt-0">
      <h4 class="headline">Diamond Sponsor</h4>
      <v-layout row>
        <v-flex xs12>
          <v-card v-for="sponsor in sponsors.diamond">
            <v-container grid-list-lg>
              <v-layout row class="hidden-lg-and-up">
                <v-avatar tile size="200">
                  <img :src="sponsor.logo" class="avatar-img">
                </v-avatar>
              </v-layout>
              <v-layout row>
                <v-flex lg3 class="hidden-md-and-down">
                  <v-avatar tile size="200">
                    <img :src="sponsor.logo" class="avatar-img">
                  </v-avatar>
                </v-flex>
                <v-flex xs12 lg9>
                  <p>
                    Microsoft Student Partner (MSP) Program has been developed since 2001 with 3,000+ student partners from over 100 countries.
                    Our vision is to build a Microsoft community in campus for students
                    with technical background who are passionate to technology, and cultivate them as technopreneurs.
                    MSPs are Technopreneurs to explore wide and deep throughout the realm of IT to bring on impact
                    and digital transformation to vitalize every walks of life.
                    This year, we have a wide range of activities to transform and accelerate for students’ success,
                    including: Hackathon Contests, Tech/Coffee Series, Insider Technical Training Workshops,
                    olutions Building Projects, Microsoft Partners Event & Entrepreneurship Acceleration Series.
                    With all these initiatives, students will be able to develop business acumen
                    while gearing up their technical skills to map to business reality in IT.
                  </p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<style scoped lang="stylus">
  .avatar-img
    max-width 100%
</style>

<script src="./script.js"></script>
