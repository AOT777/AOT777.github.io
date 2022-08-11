import{r as _,a as u,o as a,h as d,c as r,e as s,F as g,b as t,g as f,i as v,j as w,k as m}from"./index.fbf7f88f.js";import{p}from"./preview.9437fdc5.js";const x={__name:"demo1",setup(i){const e=_(!1);return(c,n)=>{const o=u("tSwitch");return a(),d(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l)},null,8,["modelValue"])}}},S={__name:"demo2",setup(i){const e=_(!1);return(c,n)=>{const o=u("tSwitch");return a(),d(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l),activeColor:"#67c23a",inactiveColor:"#f56c6c"},null,8,["modelValue"])}}},b=t("br",null,null,-1),T={__name:"demo3",setup(i){const e=_(!1),c=_(!1);return(n,o)=>{const l=u("tSwitch");return a(),r(g,null,[s(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=h=>e.value=h),closeText:"\u5173\u95ED",activeText:"\u5F00\u542F"},null,8,["modelValue"]),b,s(l,{modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=h=>c.value=h),closeText:"\u5173\u95ED",activeText:"\u5F00\u542F",textAlign:"right"},null,8,["modelValue"])],64)}}},V={__name:"demo4",setup(i){const e=_(!1);return(c,n)=>{const o=u("tSwitch");return a(),d(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l),disabled:""},null,8,["modelValue"])}}},k={__name:"demo5",setup(i){const e=_(!1);return(c,n)=>{const o=u("tSwitch");return a(),d(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l),showTipsText:""},null,8,["modelValue"])}}},y={__name:"Attributes",setup(i){const e=f({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"v-model",type:"Boolean",talk:"\u5F00\u5173\u72B6\u6001",sel:"true/false",def:"false"},{attr:"activeColor",type:"String",talk:"\u81EA\u5B9A\u4E49\u5F00\u542F\u65F6\u7684\u989C\u8272",sel:"\u2014\u2014",def:"#409eff"},{attr:"inactiveColor",type:"String",talk:"\u81EA\u5B9A\u4E49\u5173\u95ED\u65F6\u7684\u989C\u8272",sel:"\u2014\u2014",def:"#dcdfe6"},{attr:"closeText",type:"String",talk:"\u5173\u95ED\u72B6\u6001\u65F6\u8F85\u52A9\u6587\u5B57",sel:"\u2014\u2014",def:""},{attr:"activeText",type:"String",talk:"\u5F00\u542F\u72B6\u6001\u65F6\u8F85\u52A9\u6587\u5B57",sel:"\u2014\u2014",def:""},{attr:"textAlign",type:"String",talk:"\u8F85\u52A9\u6587\u5B57\u4F4D\u7F6E",sel:"left/right",def:"left"},{attr:"disabled",type:"Boolean",talk:"\u662F\u5426\u7981\u7528",sel:"true/false",def:"false"},{attr:"showTipsText",type:"Boolean",talk:"\u662F\u5426\u663E\u793A\u63D0\u793A\u4FE1\u606F",sel:"true/false",def:"false"}]}}),{options:c}=e;return(n,o)=>{const l=u("tTable");return a(),d(l,{options:v(c),size:"small"},null,8,["options"])}}},N={__name:"Event",setup(i){const e=f({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"change",talk:"\u9009\u4E2D\u4E8B\u4EF6",attr:"value",exm:"change=(value)=>{}"}]}}),{options:c}=e;return(n,o)=>{const l=u("tTable");return a(),d(l,{options:v(c),size:"small"},null,8,["options"])}}},$={class:"markdown-body"},B=t("h2",null,"Switch\u5F00\u5173",-1),C=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),U=t("br",null,null,-1),A=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),E=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <tSwitch v-model="active"></tSwitch>
    </template>

    <script setup>
    import { ref } from "vue";
    const active=ref(false)
    <\/script>
`)],-1),z=[A,E],D=t("h3",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),F=t("br",null,null,-1),j=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),q=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <tSwitch v-model="active" activeColor='#67c23a' inactiveColor='#f56c6c'></tSwitch>
    </template>

    <script setup>
    import { ref } from "vue";
    const active=ref(false)
    <\/script>
`)],-1),G=[j,q],H=t("h3",null,"\u5E26\u8F85\u52A9\u6587\u5B57",-1),I=t("br",null,null,-1),J=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),K=t("pre",null,[t("code",{class:"language-html"},`    <template>
    <tSwitch v-model="active" closeText="\u5173\u95ED" activeText="\u5F00\u542F"></tSwitch><br/>
    <tSwitch v-model="active1" closeText="\u5173\u95ED" activeText="\u5F00\u542F" textAlign="right"></tSwitch>
    </template>

    <script setup>
    import { ref } from "vue"
    const active=ref(false)
    const active1=ref(false)
    <\/script>
`)],-1),L=[J,K],M=t("h3",null,"\u7981\u7528",-1),O=t("br",null,null,-1),P=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),Q=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <tSwitch v-model="active" disabled></tSwitch>
    </template>

    <script setup>
    import { ref } from "vue";
    const active=ref(false)
    <\/script>
`)],-1),R=[P,Q],W=t("h3",null,"\u5E26\u63D0\u793A\u4FE1\u606F",-1),X=t("br",null,null,-1),Y=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),Z=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <tSwitch v-model="active" showTipsText></tSwitch>
    </template>

    <script setup>
    import { ref } from "vue";
    const active=ref(false)
    <\/script>
`)],-1),tt=[Y,Z],et=t("h2",null,"Attributes \u53C2\u6570",-1),lt=t("br",null,null,-1),nt=t("h2",null,"Event \u4E8B\u4EF6",-1),ot=t("br",null,null,-1),ct={__name:"doc",setup(i,{expose:e}){return e({frontmatter:{}}),(n,o)=>{const l=w("highlight");return a(),r("div",$,[B,C,t("p",null,[s(x),U]),m((a(),r("details",null,z)),[[l]]),s(p,{compName:"switch",demoName:"demo1"}),D,t("p",null,[s(S),F]),m((a(),r("details",null,G)),[[l]]),s(p,{compName:"switch",demoName:"demo2"}),H,t("p",null,[s(T),I]),m((a(),r("details",null,L)),[[l]]),s(p,{compName:"switch",demoName:"demo3"}),M,t("p",null,[s(V),O]),m((a(),r("details",null,R)),[[l]]),s(p,{compName:"switch",demoName:"demo4"}),W,t("p",null,[s(k),X]),m((a(),r("details",null,tt)),[[l]]),s(p,{compName:"switch",demoName:"demo5"}),et,s(y),lt,nt,s(N),ot])}}};export{ct as default};
