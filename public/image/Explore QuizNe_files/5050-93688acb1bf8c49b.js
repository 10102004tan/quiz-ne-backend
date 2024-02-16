"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5050],{65050:function(e,t,o){o.d(t,{VY:function(){return S},fC:function(){return $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9},h_:function(){return $cb5cc270b50c6fcd$export$602eac185826482c},xz:function(){return I}});var r=o(13428),n=o(2265),c=o(85744),a=o(42210),u=o(56989),l=o(79249),i=o(31244),s=o(52759),p=o(20966),d=o(12300),f=o(52730),v=o(85606),g=o(9381),h=o(67256),b=o(73763),m=o(85859),E=o(32098);let C="Popover",[P,O]=(0,u.b)(C,[d.D7]),$=(0,d.D7)(),[_,w]=P(C),F=(0,n.forwardRef)((e,t)=>{let{__scopePopover:o,...u}=e,l=w("PopoverTrigger",o),i=$(o),s=(0,a.e)(t,l.triggerRef),p=(0,n.createElement)(g.WV.button,(0,r.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":$cb5cc270b50c6fcd$var$getState(l.open)},u,{ref:s,onClick:(0,c.M)(e.onClick,l.onOpenToggle)}));return l.hasCustomAnchor?p:(0,n.createElement)(d.ee,(0,r.Z)({asChild:!0},i),p)}),R="PopoverPortal",[x,D]=P(R,{forceMount:void 0}),A="PopoverContent",M=(0,n.forwardRef)((e,t)=>{let o=D(A,e.__scopePopover),{forceMount:c=o.forceMount,...a}=e,u=w(A,e.__scopePopover);return(0,n.createElement)(v.z,{present:c||u.open},u.modal?(0,n.createElement)(k,(0,r.Z)({},a,{ref:t})):(0,n.createElement)(y,(0,r.Z)({},a,{ref:t})))}),k=(0,n.forwardRef)((e,t)=>{let o=w(A,e.__scopePopover),u=(0,n.useRef)(null),l=(0,a.e)(t,u),i=(0,n.useRef)(!1);return(0,n.useEffect)(()=>{let e=u.current;if(e)return(0,m.Ry)(e)},[]),(0,n.createElement)(E.Z,{as:h.g7,allowPinchZoom:!0},(0,n.createElement)(Z,(0,r.Z)({},e,{ref:l,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,c.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),i.current||null===(t=o.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,c.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,o=0===t.button&&!0===t.ctrlKey,r=2===t.button||o;i.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:(0,c.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})))}),y=(0,n.forwardRef)((e,t)=>{let o=w(A,e.__scopePopover),c=(0,n.useRef)(!1),a=(0,n.useRef)(!1);return(0,n.createElement)(Z,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,n;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(c.current||null===(n=o.triggerRef.current)||void 0===n||n.focus(),t.preventDefault()),c.current=!1,a.current=!1},onInteractOutside:t=>{var r,n;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(c.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let u=t.target,l=null===(n=o.triggerRef.current)||void 0===n?void 0:n.contains(u);l&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}}))}),Z=(0,n.forwardRef)((e,t)=>{let{__scopePopover:o,trapFocus:c,onOpenAutoFocus:a,onCloseAutoFocus:u,disableOutsidePointerEvents:p,onEscapeKeyDown:f,onPointerDownOutside:v,onFocusOutside:g,onInteractOutside:h,...b}=e,m=w(A,o),E=$(o);return(0,i.EW)(),(0,n.createElement)(s.M,{asChild:!0,loop:!0,trapped:c,onMountAutoFocus:a,onUnmountAutoFocus:u},(0,n.createElement)(l.XB,{asChild:!0,disableOutsidePointerEvents:p,onInteractOutside:h,onEscapeKeyDown:f,onPointerDownOutside:v,onFocusOutside:g,onDismiss:()=>m.onOpenChange(!1)},(0,n.createElement)(d.VY,(0,r.Z)({"data-state":$cb5cc270b50c6fcd$var$getState(m.open),role:"dialog",id:m.contentId},E,b,{ref:t,style:{...b.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});function $cb5cc270b50c6fcd$var$getState(e){return e?"open":"closed"}let $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9=e=>{let{__scopePopover:t,children:o,open:r,defaultOpen:c,onOpenChange:a,modal:u=!1}=e,l=$(t),i=(0,n.useRef)(null),[s,f]=(0,n.useState)(!1),[v=!1,g]=(0,b.T)({prop:r,defaultProp:c,onChange:a});return(0,n.createElement)(d.fC,l,(0,n.createElement)(_,{scope:t,contentId:(0,p.M)(),triggerRef:i,open:v,onOpenChange:g,onOpenToggle:(0,n.useCallback)(()=>g(e=>!e),[g]),hasCustomAnchor:s,onCustomAnchorAdd:(0,n.useCallback)(()=>f(!0),[]),onCustomAnchorRemove:(0,n.useCallback)(()=>f(!1),[]),modal:u},o))},I=F,$cb5cc270b50c6fcd$export$602eac185826482c=e=>{let{__scopePopover:t,forceMount:o,children:r,container:c}=e,a=w(R,t);return(0,n.createElement)(x,{scope:t,forceMount:o},(0,n.createElement)(v.z,{present:o||a.open},(0,n.createElement)(f.h,{asChild:!0,container:c},r)))},S=M}}]);