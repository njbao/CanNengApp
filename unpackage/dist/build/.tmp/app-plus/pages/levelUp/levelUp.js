(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/levelUp/levelUp"],{"017f":function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"角色升级",errorMsg:"",levelUpFlag:0,content:"",loadingFlag:!1,disabledFlag:!1}},methods:{levelUp:function levelUp(){var that=this;that.judgeLogin()&&(that.disabledFlag=!0,that.loadingFlag=!0,uni.request({url:that.serverUrl+"/user/roleUpdate",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,devCode:that.cid(),referralCode:that.content},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(that.loadingFlag=!1,that.disabledFlag=!1,"10000"==res.data.resultCode){var userInfo=uni.getStorageSync("userInfo"),info=eval(res.data.data);userInfo.roleName=info.roleName,userInfo.roleCode=info.roleCode,uni.setStorageSync("userInfo",userInfo),uni.showToast({icon:"success",title:"升级成功",duration:2e3,mask:!0}),setTimeout(function(){uni.switchTab({url:"../me/me"})},2e3)}else that.errorMsg=that.showError(res.data.msgCode,res.data.msg),that.showFlag=1,setTimeout(function(){that.errorMsg="",that.showFlag=0},5e3)},fail:function(e){that.loadingFlag=!1,that.disabledFlag=!1,uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\levelUp\\levelUp.vue:87"):e.cancel&&__f__("log","用户点击取消"," at pages\\levelUp\\levelUp.vue:89")}})}}))},inputText:function(e){var t=this;6==e.detail.value.length?t.levelUpFlag=1:t.levelUpFlag=0,t.content=e.detail.value}},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},"1b4b":function(e,t,a){"use strict";var n=a("4977"),o=a.n(n);o.a},"1b70":function(e,t,a){"use strict";a.r(t);var n=a("017f"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},4977:function(e,t,a){},9383:function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"b",function(){return o}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return n})},a8c6:function(e,t,a){"use strict";(function(e){a("986c"),a("921b");n(a("66fd"));var t=n(a("ce5c"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},ce5c:function(e,t,a){"use strict";a.r(t);var n=a("9383"),o=a("1b70");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("1b4b");var l,u=a("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);t["default"]=c.exports}},[["a8c6","common/runtime","common/vendor"]]]);