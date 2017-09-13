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
                    {{ sponsor.intro }}
                  </p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="mt-0">
      <h4 class="headline">Bronze Sponsor</h4>
      <v-layout row>
        <v-flex xs12 lg6>
          <v-card v-for="sponsor in sponsors.bronze">
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
                    {{ sponsor.intro }}
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
