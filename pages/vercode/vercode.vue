<template>
		<view class="body">
			<back :errorMsg="errorMsg" :showFlag="showFlag"></back>
			<view class="content-block">
				<view class="login-explain">输入短信验证码</view>
				<view class="login-detail">
					<view class="login-agreement">验证码已发送至</view>
					<view class="login-user">(+86)</view>
					<view class="login-user">{{phoneNum}}</view>
				</view>
				<view class="num-block">
					<view class="num-view" v-if="valueList[0]!=null&&valueList[0]!=undefined">
						{{valueList[0]}}
					</view>
					<view class="num-view-none" v-else>
					</view>
					<view class="num-view" v-if="valueList[1]!=null&&valueList[1]!=undefined">
						{{valueList[1]}}
					</view>
					<view class="num-view-none" v-else>
					</view>
					<view class="num-view" v-if="valueList[2]!=null&&valueList[2]!=undefined">
						{{valueList[2]}}
					</view>
					<view class="num-view-none" v-else>
					</view>
					<view class="num-view" v-if="valueList[3]!=null&&valueList[3]!=undefined">
						{{valueList[3]}}
					</view>
					<view class="num-view-none" v-else>
					</view>
					<view class="num-view" v-if="valueList[4]!=null&&valueList[4]!=undefined">
						{{valueList[4]}}
					</view>
					<view class="num-view-none" v-else>
					</view>
					<view class="num-view" v-if="valueList[5]!=null&&valueList[5]!=undefined">
						{{valueList[5]}}
					</view>
					<view class="num-view-none" v-else>
					</view>
				</view>
				<view class="receive-again-y" @click="getVerCode" v-if="vercode=='重新获取'">重新获取</view>
				<view class="receive-again-n" v-else>{{vercode}}</view>
			</view>
				<keyboard @valueList="bindKeyEvent"></keyboard>
		</view>
</template>

<script>
	import back from "../../components/back.vue";
	import keyboard from "../../components/keyboard.vue";
	export default {
		data() {
			return {
				phoneNum:'',
				errorMsg:'',
				showFlag:0,
				valueList:[],
				vercode:'重新获取',
				second:60
			}
		},
		methods: {
			bindKeyEvent(val){
				var that = this;
				that.valueList = val
				if(that.valueList.length==6){
					uni.request({
					    url: that.serverUrl+'/user/login', 
						method:'POST',
					    data: {
					       phone:that.phoneNum,
						   devCode:that.cid(),
						   key:that.valueList.join(''),
						   type:0
					    },
					    header: {
					        'content-type': 'application/x-www-form-urlencoded'
					    },
						sslVerify:false,
					    success: (res) => {
							if(res.data.resultCode=='10000'){
								var userInfo = eval(res.data.data);
								userInfo.phoneNum=that.phoneNum;
								uni.setStorageSync("loginTime",new Date())
								uni.setStorageSync('userInfo',userInfo);
								uni.setStorageSync('loginType',0);
								uni.switchTab({
									url:'../information/information'
								})
							}else{
								that.errorMsg=that.showError(res.data.msgCode,res.data.msg);
								that.showFlag=1
								setTimeout(function() {
									that.errorMsg='';
									that.showFlag=0;
								}, 5000);
							}
					    },
						fail:(re)=>{
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
				}
			},
			getVerCode(e){
								var that = this;
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
										that.loadingFlag=true;
										if(res.data.resultCode=='10000'){
											
										}else{
											that.errorMsg=that.showError(res.data.msgCode,res.data.msg);
											that.showFlag=1
											setTimeout(function() {
												that.errorMsg='';
												that.showFlag=0;
											}, 5000);
										}
									},
									fail:(re)=>{
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
								this.readSecond();
						},
						readSecond(){
							var that=this;
							if(that.second!=60){
								return;
							}
							that.second--;
							var intervalID =setInterval(function(){
								that.vercode ="重新获取("+that.second--+")";
							},1000);
							setTimeout(function(){
								clearInterval(intervalID);
								that.vercode ="重新获取";
								that.second=60;
							},61000);
						},
		},
		
		onLoad(data) {
			this.phoneNum=data.phoneNum;
			uni.hideKeyboard();
			this.readSecond();
		},
		components: {
			back,
			keyboard
		}
	}
</script>

<style>
@import url("vercode.css");
</style>
