(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],h=0,u=[];h<s.length;h++)r=s[h],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3efe":function(e,t,n){"use strict";n("8ef6")},"3f12":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function i(e,t,n,i,o,r){var s=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["e"])(s,null,{default:Object(a["C"])((function(e){var t=e.Component;return[Object(a["h"])(a["b"],{name:o.transition,mode:"out-in"},{default:Object(a["C"])((function(){return[(Object(a["q"])(),Object(a["e"])(Object(a["y"])(t)))]})),_:2},1032,["name"])]})),_:1})}var o={data:function(){return{transition:""}},mounted:function(){var e=this;setTimeout((function(){e.transition="slide"}),1)}};n("9675");o.render=i;var r=o,s=n("6c02");function c(e,t,n,i,o,r){var s=Object(a["x"])("Portfolio");return Object(a["q"])(),Object(a["e"])(s,{class:"sl-right"})}var l=Object(a["D"])("data-v-ea26035c");Object(a["t"])("data-v-ea26035c");var d={class:"background-cont"},h={class:"background"},u={class:"container",ref:"container"},p={class:"main"},m=Object(a["h"])("div",{class:"spacer"},null,-1),f=Object(a["g"])("back"),b=Object(a["h"])("div",{class:"rect mt-3"},[Object(a["h"])("div",{class:"big-1"}," Yannick Spreen "),Object(a["h"])("div",{class:"big-4"},[Object(a["g"])(" 📍 Berlin "),Object(a["h"])("span",{class:"d-inline-block",style:{width:"1em"}}),Object(a["g"])("🎓 TUM M.Sc. Informatics 2020 ")])],-1),g=Object(a["h"])("span",{class:"new"},"NEW",-1),y=Object(a["h"])("span",{class:"big-2 color-underline"},"COVID Info Page",-1),v=Object(a["h"])("div",null," Check the currently active COVID restrictions in your area. ",-1),j={class:"rect"},O=Object(a["h"])("div",{class:"big-2"}," Contact ",-1),w={class:""},k=Object(a["h"])("a",{href:"//linkedin.com/in/yspreen/"},"LinkedIn",-1),S=Object(a["g"])(" ​ "),P=Object(a["g"])(" ​ "),C=Object(a["h"])("a",{href:"//instagram.com/y_spreen/"},"Instagram",-1),x={class:"big-2"},I=Object(a["g"])(" Experience "),A={class:"arrow"},T=Object(a["h"])("div",{style:{"padding-right":"30px"}}," Some more recent projects have been removed for privacy. Reach out to get the full list. ",-1),M={class:"collapse",ref:"accordionExperience"},D={class:"big-2"},E=Object(a["g"])(" Passion Projects "),R={class:"arrow"},Y=Object(a["h"])("div",{style:{"padding-right":"30px"}},[Object(a["h"])("a",{href:"//github.com/yspreen/"},"GitHub"),Object(a["g"])(" ​ "),Object(a["h"])("a",{href:"//codepen.io/yspreen"},"CodePen")],-1),L={class:"collapse",ref:"accordionProjects"};Object(a["r"])();var H=l((function(e,t){var n=Object(a["x"])("router-link"),i=Object(a["x"])("listing");return Object(a["q"])(),Object(a["e"])("div",d,[Object(a["h"])("div",h,[Object(a["h"])("div",u,[Object(a["h"])("div",p,[m,Object(a["h"])(n,{to:"/",class:"back mt-3 mb-0"},{default:l((function(){return[f]})),_:1}),b,Object(a["h"])("div",{class:"rect hand",onClick:t[1]||(t[1]=function(){return e.covid&&e.covid.apply(e,arguments)})},[g,y,v]),Object(a["h"])("div",j,[O,Object(a["h"])("div",w,[k,S,Object(a["h"])("a",{href:e.email},"E-Mail",8,["href"]),P,C])]),Object(a["h"])("div",{class:"rect hand",onClick:t[2]||(t[2]=function(){return e.showExperience&&e.showExperience.apply(e,arguments)})},[Object(a["h"])("div",x,[I,Object(a["h"])("div",A,[Object(a["h"])("i",{class:["fas fa-caret-down",e.experienceShown?"flip":""]},null,2)])]),T]),Object(a["h"])("div",M,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(e.experience,(function(e,t){return Object(a["q"])(),Object(a["e"])(i,{key:t,title:e.title,summary:e.summary,more:e.more},null,8,["title","summary","more"])})),128))],512),Object(a["h"])("div",{class:"rect hand",onClick:t[3]||(t[3]=function(){return e.showProjects&&e.showProjects.apply(e,arguments)})},[Object(a["h"])("div",D,[E,Object(a["h"])("div",R,[Object(a["h"])("i",{class:["fas fa-caret-down",e.projectsShown?"flip":""]},null,2)])]),Y]),Object(a["h"])("div",L,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(e.projects,(function(e,t){return Object(a["q"])(),Object(a["e"])(i,{key:t,title:e.title,summary:e.summary,more:e.more},null,8,["title","summary","more"])})),128))],512)])],512)])])})),F=Object(a["D"])("data-v-589c60d4");Object(a["t"])("data-v-589c60d4");var Q={class:"d-flex"},U={key:0},q=Object(a["h"])("i",{class:"fas fa-info fa-fw",title:"Click for more"},null,-1),_={ref:"accordion",class:"collapse"},G={class:"collapse-body more py-4"},N=Object(a["h"])("i",{class:"fas fa-angle-right"},null,-1),W={class:"d-inline more"},K={class:"hashs"},z=Object(a["h"])("i",{class:"fas fa-hashtag"},null,-1);Object(a["r"])();var V=F((function(e,t){return Object(a["q"])(),Object(a["e"])("div",{class:["host rect in-1",{hand:e.hasMore}],onClick:t[1]||(t[1]=function(){return e.toggle&&e.toggle.apply(e,arguments)})},[Object(a["h"])("div",Q,[Object(a["h"])("div",{class:"expand big-3",innerHTML:e.dTitle},null,8,["innerHTML"]),e.hasMore?(Object(a["q"])(),Object(a["e"])("div",U,[q])):Object(a["f"])("",!0)]),Object(a["h"])("div",_,[Object(a["h"])("div",G,[N,Object(a["h"])("div",W,[Object(a["h"])("span",{style:{"padding-left":"3px"},innerHTML:e.dMore},null,8,["innerHTML"])])])],512),Object(a["h"])("div",K,[z,Object(a["h"])("span",{innerHTML:e.dSummary},null,8,["innerHTML"])])],2)})),J=(n("5319"),n("ac1f"),n("498a"),n("9911"),{data:function(){return{shown:!1}},props:{title:{type:String,default:""},summary:{type:String,default:""},more:{type:String,default:""}},computed:{dTitle:function(){return this.replace(this.title)},dSummary:function(){return this.replace(this.summary)},dMore:function(){return this.replace(this.more)},hasMore:function(){return this.more.trim().length&&!0}},methods:{replace:function(e){return e.replace(/\$DEL/g,'<span class="redacted">hidden</span>')},toggle:function(){this.hasMore&&new window.bootstrap.Collapse(this.$refs.accordion)},openLink:function(){window.open(this.link)}}});n("87d4");J.render=V,J.__scopeId="data-v-589c60d4";var B=J,$={experience:[{title:"Founder & COO – Consumer Social Start Up<br />Q4 2019 – Q1 2021",summary:"WebRTC, Kubernetes, Django, Swift, Redux, AWS",more:"Yannick had the fortunate opportunity to launch and grow his own company throughout 2020, which was based in New York City and focused on consumer social products. For their pre-seed investment, they successfully raised over $1M from international investors.\nYannick designed a software architecture around scaling real-time media streaming. The app for iOS devices was built in Swift."},{title:"Data Science Engineer – Kutalla Activity Mining<br />Q4 2018 – Q4 2019",summary:"Vue.js, D3.js, Postgres, Django, C++, C#, .Net Core",more:"Kutalla is a TUM alumni start-up founded in 2018. Its mission statement is to detect, identify and eliminate inefficient processes from all layers of an organization. Most companies don’t have a good grasp on the time they spend and waste on inefficient tooling and manual & labour-intensive tasks in their organization. Kutalla takes state-of-the-art data science to aggregate and analyse activity data from entire companies to make qualitative statements about the processes happening in an organization.\n\nYannick engineered the platform which enables Kutalla to process and aggregate all customer data in a GDPR and DSGVO compliant manner. Once the pilot was complete and data started coming in, Yannick lead the data science engineering to find patterns and tool chains in company & department behaviour to identify and eliminate labour-intensive tasks.\n\nYannick designed a large-scale data aggregation architecture in SQL, as well as front-end and back-end software to gather data into Kutalla’s format."},{title:"Full-Stack Engineer – Eventmatch iOS App & REST Server<br />Q2 2019 – Q3 2019",summary:"Swift, iOS, Django, REST, SQL, Stripe, Google Cloud Platform",more:"Eventmatch is a TUM start-up founded in 2017 aimed at bringing people together in the real world. In 2019, the app got a major overhaul and started with a fresh codebase on both iOS and Android.\n\nYannick lead the iOS and server-side engineering for the new version. Responsibilities included requirement analysis, architecture, full-stack development, and dev ops for a redesigned cloud deployment on GCP."},{title:"Front-End Developer – Embedded Kiosk Touch Interface<br />Q3 2016",summary:"QML, QtQuick, C++, JS, MQTT, Linux, Raspberry Pi",more:"In its new 2016 research project, HARTING expanded the vending machine line up with a smart touchscreen interface. In this project, the kiosk shows a dynamic interface that’s optimized for the user interfacing with it. For example, a face detection API is used for rudimentary filtering, showing children only the items to purchase which they’re allowed to buy. The project was based on a Raspberry Pi integrated touchscreen system.\n\nAs lead developer for this project, Yannick designed an architecture to facilitate the needs of this dynamic interface. Yannick ensured an easily accessible UI which allows the user to select items to be dropped on the cash register’s conveyor belt. The UI is optimized and filtered according to facial features returned by Microsoft’s Face API."},{title:"Front-End Developer – Dynamic QML Interfaces<br />Q3 2015",summary:"Qt5, QML, C++, Javascript, Raspberry Pi",more:"HARTING KGaA is a hidden champion, providing the entire world with industrial connectors, electrical and more. As a future-focused enterprise, HARTING puts a lot of resources in its R&D departments. In 2015, a new undertaking was started, to standardize the software component of all showcases for fairs and more. This new structure allows a dynamic assortment of new technology showcases to be controlled and configured from a single Android device.\n\nYannick’s role was to build the generic architecture to facilitate dynamic and changing UIs for all sorts of technologies. This framework is future-proof, and allows new technologies to be added with simple XML files. These files are dynamically loaded to create an ever-changing UI on an Android tablet. Yannick lead this project, contributing his experience in C++ and JS development."}],projects:[{title:"Bio-No.de – Containers and HPC for Bio Data Science<br />2020",summary:"Kubernetes, Vue, Django, GCP, Dev Ops",more:"Bio-Node is a platform that makes the power and versatility of HPC cloud computing accessible to biological researchers. Yannick built a self-scaling Kubernetes-based system on GCP in his Master’s thesis at Rutgers. The system allows users to submit containerized tasks through a web-interface and makes use of a highly distributed computing cluster to execute these tasks."},{title:"Four in a Rowwdc – Apple WWDC Scholarship Grantee<br />2019",summary:"Swift, Xcode Playground, SpriteKit",more:"For the WWDC 2019, Yannick created a small game using Apple’s SpriteKit. The four in a row implementation allows the user to play a friend, or fight a surprisingly clever AI. With this submission, Apple sponsored Yannick’s attendance in the developer conference in San Jose, CA."},{title:"knok – iOS Chat App<br />2019",summary:"iOS, Swift, WebSockets",more:"knok is a text messenger that connects people in the moment. As such, it only allows you to message friends that are currently using their phone. Turning off the screen and placing it in your pocket automatically turns knok in silent mode and you can no longer receive texts. Yannick made use of some esoteric combinations of iOS APIs to detect active usage of an iOS device to enable this magical texting experience."},{title:"Dub – iOS Double Camera App<br />2019",summary:"iOS, Swift, Snapchat API, Metal",more:"In 2019, Apple announced a new developer API to access camera feeds of both the front- and back-facing camera at the same time. In a team of two, Yannick and his UX design partner built a simple app which took picture-in-picture photos and videos in high quality. The app made use of the Snapkit APIs for easy sharing, as well as the Apple Metal shaders for efficient processing of the video streams."},{title:"Checkoutinator – Asset Tracking<br />2019",summary:"RFID, UHF, Raspberry Pi, Python, OPCUA",more:"Participating in the TUM Techchallenge, Yannick reverse-engineered the OPCUA protocol of a HARTING UHF reader to automate the checkout process of tools in a Makerspace. Every tool is equipped with an RFID tag to automate tracking and theft detection. Everything was implemented on a Raspberry Pi in Python."},{title:"Aucuro – Harvesting Robot<br />2018",summary:"Cython, OpenCV, Robotics, REST API, Computer Vision",more:"Using (and hacking the use of) Franka Emika’s REST API, Yannick controlled a 6-axis robot-arm to aid in the harvest of cucumbers. The robot is equipped with a webcam, and will detect and harvest fresh pickled cucumbers. Implementation on Cython made use of OpenCV functionality to detect and locate cucumbers precisely."},{title:"Double or Nothing – Chrome Extension<br />2018",summary:"Chrome Extension, JS, PayPal API",more:"For the 2018 Microsoft Creative Hack, Yannick built a Chrome extension to gamify the Amazon purchase experience. An added button allows you to add some fun to your online shopping. Instead of hitting the One-click-purchase button, the user can select the Double-or-Nothing button. For the price of one item, they will now either receive two – or none at all! Payment is handled through the PayPal API."},{title:"Spotify Podcast Listener – Chrome Extension<br />2018",summary:"Chrome Extension, JS, Spotify API",more:"Yannick saw an opportunity in enhancing the listening experience for a Spotify podcast. The podcast contains breaks in which the user is encouraged to play some music. Yannick built a chrome extension that enhances the Spotify web player to allow timestamping of songs to be injected into the playback of the podcast. The library for these timestamps is user-extensible."},{title:"GSpy – Plugin Platform for Dynamic Desktop UIs<br />2017",summary:"PyQt5, Windows Apps, Linux Apps",more:"New programming paradigms and developments don't always trickle down to scientific tool chains rapidly. In the TU BS Institute of Computer and Network Engineering, satellite components were still interfaced with through ancient programming interfaces. For his Bachelor's thesis, Yannick set out to proof that a python-based plugin platform was just as capable of doing the job, while allowing for more modern programming practices to take over."},{title:"PiStorm – Decentralized AI for soccer-playing robots<br />2016",summary:"LeJOS, Java, Raspberry Pi",more:"For the 2016 Software Engineering Project at TU BS, Yannick developed a decentralized AI to remotely control soccer-playing Mindstroms robots. The team of five programmed Raspberry Pis to decode and analyse webcam tracking data to analyse the field and devise strategies for the robotic team of three players. All logic was built decentralized, running on one processor per player, making networking and communication an integral component of the project."}]},X={components:{Listing:B},name:"HelloWorld",props:{msg:String},data:function(){return{projectsShown:!1,experienceShown:!1,email:"bWFpbHRvOnlAc3ByZWVuLmNv",experience:$.experience,projects:$.projects}},methods:{covid:function(){window.open("//covid-info.page")},showProjects:function(){this.projectsShown=!this.projectsShown,new window.bootstrap.Collapse(this.$refs.accordionProjects)},showExperience:function(){this.experienceShown=!this.experienceShown,new window.bootstrap.Collapse(this.$refs.accordionExperience)}},created:function(){this.email=atob(this.email)}};n("6ef8");X.render=H,X.__scopeId="data-v-ea26035c";var Z=X,ee={name:"Home",components:{Portfolio:Z}};ee.render=c;var te=ee;function ne(e,t,n,i,o,r){var s=Object(a["x"])("Landing");return Object(a["q"])(),Object(a["e"])(s,{class:"sl-left"})}var ae=Object(a["D"])("data-v-f973c0ba");Object(a["t"])("data-v-f973c0ba");var ie={class:"host"},oe=Object(a["h"])("div",{class:"ball-cont"},[Object(a["h"])("div",{class:"ball one"}),Object(a["h"])("div",{class:"ball two"}),Object(a["h"])("div",{class:"ball three"})],-1),re={class:"cont"},se=Object(a["h"])("div",null,"Yannick Spreen",-1),ce=Object(a["h"])("div",null,"Fullstack Engineer",-1),le=Object(a["h"])("div",null,"Freelancer",-1),de=Object(a["h"])("div",null,"Creator",-1),he=Object(a["h"])("div",null,"Perfectionist",-1),ue=Object(a["g"])("Portfolio >");Object(a["r"])();var pe=ae((function(e,t){var n=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["e"])("div",ie,[oe,Object(a["h"])("div",re,[se,ce,le,de,he,Object(a["h"])(n,{to:"/cv",class:"mt-1"},{default:ae((function(){return[ue]})),_:1})])])})),me={data:function(){return{}}};n("3efe");me.render=pe,me.__scopeId="data-v-f973c0ba";var fe=me,be={name:"Home",components:{Landing:fe}};be.render=ne;var ge=be,ye=[{path:"/",name:"Home",component:ge},{path:"/CV",name:"CV",component:te}],ve=Object(s["a"])({history:Object(s["b"])(),routes:ye}),je=ve;Object(a["d"])(r).use(je).mount("#app")},"66c9":function(e,t,n){},"6ef8":function(e,t,n){"use strict";n("66c9")},"87d4":function(e,t,n){"use strict";n("3f12")},"8ef6":function(e,t,n){},9675:function(e,t,n){"use strict";n("cd8f")},cd8f:function(e,t,n){}});
//# sourceMappingURL=app.9270226c.js.map