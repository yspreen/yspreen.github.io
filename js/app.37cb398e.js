(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},o=[];function r(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cb339846"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}i[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1355:function(e,t,n){},"1aa7":function(e,t,n){"use strict";var a=n("5a8c"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],r=n("2877"),s={},c=Object(r["a"])(s,i,o,!1,null,null,null),l=c.exports,d=(n("d3b7"),n("8c4f")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"background-cont"},[n("div",{staticClass:"background"},[n("div",{ref:"container",staticClass:"container"},[n("div",{staticClass:"main"},[n("div",{staticClass:"spacer"}),e._m(0),n("div",{staticClass:"rect hand",on:{click:e.covid}},[n("span",{staticClass:"new"},[e._v("NEW")]),n("span",{staticClass:"big-2 color-underline"},[e._v("COVID Info Page")]),n("div",[e._v(" Check the currently active COVID restrictions in your area. ")])]),n("div",{staticClass:"rect"},[n("div",{staticClass:"big-2"},[e._v(" Contact ")]),n("div",{},[n("a",{attrs:{href:"//linkedin.com/in/yspreen/"}},[e._v("LinkedIn")]),e._v(" ​ "),n("a",{attrs:{href:e.email}},[e._v("E-Mail")]),e._v(" ​ "),n("a",{attrs:{href:"//instagram.com/y_spreen/"}},[e._v("Instagram")])])]),n("div",{staticClass:"rect hand",on:{click:e.showExperience}},[n("div",{staticClass:"big-2"},[e._v(" Experience "),n("div",{staticClass:"arrow"},[n("i",{staticClass:"fas fa-caret-down",class:e.experienceShown?"flip":""})])]),n("div",[e._v(" Some more recent projects have been removed for privacy. Reach out to get the full list. ")])]),n("div",{ref:"accordionExperience",staticClass:"collapse"},e._l(e.experience,(function(e,t){return n("listing",{key:t,attrs:{title:e.title,summary:e.summary,more:e.more}})})),1),n("div",{staticClass:"rect hand",on:{click:e.showProjects}},[n("div",{staticClass:"big-2"},[e._v(" Passion Projects "),n("div",{staticClass:"arrow"},[n("i",{staticClass:"fas fa-caret-down",class:e.projectsShown?"flip":""})])]),e._m(1)]),n("div",{ref:"accordionProjects",staticClass:"collapse"},e._l(e.projects,(function(e,t){return n("listing",{key:t,attrs:{title:e.title,summary:e.summary,more:e.more}})})),1)])])])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rect"},[n("div",{staticClass:"big-1"},[e._v(" Yannick Spreen ")]),n("div",{},[e._v(" TUM M.Sc. Informatics 2020. ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("a",{attrs:{href:"//github.com/yspreen/"}},[e._v("GitHub")]),e._v(" ​ "),n("a",{attrs:{href:"//codepen.io/yspreen"}},[e._v("CodePen")])])}],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"host rect in-1",class:{hand:e.hasMore},on:{click:e.toggle}},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"expand big-3",domProps:{innerHTML:e._s(e.dTitle)}}),e.hasMore?n("div",[n("i",{staticClass:"fas fa-info fa-fw",attrs:{title:"Click for more"}})]):e._e()]),n("div",{ref:"accordion",staticClass:"collapse"},[n("div",{staticClass:"collapse-body more py-4"},[n("i",{staticClass:"fas fa-angle-right"}),n("div",{staticClass:"d-inline more"},[n("span",{staticStyle:{"padding-left":"3px"},domProps:{innerHTML:e._s(e.dMore)}})])])]),n("div",{staticClass:"hashs"},[n("i",{staticClass:"fas fa-hashtag"}),n("span",{domProps:{innerHTML:e._s(e.dSummary)}})])])},g=[],b=(n("ac1f"),n("5319"),n("498a"),n("9911"),{data:function(){return{shown:!1}},props:{title:{type:String,default:""},summary:{type:String,default:""},more:{type:String,default:""}},computed:{dTitle:function(){return this.replace(this.title)},dSummary:function(){return this.replace(this.summary)},dMore:function(){return this.replace(this.more)},hasMore:function(){return this.more.trim().length&&!0}},methods:{replace:function(e){return e.replace(/\$DEL/g,'<span class="redacted">hidden</span>')},toggle:function(){this.hasMore&&new window.bootstrap.Collapse(this.$refs.accordion)},openLink:function(){window.open(this.link)}}}),y=b,v=(n("1aa7"),Object(r["a"])(y,f,g,!1,null,"8fec14b4",null)),w=v.exports,k={experience:[{title:"Data Science Engineer – Kutalla Activity Mining<br />Q4 2018 – Q4 2019",summary:"Vue.js, D3.js, Postgres, Django, C++, C#, .Net Core",more:"Kutalla is a TUM alumni start-up founded in 2018. Its mission statement is to detect, identify and eliminate inefficient processes from all layers of an organization. Most companies don’t have a good grasp on the time they spend and waste on inefficient tooling and manual & labour-intensive tasks in their organization. Kutalla takes state-of-the-art data science to aggregate and analyse activity data from entire companies to make qualitative statements about the processes happening in an organization.\n\nYannick engineered the platform which enables Kutalla to process and aggregate all customer data in a GDPR and DSGVO compliant manner. Once the pilot was complete and data started coming in, Yannick lead the data science engineering to find patterns and tool chains in company & department behaviour to identify and eliminate labour-intensive tasks.\n\nYannick designed a large-scale data aggregation architecture in SQL, as well as front-end and back-end software to gather data into Kutalla’s format."},{title:"Full-Stack Engineer – Eventmatch iOS App & REST Server<br />Q2 2019 – Q3 2019",summary:"Swift, iOS, Django, REST, SQL, Stripe, Google Cloud Platform",more:"Eventmatch is a TUM start-up founded in 2017 aimed at bringing people together in the real world. In 2019, the app got a major overhaul and started with a fresh codebase on both iOS and Android.\n\nYannick lead the iOS and server-side engineering for the new version. Responsibilities included requirement analysis, architecture, full-stack development, and dev ops for a redesigned cloud deployment on GCP."},{title:"Front-End Developer – Embedded Kiosk Touch Interface<br />Q3 2016",summary:"QML, QtQuick, C++, JS, MQTT, Linux, Raspberry Pi",more:"In its new 2016 research project, HARTING expanded the vending machine line up with a smart touchscreen interface. In this project, the kiosk shows a dynamic interface that’s optimized for the user interfacing with it. For example, a face detection API is used for rudimentary filtering, showing children only the items to purchase which they’re allowed to buy. The project was based on a Raspberry Pi integrated touchscreen system.\n\nAs lead developer for this project, Yannick designed an architecture to facilitate the needs of this dynamic interface. Yannick ensured an easily accessible UI which allows the user to select items to be dropped on the cash register’s conveyor belt. The UI is optimized and filtered according to facial features returned by Microsoft’s Face API."},{title:"Front-End Developer – Dynamic QML Interfaces<br />Q3 2015",summary:"Kubernetes, Django, Vue.js, and GCP",more:"HARTING KGaA is a hidden champion, providing the entire world with industrial connectors, electrical and more. As a future-focused enterprise, HARTING puts a lot of resources in its R&D departments. In 2015, a new undertaking was started, to standardize the software component of all showcases for fairs and more. This new structure allows a dynamic assortment of new technology showcases to be controlled and configured from a single Android device.\n\nYannick’s role was to build the generic architecture to facilitate dynamic and changing UIs for all sorts of technologies. This framework is future-proof, and allows new technologies to be added with simple XML files. These files are dynamically loaded to create an ever-changing UI on an Android tablet. Yannick lead this project, contributing his experience in C++ and JS development."}],projects:[{title:"Bio-No.de – Containers and HPC for Bio Data Science<br />2020",summary:"Kubernetes, Vue, Django, GCP, Dev Ops",more:"Bio-Node is a platform that makes the power and versatility of HPC cloud computing accessible to biological researchers. Yannick built a self-scaling Kubernetes-based system on GCP in his Master’s thesis at Rutgers. The system allows users to submit containerized tasks through a web-interface and makes use of a highly distributed computing cluster to execute these tasks."},{title:"Four in a Rowwdc – Apple WWDC Scholarship Grantee<br />2019",summary:"Swift, Xcode Playground, SpriteKit",more:"For the WWDC 2019, Yannick created a small game using Apple’s SpriteKit. The four in a row implementation allows the user to play a friend, or fight a surprisingly clever AI. With this submission, Apple sponsored Yannick’s attendance in the developer conference in San Jose, CA."},{title:"knok – iOS Chat App<br />2019",summary:"iOS, Swift, WebSockets",more:"knok is a text messenger that connects people in the moment. As such, it only allows you to message friends that are currently using their phone. Turning off the screen and placing it in your pocket automatically turns knok in silent mode and you can no longer receive texts. Yannick made use of some esoteric combinations of iOS APIs to detect active usage of an iOS device to enable this magical texting experience."},{title:"Dub – iOS Double Camera App<br />2019",summary:"iOS, Swift, Snapchat API, Metal",more:"In 2019, Apple announced a new developer API to access camera feeds of both the front- and back-facing camera at the same time. In a team of two, Yannick and his UX design partner built a simple app which took picture-in-picture photos and videos in high quality. The app made use of the Snapkit APIs for easy sharing, as well as the Apple Metal shaders for efficient processing of the video streams."},{title:"Checkoutinator – Asset Tracking<br />2019",summary:"RFID, UHF, Raspberry Pi, Python, OPCUA",more:"Participating in the TUM Techchallenge, Yannick reverse-engineered the OPCUA protocol of a HARTING UHF reader to automate the checkout process of tools in a Makerspace. Every tool is equipped with an RFID tag to automate tracking and theft detection. Everything was implemented on a Raspberry Pi in Python."},{title:"Aucuro – Harvesting Robot<br />2018",summary:"Cython, OpenCV, Robotics, REST API, Computer Vision",more:"Using (and hacking the use of) Franka Emika’s REST API, Yannick controlled a 6-axis robot-arm to aid in the harvest of cucumbers. The robot is equipped with a webcam, and will detect and harvest fresh pickled cucumbers. Implementation on Cython made use of OpenCV functionality to detect and locate cucumbers precisely."},{title:"Double or Nothing – Chrome Extension<br />2018",summary:"Chrome Extension, JS, PayPal API",more:"For the 2018 Microsoft Creative Hack, Yannick built a Chrome extension to gamify the Amazon purchase experience. An added button allows you to add some fun to your online shopping. Instead of hitting the One-click-purchase button, the user can select the Double-or-Nothing button. For the price of one item, they will now either receive two – or none at all! Payment is handled through the PayPal API."},{title:"Spotify Podcast Listener – Chrome Extension<br />2018",summary:"Chrome Extension, JS, Spotify API",more:"Yannick saw an opportunity in enhancing the listening experience for a Spotify podcast. The podcast contains breaks in which the user is encouraged to play some music. Yannick built a chrome extension that enhances the Spotify web player to allow timestamping of songs to be injected into the playback of the podcast. The library for these timestamps is user-extensible."},{title:"GSpy – Plugin Platform for Dynamic Desktop UIs<br />2017",summary:"PyQt5, Windows Apps, Linux Apps",more:"New programming paradigms and developments don't always trickle down to scientific tool chains rapidly. In the TU BS Institute of Computer and Network Engineering, satellite components were still interfaced with through ancient programming interfaces. For his Bachelor's thesis, Yannick set out to proof that a python-based plugin platform was just as capable of doing the job, while allowing for more modern programming practices to take over."},{title:"Decentralized AI for soccer-playing robots<br />2016",summary:"LeJOS, Java, Raspberry Pi",more:"For the 2016 Software Engineering Project at TU BS, Yannick developed a decentralized AI to remotely control soccer-playing Mindstroms robots. The team of five programmed Raspberry Pis to decode and analyse webcam tracking data to analyse the field and devise strategies for the robotic team of three players. All logic was built decentralized, running on one processor per player, making networking and communication an integral component of the project."}]},C={components:{Listing:w},name:"HelloWorld",props:{msg:String},data:function(){return{projectsShown:!1,experienceShown:!1,email:"bWFpbHRvOnlAc3ByZWVuLmNv",experience:k.experience,projects:k.projects}},methods:{covid:function(){window.open("//covid-info.page")},showProjects:function(){this.projectsShown=!this.projectsShown,new window.bootstrap.Collapse(this.$refs.accordionProjects)},showExperience:function(){this.experienceShown=!this.experienceShown,new window.bootstrap.Collapse(this.$refs.accordionExperience)}},created:function(){this.email=atob(this.email)}},S=C,P=(n("7d5b"),Object(r["a"])(S,h,m,!1,null,null,null)),j=P.exports,A={name:"Home",components:{HelloWorld:j}},x=A,I=Object(r["a"])(x,u,p,!1,null,null,null),_=I.exports;a["a"].use(d["a"]);var T=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],E=new d["a"]({routes:T}),O=E;a["a"].config.productionTip=!1,new a["a"]({router:O,render:function(e){return e(l)}}).$mount("#app")},"5a8c":function(e,t,n){},"7d5b":function(e,t,n){"use strict";var a=n("1355"),i=n.n(a);i.a}});
//# sourceMappingURL=app.37cb398e.js.map