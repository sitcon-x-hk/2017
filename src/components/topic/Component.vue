<template>
  <v-container>
    <v-layout column>
      <v-layout row>
        <v-flex xs12>
          <h5 class="primary--text">
            {{ title }}
          </h5>
          <h6>
            {{ speaker }}
          </h6>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-chip v-for="tag in tags" :key="tag" label>
            <v-icon left class="primary--text">label</v-icon>
            {{ tag }}
          </v-chip>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <live v-if="live" :title="title" :url="live"></live>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-card flat>
            <v-card-text class="px-0">
              <slot name="abstract"></slot>
              <p>
                <v-icon>alarm</v-icon>
                {{ time }}
              </p>
              <p>
                <v-icon>room</v-icon>
                {{ venue }}
              </p>
              <p>
                <v-icon>chat_bubble</v-icon>
                {{ language }} (with English slides)
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline">Speaker</h3>
                <div>{{ speaker }}</div>
              </div>
            </v-card-title>
            <v-container fluid grid-list-lg class="mt-0">
              <v-layout row class="hidden-lg-and-up">
                <v-flex xs12>
                  <v-avatar size="200" class="grey lighten-4">
                    <img :src="icon" class="avatar-img">
                  </v-avatar>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12 lg3 class="hidden-md-and-down">
                  <v-avatar size="200" class="grey lighten-4">
                    <img :src="icon" class="avatar-img">
                  </v-avatar>
                </v-flex>
                <v-flex xs12 lg7>
                  <slot name="speaker"></slot>
                  <p v-if="community">Community: {{ community }}</p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<style scoped lang="stylus">
  .card.card--flat
    background-color transparent
  .chip .icon
    color: #9d1f25 !important
  .avatar-img
    max-width 200px
</style>

<script src="./script.js"></script>
