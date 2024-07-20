import{Q as de,a as pe,b as De}from"./QToolbar.eafa1866.js";import{u as Ze,a as et,b as tt,c as at,d as ot,T as ue,e as E,f as lt,Q as ve,g as rt,C as Se,h as nt,i as it,j as fe,_ as st,k as ut}from"./rtl.3aed263d.js";import{Q as ct,a as dt}from"./QLayout.f669a291.js";import{Q as vt}from"./AllHabitStore.8682d05d.js";import{h as P,Q as ft}from"./moment.f201de8e.js";import{u as mt,a as ht}from"./use-dark.55495a85.js";import{m as j,i as Ie,p as H,r as p,c as l,w as y,o as gt,n as $e,l as Qe,q as me,h as $,u as qe,v as bt,x as Ae,g as be,y as yt,Q as _t,z as kt,A as wt,B as xt,C,D as N,E as B,f as d,G as m,H as b,I as z,J as ee,K as W,L as Ye,M as I,N as Ct,O as Be,P as Z,R as Dt,S as St,U as $t,V as qt,W as Bt,X as Mt}from"./index.431dcb33.js";import{I as he}from"./iconify.4d43847a.js";import{u as ye,a as Tt,b as pt,c as It,d as Qt}from"./addHabitStore.f8fd2e3f.js";import{u as _e}from"./use-quasar.e647a0d9.js";import{u as At}from"./sliderStore.3a5c56c8.js";import{u as Yt}from"./habitDetailStore.14cc725b.js";import{u as Lt,a as Pt,b as zt}from"./QTabs.235fe9b8.js";import{Q as Ot}from"./scroll.c8893e35.js";import"./uid.3d1f5a39.js";import"./QScrollObserver.fe79d156.js";import"./apOptionQuery.ccdaf876.js";import"./axios.492a3d3b.js";const Me=150;j({name:"QDrawer",inheritAttrs:!1,props:{...Ze,...mt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...et,"onLayout","miniState"],setup(e,{slots:r,emit:n,attrs:v}){const o=be(),{proxy:{$q:c}}=o,s=ht(e,c),{preventBodyScroll:f}=lt(),{registerTimeout:w,removeTimeout:S}=tt(),a=Ie(Ae,H);if(a===H)return console.error("QDrawer needs to be child of QLayout"),H;let A,M=null,_;const h=p(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),x=l(()=>e.mini===!0&&h.value!==!0),k=l(()=>x.value===!0?e.miniWidth:e.width),g=p(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),U=l(()=>e.persistent!==!0&&(h.value===!0||Oe.value===!0));function G(t,u){if(te(),t!==!1&&a.animate(),T(0),h.value===!0){const q=a.instances[K.value];q!==void 0&&q.belowBreakpoint===!0&&q.hide(!1),Y(1),a.isContainer.value!==!0&&f(!0)}else Y(0),t!==!1&&ne(!1);w(()=>{t!==!1&&ne(!0),u!==!0&&n("show",t)},Me)}function F(t,u){ze(),t!==!1&&a.animate(),Y(0),T(O.value*k.value),ie(),u!==!0?w(()=>{n("hide",t)},Me):S()}const{show:i,hide:D}=at({showing:g,hideOnRouteChange:U,handleShow:G,handleHide:F}),{addToHistory:te,removeFromHistory:ze}=ot(g,D,U),J={belowBreakpoint:h,hide:D},Q=l(()=>e.side==="right"),O=l(()=>(c.lang.rtl===!0?-1:1)*(Q.value===!0?1:-1)),ke=p(0),V=p(!1),ae=p(!1),we=p(k.value*O.value),K=l(()=>Q.value===!0?"left":"right"),oe=l(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:k.value:0),le=l(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(Q.value?"R":"L")!==-1||c.platform.is.ios===!0&&a.isContainer.value===!0),R=l(()=>e.overlay===!1&&g.value===!0&&h.value===!1),Oe=l(()=>e.overlay===!0&&g.value===!0&&h.value===!1),Ve=l(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&V.value===!1?" hidden":"")),Ne=l(()=>({backgroundColor:`rgba(0,0,0,${ke.value*.4})`})),xe=l(()=>Q.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),He=l(()=>Q.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Fe=l(()=>{const t={};return a.header.space===!0&&xe.value===!1&&(le.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&He.value===!1&&(le.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Re=l(()=>{const t={width:`${k.value}px`,transform:`translateX(${we.value}px)`};return h.value===!0?t:Object.assign(t,Fe.value)}),Ee=l(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),We=l(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(V.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(le.value===!0||R.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(xe.value===!0?" q-drawer--top-padding":""))),je=l(()=>{const t=c.lang.rtl===!0?e.side:K.value;return[[ue,Ke,void 0,{[t]:!0,mouse:!0}]]}),Ue=l(()=>{const t=c.lang.rtl===!0?K.value:e.side;return[[ue,Ce,void 0,{[t]:!0,mouse:!0}]]}),Ge=l(()=>{const t=c.lang.rtl===!0?K.value:e.side;return[[ue,Ce,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function re(){Xe(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}y(h,t=>{t===!0?(A=g.value,g.value===!0&&D(!1)):e.overlay===!1&&e.behavior!=="mobile"&&A!==!1&&(g.value===!0?(T(0),Y(0),ie()):i(!1))}),y(()=>e.side,(t,u)=>{a.instances[u]===J&&(a.instances[u]=void 0,a[u].space=!1,a[u].offset=0),a.instances[t]=J,a[t].size=k.value,a[t].space=R.value,a[t].offset=oe.value}),y(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&re()}),y(()=>e.behavior+e.breakpoint,re),y(a.isContainer,t=>{g.value===!0&&f(t!==!0),t===!0&&re()}),y(a.scrollbarWidth,()=>{T(g.value===!0?0:void 0)}),y(oe,t=>{L("offset",t)}),y(R,t=>{n("onLayout",t),L("space",t)}),y(Q,()=>{T()}),y(k,t=>{T(),se(e.miniToOverlay,t)}),y(()=>e.miniToOverlay,t=>{se(t,k.value)}),y(()=>c.lang.rtl,()=>{T()}),y(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Je(),a.animate())}),y(x,t=>{n("miniState",t)});function T(t){t===void 0?$e(()=>{t=g.value===!0?0:k.value,T(O.value*t)}):(a.isContainer.value===!0&&Q.value===!0&&(h.value===!0||Math.abs(t)===k.value)&&(t+=O.value*a.scrollbarWidth.value),we.value=t)}function Y(t){ke.value=t}function ne(t){const u=t===!0?"remove":a.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function Je(){M!==null&&clearTimeout(M),o.proxy&&o.proxy.$el&&o.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,M=setTimeout(()=>{M=null,ae.value=!1,o&&o.proxy&&o.proxy.$el&&o.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ke(t){if(g.value!==!1)return;const u=k.value,q=E(t.distance.x,0,u);if(t.isFinal===!0){q>=Math.min(75,u)===!0?i():(a.animate(),Y(0),T(O.value*u)),V.value=!1;return}T((c.lang.rtl===!0?Q.value!==!0:Q.value)?Math.max(u-q,0):Math.min(0,q-u)),Y(E(q/u,0,1)),t.isFirst===!0&&(V.value=!0)}function Ce(t){if(g.value!==!0)return;const u=k.value,q=t.direction===e.side,X=(c.lang.rtl===!0?q!==!0:q)?E(t.distance.x,0,u):0;if(t.isFinal===!0){Math.abs(X)<Math.min(75,u)===!0?(a.animate(),Y(1),T(0)):D(),V.value=!1;return}T(O.value*X),Y(E(1-X/u,0,1)),t.isFirst===!0&&(V.value=!0)}function ie(){f(!1),ne(!0)}function L(t,u){a.update(e.side,t,u)}function Xe(t,u){t.value!==u&&(t.value=u)}function se(t,u){L("size",t===!0?e.miniWidth:u)}return a.instances[e.side]=J,se(e.miniToOverlay,k.value),L("space",R.value),L("offset",oe.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),gt(()=>{n("onLayout",R.value),n("miniState",x.value),A=e.showIfAbove===!0;const t=()=>{(g.value===!0?G:F)(!1,!0)};if(a.totalWidth.value!==0){$e(t);return}_=y(a.totalWidth,()=>{_(),_=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?i(!1):t()})}),Qe(()=>{_!==void 0&&_(),M!==null&&(clearTimeout(M),M=null),g.value===!0&&ie(),a.instances[e.side]===J&&(a.instances[e.side]=void 0,L("size",0),L("offset",0),L("space",!1))}),()=>{const t=[];h.value===!0&&(e.noSwipeOpen===!1&&t.push(me($("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),je.value)),t.push(qe("div",{ref:"backdrop",class:Ve.value,style:Ne.value,"aria-hidden":"true",onClick:D},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>Ge.value)));const u=x.value===!0&&r.mini!==void 0,q=[$("div",{...v,key:""+u,class:[Ee.value,v.class]},u===!0?r.mini():bt(r.default))];return e.elevated===!0&&g.value===!0&&q.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(qe("aside",{ref:"content",class:We.value,style:Re.value},q,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>Ue.value)),$("div",{class:"q-drawer-container"},t)}}});ye();yt([{idleIcon:"ic:outline-home",activeIcon:"ic:baseline-home",text:"Home",routeName:"home",isActive:!0},{idleIcon:"fluent:table-24-regular",activeIcon:"fluent:table-24-filled",text:"Table View",routeName:"tableview",isActive:!1},{idleIcon:"majesticons:analytics-line",activeIcon:"majesticons:analytics",text:"Insights",routeName:"insights",isActive:!1},{idleIcon:"solar:settings-line-duotone",activeIcon:"solar:settings-bold-duotone",text:"Settings",routeName:"settings",isActive:!1}]);var Vt=j({name:"QToggle",props:{...Tt,icon:String,iconColor:String},emits:pt,setup(e){function r(n,v){const o=l(()=>(n.value===!0?e.checkedIcon:v.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),c=l(()=>n.value===!0?e.iconColor:null);return()=>[$("div",{class:"q-toggle__track"}),$("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},o.value!==void 0?[$(_t,{name:o.value,color:c.value})]:void 0)]}return It("toggle",r)}});const Nt={...kt,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},ge=50,Le=2*ge,Pe=Le*Math.PI,Ht=Math.round(Pe*1e3)/1e3;var Ft=j({name:"QCircularProgress",props:{...Nt,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:r}){const{proxy:{$q:n}}=be(),v=wt(e),o=l(()=>{const _=(n.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(n.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-_}deg)`:`rotate3d(0, 0, 1, ${_-90}deg)`}}),c=l(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),s=l(()=>Le/(1-e.thickness/2)),f=l(()=>`${s.value/2} ${s.value/2} ${s.value} ${s.value}`),w=l(()=>E(e.value,e.min,e.max)),S=l(()=>e.max-e.min),a=l(()=>e.thickness/2*s.value),A=l(()=>{const _=(e.max-w.value)/S.value,h=e.rounded===!0&&w.value<e.max&&_<.25?a.value/2*(1-_/.25):0;return Pe*_+h});function M({thickness:_,offset:h,color:x,cls:k,rounded:g}){return $("circle",{class:"q-circular-progress__"+k+(x!==void 0?` text-${x}`:""),style:c.value,fill:"transparent",stroke:"currentColor","stroke-width":_,"stroke-dasharray":Ht,"stroke-dashoffset":h,"stroke-linecap":g,cx:s.value,cy:s.value,r:ge})}return()=>{const _=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&_.push($("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ge-a.value/2,cx:s.value,cy:s.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&_.push(M({cls:"track",thickness:a.value,offset:0,color:e.trackColor})),_.push(M({cls:"circle",thickness:a.value,offset:A.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const h=[$("svg",{class:"q-circular-progress__svg",style:o.value,viewBox:f.value,"aria-hidden":"true"},_)];return e.showValue===!0&&h.push($("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},r.default!==void 0?r.default():[$("div",w.value)])),$("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:v.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:w.value},xt(r.internal,h))}}});const Rt={class:"col-2"},Et=B("span",null,"Previous Date ",-1),Wt={class:"col-8",align:"center"},jt={class:"row items-center justify-end q-gutter-sm"},Ut={class:"col-2",align:"left"},Gt=B("span",null,"Next Date",-1),Jt={__name:"DateControl",setup(e){const r=At(),n=p("");function v(){n.value=P(r.habitForDate).format("YYYY/MM/DD")}function o(){r.habitForDate=P(n.value,"YYYY/MM/DD").format("YYYY-MM-DD"),r.allSlidesName=[P(r.habitForDate).add(-1,"days").format("YYYY-MM-DD"),P(r.habitForDate).format("YYYY-MM-DD"),P(r.habitForDate).add(1,"days").format("YYYY-MM-DD")],r.mySlideName=r.habitForDate}function c(s){const f=P().format("YYYY/MM/DD");return s<=f}return(s,f)=>(C(),N("div",{dense:"",class:W(["row items-center justify-between",s.$q.dark.isActive?"bg-grey-9 text-green-2":"bg-grey-3 text-green-10"])},[B("div",Rt,[d(z,{size:"md",flat:"",round:"",onClick:f[0]||(f[0]=w=>b(r).goToNextslide(-1))},{default:m(()=>[d(b(he),{icon:"eva:arrow-left-fill",style:{"font-size":"24px"}}),d(ve,null,{default:m(()=>[Et]),_:1})]),_:1})]),B("div",Wt,[d(z,{flat:"","no-caps":""},{default:m(()=>[B("span",null,ee(b(P)(b(r).habitForDate).format("ddd DD MMM YY")),1),d(rt,{onBeforeShow:v,cover:"","transition-show":"scale","transition-hide":"scale"},{default:m(()=>[d(ft,{modelValue:n.value,"onUpdate:modelValue":f[1]||(f[1]=w=>n.value=w),"today-btn":"",color:s.$q.dark.isActive?"light-green-14":"green-10",options:c},{default:m(()=>[B("div",jt,[me(d(z,{label:"Cancel",color:s.$q.dark.isActive?"light-green-14":"green-10",flat:""},null,8,["color"]),[[Se]]),me(d(z,{label:"OK",color:s.$q.dark.isActive?"light-green-14":"green-10",onClick:o},null,8,["color"]),[[Se]])])]),_:1},8,["modelValue","color"])]),_:1})]),_:1})]),B("div",Ut,[d(z,{size:"md",flat:"",round:"",onClick:f[2]||(f[2]=w=>b(r).goToNextslide(1)),disable:b(r).habitForDate>=b(P)().format("YYYY-MM-DD")},{default:m(()=>[d(b(he),{icon:"eva:arrow-right-fill",style:{"font-size":"24px"}}),d(ve,null,{default:m(()=>[Gt]),_:1})]),_:1},8,["disable"])])],2))}},Kt={class:"col-5"},Xt=B("img",{src:"icons/favicon-128x128.png"},null,-1),Zt={key:0},ea={key:0},ta={key:1},aa={key:1},oa={class:"row no-wrap q-pa-md"},la={class:"column"},ce={__name:"TopAppBar",setup(e){const r=ye(),n=_e();n.dark.set(!0);const v=p(!0),o=p(!1);async function c(){console.log("Export clicked"),o.value=!0,await r.exportAllData(),o.value=!1}const s=Ye(),f=l(()=>s.name);return(w,S)=>(C(),I(pe,{class:W(b(n).dark.isActive?"bg-grey-9 text-green-2":"bg-grey-3 text-green-10")},{default:m(()=>[d(de,{class:"row"},{default:m(()=>[B("div",Kt,[d(Ct,null,{default:m(()=>[Xt]),_:1}),b(n).platform.is.mobile?(C(),N("span",Zt,[b(r).pageTitle=="Home"?(C(),N("span",ea,"Aadat ")):(C(),N("span",ta,ee(b(r).pageTitle),1))])):(C(),N("span",aa," Aadat "))]),B("div",{class:W(f.value=="home"?"col-6 col-md-4":"col-6")},[f.value=="home"||!b(n).platform.is.mobile&&f.value=="habit"?(C(),I(Jt,{key:0})):Be("",!0)],2)]),_:1}),!b(n).platform.is.mobile&&f.value!="habit"?(C(),I(de,{key:0,class:"gt-xs"},{default:m(()=>[Z(ee(b(r).pageTitle),1)]),_:1})):Be("",!0),d(z,{flat:"",round:"",dense:"",icon:"more_vert"},{default:m(()=>[d(nt,null,{default:m(()=>[B("div",oa,[B("div",la,[d(Vt,{modelValue:v.value,"onUpdate:modelValue":[S[0]||(S[0]=a=>v.value=a),S[1]||(S[1]=a=>b(n).dark.toggle())],label:"Dark Mode"},null,8,["modelValue"]),d(vt,{style:{"min-width":"100px"}},{default:m(()=>[d(it,{clickable:"",onClick:S[2]||(S[2]=a=>c()),disable:o.value},{default:m(()=>[o.value?(C(),I(fe,{key:0},{default:m(()=>[B("div",null,[d(Ft,{indeterminate:"",size:"sm",color:"white",class:"q-ma-md"}),Z("Exporting Data in progress, Please Wait... ")])]),_:1})):(C(),I(fe,{key:1},{default:m(()=>[Z("Export ")]),_:1}))]),_:1},8,["disable"])]),_:1})])])]),_:1})]),_:1})]),_:1},8,["class"]))}},ra={class:"q-pl-sm q-pt-xs"},Te={__name:"SecondaryTopBar",setup(e){const r=Yt(),n=Qt();ye();const v=Dt();function o(){var c;n.editHabitId=(c=r.habitDetail)==null?void 0:c.HABIT_ID,n.editThisHabit(),v.push({name:"addhabit"})}return _e(),(c,s)=>(C(),I(pe,null,{default:m(()=>[d(de,{class:"row"},{default:m(()=>{var f;return[d(fe,{avatar:""},{default:m(()=>{var w,S;return[d(st,{BGCOLOR:(w=b(r).habitDetail)==null?void 0:w.COLOR,EMOJI:(S=b(r).habitDetail)==null?void 0:S.EMOJI,SIZE:"sm",isRounded:!0},null,8,["BGCOLOR","EMOJI"])]}),_:1}),B("div",ra,ee((f=b(r).habitDetail)==null?void 0:f.HABIT_LABEL),1)]}),_:1}),d(z,{dense:"",round:"",flat:"",onClick:s[0]||(s[0]=f=>o())},{default:m(()=>[d(b(he),{icon:"line-md:edit-twotone",style:{"font-size":"24px"}}),d(ve,null,{default:m(()=>[Z("Edit the Habit Details")]),_:1})]),_:1})]),_:1}))}};j({name:"QRouteTab",props:{...St,...Lt},emits:Pt,setup(e,{slots:r,emit:n}){const v=$t({useDisableForRouterLinkProps:!1}),{renderTab:o,$tabs:c}=zt(e,r,n,{exact:l(()=>e.exact),...v});return y(()=>`${e.name} | ${e.exact} | ${(v.resolvedLink.value||{}).href}`,()=>{c.verifyRouteModel()}),()=>o(v.linkTag.value,v.linkAttrs.value)}});j({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:n}){const{proxy:{$q:v}}=be(),o=Ie(Ae,H);if(o===H)return console.error("QFooter needs to be child of QLayout"),H;const c=p(parseInt(e.heightHint,10)),s=p(!0),f=p(qt.value===!0||o.isContainer.value===!0?0:window.innerHeight),w=l(()=>e.reveal===!0||o.view.value.indexOf("F")!==-1||v.platform.is.ios&&o.isContainer.value===!0),S=l(()=>o.isContainer.value===!0?o.containerHeight.value:f.value),a=l(()=>{if(e.modelValue!==!0)return 0;if(w.value===!0)return s.value===!0?c.value:0;const i=o.scroll.value.position+S.value+c.value-o.height.value;return i>0?i:0}),A=l(()=>e.modelValue!==!0||w.value===!0&&s.value!==!0),M=l(()=>e.modelValue===!0&&A.value===!0&&e.reveal===!0),_=l(()=>"q-footer q-layout__section--marginal "+(w.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(A.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(w.value!==!0?" hidden":""):"")),h=l(()=>{const i=o.rows.value.bottom,D={};return i[0]==="l"&&o.left.space===!0&&(D[v.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),i[2]==="r"&&o.right.space===!0&&(D[v.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),D});function x(i,D){o.update("footer",i,D)}function k(i,D){i.value!==D&&(i.value=D)}function g({height:i}){k(c,i),x("size",i)}function U(){if(e.reveal!==!0)return;const{direction:i,position:D,inflectionPoint:te}=o.scroll.value;k(s,i==="up"||D-te<100||o.height.value-S.value-D-c.value<300)}function G(i){M.value===!0&&k(s,!0),n("focusin",i)}y(()=>e.modelValue,i=>{x("space",i),k(s,!0),o.animate()}),y(a,i=>{x("offset",i)}),y(()=>e.reveal,i=>{i===!1&&k(s,e.modelValue)}),y(s,i=>{o.animate(),n("reveal",i)}),y([c,o.scroll,o.height],U),y(()=>v.screen.height,i=>{o.isContainer.value!==!0&&k(f,i)});const F={};return o.instances.footer=F,e.modelValue===!0&&x("size",c.value),x("space",e.modelValue),x("offset",a.value),Qe(()=>{o.instances.footer===F&&(o.instances.footer=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const i=Bt(r.default,[$(Ot,{debounce:0,onResize:g})]);return e.elevated===!0&&i.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),$("footer",{class:_.value,style:h.value,onFocusin:G},i)}}});const na={key:0,class:"row no-wrap shadow-1"},$a={__name:"MainLayout",setup(e){const r=_e(),n=Ye(),v=l(()=>n.name);return(o,c)=>{const s=Mt("router-view");return C(),I(ct,{view:v.value=="habit"?"lHr LpR fFf":"hHh LpR fFf"},{default:m(()=>[b(r).platform.is.mobile?(C(),I(De,{key:0,class:W(b(r).dark.isActive?"bg-grey-9 text-green-2":"bg-grey-3 text-green-10")},{default:m(()=>[v.value=="habit"?(C(),I(Te,{key:0})):(C(),I(ce,{key:1}))]),_:1},8,["class"])):(C(),I(De,{key:1,bordered:"",class:W(b(r).dark.isActive?"bg-grey-9 text-green-2":"bg-grey-3 text-green-10")},{default:m(()=>[v.value=="habit"?(C(),N("div",na,[d(ce,{class:"col-md-4 col-12"}),d(ut,{dark:"",vertical:""}),d(Te,{class:"col-8"})])):(C(),I(ce,{key:1}))]),_:1},8,["class"])),d(dt,null,{default:m(()=>[d(s)]),_:1})]),_:1},8,["view"])}}};export{$a as default};
