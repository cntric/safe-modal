(this["webpackJsonpsafe-modal"]=this["webpackJsonpsafe-modal"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t),n.d(t,"getModalOffset",(function(){return a})),n.d(t,"SafeModal",(function(){return f}));var i=n(1),o=n.n(i),c=n(4),r=n.n(c),d=(n(10),n(5)),l=(n(11),n(2)),s=n(0),a=function(e,t){var n=e.left>window.innerWidth-e.right,i=e.top<window.innerHeight-e.bottom;return Object(l.a)(Object(l.a)({},n?{right:window.innerWidth-e.left-t}:{left:e.left+e.width+t}),i?{top:e.bottom+t}:{bottom:window.innerHeight-e.top-t})},f=function(e){var t=e.itemRef,n=e.offset,i=void 0===n?5:n,o=e.children,c=e.isDisplayed;console.log(t);var r=t&&t.current?a(t.current.getBoundingClientRect(),i):{left:"25%",top:"25%"};return Object(s.jsx)(s.Fragment,{children:c&&Object(s.jsx)("div",{style:Object(l.a)(Object(l.a)({display:"block",position:"fixed"},r),{},{zIndex:1e3}),children:o})})};var u=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(!1),n=Object(d.a)(t,2),o=n[0],c=n[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{onClick:function(){c(!o)},ref:e,style:{height:"100px",width:"100px",background:"pink"}}),Object(s.jsx)(f,{itemRef:e,isDisplayed:o,children:Object(s.jsx)("div",{style:{border:"1px solid blue"},children:"Hello"})})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),o(e),c(e),r(e)}))};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),b()}},[[13,1,2]]]);
//# sourceMappingURL=main.2f2ba808.chunk.js.map