(function(t){function e(e){for(var o,i,r=e[0],c=e[1],n=e[2],u=0,m=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(m.length)m.shift()();return l.push.apply(l,n||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],o=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(o=!1)}o&&(l.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},s={app:0},l=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var n=0;n<r.length;n++)e(r[n]);var d=c;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1ee9":function(t,e,a){t.exports=a.p+"img/MockupArcheDuGrog.73f5f8f6.png"},2484:function(t,e,a){t.exports=a.p+"img/MockupOrinoco.139a6a9e.png"},"30b1":function(t,e,a){"use strict";a("a6e3")},"3e46":function(t,e,a){t.exports=a.p+"img/MockupOhmyfood.857fae71.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var o=a("2b0e"),s=a("5f5b");a("ab8b"),a("2dd8");o["default"].use(s["b"]);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body",attrs:{id:"app","data-scroll-container":""}},[a("NavBar"),t._m(0),a("div",{staticClass:"container-fluid w-100 bg-imageFond p-0 d-flex flex-column justify-content-center align-item-center",attrs:{id:"ancreDvlp","data-scroll-section":""}},[a("DvlpWeb",{staticClass:"mt-6 p-0 py-5",attrs:{"data-scroll":"","data-scroll-speed":"2"}})],1),a("transition",{attrs:{name:"bounce"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.modale.overlay,expression:"this.$store.state.modale.overlay"}],staticClass:"overlay",on:{click:function(e){return t.toggleAllModale()}}})]),a("transition",{attrs:{name:"bounce"}},[this.$store.state.modale.modaleReservia?a("ModaleReservia",{staticClass:"bg-darker modale"}):t._e()],1),a("transition",{attrs:{name:"bounce"}},[this.$store.state.modale.modaleOhmyfood?a("ModaleOhmyfood",{staticClass:"bg-darker modale"}):t._e()],1),a("transition",{attrs:{name:"bounce"}},[this.$store.state.modale.modaleChouetteAgence?a("ModaleChouetteAgence",{staticClass:"bg-darker modale"}):t._e()],1),a("transition",{attrs:{name:"bounce"}},[this.$store.state.modale.modaleOrinoco?a("ModaleOrinoco",{staticClass:"bg-darker modale"}):t._e()],1),a("transition",{attrs:{name:"bounce"}},[this.$store.state.modale.modaleSopekocko?a("ModaleSopekocko",{staticClass:"bg-darker modale"}):t._e()],1),a("transition",{attrs:{name:"bounce"}},[this.$store.state.modale.modaleGroupomania?a("ModaleGroupomania",{staticClass:"bg-darker modale"}):t._e()],1),a("transition",{attrs:{name:"bounce"}},[this.$store.state.modale.modaleArcheDuGrog?a("ModaleArcheDuGrog",{staticClass:"bg-darker modale"}):t._e()],1),a("div",{staticClass:"container-fluid bg-opacity-4 p-0",attrs:{id:"ancreCompetence","data-scroll-section":""}},[a("Competence",{staticClass:"p-lg-5 bg-darker min-vh-100 py-5",attrs:{"data-scroll":"","data-scroll-speed":"2"}})],1),a("div",{staticClass:"container-fluid bg-opacity-4 p-0 my-5",attrs:{"data-scroll-section":"",id:"ancreProjet"}},[a("Portfolio",{staticClass:"p-lg-5 min-vh-100 bg-transparent py-5",attrs:{"data-scroll":"","data-scroll-speed":"2"}})],1),a("Footer",{staticClass:"bg-dark shadow-box",attrs:{id:"ancreReseauSocial","data-scroll-section":""}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"bg-opacity-4 mt6"})])}],r=a("5530"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top",align:"end"}},[a("b-navbar-brand",{staticClass:"hoverNav",attrs:{"data-scroll-to":"",href:"#ancreDvlp"}},[t._v("Accueil")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{staticClass:"justify-content-end",attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"d-flex bg-transparent justify-content-right"},[a("a",{staticClass:"hoverNav text-center px-3",attrs:{href:"#ancreCompetence","data-scroll-to":""}},[t._v("Compétences")]),a("a",{staticClass:"hoverNav text-center px-3",attrs:{href:"#ancreProjet","data-scroll-to":""}},[t._v("Mes réalisations")]),a("a",{staticClass:"hoverNav text-center px-3",attrs:{href:"#ancreReseauSocial","data-scroll-to":""}},[t._v("Contact")])])],1)],1)],1)},n=[],d={name:"NavBar",props:{}},u=d,m=a("2877"),f=Object(m["a"])(u,c,n,!1,null,null,null),p=f.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container rounded mt-6 bg-transparent"},[a("div",{staticClass:"d-flex bg-opacity-4 rounded shadow-box flex-column"},[a("h1",{staticClass:"pb-2 pt-4 px-4 bg-transparent text-center text-titre mb-5 zindex-1"},[t._v(" Développeur web - Anaël Damette ")]),a("div",{staticClass:"w-100 d-flex flex-column bg-transparent justify-content-center align-items-center"},[a("p",{staticClass:"bg-transparent pb-2 text-center text-primaire zindex-1"},[a("strong",{staticClass:"bg-transparent"},[t._v("Création de site")]),t._v(" internet "),a("br"),t._v(" Sites vitrines, Sites Marchands ")]),a("p",{staticClass:"bg-transparent pt-2 pb-4 text-primaire"},[t._v(" FullStack : FrontEnd, BackEnd ")])])])])}],h={name:"DvlpWeb"},x=h,C=Object(m["a"])(x,g,v,!1,null,"f0fd9cfe",null),b=C.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark"},[a("div",{staticClass:"shadow-box"},[a("ReseauxSociaux",{staticClass:"container-fluid bg-darker"}),a("div",{staticClass:"container-fluid justify-content-between d-lg-flex bg-dark"},[a("TextePresentation",{staticClass:"bg-dark p-lg-5 col-12 col-lg-4"}),a("Coordonnees",{staticClass:"bg-dark p-lg-5 col-12 col-lg-4"})],1),a("Copyright",{staticClass:"container-fluid bg-darker"})],1)])},M=[],k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex p-3 justify-content-end rounded"},[a("a",{staticClass:"px-2 hoverNav",attrs:{href:"https://www.linkedin.com/in/anael-damette/"}},[a("i",{staticClass:"hovernav fab fa-linkedin w-100"},[a("p",{attrs:{hidden:""}},[t._v("Profil linkedin")])])]),a("a",{staticClass:"px-2 hoverNav",attrs:{href:"https://twitter.com/AnaelDamette"}},[a("i",{staticClass:"hovernav fab fa-twitter w-100"},[a("p",{attrs:{hidden:""}},[t._v("Profil Twitter")])])]),a("a",{staticClass:"pr-5 pl-2 hoverNav",attrs:{href:"mailto:damette.anael@gmail.com"}},[a("i",{staticClass:"hovernav fas fa-envelope w-100"},[a("p",{attrs:{hidden:""}},[t._v("Mail Damette Anael")])])])])}],$={name:"ReseauxSociaux"},w=$,O=Object(m["a"])(w,k,y,!1,null,null,null),j=O.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("p",{staticClass:"text-primaire text-center text-lg-right bg-dark p-2"},[t._v(" Anael Damette "),a("br"),t._v(" 3 rue de l'Épargne "),a("br"),t._v(" 88000 ÉPINAL "),a("br")])])}],E={name:"Coordonnees"},R=E,G=Object(m["a"])(R,A,S,!1,null,null,null),D=G.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("p",{staticClass:"text-primaire text-center text-lg-left bg-dark p-2"},[t._v(" Développeur Web Fullstack, je suis à votre disposition pour répondre à tout type de projet de création de sites internet ou d'applications Web. ")])])}],W={name:"TextePresentation"},T=W,q=Object(m["a"])(T,P,N,!1,null,null,null),z=q.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex p-3 justify-content-between rounded"},[a("p",{staticClass:"text-primaire text-small"},[t._v("Copyright 2021")]),a("p",{staticClass:"text-primaire text-small"},[t._v("Damette Corp")])])}],F={name:"Copyright"},U=F,I=Object(m["a"])(U,B,L,!1,null,null,null),J=I.exports,V={name:"Footer",components:{ReseauxSociaux:j,Coordonnees:D,TextePresentation:z,Copyright:J}},H=V,Q=Object(m["a"])(H,_,M,!1,null,null,null),K=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-6 rounded bg-transparent shadow-box d-flex flex-column justify-content-center"},[a("h1",{staticClass:"bg-transparent text-center text-titre pt-5 mb-5"},[t._v("Compétences")]),a("div",{staticClass:"d-md-flex bg-transparent justify-content-center mb-4"},[a("CompetenceDvlp",{staticClass:"col-12 py-5 mx-md-3 px-md-5 my-3 rounded col-md-5 text-primaire text-center text-lg-right"}),a("SoftSkill",{staticClass:"col-12 py-5 mx-md-3 px-md-5 my-3 rounded col-md-5 text-primaire text-center text-lg-right"})],1)])},Y=[],Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"text-center text-titre text-lg-center"},[t._v("Front-end")]),a("div",{staticClass:"d-flex flex-column text-center"},[a("div",{staticClass:"my-4"},[a("div",{staticClass:"d-flex flex-wrap justify-content-center"},[a("div",{staticClass:"d-flex p-3"},[a("i",{staticClass:"fab fa-js"}),a("p",{staticClass:"pl-2"},[t._v("Javascript")])]),a("div",{staticClass:"d-flex p-3"},[a("i",{staticClass:"fab fa-vuejs"}),a("p",{staticClass:"pl-2"},[t._v("Vue.js")])]),a("div",{staticClass:"d-flex p-3"},[a("i",{staticClass:"fab fa-sass"}),a("p",{staticClass:"pl-2"},[t._v("Sass")])]),a("div",{staticClass:"d-flex p-3"},[a("i",{staticClass:"fab fa-bootstrap"}),a("p",{staticClass:"pl-2"},[t._v("Bootstrap")])]),a("div",{staticClass:"d-flex p-3"},[a("i",{staticClass:"fab fa-github"}),a("p",{staticClass:"pl-2"},[t._v("Github")])]),a("div",{staticClass:"d-flex p-3"},[a("i",{staticClass:"fab fa-html5"}),a("p",{staticClass:"pl-2"},[t._v("HTML5")])]),a("div",{staticClass:"d-flex p-3"},[a("i",{staticClass:"fab fa-css3-alt"}),a("p",{staticClass:"pl-2"},[t._v("Css")])])])])])])}],et={name:"CompetenceDvlp"},at=et,ot=Object(m["a"])(at,Z,tt,!1,null,null,null),st=ot.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"text-center text-titre text-lg-center"},[t._v("Back-end")]),a("div",{staticClass:"my-4"},[a("div",{staticClass:"d-flex flex-wrap justify-content-center"},[a("div",{staticClass:"d-flex p-3"},[a("i",{staticClass:"fab fa-node-js"}),a("p",{staticClass:"pl-2"},[t._v("node.js")])]),a("div",{staticClass:"d-flex p-3"},[a("p",{staticClass:"pl-2"},[t._v("Api Rest")])]),a("div",{staticClass:"d-flex p-3"},[a("p",{staticClass:"pl-2"},[t._v("MySQL")])]),a("div",{staticClass:"d-flex p-3"},[a("p",{staticClass:"pl-2"},[t._v("MongoDb")])])])])])}],rt={name:"SoftSkill"},ct=rt,nt=Object(m["a"])(ct,lt,it,!1,null,null,null),dt=nt.exports,ut={name:"Competence",components:{SoftSkill:dt,CompetenceDvlp:st}},mt=ut,ft=Object(m["a"])(mt,X,Y,!1,null,null,null),pt=ft.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-3 shadow-box"},[a("h1",{staticClass:"text-titre pt-5 text-center bg-transparent"},[t._v("Mes réalisations")]),a("div",{staticClass:"row justify-content-center my-5 py-5"},[a("button",{staticClass:"p-2 bg-card col-12 col-xl-4 col-md-5 mx-2 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100",attrs:{"data-scroll":"","data-scroll-speed":"1","data-scroll-direction":"vertical"},on:{click:function(e){return t.toggleModaleReservia()}}},[t._m(0)]),a("button",{staticClass:"p-2 bg-card col-12 col-xl-4 mx-2 col-md-5 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100",attrs:{"data-scroll":"","data-scroll-speed":"1","data-scroll-direction":"vertical"},on:{click:function(e){return t.toggleModaleOhmyfood()}}},[t._m(1)]),a("button",{staticClass:"p-2 bg-card col-12 col-xl-4 mx-2 col-md-5 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100",attrs:{"data-scroll":"","data-scroll-speed":"1","data-scroll-direction":"vertical"},on:{click:function(e){return t.toggleModaleChouetteAgence()}}},[t._m(2)]),a("button",{staticClass:"p-2 bg-card col-12 col-xl-4 mx-2 col-md-5 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100",attrs:{"data-scroll":"","data-scroll-speed":"1","data-scroll-direction":"vertical"},on:{click:function(e){return t.toggleModaleOrinoco()}}},[t._m(3)]),a("button",{staticClass:"p-2 bg-card col-12 col-xl-4 mx-2 col-md-5 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100",attrs:{"data-scroll":"","data-scroll-speed":"1","data-scroll-direction":"vertical"},on:{click:function(e){return t.toggleModaleSopekocko()}}},[t._m(4)]),a("button",{staticClass:"p-2 bg-card col-12 col-xl-4 mx-2 col-md-5 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100",attrs:{"data-scroll":"","data-scroll-speed":"1","data-scroll-direction":"vertical"},on:{click:function(e){return t.toggleModaleGroupomania()}}},[t._m(5)]),a("button",{staticClass:"p-2 bg-card col-12 col-xl-4 mx-2 col-md-5 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100",attrs:{"data-scroll":"","data-scroll-speed":"1","data-scroll-direction":"vertical"},on:{click:function(e){return t.toggleModaleArcheDuGrog()}}},[t._m(6)])])])},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-reservia bg-card bg-light"},[a("i",{staticClass:"check fas fa-check-circle"}),a("p",{staticClass:"text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation",attrs:{"data-scroll":"","data-scroll-speed":"0.5","data-scroll-direction":"vertical"}},[t._v(" Site Reservia ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-ohmyfood bg-card bg-light"},[a("i",{staticClass:"check fas fa-check-circle"}),a("p",{staticClass:"text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation",attrs:{"data-scroll":"","data-scroll-speed":"0.5","data-scroll-direction":"vertical"}},[t._v(" Site Ohmyfood ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-chouetteagence bg-card bg-light"},[a("i",{staticClass:"check fas fa-check-circle"}),a("p",{staticClass:"text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation",attrs:{"data-scroll":"","data-scroll-speed":"0.5","data-scroll-direction":"vertical"}},[t._v(" Site La chouette agence ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-orinoco bg-card bg-light"},[a("i",{staticClass:"check fas fa-check-circle"}),a("p",{staticClass:"text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation",attrs:{"data-scroll":"","data-scroll-speed":"0.5","data-scroll-direction":"vertical"}},[t._v(" Site Orinoco ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-sopekocko bg-card bg-light"},[a("i",{staticClass:"check fas fa-check-circle"}),a("p",{staticClass:"text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation",attrs:{"data-scroll":"","data-scroll-speed":"0.5","data-scroll-direction":"vertical"}},[t._v(" Site So pekocko ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-groupomania bg-card bg-light"},[a("i",{staticClass:"check fas fa-check-circle"}),a("p",{staticClass:"text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation",attrs:{"data-scroll":"","data-scroll-speed":"0.5","data-scroll-direction":"vertical"}},[t._v(" Site Groupomania ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-archedugrog bg-card bg-light"},[a("i",{staticClass:"progres fas fa-circle-notch"}),a("p",{staticClass:"text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation",attrs:{"data-scroll":"","data-scroll-speed":"0.5","data-scroll-direction":"vertical"}},[t._v(" Site l'Arche du Grog ")])])}],ht=a("2f62"),xt={name:"Portfolio",computed:Object(r["a"])({},Object(ht["b"])(["modale"])),methods:{toggleModaleReservia:function(){this.$store.commit("modaleReservia"),this.$store.commit("ouvertureOverlay")},toggleModaleOhmyfood:function(){this.$store.commit("modaleOhmyfood"),this.$store.commit("ouvertureOverlay")},toggleModaleChouetteAgence:function(){this.$store.commit("modaleChouetteAgence"),this.$store.commit("ouvertureOverlay")},toggleModaleOrinoco:function(){this.$store.commit("modaleOrinoco"),this.$store.commit("ouvertureOverlay")},toggleModaleSopekocko:function(){this.$store.commit("modaleSopekocko"),this.$store.commit("ouvertureOverlay")},toggleModaleGroupomania:function(){this.$store.commit("modaleGroupomania"),this.$store.commit("ouvertureOverlay")},toggleModaleArcheDuGrog:function(){this.$store.commit("modaleArcheDuGrog"),this.$store.commit("ouvertureOverlay")}}},Ct=xt,bt=Object(m["a"])(Ct,gt,vt,!1,null,null,null),_t=bt.exports,Mt=a("d691"),kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column",attrs:{"data-scroll":"","data-scroll-speed":"2"}},[a("h1",{staticClass:"text-titre text-center pt-5"},[t._v("Réservia")]),a("i",{staticClass:"far fa-times-circle fermeModale iconeModale",on:{click:function(e){return t.toggleAllModale()}}}),t._m(0),a("div",{staticClass:"d-flex justify-content-between px-3 pb-3"},[a("i",{staticClass:"far fa-arrow-alt-circle-left iconeModale",on:{click:function(e){return t.toggleNext()}}}),a("i",{staticClass:"far fa-arrow-alt-circle-right iconeModale",on:{click:function(e){return t.togglePrevious()}}})])])},yt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("figure",{staticClass:"d-flex flex-column flex-xl-row align-items-center zindex"},[o("img",{staticClass:"imageModale",attrs:{src:a("d6f7"),alt:"Un Mock-up du site Web Reservia"}}),o("div",{staticClass:"col-xl-6 overflow-auto captionModale"},[o("h3",{staticClass:"text-primaire text-center p-3"},[t._v(" Création page web avec une maquette pour Réservia ")]),o("p",{staticClass:"p-4 text-primaire"},[t._v(" Création d'une page web responsive à l'aide d'une maquette. "),o("br"),t._v("Cette page a été créée sans framework. ")])])])}],$t={name:"ModaleReservia",methods:{toggleAllModale:function(){this.$store.commit("allModale")},toggleNext:function(){this.$store.commit("modaleReservia"),this.$store.commit("modaleOhmyfood")},togglePrevious:function(){this.$store.commit("modaleReservia"),this.$store.commit("modaleArcheDuGrog")}}},wt=$t,Ot=Object(m["a"])(wt,kt,yt,!1,null,"54ae5b96",null),jt=Ot.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column",attrs:{"data-scroll":"","data-scroll-speed":"2"}},[a("h1",{staticClass:"text-titre text-center pt-5"},[t._v("Ohmyfood")]),a("i",{staticClass:"far fa-times-circle fermeModale iconeModale",on:{click:function(e){return t.toggleAllModale()}}}),t._m(0),a("div",{staticClass:"d-flex justify-content-between px-3 pb-3"},[a("i",{staticClass:"far fa-arrow-alt-circle-left iconeModale",on:{click:function(e){return t.toggleNext()}}}),a("i",{staticClass:"far fa-arrow-alt-circle-right iconeModale",on:{click:function(e){return t.togglePrevious()}}})])])},St=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("figure",{staticClass:"d-flex flex-column flex-xl-row align-items-center zindex"},[o("img",{staticClass:"imageModale",attrs:{src:a("3e46"),alt:"Un Mock-up du site Web Reservia"}}),o("div",{staticClass:"col-xl-6 overflow-auto captionModale"},[o("h3",{staticClass:"text-primaire p-3"},[t._v("Animation css pour Ohmyfood")]),o("p",{staticClass:"p-4 text-primaire"},[t._v(" Réalisation de plusieurs pages avec des animations à partir de maquettes."),o("br"),t._v(" Le projet a été réalisé en langages html et Sass sans aucun framework. ")])])])}],Et={name:"ModaleOhmyfood",methods:{toggleAllModale:function(){this.$store.commit("allModale")},toggleNext:function(){this.$store.commit("modaleOhmyfood"),this.$store.commit("modaleChouetteAgence")},togglePrevious:function(){this.$store.commit("modaleOhmyfood"),this.$store.commit("modaleReservia")}}},Rt=Et,Gt=Object(m["a"])(Rt,At,St,!1,null,"500e0d7d",null),Dt=Gt.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column",attrs:{"data-scroll":"","data-scroll-speed":"2"}},[a("h1",{staticClass:"text-titre text-center pt-5"},[t._v("La Chouette Agence")]),a("i",{staticClass:"far fa-times-circle fermeModale iconeModale",on:{click:function(e){return t.toggleAllModale()}}}),t._m(0),a("div",{staticClass:"d-flex justify-content-between px-3 pb-3"},[a("i",{staticClass:"far fa-arrow-alt-circle-left iconeModale",on:{click:function(e){return t.toggleNext()}}}),a("i",{staticClass:"far fa-arrow-alt-circle-right iconeModale",on:{click:function(e){return t.togglePrevious()}}})])])},Nt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("figure",{staticClass:"d-flex flex-column flex-xl-row align-items-center zindex"},[o("img",{staticClass:"imageModale",attrs:{src:a("e678"),alt:"Un Mock-up du site Web Reservia"}}),o("div",{staticClass:"col-xl-6 overflow-auto captionModale"},[o("h3",{staticClass:"text-primaire text-center px-2 py-3"},[t._v(" Optimisation du site la Chouette Agence ")]),o("p",{staticClass:"text-primaire"},[t._v(" Réalisation d'audit pour la Chouette Agence ainsi que proposition d'amélioration en terme de SEO (\"Seach Engine Optimisation\") ou en terme d'accéssibilité. ")])])])}],Wt={name:"ModaleChouetteAgence",methods:{toggleAllModale:function(){this.$store.commit("allModale")},toggleNext:function(){this.$store.commit("modaleChouetteAgence"),this.$store.commit("modaleOrinoco")},togglePrevious:function(){this.$store.commit("modaleChouetteAgence"),this.$store.commit("modaleOhmyfood")}}},Tt=Wt,qt=(a("30b1"),Object(m["a"])(Tt,Pt,Nt,!1,null,"288c37e8",null)),zt=qt.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column",attrs:{"data-scroll":"","data-scroll-speed":"2"}},[a("h1",{staticClass:"text-titre text-center pt-5"},[t._v("Orinoco")]),a("i",{staticClass:"far fa-times-circle fermeModale iconeModale",on:{click:function(e){return t.toggleAllModale()}}}),t._m(0),a("div",{staticClass:"d-flex justify-content-between px-3 pb-3"},[a("i",{staticClass:"far fa-arrow-alt-circle-left iconeModale",on:{click:function(e){return t.toggleNext()}}}),a("i",{staticClass:"far fa-arrow-alt-circle-right iconeModale",on:{click:function(e){return t.togglePrevious()}}})])])},Lt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("figure",{staticClass:"d-flex flex-column flex-xl-row align-items-center zindex"},[o("img",{staticClass:"imageModale",attrs:{src:a("2484"),alt:"Un Mock-up du site Web Reservia"}}),o("div",{staticClass:"col-xl-6 overflow-auto captionModale"},[o("h3",{staticClass:"text-center text-primaire p-3"},[t._v(" Site E-commerce pour Orinoco ")]),o("p",{staticClass:"p-4 text-primaire"},[t._v(" Il s'agit du projet n°5 du parcours de développeur web d'OpenClassroom. J'ai réalisé le frontEnd de l'application Web :"),o("br"),t._v(" Création de panier grâce à des objets contenu dans la base de données mongoDB."),o("br"),t._v(" Envoie d'une commande factice ainsi que de recevoir et d'affichage du numéro de commande. "),o("br"),t._v("Le site a été réalisé avec les langages html, sass, bootstrap et javascript. ")])])])}],Ft={name:"ModaleOrinoco",methods:{toggleAllModale:function(){this.$store.commit("allModale")},toggleNext:function(){this.$store.commit("modaleOrinoco"),this.$store.commit("modaleSopekocko")},togglePrevious:function(){this.$store.commit("modaleOrinoco"),this.$store.commit("modaleChouetteAgence")}}},Ut=Ft,It=Object(m["a"])(Ut,Bt,Lt,!1,null,"e283f6ba",null),Jt=It.exports,Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column"},[a("h1",{staticClass:"text-titre text-center pt-5"},[t._v("Sopekocko")]),a("i",{staticClass:"far fa-times-circle fermeModale iconeModale",on:{click:function(e){return t.toggleAllModale()}}}),t._m(0),a("div",{staticClass:"d-flex justify-content-between px-3 pb-3"},[a("i",{staticClass:"far fa-arrow-alt-circle-left iconeModale",on:{click:function(e){return t.toggleNext()}}}),a("i",{staticClass:"far fa-arrow-alt-circle-right iconeModale",on:{click:function(e){return t.togglePrevious()}}})])])},Ht=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("figure",{staticClass:"d-flex flex-column flex-xl-row align-items-center zindex"},[o("img",{staticClass:"imageModale col-xl-6",attrs:{src:a("f22c"),alt:"Un Mock-up du site Web Reservia"}}),o("div",{staticClass:"col-xl-6 overflow-auto captionModale"},[o("h3",{staticClass:"text-center text-primaire p-3"},[t._v(" API sécurisée pour Sopekocko ")]),o("p",{staticClass:"p-4 text-primaire"},[t._v(" Il s'agit du projet n°6 du parcours de developpeur web d'OpenClassroom. J'ai réalisé la partie Backend à l'aide de Node.js, Express, MongoDB et Mongoose. L'API respecte le RGPD ainsi que les standards OWASP. ")])])])}],Qt={name:"ModaleSopekocko",methods:{toggleAllModale:function(){this.$store.commit("allModale")},toggleNext:function(){this.$store.commit("modaleSopekocko"),this.$store.commit("modaleGroupomania")},togglePrevious:function(){this.$store.commit("modaleSopekocko"),this.$store.commit("modaleOrinoco")}}},Kt=Qt,Xt=Object(m["a"])(Kt,Vt,Ht,!1,null,"1b449b61",null),Yt=Xt.exports,Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column",attrs:{"data-scroll":"","data-scroll-speed":"2"}},[a("h1",{staticClass:"text-titre text-center pt-5"},[t._v("Groupomania")]),a("i",{staticClass:"far fa-times-circle fermeModale iconeModale",on:{click:function(e){return t.toggleAllModale()}}}),t._m(0),a("div",{staticClass:"d-flex justify-content-between px-3 pb-3"},[a("i",{staticClass:"far fa-arrow-alt-circle-left iconeModale",on:{click:function(e){return t.toggleNext()}}}),a("i",{staticClass:"far fa-arrow-alt-circle-right iconeModale",on:{click:function(e){return t.togglePrevious()}}})])])},te=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("figure",{staticClass:"d-flex flex-column flex-xl-row align-items-center zindex"},[o("img",{staticClass:"imageModale",attrs:{src:a("8775"),alt:"Un Mock-up du site Web Reservia"}}),o("div",{staticClass:"col-xl-6 overflow-auto captionModale"},[o("h3",{staticClass:"text-primaire text-center p-3"},[t._v(" Création d'un réseau social d'entreprise pour Groupomania ")]),o("p",{staticClass:"p-4 text-primaire"},[t._v(" Création d'un réseau social d'entreprise, ce projet comporte aussi bien la partie backEnd que la partie frontEnd."),o("br"),t._v("Il a été réalisé avec Node.js et Express pour la partie backEnd et avec Vue.js pour la partie frontEnd. ")])])])}],ee={name:"ModaleGroupomania",methods:{toggleAllModale:function(){this.$store.commit("allModale")},toggleNext:function(){this.$store.commit("modaleGroupomania"),this.$store.commit("modaleArcheDuGrog")},togglePrevious:function(){this.$store.commit("modaleGroupomania"),this.$store.commit("modaleSopekocko")}}},ae=ee,oe=Object(m["a"])(ae,Zt,te,!1,null,"1affa97e",null),se=oe.exports,le=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column",attrs:{"data-scroll":"","data-scroll-speed":"2"}},[a("h1",{staticClass:"text-titre text-center pt-5"},[t._v("l'Arche Du Grog")]),a("i",{staticClass:"far fa-times-circle fermeModale iconeModale",on:{click:function(e){return t.toggleAllModale()}}}),t._m(0),a("div",{staticClass:"d-flex justify-content-between px-3 pb-3"},[a("i",{staticClass:"far fa-arrow-alt-circle-left iconeModale",on:{click:function(e){return t.toggleNext()}}}),a("i",{staticClass:"far fa-arrow-alt-circle-right iconeModale",on:{click:function(e){return t.togglePrevious()}}})])])},ie=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("figure",{staticClass:"d-flex flex-column flex-xl-row align-items-center zindex"},[o("img",{staticClass:"imageModale",attrs:{src:a("1ee9"),alt:"Un Mock-up du site Web Reservia"}}),o("div",{staticClass:"col-xl-6 overflow-auto captionModale"},[o("h3",{staticClass:"text-primaire text-center p-3"},[t._v(" Création du site Vitrine l'Arche Du Grog ")]),o("p",{staticClass:"p-4 text-primaire"},[t._v(" Site Web réalisé pour l'équipe l'Arche Du Grog autour de l'univers du jeu vidéo Sea of thieves. Le site est en cours de réalisation, il est crée avec Vue.js ")])])])}],re={name:"ModaleArcheDuGrog",methods:{toggleAllModale:function(){this.$store.commit("allModale")},toggleNext:function(){this.$store.commit("modaleArcheDuGrog"),this.$store.commit("modaleReservia")},togglePrevious:function(){this.$store.commit("modaleArcheDuGrog"),this.$store.commit("modaleGroupomania")}}},ce=re,ne=Object(m["a"])(ce,le,ie,!1,null,"2bc5a410",null),de=ne.exports;o["default"].use(ht["a"]);var ue=new ht["a"].Store({state:{modale:{modaleType:!1,modaleReservia:!1,modaleOhmyfood:!1,modaleSopekocko:!1,modaleGroupomania:!1,modaleChouetteAgence:!1,modaleArcheDuGrog:!1,modaleOrinoco:!1,overlay:!1}},mutations:{ouvertureOverlay:function(){this.state.modale.overlay=!0},modaleType:function(){this.state.modale.modaleType=!this.state.modale.modaleType,console.log(this.state.modale.modaleType)},modaleReservia:function(){this.state.modale.modaleReservia=!this.state.modale.modaleReservia},modaleOhmyfood:function(){this.state.modale.modaleOhmyfood=!this.state.modale.modaleOhmyfood},modaleSopekocko:function(){this.state.modale.modaleSopekocko=!this.state.modale.modaleSopekocko},modaleGroupomania:function(){this.state.modale.modaleGroupomania=!this.state.modale.modaleGroupomania},modaleChouetteAgence:function(){this.state.modale.modaleChouetteAgence=!this.state.modale.modaleChouetteAgence},modaleArcheDuGrog:function(){this.state.modale.modaleArcheDuGrog=!this.state.modale.modaleArcheDuGrog},modaleOrinoco:function(){this.state.modale.modaleOrinoco=!this.state.modale.modaleOrinoco},allModale:function(){for(var t in this.state.modale)this.state.modale[t]=!1}},actions:{},modules:{}}),me={name:"App",components:{NavBar:p,DvlpWeb:b,Footer:K,Competence:pt,Portfolio:_t,ModaleReservia:jt,ModaleOhmyfood:Dt,ModaleChouetteAgence:zt,ModaleOrinoco:Jt,ModaleSopekocko:Yt,ModaleGroupomania:se,ModaleArcheDuGrog:de},computed:Object(r["a"])({},Object(ht["b"])(["modale"])),data:function(){return{scroll:null}},methods:{toggleAllModale:function(){ue.commit("allModale")}},mounted:function(){this.scroll=new Mt["a"]({el:document.querySelector("#app"),smooth:!0}),console.log("scroll",this.scroll)}},fe=me,pe=(a("ed11"),Object(m["a"])(fe,l,i,!1,null,"1a530827",null)),ge=pe.exports,ve=a("b1e0"),he=a("498a"),xe=a("dbbe"),Ce=a("a7e2"),be=a("0025"),_e=a("8c60"),Me=a("1f1a");a("de82");o["default"].config.productionTip=!1,o["default"].use(he["a"]),o["default"].use(xe["a"]),o["default"].use(Ce["a"]),o["default"].use(be["a"]),o["default"].use(_e["a"]),o["default"].use(Me["a"]),o["default"].use(s["a"]),o["default"].use(ve["a"]),new o["default"]({store:ue,render:function(t){return t(ge)}}).$mount("#app")},"73ef":function(t,e,a){},8775:function(t,e,a){t.exports=a.p+"img/MockupGroupomania.550952bd.png"},a6e3:function(t,e,a){},d6f7:function(t,e,a){t.exports=a.p+"img/MockupReservia.afcb59b8.png"},de82:function(t,e,a){},e678:function(t,e,a){t.exports=a.p+"img/MockupChouetteAgence.a473c6ad.png"},ed11:function(t,e,a){"use strict";a("73ef")},f22c:function(t,e,a){t.exports=a.p+"img/MockupSopekocko.ae6b51d5.png"}});
//# sourceMappingURL=app.86e83ee6.js.map