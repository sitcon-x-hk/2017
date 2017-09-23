<template>
  <v-app :class="route">
    <drawer v-if="isMobile" :links="links" />
    <toolbar :isMobile="isMobile" :links="links" />
    <main>
      <v-container fluid v-if="route != 'home'">
        <transition name="fade-transition">
          <router-view />
        </transition>
      </v-container>
      <transition name="fade-transition" v-else>
        <router-view />
      </transition>
    </main>
    <footer-social />
    <hashtag></hashtag>
  </v-app>
</template>

<script src="./app.js"></script>

<style lang="stylus" src="./app.styl"></style>
