webpackJsonp([0],[function(t,n,e){"use strict";e.d(n,"b",function(){return o}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return s}),e.d(n,"d",function(){return u});var i,r=e(54),a=e.n(r),o="TRIGGER_DRAWER",c="UPDATE_DRAWER",s="SET_CLIENT_ID",u="UPDATE_ONLINE";n.e=(i={},a()(i,o,function(t){t.drawer=!t.drawer}),a()(i,c,function(t,n){t.drawer=n}),a()(i,s,function(t,n){t.clientID=n}),a()(i,u,function(t,n){t.online=n}),i)},,,,,,,,,,,,,,,,function(t,n,e){"use strict";var i=e(4),r=e(2),a=e(72),o=e(0),c=e(73);i.a.use(r.a),n.a=new r.a.Store({state:a.a,mutations:o.e,plugins:c.a})},,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(4),r=e(19),a=e.n(r),o=e(20),c=(e.n(o),e(21)),s=e(70),u=e(16),l=e(0);e(74);Object(o.sync)(u.a,s.a),i.a.use(a.a),i.a.config.productionTip=!1,i.a.config.errorHandler=function(t){console.error(t),ga("send","exception",{exDescription:t.message,exFatal:!1})},new i.a({el:"#app",router:s.a,store:u.a,render:function(t){return t(c.a)}}),window.addEventListener("online",function(){u.a.commit(l.d,navigator.onLine)}),window.addEventListener("offline",function(){u.a.commit(l.d,navigator.onLine)})},,,function(t,n,e){"use strict";function i(t){e(22)}var r=e(24),a=e(69),o=e(1),c=i,s=o(r.a,a.a,c,null,null);n.a=s.exports},function(t,n){},,function(t,n,e){"use strict";var i=e(5),r=e.n(i),a=e(2);n.a={name:"app",components:{Toolbar:function(){return e.e(0).then(e.bind(null,51))},Drawer:function(){return e.e(0).then(e.bind(null,59))},FooterSocial:function(){return e.e(0).then(e.bind(null,63))},Hashtag:function(){return e.e(0).then(e.bind(null,66))}},data:function(){return{width:window.innerWidth,links:[{link:{name:"home"},display:"Home"},{link:{name:"sponsor"},display:"Sponsor"},{link:{name:"timetable"},display:"Timetable"},{link:{name:"organizer"},display:"Organizer"},{link:{name:"venue"},display:"Venue"},{link:{name:"coc"},display:"Code of Conduct"}]}},methods:{resizeHandler:function(){this.width=window.innerWidth}},computed:r()({isMobile:function(){return this.width<1024}},Object(a.c)({route:function(t){return t.route.name}})),mounted:function(){window.addEventListener("resize",this.resizeHandler,{passive:!1})}}},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";function i(t){e(52)}Object.defineProperty(n,"__esModule",{value:!0});var r=e(53),a=e(58),o=e(1),c=i,s=o(r.a,a.a,c,"data-v-3f1c9908",null);n.default=s.exports},function(t,n){},function(t,n,e){"use strict";var i=e(5),r=e.n(i),a=e(2),o=e(0),c="https://sitcon-x-hk-2017.eventbrite.com/?aff=website&utm_source=website&utm_medium=website&utm_campaign=topbar&utm_content=register";n.a={props:{isMobile:Boolean,drawer:Boolean,links:Array},data:function(){return{card:!1}},computed:r()({toolbarClass:function(){return this.card?["scroll-card","elevation-2"]:""},registerLink:function(){return this.clientID&&this.clientID.length>0?c+"&_eboga="+this.clientID:c}},Object(a.c)(["clientID"])),methods:r()({checkShowCard:function(){this.card=document.body.scrollTop>100}},Object(a.b)({triggerDrawer:o.b})),mounted:function(){var t=this;window.addEventListener("scroll",function(){return t.checkShowCard()},{passive:!0})}}},,,,,function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.toolbarClass,attrs:{id:"toolbar"}},[e("nav",[t.isMobile?e("v-btn",{attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.triggerDrawer(n)}}},[e("v-icon",{staticClass:"primary--text"},[t._v("menu")])],1):t._e(),t._v(" "),e("div",{staticClass:"title hidden-md-and-up"},[e("router-link",{attrs:{to:{name:"home"},"data-role":"brand"}},[t._v("SITCON x HK 2017")])],1),t._v(" "),t.isMobile?t._e():[e("div",{staticClass:"content"},t._l(t.links,function(n){return e("router-link",{key:n.display,attrs:{to:n.link}},[t._v("\n          "+t._s(n.display)+"\n        ")])})),t._v(" "),e("v-spacer"),t._v(" "),e("a",{staticClass:"register",attrs:{target:"_blank",href:t.registerLink}},[t._v("Register")])]],2)])},r=[],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";function i(t){e(60)}Object.defineProperty(n,"__esModule",{value:!0});var r=e(61),a=e(62),o=e(1),c=i,s=o(r.a,a.a,c,"data-v-24cf65e2",null);n.default=s.exports},function(t,n){},function(t,n,e){"use strict";var i=e(5),r=e.n(i),a=e(2),o=e(0),c="https://sitcon-x-hk-2017.eventbrite.com/?aff=website&utm_source=website&utm_medium=website&utm_campaign=drawer&utm_content=register";n.a={props:["links"],computed:r()({drawer:{get:function(){return this.drawerState},set:function(t){this.updateDrawer(t)}},registerLink:function(){return this.clientID&&this.clientID.length>0?c+"&_eboga="+this.clientID:c}},Object(a.c)({drawerState:"drawer",clientID:"clientID"})),data:function(){return{display:!0}},mounted:function(){this.display=!0},methods:Object(a.b)({updateDrawer:o.c})}},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-navigation-drawer",{attrs:{temporary:"",light:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",{attrs:{dense:""}},[t._l(t.links,function(n){return e("v-list-tile",{key:n.display,staticClass:"drawer-tile",attrs:{to:n.link}},[e("v-list-tile-content",[t._v("\n        "+t._s(n.display)+"\n      ")])],1)}),t._v(" "),e("v-list-tile",{staticClass:"ticket",attrs:{tag:"a",target:"_blank",href:t.registerLink}},[e("v-list-tile-content",[t._v("\n        Get Ticket\n      ")])],1)],2)],1)},r=[],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";function i(t){e(64)}Object.defineProperty(n,"__esModule",{value:!0});var r=e(65),a=e(1),o=i,c=a(null,r.a,o,"data-v-6032bd8c",null);n.default=c.exports},function(t,n){},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"mt-3 mb-5",attrs:{flat:"",light:""}},[e("v-card-actions",{staticClass:"justify-center align-center"},[e("v-btn",{staticClass:"mr-0 ml-0",attrs:{icon:"",href:"https://www.facebook.com/SITCONxHK/",target:"_blank",tag:"a"}},[e("v-icon",{staticClass:"primary--text"},[t._v("fa-facebook-official")])],1),t._v(" "),e("v-btn",{staticClass:"mr-0 ml-0",attrs:{icon:"",href:"mailto:contact@hk.sitcon.org",tag:"a"}},[e("v-icon",{staticClass:"primary--text"},[t._v("email")])],1)],1),t._v(" "),e("v-card-text",{staticClass:"primary--text"},[e("a",{attrs:{rel:"license",target:"_blank",href:"http://creativecommons.org/licenses/by-sa/3.0/hk/"}},[e("img",{attrs:{alt:"Creative Commons Licence",src:"https://licensebuttons.net/l/by-sa/3.0/hk/88x31.png"}})]),t._v(" "),e("br"),t._v("\n    This work is licensed under a CC BY-SA 3.0 Hong Kong License.\n    "),e("wbr"),t._v("\n    Logos and trademarks belong to their respective owners.\n  ")])],1)},r=[],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";function i(t){e(67)}Object.defineProperty(n,"__esModule",{value:!0});var r=e(68),a=e(1),o=i,c=a(null,r.a,o,"data-v-34292eaa",null);n.default=c.exports},function(t,n){},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"primary--text",attrs:{id:"hashtag"}},[e("span",[t._v("#SITCONxHK")]),t._v(" "),e("span",[t._v("#SITCONxHK2017")])])}],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{class:t.route},[t.isMobile?e("drawer",{attrs:{links:t.links}}):t._e(),t._v(" "),e("toolbar",{attrs:{isMobile:t.isMobile,links:t.links}}),t._v(" "),e("main",["home"!=t.route?e("v-container",{attrs:{fluid:""}},[e("transition",{attrs:{name:"fade-transition"}},[e("router-view")],1)],1):e("transition",{attrs:{name:"fade-transition"}},[e("router-view")],1)],1),t._v(" "),e("footer-social"),t._v(" "),e("hashtag")],1)},r=[],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";var i=e(4),r=e(71);i.a.use(r.a);var a=new r.a({routes:[{path:"/!/:path",redirect:function(t){return"/"+t.params.path}},{path:"/",name:"home",component:function(){return e.e(1).then(e.bind(null,77))}},{path:"/coc",name:"coc",component:function(){return e.e(6).then(e.bind(null,78))}},{path:"/organizer",name:"organizer",component:function(){return e.e(5).then(e.bind(null,79))}},{path:"/venue",name:"venue",component:function(){return e.e(2).then(e.bind(null,80))}},{path:"/cfp",name:"cfp",component:function(){return e.e(19).then(e.bind(null,81))}},{path:"/sponsor",name:"sponsor",component:function(){return e.e(4).then(e.bind(null,82))}},{path:"/topic/the-geek",component:function(){return e.e(8).then(e.bind(null,83))}},{path:"/topic/culture-differences",component:function(){return e.e(17).then(e.bind(null,84))}},{path:"/topic/blockchain",component:function(){return e.e(18).then(e.bind(null,85))}},{path:"/topic/goby",component:function(){return e.e(13).then(e.bind(null,86))}},{path:"/topic/react-native",component:function(){return e.e(10).then(e.bind(null,87))}},{path:"/topic/electronic",component:function(){return e.e(14).then(e.bind(null,88))}},{path:"/topic/jupyter",component:function(){return e.e(12).then(e.bind(null,89))}},{path:"/topic/media",component:function(){return e.e(11).then(e.bind(null,90))}},{path:"/topic/ecosystem",component:function(){return e.e(15).then(e.bind(null,91))}},{path:"/topic/ds",component:function(){return e.e(16).then(e.bind(null,92))}},{path:"/timetable",name:"timetable",component:function(){return e.e(3).then(e.bind(null,93))}},{path:"/topic/SITCON-TW",component:function(){return e.e(9).then(e.bind(null,94))}},{path:"/topic/workshop",component:function(){return e.e(7).then(e.bind(null,95))}}]});a.afterEach(function(t){ga("set","page","/2017"+t.path),ga("send","pageview"),window.scrollTo(0,0)}),n.a=a},,function(t,n,e){"use strict";n.a={drawer:!1,clientID:"",online:navigator.onLine}},function(t,n,e){"use strict";function i(t){t.subscribe(function(t,n){var e=t.type;-1!==[r.b,r.c].indexOf(e)&&ga("send","event","Drawer","Change",n.drawer?"Open":"Close")})}var r=e(0);n.a=[i]},function(t,n,e){"use strict";function i(){var t=s.getAll();t.length?t.some(function(t){return t.get("trackingId")===o&&(r.a.commit(a.a,t.get("clientId")),!0)}):s(i)}var r=e(16),a=e(0),o="UA-74628515-1",c=window,s=c.ga;s("create",o,"auto"),s(i)}],[18]);
//# sourceMappingURL=app.fb4720945554d14b9bdb.js.map