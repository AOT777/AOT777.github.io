import{r as c,a as _,o as l,h as u,g as d,i as g,c as v,e as o,b as r}from"./index.77c0c392.js";import{p}from"./preview.b2f1a288.js";const N={__name:"demo1",setup(i){const t=c(1);return(s,e)=>{const a=_("tPagination");return l(),u(a,{current:t.value,"onUpdate:current":e[0]||(e[0]=n=>t.value=n)},null,8,["current"])}}},P={__name:"demo2",setup(i){const t=c(1);return(s,e)=>{const a=_("tPagination");return l(),u(a,{current:t.value,"onUpdate:current":e[0]||(e[0]=n=>t.value=n),activeColor:"#e6113b"},null,8,["current"])}}},b={__name:"demo3",setup(i){const t=c(1);return(s,e)=>{const a=_("tPagination");return l(),u(a,{current:t.value,"onUpdate:current":e[0]||(e[0]=n=>t.value=n),continues:7},null,8,["current"])}}},k={__name:"demo4",setup(i){const t=c(1),s=c([3,5,10]),e=c(3),a=n=>{e.value=n};return(n,m)=>{const f=_("tPagination");return l(),u(f,{current:t.value,"onUpdate:current":m[0]||(m[0]=h=>t.value=h),pageSize:e.value,showPageSize:s.value,onChange:a},null,8,["current","pageSize","showPageSize"])}}},x={__name:"Attributes",setup(i){const t=d({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"current",type:"Number",talk:"\u5F53\u524D\u9875",sel:"\u2014\u2014",def:"warn"},{attr:"pageSize",type:"Number",talk:"\u4E00\u9875\u663E\u793A\u7684\u6570\u636E\u91CF",sel:"\u2014\u2014",def:"6"},{attr:"total",type:"Number",talk:"\u603B\u5171\u6570\u636E\u91CF",sel:"\u2014\u2014",def:"3"},{attr:"continues",type:"Number",talk:"\u4E2D\u95F4\u8FDE\u7EED\u9875\u7801\u6570",sel:"\u2014\u2014",def:"5"},{attr:"activeColor",type:"String",talk:"\u9009\u4E2D\u9875\u7684\u9875\u7801\u56FE\u6807\u6FC0\u6D3B\u989C\u8272",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"showPageSize",type:"Array",talk:"\u81EA\u5B9A\u4E49\u4E00\u9875\u663E\u793A\u7684\u6570\u636E\u91CF",sel:"\u2014\u2014",def:"\u2014\u2014"}]}}),{options:s}=t;return(e,a)=>{const n=_("tTable");return l(),u(n,{options:g(s),size:"small"},null,8,["options"])}}},z={__name:"Event",setup(i){const t=d({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"changePaNo",talk:"\u83B7\u53D6\u5F53\u524D\u9875\u7801",attr:"value",exm:"changePaNo=(value)=>{}"}]}}),{options:s}=t;return(e,a)=>{const n=_("tTable");return l(),u(n,{options:g(s),size:"small"},null,8,["options"])}}},w={class:"markdown-body"},y=r("h2",null,"Pagination\u9875\u7801\u7EC4\u4EF6",-1),S=r("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),$=r("h3",null,"\u81EA\u5B9A\u4E49\u9875\u7801\u989C\u8272",-1),B=r("h3",null,"\u8BBE\u7F6E\u4E2D\u95F4\u8FDE\u7EED\u9875\u7801\u6570",-1),C=r("h3",null,"\u8BBE\u7F6E\u4E00\u9875\u663E\u793A\u7684\u6570\u636E\u91CF",-1),T=r("h2",null,"Attributes \u53C2\u6570",-1),U=r("br",null,null,-1),A=r("h2",null,"Event \u4E8B\u4EF6",-1),E=r("br",null,null,-1),q={__name:"doc",setup(i,{expose:t}){return t({frontmatter:{}}),(e,a)=>(l(),v("div",w,[y,S,o(N),o(p,{compName:"pagination",demoName:"demo1"}),$,o(P),o(p,{compName:"pagination",demoName:"demo2"}),B,o(b),o(p,{compName:"pagination",demoName:"demo3"}),C,o(k),o(p,{compName:"pagination",demoName:"demo4"}),T,o(x),U,A,o(z),E]))}};export{q as default};