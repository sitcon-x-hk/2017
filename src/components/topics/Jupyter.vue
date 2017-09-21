<template>
  <topic
    title="Play Python around with Jupyter"
    speaker="Wong Ho Wa"
    icon="/2017/img/speaker/unknown.png"
    venue="LT 17"
    time="15:45 - 16:30"
    :tags="tags"
    language="Cantonese"
  >
    <p slot="speaker">
       Currently working at Oursky. Ex-amazon software development engineer. Now working on open data and open source software.
    </p>

    <div slot="abstract" class="mb-4">
      <p>In this talk, students can learn how to do basic data processing and visualization with jupyter in a nutshell.</p>
      <p>Basic walkthrough of Jupyter, Matplotlib and Pandas including</p>
      <ol>
        <li>Jupyter Introduction & Installation</li>
        <li>Simple Python Programming</li>
        <li>Data Importing and Manipulation</li>
        <li>Graph Plotting</li>
      </ol>
    </div>
  </topic>
</template>

<script>
  export default {
    components: {
      Topic: () => import('../topic/Component.vue'),
    },
    data() {
      return {
        tags: [
          'Python',
          'Jupyter',
          'Data Science',
          'Exploration',
        ],
      };
    },
  };
</script>
