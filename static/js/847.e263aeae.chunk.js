"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[847],{847:function(e,n,r){r.r(n);var t=r(861),i=r(439),c=r(757),s=r.n(c),o=r(689),a=r(87),h=r(791),u=r(184);n.default=function(){var e=(0,o.UO)().movieId,n=(0,h.useState)({}),r=(0,i.Z)(n,2),c=r[0],l=r[1];(0,h.useEffect)((function(){var n=function(){var n=(0,t.Z)(s().mark((function n(){var r,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(e,"?api_key=").concat("93dad7f5c3f08e509beef896c33679a7"));case 2:return r=n.sent,n.next=5,r.json();case 5:t=n.sent,l(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n().catch(console.error)}),[e]);var d=Math.ceil(10*c.vote_average);return(0,u.jsxs)("main",{children:[(0,u.jsx)("img",{src:"https://via.placeholder.com/960x240",alt:""}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:c.original_title}),(0,u.jsxs)("p",{children:["User score: ",d,"%"]}),(0,u.jsx)("h4",{children:"Overview"}),(0,u.jsx)("p",{children:c.overview}),(0,u.jsx)("h5",{children:"Genres"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(h.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading subpage..."}),children:(0,u.jsx)(o.j3,{})})]})]})}},861:function(e,n,r){function t(e,n,r,t,i,c,s){try{var o=e[c](s),a=o.value}catch(h){return void r(h)}o.done?n(a):Promise.resolve(a).then(t,i)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(i,c){var s=e.apply(n,r);function o(e){t(s,i,c,o,a,"next",e)}function a(e){t(s,i,c,o,a,"throw",e)}o(void 0)}))}}r.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=847.e263aeae.chunk.js.map