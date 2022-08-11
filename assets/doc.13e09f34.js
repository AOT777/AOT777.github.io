import{r as h,a as c,o as i,c as p,e,w as o,F as B,f as d,b as t,M as y,g as V,h as b,i as S,j as N,k}from"./index.fbf7f88f.js";import{p as $}from"./preview.9437fdc5.js";const T=d("\u57FA\u672C\u4F7F\u7528"),M=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),U=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),E=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),F={__name:"demo1",setup(w){const n=h(!1),s=()=>{n.value=!0},r=()=>{y({type:"success",text:"\u786E\u8BA4\u4E8B\u4EF6"})},a=()=>{y({text:"\u53D6\u6D88\u4E8B\u4EF6"})};return(l,m)=>{const v=c("tButton"),g=c("tDrawer");return i(),p(B,null,[e(v,{onClick:s},{default:o(()=>[T]),_:1}),e(g,{modelValue:n.value,"onUpdate:modelValue":m[0]||(m[0]=x=>n.value=x),title:"\u57FA\u672C\u4F7F\u7528",onConfirm:r,onCancel:a},{content:o(()=>[M,U,E]),_:1},8,["modelValue"])],64)}}},j=d("\u5DE6\u8FB9\u51FA\u73B0"),z=d("\u53F3\u8FB9\u51FA\u73B0"),A=d("\u4E0A\u8FB9\u51FA\u73B0"),H=d("\u4E0B\u8FB9\u51FA\u73B0"),O=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),q=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),G=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),I=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),J=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),K=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),L=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),P=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),Q=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),R=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),W=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),X=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),Y={__name:"demo2",setup(w){const n=h(!1),s=h(!1),r=h(!1),a=h(!1),l=()=>{n.value=!0},m=()=>{s.value=!0},v=()=>{r.value=!0},g=()=>{a.value=!0};return(x,u)=>{const f=c("tButton"),C=c("tSpace"),D=c("tDrawer");return i(),p(B,null,[e(C,null,{default:o(()=>[e(f,{onClick:l},{default:o(()=>[j]),_:1}),e(f,{onClick:m},{default:o(()=>[z]),_:1}),e(f,{onClick:v},{default:o(()=>[A]),_:1}),e(f,{onClick:g},{default:o(()=>[H]),_:1})]),_:1}),e(D,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=_=>n.value=_),title:"\u5DE6\u8FB9\u51FA\u73B0\u7684\u62BD\u5C49"},{content:o(()=>[O,q,G]),_:1},8,["modelValue"]),e(D,{modelValue:s.value,"onUpdate:modelValue":u[1]||(u[1]=_=>s.value=_),title:"\u53F3\u8FB9\u51FA\u73B0\u7684\u62BD\u5C49",direction:"right"},{content:o(()=>[I,J,K]),_:1},8,["modelValue"]),e(D,{modelValue:r.value,"onUpdate:modelValue":u[2]||(u[2]=_=>r.value=_),title:"\u4E0A\u8FB9\u51FA\u73B0\u7684\u62BD\u5C49",direction:"top"},{content:o(()=>[L,P,Q]),_:1},8,["modelValue"]),e(D,{modelValue:a.value,"onUpdate:modelValue":u[3]||(u[3]=_=>a.value=_),title:"\u4E0B\u8FB9\u51FA\u73B0\u7684\u62BD\u5C49",direction:"bottom"},{content:o(()=>[R,W,X]),_:1},8,["modelValue"])],64)}}},Z=d("\u57FA\u672C\u4F7F\u7528"),tt=d(" \u8FD9\u662F\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9 "),et=d("\u81EA\u5B9A\u4E49\u6309\u94AE"),nt=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),ot=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),lt=t("div",null,"\u5185\u5BB9\u533A\u57DF",-1),st=d(" \u8FD9\u662F\u5E95\u90E8\u81EA\u5B9A\u4E49\u4FE1\u606F "),at={__name:"demo3",setup(w){const n=h(!1),s=()=>{n.value=!0};return(r,a)=>{const l=c("tButton"),m=c("tDrawer");return i(),p(B,null,[e(l,{onClick:s},{default:o(()=>[Z]),_:1}),e(m,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=v=>n.value=v)},{header:o(()=>[tt,e(l,{type:"success",style:{position:"absolute",right:"20px"}},{default:o(()=>[et]),_:1})]),content:o(()=>[nt,ot,lt]),footer:o(()=>[st]),_:1},8,["modelValue"])],64)}}},rt={__name:"Attributes",setup(w){const n=V({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"title",type:"String",talk:"\u6807\u9898\u6587\u672C",sel:"\u2014\u2014",def:"\u6807\u9898"},{attr:"width",type:"String",talk:"\u62BD\u5C49\u5BBD\u5EA6",sel:"\u2014\u2014",def:"30%"},{attr:"height",type:"String",talk:"\u62BD\u5C49\u9AD8\u5EA6",sel:"\u2014\u2014",def:"40%"},{attr:"direction",type:"String",talk:"\u62BD\u5C49\u8FDB\u5165\u65B9\u5411",sel:"left/right/top/bottom",def:"left"},{attr:"showHeader",type:"Boolean",talk:"\u662F\u5426\u663E\u793A\u62BD\u5C49\u5934\u90E8",sel:"true/false",def:"true"},{attr:"showFooter",type:"Boolean",talk:"\u662F\u5426\u663E\u793A\u62BD\u5C49\u5C3E\u90E8",sel:"true/false",def:"true"},{attr:"showClose",type:"Boolean",talk:"\u662F\u5426\u663E\u793A\u5934\u90E8\u5173\u95ED\u56FE\u6807",sel:"true/false",def:"true"},{attr:"confirmText",type:"String",talk:"\u786E\u8BA4\u6309\u94AE\u6587\u672C",sel:"\u2014\u2014",def:"\u786E\u5B9A"},{attr:"cancelText",type:"String",talk:"\u53D6\u6D88\u6309\u94AE\u6587\u672C",sel:"\u2014\u2014",def:"\u53D6\u6D88"},{attr:"confirmShow",type:"Boolean",talk:"\u662F\u5426\u663E\u793A\u5934\u90E8\u786E\u8BA4\u6309\u94AE",sel:"true/false",def:"true"},{attr:"cancelShow",type:"Boolean",talk:"\u662F\u5426\u663E\u793A\u5934\u90E8\u53D6\u6D88\u6309\u94AE",sel:"true/false",def:"true"},{attr:"closeOnModal",type:"Boolean",talk:"\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42",sel:"true/false",def:"true"}]}}),{options:s}=n;return(r,a)=>{const l=c("tTable");return i(),b(l,{options:S(s),size:"small"},null,8,["options"])}}},it={__name:"Event",setup(w){const n=V({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"close",talk:"\u5173\u95ED\u6309\u94AE\u56DE\u8C03",attr:"\u2014\u2014",exm:"close=()=>{}"},{name:"confirm",talk:"\u786E\u8BA4\u6309\u94AE\u56DE\u8C03",attr:"\u2014\u2014",exm:"confirm=()=>{}"},{name:"cancel",talk:"\u53D6\u6D88\u6309\u94AE\u56DE\u8C03",attr:"\u2014\u2014",exm:"cancel=()=>{}"}]}}),{options:s}=n;return(r,a)=>{const l=c("tTable");return i(),b(l,{options:S(s),size:"small"},null,8,["options"])}}},ct={class:"markdown-body"},dt=t("h2",null,"Drawer\u62BD\u5C49\u7EC4\u4EF6",-1),ut=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),_t=t("br",null,null,-1),pt=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),mt=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <tButton @click="openDrawer">\u57FA\u672C\u4F7F\u7528</tButton>
        <tDrawer 
        v-model="showDrawer" 
        title="\u57FA\u672C\u4F7F\u7528"
        @confirm='confirm'
        @cancel='cancel'>
            <template #content>
                <div>\u5185\u5BB9\u533A\u57DF</div>
                <div>\u5185\u5BB9\u533A\u57DF</div>
                <div>\u5185\u5BB9\u533A\u57DF</div>
            </template>
        </tDrawer>
    </template>

    <script setup>
    import { ref } from "vue";
    import Message from '../../message/index.js'
    const showDrawer=ref(false)
    const openDrawer=()=>{
        showDrawer.value=true
    }
    const confirm=()=>{
        Message({type:'success',text:'\u786E\u8BA4\u4E8B\u4EF6'})
    }
    const cancel=()=>{
        Message({text:'\u53D6\u6D88\u4E8B\u4EF6'})
    }
    <\/script>
`)],-1),ht=[pt,mt],wt=t("h3",null,"\u8BBE\u7F6E\u62BD\u5C49\u51FA\u73B0\u7684\u4F4D\u7F6E",-1),vt=t("br",null,null,-1),ft=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),Dt=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <tSpace>
            <tButton @click="openDrawer1">\u5DE6\u8FB9\u51FA\u73B0</tButton>
            <tButton @click="openDrawer2">\u53F3\u8FB9\u51FA\u73B0</tButton>
            <tButton @click="openDrawer3">\u4E0A\u8FB9\u51FA\u73B0</tButton>
            <tButton @click="openDrawer4">\u4E0B\u8FB9\u51FA\u73B0</tButton>
        </tSpace>
        <tDrawer v-model="showDrawer1" title="\u5DE6\u8FB9\u51FA\u73B0\u7684\u62BD\u5C49">
            <template #content>
                <div>\u5185\u5BB9\u533A\u57DF</div>
                <div>\u5185\u5BB9\u533A\u57DF</div>
                <div>\u5185\u5BB9\u533A\u57DF</div>
            </template>
        </tDrawer>
        <tDrawer v-model="showDrawer2" title="\u53F3\u8FB9\u51FA\u73B0\u7684\u62BD\u5C49" direction='right'>
            <template #content>
                <div>\u5185\u5BB9\u533A\u57DF</div>
                <div>\u5185\u5BB9\u533A\u57DF</div>
                <div>\u5185\u5BB9\u533A\u57DF</div>
            </template>
        </tDrawer>
        <tDrawer v-model="showDrawer3" title="\u4E0A\u8FB9\u51FA\u73B0\u7684\u62BD\u5C49" direction='top'>
            <template #content>
                <div>\u5185\u5BB9\u533A\u57DF</div>
                <div>\u5185\u5BB9\u533A\u57DF</div>
                <div>\u5185\u5BB9\u533A\u57DF</div>
            </template>
        </tDrawer>
        <tDrawer v-model="showDrawer4" title="\u4E0B\u8FB9\u51FA\u73B0\u7684\u62BD\u5C49" direction='bottom'>
            <template #content>
                <div>\u5185\u5BB9\u533A\u57DF</div>
                <div>\u5185\u5BB9\u533A\u57DF</div>
                <div>\u5185\u5BB9\u533A\u57DF</div>
            </template>
        </tDrawer>
    </template>

    <script setup>
    import { ref } from "vue";
    const showDrawer1=ref(false)
    const showDrawer2=ref(false)
    const showDrawer3=ref(false)
    const showDrawer4=ref(false)
    const openDrawer1=()=>{
        showDrawer1.value=true
    }
    const openDrawer2=()=>{
        showDrawer2.value=true
    }
    const openDrawer3=()=>{
        showDrawer3.value=true
    }
    const openDrawer4=()=>{
        showDrawer4.value=true
    }
    <\/script>
`)],-1),gt=[ft,Dt],kt=t("h3",null,"\u4F7F\u7528\u5177\u540D\u63D2\u69FD\u81EA\u5B9A\u4E49",-1),$t=t("br",null,null,-1),Bt=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),xt=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <tButton @click="openDrawer">\u57FA\u672C\u4F7F\u7528</tButton>
        <tDrawer v-model="showDrawer">
            <template #header>
                \u8FD9\u662F\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9
                <tButton type='success' style="position:absolute;right:20px">\u81EA\u5B9A\u4E49\u6309\u94AE</tButton>
            </template>
            <template #content>
                <div>\u5185\u5BB9\u533A\u57DF</div>
                <div>\u5185\u5BB9\u533A\u57DF</div>
                <div>\u5185\u5BB9\u533A\u57DF</div>
            </template>
            <template #footer>
                \u8FD9\u662F\u5E95\u90E8\u81EA\u5B9A\u4E49\u4FE1\u606F
            </template>
        </tDrawer>
    </template>

    <script setup>
    import { ref } from "vue";
    const showDrawer=ref(false)
    const openDrawer=()=>{
        showDrawer.value=true
    }
    <\/script>
`)],-1),yt=[Bt,xt],Vt=t("h2",null,"Attributes \u53C2\u6570",-1),bt=t("br",null,null,-1),St=t("h2",null,"Event \u4E8B\u4EF6",-1),Ct=t("br",null,null,-1),Mt={__name:"doc",setup(w,{expose:n}){return n({frontmatter:{}}),(r,a)=>{const l=N("highlight");return i(),p("div",ct,[dt,ut,t("p",null,[e(F),_t]),k((i(),p("details",null,ht)),[[l]]),e($,{compName:"drawer",demoName:"demo1"}),wt,t("p",null,[e(Y),vt]),k((i(),p("details",null,gt)),[[l]]),e($,{compName:"drawer",demoName:"demo2"}),kt,t("p",null,[e(at),$t]),k((i(),p("details",null,yt)),[[l]]),e($,{compName:"drawer",demoName:"demo3"}),Vt,e(rt),bt,St,e(it),Ct])}}};export{Mt as default};
