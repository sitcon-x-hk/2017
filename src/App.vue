<template>
  <v-app>
    <toolbar />
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer>
      <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-sa/3.0/hk/">
        <img alt="Creative Commons Licence" src="https://licensebuttons.net/l/by-sa/3.0/hk/88x31.png">
      </a>
      This work is licensed under a CC BY-SA 3.0 Hong Kong License . Logos and trademarks belong to their respective owners.
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  components: {
    Toolbar: () => import('./components/Toolbar.vue'),
  },
};
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/settings/_colors.styl'

  $theme := {
    primary: #9D1F25
    accent: #000
    secondary: #fff
    info: $blue.base
    warning: $amber.base
    error: $red.accent-2
    success: $green.base
  }

  @import '../node_modules/vuetify/src/stylus/main.styl'

  @media screen and (min-width: 769px)
    .footer
      position: fixed
      bottom: 0
      left: 0
      width: 100%
      z-index: 3
</style>
