import{d as $,i as f,Z as P,a8 as _,k as y,o as C,m as h,n as o,M as r,t as p,z as b,p as g}from"./index-f08f96fe.js";import{_ as B}from"./ProposalListItem.vue_vue_type_script_setup_true_lang-e7773271.js";import{_ as q}from"./PaginationBar.vue_vue_type_script_setup_true_lang-8d09b529.js";import{b as d}from"./route-block-83d24a4e.js";import"./index-290deda9.js";import"./browser-54f9c449.js";import"./index-060c1013.js";const z={class:"tabs tabs-boxed bg-transparent mb-4 text-center"},M=$({__name:"index",setup(N){const t=f("2"),s=P(),l=f(new _);y(()=>{s.fetchProposals("2").then(a=>{var e;((e=a==null?void 0:a.proposals)==null?void 0:e.length)===0&&(t.value="3",s.fetchProposals("3")),s.fetchProposals("3"),s.fetchProposals("4")})});const n=a=>{t.value=a};function k(a){l.value.setPage(a),s.fetchProposals(t.value,l.value)}return(a,e)=>{var i,c,u,v;return C(),h("div",null,[o("div",z,[o("a",{class:r(["tab text-gray-400 uppercase",{"tab-active":t.value==="2"}]),onClick:e[0]||(e[0]=m=>n("2"))},p(a.$t("gov.voting")),3),o("a",{class:r(["tab text-gray-400 uppercase",{"tab-active":t.value==="3"}]),onClick:e[1]||(e[1]=m=>n("3"))},p(a.$t("gov.passed")),3),o("a",{class:r(["tab text-gray-400 uppercase",{"tab-active":t.value==="4"}]),onClick:e[2]||(e[2]=m=>n("4"))},p(a.$t("gov.rejected")),3)]),b(B,{proposals:(i=g(s))==null?void 0:i.proposals[t.value]},null,8,["proposals"]),b(q,{total:(v=(u=(c=g(s))==null?void 0:c.proposals[t.value])==null?void 0:u.pagination)==null?void 0:v.total,limit:l.value.limit,callback:k},null,8,["total","limit"])])}}});typeof d=="function"&&d(M);export{M as default};
