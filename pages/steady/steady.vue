<template>
	<view class="">
		<back :pageNameFlag="pageNameFlag"  :pageName='pageName'></back>
		<view class="steady-block" v-if="errorFlag==0">
			<!-- 时间模块 -->
			<view class="time-block">
				<image src="../../static/pic/time.png" class="time-pic"></image>
				<view class="time-text">
					{{showTime}}
				</view>
			</view>
			<!-- 基础信息 -->
			<view class="basic-block">
				<view class="basic-title">
					<image src="../../static/pic/rectangle.png" class="basic-title-left"></image>	
					<view class="basic-title-right">
						越限监测点列表
					</view>
				</view>
				<view class="basic-content"  v-for="steadyState in steadyStateList"  @click="jumpToSteadyDetails(showTime,steadyState.lineName,steadyState.lineIndex,steadyState.timeID)">
					<view class="basic-content-line-one">
						<view class="basic-content-line-one-left">
							{{steadyState.subName}}，{{steadyState.lineName}}发生稳态越限
							<!-- {{steadyState.limitNum}}次 -->
						</view>
						<image class="basic-content-line-one-right" src="../../static/pic/jump.png"></image>
					</view>
					<view class="basic-content-line-two"></view>
					<scroll-view class="basic-content-line-three" scroll-y="true">
						越限详情：{{steadyState.describe}}
					</scroll-view>
					<view class="basic-content-line-four"></view>
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
				pageName:'越限监测点',
				radioFlag:0,
				errorFlag:0,
				steadyIndex:'',
				steadyStateList:[],
				showTime:''
			}
		},
		methods: {
			steadyStateInfo(){
				var that = this;
				uni.request({
					url: that.serverUrl+'/steadymsg/steadyStateInfo',
					method: 'POST',
					data: {
						steadyIndex: that.steadyIndex
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					sslVerify: false,
					success: (res) => {
						uni.hideLoading();
						if (res.data.resultCode == '10000') {
							that.steadyStateList = eval(res.data.data);
						} else {
							that.errorFlag = 1
						}
					},
					fail: (re) => {
						that.errorFlag = 1
					}
				});
			},
			jumpToSteadyDetails(showTime,lineName,lineIndex,timeID){
				uni.navigateTo({
					url:'../steadyDetails/steadyDetails?lineName='+lineName+"&showTime="+showTime+"&lineIndex="+lineIndex+"&timeID="+timeID
				})
			},
			retry(){
				this.errorFlag=0;
				this.steadyStateInfo();
			}
		},
		onLoad(e) {
			this.steadyIndex  = e.steadyIndex;
			this.showTime  = e.showTime;
			this.steadyStateInfo();
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("steady.css");
</style>
