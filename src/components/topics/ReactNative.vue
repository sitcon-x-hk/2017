<template>
  <topic
    title="Transferring Painlessly from Web to Mobile Apps with React Native"
    speaker="Rachel"
    icon="/2017/img/speaker/rachel.jpg"
    venue="LT 17"
    time="12:15 - 13:00"
    :tags="tags"
  >
    <p slot="speaker">
      A Taiwanese Computer Engineering student studying at HKU.
      Every piece of knowledge is at a beta stage.
      Wishing to advance from knowing nothing to knowing something.
    </p>
    <p slot="abstract">
      Mobile app development used to be a totally different story from web development — developers code in different languages,
      target on different hardware resources, and deal with different performance issues.
      Fortunately, solutions have been provided by some tech giants to fill up part of the gap
      and to make mobile app development much more approachable to web developers.
      React Native is one of the most popular solutions,
      by which you can build mobile apps with zero knowledge of Java and Swift/Objective-C
      without sacrificing the performance.
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
          'React',
          'React Native',
          'Mobile App',
          'Exploration',
        ],
      };
    },
  };
</script>
