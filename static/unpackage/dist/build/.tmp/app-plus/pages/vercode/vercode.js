(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vercode/vercode"],{"8b47":function(e,t,n){},c2b0:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},d1e7:function(e,t,n){"use strict";n.r(t);var o=n("d9cf"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},d9cf:function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},keyboard=function(){return __webpack_require__.e("components/keyboard").then(__webpack_require__.bind(null,"875f"))},_default={data:function(){return{phoneNum:"",errorMsg:"",showFlag:0,valueList:[],vercode:"重新获取",second:60}},methods:{bindKeyEvent:function bindKeyEvent(val){var that=this;that.valueList=val,6==that.valueList.length&&uni.request({url:"https://pqmcc.com:8040/shiningCloud/user/login",method:"POST",data:{phone:that.phoneNum,devCode:that.cid(),key:that.valueList.join(""),type:0},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if("10000"==res.data.resultCode){var userInfo=eval(res.data.data);userInfo.phoneNum=that.phoneNum,uni.setStorageSync("userInfo",userInfo),uni.switchTab({url:"../information/information"})}else that.errorMsg=that.showError(res.data.msgCode,res.data.msg),that.showFlag=1,setTimeout(function(){that.errorMsg="",that.showFlag=0},5e3)},fail:function(e){uni.showModal({title:"提示",content:"网络异常，请检查网络后重试",success:function(e){e.confirm?console.log(__f__("用户点击确定"," at pages\\vercode\\vercode.vue:105")):e.cancel&&console.log(__f__("用户点击取消"," at pages\\vercode\\vercode.vue:107"))}})}})},getVerCode:function(e){var t=this;uni.request({url:"https://pqmcc.com:8040/shiningCloud/user/authCode",method:"POST",data:{phone:t.phoneNum,devCode:t.cid(),type:0},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(e){t.loadingFlag=!0,"10000"==e.data.resultCode||(t.errorMsg=t.showError(e.data.msgCode,e.data.msg),t.showFlag=1,setTimeout(function(){t.errorMsg="",t.showFlag=0},5e3))},fail:function(e){uni.showModal({title:"提示",content:"网络异常，请检查网络后重试",success:function(e){e.confirm?console.log(__f__("用户点击确定"," at pages\\vercode\\vercode.vue:148")):e.cancel&&console.log(__f__("用户点击取消"," at pages\\vercode\\vercode.vue:150"))}})}}),this.readSecond()},readSecond:function(){var e=this;if(60==e.second){e.second--;var t=setInterval(function(){e.vercode="重新获取("+e.second--+")"},1e3);setTimeout(function(){clearInterval(t),e.vercode="重新获取",e.second=60},61e3)}}},onLoad:function(e){this.phoneNum=e.phoneNum,this.readSecond()},components:{back:back,keyboard:keyboard}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},e01c:function(e,t,n){"use strict";var o=n("8b47"),r=n.n(o);r.a},e96c:function(e,t,n){"use strict";n.r(t);var o=n("c2b0"),r=n("d1e7");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("e01c");var c=n("2877"),u=Object(c["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},f6ad:function(e,t,n){"use strict";(function(e){n("986c"),n("921b");o(n("66fd"));var t=o(n("e96c"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["f6ad","common/runtime","common/vendor"]]]);