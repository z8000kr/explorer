import{d as f,J as g,l as h,i as s,a8 as b,k,o,m as n,n as t,F as v,q as B,t as d,p as l,z as y}from"./index-f08f96fe.js";import{_ as q}from"./PaginationBar.vue_vue_type_script_setup_true_lang-8d09b529.js";import{b as m}from"./route-block-83d24a4e.js";const F={class:"overflow-auto bg-base-100"},R={class:"table table-compact"},S=t("thead",{class:"bg-base-200"},[t("tr",null,[t("td",null,"Token"),t("td",null,"Amount")])],-1),w={class:"hover"},x=f({__name:"index",props:["chain"],setup(N){g();const _=h(),c=s([]),e=s(new b),r=s({});k(()=>{i(1)});function i(u){e.value.setPage(u),_.rpc.getBankSupply(e.value).then(a=>{c.value=a.supply,r.value=a.pagination})}return(u,a)=>(o(),n("div",F,[t("table",R,[S,(o(!0),n(v,null,B(l(c),p=>(o(),n("tr",w,[t("td",null,d(p.denom),1),t("td",null,d(p.amount),1)]))),256))]),y(q,{limit:l(e).limit,total:l(r).total,callback:i},null,8,["limit","total"])]))}});typeof m=="function"&&m(x);export{x as default};
