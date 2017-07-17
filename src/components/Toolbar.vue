<template>
  <v-toolbar dark prominent>
    <v-toolbar-side-icon v-if="isMobile" @click.native="openDrawer" />
    <router-link :to="{name: 'home'}" data-role="toolbar">
      <img id="logo" src="/2017/img/icons/logo.png" class="hidden-xs-only">
    </router-link>
    <v-toolbar-title>
      <router-link :to="{name: 'home'}" data-role="toolbar">
        <span class="brand">SITCON x HK</span>
        2017
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items v-if="!isMobile">
      <v-btn v-for="nav in links" :key="nav.display" :to="nav.link">
        {{ nav.display }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style scoped lang="sass">
  @import color

  #logo
    float: left
    width: 80px
    margin-top: -20px

  .brand
    color: lighten($theme-red, 5%) !important
    font-weight: bold

  .toolbar
    color: black

  .toolbar__title
    font-size: 2rem

  .btn
    font-size: 1rem
  a
    text-decoration: none
  [data-role=toolbar]
    color: white
</style>

<script>
  import { mapMutations } from 'vuex';
  import { TRIGGER_DRAWER } from '../store/mutations';

  export default {
    props: {
      isMobile: Boolean,
      drawer: Boolean,
      links: Array,
    },
    methods: {
      openDrawer() {
        setImmediate(() => this.triggerDrawer());
      },
      ...mapMutations({
        triggerDrawer: TRIGGER_DRAWER,
      }),
    },
  };
</script>
