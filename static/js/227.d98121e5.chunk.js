"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[227],{227:function(e,n,r){r.r(n),r.d(n,{default:function(){return g}});var t,i,s,c=r(861),o=r(439),a=r(757),d=r.n(a),l=r(87),u=r(689),h=r(791),p=r(168),v=r(444),f=v.ZP.div(t||(t=(0,p.Z)(["\n  display: flex;\n"]))),x=v.ZP.div(i||(i=(0,p.Z)(["\n  margin-left: 30px;\n"]))),j=v.ZP.div(s||(s=(0,p.Z)(["\n  padding: 10px 0;\n  border-top: 1px solid gray;\n  border-bottom: 1px solid gray;\n  margin-top: 5px;\n"]))),m=r(184),g=function(){var e=(0,u.UO)().movieId,n=(0,h.useState)({}),r=(0,o.Z)(n,2),t=r[0],i=r[1];(0,h.useEffect)((function(){var n=function(){var n=(0,c.Z)(d().mark((function n(){var r,t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(e,"?api_key=").concat("93dad7f5c3f08e509beef896c33679a7"));case 2:return r=n.sent,n.next=5,r.json();case 5:t=n.sent,i(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n().catch(console.error)}),[e]);var s=Math.ceil(10*t.vote_average);return(0,m.jsxs)("main",{children:[(0,m.jsxs)(f,{children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w342/".concat(t.poster_path),alt:""}),(0,m.jsxs)(x,{children:[(0,m.jsx)("h2",{children:t.original_title}),(0,m.jsxs)("p",{children:["User score: ",s,"%"]}),(0,m.jsx)("h4",{children:"Overview"}),(0,m.jsx)("p",{children:t.overview}),(0,m.jsx)("h5",{children:"Genres"})]})]}),(0,m.jsxs)(j,{children:[(0,m.jsx)("p",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,m.jsx)(h.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading subpage..."}),children:(0,m.jsx)(u.j3,{})})]})}},861:function(e,n,r){function t(e,n,r,t,i,s,c){try{var o=e[s](c),a=o.value}catch(d){return void r(d)}o.done?n(a):Promise.resolve(a).then(t,i)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(i,s){var c=e.apply(n,r);function o(e){t(c,i,s,o,a,"next",e)}function a(e){t(c,i,s,o,a,"throw",e)}o(void 0)}))}}r.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=227.d98121e5.chunk.js.map