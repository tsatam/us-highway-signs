(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(21)},17:function(e,n,t){},2:function(e,n,t){e.exports={exampleSign:"ExampleViewer_exampleSign__mjiiM",display:"ExampleViewer_display__12Ce1",displayInner:"ExampleViewer_displayInner__1bK_d",signContainer:"ExampleViewer_signContainer__3UHZM",sidebar:"ExampleViewer_sidebar__3Ayod",sidebarInner:"ExampleViewer_sidebarInner__Wux3H",sidebarElement:"ExampleViewer_sidebarElement__64uyR",signText:"ExampleViewer_signText__vOQB6"}},21:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(10),r=t.n(o),c=(t(17),t(4)),l=t(5),s=t(7),m=t(6),d=t(8),g=t(3),u=t(1),h=function(){return(h=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function _(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!==typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var b,f={signWrapper:"Sign-module_signWrapper__DjV-a"};_(".Sign-module_signWrapper__DjV-a {\n    height: 100%;\n    padding: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}"),function(e){e.INTERSTATE="interstate",e.US_HIGHWAY="us-highway",e.STATE="state"}(b||(b={}));var p,x={sign:"UnknownSign-module_sign__13FdG",backdrop:"UnknownSign-module_backdrop__3Jq3Y",circle:"UnknownSign-module_circle__6NoxG",text:"UnknownSign-module_text__3xxJd",text3Digit:"UnknownSign-module_text3Digit__3Hz_n"};function S(e){return Object(u.createElement)("svg",{className:x.sign,viewBox:"-512 -512 1024 1024"},Object(u.createElement)("rect",{className:x.backdrop,x:"-512",y:"-512",width:"1024",height:"1024",rx:"64",ry:"64"}),Object(u.createElement)("circle",{className:x.circle,cx:"0",cy:"0",r:"491"}),Object(u.createElement)("text",{className:x.text+" "+(e.routeNumber.length>2?x.text3Digit:void 0),textAnchor:"middle",dominantBaseline:"middle",x:"0",y:"75"},e.routeNumber))}_(".UnknownSign-module_sign__13FdG {\n    font-weight: 600;\n    width: 100%;\n    height: 100%;\n}\n\n.UnknownSign-module_backdrop__3Jq3Y {\n    fill: #000;\n}\n\n.UnknownSign-module_circle__6NoxG {\n    stroke: none;\n    fill: #fff;\n}\n\n.UnknownSign-module_text__3xxJd {\n    text-anchor: middle;\n    dominant-baseline: middle;\n    font-size: 768px;\n    font-weight: 600;\n    fill: black;\n}\n\n.UnknownSign-module_text3Digit__3Hz_n {\n    transform: scaleX(0.7);\n}"),function(e){e.MICHIGAN="michigan"}(p||(p={}));var w={sign:"MichiganStateSign-module_sign__1V1F5",backdrop:"MichiganStateSign-module_backdrop__1KIm0",diamond:"MichiganStateSign-module_diamond__2rwXE",blockM:"MichiganStateSign-module_blockM__3j79W",text:"MichiganStateSign-module_text__3cltx",text3Digit:"MichiganStateSign-module_text3Digit__2oYSe"};function E(e){return Object(u.createElement)("svg",{className:w.sign,viewBox:"-512 -512 1024 1024"},Object(u.createElement)("rect",{className:w.backdrop,x:"-512",y:"-512",width:"1024",height:"1024",rx:"64",ry:"64"}),Object(u.createElement)("rect",{className:w.diamond,x:"-346",y:"-346",width:"686",height:"686"}),Object(u.createElement)("path",{className:w.blockM,d:"M 0,0\n            m 0,-210\n            52,-52\n            0,60\n            -15,0\n            0,40\n            64,0\n            0,-40\n            -15,0\n            0,-72\n            15,0\n            0,-40\n            -50, 0\n            -52,52\n            -52,-52\n            -50,0\n            0,40\n            15,0\n            0,72\n            -15,0\n            0,40\n            64,0\n            0,-40\n            -15,0\n            0,-60\n            52,52\n            z"}),Object(u.createElement)("text",{className:w.text+" "+(e.routeNumber.length>2?w.text3Digit:void 0),textAnchor:"middle",dominantBaseline:"middle",x:"0",y:"100"},e.routeNumber))}function v(e){switch(e.state){case p.MICHIGAN:return Object(u.createElement)(E,h({},e));default:return Object(u.createElement)(S,h({},e))}}_(".MichiganStateSign-module_sign__1V1F5 {\n    font-weight: 600;\n    height: 100%;\n}\n\n.MichiganStateSign-module_backdrop__1KIm0 {\n    fill: #000;\n}\n\n.MichiganStateSign-module_diamond__2rwXE {\n    fill: #fff;\n    transform: rotate(45deg);\n}\n\n.MichiganStateSign-module_blockM__3j79W {\n    fill: #000;\n    stroke-width: 0;\n}\n\n.MichiganStateSign-module_text__3cltx {\n    text-anchor: middle;\n    dominant-baseline: middle;\n    font-size: 450px;\n    font-weight: 600;\n    fill: black;\n}\n\n.MichiganStateSign-module_text3Digit__2oYSe {\n    transform: scaleX(0.7);\n}");var y={sign:"UsHighwaySign-module_sign__1ZL3R",backdrop:"UsHighwaySign-module_backdrop__71Qj4",shield:"UsHighwaySign-module_shield__1-z57",text:"UsHighwaySign-module_text__2573u",text3Digit:"UsHighwaySign-module_text3Digit__3LcJs"};function N(e){var n=e.routeNumber.length>2,t=n?60:48,a=48,i=13,o=n?8:2,r=n?20:14,c=n?19:11;return Object(u.createElement)("svg",{className:y.sign,viewBox:[t/-2,a/-2,t,a].join(" ")},Object(u.createElement)("rect",{className:y.backdrop,x:t/-2,y:a/-2,width:t,height:a,rx:3,ry:3}),Object(u.createElement)("g",{className:y.shield},Object(u.createElement)("path",{d:"M 0 "+(a/-2+1)+"\n                    a "+c+" "+c+" 0 0 0 "+r+" 0\n                    l 9 9\n                    a 15 15 0 0 0 -1 14\n                    A "+i+" "+i+" 0 0 1 "+(t/2-1)+" "+(a/2-18)+"\n                    a "+i+" "+i+" 0 0 1 "+-i+" "+i+"\n                    l "+-o+" 0\n                    A 11 11 0 0 0 0 "+(a/2-1)+"\n                    z"}),Object(u.createElement)("path",{d:"M 0 "+(a/-2+1)+"\n                    a "+c+" "+c+" 0 0 1 "+-r+" 0\n                    l "+-9+" 9\n                    a 15 15 0 0 1 1 14\n                    A "+i+" "+i+" 0 0 0 "+(t/-2+1)+" "+(a/2-18)+"\n                    a "+i+" "+i+" 0 0 0 "+i+" "+i+"\n                    l "+o+" 0\n                    A 11 11 0 0 1 0 "+(a/2-1)+"\n                    z"})),Object(u.createElement)("text",{className:y.text,x:"0",y:a/2-i+4},e.routeNumber))}function j(e){switch(e.system){case b.US_HIGHWAY:return Object(u.createElement)(N,h({},e));case b.STATE:return Object(u.createElement)(v,h({},e));default:return Object(u.createElement)(S,h({},e))}}_(".UsHighwaySign-module_sign__1ZL3R {\n    font-weight: 600;\n    height: 100%;\n}\n\n.UsHighwaySign-module_backdrop__71Qj4 {\n    fill: #000;\n}\n\n.UsHighwaySign-module_shield__1-z57 {\n    fill: #fff;\n    stroke-width: 0;\n}\n\n.UsHighwaySign-module_text__2573u {\n    text-anchor: middle;\n    dominant-baseline: text-after-edge;\n    font-size: 28px;\n    font-weight: 600;\n    fill: black;\n}\n\n.UsHighwaySign-module_text3Digit__3LcJs {\n    transform: scaleX(0.7);\n}");var k=function(e){return Object(u.createElement)("div",{className:f.signWrapper},Object(u.createElement)(j,h({},e)))},O=t(2),C=t.n(O),T=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(m.a)(n).call(this,e))).state={system:b.INTERSTATE,state:void 0,routeNumber:""},t.onChangeSystem=t.onChangeSystem.bind(Object(g.a)(Object(g.a)(t))),t.onChangeState=t.onChangeState.bind(Object(g.a)(Object(g.a)(t))),t.onChangeRouteNumber=t.onChangeRouteNumber.bind(Object(g.a)(Object(g.a)(t))),t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:C.a.exampleSign},i.a.createElement("div",{className:C.a.display},i.a.createElement("div",{className:C.a.displayInner},i.a.createElement("div",{className:C.a.signContainer},i.a.createElement(k,{system:this.state.system,routeNumber:this.state.routeNumber,state:this.state.state})))),i.a.createElement("div",{className:C.a.sidebar},i.a.createElement("div",{className:C.a.sidebarInner},i.a.createElement("div",{className:C.a.sidebarElement},i.a.createElement("span",{className:C.a.signText},"HIGHWAY SYSTEM"),i.a.createElement("select",{value:this.state.system,onChange:this.onChangeSystem},i.a.createElement("option",{value:b.INTERSTATE},"Interstate"),i.a.createElement("option",{value:b.US_HIGHWAY},"U.S. Highway"),i.a.createElement("option",{value:b.STATE},"State"))),this.state.system===b.STATE&&i.a.createElement("div",{className:C.a.sidebarElement},i.a.createElement("span",{className:C.a.signText},"STATE"),i.a.createElement("select",{value:this.state.state,onChange:this.onChangeState},i.a.createElement("option",{value:void 0},"-"),i.a.createElement("option",{value:p.MICHIGAN},"Michigan"))),i.a.createElement("div",{className:C.a.sidebarElement},i.a.createElement("span",{className:C.a.signText},"ROUTE NUMBER"),i.a.createElement("input",{value:this.state.routeNumber,onChange:this.onChangeRouteNumber,maxLength:3})))))}},{key:"onChangeSystem",value:function(e){this.setState({system:e.target.value})}},{key:"onChangeState",value:function(e){this.setState({state:e.target.value})}},{key:"onChangeRouteNumber",value:function(e){this.setState({routeNumber:e.target.value})}}]),n}(i.a.Component),U=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.createElement("div",null,a.createElement(T,null))}}]),n}(a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(20);r.a.render(i.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/us-highway-signs",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/us-highway-signs","/service-worker.js");A?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):M(n,e)})}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.40a2e293.chunk.js.map