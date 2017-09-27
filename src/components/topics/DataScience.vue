<template>
  <topic
    title="A Glimpse of Data Science and How to Kick-start Your Cloud Career"
    speaker="(TBD)"
    time="14:30 - 15:15"
    venue="LT 17"
    icon="/2017/img/speaker/unknown.png"
    :tags="tags"
    language="English"
  >
    <div slot="speaker">(TBD)</div>
    <p slot="abstract">
      Data Science is more than just a buzz-word and being a Data Scientist is not unachievable.
      While the world is going viral to digitally transform their businesses and operations, data
      and the insight hidden within are the momentum and justifications for decision-making to drive for excellence and sustainability.
      Dive in with data science professionals at Microsoft Hong Kong to get an introduction of what is data science
      and how it is empowering businesses and organizations from around the world to sail on success.
      We will also share with you how you can kick-start your unique cloud-career with Microsoft.
    </p>
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
          'Keynote',
          'Data Science',
        ],
      };
    },
  };
</script>
