import"./index-C1TKk8vI.js";import{_ as f}from"./Echart.vue_vue_type_script_setup_true_lang-Bp4Tc-Mi.js";import{S as b}from"./rank-Dth2TpK6.js";import{aZ as v,ag as _,ad as k,$ as A,_ as F,aj as j}from"./form-designer-BpYekVAY.js";import{x as C,r as m,X as P,j as R,y as p,z as q,O as a,F as o,u as n,G as I,E as X,M as Z}from"./form-create-7GAbgMwl.js";const z=C({name:"FollowCountRank",__name:"FollowCountRank",props:{queryParams:{}},setup(u,{expose:c}){const g=u,e=m(!1),l=m([]),t=P({dataset:{dimensions:["nickname","count"],source:[]},grid:{left:20,right:20,bottom:20,containLabel:!0},legend:{top:50},series:[{name:"\u8DDF\u8FDB\u6B21\u6570\u6392\u884C",type:"bar"}],toolbox:{feature:{dataZoom:{yAxisIndex:!1},brush:{type:["lineX","clear"]},saveAsImage:{show:!0,name:"\u8DDF\u8FDB\u6B21\u6570\u6392\u884C"}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",name:"\u8DDF\u8FDB\u6B21\u6570\uFF08\u6B21\uFF09"},yAxis:{type:"category",name:"\u5458\u5DE5"}}),i=async()=>{e.value=!0;const r=await b.getFollowCountRank(g.queryParams);t.dataset&&t.dataset.source&&(t.dataset.source=v(r).reverse()),l.value=r,e.value=!1};return c({loadData:i}),R(()=>{i()}),(r,D)=>{const w=f,x=_,d=k,s=A,y=F,h=j;return p(),q(Z,null,[a(d,{shadow:"never"},{default:o(()=>[a(x,{loading:n(e),animated:""},{default:o(()=>[a(w,{height:500,options:n(t)},null,8,["options"])]),_:1},8,["loading"])]),_:1}),a(d,{shadow:"never",class:"mt-16px"},{default:o(()=>[I((p(),X(y,{data:n(l)},{default:o(()=>[a(s,{label:"\u516C\u53F8\u6392\u540D",align:"center",type:"index",width:"80"}),a(s,{label:"\u5458\u5DE5",align:"center",prop:"nickname","min-width":"200"}),a(s,{label:"\u90E8\u95E8",align:"center",prop:"deptName","min-width":"200"}),a(s,{label:"\u8DDF\u8FDB\u6B21\u6570\uFF08\u6B21\uFF09",align:"center",prop:"count","min-width":"200"})]),_:1},8,["data"])),[[h,n(e)]])]),_:1})],64)}}});export{z as _};
