<template name = 'personalModule'>
	<view class="personalModule-body">
		<image :src="imgsrc" class="pic"></image>
		<view class="name-block">
			{{name}}
		</view>
		<image src="../static/pic/jump.png" class="jumpTo"></image>
	</view>
</template>

<script>
	export default {
		name:'personalModule',
		data() {
			return {
				
			};
		},
		props:{
			imgsrc:'',
			name:'' 
		}
	}
</script>

<style>
.personalModule-body{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	height:100rpx;
	background: rgba(255,255,255,1);
	align-items: center;
	margin-bottom: 2px;
}
.pic{
	width: 44rpx;
	height: 44rpx;
	margin-left: 40rpx;
}
.name-block{
	margin-left: 20rpx;
	font-size: 30rpx;
	color: rgba(48,50,51,1);
	width: 552rpx;
}
.jumpTo{
	margin-left: 20rpx;
	width: 44rpx;
	height: 44rpx;
}
</style>
