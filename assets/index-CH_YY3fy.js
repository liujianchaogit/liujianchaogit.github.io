import{_ as z}from"./Dialog.vue_vue_type_style_index_0_lang-WG3ZquOK.js";import{a as A,d as L,aD as V,P as U}from"./index-DiGvuAxb.js";import{_ as G}from"./ContentWrap.vue_vue_type_script_setup_true_lang-C0SI8VIx.js";import{u as H}from"./useFormCreateDesigner-DVfLDuwJ.js";import{H as v}from"./index-brTT8YwK.js";import{j as K}from"./java-B6oG8O6W.js";import{k as P,r as i,e as $,a6 as Q,af as W,l as C,m as O,H as o,z as t,v as f,u as n,E as g,C as q,F as X,A as Y,h as Z,G as ee,ak as ae}from"./form-create-D7wT855o.js";import{f as oe,e as te}from"./form-designer-drfGvdgz.js";import"./index-BCN8BzfC.js";import"./dict.type-DKJ3F898.js";function ne(r){const s=["true","false","null"],m={scope:"literal",beginKeywords:s.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:s},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},r.QUOTE_STRING_MODE,m,r.C_NUMBER_MODE,r.C_LINE_COMMENT_MODE,r.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}const se={class:"h-[calc(100vh-var(--top-tool-height)-var(--tags-view-height)-var(--app-content-padding)-var(--app-content-padding)-2px)]"},le={key:0,ref:"editor"},ie={class:"hljs"},re=P({name:"InfraBuild",__name:"index",setup(r){const{t:s}=A(),m=L(),w=i({switchType:[],autoActive:!0,useTemplate:!1,formOptions:{form:{labelWidth:"100px"}},fieldReadonly:!1,hiddenDragMenu:!1,hiddenDragBtn:!1,hiddenMenu:[],hiddenItem:[],hiddenItemConfig:{},disabledItemConfig:{},showSaveBtn:!1,showConfig:!0,showBaseForm:!0,showControl:!0,showPropsForm:!0,showEventForm:!0,showValidateForm:!0,showFormConfig:!0,showInputData:!0,showDevice:!0,appendConfigData:[]}),l=i(),u=i(!1),y=i(""),c=i(-1),p=i("");H(l);const h=a=>{u.value=!0,y.value=a},N=()=>{h("\u751F\u6210 JSON"),c.value=0,p.value=l.value.getRule()},S=()=>{h("\u751F\u6210 Options"),c.value=1,p.value=l.value.getOption()},E=()=>{h("\u751F\u6210\u7EC4\u4EF6"),c.value=2,p.value=D()},D=()=>{const a=l.value.getRule(),e=l.value.getOption();return`<template>
    <form-create
      v-model:api="fApi"
      :rule="rule"
      :option="option"
      @submit="onSubmit"
    ></form-create>
  </template>
  <script setup lang=ts>
    const faps = ref(null)
    const rule = ref('')
    const option = ref('')
    const init = () => {
      rule.value = formCreate.parseJson('${ae.toJson(a).replaceAll("\\","\\\\")}')
      option.value = formCreate.parseJson('${JSON.stringify(e)}')
    }
    const onSubmit = (formData) => {
      //todo \u63D0\u4EA4\u8868\u5355
    }
    init()
  <\/script>`},M=a=>{let e="json";return c.value===2&&(e="xml"),U(a)||(a=JSON.stringify(a,null,2)),v.highlight(a,{language:e,ignoreIllegals:!0}).value||"&nbsp;"};return $(async()=>{v.registerLanguage("xml",K),v.registerLanguage("json",ne)}),(a,e)=>{const d=oe,b=Q("fc-designer"),k=G,J=te,x=z,I=W("dompurify-html");return O(),C(ee,null,[o(k,{"body-style":{padding:"0px"},class:"!mb-0"},{default:t(()=>[f("div",se,[o(b,{class:"my-designer",ref_key:"designer",ref:l,config:n(w)},{handle:t(()=>[o(d,{size:"small",type:"primary",plain:"",onClick:N},{default:t(()=>e[2]||(e[2]=[g("\u751F\u6210JSON")])),_:1}),o(d,{size:"small",type:"success",plain:"",onClick:S},{default:t(()=>e[3]||(e[3]=[g("\u751F\u6210Options")])),_:1}),o(d,{size:"small",type:"danger",plain:"",onClick:E},{default:t(()=>e[4]||(e[4]=[g("\u751F\u6210\u7EC4\u4EF6")])),_:1})]),_:1},8,["config"])])]),_:1}),o(x,{modelValue:n(u),"onUpdate:modelValue":e[1]||(e[1]=_=>Z(u)?u.value=_:null),title:n(y),"max-height":"600"},{default:t(()=>[n(u)?(O(),C("div",le,[o(d,{style:{float:"right"},onClick:e[0]||(e[0]=_=>(async F=>{const j=JSON.stringify(F,null,2),{copy:B,copied:T,isSupported:R}=V({source:j});R?(await B(),n(T)&&m.success(s("common.copySuccess"))):m.error(s("common.copyError"))})(n(p)))},{default:t(()=>[g(X(n(s)("common.copy")),1)]),_:1}),o(J,{height:"580"},{default:t(()=>[f("div",null,[f("pre",null,[Y(f("code",ie,null,512),[[I,M(n(p))]])])])]),_:1})],512)):q("",!0)]),_:1},8,["modelValue","title"])],64)}}});export{re as default};
