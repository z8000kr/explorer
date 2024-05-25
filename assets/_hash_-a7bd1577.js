import{d as B,l as C,L,J as N,i as T,a1 as F,r as V,o as r,m as l,n as t,z as d,O as x,x as i,t as s,p as e,M as y,I as p,F as D,q as z}from"./index-f08f96fe.js";import{a as J}from"./index-290deda9.js";import{s as O}from"./index-f8928fb9.js";import"./browser-54f9c449.js";import"./index-060c1013.js";const R={class:"tabs tabs-boxed bg-transparent mb-4"},q=t("a",{class:"tab text-gray-400 uppercase tab-active"},"Transaction",-1),E={key:0,class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow mb-4"},I={class:"card-title truncate mb-2"},M={class:"overflow-hidden"},j={class:"table text-sm"},A={class:"overflow-hidden"},G={key:1,class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow mb-4"},H={class:"card-title truncate mb-2"},K={class:"border border-slate-400 rounded-md mt-4"},P={key:0},Q={key:2,class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},U=t("h2",{class:"card-title truncate mb-2"},"JSON",-1),st=B({__name:"[hash]",props:["hash","chain"],setup(h){const m=h,$=C(),w=L(),u=N(),a=T({});m.hash&&$.rpc.getTx(m.hash).then(o=>a.value=o);const _=F(()=>{var o,b;return((b=(o=a.value.tx)==null?void 0:o.body)==null?void 0:b.messages.map(n=>{var c;return(c=n.packet)!=null&&c.data&&(n.message=u.base64ToString(n.packet.data)),n}))||[]});return(o,b)=>{var c,g,f,v,k;const n=V("RouterLink");return r(),l("div",null,[t("div",R,[d(n,{class:"tab text-gray-400 uppercase",to:`/${h.chain}/tx/?tab=recent`},{default:x(()=>[i(s(o.$t("block.recent")),1)]),_:1},8,["to"]),d(n,{class:"tab text-gray-400 uppercase",to:`/${h.chain}/tx/?tab=search`},{default:x(()=>[i("Search")]),_:1},8,["to"]),q]),e(a).tx_response?(r(),l("div",E,[t("h2",I,s(o.$t("tx.title")),1),t("div",M,[t("table",j,[t("tbody",null,[t("tr",null,[t("td",null,s(o.$t("tx.tx_hash")),1),t("td",A,s(e(a).tx_response.txhash),1)]),t("tr",null,[t("td",null,s(o.$t("account.height")),1),t("td",null,[d(n,{to:`/${m.chain}/block/${e(a).tx_response.height}`,class:"text-primary dark:invert"},{default:x(()=>[i(s(e(a).tx_response.height),1)]),_:1},8,["to"])])]),t("tr",null,[t("td",null,s(o.$t("staking.status")),1),t("td",null,[t("span",{class:y(["text-xs truncate relative py-2 px-4 w-fit mr-2 rounded",`text-${e(a).tx_response.code===0?"success":"error"}`])},[t("span",{class:y(["inset-x-0 inset-y-0 opacity-10 absolute",`bg-${e(a).tx_response.code===0?"success":"error"}`])},null,2),i(" "+s(e(a).tx_response.code===0?"Success":"Failed"),1)],2),t("span",null,s(e(a).tx_response.code===0?"":(g=(c=e(a))==null?void 0:c.tx_response)==null?void 0:g.raw_log),1)])]),t("tr",null,[t("td",null,s(o.$t("account.time")),1),t("td",null,s(e(u).toLocaleDate(e(a).tx_response.timestamp))+" ("+s(e(u).toDay(e(a).tx_response.timestamp,"from"))+") ",1)]),t("tr",null,[t("td",null,s(o.$t("tx.gas")),1),t("td",null,s(e(a).tx_response.gas_used)+" / "+s(e(a).tx_response.gas_wanted),1)]),t("tr",null,[t("td",null,s(o.$t("tx.fee")),1),t("td",null,s(e(u).formatTokens((k=(v=(f=e(a).tx)==null?void 0:f.auth_info)==null?void 0:v.fee)==null?void 0:k.amount,!0,"0,0.[00]")),1)]),t("tr",null,[t("td",null,s(o.$t("tx.memo")),1),t("td",null,s(e(a).tx.body.memo),1)])])])])])):p("",!0),e(a).tx_response?(r(),l("div",G,[t("h2",H,s(o.$t("account.messages"))+": ("+s(e(_).length)+") ",1),(r(!0),l(D,null,z(e(_),(S,W)=>(r(),l("div",null,[t("div",K,[d(J,{value:S},null,8,["value"])])]))),256)),e(_).length===0?(r(),l("div",P,s(o.$t("tx.no_messages")),1)):p("",!0)])):p("",!0),e(a).tx_response?(r(),l("div",Q,[U,d(e(O),{value:e(a),theme:e(w).theme,style:{background:"transparent"},copyable:"",boxed:"",sort:"","expand-depth":"5"},null,8,["value","theme"])])):p("",!0)])}}});export{st as default};
