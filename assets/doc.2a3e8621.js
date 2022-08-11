import{g as d,a as n,o as i,h as f,w as c,e as t,i as v,j as w,c as k,b as o,k as x}from"./index.fbf7f88f.js";import{p as F}from"./preview.9437fdc5.js";const S={__name:"demo1",setup(V){const e=d({name:"",value:!0,choiceValue:"",checkboxVal:[]}),s=d({selOptions:[{label:"\u9009\u98791",value:"first"},{label:"\u9009\u98792",value:"second"}]}),{selOptions:r}=s,h=d({checkOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"}]}),{checkOptions:l}=h;return(g,a)=>{const _=n("tInput"),u=n("tFormItem"),b=n("tSwitch"),m=n("tSelect"),I=n("tCheckbox"),O=n("tForm");return i(),f(O,{model:e,"label-width":"100px"},{default:c(()=>[t(u,{label:"\u7528\u6237\u540D"},{default:c(()=>[t(_,{modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=p=>e.name=p),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u9009\u62E9"},{default:c(()=>[t(b,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=p=>e.value=p)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u89C4\u683C"},{default:c(()=>[t(m,{options:v(r),placeholder:"\u8BF7\u9009\u62E9",modelValue:e.choiceValue,"onUpdate:modelValue":a[2]||(a[2]=p=>e.choiceValue=p)},null,8,["options","modelValue"])]),_:1}),t(u,{label:"\u56FD\u5BB6"},{default:c(()=>[t(I,{modelValue:e.checkboxVal,"onUpdate:modelValue":a[3]||(a[3]=p=>e.checkboxVal=p),options:v(l)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model"])}}},y={__name:"demo2",setup(V){const e=d({name:"",value:!0,checkboxVal:[]}),s=d({checkOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"}]}),{checkOptions:r}=s;return(h,l)=>{const g=n("tInput"),a=n("tFormItem"),_=n("tSwitch"),u=n("tCheckbox"),b=n("tForm");return i(),f(b,{model:e,"label-width":"100px",inline:!0},{default:c(()=>[t(a,{label:"\u7528\u6237\u540D"},{default:c(()=>[t(g,{modelValue:e.name,"onUpdate:modelValue":l[0]||(l[0]=m=>e.name=m),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),t(a,{label:"\u9009\u62E9"},{default:c(()=>[t(_,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=m=>e.value=m)},null,8,["modelValue"])]),_:1}),t(a,{label:"\u56FD\u5BB6"},{default:c(()=>[t(u,{modelValue:e.checkboxVal,"onUpdate:modelValue":l[2]||(l[2]=m=>e.checkboxVal=m),options:v(r)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model"])}}},C={__name:"demo3",setup(V){const e=d({name:"",value:!0,checkboxVal:[]}),s=d({checkOptions:[{label:"\u4E2D\u56FD",value:"zhongguo"},{label:"\u82F1\u56FD",value:"yingguo"},{label:"\u5FB7\u56FD",value:"deguo"}]}),{checkOptions:r}=s;return(h,l)=>{const g=n("tInput"),a=n("tFormItem"),_=n("tSwitch"),u=n("tCheckbox"),b=n("tForm");return i(),f(b,{model:e,"label-width":"100px",labelTextAlign:"left"},{default:c(()=>[t(a,{label:"\u7528\u6237\u540D"},{default:c(()=>[t(g,{modelValue:e.name,"onUpdate:modelValue":l[0]||(l[0]=m=>e.name=m),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),t(a,{label:"\u9009\u62E9"},{default:c(()=>[t(_,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=m=>e.value=m)},null,8,["modelValue"])]),_:1}),t(a,{label:"\u56FD\u5BB6"},{default:c(()=>[t(u,{modelValue:e.checkboxVal,"onUpdate:modelValue":l[2]||(l[2]=m=>e.checkboxVal=m),options:v(r)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model"])}}},U={__name:"Attributes",setup(V){const e=d({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"model",type:"Object",talk:"\u8868\u5355\u6570\u636E\u6536\u96C6\u7684\u5BF9\u8C61",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"labelWidth",type:"String",talk:"\u8868\u5355\u6BCF\u4E00\u9879\u7684\u5BBD\u5EA6",sel:"\u2014\u2014",def:"80px"},{attr:"inline",type:"Boolean",talk:"\u662F\u5426\u4E3A\u884C\u5185\u8868\u5355",sel:"\u2014\u2014",def:"false"},{attr:"labelTextAlign",type:"String",talk:"\u8868\u5355\u6BCF\u4E00\u9879\u5F00\u5934\u6587\u672C\u7684\u5BF9\u9F50\u65B9\u5F0F",sel:"left/center/right",def:"right"},{attr:"label",type:"String",talk:"\u8868\u5355\u6BCF\u4E00\u9879\u7ED1\u5B9A\u7684\u6570\u636E\u6C47\u603B\u5230model\u91CC\u9762",sel:"\u2014\u2014",def:""}]}}),{options:s}=e;return(r,h)=>{const l=n("tTable");return i(),f(l,{options:v(s),size:"small"},null,8,["options"])}}},N={class:"markdown-body"},z=o("h2",null,"Form\u8868\u5355",-1),A=o("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),B=o("br",null,null,-1),T=o("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),$=o("pre",null,[o("code",{class:"language-html"},`    <template>
        <tForm :model='model' label-width='100px'>
            <tFormItem label='\u7528\u6237\u540D'>
                <tInput v-model="model.name" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></tInput>
            </tFormItem>
            <tFormItem label='\u9009\u62E9'>
                <tSwitch v-model="model.value"></tSwitch>
            </tFormItem>
            <tFormItem label='\u89C4\u683C'>
                <tSelect :options='selOptions' placeholder='\u8BF7\u9009\u62E9' v-model="model.choiceValue"></tSelect>
            </tFormItem>
            <tFormItem label='\u56FD\u5BB6'>
                <tCheckbox v-model="model.checkboxVal" :options='checkOptions'></tCheckbox>
            </tFormItem>
        </tForm>
    </template>

    <script setup>
    import { reactive } from "vue";

    const model=reactive({
        name:'',
        value:true,
        choiceValue:'',
        checkboxVal:[]
    })

    const state1=reactive({
    selOptions:[
        { label: "\u9009\u98791", value: "first" },
        { label: "\u9009\u98792", value: "second" }
    ]
    })
    const {selOptions}=state1

    const state2=reactive({
        checkOptions:[
        { label: "\u4E2D\u56FD", value: "zhongguo" },
        { label: "\u82F1\u56FD", value: "yingguo" },
        { label: "\u5FB7\u56FD", value: "deguo" }
        ]
    })
    const {checkOptions}=state2
    <\/script>
`)],-1),j=[T,$],D=o("h3",null,"\u884C\u5185\u8868\u5355",-1),E=o("br",null,null,-1),L=o("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),W=o("pre",null,[o("code",{class:"language-html"},`    <template>
        <tForm :model='model' label-width='100px' :inline='true'>
            <tFormItem label='\u7528\u6237\u540D'>
                <tInput v-model="model.name" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></tInput>
            </tFormItem>
            <tFormItem label='\u9009\u62E9'>
                <tSwitch v-model="model.value"></tSwitch>
            </tFormItem>
            <tFormItem label='\u89C4\u683C'>
                <tSelect :options='selOptions' placeholder='\u8BF7\u9009\u62E9' v-model="model.choiceValue"></tSelect>
            </tFormItem>
            <tFormItem label='\u56FD\u5BB6'>
                <tCheckbox v-model="model.checkboxVal" :options='checkOptions'></tCheckbox>
            </tFormItem>
        </tForm>
    </template>

    <script setup>
    import { reactive } from "vue";

    const model=reactive({
        name:'',
        value:true,
        choiceValue:'',
        checkboxVal:[]
    })

    const state1=reactive({
    selOptions:[
        { label: "\u9009\u98791", value: "first" },
        { label: "\u9009\u98792", value: "second" }
    ]
    })
    const {selOptions}=state1

    const state2=reactive({
        checkOptions:[
        { label: "\u4E2D\u56FD", value: "zhongguo" },
        { label: "\u82F1\u56FD", value: "yingguo" },
        { label: "\u5FB7\u56FD", value: "deguo" }
        ]
    })
    const {checkOptions}=state2
    <\/script>
`)],-1),q=[L,W],G=o("h3",null,"Label\u5BF9\u9F50\u65B9\u5F0F",-1),H=o("br",null,null,-1),J=o("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),K=o("pre",null,[o("code",{class:"language-html"},`    <template>
        <tForm :model='model' label-width='100px' labelTextAlign='left'>
            <tFormItem label='\u7528\u6237\u540D'>
                <tInput v-model="model.name" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></tInput>
            </tFormItem>
            <tFormItem label='\u9009\u62E9'>
                <tSwitch v-model="model.value"></tSwitch>
            </tFormItem>
            <tFormItem label='\u89C4\u683C'>
                <tSelect :options='selOptions' placeholder='\u8BF7\u9009\u62E9' v-model="model.choiceValue"></tSelect>
            </tFormItem>
            <tFormItem label='\u56FD\u5BB6'>
                <tCheckbox v-model="model.checkboxVal" :options='checkOptions'></tCheckbox>
            </tFormItem>
        </tForm>
    </template>

    <script setup>
    import { reactive } from "vue";

    const model=reactive({
        name:'',
        value:true,
        choiceValue:'',
        checkboxVal:[]
    })

    const state1=reactive({
    selOptions:[
        { label: "\u9009\u98791", value: "first" },
        { label: "\u9009\u98792", value: "second" }
    ]
    })
    const {selOptions}=state1

    const state2=reactive({
        checkOptions:[
        { label: "\u4E2D\u56FD", value: "zhongguo" },
        { label: "\u82F1\u56FD", value: "yingguo" },
        { label: "\u5FB7\u56FD", value: "deguo" }
        ]
    })
    const {checkOptions}=state2
    <\/script>
`)],-1),M=[J,K],P=o("h2",null,"Attributes \u53C2\u6570",-1),Q=o("br",null,null,-1),Y={__name:"doc",setup(V,{expose:e}){return e({frontmatter:{}}),(r,h)=>{const l=w("highlight");return i(),k("div",N,[z,A,o("p",null,[t(S),B]),x((i(),k("details",null,j)),[[l]]),t(F,{compName:"form",demoName:"demo1"}),D,o("p",null,[t(y),E]),x((i(),k("details",null,q)),[[l]]),t(F,{compName:"form",demoName:"demo2"}),G,o("p",null,[t(C),H]),x((i(),k("details",null,M)),[[l]]),t(F,{compName:"form",demoName:"demo3"}),P,t(U),Q])}}};export{Y as default};
