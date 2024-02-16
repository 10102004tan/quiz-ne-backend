"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9848],{79249:function(e,t,n){let i;n.d(t,{I0:function(){return m},XB:function(){return d},fC:function(){return p}});var o=n(13428),r=n(2265),l=n(85744),a=n(9381),s=n(42210),u=n(16459);function $addc16e1bbe58fd0$export$3a72a57244d6e765(e,t=null==globalThis?void 0:globalThis.document){let n=(0,u.W)(e);(0,r.useEffect)(()=>{let handleKeyDown=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",handleKeyDown),()=>t.removeEventListener("keydown",handleKeyDown)},[n,t])}let c="dismissableLayer.update",f=(0,r.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),d=(0,r.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:u=!1,onEscapeKeyDown:d,onPointerDownOutside:g,onFocusOutside:p,onInteractOutside:m,onDismiss:h,...v}=e,w=(0,r.useContext)(f),[y,b]=(0,r.useState)(null),_=null!==(n=null==y?void 0:y.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,x]=(0,r.useState)({}),E=(0,s.e)(t,e=>b(e)),O=Array.from(w.layers),[A]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),C=O.indexOf(A),P=y?O.indexOf(y):-1,R=w.layersWithOutsidePointerEventsDisabled.size>0,S=P>=C,$=$5cb92bef7577960e$var$usePointerDownOutside(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));!S||n||(null==g||g(e),null==m||m(e),e.defaultPrevented||null==h||h())},_),L=$5cb92bef7577960e$var$useFocusOutside(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));n||(null==p||p(e),null==m||m(e),e.defaultPrevented||null==h||h())},_);return $addc16e1bbe58fd0$export$3a72a57244d6e765(e=>{let t=P===w.layers.size-1;t&&(null==d||d(e),!e.defaultPrevented&&h&&(e.preventDefault(),h()))},_),(0,r.useEffect)(()=>{if(y)return u&&(0===w.layersWithOutsidePointerEventsDisabled.size&&(i=_.body.style.pointerEvents,_.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(y)),w.layers.add(y),$5cb92bef7577960e$var$dispatchUpdate(),()=>{u&&1===w.layersWithOutsidePointerEventsDisabled.size&&(_.body.style.pointerEvents=i)}},[y,_,u,w]),(0,r.useEffect)(()=>()=>{y&&(w.layers.delete(y),w.layersWithOutsidePointerEventsDisabled.delete(y),$5cb92bef7577960e$var$dispatchUpdate())},[y,w]),(0,r.useEffect)(()=>{let handleUpdate=()=>x({});return document.addEventListener(c,handleUpdate),()=>document.removeEventListener(c,handleUpdate)},[]),(0,r.createElement)(a.WV.div,(0,o.Z)({},v,{ref:E,style:{pointerEvents:R?S?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.M)(e.onFocusCapture,L.onFocusCapture),onBlurCapture:(0,l.M)(e.onBlurCapture,L.onBlurCapture),onPointerDownCapture:(0,l.M)(e.onPointerDownCapture,$.onPointerDownCapture)}))}),g=(0,r.forwardRef)((e,t)=>{let n=(0,r.useContext)(f),i=(0,r.useRef)(null),l=(0,s.e)(t,i);return(0,r.useEffect)(()=>{let e=i.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,r.createElement)(a.WV.div,(0,o.Z)({},e,{ref:l}))});function $5cb92bef7577960e$var$usePointerDownOutside(e,t=null==globalThis?void 0:globalThis.document){let n=(0,u.W)(e),i=(0,r.useRef)(!1),o=(0,r.useRef)(()=>{});return(0,r.useEffect)(()=>{let handlePointerDown=e=>{if(e.target&&!i.current){let i={originalEvent:e};function handleAndDispatchPointerDownOutsideEvent(){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside",n,i,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=handleAndDispatchPointerDownOutsideEvent,t.addEventListener("click",o.current,{once:!0})):handleAndDispatchPointerDownOutsideEvent()}else t.removeEventListener("click",o.current);i.current=!1},e=window.setTimeout(()=>{t.addEventListener("pointerdown",handlePointerDown)},0);return()=>{window.clearTimeout(e),t.removeEventListener("pointerdown",handlePointerDown),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>i.current=!0}}function $5cb92bef7577960e$var$useFocusOutside(e,t=null==globalThis?void 0:globalThis.document){let n=(0,u.W)(e),i=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{let handleFocus=e=>{e.target&&!i.current&&$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",handleFocus),()=>t.removeEventListener("focusin",handleFocus)},[t,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function $5cb92bef7577960e$var$dispatchUpdate(){let e=new CustomEvent(c);document.dispatchEvent(e)}function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(e,t,n,{discrete:i}){let o=n.originalEvent.target,r=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),i?(0,a.jH)(o,r):o.dispatchEvent(r)}let p=d,m=g},20966:function(e,t,n){n.d(t,{M:function(){return $1746a345f3d73bb7$export$f680877a34711e37}});var i,o=n(2265),r=n(51030);let l=(i||(i=n.t(o,2)))["useId".toString()]||(()=>void 0),a=0;function $1746a345f3d73bb7$export$f680877a34711e37(e){let[t,n]=o.useState(l());return(0,r.b)(()=>{e||n(e=>null!=e?e:String(a++))},[e]),e||(t?`radix-${t}`:"")}},12300:function(e,t,n){n.d(t,{ee:function(){return N},Eh:function(){return B},VY:function(){return F},fC:function(){return $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9},D7:function(){return A}});var i=n(13428),o=n(2265);let r=["top","right","bottom","left"],l=Math.min,a=Math.max,s=Math.round,u=Math.floor,createCoords=e=>({x:e,y:e}),c={left:"right",right:"left",bottom:"top",top:"bottom"},f={start:"end",end:"start"};function floating_ui_utils_evaluate(e,t){return"function"==typeof e?e(t):e}function floating_ui_utils_getSide(e){return e.split("-")[0]}function floating_ui_utils_getAlignment(e){return e.split("-")[1]}function getOppositeAxis(e){return"x"===e?"y":"x"}function getAxisLength(e){return"y"===e?"height":"width"}function floating_ui_utils_getSideAxis(e){return["top","bottom"].includes(floating_ui_utils_getSide(e))?"y":"x"}function floating_ui_utils_getAlignmentSides(e,t,n){void 0===n&&(n=!1);let i=floating_ui_utils_getAlignment(e),o=getOppositeAxis(floating_ui_utils_getSideAxis(e)),r=getAxisLength(o),l="x"===o?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[r]>t.floating[r]&&(l=getOppositePlacement(l)),[l,getOppositePlacement(l)]}function getExpandedPlacements(e){let t=getOppositePlacement(e);return[floating_ui_utils_getOppositeAlignmentPlacement(e),t,floating_ui_utils_getOppositeAlignmentPlacement(t)]}function floating_ui_utils_getOppositeAlignmentPlacement(e){return e.replace(/start|end/g,e=>f[e])}function getSideList(e,t,n){let i=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(n)return t?o:i;return t?i:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}function getOppositeAxisPlacements(e,t,n,i){let o=floating_ui_utils_getAlignment(e),r=getSideList(floating_ui_utils_getSide(e),"start"===n,i);return o&&(r=r.map(e=>e+"-"+o),t&&(r=r.concat(r.map(floating_ui_utils_getOppositeAlignmentPlacement)))),r}function getOppositePlacement(e){return e.replace(/left|right|bottom|top/g,e=>c[e])}function expandPaddingObject(e){return{top:0,right:0,bottom:0,left:0,...e}}function floating_ui_utils_getPaddingObject(e){return"number"!=typeof e?expandPaddingObject(e):{top:e,right:e,bottom:e,left:e}}function floating_ui_utils_rectToClientRect(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function computeCoordsFromPlacement(e,t,n){let i,{reference:o,floating:r}=e,l=floating_ui_utils_getSideAxis(t),a=getOppositeAxis(floating_ui_utils_getSideAxis(t)),s=getAxisLength(a),u=floating_ui_utils_getSide(t),c="y"===l,f=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,g=o[s]/2-r[s]/2;switch(u){case"top":i={x:f,y:o.y-r.height};break;case"bottom":i={x:f,y:o.y+o.height};break;case"right":i={x:o.x+o.width,y:d};break;case"left":i={x:o.x-r.width,y:d};break;default:i={x:o.x,y:o.y}}switch(floating_ui_utils_getAlignment(t)){case"start":i[a]-=g*(n&&c?-1:1);break;case"end":i[a]+=g*(n&&c?-1:1)}return i}let computePosition=async(e,t,n)=>{let{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:l}=n,a=r.filter(Boolean),s=await (null==l.isRTL?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:f}=computeCoordsFromPlacement(u,i,s),d=i,g={},p=0;for(let n=0;n<a.length;n++){let{name:r,fn:m}=a[n],{x:h,y:v,data:w,reset:y}=await m({x:c,y:f,initialPlacement:i,placement:d,strategy:o,middlewareData:g,rects:u,platform:l,elements:{reference:e,floating:t}});if(c=null!=h?h:c,f=null!=v?v:f,g={...g,[r]:{...g[r],...w}},y&&p<=50){p++,"object"==typeof y&&(y.placement&&(d=y.placement),y.rects&&(u=!0===y.rects?await l.getElementRects({reference:e,floating:t,strategy:o}):y.rects),{x:c,y:f}=computeCoordsFromPlacement(u,d,s)),n=-1;continue}}return{x:c,y:f,placement:d,strategy:o,middlewareData:g}};async function detectOverflow(e,t){var n;void 0===t&&(t={});let{x:i,y:o,platform:r,rects:l,elements:a,strategy:s}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:f="floating",altBoundary:d=!1,padding:g=0}=floating_ui_utils_evaluate(t,e),p=floating_ui_utils_getPaddingObject(g),m=a[d?"floating"===f?"reference":"floating":f],h=floating_ui_utils_rectToClientRect(await r.getClippingRect({element:null==(n=await (null==r.isElement?void 0:r.isElement(m)))||n?m:m.contextElement||await (null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:s})),v="floating"===f?{...l.floating,x:i,y:o}:l.reference,w=await (null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),y=await (null==r.isElement?void 0:r.isElement(w))&&await (null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},b=floating_ui_utils_rectToClientRect(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:w,strategy:s}):v);return{top:(h.top-b.top+p.top)/y.y,bottom:(b.bottom-h.bottom+p.bottom)/y.y,left:(h.left-b.left+p.left)/y.x,right:(b.right-h.right+p.right)/y.x}}let arrow=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:i,placement:o,rects:r,platform:s,elements:u,middlewareData:c}=t,{element:f,padding:d=0}=floating_ui_utils_evaluate(e,t)||{};if(null==f)return{};let g=floating_ui_utils_getPaddingObject(d),p={x:n,y:i},m=getOppositeAxis(floating_ui_utils_getSideAxis(o)),h=getAxisLength(m),v=await s.getDimensions(f),w="y"===m,y=w?"clientHeight":"clientWidth",b=r.reference[h]+r.reference[m]-p[m]-r.floating[h],_=p[m]-r.reference[m],x=await (null==s.getOffsetParent?void 0:s.getOffsetParent(f)),E=x?x[y]:0;E&&await (null==s.isElement?void 0:s.isElement(x))||(E=u.floating[y]||r.floating[h]);let O=E/2-v[h]/2-1,A=l(g[w?"top":"left"],O),C=l(g[w?"bottom":"right"],O),P=E-v[h]-C,R=E/2-v[h]/2+(b/2-_/2),S=a(A,l(R,P)),$=!c.arrow&&null!=floating_ui_utils_getAlignment(o)&&R!=S&&r.reference[h]/2-(R<A?A:C)-v[h]/2<0,L=$?R<A?R-A:R-P:0;return{[m]:p[m]+L,data:{[m]:S,centerOffset:R-S-L,...$&&{alignmentOffset:L}},reset:$}}});function getSideOffsets(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function isAnySideFullyClipped(e){return r.some(t=>e[t]>=0)}async function convertValueToCoords(e,t){let{placement:n,platform:i,elements:o}=e,r=await (null==i.isRTL?void 0:i.isRTL(o.floating)),l=floating_ui_utils_getSide(n),a=floating_ui_utils_getAlignment(n),s="y"===floating_ui_utils_getSideAxis(n),u=["left","top"].includes(l)?-1:1,c=r&&s?-1:1,f=floating_ui_utils_evaluate(t,e),{mainAxis:d,crossAxis:g,alignmentAxis:p}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return a&&"number"==typeof p&&(g="end"===a?-1*p:p),s?{x:g*c,y:d*u}:{x:d*u,y:g*c}}function getNodeName(e){return isNode(e)?(e.nodeName||"").toLowerCase():"#document"}function getWindow(e){var t;return(null==e?void 0:null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function getDocumentElement(e){var t;return null==(t=(isNode(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function isNode(e){return e instanceof Node||e instanceof getWindow(e).Node}function isElement(e){return e instanceof Element||e instanceof getWindow(e).Element}function isHTMLElement(e){return e instanceof HTMLElement||e instanceof getWindow(e).HTMLElement}function isShadowRoot(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof getWindow(e).ShadowRoot)}function isOverflowElement(e){let{overflow:t,overflowX:n,overflowY:i,display:o}=getComputedStyle(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!["inline","contents"].includes(o)}function isTableElement(e){return["table","td","th"].includes(getNodeName(e))}function isContainingBlock(e){let t=isWebKit(),n=getComputedStyle(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function getContainingBlock(e){let t=getParentNode(e);for(;isHTMLElement(t)&&!isLastTraversableNode(t);){if(isContainingBlock(t))return t;t=getParentNode(t)}return null}function isWebKit(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function isLastTraversableNode(e){return["html","body","#document"].includes(getNodeName(e))}function getComputedStyle(e){return getWindow(e).getComputedStyle(e)}function getNodeScroll(e){return isElement(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function getParentNode(e){if("html"===getNodeName(e))return e;let t=e.assignedSlot||e.parentNode||isShadowRoot(e)&&e.host||getDocumentElement(e);return isShadowRoot(t)?t.host:t}function getNearestOverflowAncestor(e){let t=getParentNode(e);return isLastTraversableNode(t)?e.ownerDocument?e.ownerDocument.body:e.body:isHTMLElement(t)&&isOverflowElement(t)?t:getNearestOverflowAncestor(t)}function getOverflowAncestors(e,t,n){var i;void 0===t&&(t=[]),void 0===n&&(n=!0);let o=getNearestOverflowAncestor(e),r=o===(null==(i=e.ownerDocument)?void 0:i.body),l=getWindow(o);return r?t.concat(l,l.visualViewport||[],isOverflowElement(o)?o:[],l.frameElement&&n?getOverflowAncestors(l.frameElement):[]):t.concat(o,getOverflowAncestors(o,[],n))}function getCssDimensions(e){let t=getComputedStyle(e),n=parseFloat(t.width)||0,i=parseFloat(t.height)||0,o=isHTMLElement(e),r=o?e.offsetWidth:n,l=o?e.offsetHeight:i,a=s(n)!==r||s(i)!==l;return a&&(n=r,i=l),{width:n,height:i,$:a}}function unwrapElement(e){return isElement(e)?e:e.contextElement}function getScale(e){let t=unwrapElement(e);if(!isHTMLElement(t))return createCoords(1);let n=t.getBoundingClientRect(),{width:i,height:o,$:r}=getCssDimensions(t),l=(r?s(n.width):n.width)/i,a=(r?s(n.height):n.height)/o;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let d=createCoords(0);function getVisualOffsets(e){let t=getWindow(e);return isWebKit()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:d}function shouldAddVisualOffsets(e,t,n){return void 0===t&&(t=!1),!!n&&(!t||n===getWindow(e))&&t}function getBoundingClientRect(e,t,n,i){void 0===t&&(t=!1),void 0===n&&(n=!1);let o=e.getBoundingClientRect(),r=unwrapElement(e),l=createCoords(1);t&&(i?isElement(i)&&(l=getScale(i)):l=getScale(e));let a=shouldAddVisualOffsets(r,n,i)?getVisualOffsets(r):createCoords(0),s=(o.left+a.x)/l.x,u=(o.top+a.y)/l.y,c=o.width/l.x,f=o.height/l.y;if(r){let e=getWindow(r),t=i&&isElement(i)?getWindow(i):i,n=e.frameElement;for(;n&&i&&t!==e;){let e=getScale(n),t=n.getBoundingClientRect(),i=getComputedStyle(n),o=t.left+(n.clientLeft+parseFloat(i.paddingLeft))*e.x,r=t.top+(n.clientTop+parseFloat(i.paddingTop))*e.y;s*=e.x,u*=e.y,c*=e.x,f*=e.y,s+=o,u+=r,n=getWindow(n).frameElement}}return floating_ui_utils_rectToClientRect({width:c,height:f,x:s,y:u})}function convertOffsetParentRelativeRectToViewportRelativeRect(e){let{rect:t,offsetParent:n,strategy:i}=e,o=isHTMLElement(n),r=getDocumentElement(n);if(n===r)return t;let l={scrollLeft:0,scrollTop:0},a=createCoords(1),s=createCoords(0);if((o||!o&&"fixed"!==i)&&(("body"!==getNodeName(n)||isOverflowElement(r))&&(l=getNodeScroll(n)),isHTMLElement(n))){let e=getBoundingClientRect(n);a=getScale(n),s.x=e.x+n.clientLeft,s.y=e.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-l.scrollLeft*a.x+s.x,y:t.y*a.y-l.scrollTop*a.y+s.y}}function getClientRects(e){return Array.from(e.getClientRects())}function getWindowScrollBarX(e){return getBoundingClientRect(getDocumentElement(e)).left+getNodeScroll(e).scrollLeft}function getDocumentRect(e){let t=getDocumentElement(e),n=getNodeScroll(e),i=e.ownerDocument.body,o=a(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=a(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight),l=-n.scrollLeft+getWindowScrollBarX(e),s=-n.scrollTop;return"rtl"===getComputedStyle(i).direction&&(l+=a(t.clientWidth,i.clientWidth)-o),{width:o,height:r,x:l,y:s}}function getViewportRect(e,t){let n=getWindow(e),i=getDocumentElement(e),o=n.visualViewport,r=i.clientWidth,l=i.clientHeight,a=0,s=0;if(o){r=o.width,l=o.height;let e=isWebKit();(!e||e&&"fixed"===t)&&(a=o.offsetLeft,s=o.offsetTop)}return{width:r,height:l,x:a,y:s}}function getInnerBoundingClientRect(e,t){let n=getBoundingClientRect(e,!0,"fixed"===t),i=n.top+e.clientTop,o=n.left+e.clientLeft,r=isHTMLElement(e)?getScale(e):createCoords(1),l=e.clientWidth*r.x,a=e.clientHeight*r.y,s=o*r.x,u=i*r.y;return{width:l,height:a,x:s,y:u}}function getClientRectFromClippingAncestor(e,t,n){let i;if("viewport"===t)i=getViewportRect(e,n);else if("document"===t)i=getDocumentRect(getDocumentElement(e));else if(isElement(t))i=getInnerBoundingClientRect(t,n);else{let n=getVisualOffsets(e);i={...t,x:t.x-n.x,y:t.y-n.y}}return floating_ui_utils_rectToClientRect(i)}function hasFixedPositionAncestor(e,t){let n=getParentNode(e);return!(n===t||!isElement(n)||isLastTraversableNode(n))&&("fixed"===getComputedStyle(n).position||hasFixedPositionAncestor(n,t))}function getClippingElementAncestors(e,t){let n=t.get(e);if(n)return n;let i=getOverflowAncestors(e,[],!1).filter(e=>isElement(e)&&"body"!==getNodeName(e)),o=null,r="fixed"===getComputedStyle(e).position,l=r?getParentNode(e):e;for(;isElement(l)&&!isLastTraversableNode(l);){let t=getComputedStyle(l),n=isContainingBlock(l);n||"fixed"!==t.position||(o=null);let a=r?!n&&!o:!n&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||isOverflowElement(l)&&!n&&hasFixedPositionAncestor(e,l);a?i=i.filter(e=>e!==l):o=t,l=getParentNode(l)}return t.set(e,i),i}function getClippingRect(e){let{element:t,boundary:n,rootBoundary:i,strategy:o}=e,r="clippingAncestors"===n?getClippingElementAncestors(t,this._c):[].concat(n),s=[...r,i],u=s[0],c=s.reduce((e,n)=>{let i=getClientRectFromClippingAncestor(t,n,o);return e.top=a(i.top,e.top),e.right=l(i.right,e.right),e.bottom=l(i.bottom,e.bottom),e.left=a(i.left,e.left),e},getClientRectFromClippingAncestor(t,u,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function getDimensions(e){return getCssDimensions(e)}function getRectRelativeToOffsetParent(e,t,n){let i=isHTMLElement(t),o=getDocumentElement(t),r="fixed"===n,l=getBoundingClientRect(e,!0,r,t),a={scrollLeft:0,scrollTop:0},s=createCoords(0);if(i||!i&&!r){if(("body"!==getNodeName(t)||isOverflowElement(o))&&(a=getNodeScroll(t)),i){let e=getBoundingClientRect(t,!0,r,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=getWindowScrollBarX(o))}return{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}function getTrueOffsetParent(e,t){return isHTMLElement(e)&&"fixed"!==getComputedStyle(e).position?t?t(e):e.offsetParent:null}function getOffsetParent(e,t){let n=getWindow(e);if(!isHTMLElement(e))return n;let i=getTrueOffsetParent(e,t);for(;i&&isTableElement(i)&&"static"===getComputedStyle(i).position;)i=getTrueOffsetParent(i,t);return i&&("html"===getNodeName(i)||"body"===getNodeName(i)&&"static"===getComputedStyle(i).position&&!isContainingBlock(i))?n:i||getContainingBlock(e)||n}let getElementRects=async function(e){let{reference:t,floating:n,strategy:i}=e,o=this.getOffsetParent||getOffsetParent,r=this.getDimensions;return{reference:getRectRelativeToOffsetParent(t,await o(n),i),floating:{x:0,y:0,...await r(n)}}};function isRTL(e){return"rtl"===getComputedStyle(e).direction}let g={convertOffsetParentRelativeRectToViewportRelativeRect,getDocumentElement:getDocumentElement,getClippingRect,getOffsetParent,getElementRects,getClientRects,getDimensions,getScale,isElement:isElement,isRTL};function observeMove(e,t){let n,i=null,o=getDocumentElement(e);function cleanup(){clearTimeout(n),i&&i.disconnect(),i=null}function refresh(r,s){void 0===r&&(r=!1),void 0===s&&(s=1),cleanup();let{left:c,top:f,width:d,height:g}=e.getBoundingClientRect();if(r||t(),!d||!g)return;let p=u(f),m=u(o.clientWidth-(c+d)),h=u(o.clientHeight-(f+g)),v=u(c),w={rootMargin:-p+"px "+-m+"px "+-h+"px "+-v+"px",threshold:a(0,l(1,s))||1},y=!0;function handleObserve(e){let t=e[0].intersectionRatio;if(t!==s){if(!y)return refresh();t?refresh(!1,t):n=setTimeout(()=>{refresh(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(handleObserve,{...w,root:o.ownerDocument})}catch(e){i=new IntersectionObserver(handleObserve,w)}i.observe(e)}return refresh(!0),cleanup}function autoUpdate(e,t,n,i){let o;void 0===i&&(i={});let{ancestorScroll:r=!0,ancestorResize:l=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:u=!1}=i,c=unwrapElement(e),f=r||l?[...c?getOverflowAncestors(c):[],...getOverflowAncestors(t)]:[];f.forEach(e=>{r&&e.addEventListener("scroll",n,{passive:!0}),l&&e.addEventListener("resize",n)});let d=c&&s?observeMove(c,n):null,g=-1,p=null;a&&(p=new ResizeObserver(e=>{let[i]=e;i&&i.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{p&&p.observe(t)})),n()}),c&&!u&&p.observe(c),p.observe(t));let m=u?getBoundingClientRect(e):null;function frameLoop(){let t=getBoundingClientRect(e);m&&(t.x!==m.x||t.y!==m.y||t.width!==m.width||t.height!==m.height)&&n(),m=t,o=requestAnimationFrame(frameLoop)}return u&&frameLoop(),n(),()=>{f.forEach(e=>{r&&e.removeEventListener("scroll",n),l&&e.removeEventListener("resize",n)}),d&&d(),p&&p.disconnect(),p=null,u&&cancelAnimationFrame(o)}}let floating_ui_dom_computePosition=(e,t,n)=>{let i=new Map,o={platform:g,...n},r={...o.platform,_c:i};return computePosition(e,t,{...o,platform:r})};var p=n(54887);let floating_ui_react_dom_arrow=e=>{function isRef(e){return({}).hasOwnProperty.call(e,"current")}return{name:"arrow",options:e,fn(t){let{element:n,padding:i}="function"==typeof e?e(t):e;if(n&&isRef(n)){if(null!=n.current)return arrow({element:n.current,padding:i}).fn(t)}else if(n)return arrow({element:n,padding:i}).fn(t);return{}}}};var m="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;function deepEqual(e,t){let n,i,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(i=n;0!=i--;)if(!deepEqual(e[i],t[i]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(i=n;0!=i--;)if(!({}).hasOwnProperty.call(t,o[i]))return!1;for(i=n;0!=i--;){let n=o[i];if(("_owner"!==n||!e.$$typeof)&&!deepEqual(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function getDPR(e){if("undefined"==typeof window)return 1;let t=e.ownerDocument.defaultView||window;return t.devicePixelRatio||1}function roundByDPR(e,t){let n=getDPR(e);return Math.round(t*n)/n}function useLatestRef(e){let t=o.useRef(e);return m(()=>{t.current=e}),t}function useFloating(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:i=[],platform:r,elements:{reference:l,floating:a}={},transform:s=!0,whileElementsMounted:u,open:c}=e,[f,d]=o.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[g,h]=o.useState(i);deepEqual(g,i)||h(i);let[v,w]=o.useState(null),[y,b]=o.useState(null),_=o.useCallback(e=>{e!=A.current&&(A.current=e,w(e))},[w]),x=o.useCallback(e=>{e!==C.current&&(C.current=e,b(e))},[b]),E=l||v,O=a||y,A=o.useRef(null),C=o.useRef(null),P=o.useRef(f),R=useLatestRef(u),S=useLatestRef(r),$=o.useCallback(()=>{if(!A.current||!C.current)return;let e={placement:t,strategy:n,middleware:g};S.current&&(e.platform=S.current),floating_ui_dom_computePosition(A.current,C.current,e).then(e=>{let t={...e,isPositioned:!0};L.current&&!deepEqual(P.current,t)&&(P.current=t,p.flushSync(()=>{d(t)}))})},[g,t,n,S]);m(()=>{!1===c&&P.current.isPositioned&&(P.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[c]);let L=o.useRef(!1);m(()=>(L.current=!0,()=>{L.current=!1}),[]),m(()=>{if(E&&(A.current=E),O&&(C.current=O),E&&O){if(R.current)return R.current(E,O,$);$()}},[E,O,$,R]);let T=o.useMemo(()=>({reference:A,floating:C,setReference:_,setFloating:x}),[_,x]),D=o.useMemo(()=>({reference:E,floating:O}),[E,O]),W=o.useMemo(()=>{let e={position:n,left:0,top:0};if(!D.floating)return e;let t=roundByDPR(D.floating,f.x),i=roundByDPR(D.floating,f.y);return s?{...e,transform:"translate("+t+"px, "+i+"px)",...getDPR(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:i}},[n,s,D.floating,f.x,f.y]);return o.useMemo(()=>({...f,update:$,refs:T,elements:D,floatingStyles:W}),[f,$,T,D,W])}var h=n(9381);let v=(0,o.forwardRef)((e,t)=>{let{children:n,width:r=10,height:l=5,...a}=e;return(0,o.createElement)(h.WV.svg,(0,i.Z)({},a,{ref:t,width:r,height:l,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:(0,o.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var w=n(42210),y=n(56989),b=n(16459),_=n(51030),x=n(94977);let E="Popper",[O,A]=(0,y.b)(E),[C,P]=O(E),R=(0,o.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:r,...l}=e,a=P("PopperAnchor",n),s=(0,o.useRef)(null),u=(0,w.e)(t,s);return(0,o.useEffect)(()=>{a.onAnchorChange((null==r?void 0:r.current)||s.current)}),r?null:(0,o.createElement)(h.WV.div,(0,i.Z)({},l,{ref:u}))}),S="PopperContent",[$,L]=O(S),T=(0,o.forwardRef)((e,t)=>{var n,r,s,u,c,f,d,g,p,m,v,y,E,O;let{__scopePopper:A,side:C="bottom",sideOffset:R=0,align:L="center",alignOffset:T=0,arrowPadding:D=0,avoidCollisions:W=!0,collisionBoundary:N=[],collisionPadding:F=0,sticky:B="partial",hideWhenDetached:k=!1,updatePositionStrategy:H="optimized",onPlaced:M,...V}=e,z=P(S,A),[j,I]=(0,o.useState)(null),X=(0,w.e)(t,e=>I(e)),[K,U]=(0,o.useState)(null),q=(0,x.t)(K),Y=null!==(n=null==q?void 0:q.width)&&void 0!==n?n:0,Z=null!==(r=null==q?void 0:q.height)&&void 0!==r?r:0,G="number"==typeof F?F:{top:0,right:0,bottom:0,left:0,...F},J=Array.isArray(N)?N:[N],Q=J.length>0,ee={padding:G,boundary:J.filter($cf1ac5d9fe0e8206$var$isNotNull),altBoundary:Q},{refs:et,floatingStyles:en,placement:ei,isPositioned:eo,middlewareData:er}=useFloating({strategy:"fixed",placement:C+("center"!==L?"-"+L:""),whileElementsMounted:(...e)=>{let t=autoUpdate(...e,{animationFrame:"always"===H});return t},elements:{reference:z.anchor},middleware:[{name:"offset",options:p={mainAxis:R+Z,alignmentAxis:T},async fn(e){let{x:t,y:n}=e,i=await convertValueToCoords(e,p);return{x:t+i.x,y:n+i.y,data:i}}},W&&{name:"shift",options:v={mainAxis:!0,crossAxis:!1,limiter:"partial"===B?(void 0===m&&(m={}),{options:m,fn(e){let{x:t,y:n,placement:i,rects:o,middlewareData:r}=e,{offset:l=0,mainAxis:a=!0,crossAxis:s=!0}=floating_ui_utils_evaluate(m,e),u={x:t,y:n},c=floating_ui_utils_getSideAxis(i),f=getOppositeAxis(c),d=u[f],g=u[c],p=floating_ui_utils_evaluate(l,e),h="number"==typeof p?{mainAxis:p,crossAxis:0}:{mainAxis:0,crossAxis:0,...p};if(a){let e="y"===f?"height":"width",t=o.reference[f]-o.floating[e]+h.mainAxis,n=o.reference[f]+o.reference[e]-h.mainAxis;d<t?d=t:d>n&&(d=n)}if(s){var v,w;let e="y"===f?"width":"height",t=["top","left"].includes(floating_ui_utils_getSide(i)),n=o.reference[c]-o.floating[e]+(t&&(null==(v=r.offset)?void 0:v[c])||0)+(t?0:h.crossAxis),l=o.reference[c]+o.reference[e]+(t?0:(null==(w=r.offset)?void 0:w[c])||0)-(t?h.crossAxis:0);g<n?g=n:g>l&&(g=l)}return{[f]:d,[c]:g}}}):void 0,...ee},async fn(e){let{x:t,y:n,placement:i}=e,{mainAxis:o=!0,crossAxis:r=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...u}=floating_ui_utils_evaluate(v,e),c={x:t,y:n},f=await detectOverflow(e,u),d=floating_ui_utils_getSideAxis(floating_ui_utils_getSide(i)),g=getOppositeAxis(d),p=c[g],m=c[d];if(o){let e=p+f["y"===g?"top":"left"],t=p-f["y"===g?"bottom":"right"];p=a(e,l(p,t))}if(r){let e="y"===d?"top":"left",t="y"===d?"bottom":"right",n=m+f[e],i=m-f[t];m=a(n,l(m,i))}let h=s.fn({...e,[g]:p,[d]:m});return{...h,data:{x:h.x-t,y:h.y-n}}}},W&&{name:"flip",options:y={...ee},async fn(e){var t,n,i,o,r;let{placement:l,middlewareData:a,rects:s,initialPlacement:u,platform:c,elements:f}=e,{mainAxis:d=!0,crossAxis:g=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:v=!0,...w}=floating_ui_utils_evaluate(y,e);if(null!=(t=a.arrow)&&t.alignmentOffset)return{};let b=floating_ui_utils_getSide(l),_=floating_ui_utils_getSide(u)===u,x=await (null==c.isRTL?void 0:c.isRTL(f.floating)),E=p||(_||!v?[getOppositePlacement(u)]:getExpandedPlacements(u));p||"none"===h||E.push(...getOppositeAxisPlacements(u,v,h,x));let O=[u,...E],A=await detectOverflow(e,w),C=[],P=(null==(n=a.flip)?void 0:n.overflows)||[];if(d&&C.push(A[b]),g){let e=floating_ui_utils_getAlignmentSides(l,s,x);C.push(A[e[0]],A[e[1]])}if(P=[...P,{placement:l,overflows:C}],!C.every(e=>e<=0)){let e=((null==(i=a.flip)?void 0:i.index)||0)+1,t=O[e];if(t)return{data:{index:e,overflows:P},reset:{placement:t}};let n=null==(o=P.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!n)switch(m){case"bestFit":{let e=null==(r=P.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:r[0];e&&(n=e);break}case"initialPlacement":n=u}if(l!==n)return{reset:{placement:n}}}return{}}},{name:"size",options:E={...ee,apply:({elements:e,rects:t,availableWidth:n,availableHeight:i})=>{let{width:o,height:r}=t.reference,l=e.floating.style;l.setProperty("--radix-popper-available-width",`${n}px`),l.setProperty("--radix-popper-available-height",`${i}px`),l.setProperty("--radix-popper-anchor-width",`${o}px`),l.setProperty("--radix-popper-anchor-height",`${r}px`)}},async fn(e){let t,n;let{placement:i,rects:o,platform:r,elements:s}=e,{apply:u=()=>{},...c}=floating_ui_utils_evaluate(E,e),f=await detectOverflow(e,c),d=floating_ui_utils_getSide(i),g=floating_ui_utils_getAlignment(i),p="y"===floating_ui_utils_getSideAxis(i),{width:m,height:h}=o.floating;"top"===d||"bottom"===d?(t=d,n=g===(await (null==r.isRTL?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(n=d,t="end"===g?"top":"bottom");let v=h-f[t],w=m-f[n],y=!e.middlewareData.shift,b=v,_=w;if(p){let e=m-f.left-f.right;_=g||y?l(w,e):e}else{let e=h-f.top-f.bottom;b=g||y?l(v,e):e}if(y&&!g){let e=a(f.left,0),t=a(f.right,0),n=a(f.top,0),i=a(f.bottom,0);p?_=m-2*(0!==e||0!==t?e+t:a(f.left,f.right)):b=h-2*(0!==n||0!==i?n+i:a(f.top,f.bottom))}await u({...e,availableWidth:_,availableHeight:b});let x=await r.getDimensions(s.floating);return m!==x.width||h!==x.height?{reset:{rects:!0}}:{}}},K&&floating_ui_react_dom_arrow({element:K,padding:D}),$cf1ac5d9fe0e8206$var$transformOrigin({arrowWidth:Y,arrowHeight:Z}),k&&{name:"hide",options:O={strategy:"referenceHidden",...ee},async fn(e){let{rects:t}=e,{strategy:n="referenceHidden",...i}=floating_ui_utils_evaluate(O,e);switch(n){case"referenceHidden":{let n=await detectOverflow(e,{...i,elementContext:"reference"}),o=getSideOffsets(n,t.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:isAnySideFullyClipped(o)}}}case"escaped":{let n=await detectOverflow(e,{...i,altBoundary:!0}),o=getSideOffsets(n,t.floating);return{data:{escapedOffsets:o,escaped:isAnySideFullyClipped(o)}}}default:return{}}}}]}),[el,ea]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(ei),es=(0,b.W)(M);(0,_.b)(()=>{eo&&(null==es||es())},[eo,es]);let eu=null===(s=er.arrow)||void 0===s?void 0:s.x,ec=null===(u=er.arrow)||void 0===u?void 0:u.y,ef=(null===(c=er.arrow)||void 0===c?void 0:c.centerOffset)!==0,[ed,eg]=(0,o.useState)();return(0,_.b)(()=>{j&&eg(window.getComputedStyle(j).zIndex)},[j]),(0,o.createElement)("div",{ref:et.setFloating,"data-radix-popper-content-wrapper":"",style:{...en,transform:eo?en.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ed,"--radix-popper-transform-origin":[null===(f=er.transformOrigin)||void 0===f?void 0:f.x,null===(d=er.transformOrigin)||void 0===d?void 0:d.y].join(" ")},dir:e.dir},(0,o.createElement)($,{scope:A,placedSide:el,onArrowChange:U,arrowX:eu,arrowY:ec,shouldHideArrow:ef},(0,o.createElement)(h.WV.div,(0,i.Z)({"data-side":el,"data-align":ea},V,{ref:X,style:{...V.style,animation:eo?void 0:"none",opacity:null!==(g=er.hide)&&void 0!==g&&g.referenceHidden?0:void 0}}))))}),D={top:"bottom",right:"left",bottom:"top",left:"right"},W=(0,o.forwardRef)(function(e,t){let{__scopePopper:n,...r}=e,l=L("PopperArrow",n),a=D[l.placedSide];return(0,o.createElement)("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0}},(0,o.createElement)(v,(0,i.Z)({},r,{ref:t,style:{...r.style,display:"block"}})))});function $cf1ac5d9fe0e8206$var$isNotNull(e){return null!==e}let $cf1ac5d9fe0e8206$var$transformOrigin=e=>({name:"transformOrigin",options:e,fn(t){var n,i,o,r,l;let{placement:a,rects:s,middlewareData:u}=t,c=(null===(n=u.arrow)||void 0===n?void 0:n.centerOffset)!==0,f=c?0:e.arrowWidth,d=c?0:e.arrowHeight,[g,p]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(a),m={start:"0%",center:"50%",end:"100%"}[p],h=(null!==(i=null===(o=u.arrow)||void 0===o?void 0:o.x)&&void 0!==i?i:0)+f/2,v=(null!==(r=null===(l=u.arrow)||void 0===l?void 0:l.y)&&void 0!==r?r:0)+d/2,w="",y="";return"bottom"===g?(w=c?m:`${h}px`,y=`${-d}px`):"top"===g?(w=c?m:`${h}px`,y=`${s.floating.height+d}px`):"right"===g?(w=`${-d}px`,y=c?m:`${v}px`):"left"===g&&(w=`${s.floating.width+d}px`,y=c?m:`${v}px`),{data:{x:w,y:y}}}});function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(e){let[t,n="center"]=e.split("-");return[t,n]}let $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9=e=>{let{__scopePopper:t,children:n}=e,[i,r]=(0,o.useState)(null);return(0,o.createElement)(C,{scope:t,anchor:i,onAnchorChange:r},n)},N=R,F=T,B=W},52730:function(e,t,n){n.d(t,{h:function(){return a}});var i=n(13428),o=n(2265),r=n(54887),l=n(9381);let a=(0,o.forwardRef)((e,t)=>{var n;let{container:a=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...s}=e;return a?r.createPortal((0,o.createElement)(l.WV.div,(0,i.Z)({},s,{ref:t})),a):null})},94977:function(e,t,n){n.d(t,{t:function(){return $db6c3485150b8e66$export$1ab7ae714698c4b8}});var i=n(2265),o=n(51030);function $db6c3485150b8e66$export$1ab7ae714698c4b8(e){let[t,n]=(0,i.useState)(void 0);return(0,o.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let i,o;if(!Array.isArray(t)||!t.length)return;let r=t[0];if("borderBoxSize"in r){let e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;i=t.inlineSize,o=t.blockSize}else i=e.offsetWidth,o=e.offsetHeight;n({width:i,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}}}]);