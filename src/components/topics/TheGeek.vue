<template>
  <topic
    title="The Geek - Rock with Sanity in this Tech Gold Rush"
    speaker="Clara Chau"
    icon="/2017/img/speaker/clara.jpg"
    :tags="tags"
    time="12:15 - 13:00"
    venue="LT 18"
    language="English"
    live="https://www.youtube.com/watch?v=c32XtIpZqPo"
  >
    <p slot="speaker">
      Clara Chau is a software engineer currently running her own consultancy
      - Socialisn Media Intelligence Consultancy with Simon Lee.
      She designed and implemented a system for scanning and anticipating trends
      and outliers in the public discourse for advocacy and issues management.
      Clara, a self-taught engineer, has been working as a full-time software engineer since 16.
      Aside from her main consultancy, she has participated as a contractor in several startup projects.
      Currently, her work mainly focuses on Social Media Analytics, Data Science and Startups.
      Recently, Clara has been attracting medias' attention, as this self-determining programmer.
    </p>
    <div slot="abstract">
      <p>
        This talk aims to provide audience with critical thoughts, ideas from the speaker's experience,
        in the quest for engineering career and IT innovations, rather than information only.
        The talk consists of three sub-topics.
      </p>
      <h6>The Beautiful Programmer Mind</h6>
      <p>
        Being a programmer is more than a skill set, a job title. It's a role, and a mindset.
        So what is it in a programmer's character, that helps him stay on top of the world?
        We will take a journey through how to be "The Programmer" that can make a fruitful career,
        before we start worrying about rocking the IT industry with innovations.
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
          'Learner',
          'Data science',
          'Exploration',
        ],
      };
    },
  };
</script>
