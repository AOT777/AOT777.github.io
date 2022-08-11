import{r as b,g as r,a as d,o as a,h as u,i as p,j as v,c as _,b as e,e as s,k as m}from"./index.fbf7f88f.js";import{p as h}from"./preview.9437fdc5.js";const y={__name:"demo1",setup(i){const l=b("zhongguo"),n=r({selOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u4FC4\u7F57\u65AF",value:"eluosi",disabled:!0},{label:"\u7F8E\u56FD",value:"meiguo"},{label:"\u6FB3\u5927\u5229\u4E9A",value:"aodaliya"},{label:"\u5DF4\u57FA\u65AF\u5766",value:"bajisitan"}]}),{selOptions:o}=n;return(c,t)=>{const f=d("tSelect");return a(),u(f,{options:p(o),placeholder:"\u8BF7\u9009\u62E9",modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=g=>l.value=g)},null,8,["options","modelValue"])}}},k={__name:"demo2",setup(i){const l=r({selOptions:[{name:"\u4E2D\u56FD",id:"zhongguo"},{name:"\u4FC4\u7F57\u65AF",id:"eluosi"},{name:"\u7F8E\u56FD",id:"meiguo"},{name:"\u6FB3\u5927\u5229\u4E9A",id:"aodaliya"},{name:"\u5DF4\u57FA\u65AF\u5766",id:"bajisitan"}]}),{selOptions:n}=l;return(o,c)=>{const t=d("tSelect");return a(),u(t,{options:p(n),filedLabel:"name",filedValue:"id"},null,8,["options"])}}},S={__name:"Attributes",setup(i){const l=r({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"v-model",type:"String/Array",talk:"\u4E0B\u62C9\u6846\u7ED1\u5B9A\u503C\uFF0C\u5F00\u542F\u591A\u9009\u65F6\u7C7B\u578B\u4E3AArray",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"options",type:"Array",talk:"\u4E0B\u62C9\u6846\u6570\u636E\u914D\u7F6E\uFF0C\u5177\u4F53\u89C1\u4E0B\u65B9 options API",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"disabled",type:"Boolean",talk:"\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001",sel:"true/false",def:"false"},{attr:"filedLabel",type:"String",talk:"\u81EA\u5B9A\u4E49\u66FF\u6362lable\u7684\u5B57\u6BB5\u540D",sel:"\u2014\u2014",def:"label"},{attr:"filedValue",type:"String",talk:"\u81EA\u5B9A\u4E49\u66FF\u6362value\u7684\u5B57\u6BB5\u540D",sel:"\u2014\u2014",def:"value"},{attr:"placeholder",type:"String",talk:"\u4E0B\u62C9\u6846\u5360\u4F4D\u5B57\u7B26",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"width",type:"String",talk:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"height",type:"String",talk:"\u81EA\u5B9A\u4E49\u9AD8\u5EA6",sel:"\u2014\u2014",def:"\u2014\u2014"}]}}),{options:n}=l;return(o,c)=>{const t=d("tTable");return a(),u(t,{options:p(n),size:"small"},null,8,["options"])}}},x={__name:"Event",setup(i){const l=r({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"change",talk:"\u9009\u4E2D\u4E8B\u4EF6",attr:"value",exm:"change=(value)=>{}"}]}}),{options:n}=l;return(o,c)=>{const t=d("tTable");return a(),u(t,{options:p(n),size:"small"},null,8,["options"])}}},O={__name:"OptionsAPI",setup(i){const l=r({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"label",type:"String",talk:"\u591A\u9009\u9ED8\u8BA4label\u5C55\u793A\u5B57\u6BB5\u540D\uFF0C\u81EA\u5B9A\u4E49\u8BF7\u4F7F\u7528 labelFiled \u5C5E\u6027\u91CD\u65B0\u5173\u8054lable\u5B57\u6BB5",sel:"\u2014\u2014",def:"label"},{attr:"value",type:"String",talk:"\u591A\u9009\u9ED8\u8BA4value\u9009\u4E2D\u503C\uFF0C\u81EA\u5B9A\u4E49\u8BF7\u4F7F\u7528 valueFiled \u5C5E\u6027\u91CD\u65B0\u5173\u8054value\u5B57\u6BB5",sel:"\u2014\u2014",def:"value"},{attr:"disabled",type:"Boolean",talk:"\u662F\u5426\u7981\u7528 options API",sel:"true/false",def:"false"}]}}),{options:n}=l;return(o,c)=>{const t=d("tTable");return a(),u(t,{options:p(n),size:"small"},null,8,["options"])}}},V={class:"markdown-body"},z=e("h2",null,"Select\u4E0B\u62C9\u6846",-1),A=e("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),w=e("h4",null,"select \u4E0B\u62C9\u6846\u57FA\u672C\u4F7F\u7528\u793A\u4F8B,\u9700\u8981\u4E00\u4E2A\u4E3B\u8981\u7684 options \u53C2\u6570",-1),B=e("br",null,null,-1),N=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),T=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tSelect :options='selOptions' placeholder='\u8BF7\u9009\u62E9' v-model="selVal"></tSelect>
    </template>

    <script setup>
        import { reactive, ref } from "vue";
        const selVal=ref('zhongguo')
        const state=reactive({
        selOptions:[
            { label: "\u4E2D\u56FD", value: "zhongguo" },
            { label: "\u4FC4\u7F57\u65AF", value: "eluosi",disabled:true },
            { label: "\u7F8E\u56FD", value: "meiguo" },
            { label: "\u6FB3\u5927\u5229\u4E9A", value: "aodaliya" },
            { label: "\u5DF4\u57FA\u65AF\u5766", value: "bajisitan" }
        ]
        })
        const { selOptions } = state;
    <\/script>
`)],-1),j=[N,T],$=e("h3",null,"\u5339\u914D\u4E0D\u540C\u6570\u636E",-1),I=e("br",null,null,-1),P=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),E=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tSelect :options='selOptions' filedLabel='name' filedValue='id'></tSelect>
    </template>

    <script setup>
        import { reactive } from "vue";
        const state=reactive({
        selOptions:[
            { name: "\u4E2D\u56FD", id: "zhongguo" },
            { name: "\u4FC4\u7F57\u65AF", id: "eluosi" },
            { name: "\u7F8E\u56FD", id: "meiguo" },
            { name: "\u6FB3\u5927\u5229\u4E9A", id: "aodaliya" },
            { name: "\u5DF4\u57FA\u65AF\u5766", id: "bajisitan" }
        ]
        })
        const { selOptions } = state;
    <\/script>
`)],-1),L=[P,E],D=e("h2",null,"Attributes \u53C2\u6570",-1),F=e("br",null,null,-1),C=e("h2",null,"Options API\u8BF4\u660E",-1),U=e("br",null,null,-1),q=e("h2",null,"Event \u4E8B\u4EF6",-1),G=e("br",null,null,-1),K={__name:"doc",setup(i,{expose:l}){return l({frontmatter:{}}),(o,c)=>{const t=v("highlight");return a(),_("div",V,[z,A,w,e("p",null,[s(y),B]),m((a(),_("details",null,j)),[[t]]),s(h,{compName:"select",demoName:"demo1"}),$,e("p",null,[s(k),I]),m((a(),_("details",null,L)),[[t]]),s(h,{compName:"select",demoName:"demo2"}),D,s(S),F,C,s(O),U,q,s(x),G])}}};export{K as default};
