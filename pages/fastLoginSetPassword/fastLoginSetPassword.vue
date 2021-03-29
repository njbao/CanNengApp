<template>
	<view>
		<back :errorMsg="errorMsg" :pageNameFlag="pageNameFlag" :showFlag="showFlag" :pageName='pageName'></back>
		<view class="setNew-block">
			<view class="text-top">请设置登录密码</view>
			<view class="password-block">
				<input class="password-input" placeholder="请输入" placeholder-class="password-placeholder-input" :password="passwordFlag" :value='password' @input="setPassword" maxlength="18"/>
				<block v-if="seeFlag==1">
					<view class="see-block" @click="see(false)" v-if="passwordFlag">
						<image src="../../static/pic/see.png" class="see" ></image>
					</view>	
					<view class="see-block" @click="see(true)" v-else>
						<image src="../../static/pic/see_close.png" class="see"></image>
					</view>
				</block>
			</view>
			<view class="text-top">再次确认密码</view>
			<view class="password-block">
				<input class="password-input" placeholder="请确认输入" placeholder-class="password-placeholder-input" :password="againFlag" :value='again' @input="setAgain"/>
				<block v-if="seeAgainFlag==1">
					<view class="see-block" @click="seeAgain(false)"  v-if="againFlag">
						<image src="../../static/pic/see.png" class="see" ></image>
					</view>	
					<view class="see-block" @click="seeAgain(true)"  v-else>
						<image src="../../static/pic/see_close.png" class="see"></image>
					</view>
				</block>
			</view>
			<view class="text-bottom">
				说明：密码长度为6-18位。
			</view>
			<button class="login-vercode"  v-if="doneFlag==0">
				<view class="text">完成</view>
			</button>
			<button class="login-vercode" :loading='loadingFlag'  v-if="doneFlag==1" @click="complete" :disabled="disabledFlag">
				<view class="textHigh" >完成</view>
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
				pageName:'手机快速注册',
				phoneNum:'',
				passwordFlag:true,
				againFlag:true,
				password:'',
				again:'',
				seeFlag:0,
				seeAgainFlag:0,
				loadingFlag:false,
				doneFlag:0,
				errorMsg:'',
				disabledFlag:false
			}
		},
		methods: {
			setPassword(e){
				var that = this;
				if(e.detail.value.length>0){
					that.seeFlag=1;
					that.password=e.detail.value.trim();
					if(e.detail.value.trim().length>=6&&that.again.trim().length>=6){
						that.doneFlag=1;
					}else{
						that.doneFlag=0;
					}
				}else{
					that.seeFlag=0;
					that.password='';
				}
			},
			setAgain(e){
				var that = this;
				if(e.detail.value.length>0){
					that.seeAgainFlag=1;
					that.again=e.detail.value.trim();
					if(e.detail.value.trim().length>=6&&that.password.trim().length>=6){
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
				var password = that.password;
				var again = that.again;
				that.disabledFlag=true;
				if(password.trim().length>=6&&again.trim().length>=6&&password.trim()==again.trim()){
					uni.showLoading({
						title:'加载中',
						mask:true,
						success() {
							uni.request({
							    url: that.serverUrl+'/user/setPsd', 
								method:'POST',
							    data: {
							       userId:uni.getStorageSync('userInfo').userId,
								   devCode:that.cid(),
								   password:password.trim()
							    },
							    header: {
							        'content-type': 'application/x-www-form-urlencoded'
							    },
								sslVerify:false,
							    success: (res) => {
									uni.hideLoading();
									if(res.data.resultCode=='10000'){
											uni.showToast({
												title: '设置成功',
												icon:'success',
												duration: 2000,
												mask:true
											});
											setTimeout(function () {
												that.disabledFlag=false;
												uni.switchTab({
													url:'../information/information'
												})
											},2000);
									}else{
										that.errorMsg=that.showError(res.data.msgCode,res.data.msg);
										that.showFlag=1;
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
					that.disabledFlag=false;
					uni.showModal({
						title: '设置密码失败',
						content: '两次输入的密码不相同，请重新输入',
						showCancel:false,
						success: function (res) {
						    if (res.confirm) {
						        console.log('用户点击确定');
						    } else if (res.cancel) {
						        console.log('用户点击取消');
						    }
						},
					})
				}
			}
		},
		onLoad(e) {
			this.phoneNum=e.phoneNum;
			// this.phoneNum='15251711315'
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("fastLoginSetPassword.css");
</style>
