<template>
  <topic
    title="Welcome the Brand New Ruby-like Language - Goby"
    speaker="Maxwell"
    icon="/2017/img/speaker/maxwell.jpg"
    time="11:20 - 12:05"
    venue="LT 18"
    :tags="tags"
    language="English"
    live="https://www.youtube.com/watch?v=211a5wV55Zs"
  >
    <p slot="speaker">
      Ruby on Rails, ReactJS and RxJS developer.
      A Rails developer in 5xRuby Inc.
      Passionate on creating pretty UI and using JavaScript to create fun things in CodePen.io
    </p>

    <div slot="abstract">
      <p>
        The father of Ruby - Matz said that Ruby is designed for productivity and fun.
        The world's brand new programming language - Goby is deeply inspired by Ruby
        and implemented with Go which provides web developers to build web APIs and microservices.
      </p>
      <p>
        I'll introduce the special features in Goby language and share my experience on contributing the open source project.
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
          'Ruby',
          'Go',
          'Innovation',
        ],
      };
    },
  };
</script>
