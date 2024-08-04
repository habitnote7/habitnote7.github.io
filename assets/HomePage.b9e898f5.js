import{Q as se}from"./QPage.3cd11fa5.js";import{C as c,M as F,G as h,f as n,H as w,K as ae,E as y,I as O,P as B,m as z,c as s,h as l,v as be,r as Q,ab as ke,w as E,k as pe,o as G,l as ue,g as j,aa as oe,u as xe,aE as we,W as J,aF as Ce,aG as Se,z as qe,A as $e,L as ce,R as Ie,D as b,J as ne,O as L,F as K,aH as U,an as De,q as de,aI as Te,X as Ae,aJ as Be,aK as Ne,aL as He}from"./index.be3bd688.js";import{I as W}from"./iconify.00d495d3.js";import{Q as Me}from"./QCardSection.84ae62cc.js";import{u as Oe,a as Ee,b as Fe,c as Qe,T as Le}from"./use-panel.e2c6f627.js";import{u as ve,a as me}from"./use-dark.43c996a0.js";import{a as ze,h as Re}from"./moment.87cdb430.js";import{j as R,_ as Pe,K as ie,Q as Ve,k as he,i as Ye,L as We}from"./rtl.c4baed12.js";import{u as fe,Q as Ge}from"./AllHabitStore.972010de.js";import{u as P}from"./use-quasar.8d2f2e0f.js";import{Q as je}from"./OptionSelecter2.2006bd27.js";import{u as ge}from"./sliderStore.79c87a5d.js";import{_ as Je,u as Ke,a as Ue}from"./CheckMarkPage2.a5b6f614.js";import{s as Xe}from"./notification.2442c3fd.js";import Ze from"./DashBoardPage.a9b2b49d.js";import"./scroll.0d59964f.js";import"./QScrollObserver.979f8984.js";import"./uid.68c9ce75.js";import"./apOptionQuery.2c1eaff0.js";import"./QInput.82cd52d4.js";import"./QCard.75c1762d.js";import"./QTime.e556c071.js";const et={class:"q-ma-sm"},tt={__name:"ShowFirstTime",setup(e){return(o,a)=>(c(),F(se,{class:"flex flex-center"},{default:h(()=>[n(Me,{class:"text-center"},{default:h(()=>[n(w(W),{icon:"simple-icons:progress",style:{width:"200px",height:"200px"},class:ae(o.$q.dark.isActive?"text-grey-9 ":"text-grey-6")},null,8,["class"]),y("div",{class:ae(["text-h5 text-weight-bold",o.$q.dark.isActive?"text-grey-9 ":"text-grey-6"])}," Create Your First Habit. ",2),y("div",et,[n(O,{color:"primary",to:{name:"addhabit"}},{default:h(()=>[n(w(W),{icon:"material-symbols:add",style:{"font-size":"20px"}}),B(" \xA0 Add habit ")]),_:1})])]),_:1})]),_:1}))}};var at=z({name:"QCarouselSlide",props:{...Oe,imgSrc:String},setup(e,{slots:o}){const a=s(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>l("div",{class:"q-carousel__slide",style:a.value},be(o.default))}});let M=0;const ot={fullscreen:Boolean,noRouteFullscreenExit:Boolean},nt=["update:fullscreen","fullscreen"];function it(){const e=j(),{props:o,emit:a,proxy:t}=e;let i,d,u;const r=Q(!1);ke(e)===!0&&E(()=>t.$route.fullPath,()=>{o.noRouteFullscreenExit!==!0&&f()}),E(()=>o.fullscreen,C=>{r.value!==C&&v()}),E(r,C=>{a("update:fullscreen",C),a("fullscreen",C)});function v(){r.value===!0?f():p()}function p(){r.value!==!0&&(r.value=!0,u=t.$el.parentNode,u.replaceChild(d,t.$el),document.body.appendChild(t.$el),M++,M===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:f},oe.add(i))}function f(){r.value===!0&&(i!==void 0&&(oe.remove(i),i=void 0),u.replaceChild(t.$el,d),r.value=!1,M=Math.max(0,M-1),M===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),t.$el.scrollIntoView!==void 0&&setTimeout(()=>{t.$el.scrollIntoView()})))}return pe(()=>{d=document.createElement("span")}),G(()=>{o.fullscreen===!0&&p()}),ue(f),Object.assign(t,{toggleFullscreen:v,setFullscreen:p,exitFullscreen:f}),{inFullscreen:r,toggleFullscreen:v}}const lt=["top","right","bottom","left"],rt=["regular","flat","outline","push","unelevated"];var st=z({name:"QCarousel",props:{...ve,...Ee,...ot,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>rt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>lt.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...nt,...Fe],setup(e,{slots:o}){const{proxy:{$q:a}}=j(),t=me(e,a);let i=null,d;const{updatePanelsList:u,getPanelContent:r,panelDirectives:v,goToPanel:p,previousPanel:f,nextPanel:C,getEnabledPanels:$,panelIndex:q}=Qe(),{inFullscreen:A}=it(),N=s(()=>A.value!==!0&&e.height!==void 0?{height:e.height}:{}),g=s(()=>e.vertical===!0?"vertical":"horizontal"),x=s(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(A.value===!0?" fullscreen":"")+(t.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${g.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${D.value}`:"")),I=s(()=>{const k=[e.prevIcon||a.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||a.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&a.lang.rtl===!0?k.reverse():k}),m=s(()=>e.navigationIcon||a.iconSet.carousel.navigationIcon),_=s(()=>e.navigationActiveIcon||m.value),D=s(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),T=s(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));E(()=>e.modelValue,()=>{e.autoplay&&V()}),E(()=>e.autoplay,k=>{k?V():i!==null&&(clearTimeout(i),i=null)});function V(){const k=we(e.autoplay)===!0?Math.abs(e.autoplay):5e3;i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,k>=0?C():f()},k)}G(()=>{e.autoplay&&V()}),ue(()=>{i!==null&&clearTimeout(i)});function X(k,H){return l("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${k} q-carousel__navigation--${D.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[l("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},$().map(H))])}function ye(){const k=[];if(e.navigation===!0){const H=o["navigation-icon"]!==void 0?o["navigation-icon"]:S=>l(O,{key:"nav"+S.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${S.active===!0?"":"in"}active`,...S.btnProps,onClick:S.onClick}),Y=d-1;k.push(X("buttons",(S,Z)=>{const ee=S.props.name,te=q.value===Z;return H({index:Z,maxIndex:Y,name:ee,active:te,btnProps:{icon:te===!0?_.value:m.value,size:"sm",...T.value},onClick:()=>{p(ee)}})}))}else if(e.thumbnails===!0){const H=e.controlColor!==void 0?` text-${e.controlColor}`:"";k.push(X("thumbnails",Y=>{const S=Y.props;return l("img",{key:"tmb#"+S.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${S.name===e.modelValue?"":"in"}active`+H,src:S.imgSrc||S["img-src"],onClick:()=>{p(S.name)}})}))}return e.arrows===!0&&q.value>=0&&((e.infinite===!0||q.value>0)&&k.push(l("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${g.value} absolute flex flex-center`},[l(O,{icon:I.value[0],...T.value,onClick:f})])),(e.infinite===!0||q.value<d-1)&&k.push(l("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${g.value} absolute flex flex-center`},[l(O,{icon:I.value[1],...T.value,onClick:C})]))),J(o.control,k)}return()=>(d=u(o),l("div",{class:x.value,style:N.value},[xe("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>v.value)].concat(ye())))}});const ut=[l("g",[l("path",{fill:"none",stroke:"currentColor","stroke-width":"5","stroke-miterlimit":"10",d:"M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"}),l("clipPath",{id:"uil-hourglass-clip1"},[l("rect",{x:"15",y:"20",width:"70",height:"25"},[l("animate",{attributeName:"height",from:"25",to:"0",dur:"1s",repeatCount:"indefinite",values:"25;0;0",keyTimes:"0;0.5;1"}),l("animate",{attributeName:"y",from:"20",to:"45",dur:"1s",repeatCount:"indefinite",values:"20;45;45",keyTimes:"0;0.5;1"})])]),l("clipPath",{id:"uil-hourglass-clip2"},[l("rect",{x:"15",y:"55",width:"70",height:"25"},[l("animate",{attributeName:"height",from:"0",to:"25",dur:"1s",repeatCount:"indefinite",values:"0;25;25",keyTimes:"0;0.5;1"}),l("animate",{attributeName:"y",from:"80",to:"55",dur:"1s",repeatCount:"indefinite",values:"80;55;55",keyTimes:"0;0.5;1"})])]),l("path",{d:"M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z","clip-path":"url(#uil-hourglass-clip1)",fill:"currentColor"}),l("path",{d:"M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z","clip-path":"url(#uil-hourglass-clip2)",fill:"currentColor"}),l("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"180 50 50",repeatCount:"indefinite",dur:"1s",values:"0 50 50;0 50 50;180 50 50",keyTimes:"0;0.7;1"})])];var _e=z({name:"QSpinnerHourglass",props:Ce,setup(e){const{cSize:o,classes:a}=Se(e);return()=>l("svg",{class:a.value,width:o.value,height:o.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},ut)}});const ct=["top","middle","bottom"];var dt=z({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>ct.includes(e)}},setup(e,{slots:o}){const a=s(()=>e.align!==void 0?{verticalAlign:e.align}:null),t=s(()=>{const i=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(i!==void 0?` text-${i}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>l("div",{class:t.value,style:a.value,role:"status","aria-label":e.label},J(o.default,e.label!==void 0?[e.label]:[]))}});const vt={xs:2,sm:4,md:6,lg:10,xl:14};function le(e,o,a){return{transform:o===!0?`translateX(${a.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var mt=z({name:"QLinearProgress",props:{...ve,...qe,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:o}){const{proxy:a}=j(),t=me(e,a.$q),i=$e(e,vt),d=s(()=>e.indeterminate===!0||e.query===!0),u=s(()=>e.reverse!==e.query),r=s(()=>({...i.value!==null?i.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=s(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),p=s(()=>le(e.buffer!==void 0?e.buffer:1,u.value,a.$q)),f=s(()=>`with${e.instantFeedback===!0?"out":""}-transition`),C=s(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${f.value} q-linear-progress__track--${t.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),$=s(()=>le(d.value===!0?1:e.value,u.value,a.$q)),q=s(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${f.value} q-linear-progress__model--${d.value===!0?"in":""}determinate`),A=s(()=>({width:`${e.value*100}%`})),N=s(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${f.value}`);return()=>{const g=[l("div",{class:C.value,style:p.value}),l("div",{class:q.value,style:$.value})];return e.stripe===!0&&d.value===!1&&g.push(l("div",{class:N.value,style:A.value})),l("div",{class:v.value,style:r.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},J(o.default,g))}}});const ht={class:"row"},ft={class:"absolute-full flex flex-center"},gt={key:0},_t=y("span",null,"Add New CheckMark Entry. ",-1),yt={key:0,class:"col-12 q-pt-sm",align:"center"},bt={key:0,class:"col-12 q-py-sm q-px-xl"},kt={__name:"DetailedCheckShow",props:["habitDetails"],emits:["openCheckMark"],setup(e,{expose:o,emit:a}){const t=e,i=a,d=ge(),u=Q([]),r=Q(!1);async function v(){var g,x,I,m;r.value=!0,u.value=await We((g=t==null?void 0:t.habitDetails)==null?void 0:g.HABIT_ID,d.habitForDate);for(let _=0;_<u.value.length;_++){const D=u.value[_];D.OPTION_ID&&((x=t==null?void 0:t.habitDetails)==null?void 0:x.optionDetails)&&((I=t==null?void 0:t.habitDetails)==null?void 0:I.optionDetails.length)>0&&(D.OPTION_DETAILS=(m=t==null?void 0:t.habitDetails)==null?void 0:m.optionDetails.find(T=>T.OPTION_ID==D.OPTION_ID))}r.value=!1}o({getCheckMarkDeatils:v}),G(()=>{console.log("MinimalCheckShow is mounted"),v()});const p=ce(),f=Ie(),C=s(()=>p.path);function $(g){f.push({path:`/habit/${g}`})}function q(g){let x={habitDetails:Object.assign({},t==null?void 0:t.habitDetails),forDate:d.habitForDate,CMT_ID:(g==null?void 0:g.CMT_ID)||null,CMDetails:Object.assign({},g)||null};i("openCheckMark",x)}const A=P(),N=A.platform.is.mobile;return(g,x)=>{var I;return c(),b("div",null,[n(Ye,{"active-class":w(A).dark.isActive?"bg-grey-9 text-green-3":"bg-grey-4 text-green-9",active:C.value==`/habit/${(I=t==null?void 0:t.habitDetails)==null?void 0:I.HABIT_ID}`,class:"q-ma-sm q-pa-sm",style:{"border-radius":"8px"}},{default:h(()=>[n(R,null,{default:h(()=>[y("div",ht,[n(R,{avatar:""},{default:h(()=>{var m,_;return[y("div",{onClick:x[0]||(x[0]=D=>{var T;return $((T=t==null?void 0:t.habitDetails)==null?void 0:T.HABIT_ID)})},[n(Pe,{BGCOLOR:(m=t==null?void 0:t.habitDetails)==null?void 0:m.COLOR,EMOJI:(_=t==null?void 0:t.habitDetails)==null?void 0:_.EMOJI,SIZE:w(N)?"sm":"md",isRounded:!0},null,8,["BGCOLOR","EMOJI","SIZE"])])]}),_:1}),n(R,null,{default:h(()=>[y("div",null,[n(ie,{lines:"2",onClick:x[1]||(x[1]=m=>{var _;return $((_=t==null?void 0:t.habitDetails)==null?void 0:_.HABIT_ID)}),class:"text-h6"},{default:h(()=>{var m;return[B(ne((m=t==null?void 0:t.habitDetails)==null?void 0:m.HABIT_LABEL),1)]}),_:1}),n(ie,{class:"q-pr-sm",lines:"2",style:{"white-space":"pre-line"}},{default:h(()=>[n(mt,{size:"17px",value:.5,color:"accent",stripe:"",rounded:""},{default:h(()=>[y("div",ft,[n(dt,{color:"white","text-color":"accent",label:"50%"})])]),_:1})]),_:1})])]),_:1}),n(R,{side:""},{default:h(()=>{var m;return[u.value.length<((m=t==null?void 0:t.habitDetails)==null?void 0:m.NO_OF_ENTRIES_PERDAY)?(c(),b("div",gt,[n(je,{clickable:"",onClick:x[2]||(x[2]=_=>q()),color:"primary",icon:"add",outline:""},{default:h(()=>[B("Add "),n(Ve,null,{default:h(()=>{var _;return[_t,y("span",null,[B(" You can add "),y("b",null,ne(((_=t==null?void 0:t.habitDetails)==null?void 0:_.NO_OF_ENTRIES_PERDAY)-u.value.length),1),B(" more entry")])]}),_:1})]),_:1})])):L("",!0)]}),_:1}),r.value?(c(),b("div",yt,[n(_e,{color:"light-green-13",size:"2em"})])):(c(!0),b(K,{key:1},U(u.value,(m,_)=>(c(),b("div",{key:m.CMT_ID,class:"col-12 row q-pt-md"},[n(Je,{habitDetails:t==null?void 0:t.habitDetails,checkmark:m,onGoToEdit:D=>q(m),class:"q-pb-sm"},null,8,["habitDetails","checkmark","onGoToEdit"]),_!=u.value.length-1?(c(),b("div",bt,[n(he,{spaced:"",inset:""})])):L("",!0)]))),128))])]),_:1})]),_:1},8,["active-class","active"])])}}},pt={key:0,class:"col-12 q-pt-sm",align:"center"},xt={align:"center",class:"q-ma-lg"},wt={key:1},Ct={__name:"HabitList",setup(e){const o=Ke(),a=fe(),t=P(),i=Q({});function d(f){console.log("dataToPass",f),o.openCheckMarkDailog(f)}function u(){i.value[`HABIT${o.forHabitId}`].getCheckMarkDeatils()}const r=s(()=>({height:t.screen.height-52+"px"})),v={right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},p={right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2};return(f,C)=>(c(),F(ze,{style:De(r.value),"thumb-style":v,"bar-style":p,class:"fit"},{default:h(()=>[w(a).isHabitLoading?(c(),b("div",pt,[n(_e,{color:"light-green-13",size:"2em"})])):L("",!0),n(Ge,{class:"q-py-md"},{default:h(()=>[(c(!0),b(K,null,U(w(a).allHabits,$=>(c(),b("div",{key:$.HABIT_ID},[n(kt,{habitDetails:$,ref_for:!0,ref:q=>i.value[`HABIT${$.HABIT_ID}`]=q,onOpenCheckMark:d},null,8,["habitDetails"]),n(he)]))),128)),y("div",xt,[n(O,{color:"primary",to:{name:"addhabit"},"no-caps":""},{default:h(()=>[n(w(W),{icon:"fluent:add-12-filled",style:{"font-size":"20px"}}),B(" \xA0 Add New habit ")]),_:1})])]),_:1}),w(o).addCMDailog?(c(),b("div",wt,[n(Ue,{onCloseCM:u})])):L("",!0)]),_:1},8,["style"]))}},re={__name:"SwipablePage",setup(e){const o=P(),a=ge(),t=Q("");function i({evt:u,...r}){if(t.value=r,r.direction=="left")if(a.habitForDate<Re().format("YYYY-MM-DD"))a.goToNextslide(1);else{let v=Math.floor(Math.random()*(d.length-0));Xe("Eui",d[v])}else r.direction=="right"&&a.goToNextslide(-1)}const d=["Hey, You can not swipe into future !!!","A man cannot look into future !!!","No One Know the Future except the Almighty !!!","A man should know his limits","You can't swipe left into tomorrow!","A man can't peek into the next week!","Only the omniscient knows the next hour!","A man must understand his boundaries!","You can't swipe right into the next decade!","A man can't gaze into the next year!","Only the all-knowing can predict the next minute!","A man must grasp his limitations!","You can't swipe left into the next millennium!","A man can't foresee the next month!","Only the supreme being knows the next second!","A man must acknowledge his constraints!","Invest in your present to secure your tomorrow.","Cultivate your virtues today, so your future can be adorned with kindness.","Work diligently today to construct your destiny.","Nurture your positive traits now, ensuring your future is filled with joy.","Toil in the present to ensure your future is bright.","Develop your strengths today, so your future can be enriched with success.","Strive in the here and now to ensure your future is prosperous.","Focus on your growth today, so your future can be abundant with achievements.","Work on your character today, so your future can be filled with integrity.","Invest in your well-being today, so your future can be overflowing with health.","Work on your skills today, so your future can be filled with opportunities.","Dedicate yourself to your goals today, so your future can be shaped with purpose.","Work on your wisdom today, so your future can be guided by insight.","Focus on your dreams today, so your future can be painted with hope.","Work on your resilience today, so your future can be fortified with courage.","Invest in your education today, so your future can be enriched with knowledge.","Work on your relationships today, so your future can be woven with love.","Dedicate yourself to your passions today, so your future can be illuminated with passion.","Work on your creativity today, so your future can be adorned with innovation.","Focus on your values today, so your future can be anchored in integrity."];return(u,r)=>(c(),b("div",null,[de((c(),F(st,{modelValue:w(a).mySlideName,"onUpdate:modelValue":r[1]||(r[1]=v=>w(a).mySlideName=v),"transition-prev":"slide-right","transition-next":"slide-left",animated:"","control-color":"primary",class:"rounded-borders",height:w(o).screen.height-52+"px"},{default:h(()=>[(c(!0),b(K,null,U(w(a).allSlidesName,v=>(c(),F(at,{name:v,class:"column no-wrap flex-center q-pa-none",key:v},{default:h(()=>[n(Ct,{onNumOfHabit:r[0]||(r[0]=p=>console.log(""))})]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","height"])),[[Le,i,void 0,{mouse:!0,horizontal:!0}]])]))}};const St=e=>(Ne("data-v-632f2c34"),e=e(),He(),e),qt={key:0},$t={key:1},It={class:"lt-md"},Dt={key:0},Tt={class:"row gt-sm"},At={class:"col-12 col-md-4 myBorder"},Bt={class:"col-8"},Nt={key:0},Ht={key:1},Mt=St(()=>y("div",{class:"q-ma-lg text-grey-5"},[y("small",null,"Version : 0.2")],-1)),Ot={__name:"HomePage",setup(e){const o=fe();o.allHabits.length==0&&o.getAllHabits(),P();const a=ce(),t=s(()=>a.name);return(i,d)=>{const u=Ae("router-view");return c(),F(se,{class:""},{default:h(()=>[w(o).numOfAllHabits==0?(c(),b("div",qt,[n(tt)])):(c(),b("div",$t,[y("div",It,[de(y("div",null,[n(re)],512),[[Be,t.value=="home"]]),t.value!="home"?(c(),b("div",Dt,[n(u)])):L("",!0)]),y("div",Tt,[y("div",At,[n(re)]),y("div",Bt,[t.value=="home"?(c(),b("div",Nt,[n(Ze)])):(c(),b("div",Ht,[n(u)]))])]),Mt]))]),_:1})}}};var ia=Te(Ot,[["__scopeId","data-v-632f2c34"]]);export{ia as default};