import{_ as u,r,j as h,k as f,o as d,c,e as m,w as x,l as b,b as a,t as i,p as g,T as w,f as n}from"./index.77c0c392.js";const C={class:"pre-code-box"},y={key:0,class:"language-html"},N=n("            "),k={class:"language-html"},S=n(`\r
        `),V={__name:"preview",props:{compName:{type:String,default:"",require:!0},demoName:{type:String,default:"",require:!0}},setup(l){const t=l,e=r(!1),p=()=>{e.value=!e.value},o=r("");async function v(){o.value=await fetch(`/packages/${t.compName}/doc/${t.demoName}.vue`).then(s=>s.text())}return h(()=>{v()}),(s,B)=>{const _=f("highlight");return d(),c("div",C,[m(w,{name:"slide-fade"},{default:x(()=>[e.value?b((d(),c("pre",y,[N,a("code",k,i(o.value),1),S])),[[_]]):g("",!0)]),_:1}),a("div",{class:"showCode",onClick:p},[a("span",null,i(e.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),1)])])}}};var T=u(V,[["__scopeId","data-v-6b2e4d12"]]);export{T as p};
