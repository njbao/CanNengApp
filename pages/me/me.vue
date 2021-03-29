<template>
	<view class="body">
		<!-- 上半部分 -->
		<view class="upper-block"  v-if="roleCode==1">
			<view class="upper-block-inside">
				<view class="system-block">
					<image src="../../static/pic/setting.png" class="system-pic" @click="jumpToSetting"></image>
				</view>
				<view class="role-block">
					<view class="left-block">
							<image class="head-pic" src="../../static/pic/head.png"></image>
							<image class="level-pic" src="../../static/pic/level.png"></image>
					</view>
					<view class="right-block">
							<view class="name">{{showName}}</view>
							<view class="info-block">
								<view class="level-block">{{roleName}}</view>
								<view class="phoneNum-block">{{phoneNum}}</view>
							</view>
					</view>
				</view>
				<view class="level-up" @click="jumpToLevelUp">
					<view class="level-up-pic-block">
						<image src="../../static/pic/level_up.png" class="level-up-pic"></image>
					</view>
					<view class="level-up-text">
						<view class="level-up-text-top">
							角色升级
						</view>
						<view class="level-up-text-bottom">
							填写正确推荐码，即可升级为VIP用户
						</view>
					</view>
					<view class="level-up-now">立即升级</view>
				</view>
			</view>
		</view>
		<view class="upper-block-done" v-else>
			<view class="upper-block-inside-done">
				<view class="system-block">
					<image src="../../static/pic/setting.png" class="system-pic" @click="jumpToSetting"></image>
				</view>
				<view class="role-block">
					<view class="left-block">
							<image class="head-pic" src="../../static/pic/head.png"></image>
							<image class="level-pic-done" src="../../static/pic/level.png"></image>
					</view>
					<view class="right-block">
							<view class="name">{{showName}}</view>
							<view class="info-block">
								<view class="level-block">{{roleName}}</view>
								<view class="phoneNum-block">{{phoneNum}}</view>
							</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 下半部分 -->
		<view class="lower-block">
			<view class="" @click='jumpToModifyPassword'>
				<personalModule name='修改密码' imgsrc='../../static/pic/modify_password.png' ></personalModule>
			</view>
			<view class="" @click='jumpToModifyUserPhoneNum'>
				<personalModule name='账号绑定手机号码更换' imgsrc='../../static/pic/change_phoneNum.png'></personalModule>
			</view>
			<view class="" @click='jumpToUserAgreement'>
				<personalModule name='用户协议' imgsrc='../../static/pic/user_agreement.png'></personalModule>
			</view>
			<view class="" @click='jumpToSystemIntroduce'>
				<personalModule name='系统介绍' imgsrc='../../static/pic/sys_introduce.png'></personalModule>
			</view>
			<view class="" @click='jumpToCompanyIntroduce'>
				<personalModule name='公司简介' imgsrc='../../static/pic/company_introduce.png'></personalModule>
			</view>
			<view class="" @click='jumpToSetNewMessage'>
				<personalModule name='新消息提醒' imgsrc='../../static/pic/set_new_message.png'></personalModule>
			</view>
			<view class="" @click='jumpToUs'>
				<personalModule name='关于我们' imgsrc='../../static/pic/inner_buy.png'></personalModule>
			</view>
		</view>
	</view>
</template>

<script>
	import personalModule from '../../components/personalModule.vue';
	export default {
		data() {
			return {
				phoneNum:'',
				roleName:'',
				userId:'',
				roleCode:1,//0-主用户  1-普通用户  2-vip用户
				userName:'',
				showName:''
			}
		},
		methods: {
			jumpToSetting(){
				uni.navigateTo({
					url:'../setting/setting'
				})
			},
			jumpToLevelUp(){
				uni.navigateTo({
					url:'../levelUp/levelUp'
				})
			},
			jumpToModifyPassword(){
				var that = this;
				uni.navigateTo({
					url:'../modifyPasswordSetpassword/modifyPasswordSetpassword'
				})
			},
			jumpToModifyUserPhoneNum(){
				var that = this;
				uni.navigateTo({
					url:'../modifyUserPhoneNum/modifyUserPhoneNum?phoneNum='+that.phoneNum
				})
			},
			jumpToUserAgreement(){
				var that = this;
				uni.navigateTo({
					url:'../userAgreement/userAgreement'
				})
			},
			jumpToSystemIntroduce(){
				var that = this;
				uni.navigateTo({
					url:'../systemIntroduce/systemIntroduce'
				})
			},
			jumpToCompanyIntroduce(){
				var that = this;
				uni.navigateTo({
					url:'../companyIntroduce/companyIntroduce'
				})
			},
			jumpToSetNewMessage(){
				var that = this;
				uni.navigateTo({
					url:'../setNewMessage/setNewMessage'
				})
			},
			jumpToUs(){
				var that = this;
				uni.navigateTo({
					url:'../us/us'
				})
			}
		},
		onLoad() {
			var that = this;
			if(that.judgeLogin()){
				var userInfo=uni.getStorageSync('userInfo');
				// var userInfo = {};
				// userInfo.phone='15251711315';
				// userInfo.userId='00c37ea1-b5ff-4f35-ba15-51e1c7363e20';
				// userInfo.roleCode=2;
				that.roleName=userInfo.roleName;
				that.userId = userInfo.userId;
				that.phoneNum = userInfo.phone;
				that.roleCode= userInfo.roleCode;
				that.userName = userInfo.userName;
				if(that.userName!=null&&that.userName!=undefined&&that.userName!=''){
					that.showName=that.userName;
				}else{
					that.showName=that.userId.substring(0,15)+'...'
				}
			}	
		},
		onShow() {
			var that = this;
			if(that.judgeLogin()){
				var userInfo=uni.getStorageSync('userInfo');
				if(that.roleCode!=userInfo.roleCode){
					that.roleName=userInfo.roleName;
					that.roleCode= userInfo.roleCode;
				}
			}
		},
		components:{
			personalModule
		}
	}
</script>

<style>
@import url("me.css");
</style>
