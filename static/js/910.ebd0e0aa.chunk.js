"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[910],{910:function(t,n,e){e.r(n);var r=e(861),c=e(439),a=e(757),i=e.n(a),o=e(791),s=e(689),u=e(184);n.default=function(){var t=(0,o.useState)([]),n=(0,c.Z)(t,2),e=n[0],a=n[1],f=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://api.themoviedb.org/3/","/movie/").concat(f,"/credits?api_key=").concat("93dad7f5c3f08e509beef896c33679a7"));case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,a(e.cast);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().catch(console.error)}),[f]),(0,u.jsx)("section",{children:(0,u.jsx)("ul",{children:e.map((function(t){return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w45/".concat(t.profile_path),alt:"".concat(t.name)}),(0,u.jsx)("p",{children:t.name}),(0,u.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})}},861:function(t,n,e){function r(t,n,e,r,c,a,i){try{var o=t[a](i),s=o.value}catch(u){return void e(u)}o.done?n(s):Promise.resolve(s).then(r,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,a){var i=t.apply(n,e);function o(t){r(i,c,a,o,s,"next",t)}function s(t){r(i,c,a,o,s,"throw",t)}o(void 0)}))}}e.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=910.ebd0e0aa.chunk.js.map