<template>
	<view>
		<back :pageNameFlag="pageNameFlag" :showFlag="showFlag" :pageName='pageName'></back>
		<view class="terminal-body"  v-if="errorFlag==0">
			<view class="terminal-content" @click="jumpToTerminalDetails(device.timeID,device.devIndex)" v-for="device in deviceList">
				<view class="terminal-content-line-one">
					{{showTime}}，{{device.bdzName}}，{{device.devName}}发生终端状态异常{{device.allNum}}次
				</view>
				<view class="terminal-content-line"></view>
				<view class="terminal-content-line-two">
					<image src="../../static/pic/rectangle.png" class="terminal-content-line-two-left"></image>
					<view class="terminal-content-line-two-right">
						异常详情
					</view>
				</view>
				<view class="terminal-content-line-three">
					<view class="terminal-content-line-three-left">
						终端告警
					</view>
					<view class="terminal-content-line-three-right">
						{{device.alarmNum}}次
					</view>
				</view>
				<view class="terminal-content-line"></view>
				<view class="terminal-content-line-four">
					<view class="terminal-content-line-four-left">
						通讯中断
					</view>
					<view class="terminal-content-line-four-right">
						{{device.comOutNum}}次
					</view>
				</view>
				<view class="terminal-content-line"></view>
				<view class="terminal-content-line-five">
					<view class="terminal-content-line-five-left">
						终端流量
					</view>
					<view class="terminal-content-line-five-right">
						{{device.flowNum}}%
					</view>
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
				pageName:'异常终端列表',
				radioFlag:0,
				devMsgIndex:'',
				deviceList:[],
				page:1,
				showTime:'',
				errorFlag:0
			}
		},
		methods: {
			queryDeviceList(){
				var that = this;
				uni.request({
					url: that.serverUrl+'/deviceMsg/deviceList',
					method: 'POST',
					data: {
						devMsgIndex: that.devMsgIndex,
						page:that.page++,
						num:20
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					sslVerify: false,
					success: (res) => {
						uni.hideLoading();
						if (res.data.resultCode == '10000') {
							var list = eval(res.data.data)
							if(list!=null&&list!=undefined&&list!=''&&list!=[]){
								that.deviceList = that.deviceList.concat(list);
							}
							
						} else {
							that.errorFlag = 1
						}
					},
					fail: (re) => {
						that.errorFlag = 1
					}
				});
			},
			jumpToTerminalDetails(timeID,devIndex){
				var that = this;
				uni.navigateTo({
					url:'../terminalDetails/terminalDetails?devIndex='+devIndex+"&timeID="+timeID+"&showTime="+that.showTime
				})
			},
			retry(){
				this.errorFlag=0;
				this.page=1;
				this.queryDeviceList();
			}
		},
		onLoad(e) {
			this.devMsgIndex = e.devMsgIndex;
			this.showTime=e.showTime;
			this.queryDeviceList();
		},
		onReachBottom(){
			this.queryDeviceList();
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("terminal.css");
</style>
