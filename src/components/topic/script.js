export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    speaker: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
    },
    venue: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    community: {
      type: String,
    },
    language: {
      type: String,
      required: true,
    },
  },
};
