<template>
  <topic
    title="Essential Blockchain Knowledge for Bitcoin Investment"
    speaker="Johnny Chiu"
    icon="/2017/img/speaker/johnny.jpg"
    venue="LT 18"
    time="16:45 - 17:30"
    :tags="tags"
    language="Cantonese"
    live="https://www.youtube.com/embed/o3-19t3nFcY"
  >
    <div slot="speaker">
      <ul>
        <li>CUHK Year 3 Student, Major in Information Engineering</li>
        <li>Winner of an International Blockchain Competition and beat competitors from around 20 countries.</li>
        <li>Contributed to a HKD$2.8M blockchain seed project</li>
        <li>Work experince in ASTRI, HKT, University departments, Blockchain Startups.</li>
        <li>Invited to join Research project with Professors on different Blockchain topics</li>
        <li>Earn more than 1000x from Investing Bitcoin by Algo High Frequent Trading Robot within 3 months</li>
      </ul>
    </div>
    <div slot="abstract" class="mb-4">
      <p>
        Cryto-Currency investment is a hot topic these days. Like investing in stock markets,
        we need to know the characteristics of Blockchain Technology before we do investment on Crypto-Market.
        I will also Demo the process of creating a new token.
      </p>
      <p>Outline</p>
      <ol>
        <li>What is Blockchain and Bitcoin</li>
        <li>Show case of Blockchain applications</li>
        <li>How to join an ICO</li>
      </ol>
      <p>Outcome</p>
      <ol>
        <li>Audience will know what Blockchain is</li>
        <li>They will know how to code a smart contract</li>
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
          'FinTech',
          'Blockchain',
          'Bitcoin',
          'ICO',
          'Exploration',
        ],
      };
    },
  };
</script>
