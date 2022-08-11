import{r as c,a as u,o as a,h as p,g as h,i as f,j as P,c as _,b as e,e as l,k as m}from"./index.fbf7f88f.js";import{p as d}from"./preview.9437fdc5.js";const b={__name:"demo1",setup(r){const t=c(1);return(i,o)=>{const s=u("tPagination");return a(),p(s,{current:t.value,"onUpdate:current":o[0]||(o[0]=n=>t.value=n)},null,8,["current"])}}},z={__name:"demo2",setup(r){const t=c(1);return(i,o)=>{const s=u("tPagination");return a(),p(s,{current:t.value,"onUpdate:current":o[0]||(o[0]=n=>t.value=n),activeColor:"#e6113b"},null,8,["current"])}}},S={__name:"demo3",setup(r){const t=c(1);return(i,o)=>{const s=u("tPagination");return a(),p(s,{current:t.value,"onUpdate:current":o[0]||(o[0]=n=>t.value=n),continues:7},null,8,["current"])}}},k={__name:"demo4",setup(r){const t=c(1),i=c([3,5,10]),o=c(3),s=n=>{o.value=n};return(n,g)=>{const v=u("tPagination");return a(),p(v,{current:t.value,"onUpdate:current":g[0]||(g[0]=N=>t.value=N),pageSize:o.value,showPageSize:i.value,onChange:s},null,8,["current","pageSize","showPageSize"])}}},w={__name:"Attributes",setup(r){const t=h({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"current",type:"Number",talk:"\u5F53\u524D\u9875",sel:"\u2014\u2014",def:"warn"},{attr:"pageSize",type:"Number",talk:"\u4E00\u9875\u663E\u793A\u7684\u6570\u636E\u91CF",sel:"\u2014\u2014",def:"6"},{attr:"total",type:"Number",talk:"\u603B\u5171\u6570\u636E\u91CF",sel:"\u2014\u2014",def:"3"},{attr:"continues",type:"Number",talk:"\u4E2D\u95F4\u8FDE\u7EED\u9875\u7801\u6570",sel:"\u2014\u2014",def:"5"},{attr:"activeColor",type:"String",talk:"\u9009\u4E2D\u9875\u7684\u9875\u7801\u56FE\u6807\u6FC0\u6D3B\u989C\u8272",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"showPageSize",type:"Array",talk:"\u81EA\u5B9A\u4E49\u4E00\u9875\u663E\u793A\u7684\u6570\u636E\u91CF",sel:"\u2014\u2014",def:"\u2014\u2014"}]}}),{options:i}=t;return(o,s)=>{const n=u("tTable");return a(),p(n,{options:f(i),size:"small"},null,8,["options"])}}},x={__name:"Event",setup(r){const t=h({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"changePaNo",talk:"\u83B7\u53D6\u5F53\u524D\u9875\u7801",attr:"value",exm:"changePaNo=(value)=>{}"}]}}),{options:i}=t;return(o,s)=>{const n=u("tTable");return a(),p(n,{options:f(i),size:"small"},null,8,["options"])}}},y={class:"markdown-body"},$=e("h2",null,"Pagination\u9875\u7801\u7EC4\u4EF6",-1),C=e("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),B=e("br",null,null,-1),T=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),U=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tPagination v-model:current="pageNo"></tPagination>
    </template>

    <script setup>
    import { ref } from "vue";
    const pageNo=ref(1)
    <\/script>
`)],-1),A=[T,U],E=e("h3",null,"\u81EA\u5B9A\u4E49\u9875\u7801\u989C\u8272",-1),D=e("br",null,null,-1),V=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),j=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tPagination v-model:current="pageNo" activeColor='#e6113b'></tPagination>
    </template>

    <script setup>
    import { ref } from "vue";
    const pageNo=ref(1)
    <\/script>
`)],-1),q=[V,j],F=e("h3",null,"\u8BBE\u7F6E\u4E2D\u95F4\u8FDE\u7EED\u9875\u7801\u6570",-1),G=e("br",null,null,-1),H=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),I=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tPagination v-model:current="pageNo" :continues='7'></tPagination>
    </template>

    <script setup>
    import { ref } from "vue";
    const pageNo=ref(1)
    <\/script>
`)],-1),J=[H,I],K=e("h3",null,"\u8BBE\u7F6E\u4E00\u9875\u663E\u793A\u7684\u6570\u636E\u91CF",-1),L=e("br",null,null,-1),M=e("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),O=e("pre",null,[e("code",{class:"language-html"},`    <template>
        <tPagination v-model:current="pageNo" :pageSize='pageSize' :showPageSize='showPageSize' @change='changePsize'></tPagination>
    </template>

    <script setup>
        import { ref } from "vue";
        const pageNo=ref(1)
        const showPageSize=ref([3,5,10])
        const pageSize=ref(3)
        const changePsize=(pNum)=>{
            pageSize.value=pNum
        }
    <\/script>
`)],-1),Q=[M,O],R=e("h2",null,"Attributes \u53C2\u6570",-1),W=e("br",null,null,-1),X=e("h2",null,"Event \u4E8B\u4EF6",-1),Y=e("br",null,null,-1),te={__name:"doc",setup(r,{expose:t}){return t({frontmatter:{}}),(o,s)=>{const n=P("highlight");return a(),_("div",y,[$,C,e("p",null,[l(b),B]),m((a(),_("details",null,A)),[[n]]),l(d,{compName:"pagination",demoName:"demo1"}),E,e("p",null,[l(z),D]),m((a(),_("details",null,q)),[[n]]),l(d,{compName:"pagination",demoName:"demo2"}),F,e("p",null,[l(S),G]),m((a(),_("details",null,J)),[[n]]),l(d,{compName:"pagination",demoName:"demo3"}),K,e("p",null,[l(k),L]),m((a(),_("details",null,Q)),[[n]]),l(d,{compName:"pagination",demoName:"demo4"}),R,l(w),W,X,l(x),Y])}}};export{te as default};
