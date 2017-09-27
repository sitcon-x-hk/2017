<template>
  <topic
    title="A Glimpse of Data Science and How to Kick-start Your Cloud Career"
    speaker="Delon Yau"
    time="14:30 - 15:15"
    venue="LT 17"
    icon="/2017/img/speaker/delonyau.jpg"
    :tags="tags"
    language="English"
  >
    <div slot="speaker">
      <p>
        Delon is currently a Technical Evangelist in the Commercial Software Engineering Group at Microsoft,
        evangelizing developers on artificial intelligence on cloud, big data analytics and IoT. 
      </p>
      <p>
        Prior to Joining Microsoft HK, he worked for Microsoft UK as a machine learning developer supporting
        the data analytics development of a cloud-based online shopping platform.
        Besides, he worked in a number of startups and solution companies with broad technology experience.
        He is a hardware and software engineer with experience in sensors, micro-controllers, wearable devices, etc.
        He also came with backend e-commerce analytics and cognitive skills. 
      </p>
      <p>
        Delon spent 7 years in the UK for his studies and work before coming back to Hong Kong in 2016.
        He holds a Bachelor's degree in Electrical and Electronic Engineering
        from Imperial College London and a Master's degree in Computer Science from University College London.
      </p>
    </div>
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
