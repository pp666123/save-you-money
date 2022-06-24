(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[11],{279:function(e,t,i){"use strict";var n=i(21),r=i(255),a=i(194),c=i(285),o=i(12),s=i(45),l=i(253),d=i(1),u=["color","outline","size","sx"],b=function(e){var t=e.color,i=e.outline,r=e.size,a=e.sx,c=Object(s.a)(e,u),b=Object(n.a)(),j=t&&!i&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},h=i&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},m={};switch(r){case"badge":m={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":m={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":m={width:b.spacing(5),height:b.spacing(5)};break;case"lg":m={width:b.spacing(9),height:b.spacing(9)};break;case"xl":m={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":m={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:m={}}return Object(d.jsx)(l.a,Object(o.a)({sx:Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},j),h),m),a)},c))};t.a=function(e){var t=e.title,i=e.link,o=e.icon,s=Object(n.a)();return Object(d.jsx)(r.a,{title:t||"Reference",placement:"left",children:Object(d.jsxs)(a.a,{disableRipple:!0,children:[!o&&Object(d.jsx)(b,{component:c.a,href:i,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(d.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(d.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:s.palette.primary[800]}),Object(d.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:s.palette.primary.main}),Object(d.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:s.palette.primary[800]}),Object(d.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:s.palette.primary.main})]}),Object(d.jsx)("defs",{children:Object(d.jsx)("clipPath",{id:"clip0",children:Object(d.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),o&&Object(d.jsx)(b,{component:c.a,href:i,target:"_blank",size:"badge",color:"primary",outline:!0,children:o})]})})}},285:function(e,t,i){"use strict";var n=i(13),r=i(3),a=i(6),c=i(2),o=i(0),s=(i(9),i(7)),l=i(81),d=i(14),u=i(63),b=i(8),j=i(5),h=i(10),m=i(65),p=i(16),x=i(64),O=i(70),g=i(82);function v(e){return Object(O.a)("MuiLink",e)}var y=Object(g.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),f=i(1),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},L=Object(j.a)(x.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(i.underline))],"button"===i.component&&t.button]}})((function(e){var t=e.theme,i=e.ownerState,n=Object(d.b)(t,"palette.".concat(function(e){return w[e]||e}(i.color)))||i.color;return Object(c.a)({},"none"===i.underline&&{textDecoration:"none"},"hover"===i.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===i.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==n?Object(u.a)(n,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===i.component&&Object(r.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(y.focusVisible),{outline:"auto"}))})),B=o.forwardRef((function(e,t){var i=Object(h.a)({props:e,name:"MuiLink"}),r=i.className,d=i.color,u=void 0===d?"primary":d,j=i.component,x=void 0===j?"a":j,O=i.onBlur,g=i.onFocus,y=i.TypographyClasses,w=i.underline,B=void 0===w?"always":w,V=i.variant,q=void 0===V?"inherit":V,M=Object(a.a)(i,k),H=Object(m.a)(),S=H.isFocusVisibleRef,C=H.onBlur,R=H.onFocus,z=H.ref,D=o.useState(!1),F=Object(n.a)(D,2),Z=F[0],A=F[1],N=Object(p.a)(t,z),Q=Object(c.a)({},i,{color:u,component:x,focusVisible:Z,underline:B,variant:q}),T=function(e){var t=e.classes,i=e.component,n=e.focusVisible,r=e.underline,a={root:["root","underline".concat(Object(b.a)(r)),"button"===i&&"button",n&&"focusVisible"]};return Object(l.a)(a,v,t)}(Q);return Object(f.jsx)(L,Object(c.a)({className:Object(s.a)(T.root,r),classes:y,color:u,component:x,onBlur:function(e){C(e),!1===S.current&&A(!1),O&&O(e)},onFocus:function(e){R(e),!0===S.current&&A(!0),g&&g(e)},ref:N,ownerState:Q,variant:q},M))}));t.a=B},464:function(e,t,i){"use strict";i.r(t);var n=i(251),r=i(285),a=i(64),c=i(103),o=i(83),s=i(279),l=i(36),d=i(1);t.default=function(){return Object(d.jsx)(o.a,{title:"Basic Typography",secondary:Object(d.jsx)(s.a,{link:"https://next.material-ui.com/system/typography/"}),children:Object(d.jsxs)(n.a,{container:!0,spacing:l.b,children:[Object(d.jsx)(n.a,{item:!0,xs:12,sm:6,children:Object(d.jsx)(c.a,{title:"Heading",children:Object(d.jsxs)(n.a,{container:!0,direction:"column",spacing:1,children:[Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"h1",gutterBottom:!0,children:"h1. Heading"})}),Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"h2",gutterBottom:!0,children:"h2. Heading"})}),Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"h3",gutterBottom:!0,children:"h3. Heading"})}),Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"h4",gutterBottom:!0,children:"h4. Heading"})}),Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"h5",gutterBottom:!0,children:"h5. Heading"})}),Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"h6",gutterBottom:!0,children:"h6. Heading"})})]})})}),Object(d.jsx)(n.a,{item:!0,xs:12,sm:6,children:Object(d.jsx)(c.a,{title:"Sub title",children:Object(d.jsxs)(n.a,{container:!0,direction:"column",spacing:1,children:[Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"subtitle1",gutterBottom:!0,children:"subtitle1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur"})}),Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"subtitle2",gutterBottom:!0,children:"subtitle2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur"})})]})})}),Object(d.jsx)(n.a,{item:!0,xs:12,sm:6,children:Object(d.jsx)(c.a,{title:"Body",children:Object(d.jsxs)(n.a,{container:!0,direction:"column",spacing:1,children:[Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"body1",gutterBottom:!0,children:"body1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."})}),Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"body2",gutterBottom:!0,children:"body2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."})})]})})}),Object(d.jsx)(n.a,{item:!0,xs:12,sm:6,children:Object(d.jsx)(c.a,{title:"Extra",children:Object(d.jsxs)(n.a,{container:!0,direction:"column",spacing:1,children:[Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"button",display:"block",gutterBottom:!0,children:"button text"})}),Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"caption",display:"block",gutterBottom:!0,children:"caption text"})}),Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"overline",display:"block",gutterBottom:!0,children:"overline text"})}),Object(d.jsx)(n.a,{item:!0,children:Object(d.jsx)(a.a,{variant:"body2",color:"primary",component:r.a,href:"https://berrydashboard.io",target:"_blank",display:"block",underline:"hover",gutterBottom:!0,children:"https://berrydashboard.io"})})]})})})]})})}}}]);
//# sourceMappingURL=11.51c6082f.chunk.js.map