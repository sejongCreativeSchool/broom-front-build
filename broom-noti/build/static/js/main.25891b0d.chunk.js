(this["webpackJsonpbroom-noti"]=this["webpackJsonpbroom-noti"]||[]).push([[0],{127:function(e,t,n){e.exports=n(258)},132:function(e,t,n){},258:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(40),o=n.n(c),i=(n(132),n(10)),l=n(11),u=n(19),s=n(4),m=n(15),d=n.n(m),v=n(24),p=n(32),f=n.n(p),E=function(e){return f.a.get("".concat("http://www.booreum.com:3001/v1/post","/").concat(e))},b="noticetable/GET_NOTICES",h={notices_loading:!1,notices:null,notices_error:null};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(s.a)(Object(s.a)({},e),{},{notices_loading:!0});case"noticetable/GET_NOTICES_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{notices_loading:!1,notices:t.notices});case"noticetable/GET_NOTICES_FAILURE":return Object(s.a)(Object(s.a)({},e),{},{notices_loading:!1,noticesS_error:t.notices_error});default:return e}},w=n(261);function O(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: rgba(0, 0, 0, 0.3);\n"]);return O=function(){return e},e}var _=l.a.div(O());var j=function(){return r.a.createElement(_,null,r.a.createElement(w.a,{loading:!0,name:"asterisk",size:"big"}))},x=n(42);function T(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  box-sizing: border-box;\n\n  width: 100vw;\n  height: 60px;\n\n  padding: 3px 15px;\n\n  border-bottom: 1px solid #cccccc;\n\n  .noti-title {\n    width: 94vw;\n\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n\n    font-size: 1.25rem;\n    color: black;\n  }\n"]);return T=function(){return e},e}var N=l.a.div(T());function y(e){var t=e.title;return r.a.createElement(N,null,r.a.createElement("div",{className:"noti-title"},t))}var S=function(e){var t=e.notices;return r.a.createElement("div",null,t&&t.map((function(e){return r.a.createElement(x.b,{to:"/".concat(e._id)},r.a.createElement(y,{title:e.title}))})))};var C=function(){var e=Object(u.c)((function(e){return e.noticeList})),t=e.notices_loading,n=e.notices,c=e.notices_error,o=Object(u.b)();return Object(a.useEffect)((function(){o(function(){var e=Object(v.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:b}),e.prev=1,e.next=4,f.a.get("".concat("http://www.booreum.com:3001/v1/post"));case 4:n=e.sent,t({type:"noticetable/GET_NOTICES_SUCCESS",notices:n.data.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),t({type:"noticetable/GET_NOTICES_FAILURE",notices_error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]),t?r.a.createElement(j,null):c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4"),r.a.createElement("div",null,"\ub2e4\uc2dc \uc2e4\ud589\ud574\uc8fc\uc138\uc694.")):r.a.createElement(S,{notices:n})};function I(){var e=Object(i.a)(["\n  min-height: 100vh;\n"]);return I=function(){return e},e}var L=l.a.div(I());var k=function(){return r.a.createElement(L,null,r.a.createElement(C,null))},A=n(2);function G(){var e=Object(i.a)(["\n  max-width: 100%;\n\n  .html-content {\n    line-height: 140% !important;\n    font-size: 1.5rem !important;\n\n    img {\n      max-width: 100% !important;\n    }\n  }\n"]);return G=function(){return e},e}function U(){var e=Object(i.a)(["\n  font-weight: bold;\n  margin-bottom: 15px;\n\n  .title-wrapper {\n    display: flex;\n    justify-content: center;\n    font-size: 1.75rem;\n    margin-bottom: 25px;\n\n    line-height: 140%;\n  }\n\n  .date-wrapper {\n    display: flex;\n\n    padding-bottom: 5px;\n    border-bottom: 1px solid #cccccc;\n\n    font-size: 1.25rem;\n  }\n\n  .date {\n    margin-left: auto;\n  }\n"]);return U=function(){return e},e}var D=l.a.div(U()),F=l.a.div(G());var M=function(e){var t,n=e.notice,c=e.html;return Object(a.useEffect)((function(){console.log(c)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null,r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("span",null,n&&n.title)),r.a.createElement("div",{className:"date-wrapper"},r.a.createElement("span",{className:"date"},"\uac8c\uc2dc: ".concat(n&&(t=n.updateAt,[t.substring(0,10),t.substring(11,16)])[0])))),r.a.createElement(F,null,c&&r.a.createElement("div",{className:"html-content",dangerouslySetInnerHTML:{__html:c}})))},z={notice:null,html:null,loading:!1,error:null,res:null};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"noticeviewer/GET_NOTICE_AND_HTML":return Object(s.a)(Object(s.a)({},e),{},{loading:!0});case"noticeviewer/GET_NOTICE_AND_HTML_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{notice:t.notice,html:t.html,loading:!1});case"noticeviewer/GET_NOTICE_AND_HTML_FAILURE":return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:t.error});default:return e}};var R=function(e){var t=e.match.params.id,n=Object(u.c)((function(e){return e.noticeviewer})),c=n.notice,o=n.html,i=n.loading,l=n.error,s=Object(u.b)();return Object(a.useEffect)((function(){console.log(t),s(function(e){return function(){var t=Object(v.a)(d.a.mark((function t(n){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"noticeviewer/GET_NOTICE_AND_HTML"}),t.prev=1,t.next=4,E(e);case 4:return a=t.sent,console.log(a.data.data.html),t.next=8,c=a.data.data.html,f.a.get(c);case 8:r=t.sent,console.log(r),n({type:"noticeviewer/GET_NOTICE_AND_HTML_SUCCESS",html:r.data,notice:a.data.data}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0),n({type:"noticeviewer/GET_NOTICE_AND_HTML_FAILURE",error:t.t0});case 17:case"end":return t.stop()}var c}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[]),c?l?r.a.createElement("div",null,"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \uae30\ub2e4\ub838\ub2e4 \uc0c8\ub85c\uace0\uce68 \ud574\uc8fc\uc138\uc694."):i?r.a.createElement(j,null):c?r.a.createElement(M,{notice:c,html:o}):void 0:r.a.createElement("div",null,"NOT FOUND!")};function W(){var e=Object(i.a)(["\n  min-height: 100vh;\n  padding: 20px 30px;\n"]);return W=function(){return e},e}var B=l.a.div(W());var J=function(e){var t=e.match;return r.a.createElement(B,null,r.a.createElement(R,{match:t}))};var $=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{path:"/",component:k,exact:!0}),r.a.createElement(A.a,{path:"/:id",component:J,exact:!0}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=n(114),K=n(17),P=Object(K.combineReducers)({noticeList:g,noticeviewer:H}),Q=n(115),V=(n(257),Object(K.createStore)(P,Object(q.composeWithDevTools)(Object(K.applyMiddleware)(Q.a))));o.a.render(r.a.createElement(x.a,null,r.a.createElement(u.a,{store:V},r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[127,1,2]]]);
//# sourceMappingURL=main.25891b0d.chunk.js.map