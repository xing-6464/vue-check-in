import{br as F,by as I,bt as P,bu as g,bn as R}from"./index-981508a6.js";import{A as $,n as d,f as C,o as j,B as J,D as y,Q as e,J as c,O as w,P as M,u as V,F as O,r as o,_ as Q}from"./_plugin-vue_export-helper-60a1b51b.js";const W={class:"check-title"},q={class:"check-table"},G=$({__name:"Check",setup(H){const S=F(),i=I(),x=P(),{infos:A}=g(S),{checkList:z}=g(i),b="全部",p=d(b),_=d(""),m=d(2),v=d(1),f=C(()=>z.value.filter(a=>(a.state===p.value||b===p.value)&&a.note.includes(_.value))),L=C(()=>f.value.slice((v.value-1)*m.value,v.value*m.value)),B=a=>{v.value=a},k=(a,n,h)=>{i.putApplyAction({_id:a,state:n}).then(r=>{var u;r.data.errcode===0&&(i.getApplyAction({approverid:(u=A.value)==null?void 0:u._id}).then(l=>{l.data.errcode===0&&i.updateCheckList(l.data.rets)}),x.putRemindAction({userid:h,applicant:!0}),R.success("审批成功"))})};return(a,n)=>{const h=o("el-input"),r=o("el-button"),u=o("el-divider"),l=o("el-radio-button"),N=o("el-radio-group"),T=o("el-space"),s=o("el-table-column"),U=o("el-table"),D=o("el-pagination");return j(),J(O,null,[y("div",W,[e(T,null,{default:c(()=>[e(h,{modelValue:_.value,"onUpdate:modelValue":n[0]||(n[0]=t=>_.value=t),placeholder:"请输入搜索关键词"},null,8,["modelValue"]),e(r,{type:"primary",icon:"search"},{default:c(()=>[w("搜索")]),_:1}),e(u,{direction:"vertical"}),e(N,{modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=t=>p.value=t)},{default:c(()=>[e(l,{label:"全部"}),e(l,{label:"待审批"}),e(l,{label:"已通过"}),e(l,{label:"未通过"})]),_:1},8,["modelValue"])]),_:1})]),y("div",q,[e(U,{data:V(L),border:""},{default:c(()=>[e(s,{prop:"applicantname",label:"申请人",width:"180"}),e(s,{prop:"reason",label:"审批事由",width:"180"}),e(s,{prop:"time",label:"时间"},{default:c(t=>[w(M(t.row.time.join(" - ")),1)]),_:1}),e(s,{prop:"note",label:"备注"}),e(s,{label:"操作",width:"180"},{default:c(t=>[e(r,{onClick:E=>k(t.row._id,"已通过",t.row.applicantid),type:"success",icon:"check",size:"small",circle:""},null,8,["onClick"]),e(r,{onClick:E=>k(t.row._id,"未通过",t.row.applicantid),type:"danger",icon:"close",size:"small",circle:""},null,8,["onClick"])]),_:1}),e(s,{prop:"state",label:"状态",width:"180"})]),_:1},8,["data"]),e(D,{small:"",background:"",layout:"prev, pager, next",total:V(f).length,"page-size":m.value,onCurrentChange:B},null,8,["total","page-size"])])],64)}}});const Y=Q(G,[["__scopeId","data-v-22855467"]]);export{Y as default};