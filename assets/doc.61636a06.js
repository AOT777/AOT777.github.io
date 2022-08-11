import{r as v,g as d,a as m,o as s,h,i as u,c as _,e as n,F as k,j as f,b as e,k as b}from"./index.fbf7f88f.js";import{p as g}from"./preview.9437fdc5.js";const x={__name:"demo1",setup(r){const l=v([]),o=d({checkOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"},{label:"\u6CD5\u56FD",value:"faguo"}]}),{checkOptions:a}=o;return(p,t)=>{const i=m("tCheckbox");return s(),h(i,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),options:u(a)},null,8,["modelValue","options"])}}},V={__name:"demo2",setup(r){const l=v(["yingguo"]),o=d({checkOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo",disabled:!0},{label:"\u5FB7\u56FD",value:"deguo",disabled:!0},{label:"\u6CD5\u56FD",value:"faguo"}]}),{checkOptions:a}=o;return(p,t)=>{const i=m("tCheckbox");return s(),h(i,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),options:u(a)},null,8,["modelValue","options"])}}},y={__name:"demo3",setup(r){const l=v([]),o=d({checkOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"},{label:"\u6CD5\u56FD",value:"faguo"}]}),{checkOptions:a}=o;return(p,t)=>{const i=m("tCheckbox");return s(),h(i,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),options:u(a),customColor:"red"},null,8,["modelValue","options"])}}},C={__name:"demo4",setup(r){const l=v([]),o=d({checkOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"},{label:"\u6CD5\u56FD",value:"faguo"}]}),{checkOptions:a}=o;return(p,t)=>{const i=m("tCheckbox");return s(),_(k,null,[n(i,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),options:u(a)},null,8,["modelValue","options"]),n(i,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=c=>l.value=c),options:u(a),size:"small"},null,8,["modelValue","options"]),n(i,{modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=c=>l.value=c),options:u(a),size:"mini"},null,8,["modelValue","options"])],64)}}},O={__name:"demo5",setup(r){const l=v([]),o=d({checkOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"},{label:"\u6CD5\u56FD",value:"faguo"}]}),{checkOptions:a}=o;return(p,t)=>{const i=m("tCheckbox");return s(),h(i,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),options:u(a),inline:!1},null,8,["modelValue","options"])}}},z={__name:"Attributes",setup(r){const l=d({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"v-model",type:"Array",talk:"\u591A\u9009\u7ED1\u5B9A\u503C",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"size",type:"String",talk:"\u5C3A\u5BF8\u5927\u5C0F",sel:"default / small / mini",def:"default"},{attr:"options",type:"Array",talk:"\u591A\u9009\u6570\u636E\u914D\u7F6E\uFF0C\u5177\u4F53\u89C1\u4E0B\u65B9 options API",sel:"\u2014\u2014",def:"label"},{attr:"labelFiled",type:"String",talk:"\u81EA\u5B9A\u4E49\u66FF\u6362lable\u7684\u5B57\u6BB5\u540D",sel:"\u2014\u2014",def:"false"},{attr:"valueFiled",type:"String",talk:"\u81EA\u5B9A\u4E49\u66FF\u6362value\u7684\u5B57\u6BB5\u540D",sel:"\u2014\u2014",def:"value"},{attr:"inline",type:"Boolean",talk:"\u662F\u5426\u4E3A\u884C\u5185\u5143\u7D20",sel:"\u2014\u2014",def:"true"},{attr:"customColor",type:"String",talk:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u989C\u8272\u8272\u503C",sel:"\u2014\u2014",def:"\u2014\u2014"}]}}),{options:o}=l;return(a,p)=>{const t=m("tTable");return s(),h(t,{options:u(o),size:"small"},null,8,["options"])}}},N={__name:"Event",setup(r){const l=d({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"change",talk:"\u9009\u4E2D\u4E8B\u4EF6",attr:"event",exm:"change=(e)=>{}"}]}}),{options:o}=l;return(a,p)=>{const t=m("tTable");return s(),h(t,{options:u(o),size:"small"},null,8,["options"])}}},w={__name:"OptionsAPI",setup(r){const l=d({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"label",type:"String",talk:"\u591A\u9009\u9ED8\u8BA4label\u5C55\u793A\u5B57\u6BB5\u540D\uFF0C\u81EA\u5B9A\u4E49\u8BF7\u4F7F\u7528 labelFiled \u5C5E\u6027\u91CD\u65B0\u5173\u8054lable\u5B57\u6BB5",sel:"\u2014\u2014",def:"label"},{attr:"value",type:"String",talk:"\u591A\u9009\u9ED8\u8BA4value\u9009\u4E2D\u503C\uFF0C\u81EA\u5B9A\u4E49\u8BF7\u4F7F\u7528 valueFiled \u5C5E\u6027\u91CD\u65B0\u5173\u8054value\u5B57\u6BB5",sel:"\u2014\u2014",def:"value"},{attr:"disabled",type:"Boolean",talk:"\u662F\u5426\u7981\u7528 options API",sel:"\u2014\u2014",def:"False"}]}}),{options:o}=l;return(a,p)=>{const t=m("tTable");return s(),h(t,{options:u(o),size:"small"},null,8,["options"])}}},A={class:"markdown-body"},$=e("h2",null,"Checkbox\u591A\u9009\u6846",-1),B=e("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),F=e("br",null,null,-1),U=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),S=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tCheckbox v-model="checkboxVal" :options='checkOptions'></tCheckbox>
    </template>

    <script setup>
        import { reactive, ref } from 'vue'
        const checkboxVal=ref([])
        const state=reactive({
            checkOptions:[
            { label: "\u4E2D\u56FD", value: "zhongguo" },
            { label: "\u82F1\u56FD", value: "yingguo" },
            { label: "\u5FB7\u56FD", value: "deguo" },
            { label: "\u6CD5\u56FD", value: "faguo" },
            ]
        })
        const {checkOptions}=state
    <\/script>
`)],-1),T=[U,S],P=e("h3",null,"\u7981\u7528",-1),I=e("br",null,null,-1),E=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),D=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tCheckbox v-model="checkboxVal" :options='checkOptions'></tCheckbox>
    </template>

    <script setup>
        import { reactive, ref } from 'vue'
        const checkboxVal=ref(['yingguo'])
        const state=reactive({
            checkOptions:[
            { label: "\u4E2D\u56FD", value: "zhongguo" },
            { label: "\u82F1\u56FD", value: "yingguo",disabled:true },
            { label: "\u5FB7\u56FD", value: "deguo",disabled:true },
            { label: "\u6CD5\u56FD", value: "faguo" },
            ]
        })
        const {checkOptions}=state
    <\/script>
`)],-1),j=[E,D],q=e("h3",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),G=e("br",null,null,-1),H=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),J=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tCheckbox v-model="checkboxVal" :options='checkOptions' customColor='red'></tCheckbox>
    </template>

    <script setup>
        import { reactive, ref } from 'vue'
        const checkboxVal=ref([])
        const state=reactive({
            checkOptions:[
            { label: "\u4E2D\u56FD", value: "zhongguo" },
            { label: "\u82F1\u56FD", value: "yingguo" },
            { label: "\u5FB7\u56FD", value: "deguo" },
            { label: "\u6CD5\u56FD", value: "faguo" },
            ]
        })
        const {checkOptions}=state
    <\/script>
`)],-1),K=[H,J],L=e("h3",null,"\u81EA\u5B9A\u4E49\u5927\u5C0F",-1),M=e("br",null,null,-1),Q=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),R=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tCheckbox v-model="checkboxVal" :options='checkOptions'></tCheckbox>
        <tCheckbox v-model="checkboxVal" :options='checkOptions' size='small'></tCheckbox>
        <tCheckbox v-model="checkboxVal" :options='checkOptions' size='mini'></tCheckbox>
    </template>

    <script setup>
        import { reactive, ref } from 'vue'
        const checkboxVal=ref([])
        const state=reactive({
            checkOptions:[
            { label: "\u4E2D\u56FD", value: "zhongguo" },
            { label: "\u82F1\u56FD", value: "yingguo" },
            { label: "\u5FB7\u56FD", value: "deguo" },
            { label: "\u6CD5\u56FD", value: "faguo" },
            ]
        })
        const {checkOptions}=state
    <\/script>
`)],-1),W=[Q,R],X=e("h3",null,"\u6392\u5217\u65B9\u5411",-1),Y=e("br",null,null,-1),Z={bgcolor:"PowderBlue"},ee=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),te=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tCheckbox v-model="checkboxVal" :options='checkOptions' :inline='false'></tCheckbox>
    </template>

    <script setup>
        import { reactive, ref } from 'vue'
        const checkboxVal=ref([])
        const state=reactive({
            checkOptions:[
            { label: "\u4E2D\u56FD", value: "zhongguo" },
            { label: "\u82F1\u56FD", value: "yingguo" },
            { label: "\u5FB7\u56FD", value: "deguo" },
            { label: "\u6CD5\u56FD", value: "faguo" },
            ]
        })
        const {checkOptions}=state
    <\/script>
`)],-1),le=[ee,te],oe=e("h2",null,"Attributes \u53C2\u6570",-1),ne=e("br",null,null,-1),ae=e("h2",null,"Options API\u8BF4\u660E",-1),se=e("br",null,null,-1),ce=e("h2",null,"Event \u4E8B\u4EF6",-1),ie=e("br",null,null,-1),pe={__name:"doc",setup(r,{expose:l}){return l({frontmatter:{}}),(a,p)=>{const t=f("highlight");return s(),_("div",A,[$,B,e("p",null,[n(x),F]),b((s(),_("details",null,T)),[[t]]),n(g,{compName:"checkbox",demoName:"demo1"}),P,e("p",null,[n(V),I]),b((s(),_("details",null,j)),[[t]]),n(g,{compName:"checkbox",demoName:"demo2"}),q,e("p",null,[n(y),G]),b((s(),_("details",null,K)),[[t]]),n(g,{compName:"checkbox",demoName:"demo3"}),L,e("p",null,[n(C),M]),b((s(),_("details",null,W)),[[t]]),n(g,{compName:"checkbox",demoName:"demo4"}),X,e("p",null,[n(O),Y]),b((s(),_("details",Z,le)),[[t]]),n(g,{compName:"checkbox",demoName:"demo5"}),oe,n(z),ne,ae,n(w),se,ce,n(N),ie])}}};export{pe as default};
