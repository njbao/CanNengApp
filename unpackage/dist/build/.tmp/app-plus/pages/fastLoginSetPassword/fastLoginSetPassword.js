(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fastLoginSetPassword/fastLoginSetPassword"],{"0f33":function(e,a,t){"use strict";(function(e,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=function(){return t.e("components/back").then(t.bind(null,"1898"))},o={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"手机快速注册",phoneNum:"",passwordFlag:!0,againFlag:!0,password:"",again:"",seeFlag:0,seeAgainFlag:0,loadingFlag:!1,doneFlag:0,errorMsg:"",disabledFlag:!1}},methods:{setPassword:function(e){var a=this;e.detail.value.length>0?(a.seeFlag=1,a.password=e.detail.value.trim(),e.detail.value.trim().length>=6&&a.again.trim().length>=6?a.doneFlag=1:a.doneFlag=0):(a.seeFlag=0,a.password="")},setAgain:function(e){var a=this;e.detail.value.length>0?(a.seeAgainFlag=1,a.again=e.detail.value.trim(),e.detail.value.trim().length>=6&&a.password.trim().length>=6?a.doneFlag=1:a.doneFlag=0):(a.seeAgainFlag=0,a.again="")},see:function(e){this.passwordFlag=e},seeAgain:function(e){this.againFlag=e},complete:function(){var a=this,t=a.password,s=a.again;a.disabledFlag=!0,t.trim().length>=6&&s.trim().length>=6&&t.trim()==s.trim()?e.showLoading({title:"加载中",mask:!0,success:function(){e.request({url:a.serverUrl+"/user/setPsd",method:"POST",data:{userId:e.getStorageSync("userInfo").userId,devCode:a.cid(),password:t.trim()},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){e.hideLoading(),"10000"==t.data.resultCode?(e.showToast({title:"设置成功",icon:"success",duration:2e3,mask:!0}),setTimeout(function(){a.disabledFlag=!1,e.switchTab({url:"../information/information"})},2e3)):(a.errorMsg=a.showError(t.data.msgCode,t.data.msg),a.showFlag=1,setTimeout(function(){a.errorMsg="",a.showFlag=0,a.disabledFlag=!1},5e3))},fail:function(t){e.hideLoading(),a.disabledFlag=!1,e.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",success:function(e){e.confirm?n("log","用户点击确定"," at pages\\fastLoginSetPassword\\fastLoginSetPassword.vue:155"):e.cancel&&n("log","用户点击取消"," at pages\\fastLoginSetPassword\\fastLoginSetPassword.vue:157")}})}})}}):(a.disabledFlag=!1,e.showModal({title:"设置密码失败",content:"两次输入的密码不相同，请重新输入",showCancel:!1,success:function(e){e.confirm?n("log","用户点击确定"," at pages\\fastLoginSetPassword\\fastLoginSetPassword.vue:174"):e.cancel&&n("log","用户点击取消"," at pages\\fastLoginSetPassword\\fastLoginSetPassword.vue:176")}}))}},onLoad:function(e){this.phoneNum=e.phoneNum},components:{back:s}};a.default=o}).call(this,t("6e42")["default"],t("0de9")["default"])},"150e":function(e,a,t){"use strict";var n,s=function(){var e=this,a=e.$createElement;e._self._c},o=[];t.d(a,"b",function(){return s}),t.d(a,"c",function(){return o}),t.d(a,"a",function(){return n})},"80b7":function(e,a,t){},"9bee":function(e,a,t){"use strict";var n=t("80b7"),s=t.n(n);s.a},a6e42:function(e,a,t){"use strict";(function(e){t("986c"),t("921b");n(t("66fd"));var a=n(t("a78f"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},a78f:function(e,a,t){"use strict";t.r(a);var n=t("150e"),s=t("d576");for(var o in s)"default"!==o&&function(e){t.d(a,e,function(){return s[e]})}(o);t("9bee");var i,r=t("f0c5"),l=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);a["default"]=l.exports},d576:function(e,a,t){"use strict";t.r(a);var n=t("0f33"),s=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);a["default"]=s.a}},[["a6e42","common/runtime","common/vendor"]]]);