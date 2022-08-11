import{_ as g,r as v,a as _,o as d,c as m,e as n,w as s,F as h,f as u,p as y,l as k,b as t,g as D,h as V,i as C,j as w,k as f}from"./index.fbf7f88f.js";import{p as b}from"./preview.9437fdc5.js";const N=a=>(y("data-v-3edd4ebe"),a=a(),k(),a),I=u("\u6309\u94AE"),S=N(()=>t("p",null,"77777777",-1)),B=u("\u53D6\u6D88"),U=u("\u786E\u8BA4"),T={__name:"demo1",setup(a){const e=v(!1);return(p,l)=>{const o=_("t-button"),i=_("tDialog");return d(),m(h,null,[n(o,{type:"primary",onClick:l[0]||(l[0]=r=>e.value=!0)},{default:s(()=>[I]),_:1}),n(i,{title:"\u6E29\u99A8\u63D0\u793A",modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=r=>e.value=r)},{footer:s(()=>[n(o,{onClick:l[1]||(l[1]=r=>e.value=!1)},{default:s(()=>[B]),_:1}),n(o,{type:"primary",onClick:l[2]||(l[2]=r=>e.value=!1)},{default:s(()=>[U]),_:1})]),default:s(()=>[S]),_:1},8,["modelValue"])],64)}}};var A=g(T,[["__scopeId","data-v-3edd4ebe"]]);const $=a=>(y("data-v-f9bd12fe"),a=a(),k(),a),F=u("\u6309\u94AE"),j=$(()=>t("h2",null,"html\u7C7B\u578B\u6807\u9898",-1)),z=$(()=>t("p",null,"77777777",-1)),E=u("\u53D6\u6D88"),q=u("\u786E\u8BA4"),G={__name:"demo2",setup(a){const e=v(!1);return(p,l)=>{const o=_("t-button"),i=_("tDialog");return d(),m(h,null,[n(o,{type:"primary",onClick:l[0]||(l[0]=r=>e.value=!0)},{default:s(()=>[F]),_:1}),n(i,{modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=r=>e.value=r)},{title:s(()=>[j]),footer:s(()=>[n(o,{onClick:l[1]||(l[1]=r=>e.value=!1)},{default:s(()=>[E]),_:1}),n(o,{type:"primary",onClick:l[2]||(l[2]=r=>e.value=!1)},{default:s(()=>[q]),_:1})]),default:s(()=>[z]),_:1},8,["modelValue"])],64)}}};var H=g(G,[["__scopeId","data-v-f9bd12fe"]]);const J=u("\u6309\u94AE"),K=u("\u53D6\u6D88"),L=u("\u786E\u8BA4"),M={__name:"demo3",setup(a){const e=v(!1),p=v("");return(l,o)=>{const i=_("t-button"),r=_("t-input"),x=_("tDialog");return d(),m(h,null,[n(i,{type:"primary",onClick:o[0]||(o[0]=c=>e.value=!0)},{default:s(()=>[J]),_:1}),n(x,{title:"\u6E29\u99A8\u63D0\u793A",modelValue:e.value,"onUpdate:modelValue":o[4]||(o[4]=c=>e.value=c)},{footer:s(()=>[n(i,{onClick:o[2]||(o[2]=c=>e.value=!1)},{default:s(()=>[K]),_:1}),n(i,{type:"primary",onClick:o[3]||(o[3]=c=>e.value=!1)},{default:s(()=>[L]),_:1})]),default:s(()=>[n(r,{modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=c=>p.value=c)},null,8,["modelValue"])]),_:1},8,["modelValue"])],64)}}};var O=g(M,[["__scopeId","data-v-1dc37d21"]]);const P={__name:"Attributes",setup(a){const e=D({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"v-model",type:"Boolean",talk:"\u662F\u5426\u663E\u793A\u5F39\u7A97",sel:"true/false",def:"false"},{attr:"title",type:"String",talk:"\u63D0\u793A\u5185\u5BB9\u4FE1\u606F",sel:"\u2014\u2014",def:"\u63D0\u793A"},{attr:"width",type:"String",talk:"\u5F39\u7A97\u5BBD\u5EA6",sel:"\u2014\u2014",def:"30%"},{attr:"top",type:"String",talk:"\u8DDD\u79BB\u9876\u90E8\u8DDD\u79BB",sel:"\u2014\u2014",def:"15vh"}]}}),{options:p}=e;return(l,o)=>{const i=_("tTable");return d(),V(i,{options:C(p),size:"small"},null,8,["options"])}}},Q={class:"markdown-body"},R=t("h2",null,"Dialog\u7EC4\u4EF6",-1),W=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),X=t("br",null,null,-1),Y=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),Z=t("pre",null,[t("code",{class:"language-html"},`    <template>
    <t-button type='primary' @click="visible=true">\u6309\u94AE</t-button>
    <tDialog title='\u6E29\u99A8\u63D0\u793A' v-model='visible'>
        <p>77777777</p>
        <template v-slot:footer>
        <t-button @click="visible=false">\u53D6\u6D88</t-button>
        <t-button type='primary' @click="visible=false">\u786E\u8BA4</t-button>
        </template>
    </tDialog>
    </template>

    <script setup>
    import { ref } from "vue";

    const visible=ref(false)
    <\/script>
`)],-1),tt=[Y,Z],et=t("h3",null,"\u81EA\u5B9A\u4E49html\u7C7B\u578B\u6807\u9898",-1),lt=t("br",null,null,-1),ot=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),nt=t("pre",null,[t("code",{class:"language-html"},`    <template>
    <t-button type='primary' @click="visible=true">\u6309\u94AE</t-button>
    <tDialog v-model='visible'>
        <template v-slot:title>
        <h2>html\u7C7B\u578B\u6807\u9898</h2>
        </template>
        <p>77777777</p>
        <template v-slot:footer>
        <t-button @click="visible=false">\u53D6\u6D88</t-button>
        <t-button type='primary' @click="visible=false">\u786E\u8BA4</t-button>
        </template>
    </tDialog>
    </template>

    <script setup>
    import { ref } from "@vue/reactivity";

    const visible=ref(false)
    <\/script>
`)],-1),st=[ot,nt],it=t("h3",null,"\u5D4C\u5957\u5185\u5BB9",-1),at=t("br",null,null,-1),rt=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),ut=t("pre",null,[t("code",{class:"language-html"},`    <template>
    <t-button type='primary' @click="visible=true">\u6309\u94AE</t-button>
    <tDialog title='\u6E29\u99A8\u63D0\u793A' v-model='visible'>
        <t-input v-model="val"/>
        <template v-slot:footer>
        <t-button @click="visible=false">\u53D6\u6D88</t-button>
        <t-button type='primary' @click="visible=false">\u786E\u8BA4</t-button>
        </template>
    </tDialog>
    </template>

    <script setup>
    import { ref } from "@vue/reactivity";

    const visible=ref(false)
    const val=ref('')
    <\/script>
`)],-1),dt=[rt,ut],_t=t("h2",null,"Attributes \u53C2\u6570",-1),pt=t("br",null,null,-1),vt={__name:"doc",setup(a,{expose:e}){return e({frontmatter:{}}),(l,o)=>{const i=w("highlight");return d(),m("div",Q,[R,W,t("p",null,[n(A),X]),f((d(),m("details",null,tt)),[[i]]),n(b,{compName:"dialog",demoName:"demo1"}),et,t("p",null,[n(H),lt]),f((d(),m("details",null,st)),[[i]]),n(b,{compName:"dialog",demoName:"demo2"}),it,t("p",null,[n(O),at]),f((d(),m("details",null,dt)),[[i]]),n(b,{compName:"dialog",demoName:"demo3"}),_t,n(P),pt])}}};export{vt as default};
