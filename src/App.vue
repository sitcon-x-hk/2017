<template>
  <v-app>
    <drawer v-if="isMobile" />
    <toolbar :isMobile="isMobile" />
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

<script src="./app.js"></script>

<style lang="stylus" src="./app.styl"></style>
