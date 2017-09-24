<template>
  <topic
    title="Students’ Information Technology Conference 2018 in Taiwan"
    speaker="Angeline & Ballfish"
    icon="/2017/img/speaker/sitcon-tw.png"
    venue="LT 17"
    time="18:00 - 18:05"
    :tags="tags"
    language="English"
  >
    <div slot="speaker">
      <p>Angeline: The President of 2018 SITCON Taiwan. Major is geology, but it’s work in 5xruby Inc. now.</p>
      <p>ballfish: The Vice President of 2018 SITCON Taiwain. Major is computer science and information management.</p>
    </div>
    <div slot="abstract">
      <p>
        SITCON stands for “Students’ Information Technology Conference”, which is voluntarily formed by students,
        independently held by students, while keeping students as main aim and interest.
      </p>
      <p>
        In this agenda, We will introduce the topic of 2018 SITCON Taiwan, and share our experience in SITCON Taiwan.
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
          'SITCON',
          'SITCON - TW',
        ],
      };
    },
  };
</script>
