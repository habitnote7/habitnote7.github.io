import{a6 as Me,F as ye,l as fe,G as Ue,P as ve,R as w,S as k,a2 as Ye,a1 as pe,Q as X,i as He,j as re,_ as Ve,K as Ae,k as ge,Y as we,Z as ke,$ as Le,a0 as Be,U as be,V as he,W as Fe,X as Ge}from"./rtl.3aed263d.js";import{r as C,y as U,L as xe,R as qe,o as Qe,c as $e,C as i,D as c,P as M,J as R,E as ee,f as s,G as r,F as _e,H as L,I as $,M as te,O as y,K as Je,an as ze,aH as We}from"./index.431dcb33.js";import{a as Ke,b as ie,c as Ze}from"./OptionSelecter2.ab9ae1ed.js";import{Q as f}from"./QInput.665a9d0a.js";import{h as T,a as je}from"./moment.f201de8e.js";import{Q as Xe}from"./QCard.9cbea35f.js";import"./iconify.4d43847a.js";import{u as et}from"./use-quasar.e647a0d9.js";import"./QTime.5af0cc2c.js";import"./use-dark.55495a85.js";import"./scroll.c8893e35.js";import"./uid.3d1f5a39.js";import"./QScrollObserver.fe79d156.js";const tt={class:"q-pa-md q-gutter-sm"},lt={class:"text-h6"},at={key:0,class:"row q-col-gutter-sm q-py-sm justify-center q-pa-sm"},ot={key:0,class:"q-ma-sm"},st={key:1,class:"q-ma-sm"},Et={key:0,class:"q-ma-sm"},Tt={key:1,class:"q-ma-sm"},nt={key:2,class:""},It={key:3,class:""},Ct={__name:"CheckMarkPage",setup(rt){const J=C(!1),z=C(!0),B=C(""),u=C(null),I=C(null),le=C([]),b=U([]),W=T().format("YYYY-MM-DDTHH:mm"),Y=xe(),ae=qe(),A=parseInt(Y.params.habitid),N=T(Y.params.forDate).format("YYYY-MM-DD"),a=U({CMT_ID:0,HABIT_ID:A,DATE:N,OPTION_ID:0,OPTION_OBJECT:null,OLD_CONSTANT_VALUE:0,CONSTANT_VALUE:0,TIME_ENTRY:T().format("YYYY-MM-DDTHH:mm"),NOTES:"",FROM_TIME:T().format("YYYY-MM-DDTHH:mm"),UPTO_TIME:T().format("YYYY-MM-DDTHH:mm"),DURATION:0});Y.params.CMT_ID&&(u.value=parseInt(Y.params.CMT_ID),ue());async function ue(){let e=await Me(u.value);console.log("CheckMarkDetails :",e),e.length>0?(a.CMT_ID=e[0].CMT_ID,a.HABIT_ID=e[0].HABIT_ID,a.DATE=e[0].DATE,a.OPTION_ID=e[0].OPTION_ID,a.CONSTANT_VALUE=e[0].CONSTANT_VALUE,a.OLD_CONSTANT_VALUE=e[0].CONSTANT_VALUE,a.TIME_ENTRY=e[0].TIME_ENTRY,a.NOTES=e[0].NOTES,a.FROM_TIME=e[0].FROM_TIME,a.UPTO_TIME=e[0].UPTO_TIME,a.DURATION=e[0].DURATION):(z.value=!1,B.value="Check Mark Id Is Invalid")}Qe(()=>{console.log("Component is mounted"),Oe()});async function Oe(){console.log("forHabitId : ",A);const e=await ye(A);I.value=e[0],le.value=await fe(A);const l=await Ue(A);for(let t=0;t<l.length;t++){let o=l[t],n=[];u.value&&(n=await ve(o.AP_ID,u.value)),n.length>0?(o.APAnswer=n[0],o.APAnswer.OPTION_OBJECT=null,o.APAnswer.OLD_NUM_VALUE=n[0].NUM_VALUE):o.APAnswer={APA_ID:0,AP_ID:o.AP_ID,CMT_ID:0,OPTION_OBJECT:null,OLD_NUM_VALUE:0,OPTION_ID:0,NUM_VALUE:0,NOTES:""},o.dailyAPScore=null,o.weeklyAPScore=null,o.monthlyAPScore=null,o.quaterlyAPScore=null,o.yearlyAPScore=null,b.push(o)}De(),I.value.HABIT_ID||(z.value=!1,B.value=B.value+"Habit Id is Invalid"),z.value&&(J.value=!0)}const h=T(N).endOf("week").format("YYYY-MM-DD"),F=T(N).format("YYYY-MM"),G=T(N).endOf("quarter").format("YYYY-MM-DD"),x=T(N).format("YYYY"),O=U({HP_ID:0,HABIT_ID:A,PERIODICITY:"Daily",REF_DATE:N,TARGET:0,SCORE:0,PERCENTAGE:0,MINUTES_SPEND:0,TIME_SCORE:0}),D=U({HP_ID:0,HABIT_ID:A,PERIODICITY:"Weekly",REF_DATE:h,TARGET:0,SCORE:0,PERCENTAGE:0,MINUTES_SPEND:0,TIME_SCORE:0}),P=U({HP_ID:0,HABIT_ID:A,PERIODICITY:"Monthly",REF_DATE:F,TARGET:0,SCORE:0,PERCENTAGE:0,MINUTES_SPEND:0,TIME_SCORE:0}),d=U({HP_ID:0,HABIT_ID:A,PERIODICITY:"Quaterly",REF_DATE:G,TARGET:0,SCORE:0,PERCENTAGE:0,MINUTES_SPEND:0,TIME_SCORE:0}),m=U({HP_ID:0,HABIT_ID:A,PERIODICITY:"Yearly",REF_DATE:x,TARGET:0,SCORE:0,PERCENTAGE:0,MINUTES_SPEND:0,TIME_SCORE:0});async function De(){console.log("getScoreValues");const e=await w(A,"Daily",N),l=await w(A,"Weekly",h),t=await w(A,"Monthly",F),o=await w(A,"Quaterly",G),n=await w(A,"Yearly",x);console.log("getScoreValues result1 :",e),e.length>0&&(O.HP_ID=e[0].HP_ID,O.HABIT_ID=e[0].HABIT_ID,O.PERIODICITY=e[0].PERIODICITY,O.REF_DATE=e[0].REF_DATE,O.TARGET=e[0].TARGET,O.SCORE=e[0].SCORE,O.PERCENTAGE=e[0].PERCENTAGE,O.MINUTES_SPEND=e[0].MINUTES_SPEND,O.TIME_SCORE=e[0].TIME_SCORE),l.length>0&&(D.HP_ID=l[0].HP_ID,D.HABIT_ID=l[0].HABIT_ID,D.PERIODICITY=l[0].PERIODICITY,D.REF_DATE=l[0].REF_DATE,D.TARGET=l[0].TARGET,D.SCORE=l[0].SCORE,D.PERCENTAGE=l[0].PERCENTAGE,D.MINUTES_SPEND=l[0].MINUTES_SPEND,D.TIME_SCORE=l[0].TIME_SCORE),t.length>0&&(P.HP_ID=t[0].HP_ID,P.HABIT_ID=t[0].HABIT_ID,P.PERIODICITY=t[0].PERIODICITY,P.REF_DATE=t[0].REF_DATE,P.TARGET=t[0].TARGET,P.SCORE=t[0].SCORE,P.PERCENTAGE=t[0].PERCENTAGE,P.MINUTES_SPEND=t[0].MINUTES_SPEND,P.TIME_SCORE=t[0].TIME_SCORE),o.length>0&&(d.HP_ID=o[0].HP_ID,d.HABIT_ID=o[0].HABIT_ID,d.PERIODICITY=o[0].PERIODICITY,d.REF_DATE=o[0].REF_DATE,d.TARGET=o[0].TARGET,d.SCORE=o[0].SCORE,d.PERCENTAGE=o[0].PERCENTAGE,d.MINUTES_SPEND=o[0].MINUTES_SPEND,d.TIME_SCORE=o[0].TIME_SCORE),n.length>0&&(m.HP_ID=n[0].HP_ID,m.HABIT_ID=n[0].HABIT_ID,m.PERIODICITY=n[0].PERIODICITY,m.REF_DATE=n[0].REF_DATE,m.TARGET=n[0].TARGET,m.SCORE=n[0].SCORE,m.PERCENTAGE=n[0].PERCENTAGE,m.MINUTES_SPEND=n[0].MINUTES_SPEND,m.TIME_SCORE=n[0].TIME_SCORE);for(let v=0;v<b.length;v++){let E=b[v];const V=await k(E.AP_ID,"Daily",N);V.length>0?E.dailyAPScore=V[0]:E.dailyAPScore={AP_ID:E.AP_ID,PERIODICITY:"Daily",REF_DATE:N,SCORE:0};const g=await k(E.AP_ID,"Weekly",h);g.length>0?E.weeklyAPScore=g[0]:E.weeklyAPScore={AP_ID:E.AP_ID,PERIODICITY:"Weekly",REF_DATE:h,SCORE:0};const _=await k(E.AP_ID,"Monthly",F);_.length>0?E.monthlyAPScore=_[0]:E.monthlyAPScore={AP_ID:E.AP_ID,PERIODICITY:"Monthly",REF_DATE:F,SCORE:0};const ne=await k(E.AP_ID,"Quaterly",G);ne.length>0?E.quaterlyAPScore=ne[0]:E.quaterlyAPScore={AP_ID:E.AP_ID,PERIODICITY:"Quaterly",REF_DATE:G,SCORE:0};const Ie=await k(E.AP_ID,"Yearly",x);Ie.length>0?E.yearlyAPScore=Ie[0]:E.yearlyAPScore={AP_ID:E.AP_ID,PERIODICITY:"Yearly",REF_DATE:x,SCORE:0}}}async function p(e){const l={HABIT_ID:e.HABIT_ID,PERIODICITY:e.PERIODICITY,REF_DATE:e.REF_DATE,TARGET:e.TARGET,SCORE:e.SCORE,PERCENTAGE:e.PERCENTAGE,MINUTES_SPEND:e.MINUTES_SPEND,TIME_SCORE:e.TIME_SCORE};e.HP_ID?(console.log("Update the Habit Score details"),l.HP_ID=e.HP_ID,await be(Object.assign({},l))):(console.log("Add the New Habit Score details"),e.HP_ID=await he(Object.assign({},l)))}async function H(e){e.APP_ID?(console.log("Update the AP Score details"),e.APP_ID=await Fe(Object.assign({},e))):(console.log("Add the New AP Score details"),e.APP_ID=await Ge(Object.assign({},e)))}function K(e){O.SCORE=O.SCORE+e,D.SCORE=D.SCORE+e,P.SCORE=P.SCORE+e,d.SCORE=d.SCORE+e,m.SCORE=m.SCORE+e,p(O),p(D),p(P),p(d),p(m)}function Pe(e,l){e.dailyAPScore.SCORE=e.dailyAPScore.SCORE+l,e.weeklyAPScore.SCORE=e.weeklyAPScore.SCORE+l,e.monthlyAPScore.SCORE=e.monthlyAPScore.SCORE+l,e.quaterlyAPScore.SCORE=e.quaterlyAPScore.SCORE+l,e.yearlyAPScore.SCORE=e.yearlyAPScore.SCORE+l,H(e.dailyAPScore),H(e.weeklyAPScore),H(e.monthlyAPScore),H(e.quaterlyAPScore),H(e.yearlyAPScore)}function de(){console.log(a),a.CONSTANT_VALUE=a.OPTION_OBJECT.OPTION_VALUE,a.NOTES=a.NOTES+`
`+a.OPTION_OBJECT.OPTION_DESC,oe()}async function oe(){if(I.value.IS_ADDITIVE){const e=a.CONSTANT_VALUE-a.OLD_CONSTANT_VALUE;K(e),a.OLD_CONSTANT_VALUE=a.CONSTANT_VALUE}q()}function se(e){let l=T(e);return T().diff(l,"minutes")<0?T().format("YYYY-MM-DDTHH:mm"):e}function me(){a.TIME_ENTRY||(a.TIME_ENTRY=T().format("YYYY-MM-DDTHH:mm")),a.TIME_ENTRY=se(a.TIME_ENTRY)}function Z(){a.FROM_TIME||(a.FROM_TIME=T().format("YYYY-MM-DDTHH:mm")),a.UPTO_TIME||(a.UPTO_TIME=T().format("YYYY-MM-DDTHH:mm")),a.FROM_TIME=se(a.FROM_TIME);let e=T(a.FROM_TIME),t=T(a.UPTO_TIME).diff(e,"minutes"),o=T.duration(t,"minutes");console.log("duration : ",o),console.log("Duration in humanize form :",o.humanize()),a.DURATION=t,t<0?(a.UPTO_TIME=a.FROM_TIME,Z()):q()}async function q(){console.log("Saving Checkmarks");let e={HABIT_ID:a.HABIT_ID,DATE:a.DATE,OPTION_ID:a.OPTION_ID,CONSTANT_VALUE:a.CONSTANT_VALUE,TIME_ENTRY:I.value.IS_TIME_ENTRY?a.TIME_ENTRY:"",NOTES:a.NOTES,FROM_TIME:I.value.Is_DURATION_ENTRY?a.FROM_TIME:"",UPTO_TIME:I.value.Is_DURATION_ENTRY?a.UPTO_TIME:"",DURATION:I.value.Is_DURATION_ENTRY?a.DURATION:0};u.value?(e.CMT_ID=u.value,await we(e)):(u.value=await ke(e),a.CMT_ID=u.value,console.log("route.params :",Y.params),ae.push({name:"addcheckmark",params:{habitid:a.HABIT_ID,forDate:a.DATE,CMT_ID:u.value}}))}const Q=C(null);async function Se(e){var t;const l=(t=Q.value)==null?void 0:t.OPTION_VALUE;console.log("optValue :",l),e.APAnswer.NUM_VALUE=l,e.APAnswer.HAS_NOTES&&(e.APAnswer.NOTES=e.APAnswer.NOTES+`
`+Q.value.OPTION_DESC),await Ee(e)}async function Ee(e){if(e.IS_NUM_ADDITIVE){const l=e.APAnswer.NUM_VALUE-e.APAnswer.OLD_NUM_VALUE;Pe(e,l),e.APAnswer.OLD_NUM_VALUE=e.APAnswer.NUM_VALUE,e.IS_ADDED_IN_MAIN&&K(l),e.IS_SUBTRACTED_IN_MAIN&&K(-l)}await j(e.APAnswer)}async function j(e){if(console.log("APAnswer",e),u.value){console.log("SInce CMT ID is present , so directly save the AP Answer data"),e.CMT_ID=u.value;let l={AP_ID:e.AP_ID,CMT_ID:u.value,OPTION_ID:e.OPTION_ID,NUM_VALUE:parseFloat(e.NUM_VALUE),NOTES:e.NOTES};e.APA_ID?(l.APA_ID=e.APA_ID,await Le(Object.assign({},l))):e.APA_ID=await Be(Object.assign({},l))}else await q(),await j()}async function Re(){ae.push({name:"home"})}const Ne=$e(()=>({height:Te.screen.height-(S.value?100:200)+"px"})),ce={right:"0px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.5},Ce={right:"-3px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2},S=C(!0),Te=et();return Te.platform.is.mobile?S.value=!0:S.value=!1,(e,l)=>(i(),c(_e,null,[M(R(B.value)+" ",1),ee("div",tt,[s(Ye,{modelValue:J.value,"onUpdate:modelValue":l[18]||(l[18]=t=>J.value=t),persistent:"",maximized:S.value,"transition-show":"scale","transition-hide":"scale","backdrop-filter":"blur(4px)"},{default:r(()=>[s(Xe,{class:"",style:{width:"100%"}},{default:r(()=>[s(Ke,null,{default:r(()=>[ee("div",lt,R(L(T)(L(N)).format("dddd |  DD MMMM YYYY")),1),s(pe),s($,{dense:"",flat:"",icon:"minimize",onClick:l[0]||(l[0]=t=>S.value=!1),disable:!S.value},{default:r(()=>[S.value?(i(),te(X,{key:0,class:"bg-white text-primary"},{default:r(()=>[M("Minimize")]),_:1})):y("",!0)]),_:1},8,["disable"]),s($,{dense:"",flat:"",icon:"crop_square",onClick:l[1]||(l[1]=t=>S.value=!0),disable:S.value},{default:r(()=>[S.value?y("",!0):(i(),te(X,{key:0,class:"bg-white text-primary"},{default:r(()=>[M("Maximize")]),_:1}))]),_:1},8,["disable"]),s($,{dense:"",flat:"",icon:"close",to:{name:"home"}},{default:r(()=>[s(X,{class:"bg-white text-primary"},{default:r(()=>[M("Close")]),_:1})]),_:1})]),_:1}),I.value.HABIT_ID?(i(),c("div",at,[ee("div",{class:Je(S.value?"col-12 col-md-8":"col-12 ")},[s(je,{style:ze(Ne.value),visible:!1,"thumb-style":ce,"bar-style":Ce},{default:r(()=>[s(He,{class:"q-ma-sm",style:{"border-radius":"8px"}},{default:r(()=>[s(re,{avatar:""},{default:r(()=>[s(Ve,{BGCOLOR:I.value.COLOR,EMOJI:I.value.EMOJI,SIZE:"lg",isRounded:!0},null,8,["BGCOLOR","EMOJI"])]),_:1}),s(re,null,{default:r(()=>[s(Ae,{lines:"1",class:"text-h5"},{default:r(()=>[M(R(I.value.HABIT_LABEL),1)]),_:1}),s(Ae,{class:"",lines:"3",style:{"white-space":"pre-line"}},{default:r(()=>[M(R(I.value.DESCRIPTION),1)]),_:1})]),_:1})]),_:1}),I.value.HAS_OPTION?(i(),c("div",ot,[s(ie,{optionItem:le.value,questionLabel:I.value.QUESTION,optSelectedObj:a.OPTION_OBJECT,"onUpdate:optSelectedObj":l[2]||(l[2]=t=>a.OPTION_OBJECT=t),optSelectedId:a.OPTION_ID,"onUpdate:optSelectedId":l[3]||(l[3]=t=>a.OPTION_ID=t),"onUpdate:modelValue":l[4]||(l[4]=t=>de())},null,8,["optionItem","questionLabel","optSelectedObj","optSelectedId"])])):(i(),c("div",st,[s(f,{filled:"",label:I.value.QUESTION,type:"number",modelValue:a.CONSTANT_VALUE,"onUpdate:modelValue":[l[5]||(l[5]=t=>a.CONSTANT_VALUE=t),l[6]||(l[6]=t=>oe())],debounce:"1000"},null,8,["label","modelValue"])])),s(f,{class:"q-ma-sm",filled:"",label:"Notes",type:"textarea",autogrow:"","input-style":"min-height: 100px;",modelValue:a.NOTES,"onUpdate:modelValue":[l[7]||(l[7]=t=>a.NOTES=t),l[8]||(l[8]=t=>q())],debounce:"1000"},null,8,["modelValue"]),(i(!0),c(_e,null,We(b,(t,o)=>{var n,v,E,V,g;return i(),c("div",{key:o},[M(" dailyAPScore :"+R((n=t.dailyAPScore)==null?void 0:n.SCORE)+" "+R((v=t.weeklyAPScore)==null?void 0:v.SCORE)+" "+R((E=t.quaterlyAPScore)==null?void 0:E.SCORE)+" "+R((V=t.monthlyAPScore)==null?void 0:V.SCORE)+" "+R((g=t.yearlyAPScore)==null?void 0:g.SCORE)+" ",1),t.HAS_OPTION?(i(),c("div",Et,[s(ie,{optionItem:t.AP_OPTIONS,questionLabel:t.PROMPT_LABEL,optSelectedObj:Q.value,"onUpdate:optSelectedObj":l[9]||(l[9]=_=>Q.value=_),optSelectedId:t.APAnswer.OPTION_ID,"onUpdate:optSelectedId":_=>t.APAnswer.OPTION_ID=_,"onUpdate:modelValue":_=>Se(t)},null,8,["optionItem","questionLabel","optSelectedObj","optSelectedId","onUpdate:optSelectedId","onUpdate:modelValue"]),M(" "+R(t.APAnswer.NUM_VALUE)+" "+R(t.APAnswer.Notes),1)])):y("",!0),!t.HAS_OPTION&&t.HAS_NUM?(i(),c("div",Tt,[s(f,{filled:"",label:t.PROMPT_LABEL,type:"number",modelValue:t.APAnswer.NUM_VALUE,"onUpdate:modelValue":[_=>t.APAnswer.NUM_VALUE=_,_=>Ee(t)],debounce:"1000"},null,8,["label","modelValue","onUpdate:modelValue"])])):y("",!0),t.HAS_NOTES?(i(),te(f,{key:2,class:"q-ma-sm custom-textarea",filled:"",label:t.HAS_NUM||t.HAS_OPTION?"Notes for "+t.PROMPT_LABEL:t.PROMPT_LABEL,type:"textarea",modelValue:t.APAnswer.NOTES,"onUpdate:modelValue":[_=>t.APAnswer.NOTES=_,_=>j(t)],autogrow:"","input-style":"min-height: 100px;",debounce:"1000"},null,8,["label","modelValue","onUpdate:modelValue"])):y("",!0)])}),128)),I.value.Is_DURATION_ENTRY?(i(),c("div",nt,[s(f,{class:"q-ma-sm",filled:"",label:"Start Time",type:"datetime-local",modelValue:a.FROM_TIME,"onUpdate:modelValue":[l[10]||(l[10]=t=>a.FROM_TIME=t),l[11]||(l[11]=t=>Z())],max:L(W)},null,8,["modelValue","max"]),s(f,{class:"q-ma-sm",filled:"",label:"End Time",type:"datetime-local",modelValue:a.UPTO_TIME,"onUpdate:modelValue":[l[12]||(l[12]=t=>a.UPTO_TIME=t),l[13]||(l[13]=t=>Z())],max:L(W),min:a.FROM_TIME},null,8,["modelValue","max","min"]),s(f,{class:"q-ma-sm",filled:"",label:"Duration (mins)",type:"number",modelValue:a.DURATION,"onUpdate:modelValue":l[14]||(l[14]=t=>a.DURATION=t),readonly:""},null,8,["modelValue"])])):y("",!0),I.value.IS_TIME_ENTRY?(i(),c("div",It,[s(f,{class:"q-ma-sm",filled:"",label:"Done at",type:"datetime-local",modelValue:a.TIME_ENTRY,"onUpdate:modelValue":[l[15]||(l[15]=t=>a.TIME_ENTRY=t),l[16]||(l[16]=t=>me())],max:L(W)},null,8,["modelValue","max"])])):y("",!0)]),_:1},8,["style"])],2)])):y("",!0),s(ge),s(Ze,{align:"right"},{default:r(()=>[s($,{label:"Ok",color:"primary",onClick:l[17]||(l[17]=t=>Re())})]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])])],64))}};export{Ct as default};
