<template>
  <div>
    <div class="backdrop">
      <div class="background">
        <img src="/2017/img/background.jpg" />
      </div>
      <v-layout column align-center justify-center class="content">
        <h2 class="white--text">SITCON x HK 2017</h2>
        <p class="white--text">
          SITCON Student IT Conference, formed by students with passion in IT,
          a student-centered organisation hope to provide a stage for all Hong Kong students to express and develop their talent with Open Source.
          The theme of year 2016 is "Exploration and Innovation", hoping to help students finding their way in IT industry.
        </p>
      </v-layout>
    </div>
    <v-card class="blue-grey darken-2 white--text">
      <v-card-title primary-title>
        <div class="headline">Register for event</div>
      </v-card-title>
      <v-card-actions>
        <v-spacer />
        <v-btn flat dark>Register</v-btn>
      </v-card-actions>
    </v-card>
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
  .backdrop
    position: relative
    overflow: hidden
    background-repeat: no-repeat
    padding: 0
    margin: 0
    z-index: 0
    height: 500px
    margin-bottom: 1rem

    .content
      display: flex
      flex-direction: column
      color: #fff
      height: 100%
      z-index: 2
      position: relative
      justify-content: center
      padding: 0 1rem
    .background
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      z-index: 1

      img
        position: absolute
        bottom: 0
        left: 50%
        min-width: 100%
        min-height: 100%
        display: block
        transform: translate3d(-50%, 214px, 0px)
        z-index: 1
</style>

