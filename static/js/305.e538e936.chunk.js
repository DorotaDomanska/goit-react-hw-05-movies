"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[305],{305:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(861),c=e(439),i=e(757),o=e.n(i),u=e(87),a=e(689),s=e(184),f=function(n){var t=n.movies,e=(0,a.TH)();return(0,s.jsx)("ul",{children:t.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"".concat(n.id),state:{from:e},children:n.original_title},n.id)},n.id)}))})},h=e(791),v=function(){var n=(0,h.useState)(""),t=(0,c.Z)(n,2),e=t[0],i=t[1],u=(0,h.useState)([]),a=(0,c.Z)(u,2),v=a[0],l=a[1],d=function(){var n=(0,r.Z)(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("93dad7f5c3f08e509beef896c33679a7","&query=").concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:r=n.sent,l(r.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,s.jsxs)("main",{children:[(0,s.jsx)("input",{type:"text",onChange:function(n){var t=n.target.value;i(t)}}),(0,s.jsx)("button",{onClick:d,children:"Search"}),(0,s.jsx)(f,{onSearch:d,movies:v})]})}},861:function(n,t,e){function r(n,t,e,r,c,i,o){try{var u=n[i](o),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,i){var o=n.apply(t,e);function u(n){r(o,c,i,u,a,"next",n)}function a(n){r(o,c,i,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=305.e538e936.chunk.js.map