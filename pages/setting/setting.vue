<template>
	<view>
		<back :pageNameFlag="pageNameFlag" :showFlag="showFlag" :pageName='pageName'></back>
		<view class="option-block">
			<view class="exit-block" @click="exit">退出登录</view>
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
				pageName:'设置',
			}
		},
		methods: {
			exit(){
				uni.showModal({
				    title: '提示',
				    content: '确认退出登录',
				    success: function (res) {
				        if (res.confirm) {
							uni.removeStorageSync("account")
							uni.removeStorageSync("password")
							uni.removeStorageSync("userInfo")
							uni.removeStorageSync("loginTime")
				            uni.reLaunch({
				            	url:'../login/login'
				            })
				        } else if (res.cancel) {
				            console.log('用户点击取消');
							return;
				        }
				    }
				});
			}
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("setting.css");
</style>
