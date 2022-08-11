import{a as r,o,h as u,w as i,f as d,C as m,M as x,s as y,e as n,g as w,i as k,j as C,c as _,b as t,k as h}from"./index.fbf7f88f.js";import{p as f}from"./preview.9437fdc5.js";const $=d("\u70B9\u51FB\u89E6\u53D1"),M={__name:"demo1",setup(p){const e=()=>{m({title:"\u8B66\u544A",text:"\u786E\u8BA4\u64CD\u4F5C\u5417?"}).then(()=>{x({type:"success",text:"\u4F60\u5DF2\u7ECF\u786E\u8BA4\u64CD\u4F5C"})},()=>{x({text:"\u4F60\u5DF2\u7ECF\u53D6\u6D88\u64CD\u4F5C"})})};return(c,a)=>{const l=r("t-button");return o(),u(l,{type:"primary",onClick:e},{default:i(()=>[$]),_:1})}}},S=d("\u70B9\u51FB\u89E6\u53D1"),T={__name:"demo2",setup(p){const e=y(),c=()=>{m({title:"\u8B66\u544A",text:"\u786E\u8BA4\u64CD\u4F5C\u5417?",closeShow:!1}).then(()=>{e.proxy.$message({type:"success",text:"\u4F60\u5DF2\u7ECF\u786E\u8BA4\u64CD\u4F5C"})},()=>{e.proxy.$message({text:"\u4F60\u5DF2\u7ECF\u53D6\u6D88\u64CD\u4F5C"})})};return(a,l)=>{const s=r("t-button");return o(),u(s,{type:"primary",onClick:c},{default:i(()=>[S]),_:1})}}},v=d("\u70B9\u51FB\u89E6\u53D1"),B=d("\u70B9\u51FB\u89E6\u53D1"),N={__name:"demo3",setup(p){const e=y(),c=()=>{m({title:"\u63D0\u793A\u4FE1\u606F",text:"\u786E\u8BA42022-02-02\u662F\u60A8\u7684\u751F\u65E5\u5417\uFF1F",icon:"t-icon-calendar",submitText:"\u662F\u7684",cancelText:"\u4E0D\u662F",closeShow:!1}).then(()=>{e.proxy.$message({type:"success",text:"\u4F60\u5DF2\u7ECF\u786E\u8BA4\u64CD\u4F5C"})},()=>{e.proxy.$message({text:"\u4F60\u5DF2\u7ECF\u53D6\u6D88\u64CD\u4F5C"})})},a=()=>{m({title:"\u91CD\u8981\u4FE1\u606F",text:"\u98DE\u8239\u5C06\u4E8E3.0pm\u964D\u843D!!",icon:"t-icon-delete",submitText:"\u6536\u5230",cancelShow:!1,closeShow:!1}).then(()=>{e.proxy.$message({type:"success",text:"\u4F60\u5DF2\u7ECF\u786E\u8BA4\u64CD\u4F5C"})},()=>{e.proxy.$message({text:"\u4F60\u5DF2\u7ECF\u53D6\u6D88\u64CD\u4F5C"})})};return(l,s)=>{const g=r("t-button"),b=r("t-space");return o(),u(b,null,{default:i(()=>[n(g,{type:"primary",onClick:c},{default:i(()=>[v]),_:1}),n(g,{type:"primary",onClick:a},{default:i(()=>[B]),_:1})]),_:1})}}},j={__name:"Attributes",setup(p){const e=w({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"title",type:"String",talk:"\u6807\u9898\u6587\u672C",sel:"\u2014\u2014",def:"\u6E29\u99A8\u63D0\u793A"},{attr:"text",type:"String",talk:"\u5185\u5BB9\u6587\u672C",sel:"\u2014\u2014",def:"\u60A8\u786E\u8BA4\u64CD\u4F5C\u5417\uFF1F"},{attr:"cancelCallback",type:"Function",talk:"\u53D6\u6D88\u6309\u94AE\u56DE\u8C03\u51FD\u6570",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"submitCallback",type:"Function",talk:"\u786E\u5B9A\u6309\u94AE\u56DE\u8C03\u51FD\u6570",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"cancelText",type:"String",talk:"\u53D6\u6D88\u6309\u94AE\u6587\u672C",sel:"\u2014\u2014",def:"\u53D6\u6D88"},{attr:"submitText",type:"String",talk:"\u786E\u5B9A\u6309\u94AE\u6587\u672C",sel:"\u2014\u2014",def:"\u786E\u8BA4"},{attr:"submitShow",type:"Boolean",talk:"\u662F\u5426\u5C55\u793A\u786E\u8BA4\u6309\u94AE",sel:"true/false",def:"true"},{attr:"cancelShow",type:"Boolean",talk:"\u662F\u5426\u5C55\u793A\u53D6\u6D88\u6309\u94AE",sel:"true/false",def:"true"},{attr:"closeShow",type:"Boolean",talk:"\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u56FE\u6807",sel:"true/false",def:"true"},{attr:"icon",type:"String",talk:"\u81EA\u5B9A\u4E49icon\u56FE\u6807",sel:"\u53C2\u8003\u56FE\u6807\u5E93",def:"warning"}]}}),{options:c}=e;return(a,l)=>{const s=r("tTable");return o(),u(s,{options:k(c),size:"small"},null,8,["options"])}}},I={class:"markdown-body"},P=t("h2",null,"Confirm\u786E\u8BA4\u6846\u7EC4\u4EF6",-1),V=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),A=t("br",null,null,-1),D={bgcolor:"PowderBlue"},F=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),z=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <t-button type='primary' @click="showMessage">\u70B9\u51FB\u89E6\u53D1</t-button>
    </template>

    <script setup>
    import Confirm from '../index.js'
    import Message from '../../message/index.js'
    const showMessage=()=>{
        Confirm({title:'\u8B66\u544A',text:'\u786E\u8BA4\u64CD\u4F5C\u5417?'}).then(()=>{
            Message({type:'success',text:'\u4F60\u5DF2\u7ECF\u786E\u8BA4\u64CD\u4F5C'})
        },()=>{
            Message({text:'\u4F60\u5DF2\u7ECF\u53D6\u6D88\u64CD\u4F5C'})
        })
    }
    <\/script>
`)],-1),E=[F,z],q=t("h3",null,"\u53D6\u6D88\u53F3\u4E0A\u89D2\u6309\u94AE",-1),G=t("br",null,null,-1),H={bgcolor:"PowderBlue"},J=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),K=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <t-button type='primary' @click="showMessage">\u70B9\u51FB\u89E6\u53D1</t-button>
    </template>

    <script setup>
    import Confirm from '../index.js'
    import { getCurrentInstance } from 'vue'
    const instance=getCurrentInstance()
    const showMessage=()=>{
        Confirm({title:'\u8B66\u544A',text:'\u786E\u8BA4\u64CD\u4F5C\u5417?',closeShow:false}).then(()=>{
            instance.proxy.$message({type:'success',text:'\u4F60\u5DF2\u7ECF\u786E\u8BA4\u64CD\u4F5C'})
        },()=>{
            instance.proxy.$message({text:'\u4F60\u5DF2\u7ECF\u53D6\u6D88\u64CD\u4F5C'})
        })
    }
    <\/script>
`)],-1),L=[J,K],O=t("h3",null,"\u81EA\u5B9A\u4E49\u914D\u7F6E",-1),Q=t("br",null,null,-1),R={bgcolor:"PowderBlue"},U=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),W=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <t-space>
            <t-button type='primary' @click="showMessage1">\u70B9\u51FB\u89E6\u53D1</t-button>
            <t-button type='primary' @click="showMessage2">\u70B9\u51FB\u89E6\u53D1</t-button>
        </t-space>
    </template>

    <script setup>
    import Confirm from '../index.js'
    import { getCurrentInstance } from 'vue'
    const instance=getCurrentInstance()
    const showMessage1=()=>{
        Confirm({
            title: "\u63D0\u793A\u4FE1\u606F",
            text: "\u786E\u8BA42022-02-02\u662F\u60A8\u7684\u751F\u65E5\u5417\uFF1F",
            icon: "t-icon-calendar",
            submitText: "\u662F\u7684",
            cancelText: "\u4E0D\u662F",
            closeShow: false,
        }).then(()=>{
            instance.proxy.$message({type:'success',text:'\u4F60\u5DF2\u7ECF\u786E\u8BA4\u64CD\u4F5C'})
        },()=>{
            instance.proxy.$message({text:'\u4F60\u5DF2\u7ECF\u53D6\u6D88\u64CD\u4F5C'})
        })
    }
    const showMessage2=()=>{
        Confirm({
            title: "\u91CD\u8981\u4FE1\u606F",
            text: "\u98DE\u8239\u5C06\u4E8E3.0pm\u964D\u843D!!",
            icon: "t-icon-delete",
            submitText: "\u6536\u5230",
            cancelShow:false,
            closeShow: false,
        }).then(()=>{
            instance.proxy.$message({type:'success',text:'\u4F60\u5DF2\u7ECF\u786E\u8BA4\u64CD\u4F5C'})
        },()=>{
            instance.proxy.$message({text:'\u4F60\u5DF2\u7ECF\u53D6\u6D88\u64CD\u4F5C'})
        })
    }
    <\/script>
`)],-1),X=[U,W],Y=t("h2",null,"Attributes \u53C2\u6570",-1),Z=t("br",null,null,-1),nt={__name:"doc",setup(p,{expose:e}){return e({frontmatter:{}}),(a,l)=>{const s=C("highlight");return o(),_("div",I,[P,V,t("p",null,[n(M),A]),h((o(),_("details",D,E)),[[s]]),n(f,{compName:"confirm",demoName:"demo1"}),q,t("p",null,[n(T),G]),h((o(),_("details",H,L)),[[s]]),n(f,{compName:"confirm",demoName:"demo2"}),O,t("p",null,[n(N),Q]),h((o(),_("details",R,X)),[[s]]),n(f,{compName:"confirm",demoName:"demo3"}),Y,n(j),Z])}}};export{nt as default};
