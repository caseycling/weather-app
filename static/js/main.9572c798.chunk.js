(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),o=t.n(c),i=(t(9),t(1)),l="605551f3c844dd9d25b4f909923c558a",s="https://api.openweathermap.org/data/2.5/";var m=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)({}),m=Object(i.a)(o,2),u=m[0],d=m[1];return r.a.createElement("div",{className:"undefined"!=typeof u.main&&u.main.temp>65?"app warm":"app",style:{color:"#FFF"}},r.a.createElement("main",null,r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return c(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(s,"weather?q=").concat(t,"&units=imperial&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){d(e),c(""),console.log(e)}))}})),"undefined"!=typeof u.main?r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},u.name,", ",u.sys.country),r.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(r)}(new Date))),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"},Math.round(u.main.temp),"\xb0F"),r.a.createElement("div",{className:"weather"},u.weather[0].main))):r.a.createElement("div",null,r.a.createElement("h3",{className:"undefined"},"Enter A City Name To Search For The Weather"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.9572c798.chunk.js.map