(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(21)},17:function(e,n,t){},2:function(e,n,t){e.exports={exampleSign:"ExampleViewer_exampleSign__mjiiM",display:"ExampleViewer_display__12Ce1",displayInner:"ExampleViewer_displayInner__1bK_d",signContainer:"ExampleViewer_signContainer__3UHZM",sidebar:"ExampleViewer_sidebar__3Ayod",sidebarInner:"ExampleViewer_sidebarInner__Wux3H",sidebarElement:"ExampleViewer_sidebarElement__64uyR",input:"ExampleViewer_input__28UZS",signText:"ExampleViewer_signText__vOQB6"}},21:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),l=t(10),r=t.n(l),s=(t(17),t(4)),o=t(5),c=t(7),d=t(6),m=t(8),g=t(3),u=t(0),h=function(){return(h=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function _(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!==typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var b,f={signWrapper:"Sign-module_signWrapper__DjV-a"};_(".Sign-module_signWrapper__DjV-a {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}"),function(e){e.INTERSTATE="interstate",e.US_HIGHWAY="us-highway",e.STATE="state"}(b||(b={}));var x,p={sign:"UnknownSign-module_sign__13FdG",backdrop:"UnknownSign-module_backdrop__3Jq3Y",circle:"UnknownSign-module_circle__6NoxG",text:"UnknownSign-module_text__3xxJd",text3Digit:"UnknownSign-module_text3Digit__3Hz_n"};function S(e){return Object(u.createElement)("svg",{className:p.sign,viewBox:"-512 -512 1024 1024"},Object(u.createElement)("rect",{className:p.backdrop,x:"-512",y:"-512",width:"1024",height:"1024",rx:"64",ry:"64"}),Object(u.createElement)("circle",{className:p.circle,cx:"0",cy:"0",r:"491"}),Object(u.createElement)("text",{className:p.text+" "+(e.routeNumber.length>2?p.text3Digit:void 0),textAnchor:"middle",dominantBaseline:"middle",x:"0",y:"75"},e.routeNumber))}_(".UnknownSign-module_sign__13FdG {\n    font-weight: 600;\n    width: 100%;\n    height: 100%;\n}\n\n.UnknownSign-module_backdrop__3Jq3Y {\n    fill: #000;\n}\n\n.UnknownSign-module_circle__6NoxG {\n    stroke: none;\n    fill: #fff;\n}\n\n.UnknownSign-module_text__3xxJd {\n    text-anchor: middle;\n    dominant-baseline: middle;\n    font-size: 768px;\n    font-weight: 600;\n    fill: black;\n}\n\n.UnknownSign-module_text3Digit__3Hz_n {\n    transform: scaleX(0.7);\n}"),function(e){e.MICHIGAN="michigan"}(x||(x={}));var E={sign:"MichiganStateSign-module_sign__1V1F5",backdrop:"MichiganStateSign-module_backdrop__1KIm0",diamond:"MichiganStateSign-module_diamond__2rwXE",blockM:"MichiganStateSign-module_blockM__3j79W",text:"MichiganStateSign-module_text__3cltx",text3Digit:"MichiganStateSign-module_text3Digit__2oYSe"};function w(e){return Object(u.createElement)("svg",{className:E.sign,viewBox:"-512 -512 1024 1024"},Object(u.createElement)("rect",{className:E.backdrop,x:"-512",y:"-512",width:"1024",height:"1024",rx:"64",ry:"64"}),Object(u.createElement)("rect",{className:E.diamond,x:"-346",y:"-346",width:"686",height:"686"}),Object(u.createElement)("path",{className:E.blockM,d:"M 0,0\n            m 0,-210\n            52,-52\n            0,60\n            -15,0\n            0,40\n            64,0\n            0,-40\n            -15,0\n            0,-72\n            15,0\n            0,-40\n            -50, 0\n            -52,52\n            -52,-52\n            -50,0\n            0,40\n            15,0\n            0,72\n            -15,0\n            0,40\n            64,0\n            0,-40\n            -15,0\n            0,-60\n            52,52\n            z"}),Object(u.createElement)("text",{className:E.text+" "+(e.routeNumber.length>2?E.text3Digit:void 0),textAnchor:"middle",dominantBaseline:"middle",x:"0",y:"100"},e.routeNumber))}function v(e){switch(e.state){case x.MICHIGAN:return Object(u.createElement)(w,h({},e));default:return Object(u.createElement)(S,h({},e))}}_(".MichiganStateSign-module_sign__1V1F5 {\n    font-weight: 600;\n    height: 100%;\n}\n\n.MichiganStateSign-module_backdrop__1KIm0 {\n    fill: #000;\n}\n\n.MichiganStateSign-module_diamond__2rwXE {\n    fill: #fff;\n    transform: rotate(45deg);\n}\n\n.MichiganStateSign-module_blockM__3j79W {\n    fill: #000;\n    stroke-width: 0;\n}\n\n.MichiganStateSign-module_text__3cltx {\n    text-anchor: middle;\n    dominant-baseline: middle;\n    font-size: 450px;\n    font-weight: 600;\n    fill: black;\n}\n\n.MichiganStateSign-module_text3Digit__2oYSe {\n    transform: scaleX(0.7);\n}");var y={sign:"UsHighwaySign-module_sign__1ZL3R",backdrop:"UsHighwaySign-module_backdrop__71Qj4",shield:"UsHighwaySign-module_shield__1-z57",text:"UsHighwaySign-module_text__2573u",text3Digit:"UsHighwaySign-module_text3Digit__3LcJs"};function j(e){var n=e.routeNumber.length>2,t=n?60:48,a=48,i=13,l=n?8:2,r=n?20:14,s=n?19:11;return Object(u.createElement)("svg",{className:y.sign,viewBox:[t/-2,a/-2,t,a].join(" ")},Object(u.createElement)("rect",{className:y.backdrop,x:t/-2,y:a/-2,width:t,height:a,rx:3,ry:3}),Object(u.createElement)("g",{className:y.shield},Object(u.createElement)("path",{d:"M 0 "+(a/-2+1)+"\n                    a "+s+" "+s+" 0 0 0 "+r+" 0\n                    l 9 9\n                    a 15 15 0 0 0 -1 14\n                    A "+i+" "+i+" 0 0 1 "+(t/2-1)+" "+(a/2-18)+"\n                    a "+i+" "+i+" 0 0 1 "+-i+" "+i+"\n                    l "+-l+" 0\n                    A 11 11 0 0 0 0 "+(a/2-1)+"\n                    l "+-1+" "+-1+"\n                    z"}),Object(u.createElement)("path",{d:"M 0 "+(a/-2+1)+"\n                    a "+s+" "+s+" 0 0 1 "+-r+" 0\n                    l "+-9+" 9\n                    a 15 15 0 0 1 1 14\n                    A "+i+" "+i+" 0 0 0 "+(t/-2+1)+" "+(a/2-18)+"\n                    a "+i+" "+i+" 0 0 0 "+i+" "+i+"\n                    l "+l+" 0\n                    A 11 11 0 0 1 0 "+(a/2-1)+"\n                    z"})),Object(u.createElement)("text",{className:y.text,x:"0",y:a/2-i+4},e.routeNumber))}_(".UsHighwaySign-module_sign__1ZL3R {\n    font-weight: 600;\n    height: 100%;\n}\n\n.UsHighwaySign-module_backdrop__71Qj4 {\n    fill: #000;\n}\n\n.UsHighwaySign-module_shield__1-z57 {\n    fill: #fff;\n    stroke-width: 0;\n}\n\n.UsHighwaySign-module_text__2573u {\n    text-anchor: middle;\n    dominant-baseline: text-after-edge;\n    font-size: 28px;\n    font-weight: 600;\n    fill: black;\n}\n\n.UsHighwaySign-module_text3Digit__3LcJs {\n    transform: scaleX(0.7);\n}");var N={sign:"InterstateSign-module_sign__1n_6g",shieldOuter:"InterstateSign-module_shieldOuter___Zxz2",shieldInnerBlue:"InterstateSign-module_shieldInnerBlue__36gZM",shieldInnerRed:"InterstateSign-module_shieldInnerRed__381Pd",shieldInner3Digit:"InterstateSign-module_shieldInner3Digit__aXh_K",interstateLabel:"InterstateSign-module_interstateLabel__39j3x",text:"InterstateSign-module_text__2YrwC",text3Digit:"InterstateSign-module_text3Digit__Pi1lm"};function O(e,n,t,a){return Object(u.createElement)(u.Fragment,null,Object(u.createElement)("path",{d:"M 0 "+e/-2+"\n                a "+n+" "+n+" 0 0 0 "+t+" 0\n                A "+a+" "+a+" 0 0 1 0 "+e/2+"\n                l "+-.1+" "+-.1+"\n                z"}),Object(u.createElement)("path",{d:"M 0 "+e/-2+"\n                a "+n+" "+n+" 0 0 1 "+-t+" 0\n                A "+a+" "+a+" 0 0 0 0 "+e/2+"\n                l 0.1 "+-.1+"\n                z"}))}function I(e){var n=e.routeNumber.length>2,t=n?60:48,a=48,i=15.375,l=n?48:30,r=n?34:30,s=n?21.818:15.307,o=n?26.8:17.62,c=n?27.4:21.92;return console.log(t,a,1,i,20,11,10,l,r,4,5,s,o,c),Object(u.createElement)("svg",{className:N.sign,viewBox:[t/-2,a/-2,t,a].join(" ")},Object(u.createElement)("defs",null,Object(u.createElement)("clipPath",{id:"shieldInnerBlueClip"},Object(u.createElement)("rect",{x:t/-2,y:a/-2+10+1,width:t,height:a-10-1})),Object(u.createElement)("clipPath",{id:"shieldInnerRedClip"},Object(u.createElement)("rect",{x:t/-2,y:a/-2,width:t,height:10}))),Object(u.createElement)("g",{className:N.shieldOuter},O(a,l,o,r)),Object(u.createElement)("g",{className:N.shieldInnerBlue+" "+(n?N.shieldInner3Digit:""),clipPath:"url(#shieldInnerBlueClip)"},O(a,l,o,r)),Object(u.createElement)("g",{className:N.shieldInnerRed+" "+(n?N.shieldInner3Digit:""),clipPath:"url(#shieldInnerRedClip)"},O(a,l,o,r)),Object(u.createElement)("text",{x:"0",y:a/-2+4,className:N.interstateLabel},"INTERSTATE"),Object(u.createElement)("text",{className:N.text+" "+(n?N.text3Digit:""),x:"0",y:a/-2+i},e.routeNumber))}function k(e){switch(e.system){case b.INTERSTATE:return Object(u.createElement)(I,h({},e));case b.US_HIGHWAY:return Object(u.createElement)(j,h({},e));case b.STATE:return Object(u.createElement)(v,h({},e));default:return Object(u.createElement)(S,h({},e))}}_(".InterstateSign-module_sign__1n_6g {\n    font-weight: 600;\n    height: 100%;\n}\n\n.InterstateSign-module_shieldOuter___Zxz2 {\n    fill: #fff;\n    stroke-width: 0;\n    outline: 1px solid #000;\n}\n\n.InterstateSign-module_shieldInnerBlue__36gZM {\n    fill: #007dc2;\n    transform: scale(0.9583, 0.9583);\n}\n\n.InterstateSign-module_shieldInnerRed__381Pd {\n    fill: #d9261c;\n    transform: scale(0.9583, 0.9583);\n}\n\n.InterstateSign-module_shieldInner3Digit__aXh_K {\n    transform: scale(0.9667, 0.9583)\n}\n\n.InterstateSign-module_interstateLabel__39j3x {\n    text-anchor: middle;\n    dominant-baseline: text-before-edge;\n    fill: #fff;\n    font-size: 7px;\n    font-weight: 600;\n    transform: scaleX(0.75);\n}\n\n.InterstateSign-module_text__2YrwC {\n    text-anchor: middle;\n    dominant-baseline: text-before-edge;\n    font-size: 28px;\n    font-weight: 600;\n    fill: #fff;\n}\n\n.InterstateSign-module_text3Digit__Pi1lm {\n    transform: scaleX(0.75);\n}");var C=function(e){return Object(u.createElement)("div",{className:f.signWrapper},Object(u.createElement)(k,h({},e)))},T=t(2),A=t.n(T),M=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(d.a)(n).call(this,e))).state={system:b.INTERSTATE,state:void 0,routeNumber:"1"},t.onChangeSystem=t.onChangeSystem.bind(Object(g.a)(Object(g.a)(t))),t.onChangeState=t.onChangeState.bind(Object(g.a)(Object(g.a)(t))),t.onChangeRouteNumber=t.onChangeRouteNumber.bind(Object(g.a)(Object(g.a)(t))),t}return Object(m.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:A.a.exampleSign},i.a.createElement("div",{className:A.a.display},i.a.createElement("div",{className:A.a.displayInner},i.a.createElement("div",{className:A.a.signContainer},i.a.createElement(C,{system:this.state.system,routeNumber:this.state.routeNumber,state:this.state.state})))),i.a.createElement("div",{className:A.a.sidebar},i.a.createElement("div",{className:A.a.sidebarInner},i.a.createElement("div",{className:A.a.sidebarElement},i.a.createElement("span",{className:A.a.signText},"HIGHWAY SYSTEM"),i.a.createElement("select",{className:A.a.input,value:this.state.system,onChange:this.onChangeSystem},i.a.createElement("option",{value:b.INTERSTATE},"Interstate"),i.a.createElement("option",{value:b.US_HIGHWAY},"U.S. Highway"),i.a.createElement("option",{value:b.STATE},"State"))),this.state.system===b.STATE&&i.a.createElement("div",{className:A.a.sidebarElement},i.a.createElement("span",{className:A.a.signText},"STATE"),i.a.createElement("select",{className:A.a.input,value:this.state.state,onChange:this.onChangeState},i.a.createElement("option",{value:void 0},"-"),i.a.createElement("option",{value:x.MICHIGAN},"Michigan"))),i.a.createElement("div",{className:A.a.sidebarElement},i.a.createElement("span",{className:A.a.signText},"ROUTE NUMBER"),i.a.createElement("input",{className:A.a.input,value:this.state.routeNumber,onChange:this.onChangeRouteNumber,maxLength:3})))))}},{key:"onChangeSystem",value:function(e){this.setState({system:e.target.value})}},{key:"onChangeState",value:function(e){this.setState({state:e.target.value})}},{key:"onChangeRouteNumber",value:function(e){this.setState({routeNumber:e.target.value.substr(0,3)})}}]),n}(i.a.Component),U=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return a.createElement("div",null,a.createElement(M,null))}}]),n}(a.Component),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(20);r.a.render(i.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/us-highway-signs",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/us-highway-signs","/service-worker.js");H?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):R(n,e)})}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.f8a6507c.chunk.js.map