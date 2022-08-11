import{r as p,a as u,o,c as i,e as s,g as m,h,i as v,j as f,b as t,k as d}from"./index.fbf7f88f.js";import{p as _}from"./preview.9437fdc5.js";const g={class:"container"},b={__name:"demo1",setup(c){const e=p("");return(r,l)=>{const a=u("t-input");return o(),i("div",g,[s(a,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n)},null,8,["modelValue"])])}}},k={class:"container"},y={__name:"demo2",setup(c){const e=p("");return(r,l)=>{const a=u("t-input");return o(),i("div",k,[s(a,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),disabled:""},null,8,["modelValue"])])}}},x={class:"container"},V={__name:"demo3",setup(c){const e=p("");return(r,l)=>{const a=u("t-input");return o(),i("div",x,[s(a,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),clearable:""},null,8,["modelValue"])])}}},w={class:"container"},N={__name:"demo4",setup(c){const e=p("");return(r,l)=>{const a=u("t-input");return o(),i("div",w,[s(a,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),type:"password",showPassword:!0},null,8,["modelValue"])])}}},$={__name:"Attributes",setup(c){const e=m({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"v-model",type:"String/Number",talk:"input\u7ED1\u5B9A\u503C",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"type",type:"String",talk:"\u8F93\u5165\u6846\u5185\u5BB9\u7684\u7C7B\u578B",sel:"\u2014\u2014",def:"text"},{attr:"leftIcon/rightIcon",type:"String",talk:"\u53C2\u8003\u56FE\u6807\u5E93",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"disabled",type:"Boolean",talk:"\u662F\u5426\u7981\u7528",sel:"\u2014\u2014",def:"false"},{attr:"clearable",type:"Boolean",talk:"\u662F\u5426\u663E\u793A\u6E05\u7A7A\u56FE\u6807",sel:"\u2014\u2014",def:"false"},{attr:"showPassword",type:"Boolean",talk:"\u662F\u5426\u663E\u793A\u9690\u85CF\u5BC6\u7801\u56FE\u6807\u6309\u94AE\uFF0C\u9700\u914D\u5408type\u4E3Apassword\u7C7B\u578B\u4E00\u8D77\u4F7F\u7528",sel:"\u2014\u2014",def:"false"},{attr:"readonly",type:"Boolean",talk:"\u662F\u5426\u53EA\u8BFB",sel:"\u2014\u2014",def:"false"},{attr:"placeholder",type:"String",talk:"\u8F93\u5165\u6846\u5360\u4F4D\u5B57\u7B26",sel:"\u2014\u2014",def:"\u2014\u2014"}]}}),{options:r}=e;return(l,a)=>{const n=u("tTable");return o(),h(n,{options:v(r),size:"small"},null,8,["options"])}}},B={__name:"Event",setup(c){const e=m({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"input",talk:"input\u503C\u53D8\u5316\u65F6\u89E6\u53D1",attr:"value",exm:"input=(value)=>{}"},{name:"change",talk:"\u7528\u6237\u83B7\u5F97\u7126\u70B9\u5E76\u6309\u4E0B\u56DE\u8F66\u65F6\u89E6\u53D1",attr:"event",exm:"change=(e)=>{}"},{name:"focus",talk:"\u83B7\u53D6\u7126\u70B9\u65F6\u89E6\u53D1",attr:"event",exm:"focus=(e)=>{}"},{name:"blur",talk:"\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1",attr:"event",exm:"blur=(e)=>{}"},{name:"clear",talk:"\u53EF\u4EE5\u6E05\u7A7A\u7684input\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1",attr:"event",exm:"clear=(e)=>{}"}]}}),{options:r}=e;return(l,a)=>{const n=u("tTable");return o(),h(n,{options:v(r),size:"small"},null,8,["options"])}}},S={class:"markdown-body"},T=t("h2",null,"input\u8F93\u5165\u6846",-1),U=t("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),E=t("br",null,null,-1),P=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),z=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <div class="container">
            <t-input v-model="val"/>
        </div>
    </template>

    <script setup>
        import { ref } from "vue";
        const val=ref('')
    <\/script>
`)],-1),A=[P,z],D=t("h3",null,"\u7981\u7528\u72B6\u6001",-1),I=t("br",null,null,-1),j=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),C=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <div class="container">
            <t-input v-model="val" disabled/>
        </div>
    </template>

    <script setup>
        import { ref } from "vue";
        const val=ref('')
    <\/script>
`)],-1),q=[j,C],F=t("h3",null,"\u6E05\u9664\u6240\u6709",-1),G=t("br",null,null,-1),H=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),J=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <div class="container">
            <t-input v-model="val" clearable/>
        </div>
    </template>

    <script setup>
        import { ref } from "vue";
        const val=ref('')
    <\/script>
`)],-1),K=[H,J],L=t("h3",null,"\u663E\u793A\u9690\u85CF\u5BC6\u7801",-1),M=t("br",null,null,-1),O=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),Q=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <div class="container">
            <t-input v-model="Val" type='password' :showPassword='true'/>
        </div>
    </template>

    <script setup>
        import { ref } from "vue";
        const val=ref('')
    <\/script>
`)],-1),R=[O,Q],W=t("h2",null,"Attributes \u53C2\u6570",-1),X=t("br",null,null,-1),Y=t("h2",null,"Event \u4E8B\u4EF6",-1),Z=t("br",null,null,-1),nt={__name:"doc",setup(c,{expose:e}){return e({frontmatter:{}}),(l,a)=>{const n=f("highlight");return o(),i("div",S,[T,U,t("p",null,[s(b),E]),d((o(),i("details",null,A)),[[n]]),s(_,{compName:"input",demoName:"demo1"}),D,t("p",null,[s(y),I]),d((o(),i("details",null,q)),[[n]]),s(_,{compName:"input",demoName:"demo2"}),F,t("p",null,[s(V),G]),d((o(),i("details",null,K)),[[n]]),s(_,{compName:"input",demoName:"demo3"}),L,t("p",null,[s(N),M]),d((o(),i("details",null,R)),[[n]]),s(_,{compName:"input",demoName:"demo4"}),W,s($),X,Y,s(B),Z])}}};export{nt as default};
