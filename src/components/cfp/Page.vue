<template>
  <v-layout column>
    <h3 class="primary--text">Call for Paper</h3>
    <v-container grid-list-md fluid class="mt-0">
      <v-layout row class="mb-3">
        <v-flex xs12>
          <v-card>
            <v-card-title primary-headline>
              <div class="headline primary--text">Keynote: Exploration and Innovation</div>
            </v-card-title>
            <v-card-text>
              <p>
                Exploration, as the name suggests, is the activity of searching and finding out about something.
                The role of this year keynote is to help students to explore different fields of IT industry
                and innovate them to integrate knowledge of IT fields and other fields,
                in order to help students to find their career path in IT industry.
                In this keynote, speakers can share the varieties of jobs for IT-related majors’ students.
                Besides, speakers can tell the possibilities of works and inventions by integrating IT skills
                with knowledge in other fields like finance, design, and mechanics.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row class="my-3">
        <v-flex xs12>
          <v-card>
            <v-card-title primary-headline>
              <div class="headline primary--text">Topic</div>
            </v-card-title>
            <v-card-text>
              <p>
                We warmly welcome students to provide their own topics and share the skills and experiences
                from the point of view of students.
              </p>
              <p>
                For topics related to exploration on technology,
                we hope speakers can talk about data science / IoT / Frontend / Backend on the beginner level.
              </p>
              <p>
                For topics related to innovations, any topic that is a new idea or come up with new thing are welcome.
                You may share about new method you used in the project or homework,
                or the development in a small and interesting project by you.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <h4 class="primary--text">Topic Type</h4>
    <v-container grid-list-md fluid class="mt-0">
      <v-layout row>
        <v-flex xs12 l6>
          <v-card>
            <v-card-title primary-headline>
              <div class="headline primary--text">Talk</div>
            </v-card-title>
            <v-card-text>
              <p>
                Talk takes 45 minutes. The time of Q&amp;A session is
                included and assigned to speaker.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 l6>
          <v-card>
            <v-card-title>
              <div class="headline primary--text">
                <div class="headline primary--text">Lightning Talk</div>
              </div>
            </v-card-title>
            <v-card-text>
              <p>
                Open for register on the morning of the conference. You have only 5 minutes to present.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container justify-center align-center class="my-5">
      <v-btn tag="a" target="_blank" primary large href="https://cfp.sitcon.cloud/activities/SITCON-x-HK-2017">
        Submit Paper
      </v-btn>
    </v-container>
    <h4 class="primary--text">Important Issue</h4>
    <v-container grid-list-md fluid class="mt-0">
      <v-layout row class="mb-3">
        <v-flex xs12>
          <v-card>
            <v-card-title primary-headline>
              <div class="headline primary--text">
                Reminder
              </div>
            </v-card-title>
            <v-card-text>
              <ul>
                <li>The CFP Platform requires for Github OAuth login. Please register an account if you don't get one.</li>
                <li>You may submit more than one paper.</li>
                <li>Lightning Talk would occur before the closing ceremony.</li>
                <li>You are welcome to submit for the lightning no matter your paper is chosen or not.</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row class="my-3">
        <v-flex xs12>
          <v-card>
            <v-card-title primary-headline>
              <div class="headline primary--text">Recording and Live Stream</div>
            </v-card-title>
            <v-card-text>
              <p>
                All sessions would be recorded and live streaming on the internet.
                Please contact us if you do not want to be recorded.
                Speaker may choose to release the record videos and slides under Creative Commons or other licenses.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md fluid class="my-5">
      <v-layout row>
        <v-flex xs12>
          <v-card flat>
            <v-card-text style="text-align: center">
              Please feel free to contact us via <a href="mailto:cfp@hk.sitcon.org">cfp@hk.sitcon.org</a>
              if you have any question on Call for Paper
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
