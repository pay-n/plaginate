(this.webpackJsonpplaginate=this.webpackJsonpplaginate||[]).push([[0],{154:function(e,t,a){e.exports=a(254)},160:function(e,t,a){},161:function(e,t,a){},252:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),i=(a(159),a(160),a(161),a(149)),c=a(15),s=a(32),m=a(33),u=a(35),d=a(34),p=a(137),h=a.n(p),f=a(5),g=a.n(f);a(109),a(170);g.a.initializeApp({apiKey:"AIzaSyCWcY_15S_3xRn-6McM6vRADGo9V9UnGxk",authDomain:"web-portal-a69d1.firebaseapp.com",databaseURL:"https://web-portal-a69d1.firebaseio.com",projectId:"web-portal-a69d1",storageBucket:"web-portal-a69d1.appspot.com",messagingSenderId:"929537871676",appId:"1:929537871676:web:39b98c84f5599c004dd839"});g.a.auth(),g.a.firestore();var b={signInFlow:"popup",signInSuccessUrl:"/signedIn",signInOptions:[g.a.auth.GoogleAuthProvider.PROVIDER_ID,g.a.auth.FacebookAuthProvider.PROVIDER_ID]},E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",textAlign:"center"}},r.a.createElement("h1",null," Login "),r.a.createElement(h.a,{uiConfig:b,firebaseAuth:g.a.auth()}))}}]),a}(r.a.Component),y=a(258),v=a(269),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"banner style1 orient-left content-align-left image-position-right onload-image-fade-in onload-content-fade-right"},r.a.createElement(y.a,{sm:6},r.a.createElement(v.a,{style:{width:"50%",marginLeft:"8em",marginTop:"12em",padding:"3em"}},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Text,null,r.a.createElement(E,null))))),r.a.createElement(y.a,{sm:6,className:"image"},r.a.createElement("img",{src:"img/banner.jpg",alt:""})))}},{key:"componentDidMount",value:function(){this.setState({someKey:"otherValue"})}}]),a}(r.a.Component),k=a(95),O=a(97),S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"wrapper style1 align-center"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null," ",r.a.createElement("a",{href:"https://github.com/pay-n/test-protect"}," ",r.a.createElement(k.a,{icon:O.b}))),r.a.createElement("li",null," ",r.a.createElement("a",{href:"https://openhacks.devpost.com"}," ",r.a.createElement(k.a,{icon:O.a})))),r.a.createElement("p",null,"\xa9 PAYN Design: ",r.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),".")))}},{key:"componentDidMount",value:function(){this.setState({someKey:"otherValue"})}}]),a}(r.a.Component),j=a(264),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(j.a,{bg:"light",variant:"light",fixed:"top"},r.a.createElement(j.a.Brand,{href:"#"},r.a.createElement("img",{width:"70%",height:"70%",src:"img/test-protect-header.png",className:"d-inline-block align-top",alt:"Test protect logo"}))))}},{key:"componentDidMount",value:function(){this.setState({someKey:"otherValue"})}}]),a}(r.a.Component),_=a(259),T=a(59),C=a.n(T),D=a(270),A=a(272),V=a(260),x=a(273),F=a(266),M=a(271),N=a(265),P=a(268),R=a(275),K=a(276),z=a(267),L=a(274),B=a(261),W=a(262),U=a(263),G=(a(178),[{name:"Relevance",value:"",direction:""},{name:"Title",value:"title",direction:"asc"}]),H=new D.a({searchKey:"search-371auk61r2bwqtdzocdgutmg",engineName:"search-ui-examples",hostIdentifier:"host-2376rb",endpointBase:""}),J={alwaysSearchOnInitialLoad:!0,searchQuery:{result_fields:{title:{snippet:{size:100,fallback:!0}},nps_link:{raw:{}},description:{snippet:{size:100,fallback:!0}}},disjunctiveFacets:["acres","states","date_established","location"],facets:{world_heritage_site:{type:"value"},states:{type:"value",size:30},acres:{type:"range",ranges:[{from:-1,name:"Any"},{from:0,to:1e3,name:"Small"},{from:1001,to:1e5,name:"Medium"},{from:100001,name:"Large"}]},location:{center:"37.7749, -122.4194",type:"range",unit:"mi",ranges:[{from:0,to:100,name:"Nearby"},{from:100,to:500,name:"A longer drive"},{from:500,name:"Perhaps fly?"}]},date_established:{type:"range",ranges:[{from:C()().subtract(50,"years").toISOString(),name:"Within the last 50 years"},{from:C()().subtract(100,"years").toISOString(),to:C()().subtract(50,"years").toISOString(),name:"50 - 100 years ago"},{to:C()().subtract(100,"years").toISOString(),name:"More than 100 years ago"}]},visitors:{type:"range",ranges:[{from:0,to:1e4,name:"0 - 10000"},{from:10001,to:1e5,name:"10001 - 100000"},{from:100001,to:5e5,name:"100001 - 500000"},{from:500001,to:1e6,name:"500001 - 1000000"},{from:1000001,to:5e6,name:"1000001 - 5000000"},{from:5000001,to:1e7,name:"5000001 - 10000000"},{from:10000001,name:"10000001+"}]}}},autocompleteQuery:{results:{resultsPerPage:5,result_fields:{title:{snippet:{size:100,fallback:!0}},nps_link:{raw:{}}}},suggestions:{types:{documents:{fields:["title","description"]}},size:4}},apiConnector:H},Q=function(){return r.a.createElement(_.a,{fluid:!0},r.a.createElement(A.a,{config:J},r.a.createElement(V.a,{mapContextToProps:function(e){return{wasSearched:e.wasSearched}}},(function(e){var t=e.wasSearched;return r.a.createElement(x.a,null,r.a.createElement(L.a,{header:r.a.createElement(F.a,{autocompleteMinimumCharacters:3,autocompleteResults:{linkTarget:"_blank",sectionTitle:"Results",titleField:"title",urlField:"nps_link",shouldTrackClickThrough:!0,clickThroughTags:["test"]},autocompleteSuggestions:!0,debounceLength:0}),sideContent:r.a.createElement("div",null,t&&r.a.createElement(M.a,{label:"Sort by",sortOptions:G}),r.a.createElement(N.a,{field:"states",label:"States",filterType:"any",isFilterable:!0}),r.a.createElement(N.a,{field:"world_heritage_site",label:"World Heritage Site?",view:B.a}),r.a.createElement(N.a,{field:"visitors",label:"Visitors",view:W.a}),r.a.createElement(N.a,{field:"date_established",label:"Date Established",filterType:"any"}),r.a.createElement(N.a,{field:"location",label:"Distance",filterType:"any"}),r.a.createElement(N.a,{field:"acres",label:"Acres",view:U.a})),bodyContent:r.a.createElement(P.a,{titleField:"title",urlField:"nps_link",shouldTrackClickThrough:!0}),bodyHeader:r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(R.a,null),t&&r.a.createElement(K.a,null)),bodyFooter:r.a.createElement(z.a,null)}))}))))},Y=function(){return r.a.createElement("main",{id:"wrapper",className:"divided"},r.a.createElement(I,null),r.a.createElement(w,null),r.a.createElement(Q,null),r.a.createElement(S,null))};a(252);var q=function(){return r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/"},r.a.createElement(Y,null)),r.a.createElement(c.a,{exact:!0,path:"/search"},r.a.createElement(Q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.54296506.chunk.js.map