(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{10:function(e,t,n){},4:function(e,t,n){e.exports=n(5)},5:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),o=n.n(r),a=n(2),l=n.n(a);n(10);function u(e){var t=e.login,n=Object(r.useState)(null),a=Object(c.a)(n,2),l=a[0],u=a[1];return Object(r.useEffect)((function(){fetch("https://api.github.com/users/".concat(t)).then((function(e){return e.json()})).then(u).catch(console.error)}),[]),l?o.a.createElement("div",null,o.a.createElement("h1",null,l.login),o.a.createElement("img",{src:l.avatar_url,width:100})):null}function i(){return o.a.createElement(u,{login:"moontahoe"})}l.a.render(o.a.createElement(i,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.a98fcec7.chunk.js.map