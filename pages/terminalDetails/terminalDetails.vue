<template>
	<view class="">
		<back :pageNameFlag="pageNameFlag" :showFlag="showFlag" :pageName='pageName'></back>
		<view class="terminalDetails-block"  v-if="errorFlag==0">
			<!-- 时间模块 -->
			<view class="time-block">
				<image src="../../static/pic/time.png" class="time-pic"></image>
				<view class="time-text">
					{{showTime}}
				</view>
			</view>
			<!-- 终端基础信息 -->
			<view class="basic-block">
				<view class="basic-body">
					<view class="basic-title">
						<image src="../../static/pic/rectangle.png" class="basic-title-left"></image>	
						<view class="basic-title-right">
							终端基础信息
						</view>
					</view>
					<view class="basic-content">
						{{devMsg.bdzName}}，{{devMsg.devName}},网络参数:{{devMsg.ip}}
					</view>
				</view>
			</view>
			<!-- 终端通讯信息 -->
			<view class="eigenvalues-block">
				<view class="eigenvalues-title">
					<image src="../../static/pic/rectangle.png" class="eigenvalues-title-left"></image>
					<view class="eigenvalues-title-right">
						终端通讯信息
					</view>
				</view>
				<view class="eigenvalues-content">
					<view class="eigenvalues-content-title">
						{{devMsg.devName}}通讯中断{{devMsg.comOutNum}}次，具体如下所示：
					</view>
					<scroll-view scroll-y="true" show-scrollbar="true" class="eigenvalues-content-scroll">
						<view class="" v-for="describe in devMsg.devMsgDescribe">
							<view class="eigenvalues-content-text" >
								{{describe}}
							</view>
						</view>
						
					</scroll-view>
				</view>
			</view>
			<!-- 终端告警信息 -->
			<view class="waveform-block">
				<view class="waveform-title">
					<image src="../../static/pic/rectangle.png" class="waveform-title-left"></image>
					<view class="waveform-title-right">
						终端告警信息
					</view>
				</view>
				<scroll-view scroll-y="true" show-scrollbar="true" class="waveform-content-scroll">
					{{devMsg.alarmInfo}}
				</scroll-view>
			</view>
			<!-- 终端流量信息 -->
			<view class="flow-block">
				<view class="flow-title">
					<image src="../../static/pic/rectangle.png" class="flow-title-left"></image>
					<view class="flow-title-right">
						终端流量信息
					</view>
				</view>
				<view class="flow-content">
					{{devMsg.flowInfo}}
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
				showFlag:0,
				pageName:'终端状态消息详情',
				radioFlag:0,
				devIndex:'',
				timeID:'',
				showTime:'',
				errorFlag:0,
				devMsg:{},
				queryFlag:0
			}
		},
		methods: {
			devMsgInfo(){
				var that = this;
				uni.request({
					url: that.serverUrl+'/deviceMsg/devMsgInfo',
					method: 'POST',
					data: {
						devIndex: that.devIndex,
						timeID:that.timeID
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					sslVerify: false,
					success: (res) => {
						uni.hideLoading();
						if (res.data.resultCode == '10000') {
								that.devMsg = eval(res.data.data);
						} else {
							that.errorFlag = 1
						}
					},
					fail: (re) => {
						that.errorFlag = 1
					}
				});
			},
			retry(){
				this.errorFlag=0;
				this.devMsgInfo();
			}
		},
		onLoad(e) {
			uni.showLoading({
				mask:true,
				});
			this.devIndex=e.devIndex;
			this.timeID=e.timeID;
			this.showTime=e.showTime;
			this.devMsgInfo();
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("terminalDetails.css");
</style>
