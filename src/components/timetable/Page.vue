<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs12>
        <div class="primary white--text py-2 px-2 headline">Timetable</div>
        <v-list three-line class="pt-0">
          <template v-for="(session, index) in sessions">
            <v-divider v-if="session.divider" :key="index"></v-divider>
            <v-list-tile v-else-if="session.issue" :key="session.issue">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ session.issue }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  <template v-if="session.venue">
                    <v-icon>room</v-icon> {{ session.venue }}
                  </template>
                  <v-icon>access_time</v-icon> {{ session.time }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-else :key="session.title" avatar :to="session.link" :target="linkTarget">
              <v-list-tile-avatar>
                <img :src="session.icon" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ session.title }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ session.speaker }}
                  <br>
                  <v-icon>room</v-icon> {{ session.venue }}
                  <v-icon>access_time</v-icon> {{ session.time }}
                  <v-icon>chat_bubble</v-icon> {{ session.language }} (with English slide)
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<style scoped lang="stylus">
  .list
    border 1px solid rgba(0,0,0,0.12)
</style>

<script src="./script.js"></script>
