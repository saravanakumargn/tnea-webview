"use strict";(self.webpackChunktnea_webview_app=self.webpackChunktnea_webview_app||[]).push([[6233],{1334:function(e,a,t){t.r(a);var n=t(7294),l=t(1508),r=t(7720),c=t(2440),o=t(576),s=t(8619),m=t(9334),i=t(5116),u=t(8232),d=t(4669);a.default=e=>{let{pageContext:a}=e;const{name:t,colleges:p}=a,{0:h,1:C}=(0,n.useState)(""),k=(0,n.useMemo)((()=>p.sort(((e,a)=>{const t=e.name.toLowerCase(),n=a.name.toLowerCase();return t<n?-1:t>n?1:0}))),[p]),w=(0,n.useCallback)((e=>{C(e.target.value)}),[C]),b=(0,n.useMemo)((()=>k.filter((e=>e.name.toLowerCase().includes(h.toLowerCase())||e.code.toString().includes(h)))),[k,h]);return n.createElement(d.Z,{headerTitle:t,backLink:"/branches",shouldGoBack:!0},n.createElement(l.Z,null,n.createElement(i.Z,{id:"standard-search",label:"Search College Name or Code",type:"search",variant:"filled",onChange:w,fullWidth:!0})),n.createElement(c.Z,null,b.map((e=>n.createElement(n.Fragment,{key:e.id},n.createElement(o.ZP,{disablePadding:!0},n.createElement(s.Z,{component:u.Link,to:"/"+e.code},n.createElement(m.Z,{primary:e.name+" ("+e.code+")",secondary:e.city}))),n.createElement(r.Z,null))))))}}}]);
//# sourceMappingURL=component---src-templates-branch-colleges-tsx-e183ca4f809913b19c37.js.map