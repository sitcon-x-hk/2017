<template>
  <v-toolbar light prominent>
    <v-toolbar-side-icon v-if="isMobile" @click.native="openDrawer" />
    <router-link :to="{name: 'home'}" data-role="toolbar">
      <img id="logo" src="/2017/img/icons/logo.png" class="hidden-xs-only">
    </router-link>
    <router-link :to="{name: 'home'}" data-role="toolbar" class="brand hidden-md-and-up">
      SITCON x HK 2017
    </router-link>
    <v-toolbar-items v-if="!isMobile">
      <v-btn v-for="nav in links" :key="nav.display" :to="nav.link">
        {{ nav.display }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items v-if="!isMobile">
      <v-btn class="white--text primary" tag="a" href="#">
        Get Ticket
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style scoped lang="sass" src="./toolbar.sass"></style>

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
