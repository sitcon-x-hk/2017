<template>
  <div>
    <v-parallax src="/2017/img/background.jpg">
      <v-layout column align-center justify-center>
        <h2 class="white--text">SITCON x HK 2017</h2>
        <p class="white--text">
          SITCON Student IT Conference, formed by students with passion in IT,
          a student-centered organisation hope to provide a stage for all Hong Kong students to express and develop their talent with Open Source.
          The theme of year 2016 is "Let's Open Source", hoping to join students in the world of Open Source.
        </p>
      </v-layout>
    </v-parallax>
  </div>
</template>

<style scoped lang="sass">
  .align-center.justify-center
    width: 80%
    margin: auto
    overflow: hidden
    @media screen and (min-width: 576px)
      p
        text-align: center
        font-size: 1.5rem
</style>

