(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0007":function(t,e,n){"use strict";n.r(e);var o=n("dcd9");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);var r,u,i,l,c=n("f0c5"),s=Object(c["a"])(o["default"],r,u,!1,null,null,null,!1,i,l);e["default"]=s.exports},"7b78":function(t,e,n){"use strict";(function(t,e,o){n("986c"),n("921b");var a=l(n("66fd")),r=l(n("0007")),u=l(n("1441")),i=l(n("d9f0"));function l(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}a.default.config.productionTip=!1,a.default.prototype.devCode="2aaecd0b124df819eda75e639a1f91fd",a.default.prototype.serverUrl="http://112.4.156.196:8040/shiningCloud",a.default.prototype.key="f81804778c89c779",a.default.prototype.getCid=function(){var n=this,o=plus.push.getClientInfo().clientid;if(null!=o&&"null"!=o&&""!=o&&void 0!=o){t.setStorageSync("cid",o),e("log","setCid:"+o," at main.js:20");var a=u.default.Encrypt(o,"f81804778c89c779");t.setStorageSync("cidAES",a),e("log","cidAES:"+a," at main.js:23")}else setTimeout(function(){n.getCid()},50)},a.default.prototype.setBadge=function(t){plus.runtime.setBadgeNumber(t)},a.default.prototype.setNum=function(t,e,n){plus.runtime.setBadgeNumber(t,{title:e,content:n})},a.default.prototype.createMessage=function(t,e,n){plus.push.createMessage(n,e,{cover:!1,title:t})},a.default.prototype.cid=function(){var e=this,n=t.getStorageSync("cidAES");if(null!=n&&"null"!=n&&""!=n&&void 0!=n)return n;setTimeout(function(){return e.cid()},500)},a.default.prototype.judgeLogin=function(){if(t.getStorageSync("userInfo").userId&&t.getStorageSync("userInfo").phone)return!0;t.showModal({title:"登录出现异常",content:"请重新登录",success:function(e){return e.confirm?(t.clearStorageSync(),t.redirectTo({url:"/pages/login/login"}),!1):!e.cancel&&void 0}})},a.default.prototype.showError=function(t,e){return i.default.judgeError(t,e)},a.default.prototype.formatTime_mills=function(t){var e=new Date(t),n=e.getFullYear(),o=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,a=e.getDate()<10?"0"+e.getDate():e.getDate(),r=e.getHours()<10?"0"+e.getHours():e.getHours(),u=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),i=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),l=e.getMilliseconds()<10?"00"+e.getMilliseconds():e.getMilliseconds()<100?"0"+e.getMilliseconds():e.getMilliseconds();return n+"-"+o+"-"+a+" "+r+":"+u+":"+i+"."+l},a.default.prototype.formatTime_second=function(t){var e=new Date(t),n=e.getFullYear(),o=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,a=e.getDate()<10?"0"+e.getDate():e.getDate(),r=e.getHours()<10?"0"+e.getHours():e.getHours(),u=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),i=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return n+"-"+o+"-"+a+" "+r+":"+u+":"+i},a.default.prototype.formatTime=function(t){var e=new Date(t),n=e.getFullYear(),o=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,a=e.getDate()<10?"0"+e.getDate():e.getDate();return n+"-"+o+"-"+a},r.default.mpType="app";var d=new a.default(c({},r.default));o(d).$mount()}).call(this,n("6e42")["default"],n("0de9")["default"],n("6e42")["createApp"])},b577:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){var e=this,n=function(e){if("string"==typeof e.payload){var n=JSON.parse(e.payload);n.transmissionContent?(t.$emit("tabNum",n.transmissionContent),t.removeStorageSync("tabNum"),t.setStorageSync("tabNum",n.transmissionContent)):(t.$emit("tabNum",e.payload),t.removeStorageSync("tabNum"),t.setStorageSync("tabNum",e.payload))}else e.payload.tabNum&&(t.$emit("tabNum",e.payload.tabNum),t.removeStorageSync("tabNum"),t.setStorageSync("tabNum",e.payload.tabNum));t.switchTab({url:"../information/information"})},o=function(t){if(t.payload&&t.payload.transmissionContent){var n=t.payload;n.local=1,e.createMessage(t.payload.title,JSON.stringify(n),t.payload.content)}else{n=JSON.parse(t.payload);if(n.local&&1==n.local)return;n.local=1,e.createMessage(t.title,JSON.stringify(n),t.content)}};plus.push.addEventListener("click",n),plus.push.addEventListener("receive",o)},onShow:function(){n("log","App Show"," at App.vue:56")},onHide:function(){this.setBadge(t.getStorageSync("allNum"))}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},dcd9:function(t,e,n){"use strict";n.r(e);var o=n("b577"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a}},[["7b78","common/runtime","common/vendor"]]]);