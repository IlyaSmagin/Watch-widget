(this["webpackJsonpwatch-widget"]=this["webpackJsonpwatch-widget"]||[]).push([[0],{31:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),s=r(24),a=r.n(s),i=(r(31),r(11)),l=r(14),o=r(6),d=r(1);var j=function(e){var t=e.link,r=void 0===t?"/":t,n=e.icon,c=e.color,s=void 0===c?"default":c,a=e.extended,i=void 0!==a&&a;return Object(d.jsx)(l.b,{to:r,children:Object(d.jsxs)("button",{className:"w-20 bg-".concat(s," text-2xl font-bold text-white rounded-lg"),children:[Object(d.jsx)("div",{className:"py-3.5",children:n}),i&&Object(d.jsxs)("div",{className:"extended",children:[Object(d.jsx)("hr",{})," ",Object(d.jsx)("div",{className:"p-0.5",children:i})]})]})})};var b=function(){var e=Object(n.useState)(new Date),t=Object(i.a)(e,2),r=t[0],c=t[1];Object(n.useEffect)((function(){var e=setInterval((function(){return c(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var s=function(e){return e>9?e:"0"+e},a=s(r.getMinutes()),l=s(r.getHours());return Object(d.jsxs)("div",{children:[l,":",a]})},u=r.p+"static/media/message.fb8a345a.svg",x=r.p+"static/media/notification.582169e4.svg";var f=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"pt-8 text-5xl font-medium text-gray-100",children:Object(d.jsx)(b,{})}),Object(d.jsx)("div",{className:"text-base pt-2 text-gray-100",children:"Monday"}),Object(d.jsx)("div",{className:"text-sm text-gray-500",children:"10 January 2020"}),Object(d.jsxs)("div",{className:"mt-3.5 flex justify-evenly p-2",children:[Object(d.jsx)(j,{link:"/details",icon:Object(d.jsx)("img",{className:"w-9 m-auto",src:u,alt:"messages"})}),Object(d.jsx)(j,{link:"/details",icon:Object(d.jsx)("img",{className:"w-9 m-auto",src:x,alt:"notification"})})]})]})},m=r.p+"static/media/arrow-right.aac2ed20.svg";var O=function(e){var t=e.workProp,r=e.personalProp;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"p-3 text-sm text-gray-100",children:Object(d.jsx)(b,{})}),Object(d.jsx)("div",{className:"text-base font-semibold text-gray-100",children:"Calendar"}),Object(d.jsxs)("div",{className:"mt-3.5 flex justify-evenly p-2",children:[Object(d.jsx)(j,{link:"/todo",color:"blue",extended:t.description,icon:t.items}),Object(d.jsx)(j,{link:"/calendar",color:"green",extended:r.description,icon:r.items})]}),Object(d.jsxs)("div",{className:"mt-1",children:[Object(d.jsx)("img",{className:"w-5 mr-1 inline-block",src:m,alt:"next"}),Object(d.jsx)("div",{className:"text-sm inline-block text-gray-100",children:"Meeting 08:15"})]})]})},p=function(e){var t=Object(n.useState)(0),r=Object(i.a)(t,2),c=r[0],s=r[1],a=Object(n.useRef)(null),l=e.size,o=e.progress,j=e.strokeWidth,b=e.circleOneStroke,u=e.circleTwoStroke,x=l/2,f=l/2-j/2,m=2*Math.PI*f;return Object(n.useEffect)((function(){s((100-o)/100*m),a.current.style="transition: stroke-dashoffset 850ms ease-in-out"}),[s,o,m,c]),Object(d.jsxs)("svg",{className:"progess-svg",width:l,height:l,children:[Object(d.jsx)("circle",{className:"svg-circle-bg",stroke:b,cx:-x,cy:x,r:f,strokeWidth:j-5}),Object(d.jsx)("circle",{className:"svg-circle",ref:a,stroke:u,cx:-x,cy:x,r:f,strokeLinecap:"round",strokeWidth:j,strokeDasharray:m,strokeDashoffset:c}),Object(d.jsxs)("text",{x:"".concat(x+0),y:"".concat(x+12),className:"svg-circle-text",children:[o,Object(d.jsx)("tspan",{dy:"-8",children:"%"})]})]})};var h=function(e){var t=e.leftTasks,r=100-5*t;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"p-3 text-sm text-gray-100",children:Object(d.jsx)(b,{})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"text-base font-semibold text-gray-100",children:"Goals"}),Object(d.jsx)(p,{progress:r,size:100,strokeWidth:9,circleOneStroke:"#2833A4",circleTwoStroke:"#3346FF"}),Object(d.jsxs)("div",{className:"pt-0.5 text-sm text-gray-100",children:[t," goals to go"]})]})]})},v=r(47),g=r(45),y=r(46),w=r(43),k=r(44);r(38),r(39);var N=function(e){var t=e.WorkList,r=e.PersonalList;return y.a.use([w.a,k.a]),Object(d.jsxs)(v.a,{navigation:!0,pagination:{clickable:!0},onSlideChange:function(){return console.log("slide change")},children:[Object(d.jsx)(g.a,{children:Object(d.jsx)(f,{})}),Object(d.jsx)(g.a,{children:Object(d.jsx)(O,{workProp:t,personalProp:r})}),Object(d.jsx)(g.a,{children:Object(d.jsx)(h,{leftTasks:t.items})})]})};var C=function(){return fetch("https://jsonplaceholder.typicode.com/todos/").then((function(e){return e.json()}))},E=r(26);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var L=n.createElement("path",{d:"M8 15L1 8L8 1",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"});function S(e,t){var r=e.title,c=e.titleId,s=I(e,["title","titleId"]);return n.createElement("svg",P({viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},s),r?n.createElement("title",{id:c},r):null,L)}var W=n.forwardRef(S);r.p;var M=function(e){var t=e.pageName,r=void 0===t?"Back":t;return Object(d.jsxs)("div",{className:"flex justify-between px-4 pt-3",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsxs)("div",{className:"text-sm align-bottom text-gray-300",children:[Object(d.jsx)(W,{className:"h-5 inline-block pb-1.5 mr-2 ",strokeWidth:1.5}),r]})}),Object(d.jsx)("div",{className:"text-sm text-gray-100",children:Object(d.jsx)(b,{})})]})};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var B=n.createElement("path",{d:"M3 17H15C15.5304 17 16.0391 16.7893 16.4142 16.4142C16.7893 16.0391 17 15.5304 17 15V3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17Z",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"});function z(e,t){var r=e.title,c=e.titleId,s=T(e,["title","titleId"]);return n.createElement("svg",F({viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},s),r?n.createElement("title",{id:c},r):null,B)}var D=n.forwardRef(z);r.p;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var V=n.createElement("path",{d:"M30 2H6C4.93913 2 3.92172 2.42143 3.17157 3.17157C2.42143 3.92172 2 4.93913 2 6V30C2 31.0609 2.42143 32.0783 3.17157 32.8284C3.92172 33.5786 4.93913 34 6 34H30C31.0609 34 32.0783 33.5786 32.8284 32.8284C33.5786 32.0783 34 31.0609 34 30V19",stroke:"currentColor",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round"}),J=n.createElement("path",{d:"M9 19L15 26",stroke:"currentColor",strokeWidth:4,strokeLinecap:"round"}),A=n.createElement("path",{d:"M34 9L15 26",stroke:"currentColor",strokeWidth:4,strokeLinecap:"round"});function G(e,t){var r=e.title,c=e.titleId,s=R(e,["title","titleId"]);return n.createElement("svg",H({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},s),r?n.createElement("title",{id:c},r):null,V,J,A)}var Z=n.forwardRef(G);r.p;var Y=function(e){var t=e.onTodoChange,r=e.list,n=void 0===r?[]:r;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(M,{pageName:"Goals"}),Object(d.jsx)("div",{className:"px-4 pt-1.5 text-left font-semibold text-gray-100",children:"Work"}),Object(d.jsx)("div",{className:"h-44 overflow-auto text-left p-2 text-xs text-gray-100",children:n.map((function(e,r){var c=Object(d.jsx)(D,{className:"flex-none w-6 my-auto"}),s="capitalize";return e.completed&&(c=Object(d.jsx)(Z,{className:"flex-none w-6 my-auto"}),s="line-through capitalize text-gray-500"),Object(d.jsxs)("div",{onClick:function(){return function(e){var r=n;r[e].completed=!r[e].completed,t(Object(E.a)(r))}(r)},className:"flex justify-start items-center bg-default rounded-lg p-2 mb-2",children:[c,Object(d.jsx)("p",{className:"ml-2 ".concat(s),children:e.title})]},r)}))})]})};var q=function(e){var t=e.list,r=void 0===t?[]:t;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(M,{pageName:"Calendar"}),Object(d.jsx)("div",{className:"h-56 overflow-auto text-left p-4 text-base text-gray-100",children:r.map((function(e,t){var r="capitalize",n=t%12+8+":00 - "+(t%12+9)+":00";return e.completed&&(r+=" bg-green"),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"border-l-2 border-dashed border-gray-100 border-opacity-50 p-2 text-gray-300 text-opacity-50 text-xs",children:n.split("-")[1]}),Object(d.jsxs)("div",{className:r+" p-2 bg-blue rounded-l-sm rounded-lg border-l-2 border-white border-opacity-50",children:[Object(d.jsx)("p",{className:"font-semibold",children:e.title}),Object(d.jsx)("p",{className:"text-white text-opacity-70 text-xs",children:n})]},t)]})}))})]})};function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var U=n.createElement("path",{d:"M14.5 15C14.5 15 10.5996 20.7143 10.414 20.9C10.2284 21.0858 10.0081 21.2331 9.76556 21.3336C9.52303 21.4342 9.26305 21.4859 9.0005 21.4859C8.73796 21.4859 8.47798 21.4342 8.23544 21.3336C7.99291 21.2331 7.77256 21.0858 7.587 20.9C7.40145 20.7143 3.5 15 3.5 15C3.5 15 1.46234 12.1127 1.15369 10.5609C0.845043 9.00904 1.00349 7.40053 1.60901 5.93874C2.21452 4.47696 3.2399 3.22755 4.55548 2.34852C5.87107 1.46949 7.41777 1.00031 9 1.00031C10.5822 1.00031 12.1289 1.46949 13.4445 2.34852C14.7601 3.22755 15.7855 4.47696 16.391 5.93874C16.9965 7.40053 17.155 9.00904 16.8463 10.5609C16.5377 12.1127 14.5 15 14.5 15Z",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"});function X(e,t){var r=e.title,c=e.titleId,s=Q(e,["title","titleId"]);return n.createElement("svg",K({viewBox:"0 0 18 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},s),r?n.createElement("title",{id:c},r):null,U)}var $=n.forwardRef(X);r.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var te=n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"{2}",d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"});function re(e,t){var r=e.title,c=e.titleId,s=ee(e,["title","titleId"]);return n.createElement("svg",_({fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},s),r?n.createElement("title",{id:c},r):null,te)}var ne=n.forwardRef(re);r.p;var ce=function(e){var t=e.event,r=void 0===t?{name:"Interview with Ilya",time:"14:15 - 15:00",location:"Tech room",participants:["You","Ilya"]}:t;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(M,{pageName:"Details"}),Object(d.jsxs)("div",{className:"p-4 text-left text-gray-100",children:[Object(d.jsx)("div",{className:"text-2xl font-semibold",children:r.name}),Object(d.jsx)("div",{className:"mt-1 text-sm text-gray-400",children:r.time}),Object(d.jsxs)("div",{className:"my-4",children:[Object(d.jsx)($,{className:"h-4 w-4 mr-2 inline-block",strokeWidth:2}),Object(d.jsx)("div",{className:"inline-block text-sm",children:r.location})]}),Object(d.jsxs)("div",{className:"my-4",children:[Object(d.jsx)(ne,{className:"w-8 mr-2 inline-block"}),Object(d.jsxs)("div",{className:"inline-block text-sm",children:[r.participants.length," people"]})]})]})]})};r(40);var se=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),r=t[0],c=t[1],s=Object(n.useState)({description:"Work",items:-1}),a=Object(i.a)(s,2),j=a[0],b=a[1],u=Object(n.useState)({description:"Personal",items:-1}),x=Object(i.a)(u,2),f=x[0],m=x[1];function O(e,t){return e.reduce((function(e,r){return r.userId===t&&!1===r.completed?e+1:e}),0)}return Object(n.useEffect)((function(){C().then((function(e){c(e),b({description:"Work",items:O(r,1)})}))}),[]),Object(n.useEffect)((function(){b({description:"Work",items:O(r,1)}),m({description:"Personal",items:O(r,2)})}),[r]),Object(d.jsx)("div",{className:"App flex justify-around flex-wrap",children:Object(d.jsx)("div",{className:"watch-face w-52 h-64 my-12 text-center subpixel-antialiased shadow-2xl rounded-3xl overflow-hidden",children:Object(d.jsx)(l.a,{basename:"/Watch-widget",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/details",children:Object(d.jsx)(ce,{})}),Object(d.jsx)(o.a,{path:"/todo",children:Object(d.jsx)(Y,{onTodoChange:c,list:r})}),Object(d.jsx)(o.a,{path:"/calendar",children:Object(d.jsx)(q,{list:r})}),Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(N,{WorkList:j,PersonalList:f})})]})})})})},ae=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,48)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(se,{})}),document.getElementById("root")),ae()}},[[41,1,2]]]);
//# sourceMappingURL=main.b14765ae.chunk.js.map