<template>
  <topic
    title="Electronic tools for science - how I ended up building gear for atomic physics in Hong Kong."
    speaker="Sébastien Bourdeauducq"
    icon="/2017/img/speaker/sebastien.png"
    venue="LT 17"
    time="16:45 - 17:30"
  >
    <p slot="speaker">
      Sébastien is the founder and a director of M-Labs Ltd,
      a small company designing software and hardware for physics laboratories worldwide.
    </p>
    <p slot="abstract">
      Modern physics experiments cannot take place without massive amounts of computer automation and data crunching.
      In this talk, I will present the ARTIQ control system that we have been developing
      and how it is used by researchers in quantum information and atomic physics.
      I will also tell you how I got into this field, why it's exciting, and how you too can get involved.
    </p>
  </topic>
</template>

<script>
  export default {
    components: {
      Topic: () => import('../topic/Component.vue'),
    },
  };
</script>
