import{_ as p,a as c,o as n,h as i,g as h,i as f,j as g,c as d,b as t,e as l,k as r}from"./index.fbf7f88f.js";import{p as _}from"./preview.9437fdc5.js";const b={};function y(a,o){const e=c("tUpload");return n(),i(e)}var U=p(b,[["render",y]]);const v={};function x(a,o){const e=c("tUpload");return n(),i(e,{btnType:"success",label:"\u81EA\u5B9A\u4E49\u6587\u5B57"})}var k=p(v,[["render",x]]);const N={};function T(a,o){const e=c("tUpload");return n(),i(e,{multiple:""})}var $=p(N,[["render",T]]);const w={};function B(a,o){const e=c("tUpload");return n(),i(e,{multiple:"",uploadTy:"drop"})}var E=p(w,[["render",B]]);const S={__name:"Attributes",setup(a){const o=h({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"multiple",type:"Boolean",talk:"\u662F\u5426\u542F\u7528\u591A\u9009",sel:"true/false",def:"false"},{attr:"label",type:"String",talk:"\u63D0\u793A\u6587\u5B57\u4FE1\u606F",sel:"\u2014\u2014",def:"\u9009\u62E9\u6587\u4EF6"},{attr:"btnType",type:"String",talk:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6837\u5F0F",sel:"default/primary/success/danger/warning/dashed/text",def:"default"},{attr:"uploadTy",type:"String",talk:"\u4E0A\u4F20\u6587\u4EF6\u7C7B\u578B",sel:"default/drop",def:"default"}]}}),{options:e}=o;return(u,m)=>{const s=c("tTable");return n(),i(s,{options:f(e),size:"small"},null,8,["options"])}}},z={__name:"Event",setup(a){const o=h({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"change",talk:"\u4E0A\u4F20\u7684\u6587\u4EF6",attr:"value",exm:"change=(value)=>{}"}]}}),{options:e}=o;return(u,m)=>{const s=c("tTable");return n(),i(s,{options:f(e),size:"small"},null,8,["options"])}}},A={class:"markdown-body"},D=t("h2",null,"Upload\u6587\u4EF6\u9009\u62E9\u7EC4\u4EF6",-1),V=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),j=t("br",null,null,-1),C=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),q=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <tUpload></tUpload>
    </template>

    <script setup>

    <\/script>
`)],-1),F=[C,q],G=t("h3",null,"\u591A\u9009",-1),H=t("br",null,null,-1),I=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),J=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <tUpload multiple></tUpload>
    </template>

    <script setup>

    <\/script>
`)],-1),K=[I,J],L=t("h3",null,"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272",-1),M=t("br",null,null,-1),O=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),P=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <tUpload btnType='success' label='\u81EA\u5B9A\u4E49\u6587\u5B57'></tUpload>
    </template>

    <script setup>

    <\/script>
`)],-1),Q=[O,P],R=t("h3",null,"\u4E0A\u4F20\u5165\u53E3\u7C7B\u578B",-1),W=t("br",null,null,-1),X=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),Y=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <tUpload multiple uploadTy='drop'></tUpload>
    </template>

    <script setup>

    <\/script>
`)],-1),Z=[X,Y],tt=t("h2",null,"Attributes \u53C2\u6570",-1),et=t("br",null,null,-1),nt=t("h2",null,"Event \u4E8B\u4EF6",-1),lt=t("br",null,null,-1),at={__name:"doc",setup(a,{expose:o}){return o({frontmatter:{}}),(u,m)=>{const s=g("highlight");return n(),d("div",A,[D,V,t("p",null,[l(U),j]),r((n(),d("details",null,F)),[[s]]),l(_,{compName:"upload",demoName:"demo1"}),G,t("p",null,[l($),H]),r((n(),d("details",null,K)),[[s]]),l(_,{compName:"upload",demoName:"demo3"}),L,t("p",null,[l(k),M]),r((n(),d("details",null,Q)),[[s]]),l(_,{compName:"upload",demoName:"demo2"}),R,t("p",null,[l(E),W]),r((n(),d("details",null,Z)),[[s]]),l(_,{compName:"upload",demoName:"demo4"}),tt,l(S),et,nt,l(z),lt])}}};export{at as default};
