<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
    <v-btn primary slot="activator">
      <v-icon dark>play_arrow</v-icon>
    </v-btn>
    <v-card>
      <v-toolbar dark class="primary">
        <v-btn icon @click="dialog = false" dark>
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <iframe width="854" height="480" :src="url" frameborder="0" allowfullscreen></iframe>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="stylus">
  .dialog.dialog--active
    width auto !important
  iframe
    display block
    margin 0 auto
</style>

<script>
  export default {
    data() {
      return {
        dialog: false,
      };
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  };
</script>
