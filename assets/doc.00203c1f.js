import{_,a as i,o as l,h as u,v as h,c,e as s,F as f,p as g,l as v,b as t,g as x,i as k,j as b,k as d}from"./index.fbf7f88f.js";import{p}from"./preview.9437fdc5.js";const B={};function y(n,e){const o=i("tBackTop");return l(),u(o)}var T=_(B,[["render",y]]);const N=n=>(g("data-v-09819d10"),n=n(),v(),n),w=N(()=>t("div",{class:"testBox"},null,-1)),S={__name:"demo2",setup(n){return h(()=>{for(let e=0;e<=20;e++){const o=document.createElement("p");o.innerText="scroll",document.querySelector(".testBox").appendChild(o)}}),(e,o)=>{const r=i("tBackTop");return l(),c(f,null,[w,s(r,{target:".testBox"})],64)}}};var I=_(S,[["__scopeId","data-v-09819d10"]]);const $={__name:"Attributes",setup(n){const e=x({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"target",type:"String",talk:"\u89E6\u53D1\u6EDA\u52A8\u7684\u5143\u7D20\u5BF9\u8C61",sel:"\u2014\u2014",def:"body"},{attr:"visibilityHeight",type:"Number",talk:"\u5F53\u6EDA\u52A8\u5230\u8FD9\u4E2A\u8DDD\u79BB\u65F6\u663E\u793A\u56DE\u5230\u9876\u90E8\u7EC4\u4EF6",sel:"\u2014\u2014",def:"240"},{attr:"right",type:"Number",talk:"backTop\u7EC4\u4EF6\u8DDD\u79BB\u53F3\u8FB9\u7684\u8DDD\u79BB",sel:"\u2014\u2014",def:"20"},{attr:"bottom",type:"Number",talk:"backTop\u7EC4\u4EF6\u8DDD\u79BB\u4E0B\u8FB9\u7684\u8DDD\u79BB",sel:"\u2014\u2014",def:"40"}]}}),{options:o}=e;return(r,m)=>{const a=i("tTable");return l(),u(a,{options:k(o),size:"small"},null,8,["options"])}}},C={class:"markdown-body"},E=t("h2",null,"BackTop\u8FD4\u56DE\u9876\u90E8\u7EC4\u4EF6",-1),M=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),q=t("br",null,null,-1),A=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),D=t("pre",null,[t("code",{class:"language-html"},`    <tBackTop></tBackTop>
`)],-1),F=[A,D],V=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),j=t("br",null,null,-1),z=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),H=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <div class="testBox"></div>
        <tBackTop target='.testBox'></tBackTop>
    </template>

    <script setup>
    import { onMounted } from "vue";
    onMounted(()=>{
        for(let i=0;i<=20;i++){
            const p=document.createElement('p');
            p.innerText='scroll';
            document.querySelector('.testBox').appendChild(p)
        }
    })
    <\/script>

    <style lang="scss" scoped>
        .testBox{
            height: 300px;
            overflow-y: scroll;
            border: 1px solid #f0f0f0;
            padding: 10px;
        }  
    </style>
`)],-1),G=[z,H],J=t("h2",null,"Attributes \u53C2\u6570",-1),K=t("br",null,null,-1),P={__name:"doc",setup(n,{expose:e}){return e({frontmatter:{}}),(r,m)=>{const a=b("highlight");return l(),c("div",C,[E,M,t("p",null,[s(T),q]),d((l(),c("details",null,F)),[[a]]),s(p,{compName:"backtop",demoName:"demo1"}),V,t("p",null,[s(I),j]),d((l(),c("details",null,G)),[[a]]),s(p,{compName:"backtop",demoName:"demo2"}),J,s($),K])}}};export{P as default};
