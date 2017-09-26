<template>
  <topic
    title="Hands-on session – Machine Learning Studio"
    speaker="(TBD)"
    icon="/2017/img/speaker/unknown.png"
    venue="LT 17"
    time="15:30 - 17:30"
    :tags="tags"
    language="English"
  >
    <p slot="speaker">(TBD)</p>
    <div slot="abstract">
      <p>
      As exciting and mighty as artificial intelligence (A.I.) goes, only very few people know what it is or how to take advantage of.
      In this hands-on session, we starting sharp with the important machine learning, one of the application of A.I.,
      to learn the basics to manipulate machines to get access to data, learn patterns by themselves and carry out predictive analysis ultimately.
      This is an introduction to machine learning where participants will be able to understand what is machine learning,
      the capabilities of such and get hands-on to try machine learning studio with Microsoft professionals.
      </p>
      <p>
        Please register for the workshop: <a href="https://aka.ms/datasciencelab" target="_blank">https://aka.ms/datasciencelab</a>
      </p>
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
          'Workshop',
          'Microsoft',
        ],
      };
    },
  };
</script>
