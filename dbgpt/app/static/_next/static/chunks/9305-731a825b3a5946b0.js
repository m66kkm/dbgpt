"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9305],{27496:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(87462),r=n(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"},l=n(84089),i=r.forwardRef(function(e,t){return r.createElement(l.Z,(0,o.Z)({},e,{ref:t,icon:a}))})},1375:function(e,t,n){async function o(e,t){let n;let o=e.getReader();for(;!(n=await o.read()).done;)t(n.value)}function r(){return{data:"",event:"",id:"",retry:void 0}}n.d(t,{a:function(){return l},L:function(){return c}});var a=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let l="text/event-stream",i="last-event-id";function c(e,t){var{signal:n,headers:c,onopen:d,onmessage:u,onclose:f,onerror:b,openWhenHidden:p,fetch:g}=t,m=a(t,["signal","headers","onopen","onmessage","onclose","onerror","openWhenHidden","fetch"]);return new Promise((t,a)=>{let h;let y=Object.assign({},c);function v(){h.abort(),document.hidden||S()}y.accept||(y.accept=l),p||document.addEventListener("visibilitychange",v);let $=1e3,O=0;function w(){document.removeEventListener("visibilitychange",v),window.clearTimeout(O),h.abort()}null==n||n.addEventListener("abort",()=>{w(),t()});let E=null!=g?g:window.fetch,C=null!=d?d:s;async function S(){var n,l;h=new AbortController;try{let n,a,c,s;let d=await E(e,Object.assign(Object.assign({},m),{headers:y,signal:h.signal}));await C(d),await o(d.body,(l=function(e,t,n){let o=r(),a=new TextDecoder;return function(l,i){if(0===l.length)null==n||n(o),o=r();else if(i>0){let n=a.decode(l.subarray(0,i)),r=i+(32===l[i+1]?2:1),c=a.decode(l.subarray(r));switch(n){case"data":o.data=o.data?o.data+"\n"+c:c;break;case"event":o.event=c;break;case"id":e(o.id=c);break;case"retry":let s=parseInt(c,10);isNaN(s)||t(o.retry=s)}}}}(e=>{e?y[i]=e:delete y[i]},e=>{$=e},u),s=!1,function(e){void 0===n?(n=e,a=0,c=-1):n=function(e,t){let n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}(n,e);let t=n.length,o=0;for(;a<t;){s&&(10===n[a]&&(o=++a),s=!1);let e=-1;for(;a<t&&-1===e;++a)switch(n[a]){case 58:-1===c&&(c=a-o);break;case 13:s=!0;case 10:e=a}if(-1===e)break;l(n.subarray(o,e),c),o=a,c=-1}o===t?n=void 0:0!==o&&(n=n.subarray(o),a-=o)})),null==f||f(),w(),t()}catch(e){if(!h.signal.aborted)try{let t=null!==(n=null==b?void 0:b(e))&&void 0!==n?n:$;window.clearTimeout(O),O=window.setTimeout(S,t)}catch(e){w(),a(e)}}}S()})}function s(e){let t=e.headers.get("content-type");if(!(null==t?void 0:t.startsWith(l)))throw Error(`Expected content-type to be ${l}, Actual: ${t}`)}},58299:function(e,t,n){n.d(t,{Z:function(){return U}});var o=n(67294),r=n(87462),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},l=n(84089),i=o.forwardRef(function(e,t){return o.createElement(l.Z,(0,r.Z)({},e,{ref:t,icon:a}))}),c=n(93967),s=n.n(c),d=n(82225),u=n(66367),f=n(58375),b=n(74902),p=n(75164),g=function(e){let t;let n=n=>()=>{t=null,e.apply(void 0,(0,b.Z)(n))},o=function(){if(null==t){for(var e=arguments.length,o=Array(e),r=0;r<e;r++)o[r]=arguments[r];t=(0,p.Z)(n(o))}};return o.cancel=()=>{p.Z.cancel(t),t=null},o},m=n(53124);let h=o.createContext(void 0),{Provider:y}=h;var v=n(98423),$=n(40411),O=n(83062),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"},E=o.forwardRef(function(e,t){return o.createElement(l.Z,(0,r.Z)({},e,{ref:t,icon:w}))}),C=(0,o.memo)(e=>{let{icon:t,description:n,prefixCls:r,className:a}=e,l=o.createElement("div",{className:`${r}-icon`},o.createElement(E,null));return o.createElement("div",{onClick:e.onClick,onFocus:e.onFocus,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,className:s()(a,`${r}-content`)},t||n?o.createElement(o.Fragment,null,t&&o.createElement("div",{className:`${r}-icon`},t),n&&o.createElement("div",{className:`${r}-description`},n)):l)}),S=n(39302),x=n(14747),k=n(16932),j=n(93590),B=n(91945),I=n(45503),P=e=>0===e?0:e-Math.sqrt(Math.pow(e,2)/2);let N=e=>{let{componentCls:t,floatButtonSize:n,motionDurationSlow:o,motionEaseInOutCirc:r}=e,a=`${t}-group`,l=new S.E4("antFloatButtonMoveDownIn",{"0%":{transform:`translate3d(0, ${(0,S.bf)(n)}, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),i=new S.E4("antFloatButtonMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(0, ${(0,S.bf)(n)}, 0)`,transformOrigin:"0 0",opacity:0}});return[{[`${a}-wrap`]:Object.assign({},(0,j.R)(`${a}-wrap`,l,i,o,!0))},{[`${a}-wrap`]:{[`
          &${a}-wrap-enter,
          &${a}-wrap-appear
        `]:{opacity:0,animationTimingFunction:r},[`&${a}-wrap-leave`]:{animationTimingFunction:r}}}]},z=e=>{let{antCls:t,componentCls:n,floatButtonSize:o,margin:r,borderRadiusLG:a,borderRadiusSM:l,badgeOffset:i,floatButtonBodyPadding:c,calc:s}=e,d=`${n}-group`;return{[d]:Object.assign(Object.assign({},(0,x.Wf)(e)),{zIndex:99,display:"block",border:"none",position:"fixed",width:o,height:"auto",boxShadow:"none",minHeight:o,insetInlineEnd:e.floatButtonInsetInlineEnd,insetBlockEnd:e.floatButtonInsetBlockEnd,borderRadius:a,[`${d}-wrap`]:{zIndex:-1,display:"block",position:"relative",marginBottom:r},[`&${d}-rtl`]:{direction:"rtl"},[n]:{position:"static"}}),[`${d}-circle`]:{[`${n}-circle:not(:last-child)`]:{marginBottom:e.margin,[`${n}-body`]:{width:o,height:o,borderRadius:"50%"}}},[`${d}-square`]:{[`${n}-square`]:{borderRadius:0,padding:0,"&:first-child":{borderStartStartRadius:a,borderStartEndRadius:a},"&:last-child":{borderEndStartRadius:a,borderEndEndRadius:a},"&:not(:last-child)":{borderBottom:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-badge`]:{[`${t}-badge-count`]:{top:s(s(c).add(i)).mul(-1).equal(),insetInlineEnd:s(s(c).add(i)).mul(-1).equal()}}},[`${d}-wrap`]:{display:"block",borderRadius:a,boxShadow:e.boxShadowSecondary,[`${n}-square`]:{boxShadow:"none",marginTop:0,borderRadius:0,padding:c,"&:first-child":{borderStartStartRadius:a,borderStartEndRadius:a},"&:last-child":{borderEndStartRadius:a,borderEndEndRadius:a},"&:not(:last-child)":{borderBottom:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${n}-body`]:{width:e.floatButtonBodySize,height:e.floatButtonBodySize}}}},[`${d}-circle-shadow`]:{boxShadow:"none"},[`${d}-square-shadow`]:{boxShadow:e.boxShadowSecondary,[`${n}-square`]:{boxShadow:"none",padding:c,[`${n}-body`]:{width:e.floatButtonBodySize,height:e.floatButtonBodySize,borderRadius:l}}}}},R=e=>{let{antCls:t,componentCls:n,floatButtonBodyPadding:o,floatButtonIconSize:r,floatButtonSize:a,borderRadiusLG:l,badgeOffset:i,dotOffsetInSquare:c,dotOffsetInCircle:s,calc:d}=e;return{[n]:Object.assign(Object.assign({},(0,x.Wf)(e)),{border:"none",position:"fixed",cursor:"pointer",zIndex:99,display:"block",width:a,height:a,insetInlineEnd:e.floatButtonInsetInlineEnd,insetBlockEnd:e.floatButtonInsetBlockEnd,boxShadow:e.boxShadowSecondary,"&-pure":{position:"relative",inset:"auto"},"&:empty":{display:"none"},[`${t}-badge`]:{width:"100%",height:"100%",[`${t}-badge-count`]:{transform:"translate(0, 0)",transformOrigin:"center",top:d(i).mul(-1).equal(),insetInlineEnd:d(i).mul(-1).equal()}},[`${n}-body`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",transition:`all ${e.motionDurationMid}`,[`${n}-content`]:{overflow:"hidden",textAlign:"center",minHeight:a,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:`${(0,S.bf)(d(o).div(2).equal())} ${(0,S.bf)(o)}`,[`${n}-icon`]:{textAlign:"center",margin:"auto",width:r,fontSize:r,lineHeight:1}}}}),[`${n}-rtl`]:{direction:"rtl"},[`${n}-circle`]:{height:a,borderRadius:"50%",[`${t}-badge`]:{[`${t}-badge-dot`]:{top:s,insetInlineEnd:s}},[`${n}-body`]:{borderRadius:"50%"}},[`${n}-square`]:{height:"auto",minHeight:a,borderRadius:l,[`${t}-badge`]:{[`${t}-badge-dot`]:{top:c,insetInlineEnd:c}},[`${n}-body`]:{height:"auto",borderRadius:l}},[`${n}-default`]:{backgroundColor:e.floatButtonBackgroundColor,transition:`background-color ${e.motionDurationMid}`,[`${n}-body`]:{backgroundColor:e.floatButtonBackgroundColor,transition:`background-color ${e.motionDurationMid}`,"&:hover":{backgroundColor:e.colorFillContent},[`${n}-content`]:{[`${n}-icon`]:{color:e.colorText},[`${n}-description`]:{display:"flex",alignItems:"center",lineHeight:(0,S.bf)(e.fontSizeLG),color:e.colorText,fontSize:e.fontSizeSM}}}},[`${n}-primary`]:{backgroundColor:e.colorPrimary,[`${n}-body`]:{backgroundColor:e.colorPrimary,transition:`background-color ${e.motionDurationMid}`,"&:hover":{backgroundColor:e.colorPrimaryHover},[`${n}-content`]:{[`${n}-icon`]:{color:e.colorTextLightSolid},[`${n}-description`]:{display:"flex",alignItems:"center",lineHeight:(0,S.bf)(e.fontSizeLG),color:e.colorTextLightSolid,fontSize:e.fontSizeSM}}}}}};var M=(0,B.I$)("FloatButton",e=>{let{colorTextLightSolid:t,colorBgElevated:n,controlHeightLG:o,marginXXL:r,marginLG:a,fontSize:l,fontSizeIcon:i,controlItemBgHover:c,paddingXXS:s,calc:d}=e,u=(0,I.TS)(e,{floatButtonBackgroundColor:n,floatButtonColor:t,floatButtonHoverBackgroundColor:c,floatButtonFontSize:l,floatButtonIconSize:d(i).mul(1.5).equal(),floatButtonSize:o,floatButtonInsetBlockEnd:r,floatButtonInsetInlineEnd:a,floatButtonBodySize:d(o).sub(d(s).mul(2)).equal(),floatButtonBodyPadding:s,badgeOffset:d(s).mul(1.5).equal()});return[z(u),R(u),(0,k.J$)(e),N(u)]},e=>({dotOffsetInCircle:P(e.controlHeightLG/2),dotOffsetInSquare:P(e.borderRadiusLG)})),T=n(35792),H=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let L="float-btn",Z=o.forwardRef((e,t)=>{let{prefixCls:n,className:r,rootClassName:a,type:l="default",shape:i="circle",icon:c,description:d,tooltip:u,badge:f={}}=e,b=H(e,["prefixCls","className","rootClassName","type","shape","icon","description","tooltip","badge"]),{getPrefixCls:p,direction:g}=(0,o.useContext)(m.E_),y=(0,o.useContext)(h),w=p(L,n),E=(0,T.Z)(w),[S,x,k]=M(w,E),j=s()(x,k,E,w,r,a,`${w}-${l}`,`${w}-${y||i}`,{[`${w}-rtl`]:"rtl"===g}),B=(0,o.useMemo)(()=>(0,v.Z)(f,["title","children","status","text"]),[f]),I=(0,o.useMemo)(()=>({prefixCls:w,description:d,icon:c,type:l}),[w,d,c,l]),P=o.createElement("div",{className:`${w}-body`},o.createElement(C,Object.assign({},I)));return"badge"in e&&(P=o.createElement($.Z,Object.assign({},B),P)),"tooltip"in e&&(P=o.createElement(O.Z,{title:u,placement:"rtl"===g?"right":"left"},P)),S(e.href?o.createElement("a",Object.assign({ref:t},b,{className:j}),P):o.createElement("button",Object.assign({ref:t},b,{className:j,type:"button"}),P))});var q=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let F=o.forwardRef((e,t)=>{let{prefixCls:n,className:r,type:a="default",shape:l="circle",visibilityHeight:c=400,icon:b=o.createElement(i,null),target:p,onClick:y,duration:v=450}=e,$=q(e,["prefixCls","className","type","shape","visibilityHeight","icon","target","onClick","duration"]),[O,w]=(0,o.useState)(0===c),E=o.useRef(null);o.useImperativeHandle(t,()=>({nativeElement:E.current}));let C=()=>E.current&&E.current.ownerDocument?E.current.ownerDocument:window,S=g(e=>{let t=(0,u.Z)(e.target,!0);w(t>=c)});(0,o.useEffect)(()=>{let e=p||C,t=e();return S({target:t}),null==t||t.addEventListener("scroll",S),()=>{S.cancel(),null==t||t.removeEventListener("scroll",S)}},[p]);let x=e=>{(0,f.Z)(0,{getContainer:p||C,duration:v}),null==y||y(e)},{getPrefixCls:k}=(0,o.useContext)(m.E_),j=k(L,n),B=k(),I=(0,o.useContext)(h),P=Object.assign({prefixCls:j,icon:b,type:a,shape:I||l},$);return o.createElement(d.ZP,{visible:O,motionName:`${B}-fade`},e=>{let{className:t}=e;return o.createElement(Z,Object.assign({ref:E},P,{onClick:x,className:s()(r,t)}))})});var D=n(97937),_=n(21770),W=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},A=(0,o.memo)(e=>{let{prefixCls:t,className:n,style:r,shape:a="circle",type:l="default",icon:i=o.createElement(E,null),closeIcon:c=o.createElement(D.Z,null),description:u,trigger:f,children:b,onOpenChange:p,open:g}=e,h=W(e,["prefixCls","className","style","shape","type","icon","closeIcon","description","trigger","children","onOpenChange","open"]),{direction:v,getPrefixCls:$}=(0,o.useContext)(m.E_),O=$(L,t),w=(0,T.Z)(O),[C,S,x]=M(O,w),k=`${O}-group`,j=s()(k,S,x,w,n,{[`${k}-rtl`]:"rtl"===v,[`${k}-${a}`]:a,[`${k}-${a}-shadow`]:!f}),B=s()(S,`${k}-wrap`),[I,P]=(0,_.Z)(!1,{value:g}),N=o.useRef(null),z=o.useRef(null),R=o.useMemo(()=>"hover"===f?{onMouseEnter(){P(!0),null==p||p(!0)},onMouseLeave(){P(!1),null==p||p(!1)}}:{},[f]),H=()=>{P(e=>(null==p||p(!e),!e))},q=(0,o.useCallback)(e=>{var t,n;if(null===(t=N.current)||void 0===t?void 0:t.contains(e.target)){(null===(n=z.current)||void 0===n?void 0:n.contains(e.target))&&H();return}P(!1),null==p||p(!1)},[f]);return(0,o.useEffect)(()=>{if("click"===f)return document.addEventListener("click",q),()=>{document.removeEventListener("click",q)}},[f]),C(o.createElement(y,{value:a},o.createElement("div",Object.assign({ref:N,className:j,style:r},R),f&&["click","hover"].includes(f)?o.createElement(o.Fragment,null,o.createElement(d.ZP,{visible:I,motionName:`${k}-wrap`},e=>{let{className:t}=e;return o.createElement("div",{className:s()(t,B)},b)}),o.createElement(Z,Object.assign({ref:z,type:l,shape:a,icon:I?c:i,description:u,"aria-label":e["aria-label"]},h))):b)))}),G=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let V=e=>{var{backTop:t}=e,n=G(e,["backTop"]);return t?o.createElement(F,Object.assign({},n,{visibilityHeight:0})):o.createElement(Z,Object.assign({},n))};Z.BackTop=F,Z.Group=A,Z._InternalPanelDoNotUseOrYouWillBeFired=e=>{var{className:t,items:n}=e,r=G(e,["className","items"]);let{prefixCls:a}=r,{getPrefixCls:l}=o.useContext(m.E_),i=l(L,a),c=`${i}-pure`;return n?o.createElement(A,Object.assign({className:s()(t,c)},r),n.map((e,t)=>o.createElement(V,Object.assign({key:t},e)))):o.createElement(V,Object.assign({className:s()(t,c)},r))};var U=Z},66309:function(e,t,n){n.d(t,{Z:function(){return B}});var o=n(67294),r=n(97937),a=n(93967),l=n.n(a),i=n(98787),c=n(69760),s=n(45353),d=n(53124),u=n(39302),f=n(10274),b=n(14747),p=n(45503),g=n(91945);let m=e=>{let{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:o,componentCls:r,calc:a}=e,l=a(o).sub(n).equal(),i=a(t).sub(n).equal();return{[r]:Object.assign(Object.assign({},(0,b.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,u.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:i,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},h=e=>{let{lineWidth:t,fontSizeIcon:n,calc:o}=e,r=e.fontSizeSM,a=(0,p.TS)(e,{tagFontSize:r,tagLineHeight:(0,u.bf)(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(n).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg});return a},y=e=>({defaultBg:new f.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var v=(0,g.I$)("Tag",e=>{let t=h(e);return m(t)},y),$=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let O=o.forwardRef((e,t)=>{let{prefixCls:n,style:r,className:a,checked:i,onChange:c,onClick:s}=e,u=$(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:f,tag:b}=o.useContext(d.E_),p=f("tag",n),[g,m,h]=v(p),y=l()(p,`${p}-checkable`,{[`${p}-checkable-checked`]:i},null==b?void 0:b.className,a,m,h);return g(o.createElement("span",Object.assign({},u,{ref:t,style:Object.assign(Object.assign({},r),null==b?void 0:b.style),className:y,onClick:e=>{null==c||c(!i),null==s||s(e)}})))});var w=n(98719);let E=e=>(0,w.Z)(e,(t,n)=>{let{textColor:o,lightBorderColor:r,lightColor:a,darkColor:l}=n;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:o,background:a,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var C=(0,g.bk)(["Tag","preset"],e=>{let t=h(e);return E(t)},y);let S=(e,t,n)=>{let o=function(e){if("string"!=typeof e)return e;let t=e.charAt(0).toUpperCase()+e.slice(1);return t}(n);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var x=(0,g.bk)(["Tag","status"],e=>{let t=h(e);return[S(t,"success","Success"),S(t,"processing","Info"),S(t,"error","Error"),S(t,"warning","Warning")]},y),k=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let j=o.forwardRef((e,t)=>{let{prefixCls:n,className:a,rootClassName:u,style:f,children:b,icon:p,color:g,onClose:m,closeIcon:h,closable:y,bordered:$=!0}=e,O=k(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:w,direction:E,tag:S}=o.useContext(d.E_),[j,B]=o.useState(!0);o.useEffect(()=>{"visible"in O&&B(O.visible)},[O.visible]);let I=(0,i.o2)(g),P=(0,i.yT)(g),N=I||P,z=Object.assign(Object.assign({backgroundColor:g&&!N?g:void 0},null==S?void 0:S.style),f),R=w("tag",n),[M,T,H]=v(R),L=l()(R,null==S?void 0:S.className,{[`${R}-${g}`]:N,[`${R}-has-color`]:g&&!N,[`${R}-hidden`]:!j,[`${R}-rtl`]:"rtl"===E,[`${R}-borderless`]:!$},a,u,T,H),Z=e=>{e.stopPropagation(),null==m||m(e),e.defaultPrevented||B(!1)},[,q]=(0,c.Z)(y,null!=h?h:null==S?void 0:S.closeIcon,e=>null===e?o.createElement(r.Z,{className:`${R}-close-icon`,onClick:Z}):o.createElement("span",{className:`${R}-close-icon`,onClick:Z},e),null,!1),F="function"==typeof O.onClick||b&&"a"===b.type,D=p||null,_=D?o.createElement(o.Fragment,null,D,b&&o.createElement("span",null,b)):b,W=o.createElement("span",Object.assign({},O,{ref:t,className:L,style:z}),_,q,I&&o.createElement(C,{key:"preset",prefixCls:R}),P&&o.createElement(x,{key:"status",prefixCls:R}));return M(F?o.createElement(s.Z,{component:"Tag"},W):W)});j.CheckableTag=O;var B=j}}]);