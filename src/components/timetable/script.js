import { mapState } from 'vuex';

export default {
  computed: {
    linkTarget() {
      return this.online ? '_blank' : '_self';
    },
    ...mapState(['online']),
  },
  data() {
    return {
      sessions: [
        {
          issue: 'Registration',
          time: '09:00 - 10:00',
        },
        { divider: true },
        {
          issue: 'Opening Ceremony',
          time: '10:00 - 10:25',
          venue: 'LT 17',
          live: 'https://www.youtube.com/watch?v=b_cirznIrs4',
        },
        { divider: true },
        {
          title: 'Ecosystem of IT industry',
          speaker: 'Wan Leung Wong',
          icon: '/2017/img/speaker/wanleung.jpg',
          venue: 'LT 17',
          time: '10:25 - 11:10',
          link: '/topic/ecosystem',
          language: 'English',
        },
        { divider: true },
        {
          title: 'Data Science and Engineering in Internet Media',
          speaker: 'Dick Tang',
          icon: '/2017/img/speaker/unknown.png',
          venue: 'LT 17',
          time: '11:20 - 12:05',
          link: '/topic/media',
          language: 'Cantonese',
        },
        {
          title: 'Welcome the Brand New Ruby-like Language - Goby',
          speaker: 'Maxwell',
          icon: '/2017/img/speaker/maxwell.jpg',
          venue: 'LT 18',
          time: '11:20 - 12:05',
          link: '/topic/goby',
          language: 'English',
        },
        { divider: true },
        {
          title: 'Transferring Painlessly from Web to Mobile Apps with React Native',
          speaker: 'Rachel',
          icon: '/2017/img/speaker/rachel.jpg',
          venue: 'LT 17',
          time: '12:15 - 13:00',
          link: '/topic/react-native',
          language: 'English',
        },
        {
          title: 'The Geek - Rock with Sanity in this Tech Gold Rush',
          speaker: 'Clara Chau',
          icon: '/2017/img/speaker/clara.jpg',
          venue: 'LT 18',
          time: '12:15 - 13:00',
          link: '/topic/the-geek',
          language: 'English',
        },
        { divider: true },
        {
          issue: 'Lunch',
          time: '13:00 - 14:30',
        },
        { divider: true },
        {
          title: 'A Glimpse of Data Science and How to Kick-start Your Cloud Career',
          speaker: 'Dazi Cremonita',
          icon: '/2017/img/speaker/unknown.png',
          venue: 'LT 17',
          time: '14:30 - 15:15',
          link: '/topic/ds',
          language: 'English',
        },
        { divider: true },
        {
          title: 'Students’ Information Technology Conference 2018 in Taiwan',
          speaker: 'Angeline & Ballfish',
          icon: '/2017/img/speaker/sitcon-tw.png',
          time: '15:15 - 15:20',
          link: '/topic/SITCON-TW',
          language: 'Mandarin',
          venue: 'LT 17',
        },
        { divider: true },
        {
          title: 'Hands-on session – Machine Learning Studio',
          speaker: 'Delon Yau',
          icon: '/2017/img/speaker/delonyau.jpg',
          venue: 'P4-701',
          time: '15:30 - 17:30',
          link: '/topic/workshop',
          language: 'English',
        },
        { divider: true },
        {
          title: 'Play Python around with Jupyter',
          speaker: 'Wong Ho Wa',
          icon: '/2017/img/speaker/unknown.png',
          venue: 'LT 17',
          time: '15:45 - 16:30',
          link: '/topic/jupyter',
          language: 'Cantonese',
        },
        {
          title: 'Discussion on cultural differences between Easterners & Westerners',
          speaker: 'Gary Kwong',
          icon: '/2017/img/speaker/gary.jpg',
          venue: 'LT 18',
          time: '15:45 - 16:30',
          link: '/topic/culture-differences',
          language: 'Cantonese / English',
        },
        { divider: true },
        {
          title: 'Electronic tools for science - how I ended up building gear for atomic physics in Hong Kong',
          speaker: 'Sébastien Bourdeauducq',
          icon: '/2017/img/speaker/sebastien.png',
          venue: 'LT 17',
          time: '16:45 - 17:30',
          link: '/topic/electronic',
          language: 'English',
        },
        {
          title: 'Essential Blockchain Knowledge for Bitcoin Investment',
          speaker: 'Johnny Chiu',
          icon: '/2017/img/speaker/johnny.jpg',
          venue: 'LT 18',
          time: '16:45 - 17:30',
          link: '/topic/blockchain',
          language: 'Cantonese',
        },
        { divider: true },
        {
          issue: 'Lightning Talk',
          venue: 'LT 17',
          time: '17:45 - 18:00',
          live: 'https://www.youtube.com/watch?v=grIV58Q-UKU',
        },
        { divider: true },
        {
          issue: 'Closing Ceremony',
          venue: 'LT 17',
          time: '18:00 - 18:30',
          live: 'https://www.youtube.com/watch?v=grIV58Q-UKU',
        },
      ],
    };
  },
};
