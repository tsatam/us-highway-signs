(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={exampleSign:"ExampleViewer_exampleSign__EXpop",display:"ExampleViewer_display__a2eQT",displayInner:"ExampleViewer_displayInner__3wLOu",signContainer:"ExampleViewer_signContainer__1AE75",sidebar:"ExampleViewer_sidebar__Temgt",sidebarInner:"ExampleViewer_sidebarInner__2O4E2",sidebarElement:"ExampleViewer_sidebarElement__1pjlD",signText:"ExampleViewer_signText__13CGn"}},,function(e,t,a){e.exports={sign:"MichiganStateSign_sign__2-f2s",backdrop:"MichiganStateSign_backdrop__1XI_Q",diamond:"MichiganStateSign_diamond__r9RVr",blockM:"MichiganStateSign_blockM__1ixoz",text:"MichiganStateSign_text__1Wr0u",text3Digit:"MichiganStateSign_text3Digit__RRJjH"}},function(e,t,a){e.exports={sign:"UnknownSign_sign__2Dqwn",backdrop:"UnknownSign_backdrop__19KC4",circle:"UnknownSign_circle__1AG7e",text:"UnknownSign_text__2bb_Q",text3Digit:"UnknownSign_text3Digit__2UpKe"}},function(e,t,a){e.exports={sign:"UsHighwaySign_sign__1NBJE",backdrop:"UsHighwaySign_backdrop__37CfS",shield:"UsHighwaySign_shield__-pMnr",text:"UsHighwaySign_text__1fFK8",text3Digit:"UsHighwaySign_text3Digit__3gdH3"}},,,,,,,,function(e,t,a){e.exports={signWrapper:"Sign_signWrapper__Su1tr"}},function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n,c=a(0),i=a.n(c),o=a(12),r=a.n(o),s=(a(20),a(6)),l=a(7),m=a(10),u=a(8),g=a(9),d=a(2);!function(e){e.INTERSTATE="interstate",e.US_HIGHWAY="us-highway",e.STATE="state"}(n||(n={}));var h,E=a(1),_=a.n(E),p=a(13),b=a.n(p),v=a(4),w=a.n(v);function x(e){return i.a.createElement("svg",{className:w.a.sign,viewBox:"-512 -512 1024 1024"},i.a.createElement("rect",{className:w.a.backdrop,x:"-512",y:"-512",width:"1024",height:"1024",rx:"64",ry:"64"}),i.a.createElement("circle",{className:w.a.circle,cx:"0",cy:"0",r:"491"}),i.a.createElement("text",{className:"".concat(w.a.text," ").concat(e.routeNumber.length>2?w.a.text3Digit:void 0),textAnchor:"middle",dominantBaseline:"middle",x:"0",y:"75"},e.routeNumber))}!function(e){e.MICHIGAN="michigan"}(h||(h={}));var f=a(3),S=a.n(f);function N(e){return i.a.createElement("svg",{className:S.a.sign,viewBox:"-512 -512 1024 1024"},i.a.createElement("rect",{className:S.a.backdrop,x:"-512",y:"-512",width:"1024",height:"1024",rx:"64",ry:"64"}),i.a.createElement("rect",{className:S.a.diamond,x:"-346",y:"-346",width:"686",height:"686"}),i.a.createElement("path",{className:S.a.blockM,d:"M 0,0 m 0,-210 52,-52 0,60 -15,0 0,40 64,0 0,-40 -15,0 0,-72 15,0 0,-40 -50, 0 -52,52 -52,-52 -50,0 0,40 15,0 0,72 -15,0 0,40 64,0 0,-40 -15,0 0,-60 52,52 z"}),i.a.createElement("text",{className:"".concat(S.a.text," ").concat(e.routeNumber.length>2?S.a.text3Digit:void 0),textAnchor:"middle",dominantBaseline:"middle",x:"0",y:"100"},e.routeNumber))}function y(e){switch(e.state){case h.MICHIGAN:return i.a.createElement(N,e);default:return i.a.createElement(x,e)}}var k=a(5),T=a.n(k);function C(e){var t=e.routeNumber.length>2,a=t?60:48,n=48,c=13,o=t?8:2,r=t?20:14,s=t?19:11;return i.a.createElement("svg",{className:T.a.sign,viewBox:[a/-2,n/-2,a,n].join(" ")},i.a.createElement("rect",{className:T.a.backdrop,x:a/-2,y:n/-2,width:a,height:n,rx:3,ry:3}),i.a.createElement("g",{className:T.a.shield},i.a.createElement("path",{d:"M 0 ".concat(n/-2+1,"\n                    a ").concat(s," ").concat(s," 0 0 0 ").concat(r," 0\n                    l ").concat(9," ").concat(9,"\n                    a ").concat(15," ").concat(15," 0 0 0 -1 14\n                    A ").concat(c," ").concat(c," 0 0 1 ").concat(a/2-1," ").concat(n/2-18,"\n                    a ").concat(c," ").concat(c," 0 0 1 ").concat(-c," ").concat(c,"\n                    l ").concat(-o," 0\n                    A ").concat(11," ").concat(11," 0 0 0 0 ").concat(n/2-1,"\n                    z")}),i.a.createElement("path",{d:"M 0 ".concat(n/-2+1,"\n                    a ").concat(s," ").concat(s," 0 0 1 ").concat(-r," 0\n                    l ").concat(-9," ").concat(9,"\n                    a ").concat(15," ").concat(15," 0 0 1 1 14\n                    A ").concat(c," ").concat(c," 0 0 0 ").concat(a/-2+1," ").concat(n/2-18,"\n                    a ").concat(c," ").concat(c," 0 0 0 ").concat(c," ").concat(c,"\n                    l ").concat(o," 0\n                    A ").concat(11," ").concat(11," 0 0 1 0 ").concat(n/2-1,"\n                    z")})),i.a.createElement("text",{className:T.a.text,x:"0",y:n/2-c+4},e.routeNumber))}function A(e){switch(e.system){case n.US_HIGHWAY:return i.a.createElement(C,e);case n.STATE:return i.a.createElement(y,e);default:return i.a.createElement(x,e)}}function I(e){return i.a.createElement("div",{className:b.a.signWrapper},i.a.createElement(A,e))}var j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={system:n.INTERSTATE,state:void 0,routeNumber:""},a.onChangeSystem=a.onChangeSystem.bind(Object(d.a)(Object(d.a)(a))),a.onChangeState=a.onChangeState.bind(Object(d.a)(Object(d.a)(a))),a.onChangeRouteNumber=a.onChangeRouteNumber.bind(Object(d.a)(Object(d.a)(a))),a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:_.a.exampleSign},i.a.createElement("div",{className:_.a.display},i.a.createElement("div",{className:_.a.displayInner},i.a.createElement("div",{className:_.a.signContainer},i.a.createElement(I,{system:this.state.system,routeNumber:this.state.routeNumber,state:this.state.state})))),i.a.createElement("div",{className:_.a.sidebar},i.a.createElement("div",{className:_.a.sidebarInner},i.a.createElement("div",{className:_.a.sidebarElement},i.a.createElement("span",{className:_.a.signText},"HIGHWAY SYSTEM"),i.a.createElement("select",{value:this.state.system,onChange:this.onChangeSystem},i.a.createElement("option",{value:n.INTERSTATE},"Interstate"),i.a.createElement("option",{value:n.US_HIGHWAY},"U.S. Highway"),i.a.createElement("option",{value:n.STATE},"State"))),this.state.system===n.STATE&&i.a.createElement("div",{className:_.a.sidebarElement},i.a.createElement("span",{className:_.a.signText},"STATE"),i.a.createElement("select",{value:this.state.state,onChange:this.onChangeState},i.a.createElement("option",{value:void 0},"-"),i.a.createElement("option",{value:h.MICHIGAN},"Michigan"))),i.a.createElement("div",{className:_.a.sidebarElement},i.a.createElement("span",{className:_.a.signText},"ROUTE NUMBER"),i.a.createElement("input",{value:this.state.routeNumber,onChange:this.onChangeRouteNumber,maxLength:3})))))}},{key:"onChangeSystem",value:function(e){this.setState({system:e.target.value})}},{key:"onChangeState",value:function(e){this.setState({state:e.target.value})}},{key:"onChangeRouteNumber",value:function(e){this.setState({routeNumber:e.target.value})}}]),t}(i.a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(j,null))}}]),t}(i.a.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(21);r.a.render(i.a.createElement(O,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/us-highway-signs",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/us-highway-signs","/service-worker.js");U?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):H(t,e)})}}()}],[[14,1,2]]]);
//# sourceMappingURL=main.69181f8b.chunk.js.map