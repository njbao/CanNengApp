<template>
	<view class="body">
		<back :errorMsg="errorMsg" :showFlag="showFlag" :backShowFlag="backShowFlag"></back>
		<view class="content-block">
			<view class="login-explain">欢迎登录灿能云</view>
			<view class="login-detail">
				<view class="login-agreement">登录注册即表示同意</view>
				<view class="login-user" @click="jumpToUserAgreement">用户协议、</view>
				<view class="login-user" @click="jumpToPrivacyAgreement">隐私协议</view>
			</view>
			
			<view class="phone-block">
				<view class="num">+86</view>
				<image class="pull" src="../../static/pic/pull.png"></image>
				<view class="phone">
					<input class="phone-input" placeholder="输入手机号" placeholder-class="phone-placeholder" type="number" @input="changeClass" maxlength="11" confirm-type="done" :value='phoneNum'/>
				</view>
				<view class="reset-block" @click="resetPhoneNum"  v-if="resetFlag==1">
					<image class="phone-pic" src="../../static/pic/close.png"></image>
				</view>
			</view>
			<view class="password-block" v-if="loginType==1">
				<input type="text" :password="passwordFlag" placeholder="请输入密码" confirm-type="done" placeholder-class="password-placeholder" class="phone-input" @input="changePasswordClass" :value="password" maxlength="18"/>
				<view class="see-block" v-if="seeFlag==1">
					<view class="reset-block" @click="reset">
						<image src="../../static/pic/close.png" class="close" ></image>
					</view>
					<view class="line"></view>
					<view class="reset-block" @click="see(false)" v-if="passwordFlag">
						<image src="../../static/pic/see.png" class="see"></image>
					</view>
					<view class="reset-block" @click="see(true)" v-else>
						<image src="../../static/pic/see_close.png" class="see"></image>
					</view>
				</view>
			</view>
			<view class="rememberMe-block" @click="changeRememberFlag" v-if="loginType==1">
				<image src="../../static/pic/choose.png" class="rememberMe-pic" v-if="rememberFlag==1"></image>
				<image src="../../static/pic/nochoose.png" class="rememberMe-pic" v-else></image>
				<view class="rememberMe-text">
					记住密码
				</view>
			</view>
			<button class="login-vercode" :loading='loadingFlag' v-if="vercodeFlag==0&&loginType==0">
				<view class="text">获取验证码</view>
			</button>
			<button class="login-vercode" :loading='loadingFlag'  v-if="vercodeFlag==1&&loginType==0" @click="getVercode" :disabled="disabledFlag">
				<view class="textHigh" >获取验证码</view>
			</button>
			<button class="login-vercode" :loading='loadingFlag' v-if="vercodeFlag==0&&loginType==1">
				<view class="text">登录</view>
			</button>
			<button class="login-vercode" :loading='loadingFlag'  v-if="vercodeFlag==1&&loginType==1" @click="loginIn(phoneNum,password)" :disabled="disabledFlag">
				<view class="textHigh">登录</view>
			</button>
			<view class="login-other" v-if="loginType==0">
				<view class="login-account" @click="changeLoginType(1)">用账号密码登录</view>
				<view class="login-fast" @click="jumpToFastlogin">快速注册</view>
			</view>
			<view class="login-other" v-if="loginType==1">
				<view class="login-account" @click="changeLoginType(0)">短信验证码登录</view>
				<view class="login-right">
					<view class="login-fast" @click="jumpToForgetPassword">忘记密码</view>
					<view class="login-line"></view>
					<view class="login-fast"  @click="jumpToFastlogin">快速注册</view>
				</view>
				
			</view>
			<view class="introduce-block">
					—— 寻电能质量之因，解电能质量之惑，治电能质量之本 ——
			</view>
		</view>
		
	</view>
</template>

<script>
	import back from "../../components/back.vue";
	export default {
		data() {
			return {
				vercodeFlag:0,
				loadingFlag:false,
				phoneNum:'',
				errorMsg:'',
				showFlag:0,
				loginType:1 ,//0-验证码登录 1-账号密码
				password:'',
				passwordFlag:true,
				seeFlag:0,
				resetFlag:0,
				backShowFlag:0,
				rememberFlag:1,
				disabledFlag:false
			}
		},
		methods: {
			changeRememberFlag(){
				var that = this;
				if(that.rememberFlag==0){
					that.rememberFlag=1;
				}else{
					that.rememberFlag=0
				}
			},
			changeClass(e){
				var that = this;
				var length = e.detail.value.length;
				var loginType =that.loginType;
				if(length>0){
					that.resetFlag=1
					that.phoneNum=e.detail.value;
				}else{
					that.resetFlag=0;
					that.phoneNum='';
				}
				if(length>=10){
					if(loginType==0){
						that.vercodeFlag=1;
					}else{
						if(that.password!=null&&that.password!=''){
							that.vercodeFlag=1;
						}
					}
				}else{
					that.vercodeFlag=0;
				}
			},
			resetPhoneNum(){
				this.phoneNum="";
				this.resetFlag=0;
				this.vercodeFlag=0;
			},
			changePasswordClass(e){
				var that = this;
				var length = e.detail.value.length;
				var phoneNum =that.phoneNum;
				if(length>0){
					that.password=e.detail.value;
					that.seeFlag=1;
					if(phoneNum!=null&&phoneNum!=''){
						that.vercodeFlag=1;
					}
				}else{
					that.vercodeFlag=0;
					that.password='';
					that.seeFlag=0;
				}
			},
			reset(){
				this.password='';
				this.passwordFlag=true;
				this.seeFlag=0;
				this.vercodeFlag=0;
			},
			see(flag){
				this.passwordFlag=flag;
			},
			getVercode(){
				var that = this;
				that.disabledFlag=true;
				that.loadingFlag=true;
				if(that.phoneNum.length!=11){
					that.showFlag=1;
					that.errorMsg='请检查号码';
					that.loadingFlag=false;
					setTimeout(function() {
						that.errorMsg='';
						that.showFlag=0;
						that.disabledFlag=false;
					}, 5000);
					return;
				}
				uni.request({
					url: that.serverUrl+'/user/authCode', 
					method:'POST',
					data: {
					   phone:that.phoneNum,
					   devCode:that.cid(),
					   type:0
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					sslVerify:false,
					success: (res) => {
						that.loadingFlag=false;
						if(res.data.resultCode=='10000'){
							that.disabledFlag=false;
							uni.navigateTo({
								url:'../vercode/vercode?phoneNum='+that.phoneNum,
							})
						}else{
							that.errorMsg=that.showError(res.data.msgCode,res.data.msg);
							that.showFlag=1
							setTimeout(function() {
								that.errorMsg='';
								that.showFlag=0;
								that.disabledFlag=false;
							}, 5000);
						}
					},
					fail:(re)=>{
						that.loadingFlag=false;
						that.disabledFlag=false;
						uni.showModal({
							title: '提示',
							content: '网络或服务器异常，请稍后再试',
							showCancel:false,
							success: function (res) {
								if (res.confirm) {
									console.log('用户点击确定');
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}
				});
			
			},
			loginIn(account,password){
				var that = this;
				that.loadingFlag=true;
				that.disabledFlag=true;
				if(account.length!=11){
					that.loadingFlag=false;
					that.showFlag=1;
					that.errorMsg='请检查号码';
					setTimeout(function() {
						that.errorMsg='';
						that.showFlag=0;
						that.disabledFlag=false;
					}, 5000);
					return;
				}
				uni.request({
				    url: that.serverUrl+'/user/login', 
					method:'POST',
				    data: {
				       phone:account,
					   devCode:that.cid(),
					   key:password.trim(),
					   type:1
				    },
				    header: {
				        'content-type': 'application/x-www-form-urlencoded'
				    },
					sslVerify:false,
				    success: (res) => {
						that.loadingFlag=false;
						if(res.data.resultCode=='10000'){
							if(that.rememberFlag==1&&that.phoneNum!=null&&that.phoneNum!=undefined&&that.phoneNum!=''&&that.password!=null&&that.password!=undefined&&that.password!=''){
								uni.setStorageSync("account",that.phoneNum);
								uni.setStorageSync("password",that.password);
							}
							uni.setStorageSync('loginType',1);
							uni.setStorageSync("loginTime",new Date())
							var userInfo = eval(res.data.data);
							userInfo.phoneNum=that.phoneNum;
							uni.setStorageSync('userInfo',userInfo);
							that.disabledFlag=false;
							// console.log(userInfo.userId)
							uni.switchTab({
								url:'../information/information',
							})
						}else{
							var msg = '';
							if(res.data.msg==undefined||res.data.msg==null||res.data.msg==''){
								msg = '服务器或网络异常'
							}else{
								msg = res.data.msg
							}
							that.errorMsg=that.showError(res.data.msgCode,msg);
							that.showFlag = 1
							setTimeout(function() {
								that.errorMsg='';
								that.showFlag=0;
								that.disabledFlag=false;
							}, 5000);
						}
				    },
					fail:(re)=>{
						that.disabledFlag=false;
						that.loadingFlag=false;
						uni.showModal({
						    title: '提示',
						    content: '服务器或网络异常',
							showCancel:false,
						    success: function (res) {
						        if (res.confirm) {
						            console.log('用户点击确定');
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
					}
				});
			},
			changeLoginType(type){
				var that = this;
				that.loginType=type;
				that.loadingFlag=false;
				that.errorMsg='';
				that.showFlag=0;
				that.password='';
				that.passwordFlag=false;
				that.seeFlag=0;
				that.vercodeFlag=0
				if(type==0&&that.phoneNum.length>=10){
					that.vercodeFlag=1
				}
			},
			jumpToForgetPassword(){
				uni.navigateTo({
					url:'../forgetPassword/forgetPassword',
				})
			},
			jumpToFastlogin(){
				uni.navigateTo({
					url: '../fastLogin/fastLogin',
				});
			},
			jumpToUserAgreement(){
				uni.navigateTo({
					url: '../userAgreement/userAgreement',
				});
			},
			jumpToPrivacyAgreement(){
				uni.navigateTo({
					url: '../privacyAgreement/privacyAgreement',
				});
			}
		},
		onLoad() {
			var that=this;
			// var style = plus.navigator.getUiStyle();
			// console.log(style)
			// if('dark'==style){  
			//   console.log('当前为暗黑模式');  
			// }else{  
			//   console.log('当前为普通模式');  
			// }  
			that.getCid();
			var cid = that.cid();
			if(cid){
				var loginTime = uni.getStorageSync("loginTime");
				if(loginTime){
					if((new Date()-loginTime)/(1000*24*60*60)>30||(new Date()-loginTime)<0){
						uni.removeStorageSync("account");
						uni.removeStorageSync("password");
					}else{
						if(uni.getStorageSync("loginType")==1){
							var account = uni.getStorageSync("account");
							var password = uni.getStorageSync("password");
							if(account!=null&&account!=undefined&&account!=''&&password!=null&&password!=undefined&&password!=''){
								that.phoneNum=account;
								that.password=password;
								that.vercodeFlag=1;
								that.resetFlag=1;
								that.seeFlag=1;
								that.passwordFlag=1;
								that.loginIn(account,password)
							}
						}else{
							if(uni.getStorageSync("userInfo")){
								uni.switchTab({
									url:'../information/information'
								})
							}
						}
					}
				}
			}else{
				setTimeout(function(){
				var loginTime = uni.getStorageSync("loginTime");
				if(loginTime){
					if((new Date()-loginTime)/(1000*24*60*60)>30||(new Date()-loginTime)<0){
						uni.removeStorageSync("account");
						uni.removeStorageSync("password");
					}else{
						var account = uni.getStorageSync("account");
						var password = uni.getStorageSync("password");
						if(account!=null&&account!=undefined&&account!=''&&password!=null&&password!=undefined&&password!=''){
							that.phoneNum=account;
							that.password=password;
							that.vercodeFlag=1;
							that.resetFlag=1;
							that.seeFlag=1;
							that.passwordFlag=1;
							that.loginIn(account,password)
						}
					}
				}
			},2000)
			}
		},
		components: {
			back
		}
	}
</script>

<style>
@import url("login.css");
</style>
