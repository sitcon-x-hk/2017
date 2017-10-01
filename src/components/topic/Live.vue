<template>
  <v-btn primary :href="url" target="_blank">
    <v-icon dark>play_arrow</v-icon>
  </v-btn>
</template>


<script>
  export default {
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
