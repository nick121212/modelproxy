!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("URLSearchParams"),require("fetch"),require("modelproxy")):"function"==typeof define&&define.amd?define(["URLSearchParams","fetch","modelproxy"],t):"object"==typeof exports?exports.modelproxy=t(require("URLSearchParams"),require("fetch"),require("modelproxy")):e.modelproxy=t(e.URLSearchParams,e.fetch,e.modelproxy)}(window,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}},i=!0;try{e[r].call(o.exports,o,o.exports,n),i=!1}finally{i&&delete t[r]}return o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),u=n(1),c=n(0),s={Accept:"application/json","Content-Type":"application/json"},f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.init=function(){this.use(this.fetch.bind(this))},t.prototype.fetch=function(e,t){return o(this,void 0,void 0,function(){var n,r,o,f,l,p,d,h,y,b,m,v,x,w,_,O,g,j,P,S,q,k;return i(this,function(i){switch(i.label){case 0:switch(n=new c,r=new c,o=e.executeInfo,f=void 0===o?{}:o,l=e.instance,p=void 0===l?{}:l,h={"X-Requested-With":"XMLHttpRequest"},y=f.settings||{},b=y.timeout,m=void 0===b?5e3:b,v=y.headers,x=void 0===v?{}:v,w=y.type,_=void 0===w?"":w,O=y.fetch,g=void 0===O?{}:O,j=this.getFullPath(p,f),_){case"params":h=Object.assign({},s,h),d=r;break;case"formdata":d=n;break;default:h=Object.assign({},s,h),d=JSON.stringify(f.data||{})}for(P in h=Object.assign({},h||{},x),f.data)f.data.hasOwnProperty(P)&&(S=f.data[P],n.append(P,S),r.append(P,S));return q=u.bind(u,j,Object.assign({},{body:-1===["GET","OPTIONS","HEAD"].indexOf(p.method.toUpperCase())?d:null,credentials:"same-origin",headers:h,method:p.method},g)),k=e,[4,Promise.race([this.delay(m||5e3).then(function(){throw new Error("接口请求超时！("+m+")")}),a.cacheDec(q,e,j)])];case 1:return k.result=i.sent(),[4,t()];case 2:return i.sent(),[2]}})})},t}(a.DefaultEngine);t.FetchEngine=f}])});
//# sourceMappingURL=index.map