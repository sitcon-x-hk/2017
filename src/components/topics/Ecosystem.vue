<template>
  <topic
    title="Ecosystem of IT industry"
    speaker="Wan Leung Wong"
    community="Hong Kong Linux User Group"
    icon="/2017/img/speaker/wanleung.jpg"
    venue="LT 17"
    time="10:25 - 11:10"
    :tags="tags"
  >
    <p slot="speaker">
      Wan Leung, the Chairman of Hong Kong Linux User Group, was graduated from the Queen Mary University of London
      and worked as a software engineer in Apple Inc. for a year. With more than 10 years experience on software
      developments, he becomes a professional in IT industry, especially talented in technology like Linux, MySQL and Perl.
    </p>
    <p slot="abstract">
      In this keynote, Wan Leung will give a brief introduction on Hong Kong IT working opportunities, business and environments.
      This Keynote will help audience to explore different fields and jobs in IT industry,
      including the integration of business knowledge and programming,
      in order to help students in different majors to find their career path.
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
          'Ecosystem',
        ],
      };
    },
  };
</script>
