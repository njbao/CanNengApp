<template>
	<view class="">
		<back :pageNameFlag="pageNameFlag"  :pageName='pageName'></back>
		<view class="steadyDetails-block" v-if="errorFlag==0">
			<!-- 时间模块 -->
			<view class="time-block">
				<view class="time-location">
					{{lineName}}
				</view>
				<view class="time-text">
					{{showTime}}
				</view>
			</view>
			<!-- 指标类型 -->
			<view class="index-block">
				<view class="index-title">
					<image src="../../static/pic/rectangle.png" class="index-title-left"></image>
					<view class="index-title-right">
						指标类型
					</view>
				</view>
				<view class="index-content" @click="jumpToSteadyIndex(steadyTarget.typeCode,steadyTarget.typeName)" v-for="steadyTarget in steadyTargetList">
					<view class="index-content-text">
						{{steadyTarget.typeName}}
					</view>
					<image src="../../static/pic/jump.png" class="index-content-pic"></image>
				</view>
			</view>
		</view>
		<view class="error-block" v-else>
			<view class="error-text">
				网络出错请重试
			</view>
			<button class="retry_button" @click="retry">重试</button>
		</view>
	</view>
</template>

<script>
	import back from '../../components/back.vue';
	export default {
		data() {
			return {
				pageNameFlag:1,
				pageName:'越限监测点详情',
				radioFlag:0,
				lineName:'',
				showTime:'',
				lineIndex:'',
				steadyTargetList:[],
				timeID:'',
				errorFlag:0
			}
		},
		methods: {
			steadyTarget(){
				var that = this;
				uni.request({
					url: that.serverUrl+'/steadymsg/steadyTarget',
					method: 'POST',
					data: {
						lineIndex: that.lineIndex,
						timeID:that.timeID
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					sslVerify: false,
					success: (res) => {
						uni.hideLoading();
						if (res.data.resultCode == '10000') {
							that.steadyTargetList = eval(res.data.data);
						} else {
							that.errorFlag = 1
						}
					},
					fail: (re) => {
						that.errorFlag = 1
					}
				});
			},
			jumpToSteadyIndex(typeCode,typeName){
				var that = this;
				uni.navigateTo({
					url:'../steadyIndex/steadyIndex?typeCode='+typeCode+"&lineIndex="+that.lineIndex+"&timeID="+that.timeID+"&typeName="+typeName
				})
			},
			retry(){
				this.errorFlag=0;
				this.steadyTarget();
			}
		},
		onLoad(e) {
			uni.showLoading({
				mask:true,
				});
			this.showTime=e.showTime;
			this.lineName = e.lineName;
			this.lineIndex=e.lineIndex;
			this.timeID=e.timeID;
			this.steadyTarget();
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("steadyDetails.css");
</style>
