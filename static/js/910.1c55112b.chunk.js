"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[910],{910:function(n,e,t){t.r(e);var r=t(861),c=t(439),i=t(757),a=t.n(i),o=t(791),s=t(689),u=t(184);e.default=function(){var n=(0,o.useState)([]),e=(0,c.Z)(n,2),t=e[0],i=e[1],f=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.themoviedb.org/3/","/movie/").concat(f,"/credits?api_key=").concat("93dad7f5c3f08e509beef896c33679a7"));case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,i(t.cast);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n().catch(console.error)}),[f]),(0,u.jsx)("section",{children:(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:"",alt:""}),(0,u.jsx)("p",{children:n.name}),(0,u.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))})})}},861:function(n,e,t){function r(n,e,t,r,c,i,a){try{var o=n[i](a),s=o.value}catch(u){return void t(u)}o.done?e(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,i){var a=n.apply(e,t);function o(n){r(a,c,i,o,s,"next",n)}function s(n){r(a,c,i,o,s,"throw",n)}o(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=910.1c55112b.chunk.js.map