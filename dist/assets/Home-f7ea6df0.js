import{br as R,bt as P,bu as I,bs as F,bv as Q,bw as z}from"./index-b50be390.js";import{A as $,f as N,o,B as k,Q as n,J as e,u as c,c as s,O as x,M as C,P as S,aC as U,r as t,_ as g,a2 as D,F as V,L,D as M}from"./_plugin-vue_export-helper-60a1b51b.js";const j={class:"home-header"},q=U('<span class="home-header-logo" data-v-2efab866><i class="iconfont icon-vue" data-v-2efab866></i><i class="iconfont icon-icon-test" data-v-2efab866></i><i class="iconfont icon-typescript" data-v-2efab866></i></span><span class="home-header-title" data-v-2efab866>在线考勤系统</span>',2),G=$({__name:"HomeHeader",setup(B){const m=F(),l=R(),w=P(),{infos:f}=I(l),{info:a}=I(w),d=N(()=>f.value.head),_=N(()=>f.value.name),p=N(()=>a.value.applicant||a.value.approver),v=()=>{l.clearToken(),setTimeout(()=>{window.location.replace("/login")},500)},h=b=>{m.push(b)};return(b,H)=>{const r=t("Bell"),u=t("el-icon"),y=t("el-badge"),i=t("el-dropdown-item"),A=t("el-dropdown-menu"),T=t("el-dropdown"),E=t("el-avatar"),J=t("el-space");return o(),k("div",j,[q,n(T,null,{dropdown:e(()=>[n(A,null,{default:e(()=>[c(a).applicant?(o(),s(i,{key:0,onClick:H[0]||(H[0]=O=>h("/apply"))},{default:e(()=>[x("有审批结果消息")]),_:1})):C("",!0),c(a).approver?(o(),s(i,{key:1,onClick:H[1]||(H[1]=O=>h("/check"))},{default:e(()=>[x("有审批请求消息")]),_:1})):C("",!0),!c(a).applicant&&!c(a).approver?(o(),s(i,{key:2},{default:e(()=>[x("暂无消息")]),_:1})):C("",!0)]),_:1})]),default:e(()=>[n(y,{"is-dot":c(p)},{default:e(()=>[n(u,{size:20},{default:e(()=>[n(r)]),_:1})]),_:1},8,["is-dot"])]),_:1}),n(T,null,{dropdown:e(()=>[n(A,null,{default:e(()=>[n(i,null,{default:e(()=>[x("个人中心")]),_:1}),n(i,{onClick:v},{default:e(()=>[x("退出")]),_:1})]),_:1})]),default:e(()=>[n(J,{class:"home-header-space"},{default:e(()=>[n(E,{src:c(d)},null,8,["src"]),x(" "+S(c(_)),1)]),_:1})]),_:1})])}}});const K=g(G,[["__scopeId","data-v-2efab866"]]),W=$({__name:"HomeAside",setup(B){const m=R(),{infos:l}=I(m),w=F(),f=z(),a=l.value.permission,d=Q.cloneDeep(w.options.routes).filter(_=>{var p,v;return _.children=(p=_.children)==null?void 0:p.filter(h=>{var b;return((b=h.meta)==null?void 0:b.menu)&&a.includes(h.name)}),((v=_.meta)==null?void 0:v.menu)&&a.includes(_.name)});return(_,p)=>{const v=t("el-icon"),h=t("el-menu-item"),b=t("el-sub-menu"),H=t("el-menu");return o(),s(H,{"default-active":c(f).path,router:""},{default:e(()=>[(o(!0),k(V,null,D(c(d),r=>(o(),s(b,{key:r.path,index:r.path},{title:e(()=>{var u;return[n(v,null,{default:e(()=>{var y;return[(o(),s(L((y=r.meta)==null?void 0:y.icon)))]}),_:2},1024),M("span",null,S((u=r.meta)==null?void 0:u.title),1)]}),default:e(()=>[(o(!0),k(V,null,D(r.children,u=>(o(),s(h,{key:r.path+u.path,index:r.path+u.path},{default:e(()=>{var y;return[n(v,null,{default:e(()=>{var i;return[(o(),s(L((i=u.meta)==null?void 0:i.icon)))]}),_:2},1024),M("span",null,S((y=u.meta)==null?void 0:y.title),1)]}),_:2},1032,["index"]))),128))]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"])}}});const X=g(W,[["__scopeId","data-v-e8439d63"]]),Y=$({__name:"HomeBreadcrumb",setup(B){const m=z(),l=N(()=>m.matched);return(w,f)=>{const a=t("el-breadcrumb-item"),d=t("el-breadcrumb");return o(),s(d,{separator:"/"},{default:e(()=>[(o(!0),k(V,null,D(c(l),_=>(o(),s(a,{key:_.path},{default:e(()=>{var p;return[x(S((p=_.meta)==null?void 0:p.title),1)]}),_:2},1024))),128))]),_:1})}}});const Z=g(Y,[["__scopeId","data-v-4573c62d"]]);const ee={},ne={class:"home-main"};function te(B,m){const l=t("router-view");return o(),k("div",ne,[n(l)])}const oe=g(ee,[["render",te],["__scopeId","data-v-3a6ad7f3"]]),ae=$({__name:"Home",setup(B){return(m,l)=>{const w=t("el-header"),f=t("el-aside"),a=t("el-main"),d=t("el-container");return o(),s(d,null,{default:e(()=>[n(w,null,{default:e(()=>[n(K)]),_:1}),n(d,null,{default:e(()=>[n(f,null,{default:e(()=>[n(X)]),_:1}),n(a,null,{default:e(()=>[n(Z),n(oe)]),_:1})]),_:1})]),_:1})}}});const ce=g(ae,[["__scopeId","data-v-f30546a0"]]);export{ce as default};