<template>
	<view>
		<back :pageNameFlag="pageNameFlag" :showFlag="showFlag" :pageName='pageName' :errorMsg='errorMsg'></back>
		<view class="setNew-block">
			<view class="text-top">请设置新的手机号码</view>
			<view class="password-block">
				<input class="password-input" placeholder="请输入手机号" placeholder-class="password-placeholder-input"  :value='password' @input="setPassword" type="number" maxlength="11"/>
			</view>
			<view class="phone-block">
				<view class="vercode">
					<input class="vercode-input" placeholder="请输入验证码"  :value="vercode" placeholder-class="vercode-placeholder" type="number" @input="changeVercode" maxlength="6" confirm-type="done"/>
				</view>
				<view class="reset-block" @click="reset"  v-if="resetFlag==1">
					<image class="vercode-pic" src="../../static/pic/close.png"></image>
				</view>
				<button class="vercode-button" v-if="sendAgainFlag==0" @click="sendVercodeAgain">
					{{sendAgain}}
				</button>
				<view class="vercode-button-send" v-if="sendAgainFlag==1">
					{{sendAgain}}
				</view>
			</view>
			<button class="login-vercode"  v-if="doneFlag==0">
				<view class="text">更换</view>
			</button>
			<button class="login-vercode" :loading='loadingFlag' :disabled="disabledFlag" v-if="doneFlag==1" @click="complete">
				<view class="textHigh" >更换</view>
			</button>
		</view>
	</view>
</template>

<script>
	import back from '../../components/back.vue';
	export default {
		data() {
			return {
				pageNameFlag:1,
				showFlag:0,
				pageName:'账号绑定手机号更换',
				phoneNum:'',
				passwordFlag:true,
				againFlag:true,
				password:'',
				again:'',
				seeFlag:0,
				seeAgainFlag:0,
				loadingFlag:false,
				doneFlag:0,
				vercode:'',
				resetFlag:0,
				nextFlag:0,
				sendAgain:'发送验证码',
				sendAgainFlag:0,
				second:60,
				errorMsg:'',
				disabledFlag:false
			}
		},
		methods: {
			setPassword(e){
				var that = this;
				if(e.detail.value.length>0){
					that.seeFlag=1;
					that.password=e.detail.value;
					if(e.detail.value.length>10){
						that.doneFlag=1;
					}else{
						that.doneFlag=0;
					}
				}else{
					that.seeFlag=0;
					that.password='';
				}
			},
			sendVercodeAgain(){
				var that = this;
				if(that.second!=60){
					return;
				}
				that.sendAgainFlag=1
				if(that.password.length==11){
				uni.request({
				    url: that.serverUrl+'/user/authCode', 
					method:'POST',
				    data: {
				       phone:that.password,
					   devCode:that.cid(),
					   type:4
				    },
				    header: {
				        'content-type': 'application/x-www-form-urlencoded'
				    },
					sslVerify:false,
				    success: (res) => {
						if(res.data.resultCode=='10000'){
								that.second--;
								var intervalID =setInterval(function(){
									that.sendAgain ='重新发送('+that.second-- +"S)";
								},1000);
								setTimeout(function(){
									clearInterval(intervalID);
									that.sendAgain ="发送验证码";
									that.second=60;
									that.sendAgainFlag=0
								},61000)
						}else{
							that.errorMsg=that.showError(res.data.msgCode,res.data.msg);
							that.showFlag=1
							setTimeout(function() {
								that.errorMsg='';
								that.showFlag=0;
								that.sendAgainFlag=0
							}, 5000);
						}
				    },
					fail() {
						that.sendAgainFlag=0
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
				}else{
					that.errorMsg='请检查手机号';
					that.showFlag=1
					setTimeout(function() {
						that.errorMsg='';
						that.showFlag=0;
						that.sendAgainFlag=0
					}, 5000);
				}
			},
			reset(){
				this.vercode='';
				this.resetFlag=0;
				this.nextFlag=0
			},
			changeVercode(e){
				var that = this;
				if(e.detail.value.length>0){
					that.vercode=e.detail.value;
					that.resetFlag=1;
				}else{
					that.vercode='';
					that.resetFlag=0;
				}
				if(e.detail.value.length==6){
					that.nextFlag=1
				}else{
					that.nextFlag=0
				}
			},
			setAgain(e){
				var that = this;
				if(e.detail.value.length>0){
					that.seeAgainFlag=1;
					that.again=e.detail.value;
					if(e.detail.value.length>10&&that.password.length>10){
						that.doneFlag=1;
					}else{
						that.doneFlag=0;
					}
				}else{
					that.seeAgainFlag=0;
					that.again='';
				}
			},
			see(flag){
				this.passwordFlag=flag;
			},
			seeAgain(flag){
				this.againFlag=flag;
			},
			complete(){
				var that = this;
				that.disabledFlag=true;
				if(that.judgeLogin()){
					var password = that.password;
					var again = that.again;
					if(password.length>=10&&that.vercode!=''){
						uni.showLoading({
							title:'加载中',
							mask:true,
							success() {
								uni.request({
								    url: that.serverUrl+'/user/rebindPhone', 
									method:'POST',
								    data: {
									   userId:uni.getStorageSync('userInfo').userId,
								       phoneNew:that.password,
									   devCode:that.cid(),
									   code:that.vercode
								    },
								    header: {
								        'content-type': 'application/x-www-form-urlencoded'
								    },
									sslVerify:false,
								    success: (res) => {
										uni.hideLoading();
										if(res.data.resultCode=='10000'){
											uni.showToast({
											    title: '更换完成',
												icon:'success',
											    duration: 2000,
												mask:true
											});
											setTimeout(function () {
												uni.clearStorageSync();
												that.disabledFlag=false;
												uni.redirectTo({
													url:'../login/login'
												})
											},2000)
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
										uni.hideLoading();
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
										    },
										});
									}
								});
							}
						})
					}else{
						that.errorMsg='请检查输入';
						that.showFlag=1
						setTimeout(function() {
							that.errorMsg='';
							that.showFlag=0;
							that.disabledFlag=false;
						}, 5000);
					}
				}	
			}
		},
		onLoad(e) {
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("modifyUserPhoneNumSetPhoneNum.css");
</style>
