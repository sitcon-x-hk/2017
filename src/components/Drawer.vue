<template>
  <v-navigation-drawer
        temporary
        v-model="drawer"
  >
    <v-list>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState(['drawer']),
    data() {
      return { display: true };
    },
    mounted() {
      this.display = true;
    },
  };
</script>
