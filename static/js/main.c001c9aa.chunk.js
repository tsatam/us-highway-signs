(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={exampleSign:"ExampleViewer_exampleSign__EXpop",display:"ExampleViewer_display__a2eQT",displayInner:"ExampleViewer_displayInner__3wLOu",sidebar:"ExampleViewer_sidebar__Temgt",sidebarInner:"ExampleViewer_sidebarInner__2O4E2",sidebarElement:"ExampleViewer_sidebarElement__1pjlD",signText:"ExampleViewer_signText__13CGn"}},,function(e,t,a){e.exports={sign:"MichiganStateSign_sign__1wq5l",backdrop:"MichiganStateSign_backdrop__3YQFp",diamond:"MichiganStateSign_diamond__5dgxz",blockM:"MichiganStateSign_blockM__2M8cc",text3Digit:"MichiganStateSign_text3Digit__16rQL"}},,,,,,,,function(e,t,a){e.exports={signWrapper:"Sign_signWrapper__Su1tr"}},function(e,t,a){e.exports={sign:"UnknownSign_sign__2Dqwn"}},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n,i=a(0),r=a.n(i),s=a(10),o=a.n(s),c=(a(19),a(4)),l=a(5),u=a(7),m=a(6),d=a(8),g=a(2);!function(e){e.INTERSTATE="interstate",e.US_HIGHWAY="us-highway",e.STATE="state"}(n||(n={}));var h,E=a(1),p=a.n(E),v=a(11),b=a.n(v),f=a(12),w=a.n(f);function S(e){return r.a.createElement("svg",{className:w.a.sign,viewBox:"-500 -500 1000 1000"},r.a.createElement("circle",{cx:"0",cy:"0",r:"450"}),r.a.createElement("text",{textAnchor:"middle",dominantBaseline:"middle",x:"0",y:"0"},e.routeNumber))}!function(e){e.MICHIGAN="michigan"}(h||(h={}));var _=a(3),y=a.n(_);function N(e){return r.a.createElement("svg",{className:y.a.sign,viewBox:"-512 -512 1024 1024"},r.a.createElement("rect",{className:y.a.backdrop,x:"-512",y:"-512",width:"1024",height:"1024",rx:"64",ry:"64"}),r.a.createElement("rect",{className:y.a.diamond,x:"-346",y:"-346",width:"686",height:"686"}),r.a.createElement("path",{className:y.a.blockM,d:"M 0,0 m 0,-210 52,-52 0,60 -15,0 0,40 64,0 0,-40 -15,0 0,-72 15,0 0,-40 -50, 0 -52,52 -52,-52 -50,0 0,40 15,0 0,72 -15,0 0,40 64,0 0,-40 -15,0 0,-60 52,52 z"}),r.a.createElement("text",{className:e.routeNumber.length>2?y.a.text3Digit:void 0,textAnchor:"middle",dominantBaseline:"middle",x:"0",y:"100"},e.routeNumber))}function x(e){switch(e.state){case h.MICHIGAN:return r.a.createElement(N,e);default:return r.a.createElement(S,e)}}function T(e){switch(e.system){case n.STATE:return r.a.createElement(x,e);default:return r.a.createElement(S,e)}}function C(e){return r.a.createElement("div",{className:b.a.signWrapper},r.a.createElement(T,e))}var k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={system:n.INTERSTATE,state:void 0,routeNumber:""},a.onChangeSystem=a.onChangeSystem.bind(Object(g.a)(Object(g.a)(a))),a.onChangeState=a.onChangeState.bind(Object(g.a)(Object(g.a)(a))),a.onChangeRouteNumber=a.onChangeRouteNumber.bind(Object(g.a)(Object(g.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:p.a.exampleSign},r.a.createElement("div",{className:p.a.display},r.a.createElement("div",{className:p.a.displayInner},r.a.createElement(C,{system:this.state.system,routeNumber:this.state.routeNumber,state:this.state.state}))),r.a.createElement("div",{className:p.a.sidebar},r.a.createElement("div",{className:p.a.sidebarInner},r.a.createElement("div",{className:p.a.sidebarElement},r.a.createElement("span",{className:p.a.signText},"HIGHWAY SYSTEM"),r.a.createElement("select",{value:this.state.system,onChange:this.onChangeSystem},r.a.createElement("option",{value:n.INTERSTATE},"Interstate"),r.a.createElement("option",{value:n.US_HIGHWAY},"U.S. Highway"),r.a.createElement("option",{value:n.STATE},"State"))),this.state.system===n.STATE&&r.a.createElement("div",{className:p.a.sidebarElement},r.a.createElement("span",{className:p.a.signText},"STATE"),r.a.createElement("select",{value:this.state.state,onChange:this.onChangeState},r.a.createElement("option",{value:void 0},"-"),r.a.createElement("option",{value:h.MICHIGAN},"Michigan"))),r.a.createElement("div",{className:p.a.sidebarElement},r.a.createElement("span",{className:p.a.signText},"ROUTE NUMBER"),r.a.createElement("input",{value:this.state.routeNumber,onChange:this.onChangeRouteNumber,maxLength:3})))))}},{key:"onChangeSystem",value:function(e){this.setState({system:e.target.value})}},{key:"onChangeState",value:function(e){this.setState({state:e.target.value})}},{key:"onChangeRouteNumber",value:function(e){this.setState({routeNumber:e.target.value})}}]),t}(r.a.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null))}}]),t}(r.a.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(20);o.a.render(r.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/us-highway-signs",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/us-highway-signs","/service-worker.js");I?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):O(t,e)})}}()}],[[13,1,2]]]);
//# sourceMappingURL=main.c001c9aa.chunk.js.map