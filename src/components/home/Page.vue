<template>
  <div data-page="home">
    <jumbotron />
    <v-card class="blue-grey darken-2 white--text fill-width">
      <v-card-actions>
        <div class="headline">Register for event</div>
        <v-spacer />
        <v-btn flat dark>Register</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mt-4" light>
      <v-card-title primary-title>
        <div>
          <h3 class="headline primary--text">About SITCON x HK</h3>
          <p>
            SITCON Student IT Conference, formed by students with passion in IT,
            a student-centered organisation hope to provide a stage for all Hong Kong students to express and develop their talent with Open Source.
            The theme of year 2017 is "Exploration and Innovation", hoping to help students finding their way in IT industry.
          </p>
        </div>
      </v-card-title>
    </v-card>
    <v-card light>
      <v-card-title primary-title>
        <div>
          <h3 class="headline primary--text">Theme: Exploration and Innovation</h3>
          <p>
            Our theme this year is "Exploration and Innovation". We aim to provide a variety of talks to allow students to explore different fields of IT industry. We planned to have talks on several fields such as front end, back end, data science and security. Besides, we hope to encourage students to integrate IT skills with knowledge in other fields like finance, design and mechanics. Therefore, to inspire them to implement their imagination in other fields by using IT skills.
          </p>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<style scoped lang="sass" src="./home.sass"></style>

<script>
  export default {
    components: {
      Jumbotron: () => import(/* webpackChunkName: "home" */ './Jumbotron.vue'),
    },
  };
</script>

