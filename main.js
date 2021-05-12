import Vue from 'vue'
import App from './App'
import encrypt from 'static/js/aes.js';
import errorMsg from 'static/js/errorMsg.js'

Vue.config.productionTip = false
// 挂载 全局变量
Vue.prototype.devCode = "2aaecd0b124df819eda75e639a1f91fd";
// Vue.prototype.serverUrl = "https://pqmcc.com:8040/shiningCloud";
// Vue.prototype.serverUrl = "http://112.4.156.196:8040/shiningCloud";
Vue.prototype.serverUrl = "http://pqmcc.com:8040/shiningCloud";
Vue.prototype.key = "f81804778c89c779";
Vue.prototype.getCid=function(){
				var that = this 
				// #ifdef APP-PLUS
				var cid = plus.push.getClientInfo().clientid;
				if(cid!=null&&cid!='null'&&cid!=''&&cid!=undefined){
					uni.setStorageSync('cid',cid);
					console.log('setCid:'+cid);
					var cidAES = encrypt.Encrypt(cid,'f81804778c89c779');
					uni.setStorageSync('cidAES',cidAES);
					console.log('cidAES:'+cidAES);
				}else{
					setTimeout(function() {
						that.getCid();
					}, 50);
				}
				// #endif
			}
Vue.prototype.setBadge = function(num){
	plus.runtime.setBadgeNumber(num);
	// if(plus.device.vendor=='Apple'){
	//    var GeTuiSdk = plus.ios.importClass('GeTuiSdk');
	//    GeTuiSdk.setBadge(num);
	// }
}
Vue.prototype.setNum=function(num,title,content){
	// #ifdef APP-PLUS
	// console.log(num)
	plus.runtime.setBadgeNumber(num,{
		title:title,
		content:content
	});
	// setTimeout(function(){
	// 	plus.runtime.setBadgeNumber(0,{
	// 		title:title,
	// 		content:content
	// 	});
	// },2000)
	// #endif
}
Vue.prototype.createMessage=function(title,payload,content){
	// console.log(payload)
	plus.push.createMessage(content,payload,{
		cover:false,
		title:title
	});
}
Vue.prototype.cid = function(){
	var that= this;
	var cidAES = uni.getStorageSync('cidAES');
	// var cid = uni.getStorageSync('cid');
	if(!(cidAES!=null&&cidAES!='null'&&cidAES!=''&&cidAES!=undefined)){
		setTimeout(function() {
			return that.cid();
		}, 500);
	}else{
		return cidAES;
	}
}
Vue.prototype.judgeLogin = function(){
	var that= this;
	if((!uni.getStorageSync('userInfo').userId)||(!uni.getStorageSync('userInfo').phone)){
		uni.showModal({
			title:"登录出现异常",
			content:"请重新登录",
			success: function (res) {
				if (res.confirm) {
					uni.clearStorageSync();
					uni.redirectTo({
						url: '/pages/login/login'
					});
					return false;
				} else if (res.cancel) {
					return false;
				}
			}
		})
	}else{
		return true;
	}
}
Vue.prototype.showError= function(msgCode,msg){
	return errorMsg.judgeError(msgCode,msg);
} 

Vue.prototype.formatTime_mills=function(day) {
 var d = new Date(day);
 var year = d.getFullYear();
 var month = (d.getMonth() + 1)<10?"0"+(d.getMonth() + 1):(d.getMonth() + 1);
 var date = d.getDate()<10?"0"+d.getDate():d.getDate();
 var hour = d.getHours()<10?"0"+d.getHours():d.getHours();
 var minute = d.getMinutes()<10?"0"+d.getMinutes():d.getMinutes();
 var second = d.getSeconds()<10?"0"+d.getSeconds():d.getSeconds();
 var mills = d.getMilliseconds()<10?"00"+d.getMilliseconds():(d.getMilliseconds()<100?"0"+d.getMilliseconds():d.getMilliseconds());
  return year + "-" + month + "-" + date + " " + hour+ ":" + minute + ":" + second+"."+mills;
}
Vue.prototype.formatTime_second=function(day) {
 var d = new Date(day);
 var year = d.getFullYear();
 var month = (d.getMonth() + 1)<10?"0"+(d.getMonth() + 1):(d.getMonth() + 1);
 var date = d.getDate()<10?"0"+d.getDate():d.getDate();
 var hour = d.getHours()<10?"0"+d.getHours():d.getHours();
 var minute = d.getMinutes()<10?"0"+d.getMinutes():d.getMinutes();
 var second = d.getSeconds()<10?"0"+d.getSeconds():d.getSeconds();
  return year + "-" + month + "-" + date + " " + hour+ ":" + minute + ":" + second;
}
Vue.prototype.formatTime=function(day) {
 var d = new Date(day);
 var year = d.getFullYear();
 var month = (d.getMonth() + 1)<10?"0"+(d.getMonth() + 1):(d.getMonth() + 1);
 var date = d.getDate()<10?"0"+d.getDate():d.getDate();
 // var hour = d.getHours()<10?"0"+d.getHours():d.getHours();
 // var minute = d.getMinutes()<10?"0"+d.getMinutes():d.getMinutes();
 // var second = d.getSeconds()<10?"0"+d.getSeconds():d.getSeconds();
 // var mills = d.getMilliseconds();
  return year + "-" + month + "-" + date;
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
