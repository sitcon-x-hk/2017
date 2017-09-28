<template>
  <topic
    title="Hands-on session – Machine Learning Studio"
    speaker="Delon Yau"
    icon="/2017/img/speaker/delonyau.jpg"
    venue="LT 17"
    time="15:30 - 17:30"
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
    <div slot="abstract">
      <p>
      As exciting and mighty as artificial intelligence (A.I.) goes, only very few people know what it is or how to take advantage of.
      In this hands-on session, we starting sharp with the important machine learning, one of the application of A.I.,
      to learn the basics to manipulate machines to get access to data, learn patterns by themselves and carry out predictive analysis ultimately.
      This is an introduction to machine learning where participants will be able to understand what is machine learning,
      the capabilities of such and get hands-on to try machine learning studio with Microsoft professionals.
      </p>
      <p>
        Please register for the workshop: <a href="https://aka.ms/datasciencelab" target="_blank">https://aka.ms/datasciencelab</a>
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
          'Workshop',
          'Microsoft',
        ],
      };
    },
  };
</script>
