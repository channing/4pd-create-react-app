/*! For license information please see content---docs-adding-a-stylesheetf-87-dcf.740dc436eee2a6232427.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return l}));n(58),n(31),n(22),n(23),n(59),n(231);var r=n(230);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u={id:"adding-a-stylesheet",title:"Adding a Stylesheet",sidebar_label:"Adding Stylesheets"},a=[{value:"Button.css",id:"buttoncss",children:[]},{value:"Button.js",id:"buttonjs",children:[]}],c={rightToc:a},i="wrapper";function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(i,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This project setup uses ",Object(r.b)("a",o({parentName:"p"},{href:"https://webpack.js.org/"}),"Webpack")," for handling all assets. Webpack offers a custom way of \u201cextending\u201d the concept of ",Object(r.b)("inlineCode",{parentName:"p"},"import")," beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to ",Object(r.b)("strong",{parentName:"p"},"import the CSS from the JavaScript file"),":"),Object(r.b)("h2",{id:"buttoncss"},Object(r.b)("inlineCode",{parentName:"h2"},"Button.css")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-css"}),".Button {\n  padding: 20px;\n}\n")),Object(r.b)("h2",{id:"buttonjs"},Object(r.b)("inlineCode",{parentName:"h2"},"Button.js")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport './Button.css'; // Tell Webpack that Button.js uses these styles\n\nclass Button extends Component {\n  render() {\n    // You can use them as regular CSS styles\n    return <div className=\"Button\" />;\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This is not required for React")," but many people find this feature convenient. You can read about the benefits of this approach ",Object(r.b)("a",o({parentName:"p"},{href:"https://medium.com/seek-blog/block-element-modifying-your-javascript-components-d7f99fcab52b"}),"here"),". However you should be aware that this makes your code less portable to other build tools and environments than Webpack."),Object(r.b)("p",null,"In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified ",Object(r.b)("inlineCode",{parentName:"p"},".css")," file in the build output."),Object(r.b)("p",null,"If you are concerned about using Webpack-specific semantics, you can put all your CSS right into ",Object(r.b)("inlineCode",{parentName:"p"},"src/index.css"),". It would still be imported from ",Object(r.b)("inlineCode",{parentName:"p"},"src/index.js"),", but you could always remove that import if you later migrate to a different build tool."))}l.isMDXComponent=!0},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r),u=o.a.createContext({}),a=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=a(e.components);return o.a.createElement(u.Provider,{value:t},e.children)};var i="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,c=e.parentName,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=a(n),f=r,p=s[c+"."+f]||s[f]||l[f]||u;return n?o.a.createElement(p,Object.assign({},{ref:t},i,{components:n})):o.a.createElement(p,Object.assign({},{ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,a=new Array(u);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[i]="string"==typeof e?e:r,a[1]=c;for(var f=2;f<u;f++)a[f]=n[f];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},231:function(e,t,n){"use strict";e.exports=n(232)},232:function(e,t,n){"use strict";var r=n(233),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function O(){}function S(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=j.prototype;var w=S.prototype=new O;w.constructor=S,r(w,j.prototype),w.isPureReactComponent=!0;var C={current:null},k={current:null},x=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,o={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:u,type:e,key:a,ref:c,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var N=/\/+/g,$=[];function R(e,t,n,r){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var i=!1;if(null===t)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case u:case a:i=!0}}if(i)return r(o,t,""===n?"."+B(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+B(c=t[l],l);i+=e(c,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(c=t.next()).done;)i+=e(c=c.value,s=n+B(c,l++),r,o);else if("object"===c)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return i}(e,"",t,n)}function B(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(N,"$&/")+"/"),A(e,M,t=R(t,u,r,o)),T(t)}function D(){var e=C.current;if(null===e)throw Error(h(321));return e}var U={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,I,t=R(null,null,t,n)),T(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return D().useCallback(e,t)},useContext:function(e,t){return D().useContext(e,t)},useEffect:function(e,t){return D().useEffect(e,t)},useImperativeHandle:function(e,t,n){return D().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return D().useLayoutEffect(e,t)},useMemo:function(e,t){return D().useMemo(e,t)},useReducer:function(e,t,n){return D().useReducer(e,t,n)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:c,Profiler:l,StrictMode:i,Suspense:y,createElement:E,cloneElement:function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),a=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)x.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:u,type:e.type,key:a,ref:c,props:o,_owner:i}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r}},F={default:U},L=F&&U||F;e.exports=L.default||L},233:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,i=a(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(i[s]=n[s]);if(r){c=r(n);for(var f=0;f<c.length;f++)u.call(n,c[f])&&(i[c[f]]=n[c[f]])}}return i}}}]);