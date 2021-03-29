<template>
	<view class="">
		<back :errorMsg="errorMsg" :pageNameFlag="pageNameFlag" :showFlag="showFlag" :pageName='pageName'></back>
		<view class="content-block">
			<view class="phone-block">
				<view class="num">+86</view>
				<image class="pull" src="../../static/pic/pull.png"></image>
				<view class="phone">
					<input class="phone-input" placeholder="输入手机号"  :value="phoneNum" placeholder-class="phone-placeholder" type="number" @input="changePhoneNum" maxlength="11" confirm-type="done"/>
				</view>
				<view class="reset-block" @click="reset" v-if="resetFlag==1">
					<image class="phone-pic" src="../../static/pic/close.png" ></image>
				</view>
			</view>
			<view class="login-detail" >
				<view class="choose-block">
					<image src="../../static/pic/nochoose.png" v-if="chooseFlag==0" class="choose-pic" @click="changeChooseFlag(1)"></image>
					<image src="../../static/pic/choose.png" v-if="chooseFlag==1" class="choose-pic" @click="changeChooseFlag(0)"></image>
				</view>
				<view class="login-agreement" @click="changeChooseFlag(2)">已阅读并同意</view>
				<view class="login-user" @click="jumpToUserAgreement">《用户协议》</view>
				<view class="login-user" @click="jumpToPrivacyAgreement">《隐私协议》</view>
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
				pageNameFlag:1,
				showFlag:0,
				pageName:'手机快速注册',
				phoneNum:'',
				resetFlag:0,
				nextFlag:0,
				chooseFlag:1,
				errorMsg:'',
				disabledFlag:false
			}
		},
		methods: {
			reset(){
				this.phoneNum='';
				this.resetFlag=0;
				this.nextFlag=0
			},
			changePhoneNum(e){
				var that = this;
				if(e.detail.value.length>0){
					that.phoneNum=e.detail.value;
					that.resetFlag=1;
				}else{
					that.phoneNum='';
					that.resetFlag=0;
				}
				if(e.detail.value.length>=10&&that.chooseFlag==1){
					that.nextFlag=1
				}else{
					that.nextFlag=0
				}
			},
			nextPage(){
				var that=this;
				that.disabledFlag=true;
				if(that.phoneNum.length!=11){
					that.showFlag=1;
					that.errorMsg='请检查号码';
					setTimeout(function() {
						that.errorMsg='';
						that.showFlag=0;
						that.disabledFlag=false;
					}, 5000);
					return;
				}else{
					that.disabledFlag=false;
					uni.navigateTo({
						url:'../fastLoginVercode/fastLoginVercode?phoneNum='+that.phoneNum
					})
				}
				
			},
			changeChooseFlag(flag){
				var that = this;
				if(flag==2){
					if(that.chooseFlag==1){
						that.chooseFlag=0
					}else{
						that.chooseFlag=1
					}
				}else{
					that.chooseFlag=flag;
				}
				if(that.chooseFlag==0){
					that.nextFlag=0;
					return;
				}
				if(that.chooseFlag==1&&that.phoneNum.length>=10){
					that.nextFlag=1;
					return;
				}
				
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
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("fastLogin.css");
</style>
