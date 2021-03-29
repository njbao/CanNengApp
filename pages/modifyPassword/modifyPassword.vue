<template>
	<view>
		<back :pageNameFlag="pageNameFlag" :showFlag="showFlag" :pageName='pageName' :errorMsg='errorMsg'></back>
		<view class="text_block">
			<view class="phoneNum">{{text}}</view>
			<view class="phoneNum">
				{{phoneNum}}
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
			<button class="login-vercode" v-if="nextFlag==0">
				<view class="text">下一步</view>
			</button>
			<button class="login-vercode" v-if="nextFlag==1" @click="nextPage" :disabled="disabledFlag">
				<view class="textHigh">下一步</view>
			</button>
		</view>
	</view>
</template>

<script>
	import back from '../../components/back.vue';
	export default {
		data() {
			return {
				phoneNum:'',
				phoneNumTrue:'',
				pageNameFlag:1,
				showFlag:0,
				pageName:'修改密码',
				text:'验证码将发送到绑定手机号',
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
			sendVercodeAgain(){
				var that = this;
				that.sendAgainFlag=1
				uni.request({
				    url: that.serverUrl+'/user/authCode', 
					method:'POST',
				    data: {
				       phone:that.phoneNumTrue,
					   devCode:that.cid(),
					   type:2
				    },
				    header: {
				        'content-type': 'application/x-www-form-urlencoded'
				    },
					sslVerify:false,
				    success: (res) => {
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
					fail() {
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
				if(that.second!=60){
					return;
				}
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
			},
			reset(){
				this.vercode='';
				this.resetFlag=0;
				this.nextFlag=0
			},
			nextPage(){
				uni.navigateTo({
					url:'../modifyPasswordSetpassword/modifyPasswordSetpassword?phoneNum='+this.phoneNumTrue
				})
			}
		},
		onLoad(e) {
			this.phoneNumTrue = e.phoneNum;
			this.phoneNum = e.phoneNum.substr(0,3)+'****'+e.phoneNum.substr(7,11);
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("modifyPassword.css");
</style>
