<template>
  <topic
    speaker="Gary Kwong"
    title="Discussion on cultural differences between Easterners & Westerners"
    icon="/2017/img/speaker/gary.jpg"
    community="Mozilla"
    time="15:45 - 16:30"
    venue="LT 18"
    :tags="tags"
  >
    <p slot="speaker">
      Gary Kwong is a senior security engineer at Mozilla and a long-time member of its community.
      He specialises in running JavaScript fuzzers that rigorously test SpiderMonkey -
      the JavaScript engine of the Gecko platform on which Mozilla Firefox is based.
      Gary is passionate about global cultures, human languages, and lately, ballroom/swing dancing.
    </p>
    <p slot="abstract">
      In various global open source communities (e.g. Mozilla), we frequently have to deal with people from different languages and cultures.
      Very often, miscommunication arises even when there is no ill-will on either side.
      This discussion aims to raise awareness of some of these differences and will share some tips on how to bridge these gaps,
      in order to improve relationships on either side.
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
          'Culture',
          'Exploration',
        ],
      };
    },
  };
</script>
