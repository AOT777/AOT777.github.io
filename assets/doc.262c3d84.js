import{r as h,a as c,o as i,h as m,w as d,e as n,c as p,d as g,f as u,t as k,F as v,g as f,i as b,b as a}from"./index.63991d23.js";import{p as x}from"./preview.a70d9fc9.js";const T=u("\u5185\u5BB90"),w={__name:"demo1",setup(_){const e=h("name0");return(l,s)=>{const o=c("TTabsPanel"),r=c("tTabs");return i(),m(r,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=t=>e.value=t)},{default:d(()=>[n(o,{name:"name0",label:"\u9009\u98790"},{default:d(()=>[T]),_:1}),(i(),p(v,null,g(4,t=>n(o,{key:t,name:`name${t}`,label:`\u9009\u9879${t}`},{default:d(()=>[u("\u5185\u5BB9"+k(t),1)]),_:2},1032,["name","label"])),64))]),_:1},8,["modelValue"])}}},y={__name:"Attributes",setup(_){const e=f({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"v-model",type:"Srting/number",talk:"\u7ED1\u5B9A\u6570\u636E",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"label",type:"String",talk:"\u9009\u9879\u5361\u663E\u793A\u7684\u6807\u9898",sel:"\u2014\u2014",def:""},{attr:"name",type:"String",talk:"\u9009\u9879\u5361name",sel:"\u2014\u2014",def:""}]}}),{options:l}=e;return(s,o)=>{const r=c("tTable");return i(),m(r,{options:b(l),size:"small"},null,8,["options"])}}},N={__name:"Event",setup(_){const e=f({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"tabClick",talk:"\u9009\u4E2D\u4E8B\u4EF6",attr:"value",exm:"tabClick=(value)=>{}"}]}}),{options:l}=e;return(s,o)=>{const r=c("tTable");return i(),m(r,{options:b(l),size:"small"},null,8,["options"])}}},V={class:"markdown-body"},$=a("h2",null,"Tabs\u5207\u6362\u7EC4\u4EF6",-1),B=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),C=a("h2",null,"Attributes \u53C2\u6570",-1),S=a("br",null,null,-1),E=a("h2",null,"Event \u4E8B\u4EF6",-1),z=a("br",null,null,-1),P={__name:"doc",setup(_,{expose:e}){return e({frontmatter:{}}),(s,o)=>(i(),p("div",V,[$,B,n(w),n(x,{compName:"tabs",demoName:"demo1"}),C,n(y),S,E,n(N),z]))}};export{P as default};