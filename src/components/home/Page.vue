<template>
  <span data-page="home">
    <jumbotron />
    <v-container>
    <v-card class="mt-4" light flat>
      <v-card-title primary-title class="justify-center">
        <div>
          <h3 class="headline primary--text">About SITCON x HK</h3>
          <p>
            SITCON x HK, Hong Kong Student IT Conference, formed by students with passion in IT,
            a student-centered organisation hope to provide a stage for all Hong Kong students
            to express and develop their talentwith Open Source.
            The theme of year 2017 is "Exploration and Innovation", hoping to help students finding their way in IT industry.
          </p>
        </div>
      </v-card-title>
    </v-card>
    <v-card light flat>
      <v-card-title primary-title class="justify-center">
        <div>
          <h3 class="headline primary--text">Theme: Exploration and Innovation</h3>
          <p>
            Our theme this year is "Exploration and Innovation". We aim to provide a variety of talks to allow students
            to explore different fields of IT industry. We planned to have talks on several fields such as front end, back end, data science and security.
            Besides, we hope to encourage students to integrate IT skills with knowledge in other fields like finance, design, and mechanics.
            Therefore, to inspire them to implement their imagination in other fields by using IT skills.
          </p>
        </div>
      </v-card-title>
    </v-card>
    <v-card light flat>
      <v-card-title primary-title class="justify-center">
        <div>
          <h3 class="headline primary--text">Code of Conduct</h3>
          <p>
            To provide a friendly environment in the conference, we have set up a Code of Conduct.
            We hope you can follow the Code of Conduct.
          </p>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-spacer />
        <v-btn primary :to="{name: 'coc'}">
          View
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-container>
  </span>
</template>

<style scoped lang="stylus" src="./home.styl"></style>

<script>
  export default {
    components: {
      Jumbotron: () => import(/* webpackChunkName: "home" */ '../jumbotron/Component.vue'),
    },
  };
</script>

