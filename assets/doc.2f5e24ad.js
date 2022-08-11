import{a as _,o as n,h as d,w as l,f as p,M as i,e,g as b,i as x,j as M,c as u,b as t,k as g}from"./index.fbf7f88f.js";import{p as y}from"./preview.9437fdc5.js";const k=p("\u70B9\u51FB\u89E6\u53D1"),w={__name:"demo1",setup(m){const s=()=>{i({type:"success",text:"\u8FD9\u662F\u4E00\u4E2Amessage"})};return(o,r)=>{const a=_("t-button");return n(),d(a,{type:"primary",onClick:s},{default:l(()=>[k]),_:1})}}},C=p("\u70B9\u51FB\u5DE6\u8FB9\u5F39\u7A97"),N=p("\u70B9\u51FB\u4E2D\u95F4\u5F39\u7A97"),$=p("\u70B9\u51FB\u53F3\u8FB9\u5F39\u7A97"),v={__name:"demo2",setup(m){const s=()=>{i({text:"\u8FD9\u662F\u4E00\u4E2Amessage",location:"left"})},o=()=>{i({type:"success",text:"\u8FD9\u662F\u4E00\u4E2Amessage"})},r=()=>{i({type:"error",text:"\u8FD9\u662F\u4E00\u4E2Amessage",location:"right"})};return(a,c)=>{const h=_("t-button"),f=_("t-space");return n(),d(f,null,{default:l(()=>[e(h,{type:"primary",onClick:s},{default:l(()=>[C]),_:1}),e(h,{type:"primary",onClick:o},{default:l(()=>[N]),_:1}),e(h,{type:"primary",onClick:r},{default:l(()=>[$]),_:1})]),_:1})}}},S=p("\u70B9\u51FB\u89E6\u53D1"),j={__name:"demo3",setup(m){const s=()=>{i({type:"custom",text:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272\u80CC\u666F",icon:"t-icon-check",textColor:"#000",bgColor:"#e19af3"})};return(o,r)=>{const a=_("t-button");return n(),d(a,{type:"primary",onClick:s},{default:l(()=>[S]),_:1})}}},B={__name:"Attributes",setup(m){const s=b({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"type",type:"String",talk:"\u6D88\u606F\u63D0\u793A\u7C7B\u578B",sel:"warn/error/success/custom",def:"warn"},{attr:"text",type:"String",talk:"\u63D0\u793A\u5185\u5BB9",sel:"\u2014\u2014",def:"300"},{attr:"location",type:"String",talk:"\u6D88\u606F\u63D0\u793A\u6846\u51FA\u73B0\u4F4D\u7F6E",sel:"\u2014\u2014",def:"250"},{attr:"icon",type:"String",talk:"\u81EA\u5B9A\u4E49\u56FE\u6807",sel:"\u2014\u2014",def:"false"},{attr:"textColor",type:"String",talk:"\u81EA\u5B9A\u4E49\u63D0\u793A\u5185\u5BB9\u6587\u672C\u989C\u8272\u914D\uFF0C\u914D\u5408type\u4E3Acustom\u4F7F\u7528",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"bgColor",type:"String",talk:"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272\uFF0C\u914D\u5408type\u4E3Acustom\u4F7F\u7528",sel:"\u2014\u2014",def:"\u2014\u2014"}]}}),{options:o}=s;return(r,a)=>{const c=_("tTable");return n(),d(c,{options:x(o),size:"small"},null,8,["options"])}}},T={class:"markdown-body"},V=t("h2",null,"Message\u5F39\u7A97\u7EC4\u4EF6",-1),A=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),D=t("br",null,null,-1),z=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),E=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <t-button type='primary' @click="showMessage">\u70B9\u51FB\u89E6\u53D1</t-button>
    </template>

    <script setup>
    import Message from '../index.js'
    const showMessage=()=>{
        Message({type:'success',text:'\u8FD9\u662F\u4E00\u4E2Amessage'})
    }
    <\/script>
`)],-1),q=[z,E],F=t("h3",null,"\u4E0D\u540C\u4F4D\u7F6E\u5C55\u793A",-1),G=t("br",null,null,-1),H=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),I=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <t-space>
            <t-button type='primary' @click="showMessage1">\u70B9\u51FB\u5DE6\u8FB9\u5F39\u7A97</t-button>
            <t-button type='primary' @click="showMessage2">\u70B9\u51FB\u4E2D\u95F4\u5F39\u7A97</t-button>
            <t-button type='primary' @click="showMessage3">\u70B9\u51FB\u53F3\u8FB9\u5F39\u7A97</t-button>
        </t-space>
    </template>

    <script setup>
    import Message from '../index.js'
    const showMessage1=()=>{
        Message({text:'\u8FD9\u662F\u4E00\u4E2Amessage',location:'left'})
    }
    const showMessage2=()=>{
        Message({type:'success',text:'\u8FD9\u662F\u4E00\u4E2Amessage'})
    }
    const showMessage3=()=>{
        Message({type:'error',text:'\u8FD9\u662F\u4E00\u4E2Amessage',location:'right'})
    }
    <\/script>
`)],-1),J=[H,I],K=t("h3",null,"\u591A\u6837\u6027\u81EA\u5B9A\u4E49",-1),L=t("br",null,null,-1),O=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),P=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <t-button type='primary' @click="showMessage">\u70B9\u51FB\u89E6\u53D1</t-button>
    </template>

    <script setup>
    import Message from '../index.js'
    const showMessage=()=>{
        Message({
            type:'custom',
            text:'\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272\u80CC\u666F',
            icon: "t-icon-check",
            textColor: "#000",
            bgColor: "#e19af3",
            })
    }
    <\/script>
`)],-1),Q=[O,P],R=t("h2",null,"Attributes \u53C2\u6570",-1),U=t("br",null,null,-1),Y={__name:"doc",setup(m,{expose:s}){return s({frontmatter:{}}),(r,a)=>{const c=M("highlight");return n(),u("div",T,[V,A,t("p",null,[e(w),D]),g((n(),u("details",null,q)),[[c]]),e(y,{compName:"message",demoName:"demo1"}),F,t("p",null,[e(v),G]),g((n(),u("details",null,J)),[[c]]),e(y,{compName:"message",demoName:"demo2"}),K,t("p",null,[e(j),L]),g((n(),u("details",null,Q)),[[c]]),e(y,{compName:"message",demoName:"demo3"}),R,e(B),U])}}};export{Y as default};
