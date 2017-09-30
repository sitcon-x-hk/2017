<template>
  <topic
    title="Data Science and Engineering in Internet Media"
    speaker="Dick Tang"
    icon="/2017/img/speaker/unknown.png"
    venue="LT 17"
    time="11:20 - 12:05"
    :tags="tags"
    language="Cantonese"
    live="https://www.youtube.com/embed/7f626-aNtaI"
  >
    <p slot="speaker">
      Mr. TANG Chung Pan (aka. Dick Tang) is currently the Head of DevOps at WeMedia01,
      the company behind the leading Hong Kong new media hk01.com.
      He is leading his team building various backend infrastructure
      and improving development workflow to better serve the expanding products and the rapidly growing user traffic.
      He is also the lead of the data engineering team which leverages the power of big data to improve the user experience of HK01.com.
      Before joining WeMedia01, Dick was a Service Engineer at 9GAG, helping 9GAG move fast with stable
      and reliable backend infrastructure system. He has built various backend systems,
      including continuous integration pipeline, ETL data pipeline infrastructure and Kubernetes container-based cluster.
    </p>
    <p slot="abstract">
      The talk is an introduction to the data engineering (in hk01.com).
      Data engineering itself is not a simple stuff but involving data analyst, data engineer and data scientist
      working together and finally deliver the final machine learning product.
      The speaker will also talk about the trade-off in the system design,
      and also how to handle ingress of huge amount data and processing them efficiently.
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
          'Backend',
          'Data Science',
        ],
      };
    },
  };
</script>
