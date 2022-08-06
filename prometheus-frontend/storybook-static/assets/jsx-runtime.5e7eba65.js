import{g as A}from"./iframe.0e943ebf.js";function L(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var v={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),z=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),k=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,C={};function p(e,t,n){this.props=e,this.context=t,this.refs=C,this.updater=n||O}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function P(){}P.prototype=p.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=C,this.updater=n||O}var E=x.prototype=new P;E.constructor=x;g(E,p.prototype);E.isPureReactComponent=!0;var $=Array.isArray,I=Object.prototype.hasOwnProperty,b={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var r,o={},s=null,c=null;if(t!=null)for(r in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(s=""+t.key),t)I.call(t,r)&&!F.hasOwnProperty(r)&&(o[r]=t[r]);var f=arguments.length-2;if(f===1)o.children=n;else if(1<f){for(var i=Array(f),a=0;a<f;a++)i[a]=arguments[a+2];o.children=i}if(e&&e.defaultProps)for(r in f=e.defaultProps,f)o[r]===void 0&&(o[r]=f[r]);return{$$typeof:y,type:e,key:s,ref:c,props:o,_owner:b.current}}function G(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function j(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function K(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var w=/\/+/g;function R(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K(""+e.key):t.toString(36)}function _(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case y:case N:c=!0}}if(c)return c=e,o=o(c),e=r===""?"."+R(c,0):r,$(o)?(n="",e!=null&&(n=e.replace(w,"$&/")+"/"),_(o,t,n,"",function(a){return a})):o!=null&&(j(o)&&(o=G(o,n+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(w,"$&/")+"/")+e)),t.push(o)),1;if(c=0,r=r===""?".":r+":",$(e))for(var f=0;f<e.length;f++){s=e[f];var i=r+R(s,f);c+=_(s,t,n,i,o)}else if(i=Y(e),typeof i=="function")for(e=i.call(e),f=0;!(s=e.next()).done;)s=s.value,i=r+R(s,f++),c+=_(s,t,n,i,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function d(e,t,n){if(e==null)return e;var r=[],o=0;return _(e,r,"","",function(s){return t.call(n,s,o++)}),r}function Q(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},m={transition:null},X={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:m,ReactCurrentOwner:b};u.Children={map:d,forEach:function(e,t,n){d(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=p;u.Fragment=U;u.Profiler=q;u.PureComponent=x;u.StrictMode=V;u.Suspense=H;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X;u.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=g({},e.props),o=e.key,s=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,c=b.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(i in t)I.call(t,i)&&!F.hasOwnProperty(i)&&(r[i]=t[i]===void 0&&f!==void 0?f[i]:t[i])}var i=arguments.length-2;if(i===1)r.children=n;else if(1<i){f=Array(i);for(var a=0;a<i;a++)f[a]=arguments[a+2];r.children=f}return{$$typeof:y,type:e.type,key:o,ref:s,props:r,_owner:c}};u.createContext=function(e){return e={$$typeof:z,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:M,_context:e},e.Consumer=e};u.createElement=T;u.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:B,render:e}};u.isValidElement=j;u.lazy=function(e){return{$$typeof:J,_payload:{_status:-1,_result:e},_init:Q}};u.memo=function(e,t){return{$$typeof:W,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=m.transition;m.transition={};try{e()}finally{m.transition=t}};u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};u.useCallback=function(e,t){return l.current.useCallback(e,t)};u.useContext=function(e){return l.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return l.current.useDeferredValue(e)};u.useEffect=function(e,t){return l.current.useEffect(e,t)};u.useId=function(){return l.current.useId()};u.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};u.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return l.current.useMemo(e,t)};u.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};u.useRef=function(e){return l.current.useRef(e)};u.useState=function(e){return l.current.useState(e)};u.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};u.useTransition=function(){return l.current.useTransition()};u.version="18.2.0";(function(e){e.exports=u})(v);const Z=A(v.exports),ce=L({__proto__:null,default:Z},[v.exports]);var h={exports:{}},S={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee=v.exports,te=Symbol.for("react.element"),re=Symbol.for("react.fragment"),ne=Object.prototype.hasOwnProperty,oe=ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ue={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,n){var r,o={},s=null,c=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)ne.call(t,r)&&!ue.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:te,type:e,key:s,ref:c,props:o,_owner:oe.current}}S.Fragment=re;S.jsx=D;S.jsxs=D;(function(e){e.exports=S})(h);const ie=h.exports.Fragment,fe=h.exports.jsx,le=h.exports.jsxs;export{ie as F,Z as R,ce as a,le as b,fe as j,v as r};
//# sourceMappingURL=jsx-runtime.5e7eba65.js.map
