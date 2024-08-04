import{u as pt,a as xt}from"./use-dark.c9afc95e.js";import{m as Be,z as el,A as tl,c as m,u as ll,h as y,Q as He,B as ul,ay as nl,g as $e,_ as oe,r as E,w as re,C as se,D as St,f as Z,G as W,E as ye,M as qe,H as Ne,an as ht,J as ie,P as al,v as It,aN as ol,aO as il,a2 as rl,n as Y,ar as sl,k as cl,ae as dl,as as fl,l as kt,aP as vl,aQ as ml,a6 as Xe,aA as Ae,Z as Sl,a7 as be,az as hl,W as gl,I as bl,aR as yl,aS as gt,o as wl,aT as Cl,aU as Ol,O as bt}from"./index.f7a7949b.js";import{a3 as Vl,Q as At,I as Ze,a4 as yt,h as pl,a2 as xl,j as _t,K as qt,i as Bt}from"./rtl.1af79ae3.js";import{u as et,a as Et,b as zt,c as Mt,f as wt,d as Il}from"./QInput.7e1cdc9e.js";import{u as kl,f as Al}from"./uid.4a806039.js";import{I as Lt}from"./iconify.797f732c.js";import{u as _l}from"./use-quasar.05fa06bf.js";const ql={xs:8,sm:10,md:14,lg:20,xl:24};var Tt=Be({name:"QChip",props:{...pt,...el,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:u,emit:o}){const{proxy:{$q:c}}=$e(),p=xt(e,c),s=tl(e,ql),x=m(()=>e.selected===!0||e.icon!==void 0),f=m(()=>e.selected===!0?e.iconSelected||c.iconSet.chip.selected:e.icon),S=m(()=>e.iconRemove||c.iconSet.chip.remove),q=m(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),i=m(()=>{const v=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(v?` text-${v} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(q.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(p.value===!0?" q-chip--dark q-dark":"")}),h=m(()=>{const v=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...v,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||c.lang.label.remove};return{chip:v,remove:D}});function w(v){v.keyCode===13&&O(v)}function O(v){e.disable||(o("update:selected",!e.selected),o("click",v))}function A(v){(v.keyCode===void 0||v.keyCode===13)&&(oe(v),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function P(){const v=[];q.value===!0&&v.push(y("div",{class:"q-focus-helper"})),x.value===!0&&v.push(y(He,{class:"q-chip__icon q-chip__icon--left",name:f.value}));const D=e.label!==void 0?[y("div",{class:"ellipsis"},[e.label])]:void 0;return v.push(y("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},ul(u.default,D))),e.iconRight&&v.push(y(He,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&v.push(y(He,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:S.value,...h.value.remove,onClick:A,onKeyup:A})),v}return()=>{if(e.modelValue===!1)return;const v={class:i.value,style:s.value};return q.value===!0&&Object.assign(v,h.value.chip,{onClick:O,onKeyup:w}),ll("div",v,P(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[nl,e.ripple]])}}});const Bl={class:"ellipsis"},El={key:1},zl={class:"text-center q-ml-sm"},Ml={class:"text-right q-ml-sm text-weight-light"},Ct={__name:"OptionChips",props:["BGCOLOR","EMOJI","LABEL","SCORE"],setup(e){const u=e,o=E(!1),c=m(()=>u==null?void 0:u.EMOJI);re(c,(s,x)=>{console.log("Watching"),console.log("Watch props.selected function called with args:",s,x),p()});function p(){c.value&&Vl(c.value)?o.value=!0:o.value=!1}return p(),(s,x)=>(se(),St("div",null,[Z(Tt,{style:ht({backgroundColor:u==null?void 0:u.BGCOLOR,maxWidth:"240px"}),class:"text-justify"},{default:W(()=>[ye("div",Bl,[o.value?(se(),qe(Ne(Lt),{key:0,icon:u==null?void 0:u.EMOJI,style:ht({fontSize:`${s.iconSize}px`})},null,8,["icon","style"])):(se(),St("span",El,ie(u==null?void 0:u.EMOJI),1)),ye("span",zl,ie(e.LABEL),1)]),ye("span",Ml,ie(e.SCORE),1),Z(At,null,{default:W(()=>[al(ie(e.LABEL)+" ",1),ye("b",null,"Score : "+ie(e.SCORE),1)]),_:1})]),_:1},8,["style"])]))}};var Zl=Be({name:"QBar",props:{...pt,dense:Boolean},setup(e,{slots:u}){const{proxy:{$q:o}}=$e(),c=xt(e,o),p=m(()=>`q-bar row no-wrap items-center q-bar--${e.dense===!0?"dense":"standard"}  q-bar--${c.value===!0?"dark":"light"}`);return()=>y("div",{class:p.value,role:"toolbar"},It(u.default))}}),eu=Be({name:"QCardActions",props:{...ol,vertical:Boolean},setup(e,{slots:u}){const o=il(e),c=m(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>y("div",{class:c.value},It(u.default))}}),Ll=Be({name:"QField",inheritAttrs:!1,props:{...et,tag:{type:String,default:"label"}},emits:Et,setup(){return zt(Mt({requiredForAttr:!1,tagProp:!0}))}});const j=1e3,Tl=["start","center","end","start-force","center-force","end-force"],Rt=Array.prototype.filter,Rl=window.getComputedStyle(document.body).overflowAnchor===void 0?rl:function(e,u){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const o=e.children||[];Rt.call(o,p=>p.dataset&&p.dataset.qVsAnchor!==void 0).forEach(p=>{delete p.dataset.qVsAnchor});const c=o[u];c&&c.dataset&&(c.dataset.qVsAnchor="")}))};function we(e,u){return e+u}function Ye(e,u,o,c,p,s,x,f){const S=e===window?document.scrollingElement||document.documentElement:e,q=p===!0?"offsetWidth":"offsetHeight",i={scrollStart:0,scrollViewSize:-x-f,scrollMaxSize:0,offsetStart:-x,offsetEnd:-f};if(p===!0?(e===window?(i.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,i.scrollViewSize+=document.documentElement.clientWidth):(i.scrollStart=S.scrollLeft,i.scrollViewSize+=S.clientWidth),i.scrollMaxSize=S.scrollWidth,s===!0&&(i.scrollStart=(Ze===!0?i.scrollMaxSize-i.scrollViewSize:0)-i.scrollStart)):(e===window?(i.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,i.scrollViewSize+=document.documentElement.clientHeight):(i.scrollStart=S.scrollTop,i.scrollViewSize+=S.clientHeight),i.scrollMaxSize=S.scrollHeight),o!==null)for(let h=o.previousElementSibling;h!==null;h=h.previousElementSibling)h.classList.contains("q-virtual-scroll--skip")===!1&&(i.offsetStart+=h[q]);if(c!==null)for(let h=c.nextElementSibling;h!==null;h=h.nextElementSibling)h.classList.contains("q-virtual-scroll--skip")===!1&&(i.offsetEnd+=h[q]);if(u!==e){const h=S.getBoundingClientRect(),w=u.getBoundingClientRect();p===!0?(i.offsetStart+=w.left-h.left,i.offsetEnd-=w.width):(i.offsetStart+=w.top-h.top,i.offsetEnd-=w.height),e!==window&&(i.offsetStart+=i.scrollStart),i.offsetEnd+=i.scrollMaxSize-i.offsetStart}return i}function Ot(e,u,o,c){u==="end"&&(u=(e===window?document.body:e)[o===!0?"scrollWidth":"scrollHeight"]),e===window?o===!0?(c===!0&&(u=(Ze===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-u),window.scrollTo(u,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,u):o===!0?(c===!0&&(u=(Ze===!0?e.scrollWidth-e.offsetWidth:0)-u),e.scrollLeft=u):e.scrollTop=u}function _e(e,u,o,c){if(o>=c)return 0;const p=u.length,s=Math.floor(o/j),x=Math.floor((c-1)/j)+1;let f=e.slice(s,x).reduce(we,0);return o%j!==0&&(f-=u.slice(s*j,o).reduce(we,0)),c%j!==0&&c!==p&&(f-=u.slice(c,x*j).reduce(we,0)),f}const Fl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Pl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Fl};function Dl({virtualScrollLength:e,getVirtualScrollTarget:u,getVirtualScrollEl:o,virtualScrollItemSizeComputed:c}){const p=$e(),{props:s,emit:x,proxy:f}=p,{$q:S}=f;let q,i,h,w=[],O;const A=E(0),P=E(0),v=E({}),D=E(null),J=E(null),F=E(null),z=E({from:0,to:0}),Ee=m(()=>s.tableColspan!==void 0?s.tableColspan:100);c===void 0&&(c=m(()=>s.virtualScrollItemSize));const M=m(()=>c.value+";"+s.virtualScrollHorizontal),G=m(()=>M.value+";"+s.virtualScrollSliceRatioBefore+";"+s.virtualScrollSliceRatioAfter);re(G,()=>{Q()}),re(M,ee);function ee(){ce(i,!0)}function Ce(l){ce(l===void 0?i:l)}function te(l,r){const g=u();if(g==null||g.nodeType===8)return;const _=Ye(g,o(),D.value,J.value,s.virtualScrollHorizontal,S.lang.rtl,s.virtualScrollStickySizeStart,s.virtualScrollStickySizeEnd);h!==_.scrollViewSize&&Q(_.scrollViewSize),H(g,_,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,Tl.indexOf(r)!==-1?r:i!==-1&&l>i?"end":"start")}function ze(){const l=u();if(l==null||l.nodeType===8)return;const r=Ye(l,o(),D.value,J.value,s.virtualScrollHorizontal,S.lang.rtl,s.virtualScrollStickySizeStart,s.virtualScrollStickySizeEnd),g=e.value-1,_=r.scrollMaxSize-r.offsetStart-r.offsetEnd-P.value;if(q===r.scrollStart)return;if(r.scrollMaxSize<=0){H(l,r,0,0);return}h!==r.scrollViewSize&&Q(r.scrollViewSize),Oe(z.value.from);const L=Math.floor(r.scrollMaxSize-Math.max(r.scrollViewSize,r.offsetEnd)-Math.min(O[g],r.scrollViewSize/2));if(L>0&&Math.ceil(r.scrollStart)>=L){H(l,r,g,r.scrollMaxSize-r.offsetEnd-w.reduce(we,0));return}let V=0,C=r.scrollStart-r.offsetStart,T=C;if(C<=_&&C+r.scrollViewSize>=A.value)C-=A.value,V=z.value.from,T=C;else for(let b=0;C>=w[b]&&V<g;b++)C-=w[b],V+=j;for(;C>0&&V<g;)C-=O[V],C>-r.scrollViewSize?(V++,T=C):T=O[V]+C;H(l,r,V,T)}function H(l,r,g,_,L){const V=typeof L=="string"&&L.indexOf("-force")!==-1,C=V===!0?L.replace("-force",""):L,T=C!==void 0?C:"start";let b=Math.max(0,g-v.value[T]),N=b+v.value.total;N>e.value&&(N=e.value,b=Math.max(0,N-v.value.total)),q=r.scrollStart;const X=b!==z.value.from||N!==z.value.to;if(X===!1&&C===void 0){Ve(g);return}const{activeElement:Le}=document,K=F.value;X===!0&&K!==null&&K!==Le&&K.contains(Le)===!0&&(K.addEventListener("focusout",Me),setTimeout(()=>{K!==null&&K.removeEventListener("focusout",Me)})),Rl(K,g-b);const Te=C!==void 0?O.slice(b,g).reduce(we,0):0;if(X===!0){const le=N>=z.value.from&&b<=z.value.to?z.value.to:N;z.value={from:b,to:le},A.value=_e(w,O,0,b),P.value=_e(w,O,N,e.value),requestAnimationFrame(()=>{z.value.to!==N&&q===r.scrollStart&&(z.value={from:z.value.from,to:N},P.value=_e(w,O,N,e.value))})}requestAnimationFrame(()=>{if(q!==r.scrollStart)return;X===!0&&Oe(b);const le=O.slice(b,g).reduce(we,0),ue=le+r.offsetStart+A.value,Re=ue+O[g];let xe=ue+_;if(C!==void 0){const Qe=le-Te,Ie=r.scrollStart+Qe;xe=V!==!0&&Ie<ue&&Re<Ie+r.scrollViewSize?Ie:C==="end"?Re-r.scrollViewSize:ue-(C==="start"?0:Math.round((r.scrollViewSize-O[g])/2))}q=xe,Ot(l,xe,s.virtualScrollHorizontal,S.lang.rtl),Ve(g)})}function Oe(l){const r=F.value;if(r){const g=Rt.call(r.children,b=>b.classList&&b.classList.contains("q-virtual-scroll--skip")===!1),_=g.length,L=s.virtualScrollHorizontal===!0?b=>b.getBoundingClientRect().width:b=>b.offsetHeight;let V=l,C,T;for(let b=0;b<_;){for(C=L(g[b]),b++;b<_&&g[b].classList.contains("q-virtual-scroll--with-prev")===!0;)C+=L(g[b]),b++;T=C-O[V],T!==0&&(O[V]+=T,w[Math.floor(V/j)]+=T),V++}}}function Me(){F.value!==null&&F.value!==void 0&&F.value.focus()}function ce(l,r){const g=1*c.value;(r===!0||Array.isArray(O)===!1)&&(O=[]);const _=O.length;O.length=e.value;for(let V=e.value-1;V>=_;V--)O[V]=g;const L=Math.floor((e.value-1)/j);w=[];for(let V=0;V<=L;V++){let C=0;const T=Math.min((V+1)*j,e.value);for(let b=V*j;b<T;b++)C+=O[b];w.push(C)}i=-1,q=void 0,A.value=_e(w,O,0,z.value.from),P.value=_e(w,O,z.value.to,e.value),l>=0?(Oe(z.value.from),Y(()=>{te(l)})):de()}function Q(l){if(l===void 0&&typeof window!="undefined"){const C=u();C!=null&&C.nodeType!==8&&(l=Ye(C,o(),D.value,J.value,s.virtualScrollHorizontal,S.lang.rtl,s.virtualScrollStickySizeStart,s.virtualScrollStickySizeEnd).scrollViewSize)}h=l;const r=parseFloat(s.virtualScrollSliceRatioBefore)||0,g=parseFloat(s.virtualScrollSliceRatioAfter)||0,_=1+r+g,L=l===void 0||l<=0?1:Math.ceil(l/c.value),V=Math.max(1,L,Math.ceil((s.virtualScrollSliceSize>0?s.virtualScrollSliceSize:10)/_));v.value={total:Math.ceil(V*_),start:Math.ceil(V*r),center:Math.ceil(V*(.5+r)),end:Math.ceil(V*(1+r)),view:L}}function je(l,r){const g=s.virtualScrollHorizontal===!0?"width":"height",_={["--q-virtual-scroll-item-"+g]:c.value+"px"};return[l==="tbody"?y(l,{class:"q-virtual-scroll__padding",key:"before",ref:D},[y("tr",[y("td",{style:{[g]:`${A.value}px`,..._},colspan:Ee.value})])]):y(l,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[g]:`${A.value}px`,..._}}),y(l,{class:"q-virtual-scroll__content",key:"content",ref:F,tabindex:-1},r.flat()),l==="tbody"?y(l,{class:"q-virtual-scroll__padding",key:"after",ref:J},[y("tr",[y("td",{style:{[g]:`${P.value}px`,..._},colspan:Ee.value})])]):y(l,{class:"q-virtual-scroll__padding",key:"after",ref:J,style:{[g]:`${P.value}px`,..._}})]}function Ve(l){i!==l&&(s.onVirtualScroll!==void 0&&x("virtualScroll",{index:l,from:z.value.from,to:z.value.to-1,direction:l<i?"decrease":"increase",ref:f}),i=l)}Q();const de=sl(ze,S.platform.is.ios===!0?120:35);cl(()=>{Q()});let pe=!1;return dl(()=>{pe=!0}),fl(()=>{if(pe!==!0)return;const l=u();q!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?Ot(l,q,s.virtualScrollHorizontal,S.lang.rtl):te(i)}),kt(()=>{de.cancel()}),Object.assign(f,{scrollTo:te,reset:ee,refresh:Ce}),{virtualScrollSliceRange:z,virtualScrollSliceSizeComputed:v,setVirtualScrollSize:Q,onVirtualScrollEvt:de,localResetVirtualScroll:ce,padVirtualScroll:je,scrollTo:te,reset:ee,refresh:Ce}}const Vt=e=>["add","add-unique","toggle"].includes(e),Hl=".*+?^${}()|[]\\",Nl=Object.keys(et);var $l=Be({name:"QSelect",inheritAttrs:!1,props:{...Pl,...kl,...et,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:Vt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...Et,"add","remove","inputValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:u,emit:o}){const{proxy:c}=$e(),{$q:p}=c,s=E(!1),x=E(!1),f=E(-1),S=E(""),q=E(!1),i=E(!1);let h=null,w=null,O,A,P,v=null,D,J,F,z;const Ee=E(null),M=E(null),G=E(null),ee=E(null),Ce=E(null),te=Al(e),ze=Il(ct),H=m(()=>Array.isArray(e.options)?e.options.length:0),Oe=m(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Me,virtualScrollSliceSizeComputed:ce,localResetVirtualScroll:Q,padVirtualScroll:je,onVirtualScrollEvt:Ve,scrollTo:de,setVirtualScrollSize:pe}=Dl({virtualScrollLength:H,getVirtualScrollTarget:Ht,getVirtualScrollEl:rt,virtualScrollItemSizeComputed:Oe}),l=Mt(),r=m(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,a=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const n=e.mapOptions===!0&&O!==void 0?O:[],d=a.map(k=>Dt(k,n));return e.modelValue===null&&t===!0?d.filter(k=>k!==null):d}return a}),g=m(()=>{const t={};return Nl.forEach(a=>{const n=e[a];n!==void 0&&(t[a]=n)}),t}),_=m(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),L=m(()=>wt(r.value)),V=m(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||r.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),C=m(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),T=m(()=>H.value===0),b=m(()=>r.value.map(t=>$.value(t)).join(", ")),N=m(()=>e.displayValue!==void 0?e.displayValue:b.value),X=m(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Le=m(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||r.value.some(X.value))),K=m(()=>l.focused.value===!0?e.tabindex:-1),Te=m(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":s.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return f.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${f.value}`),t}),le=m(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ue=m(()=>r.value.map((t,a)=>({index:a,opt:t,html:X.value(t),selected:!0,removeAtIndex:Pt,toggleOption:ne,tabindex:K.value}))),Re=m(()=>{if(H.value===0)return[];const{from:t,to:a}=Me.value;return e.options.slice(t,a).map((n,d)=>{const k=fe.value(n)===!0,I=We(n)===!0,R=t+d,B={clickable:!0,active:I,activeClass:Ie.value,manualFocus:!0,focused:!1,disable:k,tabindex:-1,dense:e.optionsDense,dark:_.value,role:"option","aria-selected":I===!0?"true":"false",id:`${l.targetUid.value}_${R}`,onClick:()=>{ne(n)}};return k!==!0&&(f.value===R&&(B.focused=!0),p.platform.is.desktop===!0&&(B.onMousemove=()=>{s.value===!0&&ve(R)})),{index:R,opt:n,html:X.value(n),label:$.value(n),selected:B.active,focused:B.focused,toggleOption:ne,setOptionIndex:ve,itemProps:B}})}),xe=m(()=>e.dropdownIcon!==void 0?e.dropdownIcon:p.iconSet.arrow.dropdown),Qe=m(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ie=m(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),U=m(()=>Ue(e.optionValue,"value")),$=m(()=>Ue(e.optionLabel,"label")),fe=m(()=>Ue(e.optionDisable,"disable")),Fe=m(()=>r.value.map(t=>U.value(t))),Ft=m(()=>{const t={onInput:ct,onChange:ze,onKeydown:it,onKeyup:at,onKeypress:ot,onFocus:ut,onClick(a){A===!0&&be(a)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=ze,t});re(r,t=>{O=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(x.value!==!0&&s.value!==!0||L.value!==!0)&&(P!==!0&&ge(),(x.value===!0||s.value===!0)&&me(""))},{immediate:!0}),re(()=>e.fillInput,ge),re(s,Je),re(H,Zt);function tt(t){return e.emitValue===!0?U.value(t):t}function Ke(t){if(t!==-1&&t<r.value.length)if(e.multiple===!0){const a=e.modelValue.slice();o("remove",{index:t,value:a.splice(t,1)[0]}),o("update:modelValue",a)}else o("update:modelValue",null)}function Pt(t){Ke(t),l.focus()}function lt(t,a){const n=tt(t);if(e.multiple!==!0){e.fillInput===!0&&ke($.value(t),!0,!0),o("update:modelValue",n);return}if(r.value.length===0){o("add",{index:0,value:n}),o("update:modelValue",e.multiple===!0?[n]:n);return}if(a===!0&&We(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();o("add",{index:d.length,value:n}),d.push(n),o("update:modelValue",d)}function ne(t,a){if(l.editable.value!==!0||t===void 0||fe.value(t)===!0)return;const n=U.value(t);if(e.multiple!==!0){a!==!0&&(ke(e.fillInput===!0?$.value(t):"",!0,!0),ae()),M.value!==null&&M.value.focus(),(r.value.length===0||Ae(U.value(r.value[0]),n)!==!0)&&o("update:modelValue",e.emitValue===!0?n:t);return}if((A!==!0||q.value===!0)&&l.focus(),ut(),r.value.length===0){const I=e.emitValue===!0?n:t;o("add",{index:0,value:I}),o("update:modelValue",e.multiple===!0?[I]:I);return}const d=e.modelValue.slice(),k=Fe.value.findIndex(I=>Ae(I,n));if(k!==-1)o("remove",{index:k,value:d.splice(k,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const I=e.emitValue===!0?n:t;o("add",{index:d.length,value:I}),d.push(I)}o("update:modelValue",d)}function ve(t){if(p.platform.is.desktop!==!0)return;const a=t!==-1&&t<H.value?t:-1;f.value!==a&&(f.value=a)}function Pe(t=1,a){if(s.value===!0){let n=f.value;do n=yt(n+t,-1,H.value-1);while(n!==-1&&n!==f.value&&fe.value(e.options[n])===!0);f.value!==n&&(ve(n),de(n),a!==!0&&e.useInput===!0&&e.fillInput===!0&&De(n>=0?$.value(e.options[n]):D,!0))}}function Dt(t,a){const n=d=>Ae(U.value(d),t);return e.options.find(n)||a.find(n)||t}function Ue(t,a){const n=t!==void 0?t:a;return typeof n=="function"?n:d=>d!==null&&typeof d=="object"&&n in d?d[n]:d}function We(t){const a=U.value(t);return Fe.value.find(n=>Ae(n,a))!==void 0}function ut(t){e.useInput===!0&&M.value!==null&&(t===void 0||M.value===t.target&&t.target.value===b.value)&&M.value.select()}function nt(t){Sl(t,27)===!0&&s.value===!0&&(be(t),ae(),ge()),o("keyup",t)}function at(t){const{value:a}=t.target;if(t.keyCode!==void 0){nt(t);return}if(t.target.value="",h!==null&&(clearTimeout(h),h=null),w!==null&&(clearTimeout(w),w=null),ge(),typeof a=="string"&&a.length!==0){const n=a.toLocaleLowerCase(),d=I=>{const R=e.options.find(B=>I.value(B).toLocaleLowerCase()===n);return R===void 0?!1:(r.value.indexOf(R)===-1?ne(R):ae(),!0)},k=I=>{d(U)!==!0&&(d($)===!0||I===!0||me(a,!0,()=>k(!0)))};k()}else l.clearValue(t)}function ot(t){o("keypress",t)}function it(t){if(o("keydown",t),hl(t)===!0)return;const a=S.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),n=t.shiftKey!==!0&&e.multiple!==!0&&(f.value!==-1||a===!0);if(t.keyCode===27){Xe(t);return}if(t.keyCode===9&&n===!1){Se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&s.value===!1){oe(t),he();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&S.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Ke(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&o("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof S.value!="string"||S.value.length===0)&&(oe(t),f.value=-1,Pe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ce.value!==void 0&&(oe(t),f.value=Math.max(-1,Math.min(H.value,f.value+(t.keyCode===33?-1:1)*ce.value.view)),Pe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(oe(t),Pe(t.keyCode===38?-1:1,e.multiple));const d=H.value;if((F===void 0||z<Date.now())&&(F=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||F.length!==0)){s.value!==!0&&he(t);const k=t.key.toLocaleLowerCase(),I=F.length===1&&F[0]===k;z=Date.now()+1500,I===!1&&(oe(t),F+=k);const R=new RegExp("^"+F.split("").map(Ge=>Hl.indexOf(Ge)!==-1?"\\"+Ge:Ge).join(".*"),"i");let B=f.value;if(I===!0||B<0||R.test($.value(e.options[B]))!==!0)do B=yt(B+1,-1,d-1);while(B!==f.value&&(fe.value(e.options[B])===!0||R.test($.value(e.options[B]))!==!0));f.value!==B&&Y(()=>{ve(B),de(B),B>=0&&e.useInput===!0&&e.fillInput===!0&&De($.value(e.options[B]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||F!=="")&&(t.keyCode!==9||n===!1))){if(t.keyCode!==9&&oe(t),f.value!==-1&&f.value<d){ne(e.options[f.value]);return}if(a===!0){const k=(I,R)=>{if(R){if(Vt(R)!==!0)return}else R=e.newValueMode;if(ke("",e.multiple!==!0,!0),I==null)return;(R==="toggle"?ne:lt)(I,R==="add-unique"),e.multiple!==!0&&(M.value!==null&&M.value.focus(),ae())};if(e.onNewValue!==void 0?o("newValue",S.value,k):k(S.value),e.multiple!==!0)return}s.value===!0?Se():l.innerLoading.value!==!0&&he()}}function rt(){return A===!0?Ce.value:G.value!==null&&G.value.contentEl!==null?G.value.contentEl:void 0}function Ht(){return rt()}function Nt(){return e.hideSelected===!0?[]:u["selected-item"]!==void 0?ue.value.map(t=>u["selected-item"](t)).slice():u.selected!==void 0?[].concat(u.selected()):e.useChips===!0?ue.value.map((t,a)=>y(Tt,{key:"option-"+a,removable:l.editable.value===!0&&fe.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:K.value,onRemove(){t.removeAtIndex(a)}},()=>y("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[y("span",{[Le.value===!0?"innerHTML":"textContent"]:N.value})]}function st(){if(T.value===!0)return u["no-option"]!==void 0?u["no-option"]({inputValue:S.value}):void 0;const t=u.option!==void 0?u.option:n=>y(Bt,{key:n.index,...n.itemProps},()=>y(_t,()=>y(qt,()=>y("span",{[n.html===!0?"innerHTML":"textContent"]:n.label}))));let a=je("div",Re.value.map(t));return u["before-options"]!==void 0&&(a=u["before-options"]().concat(a)),gl(u["after-options"],a)}function $t(t,a){const n=a===!0?{...Te.value,...l.splitAttrs.attributes.value}:void 0,d={ref:a===!0?M:void 0,key:"i_t",class:V.value,style:e.inputStyle,value:S.value!==void 0?S.value:"",type:"search",...n,id:a===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Ft.value};return t!==!0&&A===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),y("input",d)}function ct(t){h!==null&&(clearTimeout(h),h=null),w!==null&&(clearTimeout(w),w=null),!(t&&t.target&&t.target.qComposing===!0)&&(De(t.target.value||""),P=!0,D=S.value,l.focused.value!==!0&&(A!==!0||q.value===!0)&&l.focus(),e.onFilter!==void 0&&(h=setTimeout(()=>{h=null,me(S.value)},e.inputDebounce)))}function De(t,a){S.value!==t&&(S.value=t,a===!0||e.inputDebounce===0||e.inputDebounce==="0"?o("inputValue",t):w=setTimeout(()=>{w=null,o("inputValue",t)},e.inputDebounce))}function ke(t,a,n){P=n!==!0,e.useInput===!0&&(De(t,!0),(a===!0||n!==!0)&&(D=t),a!==!0&&me(t))}function me(t,a,n){if(e.onFilter===void 0||a!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?o("filterAbort"):(l.innerLoading.value=!0,i.value=!0),t!==""&&e.multiple!==!0&&r.value.length!==0&&P!==!0&&t===$.value(r.value[0])&&(t="");const d=setTimeout(()=>{s.value===!0&&(s.value=!1)},10);v!==null&&clearTimeout(v),v=d,o("filter",t,(k,I)=>{(a===!0||l.focused.value===!0)&&v===d&&(clearTimeout(v),typeof k=="function"&&k(),i.value=!1,Y(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(a===!0?s.value===!0&&ae():s.value===!0?Je(!0):s.value=!0),typeof I=="function"&&Y(()=>{I(c)}),typeof n=="function"&&Y(()=>{n(c)})}))},()=>{l.focused.value===!0&&v===d&&(clearTimeout(v),l.innerLoading.value=!1,i.value=!1),s.value===!0&&(s.value=!1)})}function jt(){return y(pl,{ref:G,class:C.value,style:e.popupContentStyle,modelValue:s.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&T.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:_.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Qe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...le.value,onScrollPassive:Ve,onBeforeShow:ft,onBeforeHide:Qt,onShow:Kt},st)}function Qt(t){vt(t),Se()}function Kt(){pe()}function Ut(t){be(t),M.value!==null&&M.value.focus(),q.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Wt(t){be(t),Y(()=>{q.value=!1})}function Jt(){const t=[y(Ll,{class:`col-auto ${l.fieldClass.value}`,...g.value,for:l.targetUid.value,dark:_.value,square:!0,loading:i.value,itemAligned:!1,filled:!0,stackLabel:S.value.length!==0,...l.splitAttrs.listeners.value,onFocus:Ut,onBlur:Wt},{...u,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return s.value===!0&&t.push(y("div",{ref:Ce,class:C.value+" scroll",style:e.popupContentStyle,...le.value,onClick:Xe,onScrollPassive:Ve},st())),y(xl,{ref:ee,modelValue:x.value,position:e.useInput===!0?"top":void 0,transitionShow:J,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ft,onBeforeHide:Gt,onHide:Xt,onShow:Yt},()=>y("div",{class:"q-select__dialog"+(_.value===!0?" q-select__dialog--dark q-dark":"")+(q.value===!0?" q-select__dialog--focused":"")},t))}function Gt(t){vt(t),ee.value!==null&&ee.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Xt(t){ae(),l.focused.value===!1&&o("blur",t),ge()}function Yt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&M.value!==null&&M.value!==t&&M.value.focus(),pe()}function Se(){x.value!==!0&&(f.value=-1,s.value===!0&&(s.value=!1),l.focused.value===!1&&(v!==null&&(clearTimeout(v),v=null),l.innerLoading.value===!0&&(o("filterAbort"),l.innerLoading.value=!1,i.value=!1)))}function he(t){l.editable.value===!0&&(A===!0?(l.onControlFocusin(t),x.value=!0,Y(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?me(S.value):(T.value!==!0||u["no-option"]!==void 0)&&(s.value=!0))}function ae(){x.value=!1,Se()}function ge(){e.useInput===!0&&ke(e.multiple!==!0&&e.fillInput===!0&&r.value.length!==0&&$.value(r.value[0])||"",!0,!0)}function Je(t){let a=-1;if(t===!0){if(r.value.length!==0){const n=U.value(r.value[0]);a=e.options.findIndex(d=>Ae(U.value(d),n))}Q(a)}ve(a)}function Zt(t,a){s.value===!0&&l.innerLoading.value===!1&&(Q(-1,!0),Y(()=>{s.value===!0&&l.innerLoading.value===!1&&(t>a?Q():Je(!0))}))}function dt(){x.value===!1&&G.value!==null&&G.value.updatePosition()}function ft(t){t!==void 0&&be(t),o("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function vt(t){t!==void 0&&be(t),o("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function mt(){A=p.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?u["no-option"]!==void 0||e.onFilter!==void 0||T.value===!1:!0),J=p.platform.is.ios===!0&&A===!0&&e.useInput===!0?"fade":e.transitionShow}return vl(mt),ml(dt),mt(),kt(()=>{h!==null&&clearTimeout(h),w!==null&&clearTimeout(w)}),Object.assign(c,{showPopup:he,hidePopup:ae,removeAtIndex:Ke,add:lt,toggleOption:ne,getOptionIndex:()=>f.value,setOptionIndex:ve,moveOptionSelection:Pe,filter:me,updateMenuPosition:dt,updateInputValue:ke,isOptionSelected:We,getEmittingOptionValue:tt,isOptionDisabled:(...t)=>fe.value.apply(null,t)===!0,getOptionValue:(...t)=>U.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(l,{innerValue:r,fieldClass:m(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:Ee,targetRef:M,hasValue:L,showPopup:he,floatingLabel:m(()=>e.hideSelected!==!0&&L.value===!0||typeof S.value=="number"||S.value.length!==0||wt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(x.value===!0||T.value!==!0||u["no-option"]!==void 0))return A===!0?Jt():jt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{ge(),Se()})},onClick(t){if(Xe(t),A!==!0&&s.value===!0){Se(),M.value!==null&&M.value.focus();return}he(t)}},getControl:t=>{const a=Nt(),n=t===!0||x.value!==!0||A!==!0;if(e.useInput===!0)a.push($t(t,n));else if(l.editable.value===!0){const k=n===!0?Te.value:void 0;a.push(y("input",{ref:n===!0?M:void 0,key:"d_t",class:"q-select__focus-target",id:n===!0?l.targetUid.value:void 0,value:N.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...k,onKeydown:it,onKeyup:nt,onKeypress:ot})),n===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&a.push(y("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:at}))}if(te.value!==void 0&&e.disable!==!0&&Fe.value.length!==0){const k=Fe.value.map(I=>y("option",{value:I,selected:!0}));a.push(y("select",{class:"hidden",name:te.value,multiple:e.multiple},k))}const d=e.useInput===!0||n!==!0?void 0:l.splitAttrs.attributes.value;return y("div",{class:"q-field__native row items-center",...d,...l.splitAttrs.listeners.value},a)},getInnerAppend:()=>e.loading!==!0&&i.value!==!0&&e.hideDropdownIcon!==!0?[y(He,{class:"q-select__dropdown-icon"+(s.value===!0?" rotate-180":""),name:xe.value})]:null}),zt(l)}});const jl={__name:"HelpTooltip",props:["helpText"],setup(e){const u=E(!1),o=e,c=_l(),p=c.platform.is.mobile;return(s,x)=>(se(),qe(bl,{size:"sm",flat:"",round:"",color:u.value?"red":Ne(c).dark.isActive?"white":"black",onClick:x[1]||(x[1]=f=>u.value=!u.value)},{default:W(()=>[Z(Ne(Lt),{icon:u.value?"gg:close-o":"clarity:help-line",style:{"font-size":"20px"}},null,8,["icon"]),Z(At,{modelValue:u.value,"onUpdate:modelValue":x[0]||(x[0]=f=>u.value=f),"no-parent-event":!!Ne(p),class:"text-body2","transition-show":"scale","transition-hide":"scale","max-width":"370px"},{default:W(()=>[ye("span",null,ie(o.helpText),1)]),_:1},8,["modelValue","no-parent-event"])]),_:1},8,["color"]))}},Ql={style:{"white-space":"pre-line"}},tu={__name:"OptionSelecter2",props:yl(["optionItem","questionLabel","helpText"],{optSelectedObj:{},optSelectedObjModifiers:{},optSelectedId:{},optSelectedIdModifiers:{}}),emits:["update:optSelectedObj","update:optSelectedId"],setup(e){const u=e,o=E(null),c=gt(e,"optSelectedObj"),p=gt(e,"optSelectedId");function s(){var f;c.value=o.value,p.value=(f=o.value)==null?void 0:f.OPTION_ID}function x(){p.value&&(c.value=u.optionItem.find(f=>f.OPTION_ID==p.value),o.value=c.value)}return wl(()=>{console.log("Option Selecter is mounted"),x()}),(f,S)=>{var q;return se(),qe($l,{behavior:"menu",filled:"",modelValue:o.value,"onUpdate:modelValue":[S[0]||(S[0]=i=>o.value=i),S[1]||(S[1]=i=>s())],"stack-label":!!((q=c.value)!=null&&q.OPTION_ID),options:u.optionItem,label:u.questionLabel,color:"teal","options-selected-class":"text-deep-orange","option-label":"OPTION_LABEL"},{option:W(i=>[Z(Bt,Cl(Ol(i.itemProps)),{default:W(()=>[Z(_t,null,{default:W(()=>[Z(qt,{lines:"2"},{default:W(()=>{var h,w,O,A;return[Z(Ct,{BGCOLOR:(h=i==null?void 0:i.opt)==null?void 0:h.OPTION_COLOR,EMOJI:(w=i==null?void 0:i.opt)==null?void 0:w.OPTION_EMOJI,LABEL:(O=i==null?void 0:i.opt)==null?void 0:O.OPTION_LABEL,SCORE:(A=i==null?void 0:i.opt)==null?void 0:A.OPTION_VALUE},null,8,["BGCOLOR","EMOJI","LABEL","SCORE"]),ye("span",Ql,ie(i.opt.OPTION_DESC),1)]}),_:2},1024)]),_:2},1024)]),_:2},1040)]),selected:W(()=>{var i,h,w,O;return[c.value?(se(),qe(Ct,{key:0,BGCOLOR:(i=c.value)==null?void 0:i.OPTION_COLOR,EMOJI:(h=c.value)==null?void 0:h.OPTION_EMOJI,LABEL:(w=c.value)==null?void 0:w.OPTION_LABEL,SCORE:(O=c.value)==null?void 0:O.OPTION_VALUE},null,8,["BGCOLOR","EMOJI","LABEL","SCORE"])):bt("",!0)]}),default:W(()=>[u.helpText?(se(),qe(jl,{key:0,helpText:u.helpText},null,8,["helpText"])):bt("",!0)]),_:1},8,["modelValue","stack-label","options","label"])}}};export{Tt as Q,Ct as _,Zl as a,tu as b,eu as c,Dl as d,jl as e,$l as f,Pl as u};