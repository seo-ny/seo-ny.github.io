(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{535:(e,t,n)=>{Promise.resolve().then(n.bind(n,4846)),Promise.resolve().then(n.bind(n,7316)),Promise.resolve().then(n.bind(n,6014)),Promise.resolve().then(n.bind(n,9973)),Promise.resolve().then(n.bind(n,1808)),Promise.resolve().then(n.t.bind(n,1970,23))},1808:(e,t,n)=>{"use strict";n.d(t,{default:()=>i});var o=n(5285);n(6949);var r=n(5978);n(3673);let i=(0,o.DU)(["*{box-sizing:border-box;margin:0;padding:0;}html{overflow-x:hidden;max-width:100vw;height:100vh;}body{display:flex;flex-direction:column;height:100%;background-color:",";color:",";",";}a{appearance:none;text-decoration:none;color:inherit;}"],e=>{let{theme:t}=e;return t.bgColor},e=>{let{theme:t}=e;return t.color},r.W)},1970:e=>{e.exports={style:{fontFamily:"'pretendard', 'pretendard Fallback'",fontStyle:"normal"},className:"__className_57cb09"}},3673:(e,t,n)=>{"use strict";n.d(t,{G:()=>r,T:()=>o});let o={mono_000:"#ffffff",mono_100:"#e6e6e6",mono_200:"#cccccc",mono_300:"#b3b3b3",mono_400:"#999999",mono_500:"#7f7f7f",mono_600:"#666666",mono_700:"#4d4d4d",mono_800:"#333333",mono_900:"#1a1a1a",mono_1000:"#000000",primary_1000:"#0000ff",red_1000:"#ff0000"},r={heading_1:"32px",heading_2:"28px",heading_3:"24px",heading_4:"20px",heading_5:"18px",heading_6:"16px",body_1:"24px",body_2:"22px",body_3:"20px",body_4:"18px",body_5:"16px",body_6:"14px"}},4846:(e,t,n)=>{"use strict";n.d(t,{default:()=>C});var o=n(5155),r=n(5285),i=n(8173),l=n.n(i),a=n(3673),c=n(5978),s=n(9973),d=n(2115);function g(e){let{color:t="default",checked:n=!1,onChange:r=()=>{}}=e,[i,l]=(0,d.useState)(n),[a]=(0,d.useState)((0,d.useId)());return(0,d.useEffect)(()=>{l(n)},[n]),(0,o.jsxs)(u,{color:t,children:[(0,o.jsx)(f,{id:a,className:"afsda",type:"checkbox",value:i,checked:i,onChange:e=>{l(e.target.checked),r(e)}}),(0,o.jsx)(m,{htmlFor:a,children:(0,o.jsx)(b,{})})]})}let h={default:{default:{"--label-bg-color":a.T.mono_200,"--toggle-btn-bg-color":a.T.mono_600},checked:{"--label-bg-color":a.T.mono_300,"--toggle-btn-bg-color":a.T.primary_1000}},primary:{default:{"--label-bg-color":a.T.mono_100,"--toggle-btn-bg-color":a.T.primary_1000},checked:{"--label-bg-color":a.T.primary_1000,"--toggle-btn-bg-color":a.T.mono_000}}},u=r.Ay.div.withConfig({componentId:"sc-eebc1930-0"})(["--toggle-btn-size:25px;--toggle-btn-margin:2px;--toggle-btn-real-size:calc(var(--toggle-btn-size) - 2 * var(--toggle-btn-margin));"," display:inline-block;position:relative;"],e=>{let{color:t}=e;return(0,c.D)(h,t)}),f=r.Ay.input.withConfig({componentId:"sc-eebc1930-1"})(["position:absolute;width:0;height:0;margin:0;opacity:0;"]),m=r.Ay.label.withConfig({componentId:"sc-eebc1930-2"})(["cursor:pointer;display:flex;width:calc(2 * var(--toggle-btn-size));height:var(--toggle-btn-size);border-radius:16px;background-color:var(--label-bg-color);transition:background-color 300ms ease-in-out;"]),b=r.Ay.div.withConfig({componentId:"sc-eebc1930-3"})(["position:absolute;top:0;left:0;right:0;width:var(--toggle-btn-real-size);height:var(--toggle-btn-real-size);margin:var(--toggle-btn-margin);border-radius:16px;background-color:var(--toggle-btn-bg-color);transition:transform 300ms ease-in-out,background-color 300ms ease-in-out;",":checked + "," &{transform:translateX(25px);}"],f,m);var p=n(6046);function x(e){let{href:t,label:n}=e,r=(0,p.usePathname)();return(0,o.jsx)(_,{href:t,selected:r===t,children:n})}let _=(0,r.Ay)(l()).withConfig({componentId:"sc-c60f13b2-0"})(["color:",";font-size:",";font-weight:500;text-decoration:none;&:hover,&:active{color:",";text-decoration:underline;text-underline-offset:6px;}"],e=>{let{selected:t}=e;return t?a.T.primary_1000:"inherit"},a.G.heading_3,a.T.primary_1000);function v(){let{theme:e,setTheme:t}=(0,s.D)(),n="dark"===e;return(0,o.jsx)(y,{children:(0,o.jsxs)(j,{children:[(0,o.jsx)(w,{children:(0,o.jsx)(x,{href:"/",label:"Home"})}),(0,o.jsx)(w,{children:(0,o.jsx)(x,{href:"/posts",label:"Recent"})}),(0,o.jsx)(w,{children:(0,o.jsx)(x,{href:"/categories",label:"Category"})}),(0,o.jsx)(w,{children:(0,o.jsx)("div",{as:"div",children:(0,o.jsx)(g,{color:"default",checked:n,onChange:()=>{t(n?"light":"dark")}})})})]})})}let y=r.Ay.nav.withConfig({componentId:"sc-e7edfb9d-0"})(["display:flex;"]),j=r.Ay.ul.withConfig({componentId:"sc-e7edfb9d-1"})(["display:flex;align-items:center;margin:0;padding:0;list-style:none;"]),w=r.Ay.li.withConfig({componentId:"sc-e7edfb9d-2"})(["flex:1;display:flex;justify-content:center;align-items:center;padding:0 16px;list-style:none;"]);function C(){return(0,o.jsx)(k,{children:(0,o.jsxs)(T,{children:[(0,o.jsx)(I,{href:"/",children:"Blog"}),(0,o.jsx)(v,{})]})})}let k=r.Ay.header.withConfig({componentId:"sc-5e95ee51-0"})(["flex-shrink:0;display:flex;justify-content:center;align-items:center;background-color:",";color:",";height:100px;",";"],e=>{let{theme:t}=e;return t.headerBgColor},e=>{let{theme:t}=e;return t.color},c.W),T=r.Ay.div.withConfig({componentId:"sc-5e95ee51-1"})(["display:flex;align-items:center;justify-content:space-between;width:clamp(300px,80%,1200px);height:100%;"]),I=(0,r.Ay)(l()).withConfig({componentId:"sc-5e95ee51-2"})(["font-size:",";font-weight:700;color:inherit;text-decoration:none;"],a.G.heading_1)},5978:(e,t,n)=>{"use strict";n.d(t,{D:()=>r,W:()=>l});var o=n(5285);let r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";return Object.entries(e).map(n=>{let[o="default",r=e.default||{}]=n;if(o===t)return i(r)}).join("")},i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).map(e=>{let[t="default",n={}]=e,o=Object.entries(n).map(e=>{let[t,n]=e;return"".concat(t,": ").concat(n,";")}).join(" ");return"\n        ".concat("default"===t?"&":"&:has(input:".concat(t,")")," {\n          ").concat(o,"\n        }\n      ")})},l=(0,o.AH)(["transition:background-color 300ms ease-in-out,color 300ms ease-in-out;"])},6014:(e,t,n)=>{"use strict";n.d(t,{default:()=>a});var o=n(5155),r=n(6046),i=n(2115),l=n(5285);function a(e){let{children:t}=e,[n]=(0,i.useState)(()=>new l.E);return(0,r.useServerInsertedHTML)(()=>{let e=n.getStyleElement();return n.instance.clearTag(),(0,o.jsx)(o.Fragment,{children:e})}),(0,o.jsx)(o.Fragment,{children:t})}},6046:(e,t,n)=>{"use strict";var o=n(6658);n.o(o,"usePathname")&&n.d(t,{usePathname:function(){return o.usePathname}}),n.o(o,"useServerInsertedHTML")&&n.d(t,{useServerInsertedHTML:function(){return o.useServerInsertedHTML}})},6949:()=>{},7316:(e,t,n)=>{"use strict";n.d(t,{default:()=>r});var o=n(5155);function r(e){let{children:t}=e;return(0,o.jsx)(i,{children:t})}let i=n(5285).Ay.div.withConfig({componentId:"sc-d4dd9b63-0"})(["flex-grow:1;width:clamp(300px,80%,1200px);height:100%;margin:0 auto;"])},9973:(e,t,n)=>{"use strict";n.d(t,{default:()=>g,D:()=>d});var o=n(5155),r=n(2115),i=n(5285),l=n(3673);let a={bgColor:l.T.mono_000,color:l.T.mono_1000,headerBgColor:l.T.mono_100},c={bgColor:l.T.mono_1000,color:l.T.mono_000,headerBgColor:l.T.mono_800},s=(0,r.createContext)(null),d=()=>(0,r.useContext)(s);function g(e){let{children:t}=e,[n,l]=(0,r.useState)("light");return(0,o.jsx)(s.Provider,{value:{theme:n,setTheme:l},children:(0,o.jsx)(i.NP,{theme:"light"===n?a:c,children:t})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[627,285,441,587,358],()=>t(535)),_N_E=e.O()}]);