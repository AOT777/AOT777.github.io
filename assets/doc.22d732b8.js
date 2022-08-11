import{g as c,a as r,o,h as d,i as p,j as h,c as _,b as e,e as a,k as m}from"./index.fbf7f88f.js";import{p as g}from"./preview.9437fdc5.js";const f={__name:"demo1",setup(s){const n=c({options:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo",disabled:!0},{label:"\u5FB7\u56FD",value:"deguo"},{label:"\u6CD5\u56FD",value:"faguo"}]}),{options:l}=n;return(i,u)=>{const t=r("tRadio");return o(),d(t,{options:p(l)},null,8,["options"])}}},b={__name:"demo2",setup(s){const n=c({options:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"},{label:"\u6CD5\u56FD",value:"faguo"}]}),{options:l}=n;return(i,u)=>{const t=r("tRadio");return o(),d(t,{options:p(l),inline:!0},null,8,["options"])}}},v={__name:"demo3",setup(s){const n=c({options:[{name:"\u4E2D\u56FD",id:"zhongguo"},{name:"\u82F1\u56FD",id:"yingguo"},{name:"\u5FB7\u56FD",id:"deguo"},{name:"\u6CD5\u56FD",id:"faguo"}]}),{options:l}=n;return(i,u)=>{const t=r("tRadio");return o(),d(t,{options:p(l),inline:!0,filedLabel:"name",filedValue:"id"},null,8,["options"])}}},y={__name:"demo4",setup(s){const n=c({options:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"},{label:"\u6CD5\u56FD",value:"faguo"}]}),{options:l}=n;return(i,u)=>{const t=r("tRadio");return o(),d(t,{options:p(l),inline:!0,customColor:"red"},null,8,["options"])}}},k={__name:"Attributes",setup(s){const n=c({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"v-model",type:"String/Number",talk:"\u5355\u9009\u7ED1\u5B9A\u503C",sel:"warn/error/success/custom",def:"warn"},{attr:"options",type:"Array",talk:"\u5355\u9009\u6570\u636E\u914D\u7F6E\uFF0C\u5177\u4F53\u89C1\u4E0B\u65B9 options API",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"inline",type:"Boolean",talk:"\u662F\u5426\u4E3A\u884C\u5185\u5143\u7D20",sel:"\u2014\u2014",def:"false"},{attr:"filedLabel",type:"String",talk:"\u81EA\u5B9A\u4E49\u66FF\u6362lable\u7684\u5B57\u6BB5\u540D",sel:"\u2014\u2014",def:"label"},{attr:"filedValue",type:"String",talk:"\u81EA\u5B9A\u4E49\u66FF\u6362value\u7684\u5B57\u6BB5\u540D",sel:"\u2014\u2014",def:"value"},{attr:"customColor",type:"String",talk:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u989C\u8272\u8272\u503C",sel:"\u2014\u2014",def:"#0e80eb"}]}}),{options:l}=n;return(i,u)=>{const t=r("tTable");return o(),d(t,{options:p(l),size:"small"},null,8,["options"])}}},R={__name:"Event",setup(s){const n=c({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"change",talk:"\u9009\u4E2D\u4E8B\u4EF6",attr:"value",exm:"change=(value)=>{}"}]}}),{options:l}=n;return(i,u)=>{const t=r("tTable");return o(),d(t,{options:p(l),size:"small"},null,8,["options"])}}},x={__name:"OptionsAPI",setup(s){const n=c({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"label",type:"String",talk:"\u591A\u9009\u9ED8\u8BA4label\u5C55\u793A\u5B57\u6BB5\u540D\uFF0C\u81EA\u5B9A\u4E49\u8BF7\u4F7F\u7528 labelFiled \u5C5E\u6027\u91CD\u65B0\u5173\u8054lable\u5B57\u6BB5",sel:"\u2014\u2014",def:"label"},{attr:"value",type:"String",talk:"\u591A\u9009\u9ED8\u8BA4value\u9009\u4E2D\u503C\uFF0C\u81EA\u5B9A\u4E49\u8BF7\u4F7F\u7528 valueFiled \u5C5E\u6027\u91CD\u65B0\u5173\u8054value\u5B57\u6BB5",sel:"\u2014\u2014",def:"value"},{attr:"disabled",type:"Boolean",talk:"\u662F\u5426\u7981\u7528 options API",sel:"true/false",def:"false"}]}}),{options:l}=n;return(i,u)=>{const t=r("tTable");return o(),d(t,{options:p(l),size:"small"},null,8,["options"])}}},z={class:"markdown-body"},N=e("h2",null,"Radio\u5355\u9009\u9879",-1),w=e("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),A=e("br",null,null,-1),$=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),B=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tRadio :options='options'></tRadio>
    </template>

    <script setup>
        import { reactive } from "vue";
        const state=reactive({
        options:[
            { label: "\u4E2D\u56FD", value: "zhongguo" },
            { label: "\u82F1\u56FD", value: "yingguo",disabled:true },
            { label: "\u5FB7\u56FD", value: "deguo" },
            { label: "\u6CD5\u56FD", value: "faguo" }
        ]
        })
        const {options}=state
    <\/script>
`)],-1),S=[$,B],T=e("h3",null,"\u6A2A\u5411\u7EB5\u5411\u6392\u5217",-1),V=e("br",null,null,-1),C=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),F=e("pre",null,[e("code",{class:"language-html"},`     <template>
        <tRadio :options='options' :inline='true'></tRadio>
    </template>

    <script setup>
        import { reactive } from "vue";
        const state=reactive({
        options:[
            { label: "\u4E2D\u56FD", value: "zhongguo" },
            { label: "\u82F1\u56FD", value: "yingguo",disabled:true },
            { label: "\u5FB7\u56FD", value: "deguo" },
            { label: "\u6CD5\u56FD", value: "faguo" }
        ]
        })
        const {options}=state
    <\/script>
`)],-1),I=[C,F],P=e("h3",null,"\u5339\u914D\u4E0D\u540C\u6570\u636E",-1),E=e("h5",null,"\u9ED8\u8BA4 options \u63A5\u6536 label \u548C value \u4F5C\u4E3A\u663E\u793A\u548C\u503C\u7ED1\u5B9A\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E labelFiled \u548C valueFiled \u6765\u91CD\u65B0\u786E\u5B9A\u5B57\u6BB5\u7684\u7ED1\u5B9A\uFF0C\u66F4\u65B9\u4FBF\u7684\u5339\u914D\u4E0D\u540C\u683C\u5F0F\u7684\u6570\u636E\u3002",-1),L=e("br",null,null,-1),D=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),O=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tRadio :options='options' :inline='true' filedLabel='name' filedValue='id'></tRadio>
    </template>

    <script setup>
    import { reactive } from "vue";
        const state=reactive({
        options:[
            { name: "\u4E2D\u56FD", id: "zhongguo" },
            { name: "\u82F1\u56FD", id: "yingguo" },
            { name: "\u5FB7\u56FD", id: "deguo" },
            { name: "\u6CD5\u56FD", id: "faguo" }
        ]
        })
        const {options}=state
    <\/script>
`)],-1),j=[D,O],q=e("h3",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),G=e("br",null,null,-1),H=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),J=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tRadio :options='options' :inline='true' customColor='red'></tRadio>
    </template>

    <script setup>
        import { reactive } from "vue";
        const state=reactive({
        options:[
            { label: "\u4E2D\u56FD", value: "zhongguo" },
            { label: "\u82F1\u56FD", value: "yingguo" },
            { label: "\u5FB7\u56FD", value: "deguo" },
            { label: "\u6CD5\u56FD", value: "faguo" }
        ]
        })
        const {options}=state
    <\/script>
`)],-1),K=[H,J],M=e("h2",null,"Attributes \u53C2\u6570",-1),Q=e("br",null,null,-1),U=e("h2",null,"Options API\u8BF4\u660E",-1),W=e("br",null,null,-1),X=e("h2",null,"Event \u4E8B\u4EF6",-1),Y=e("br",null,null,-1),te={__name:"doc",setup(s,{expose:n}){return n({frontmatter:{}}),(i,u)=>{const t=h("highlight");return o(),_("div",z,[N,w,e("p",null,[a(f),A]),m((o(),_("details",null,S)),[[t]]),a(g,{compName:"radio",demoName:"demo1"}),T,e("p",null,[a(b),V]),m((o(),_("details",null,I)),[[t]]),a(g,{compName:"radio",demoName:"demo2"}),P,E,e("p",null,[a(v),L]),m((o(),_("details",null,j)),[[t]]),a(g,{compName:"radio",demoName:"demo3"}),q,e("p",null,[a(y),G]),m((o(),_("details",null,K)),[[t]]),a(g,{compName:"radio",demoName:"demo4"}),M,a(k),Q,U,a(x),W,X,a(R),Y])}}};export{te as default};
