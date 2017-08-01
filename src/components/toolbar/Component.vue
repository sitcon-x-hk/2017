<template>
  <div id="toolbar" :class="toolbarClass">
    <nav>
      <v-btn icon @click.native.stop="triggerDrawer " v-if="isMobile">
        <v-icon class="primary--text">menu</v-icon>
      </v-btn>
      <div class="title hidden-md-and-up">
        <router-link :to="{name: 'home'}" data-role="brand">SITCON x HK 2017</router-link>
      </div>
      <div v-if="!isMobile" class="content">
        <router-link :to="nav.link" v-for="nav in links" :key="nav.display">
          {{ nav.display }}
        </router-link>
      </div>
      <v-spacer />
      <a class="register hidden-md-and-down" target="_blank" href="https://sitcon-x-hk-2017.eventbrite.com/?aff=website&utm_source=website&utm_medium=website&utm_campaign=topbar&utm_content=register">Register</a>
    </nav>
  </div>
</template>

<style scoped lang="sass" src="./style.sass"></style>

<script src="./script.js"></script>
