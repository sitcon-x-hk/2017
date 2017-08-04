<template>
  <div id="toolbar" :class="toolbarClass">
    <nav>
      <v-btn icon @click.native.stop="triggerDrawer " v-if="isMobile">
        <v-icon class="primary--text">menu</v-icon>
      </v-btn>
      <div class="title hidden-md-and-up">
        <router-link :to="{name: 'home'}" data-role="brand">SITCON x HK 2017</router-link>
      </div>
      <template v-if="!isMobile">
        <div class="content">
          <router-link :to="nav.link" v-for="nav in links" :key="nav.display">
            {{ nav.display }}
          </router-link>
        </div>
        <v-spacer />
        <a class="register" target="_blank" :href="registerLink">Register</a>
      </template>
    </nav>
  </div>
</template>

<style scoped lang="sass" src="./style.sass"></style>

<script src="./script.js"></script>
