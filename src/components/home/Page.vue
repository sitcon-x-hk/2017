<template>
  <div data-page="home">
    <jumbotron />
    <v-card class="blue-grey darken-2 white--text">
      <v-card-actions>
        <div class="headline">Register for event</div>
        <v-spacer />
        <v-btn flat dark>Register</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped lang="sass" src="./home.sass"></style>

<script>
  export default {
    components: {
      Jumbotron: () => import('./Jumbotron.vue'),
    },
  };
</script>

