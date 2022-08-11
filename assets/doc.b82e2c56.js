import{_ as h,a as l,o,h as r,w as m,e,g as f,i as g,j as S,c as _,b as t,k as p}from"./index.fbf7f88f.js";import{p as d}from"./preview.9437fdc5.js";const k={};function x(i,s){const n=l("tSkeleton");return o(),r(n)}var b=h(k,[["render",x]]);const w={};function v(i,s){const n=l("tSkeleton"),c=l("tSpace");return o(),r(c,null,{default:m(()=>[e(n,{width:"800px",height:"40px"}),e(n,{width:"200px",height:"30px"}),e(n,{width:"200px",height:"20px"})]),_:1})}var y=h(w,[["render",v]]);const N={};function $(i,s){const n=l("tSkeleton"),c=l("tSpace");return o(),r(c,null,{default:m(()=>[e(n,{width:"800px",height:"40px",animated:!1})]),_:1})}var C=h(N,[["render",$]]);const B={};function A(i,s){const n=l("tSkeleton"),c=l("tSpace");return o(),r(c,null,{default:m(()=>[e(n,{width:"700px",height:"30px",bgColor:"#09b63d"}),e(n,{width:"600px",height:"20px",bgColor:"#f57b29"})]),_:1})}var D=h(B,[["render",A]]);const T={__name:"Attributes",setup(i){const s=f({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"talk",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"width",type:"String",talk:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6",sel:"\u2014\u2014",def:"100"},{attr:"height",type:"String",talk:"\u81EA\u5B9A\u4E49\u9AD8\u5EA6",sel:"\u2014\u2014",def:"30"},{attr:"animated",type:"Boolean",talk:"\u662F\u5426\u663E\u793A\u52A8\u753B",sel:"true/false",def:"true"},{attr:"bgColor",type:"String",talk:"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272",sel:"\u2014\u2014",def:"#eee"}]}}),{options:n}=s;return(c,u)=>{const a=l("tTable");return o(),r(a,{options:g(n),size:"small"},null,8,["options"])}}},V={class:"markdown-body"},j=t("h2",null,"Skeleton\u906E\u7F69\u9AA8\u67B6",-1),z=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),E=t("h4",null,"\u5F53\u8BF7\u6C42\u6570\u636E\u56DE\u6765\u4E4B\u524D\u5C55\u793A\u9AA8\u67B6\u4F7F\u9875\u9762\u770B\u8D77\u6765\u4E0D\u7A81\u5140",-1),q=t("br",null,null,-1),F=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),G=t("pre",null,[t("code",{class:"language-html"},`    <template>
        <tSkeleton></tSkeleton>
    </template>

    <script setup>

    <\/script>
`)],-1),H=[F,G],I=t("h3",null,"\u81EA\u5B9A\u4E49\u5BBD\u9AD8",-1),J=t("br",null,null,-1),K=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),L=t("pre",null,[t("code",{class:"language-html"},`    <template>
    <tSpace>
        <tSkeleton width="800px" height="40px"></tSkeleton>
        <tSkeleton width="200px" height="30px"></tSkeleton>
        <tSkeleton width="200px" height="20px"></tSkeleton>
    </tSpace>
    </template>

    <script setup>

    <\/script>
`)],-1),M=[K,L],O=t("h3",null,"\u63A7\u5236\u52A8\u753B\u6548\u679C",-1),P=t("br",null,null,-1),Q=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),R=t("pre",null,[t("code",{class:"language-html"},`    <template>
    <tSpace>
        <tSkeleton width="800px" height="40px" :animated='false'></tSkeleton>
    </tSpace>
    </template>

    <script setup>

    <\/script>
`)],-1),U=[Q,R],W=t("h3",null,"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272",-1),X=t("br",null,null,-1),Y=t("summary",null,"\u5C55\u5F00\u67E5\u770B\u4EE3\u7801",-1),Z=t("pre",null,[t("code",{class:"language-html"},`    <template>
    <tSpace>
        <tSkeleton width="700px" height="30px" bgColor='#09b63d'></tSkeleton>
        <tSkeleton width="600px" height="20px" bgColor='#f57b29'></tSkeleton>
    </tSpace>
    </template>

    <script setup>

    <\/script>
`)],-1),tt=[Y,Z],et=t("h2",null,"Attributes \u53C2\u6570",-1),nt=t("br",null,null,-1),st={__name:"doc",setup(i,{expose:s}){return s({frontmatter:{}}),(c,u)=>{const a=S("highlight");return o(),_("div",V,[j,z,E,t("p",null,[e(b),q]),p((o(),_("details",null,H)),[[a]]),e(d,{compName:"skeleton",demoName:"demo1"}),I,t("p",null,[e(y),J]),p((o(),_("details",null,M)),[[a]]),e(d,{compName:"skeleton",demoName:"demo2"}),O,t("p",null,[e(C),P]),p((o(),_("details",null,U)),[[a]]),e(d,{compName:"skeleton",demoName:"demo3"}),W,t("p",null,[e(D),X]),p((o(),_("details",null,tt)),[[a]]),e(d,{compName:"skeleton",demoName:"demo4"}),et,e(T),nt])}}};export{st as default};
