<template name="quit">
	<view class="quit-body">
		<view class="quit-block">
			<image class="quit" src="../../static/pic/normal.png" @click="quitTo"></image>
		</view>
		<view class="errorMsg" v-if="showFlag==1">
			<view class="text">{{errorMsg}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"quit",
		data() {
			return {
			
			}
		},
		methods: {
			quitTo(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		props:{
			errorMsg:'',
			showFlag:0
		},
	}
</script>

<style>
	.quit-body{
		width: 300rpx;
		height: 60rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-top: 100rpx;
		margin-left: 30rpx;
	}
	/* 退出 */
	.quit-block{
		width: 34rpx;
		height: 34rpx;
	
	}
	.quit{
		width: 34rpx;
		height: 34rpx;
	}
	/* 退出-结束 */
	/* 错误提示开始 */
	.errorMsg{
		width: 3600rpx;
		height: 60rpx;
		background: #FF6A0B;
		border-radius: 14.5px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-left: 200rpx;
		white-space: nowrap;
	}
	.text{
		color: #FFFFFF;
		font-size: 26rpx;
		white-space: nowrap;
	}
	/* 错误提示结束 */
</style>
