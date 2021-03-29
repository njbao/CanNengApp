<template>
	<view class="">
		<back :pageNameFlag="pageNameFlag"  :pageName='pageName'></back>
		<view class="steadyDetails-block" v-if="errorFlag==0">
			<!-- 时间模块 -->
			<view class="time-block">
				<view class="time-text">
					{{showTime}}
				</view>
			</view>
			<view class="line-fine">
				
			</view>
			<view class="time-block">
				<view class="time-location">
					{{statisticsDetail.name}}
				</view>
			</view>
			<scroll-view scroll-y="true" :style="{height:scrollHeight}">
				<!-- 指标类型 -->
				<view class="index-block" v-if="statisticsDetail.eventInfo.length>0">
					<view class="index-title">
						<image src="../../static/pic/rectangle.png" class="index-title-left"></image>
						<view class="index-title-right">
							暂态信息
						</view>
					</view>
					<view class="index-content" @click="jumpToTransientWave(steadyTarget.eventdetail_index)" v-for="steadyTarget in statisticsDetail.eventInfo">
						<view class="index-content-text">
							{{steadyTarget.describe}}
						</view>
						<image src="../../static/pic/jump.png" class="index-content-pic"></image>
					</view>
				</view>
				<view class="index-block" v-if="steadyTargetList.length>0">
					<view class="index-title">
						<image src="../../static/pic/rectangle.png" class="index-title-left"></image>
						<view class="index-title-right">
							稳态越限信息
						</view>
					</view>
					<view class="index-content1" @click="jumpToSteadyIndex(steadyTarget.typeCode,steadyTarget.typeName)" v-for="steadyTarget in steadyTargetList">
						<view class="index-content-text1">
							{{steadyTarget.typeName}}
						</view>
						<image src="../../static/pic/jump.png" class="index-content-pic"></image>
					</view>
				</view>
			</scroll-view>
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
				pageName:'详细列表',
				lineIndex:'',
				steadyTargetList:[],
				timeID:'',
				errorFlag:0,
				lineInfo:{},
				showTime:'',
				statisticsDetail:{},
				scrollHeight:'',
				steadyTargetList:[]
			}
		},
		methods: {
			scrollH(){
				var that =this;
				var sys = uni.getSystemInfoSync();
				var winWidth = sys.windowWidth;
				var winrate = 750/winWidth;
				var winHeight= sys.windowHeight;
				var statusBarHeight = sys.statusBarHeight;
				that.scrollHeight = parseInt((winHeight-statusBarHeight)*winrate-284)+'rpx';
			},
			queryStatisticsDetail(){
				var that=this;
				if(that.judgeLogin()){
					uni.request({
					    url: that.serverUrl+'/statistics/statisticsDetail', 
						method:'POST',
					    data: {
					       lineIndex:that.lineInfo.lineIndex,
						   timeID:that.timeID
					    },
					    header: {
					        'content-type': 'application/x-www-form-urlencoded'
					    },
						sslVerify:false,
					    success: (res) => {
							if(res.data.resultCode=='10000'){
									var statisticsDetail = res.data.data
									if(statisticsDetail){
										that.statisticsDetail= statisticsDetail
										that.steadyTarget();
									}
							}else{
								uni.showModal({
								    title: '提示',
								    content: '查询失败，请重试',
									confirmText:'重试',
								    success: function (res) {
								        if (res.confirm) {
								            that.queryStatisticsDetail();
								        } else if (res.cancel) {
								            console.log('用户点击取消');
								        }
								    },
								});
							}
					    },
						fail() {
							uni.showModal({
							    title: '提示',
							    content: '网络或服务器异常，请稍后再试',
								showCancel:false,
							    success: function (res) {
							        if (res.confirm) {
							            console.log('用户点击确定');
							        } else if (res.cancel) {
							            console.log('用户点击取消');
							        }
							    }
							});
						}
					});
				}
			},
			steadyTarget(){
				var that = this;
				uni.request({
					url: that.serverUrl+'/steadymsg/steadyTarget',
					method: 'POST',
					data: {
						lineIndex: that.lineInfo.lineIndex,
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
					url:'../steadyIndex/steadyIndex?typeCode='+typeCode+"&lineIndex="+that.lineInfo.lineIndex+"&timeID="+that.timeID+"&typeName="+typeName
				})
			},
			jumpToSteadyDetails(){
				var that =this;
				uni.navigateTo({
					url:'../steadyDetails/steadyDetails?lineName='+that.lineInfo.lineName+"&showTime="+that.showTime+"&lineIndex="+that.lineInfo.lineIndex+"&timeID="+that.timeID
				})
			},
			jumpToTransientWave(eventDetailIndex){
				var that =this;
				uni.navigateTo({
					url:'../transientWave/transientWave?eventDetailIndex='+eventDetailIndex
				})
			}
		},
		components:{
			back
		},
		onLoad(e) {
			var that = this;
			that.lineInfo = JSON.parse(e.lineInfo);
			that.timeID = e.timeID;
			that.showTime=that.formatTime(parseInt(e.timeID));
			that.scrollH();
			that.queryStatisticsDetail();
		}
	}
</script>

<style>
@import url("terminalHistory.css");
</style>
