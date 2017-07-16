<template>
  <v-toolbar dark prominent>
    <v-toolbar-side-icon v-if="isMobile" @click.native="openDrawer" />
    <img id="logo" src="/2017/img/icons/logo.png" class="hidden-xs-only">
    <v-toolbar-title>
      <span class="brand">SITCON x HK</span>
      2017
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn :to="{name: 'home'}">Home</v-btn>
      <v-btn>About Us</v-btn>
      <v-btn :to="{name: 'coc'}">Code Of Conduct</v-btn>
      <v-btn>Sponsorship</v-btn>
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

  .router-link-exact-active
    @extend .brand

  .btn
    font-size: 1rem
</style>

<script>
  import { mapMutations } from 'vuex';
  import { TRIGGER_DRAWER } from '../store/mutations';

  export default {
    props: {
      isMobile: Boolean,
      drawer: Boolean,
    },
    methods: {
      openDrawer() {
        setTimeout(() => this.triggerDrawer(), 100);
      },
      ...mapMutations({
        triggerDrawer: TRIGGER_DRAWER,
      }),
    },
  };
</script>
