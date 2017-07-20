<template>
  <v-app :class="route">
    <drawer v-if="isMobile" :links="links" />
    <toolbar :isMobile="isMobile" :links="links" />
    <main>
      <v-container fluid v-if="route != 'home'">
        <router-view />
      </v-container>
      <router-view v-else />
    </main>
    <footer-social />
  </v-app>
</template>

<script src="./app.js"></script>

<style lang="stylus" src="./app.styl"></style>
