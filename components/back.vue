<template name="back">
	<!-- 总高94rpx -->
	<view class="back-body">
		<view class="title-padding">
			
		</view>
		<view class="back-block" v-if="backShowFlag">
			<view @click="backTo" class="backTo-block">
				<view class="back-view">
					<image class="back" src="../../static/pic/back.png"></image>
				</view>
				<view class="back-text">返回</view>
			</view>
			<view class="pageName-block" v-if="pageNameFlag==1">{{pageName}}</view>
		</view>
		<view class="back-solid"></view>
		<view class="errorMsg-block" v-if="showFlag==1">
			<view class="errorMsg" >
				<view class="text">{{errorMsg}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"back",
		data() {
			return {
			
			}
		},
		methods: {
			backTo(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		props:{
			errorMsg:'',//报错提示信息
			showFlag:0,//0-不显示 1-显示报错内容
			pageName:'',//页面名称
			pageNameFlag:0,//0-不显示 1-显示页面名称
			backShowFlag: {
			   type: Number,
			   default: 1,
			}
		},
	}
</script>

<style>
	.title-padding{
		  height: var(--status-bar-height);
	}
	.back-body{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		position: relative;
		background: #FFFFFF;
	}
	/* 返回 */
	.back-block{
		height: 62rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-left: 18rpx;
		margin-top: 30rpx;
		align-items: center;
	}
	.backTo-block{
		height: 62rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.back-view{
		width: 18rpx;
		height: 32rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.back{
		width: 18rpx;
		height: 32rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.back-text{
		height: 32rpx;
		font-size: 30rpx;
		color: #333333;
		margin-left: 18rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	/* 退出-结束 */
	.back-solid{
		height: 2rpx;
		background: rgba(240,240,240,1);
	}
	/* 错误提示开始 */
	.errorMsg-block{
		height: 60rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 150rpx;
		left: 225rpx;
	}
	.errorMsg{
			width: 300rpx;
			height: 60rpx;
			background: #FF6A0B;
			border-radius: 14.5px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			white-space: nowrap;
		}
		.text{
			color: #FFFFFF;
			font-size: 26rpx;
		}
	/* 错误提示结束 */
	/* 页面名开始 */
	.pageName-block{
		width: 250rpx;
		font-size:32rpx;
		color:rgba(23,31,36,1);
		/* margin-left: 198rpx; */
		font-weight: 400;
		 position: absolute;  
		left: 250rpx;
		right: 250rpx;
		text-align: center;
		white-space: nowrap;
	}
	/* 页面名结束 */
</style>
