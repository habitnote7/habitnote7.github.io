import{Q as d,a as m,b as p}from"./QToolbar.eafa1866.js";import{Q as _,a as f}from"./QLayout.f669a291.js";import{C as l,M as u,G as o,f as e,N as g,H as r,P as Q,I as s,X as b}from"./index.431dcb33.js";import{I as n}from"./iconify.4d43847a.js";import{u as x}from"./use-quasar.e647a0d9.js";import"./scroll.c8893e35.js";import"./QScrollObserver.fe79d156.js";const y={__name:"TopAppBarNoAuth",setup(i){const a=x();return a.dark.set(!0),(c,t)=>(l(),u(m,null,{default:o(()=>[e(d,null,{default:o(()=>[e(g,null,{default:o(()=>[e(r(n),{icon:"arcticons:habitnow",style:{"font-size":"32px"}})]),_:1}),Q(" Aadat ")]),_:1}),e(s,{round:"",flat:"",onClick:t[0]||(t[0]=h=>r(a).dark.toggle())},{default:o(()=>[e(r(n),{icon:r(a).dark.isActive?"circum:dark":"iconoir:sun-light",style:{"font-size":"24px"}},null,8,["icon"])]),_:1}),e(s,{class:"glossy q-ma-sm",rounded:"",color:"deep-orange",label:"Go to App",to:{name:"home"}}),e(s,{class:"glossy q-ma-sm",rounded:"",color:"deep-orange",label:"Login",to:{name:"login"}}),e(s,{class:"glossy",rounded:"",color:"deep-orange",label:"Register",to:{name:"register"}})]),_:1}))}},B={__name:"NoAuthLayout",setup(i){return(a,c)=>{const t=b("router-view");return l(),u(_,null,{default:o(()=>[e(p,{bordered:"",class:"bg-primary text-white"},{default:o(()=>[e(y)]),_:1}),e(f,null,{default:o(()=>[e(t)]),_:1})]),_:1})}}};export{B as default};