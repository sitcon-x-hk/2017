<template>
  <v-card flat light class="mt-3 mb-5">
    <v-card-actions class="justify-center align-center">
      <v-btn icon href="https://www.facebook.com/SITCONxHK/" target="_blank" tag="a" class="mr-0 ml-0">
        <v-icon class="primary--text">fa-facebook-official</v-icon>
      </v-btn>
      <v-btn icon href="mailto:contact@hk.sitcon.org" tag="a" class="mr-0 ml-0">
        <v-icon class="primary--text">email</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text class="primary--text">
      <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-sa/3.0/hk/">
        <img alt="Creative Commons Licence" src="https://licensebuttons.net/l/by-sa/3.0/hk/88x31.png">
      </a>
      <br>
      This work is licensed under a CC BY-SA 3.0 Hong Kong License.
      <wbr>
      Logos and trademarks belong to their respective owners.
    </v-card-text>
  </v-card>
</template>

<style scoped lang="stylus">
  .card__text
    text-align: center
  .card
    opacity: 0.6
    &:hover
      opacity: 1
  .icon
    color: #6b1519 !important
</style>
